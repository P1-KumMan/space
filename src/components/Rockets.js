import React from "react";
import { useQuery } from "react-query";
import fetch from "./fetch";
import { Link } from "react-router-dom";

const Rockets = () => {
  const { status, data } = useQuery("rocks", () =>
    fetch("https://api.spacexdata.com/v4/rockets")
  );
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;
  console.info(data);
  return (
    <div>
      <h2>Rockets</h2>
      {data.data.map((rok) => {
        console.log(rok);
        return (
          <Link key={rok.id} to={`/rocket/${rok.id}`}>
            {rok.id} rocket
            <br></br>
          </Link>
        );
      })}
    </div>
  );
};

export default Rockets;
