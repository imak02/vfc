import './App.css';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

//scene
const scene=new THREE.Scene();

//creating object
const geometry=new THREE.SphereGeometry(3,64,64);
const material=new THREE.MeshStandardMaterial({

  color: "#00FF22",
}
  );
const mesh=new THREE.Mesh(geometry,material);
scene.add(mesh);

//array
const sizes={
  width:window.innerWidth,
  height:window.innerHeight,
}

//light 
const light=new THREE.PointLight(0xffffff,1,100);
light.position.set(10,10,10);
scene.add(light);

//camera
const camera=new THREE.PerspectiveCamera(45,sizes.width/sizes.height,0.1,100);
camera.position.z=20;
scene.add(camera);


//renderer
const canvas=document.querySelector(".webgl");
const renderer= new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width,sizes.height);
renderer.setPixelRatio(2);
//renderer.render(scene,camera);


//controls
const controls = new OrbitControls(camera,canvas);
controls.enableDamping=true;
controls.enablePan=false;
controls.enableZoom=false;
controls.autoRotate=true;
controls.autoRotateSpeed=5;

//event listener
window.addEventListener('resize',()=>{
  //update sizes
  sizes.width=window.innerWidth;
  sizes.height=window.innerHeight;

  //update camera
  camera.aspect=sizes.width/sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width,sizes.height);
})

const loop= () => {
  controls.update();
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}
loop();


//timeline magic, synchronizes animations
const tl=gsap.timeline({defaults:{duration:1}})
tl.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})
tl.fromTo('nav',{y:"-100%"},{y:"0%"})
tl.fromTo('.title',{opacity:0},{opacity:1})
tl.fromTo('.description',{opacity:0},{opacity:1})


//mouse animation color
let mouseDown=false
let rgb=[]
window.addEventListener('mousedown',()=>(mouseDown=true))
window.addEventListener('mouseup',()=>(mouseDown=false))

window.addEventListener('mousemove',(e)=>{
  if(mouseDown){
    rgb=[
      Math.round((e.pageX/sizes.width)*255),
      Math.round((e.pageY/sizes.height)*255),
      150
    ]
  }

  //lets animate
  let newColor=new THREE.Color(`rgb(${rgb.join(",")})`)
  gsap.to(mesh.material.color,{
    r:newColor.r,
    g:newColor.g,
    b:newColor.b
  })
})

function App() {
  return (
   <>
   <nav>
   <a href="/">Virtual Fitness Coach</a>
   <ul>
    <li>Explore</li>
    <li>Sign Up</li>
   </ul>
   </nav>
   <div><h1 className="title">Give it a Spin</h1></div>
   <div><p className="description">This is a practice of Three.js which can be implemented in our project(Virtual Fitness Coach) to add 3D objects. The idea is to add a human model to the website to show different areas of muscles in the body.</p></div>
   </>
  );
}

export default App;