import React from "react";

function MovieCard({ movie, index }) {
  return (
    <div className="col-md-2" key={index}>
      <div className="card savedMoviecard">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://imdb.com/title/${movie.imdbID}`}
        >
          <img
            className="card-img-top "
            src={movie.poster}
            alt={movie.title}
          />
        </a>
        <div className="card-body">
          <p className="card-text ">{movie.title}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
