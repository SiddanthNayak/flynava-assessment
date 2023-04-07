import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovies } from "../../api/api";
import Header from "../../components/Header/Header";
import style from "./MovieDetails.module.scss";
import { Card, CardMedia } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const MovieDetails = () => {
  const { state } = useLocation();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getVideoDetails = (movieList, id) => {
    return movieList.filter((movie) => movie.id === id);
  };

  const getReleaseYear = (date) => {
    return date?.split("-")[0];
  };

  const convertToMinutes = (time) => {
    if (time) {
      const [hours, minutes] = time.split("h ");
      return parseInt(hours) * 60 + parseInt(minutes);
    }
  };

  useEffect(() => {
    const loadHandler = async () => {
      setIsLoading(true);
      const { id } = await state;
      const { movies } = await getMovies();
      const movie = await getVideoDetails(movies, id);
      console.log(movie[0]);
      setMovie(movie[0]);
      setIsLoading(false);
    };

    loadHandler();
  }, []);

  return (
    <>
      <Header />
      <div className={style.movieGrid}>
        {isLoading ? (
          <h1>Loading Details...</h1>
        ) : (
          <div className={style.container}>
            <div className={style.breadCrumbContainer}>
              <a className={style.breadCrumb} href="/movies">
                Home /
              </a>
              <a className={style.breadCrumb} href="/movies">
                Movies /
              </a>
              <p className={style.activeBreadCrumb}>{movie.title}</p>
            </div>
            <div className={style.detailsContainer}>
              <Card className={style.card}>
                <CardMedia
                  className={style.cardMedia}
                  image={movie.poster}
                  title="Movie Poster Cover"
                />
              </Card>
              <div className={style.details}>
                <h1>{movie.title}</h1>
                <div className={style.wrapper}>
                  <p className={style.rating}>
                    IMDb <span>{movie.imdb_rating}</span>
                  </p>
                  <div className={style.length}>
                    <AccessTimeIcon />
                    <p> {convertToMinutes(movie.length)} min</p>
                  </div>
                </div>
                <p className={style.description}>{movie.overview}</p>
                <div className={style.detailsRow}>
                  <div className={style.row}>
                    <p>
                      Genre:{" "}
                      {movie
                        ? movie?.genres?.map((genre, index) => {
                            return (
                              <span>
                                {genre}
                                {index !== movie?.genres?.length - 1
                                  ? ","
                                  : null}
                              </span>
                            );
                          })
                        : null}
                    </p>
                    <p>
                      {" "}
                      Release: <span>{getReleaseYear(movie.released_on)}</span>
                    </p>
                  </div>
                  <p>
                    Stars:{" "}
                    {movie
                      ? movie?.cast?.map((star, index) => {
                          return (
                            <span>
                              {star}
                              {index !== movie?.genres?.length - 1 ? "," : null}
                            </span>
                          );
                        })
                      : null}
                  </p>
                  <p>
                    Director:{" "}
                    <span className={style.director}>{movie.director}</span>
                  </p>
                  <p>
                    Countr: <span>United States</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
