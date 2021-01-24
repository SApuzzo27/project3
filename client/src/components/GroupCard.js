import React from "react";
import Col from "./Col";
import "../App.css"

function GroupCard({ group, joinGroup }) {
  return (
    <div className="grpMainDiv">
    <Col size="md-4 " >
      <div className="card mb-3 groupCard">
        <h3 className="card-header" style={{color:"rgb(5, 5, 93)"}}> {group.clubName} </h3>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-right">
              {" "}
              {group.clubName}  Top Rated Group Movie {" "}
            </li>
            <li className="list-group-item list-group-item-warning d-flex justify-content-between align-items-right">
              {group.clubName}  2nd Rated Group Movie{" "}
            </li>
            <li className="list-group-item list-group-item-danger d-flex justify-content-between align-items-right">
              {group.clubName}  3rd Rated Group Movie{" "}
            </li>
          </ul>
          <button
            className="btn btn-dark mr-2"
            onClick={() => joinGroup(group)}
          >
            Join!
          </button>
        </div>
      </div>
    </Col>
    </div>
  );
}

export default GroupCard;
