import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function DietCard({ food }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/diet/${food.id}`} className="links" state={food}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={food.image}
            alt="mushroom"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {food.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {food.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
