import React, { useContext } from "react";
import { PakagesStore } from "../App";
import Description from "./Description";

function Display({ displayData }) {
  //universal Store
  const pakeges = useContext(PakagesStore);
  const { store, setStore } = pakeges;

  //function manupulate the favourite state of the data
  const handelFavourite = (e) => {
    let arrdata = store.filter((item) => {
      if (item.id === +e.target.id) {
        item.favorite = !item.favorite;
      }
      return item;
    });
    setStore([...arrdata]);
  };
  return (
    <div className="card_container m-4 p-4">
      {displayData.map((item) => {
        return (
          <div key={item.id} className="card p-4">
            <h3>{item.name}</h3>
            <button
              id={item.id}
              className="btn btn-dark"
              onClick={handelFavourite}
            >
              {item.favorite ? "Remove From Favourite" : "Add To Favourite"}
            </button>
            {/* Description component getting Called */}
            <div>
              <Description
                idx={item.id}
                favorite={item.favorite}
                description={item.description}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
