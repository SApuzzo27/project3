import React from "react";
import Col from "./Col";

function GroupMovies({ movies }) {
  return (
    <Col size="md-6">
      <ul className="list-group">
        {movies.map((item, index) => {
          return (
            <li className="list-group-item list-group-item-dark" key={index}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </Col>
  );
}

export default GroupMovies;
