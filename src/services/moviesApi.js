import axios from "axios";

const API_KEY = "39433a43c08eedce3bbfcbb10e9671a9";
// axios.defaults.baseURL = "https://api.themoviedb.org/3/";

// const API_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTQzM2E0M2MwOGVlZGNlM2JiZmNiYjEwZTk2NzFhOSIsIm5iZiI6MTc0OTg5NjUwNi4zOTIsInN1YiI6IjY4NGQ0ZDNhMWQ2YzRhNDc0ZWJiNGE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QdPDsg81ywDhazmprFyPiSM7lF9J4OAq_E-SSVhqDTw";

export const getTrendingMovies = async (timeWindow = "week") => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${API_KEY}`
    )
    .then(({ data }) => data.results)
    .catch((error) => error);
};
