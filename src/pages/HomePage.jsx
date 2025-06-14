import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/MoviesApi";

function HomePage() {
  const [trandingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies();
      // console.log(movies);
      setTrendingMovies(movies);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      <ul>
        {trandingMovies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
