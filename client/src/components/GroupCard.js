import React from "react";
import Col from "./Col";

function GroupCard({ group, joinGroup }) {
  return (
    <Col size="md-4">
      <div className="card mb-3">
        <h3 className="card-header"> {group.clubName} </h3>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-right">
              {" "}
              {group.clubName} movie Goes here!{" "}
            </li>
            <li className="list-group-item list-group-item-warning d-flex justify-content-between align-items-right">
              {group.clubName} movie Goes here!{" "}
            </li>
            <li className="list-group-item list-group-item-danger d-flex justify-content-between align-items-right">
              {group.clubName} movie Goes here!{" "}
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
  );
}

export default GroupCard;
