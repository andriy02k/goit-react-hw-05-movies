import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import MovieList from 'components/MovieList/MovieList';
import {trendMoviesFetch} from '../../api/getItem'
  
const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);

  useEffect(() => {
    trendMoviesFetch()
      .then(response => {
        setTrendFilms(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  
  return (
    <>
      <Outlet />
      <MovieList movies={trendFilms} />
    </>
  )
};

export default Home;