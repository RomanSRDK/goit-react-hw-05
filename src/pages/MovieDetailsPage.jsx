import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL_IMG = "https://image.tmdb.org/t/p/w300";

function MovieDetailsPage() {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQzM2E0M2MwOGVlZGNlM2JiZmNiYjEwZTk2NzFhOSIsIm5iZiI6MTc0OTg5NjUwNi4zOTIsInN1YiI6IjY4NGQ0ZDNhMWQ2YzRhNDc0ZWJiNGE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QdPDsg81ywDhazmprFyPiSM7lF9J4OAq_E-SSVhqDTw",
      },
    };

    axios.get(url, options).then(({ data }) => setMovieInfo(data));
  }, [movieId]);

  return (
    <>
      <Link to="">Back</Link>

      {movieInfo && (
        <>
          <h1>{movieInfo.title}</h1>
          <img
            src={`${BASE_URL_IMG}${movieInfo.poster_path}`}
            alt={movieInfo.title}
          />
        </>
      )}

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
