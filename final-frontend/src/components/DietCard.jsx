import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function DietCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to="/diet" className="links">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
            alt="mushroom"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mushroom
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mushroom are umbrella shaped food that is very tasty and popular.
              It contains a variety of essential nutrients required for the
              body.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
