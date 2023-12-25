import React, {useState, useEffect} from 'react'
import { useParams, NavLink, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { fetchMovie } from '../../api/getItem'
import defaultImg from '../../images/image.webp'
import Header from 'components/Header/Header';

const MovieDetails = () => {

  const { moviesId } = useParams();
  const [singleMovie, setSingleMovie] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
      fetchMovie(moviesId)
        .then(response => {
          setSingleMovie(response);
        })
        .catch(({ message }) => {
          console.log(message);
        });
  }, [moviesId])
  
  const handelBack = () => {
    navigate(state ?? '/');
  }  
  
  if (!singleMovie) {
    return <p>404 Not Found</p>;
  }

  const { title, poster_path, release_date, vote_average, overview, genres } = singleMovie;
  return (
    <>
      <Header/>
      <button onClick={handelBack}>go back</button>
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