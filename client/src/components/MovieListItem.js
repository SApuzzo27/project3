import React from "react";

function MovieListItem(movies) {
  return movies.map((item, index) => (
    <div className="card" key={index}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://imdb.com/${item.imdbID}`}
      >
        <img className="card-img-top" src={item.poster} alt={item.title} />
      </a>
      <div className="card-body">
        <p className="card-text">{item.title}</p>
      </div>
      <div className="card-body">
        <button className="btn btn-dark">Do Something Else</button>
      </div>
    </div>
  ));
}

export default MovieListItem;
