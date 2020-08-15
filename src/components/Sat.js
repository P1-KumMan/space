import React from "react";
import { useParams } from "react-router-dom";

const Sat = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default Sat;
