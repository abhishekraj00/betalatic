import React, { useContext, useState } from "react";
import { PakagesStore } from "../../App";
import { SEARCH } from "../../icon";
import Display from "../Display";
import "./search.css";

function Search() {
  
  //universal Store
  const pakeges = useContext(PakagesStore);
  const { store } = pakeges;

  //state which is storing the Searched Data
  const [serachData, setSearchData] = useState([]);

  //function which is getting call on everyChanges with the input passed in search quary
  const handelSearch = (e) => {
    let newArr = store.filter((item) => {
      let input = e.target.value;
      let itemText = item.name.toUpperCase();
      let inputText = input.toUpperCase();
      let result = itemText.includes(inputText);
      if (result && input) {
        return item;
      }
    });
    setSearchData([...newArr]);
  };

  return (
    <>
      {/* Search Bar  */}
      <div className="search-bar">
        <div className="input-group mb-3">
          <input
            onChange={handelSearch}
            type="text"
            className="form-control"
            placeholder="Search npm Pakeges"
            aria-label="Search npm Pakeges"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-dark icon"
            type="button"
            id="button-addon2"
            onClick={handelSearch}
          >
            {SEARCH}
          </button>
        </div>
      </div>

      {/* Search Data Display hear  */}
      <div className="card p-2 m-2 text-center">
        <h4
          className="p-2 m-2 card"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Search Result of NPM Pakeges
        </h4>
        {/* Display Components passing search result to the components */}
        <Display displayData={serachData} />
      </div>
    </>
  );
}

export default Search;
