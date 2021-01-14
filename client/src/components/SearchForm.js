import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <form className="movieSearchForm">
      <div className="form-group">
        <label htmlFor="Search">Search:</label>
        <input
          className="form-control"
          onChange={props.handleInputChange}
          value={props.q}
          name="search"
          type="text"
          placeholder="Search For a Movie"
          id="search"
          required
        />
      </div>
      <br />
      <div>
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-primary float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
