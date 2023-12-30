import React, {useState, useEffect, useRef} from 'react'
import { useParams, NavLink, Link, useLocation, Outlet } from 'react-router-dom';
import { fetchMovie } from '../../api/getItem'
import defaultImg from '../../images/image.webp'

const MovieDetails = () => {

  const { moviesId } = useParams();
  const [singleMovie, setSingleMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.location);

  useEffect(() => {
      fetchMovie(moviesId)
        .then(response => {
          setSingleMovie(response);
        })
        .catch(({ message }) => {
          console.log(message);
        });
  }, [moviesId])
  
  if (!singleMovie) {
    return <p>404 Not Found</p>;
  }

  const { title, poster_path, release_date, vote_average, overview, genres } = singleMovie;
  return (
    <>
      {/* <button onClick={handelBack}>go back</button> */}
      <Link to={backLink.current ?? '/'}>go back</Link>
      <div>
        <img src={
            poster_path ?
            `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
            }
            width={250}
            alt="poster"
            />
        <div>
          <h1>{title}({new Date(release_date).getFullYear()})</h1>
          <p>User Score: {Math.floor(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map((el, idx) => {
            return (
              <p key={idx} className='genres'>{el.name}</p>
            )
          })}
        </div>
        <div>
            <NavLink to="cast">
              Cast
            </NavLink>
            <NavLink to="reviews">
              Reviews
            </NavLink>
        </div>
        <Outlet/>
      </div>
  </>
  )
}

export default MovieDetails