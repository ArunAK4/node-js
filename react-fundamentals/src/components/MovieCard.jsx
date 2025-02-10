import "../css/MovieCard.css";
const MOVIE_POSTER_URL = import.meta.env.VITE_MOVIE_POSTER_URL

function MovieCard({ movie }) {
  function ClickFav() {
    alert("Button Clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`${MOVIE_POSTER_URL}${movie.url}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={ClickFav}>
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
