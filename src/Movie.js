import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

//setState 가 필요하지 않으면 class 컴포넌트가 될필요가 없음, 만약 필요하다면 변경
function Movie({ year, title, summary, poster, genres, rating }) {
   return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <span className="rating">{rating} / 10</span>
      <div className="movie_data">
        <strong className="moive_title">{title}</strong>
        <span className="movie_year">({year})</span>
        <div className="movie_genres">
          <ul className="genres_list">
            {genres.map((genre, index) => (
              <li className="genres_genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <p className="movie_summary">{summary.slice(0, 150)}...</p>
      </div>
      <button type="button" className="bt_like">
        <i className="fas fa-heart fa-2x"></i>
      </button>
    </div>
  );
}
Movie.propTypes = {
  id: propTypes.number.isRequired
  , year: propTypes.number.isRequired
  , title: propTypes.string.isRequired
  , summary: propTypes.string.isRequired
  , poster: propTypes.string.isRequired
  , genres: propTypes.arrayOf(propTypes.string).isRequired
  , rating: propTypes.number.isRequired
};
export default Movie;
