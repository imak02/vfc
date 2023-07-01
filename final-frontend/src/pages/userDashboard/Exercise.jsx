import { useRef, useState, useEffect } from "react";

import {
  Avatar,
  Box,
  Chip,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Check, Pending, PlayArrow, Stop } from "@mui/icons-material";

import * as poseDetection from "@tensorflow-models/pose-detection";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { count } from "../../utils/music";
import Instructions from "../../components/Instructions";
import Dropdown from "../../components/Dropdown";
import { poseImages } from "../../utils/pose_images";
import { POINTS, keypointConnections } from "../../utils/data";
import { drawPoint, drawSegment } from "../../utils/helper";

const videoConstraints = {
  width: 1080,
  height: 600,
  facingMode: "user",
};

let skeletonColor = "rgb(255,255,255)";

let poseList = [
  "Tree",
  "Chair",
  "Cobra",
  "Warrior",
  "Dog",
  "Shoulderstand",
  "Traingle",
];

let interval;

// flag variable is used to help capture the time when AI just detect
// the pose as correct(probability more than threshold)
let flag = false;

const Exercise = () => {
  const [openCamera, setOpenCamera] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [startingTime, setStartingTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [poseTime, setPoseTime] = useState(0);
  const [bestPerform, setBestPerform] = useState(0);
  const [currentPose, setCurrentPose] = useState("Tree");
  const [isStartPose, setIsStartPose] = useState(false);

  useEffect(() => {
    const timeDiff = (currentTime - startingTime) / 1000;
    if (flag) {
      setPoseTime(timeDiff);
    }
    if ((currentTime - startingTime) / 1000 > bestPerform) {
      setBestPerform(timeDiff);
    }
  }, [currentTime, bestPerform, startingTime]);

  useEffect(() => {
    setCurrentTime(0);
    setPoseTime(0);
    setBestPerform(0);
  }, [currentPose]);

  const CLASS_NO = {
    Chair: 0,
    Cobra: 1,
    Dog: 2,
    No_Pose: 3,
    Shoulderstand: 4,
    Traingle: 5,
    Tree: 6,
    Warrior: 7,
  };

  async function initializeBackend() {
    await tf.ready();
    // Backend is ready, continue with other TensorFlow.js operations
  }

  initializeBackend();

  function get_center_point(landmarks, left_bodypart, right_bodypart) {
    let left = tf.gather(landmarks, left_bodypart, 1);
    let right = tf.gather(landmarks, right_bodypart, 1);
    const center = tf.add(tf.mul(left, 0.5), tf.mul(right, 0.5));
    return center;
  }

  function get_pose_size(landmarks, torso_size_multiplier = 2.5) {
    let hips_center = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    let shoulders_center = get_center_point(
      landmarks,
      POINTS.LEFT_SHOULDER,
      POINTS.RIGHT_SHOULDER
    );
    let torso_size = tf.norm(tf.sub(shoulders_center, hips_center));
    let pose_center_new = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    pose_center_new = tf.expandDims(pose_center_new, 1);

    pose_center_new = tf.broadcastTo(pose_center_new, [1, 17, 2]);
    // return: shape(17,2)
    let d = tf.gather(tf.sub(landmarks, pose_center_new), 0, 0);
    let max_dist = tf.max(tf.norm(d, "euclidean", 0));

    // normalize scale
    let pose_size = tf.maximum(
      tf.mul(torso_size, torso_size_multiplier),
      max_dist
    );
    return pose_size;
  }

  function normalize_pose_landmarks(landmarks) {
    let pose_center = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    pose_center = tf.expandDims(pose_center, 1);
    pose_center = tf.broadcastTo(pose_center, [1, 17, 2]);
    landmarks = tf.sub(landmarks, pose_center);

    let pose_size = get_pose_size(landmarks);
    landmarks = tf.div(landmarks, pose_size);
    return landmarks;
  }

  function landmarks_to_embedding(landmarks) {
    // normalize landmarks 2D
    landmarks = normalize_pose_landmarks(tf.expandDims(landmarks, 0));
    let embedding = tf.reshape(landmarks, [1, 34]);
    return embedding;
  }

  const runMovenet = async () => {
    const detectorConfig = {
      modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER,
    };
    const detector = await poseDetection.createDetector(
      poseDetection.SupportedModels.MoveNet,
      detectorConfig
    );
    const poseClassifier = await tf.loadLayersModel(
      "https://models.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
    );
    const countAudio = new Audio(count);
    countAudio.loop = true;
    interval = setInterval(() => {
      detectPose(detector, poseClassifier, countAudio);
    }, 100);
  };

  const detectPose = async (detector, poseClassifier, countAudio) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      let notDetected = 0;
      const video = webcamRef.current.video;
      const pose = await detector.estimatePoses(video);
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      try {
        const keypoints = pose[0].keypoints;
        let input = keypoints.map((keypoint) => {
          if (keypoint.score > 0.4) {
            if (
              !(keypoint.name === "left_eye" || keypoint.name === "right_eye")
            ) {
              drawPoint(ctx, keypoint.x, keypoint.y, 8, "rgb(255,255,255)");
              let connections = keypointConnections[keypoint.name];
              try {
                connections.forEach((connection) => {
                  let conName = connection.toUpperCase();
                  drawSegment(
                    ctx,
                    [keypoint.x, keypoint.y],
                    [
                      keypoints[POINTS[conName]].x,
                      keypoints[POINTS[conName]].y,
                    ],
                    skeletonColor
                  );
                });
              } catch (err) {
                console.log(err);
              }
            }
          } else {
            notDetected += 1;
          }
          return [keypoint.x, keypoint.y];
        });
        if (notDetected > 4) {
          skeletonColor = "rgb(255,255,255)";
          return;
        }
        const processedInput = landmarks_to_embedding(input);
        const classification = poseClassifier.predict(processedInput);

        classification.array().then((data) => {
          const classNo = CLASS_NO[currentPose];
          console.log(data[0][classNo]);
          if (data[0][classNo] > 0.97) {
            if (!flag) {
              countAudio.play();
              setStartingTime(new Date(Date()).getTime());
              flag = true;
            }
            setCurrentTime(new Date(Date()).getTime());
            skeletonColor = "rgb(0,255,0)";
          } else {
            flag = false;
            skeletonColor = "rgb(255,255,255)";
            countAudio.pause();
            countAudio.currentTime = 0;
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  function startYoga() {
    setOpenCamera(true);
    setIsStartPose(true);
    runMovenet();
  }

  function stopPose() {
    setOpenCamera(false);
    setIsStartPose(false);
    clearInterval(interval);
  }

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: (theme) =>
          theme.palette.mode === "light" ? "lightgray" : "#121212",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            flex: 2,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            borderRadius: 3,
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold" color="blueviolet">
              {bestPerform}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Best
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography variant="h4" fontWeight="bold" color="blueviolet">
              {currentPose}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Pose
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography variant="h4" fontWeight="bold" color="blueviolet">
              {poseTime}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Duration
            </Typography>
          </Box>
        </Paper>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {isStartPose ? (
            <Box onClick={stopPose}>
              <Avatar
                sx={{
                  bgcolor: "red",
                  height: 72,
                  width: 72,
                  mb: 2,
                  cursor: "pointer",
                }}
              >
                <Stop fontSize="large" />
              </Avatar>
              <Typography variant="h4" component="h3" fontWeight="bold">
                Stop
              </Typography>
            </Box>
          ) : (
            <Box onClick={startYoga}>
              <Avatar
                sx={{
                  bgcolor: "green",
                  height: 72,
                  width: 72,
                  mb: 2,
                  cursor: "pointer",
                }}
              >
                <PlayArrow fontSize="large" />
              </Avatar>
              <Typography variant="h4" component="h3" fontWeight="bold">
                Start
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Divider sx={{ my: 5, borderBottomWidth: 3 }} />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: 2,
            position: "relative",
            minHeight: 600,
          }}
        >
          {!openCamera && (
            <Box
              width="100%"
              height={600}
              component="img"
              alt="exercise"
              src="https://indatalabs.com/wp-content/uploads/2020/10/human-activity-recognition-fitness-app.jpg"
            />
          )}
          {openCamera && (
            <Box>
              <Webcam
                width="1080px"
                height="600px"
                id="webcam"
                videoConstraints={videoConstraints}
                ref={webcamRef}
                style={{
                  position: "absolute",
                  // padding: "0px",
                }}
              />

              <canvas
                ref={canvasRef}
                id="my-canvas"
                width="1080px"
                height="600px"
                style={{
                  position: "absolute",
                  zIndex: 999,
                }}
              ></canvas>
            </Box>
          )}
        </Box>
        <Box sx={{ flex: 1, order: { xs: -1, md: 0 } }}>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box sx={{ minWidth: 120, my: 2 }}>
                <Dropdown
                  poseList={poseList}
                  currentPose={currentPose}
                  setCurrentPose={setCurrentPose}
                />
              </Box>
              <Box sx={{ height: 200, width: 200 }}>
                <Box
                  component="img"
                  src={poseImages[currentPose]}
                  alt="pose"
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Divider sx={{ my: 2 }} />
              <Instructions currentPose={currentPose} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 5, borderBottomWidth: 3 }} />
    </Box>
  );
};

export default Exercise;
