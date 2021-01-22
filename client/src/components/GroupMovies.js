import React from "react";
import Col from "./Col";

function GroupMovies({ movies }) {
  return (
    <Col size="md-6">
      <ul className="list-group scroller">
        {movies.map((item, index) => {
          return (
            <li
              className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center"
              key={index}
            >
              <h3 className="mb-1">{item.title}</h3>

              <div className="image-parent" style={{ maxWidth: "40px" }}>
                <img
                  alt={item.title}
                  className="img-fluid"
                  src={item.poster}
                  style={{ margin: "0 auto" }}
                />
              </div>

              <span className="badge badge-dark badge-pill">
                {item.addedBy || "System Generated"}
              </span>
            </li>
          );
        })}
      </ul>
    </Col>
  );
}

export default GroupMovies;
