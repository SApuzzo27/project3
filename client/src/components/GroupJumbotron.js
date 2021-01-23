import React from "react";

function GroupJumbotron({ group, handleLeaveGroup }) {
  return (
    <div className="text-center col-md-12">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4" style={{color:"rgb(5, 5, 93)"}}>{group.clubName}</h1>
          <hr className="my-4" />
          <p className="lead" style={{color:"rgb(5, 5, 93)"}}> Check out what other group members are watching
          </p>
          <hr className="my-4" />
          <button onClick={handleLeaveGroup} className="btn btn-dark">
            Leave Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupJumbotron;
