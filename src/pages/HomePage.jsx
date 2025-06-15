import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "39433a43c08eedce3bbfcbb10e9671a9";

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect((timeWindow = "day") => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${API_KEY}`
      )
      .then(({ data }) => setTrendingMovies(data.results))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <strong>Loading...</strong>}
      <h1>Tranding today</h1>
      {trendingMovies.length > 0 && (
        <ul>
          {trendingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default HomePage;
