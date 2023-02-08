import NPM_PACKAGES from "./npmData";

//function to get favourite list
export const getFavList = (arr = []) => {
  return arr.filter((item) => item.favorite === true);
};

//function to get Local Data if present
export const getDataFromLocal = () => {
  let k = localStorage.getItem("store");
  if (k) {
    return JSON.parse(k);
  } else {
    return NPM_PACKAGES;
  }
};
