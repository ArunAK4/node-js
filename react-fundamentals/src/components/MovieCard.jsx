import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";
const MOVIE_POSTER_URL = import.meta.env.VITE_MOVIE_POSTER_URL;

function MovieCard({ movie }) {
  const { addFav, removeFav, isFavorite } = useMovieContext();
  const favMovie = isFavorite(movie.id);

  function ClickFav(e) {
    e.preventDefault();
    if (favMovie) removeFav(movie.id)
    else addFav(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`${MOVIE_POSTER_URL}${movie.url}`} alt={movie.title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favMovie ? "active" : ""}`}
            onClick={ClickFav}
          >
            &hearts;
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
