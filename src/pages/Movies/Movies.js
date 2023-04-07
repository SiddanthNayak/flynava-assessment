import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { getMovies } from "../../api/api";
import style from "./Movies.module.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const navigate = useNavigate();

  const getMoviesList = () => {
    getMovies()
      .then((res) => {
        setMoviesList(res.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNavigation = (id) => {
    navigate(`/movie/${id}`, { state: { id: id } });
  };

  useEffect(() => {
    getMoviesList();
  }, []);

  return (
    <>
      <Header />
      <div className={style.movieGrid}>
        <div className={style.movieContainer}>
          <h1>ACTION MOVIES</h1>
          <div className={style.grid}>
            {moviesList
              ? moviesList.map((movie) => {
                  return (
                    <MovieCard
                      key={movie.id}
                      className={style.card}
                      data={movie}
                      handleNavigation={(id, slug) => handleNavigation(id)}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
