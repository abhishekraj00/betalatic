import { createContext, useEffect, useState } from "react";
import Favourite from "./components/Favourite";
import Search from "./components/Search/Search";
import { getDataFromLocal } from "./utils/commonFunction";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const PakagesStore = createContext();

export default function App() {
  //universal Store
  const [store, setStore] = useState(getDataFromLocal());

  useEffect(() => {
    let data = JSON.stringify(store);
    localStorage.setItem("store", data);
  }, [store]);

  return (
    <div className="App">
      <PakagesStore.Provider value={{ store: store, setStore: setStore }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </BrowserRouter>
      </PakagesStore.Provider>
    </div>
  );
}
