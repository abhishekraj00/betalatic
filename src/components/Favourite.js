import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PakagesStore } from "../App";
import { getFavList } from "../utils/commonFunction";
import Display from "./Display";
import Navbar from "./Navbar/Navbar";

function Favourite() {
  //univarsal store data
  const pakeges = useContext(PakagesStore);
  const { store } = pakeges;
  const handleClear = () => {
    localStorage.clear();
  };
  return (
    <>
      <Navbar />
      <div className="card p-2 m-2 text-center">
        <div className="card btn-collection">
          <h5
            className="p-2 m-2 card"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Welcome! to Favourite NPM Pakeges
          </h5>
          <a href="/" className="btn btn-light m-2" onClick={handleClear}>
            Clear List
          </a>
        </div>

        {/* function is passing the favourite list array only */}
        {getFavList(store)[0] ? (
          <Display displayData={getFavList(store)} />
        ) : (
          <div className="card m-5 p-5">
            <h4>You Don't have any Favourite Yet... Please Add</h4>
            <span className="emoji">🥹</span>
            <Link className="btn btn-dark m-5" to="/">
              Add Favs
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Favourite;
