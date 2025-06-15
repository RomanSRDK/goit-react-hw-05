import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "39433a43c08eedce3bbfcbb10e9671a9";

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect((timeWindow = "day") => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?language=en-US`;
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQzM2E0M2MwOGVlZGNlM2JiZmNiYjEwZTk2NzFhOSIsIm5iZiI6MTc0OTg5NjUwNi4zOTIsInN1YiI6IjY4NGQ0ZDNhMWQ2YzRhNDc0ZWJiNGE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QdPDsg81ywDhazmprFyPiSM7lF9J4OAq_E-SSVhqDTw",
      },
    };

    axios
      .get(url, options)
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
