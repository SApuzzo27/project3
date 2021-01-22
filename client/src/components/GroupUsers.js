import React from "react";
import Col from "./Col";

function GroupUsers({ members }) {
  return (
    <Col size="md-6">
      <ul className="list-group scroller">
        {members.map((item, index) => {
          return (
            <li className="list-group-item list-group-item-dark" key={index}>
              {item.username}
            </li>
          );
        })}
      </ul>
    </Col>
  );
}

export default GroupUsers;
