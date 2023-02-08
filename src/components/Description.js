import React, { useContext, useState } from "react";
import { PakagesStore } from "../App";

function Description({ idx, favorite, description }) {
  //universal Store geting data by useContext
  const pakeges = useContext(PakagesStore);
  const { store, setStore } = pakeges;

  //toggler State for getting open edit tab for the description
  const [toggle, setToggle] = useState(false);

  //function get call on when user Update the description
  const handleDes = (e) => {
    if (toggle) {
      let arrData = store.map((item) => {
        if (item.id === idx) {
          item.description = e.target.value;
        }
        return item;
      });
      setStore([...arrData]);
    }
  };

  return (
    <>
      <div
        className="card m-2 p-2 text-center"
        style={{ display: !favorite && "none" }}
      >
        {/* description is only show for the favourite List */}
        {favorite && (
          <>
            <h4>Why Favourite</h4>
            <div className="card-small ">
              <input
                style={{ border: toggle ? "1px solid red" : "none" }}
                onChange={handleDes}
                value={description}
              />

              <button
                className="btn btn-dark"
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? "Done" : "Edit"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Description;
