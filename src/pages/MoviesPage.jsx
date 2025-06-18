import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import axios from "axios";

function MoviesPage() {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filmName = searchParams.get("name") ?? "";
  const [debouncedQuery] = useDebounce(filmName, 300);

  useEffect(() => {
    if (!debouncedQuery) return;
    const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${debouncedQuery}`;
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQzM2E0M2MwOGVlZGNlM2JiZmNiYjEwZTk2NzFhOSIsIm5iZiI6MTc0OTg5NjUwNi4zOTIsInN1YiI6IjY4NGQ0ZDNhMWQ2YzRhNDc0ZWJiNGE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QdPDsg81ywDhazmprFyPiSM7lF9J4OAq_E-SSVhqDTw",
      },
    };

    axios.get(url, options).then((res) => console.log(res));
  }, [debouncedQuery]);

  const changeSearchQuery = (evt) => {
    const newQuery = evt.target.value;
    const nextSearchParams = new URLSearchParams(searchParams);
    if (newQuery !== "") {
      nextSearchParams.set("name", newQuery);
    } else {
      nextSearchParams.delete("name");
    }
    setSearchParams(nextSearchParams);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Find your movie for tonight"
        value={filmName}
        onChange={changeSearchQuery}
      />
    </>
  );
}

export default MoviesPage;
