import React from "react";
import "./Movie.css";

function Movie({
  title,
  year,
  rated,
  genre,
  runtime,
  director,
  actors,
  plot,
  poster,
  type,
  imdbID,
  saveMovie,
}) {
  return (
    <div className="card movieCard m-4" id={imdbID}>
      <img className="card-img-top movieCardPoster" src={poster} alt={title} />

      <div className="card-body">
        <h3>{title}</h3>
        <p>{plot}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Director: {director}</li>
        <li className="list-group-item">Year: {year}</li>
        <li className="list-group-item">Rating: {rated}</li>
        <li className="list-group-item">Actors: {actors}</li>
        <li className="list-group-item">Runtime: {runtime}</li>
        <li className="list-group-item">Genre: {genre}</li>
        <li className="list-group-item">Type: {type}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-dark" onClick={saveMovie}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Movie;
