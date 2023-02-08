import { apiData } from "../utils/apiData";

//covert Api Data into desired value arr
const coverApiData = (arr) => {
  let k = [];
  let idx = 1;

  arr.forEach((element) => {
    let obj = {
      id: idx++,
      name: element.package.name,
      favorite: false,
      description: "",
    };
    k.push(obj);
  });

  return k;
};
const apiDataArr = coverApiData(apiData);

export default apiDataArr;
