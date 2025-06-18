import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import styles from "./MovieList.module.css";

function MovieList({ trendingMovies }) {
  return (
    <ul className={styles.list}>
      {trendingMovies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <BiCameraMovie className={styles.icon} />
          <Link to={`/movies/${movie.id}`} className={styles.link}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
