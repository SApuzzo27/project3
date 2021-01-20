import React from "react";
import Col from "./Col";

function GroupCard({ group, joinGroup }) {
  return (
    <Col size="md-3">
      <div className="card mb-3">
        <h3 className="card-header"> {group.clubName} </h3>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <button className="btn btn-dark mr-2" onClick={joinGroup}>
            Join!
          </button>
        </div>
      </div>
    </Col>
  );
}

export default GroupCard;
