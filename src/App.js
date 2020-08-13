import React, { useState, useEffect } from "react";

import "./App.css";
import Main from "./components/Main";
import axios from "axios";
import DatePickers from "./components/Date";
import BasicButtonGroup from "./components/Button";
import MediaCard from "./components/Cards";

const App = () => {
  // const [item, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetechItems = async () => {
  //     const result = await axios(
  //       `https://api.spacexdata.com/v4/launches/latest`
  //     );
  //     setItems(result.data);
  //     setIsLoading(false);
  //   };
  //   fetechItems();
  // }, []);
  return (
    <div className="App">
      <Main />
      {/* <DatePickers></DatePickers>
      <BasicButtonGroup />
      <MediaCard items={item} isLoading={isLoading}></MediaCard> */}
    </div>
  );
};

export default App;
