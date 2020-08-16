import React from "react";
import { useQuery } from "react-query";
import fetch from "./fetch";
import { Link } from "react-router-dom";

const Dragons = () => {
  const { status, data } = useQuery("rocks", () =>
    fetch("https://api.spacexdata.com/v4/dragons")
  );
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;
  console.info(data);
  return (
    <div>
      <h2>Dragons</h2>
      {data.data.map((dragon) => {
        console.log(dragon);
        return (
          <Link key={dragon.id} to={`/dragon/${dragon.id}`}>
            {dragon.id} Dragon
            <br></br>
          </Link>
        );
      })}
    </div>
  );
};

export default Dragons;
