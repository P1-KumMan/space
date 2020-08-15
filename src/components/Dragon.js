import React from "react";
import { useParams } from "react-router-dom";

const Dragon = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default Dragon;
