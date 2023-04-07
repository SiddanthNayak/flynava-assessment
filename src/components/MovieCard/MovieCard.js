import React from "react";
import style from "./MovieCard.module.scss";
import { Card, CardMedia, CardContent } from "@mui/material";

const MovieCard = ({ data, handleNavigation }) => {
  return (
    <Card className={style.card} onClick={() => handleNavigation(data.id)}>
      <CardMedia
        className={style.cardMedia}
        image={data.poster}
        title="Movie Poster Cover"
      />
      <CardContent className={style.cardContent}>
        <p>{data.title}</p>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
