import React from "react";

function MovieListItem({ title, poster, imdbID }) {
  return (
    <div class="card" style="width: 18rem;">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://imdb.com/${imdbID}`}
      >
        <img class="card-img-top" src={poster} alt={title} />
      </a>
      <div class="card-body">
        <p class="card-text">{title}</p>
      </div>
    </div>
  );
}

export default MovieListItem;
