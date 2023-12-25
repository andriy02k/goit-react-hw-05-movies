import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
          {movies && movies.map(({ id, name, title }) => {
              return (
                  <li key={id} className={css.item}>
                      <Link to={`/movies/${id}`} className={css.link} state={location}>
                          <h3 className={css.title}>{name || title}</h3>
                      </Link>
                  </li>
              )
          })}
    </ul>
  )
}

export default MovieList