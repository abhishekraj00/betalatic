import React, { useContext } from "react";
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
            Favourite List Of NPM Pakeges
          </h5>
          <button href="/" className="btn btn-light " onClick={handleClear}>
            Clear localStorage
          </button>
        </div>

        {/* function is passing the favourite list array only */}
        <Display displayData={getFavList(store)} />
      </div>
    </>
  );
}

export default Favourite;
