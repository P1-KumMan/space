import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import fetch from "./fetch";

const Starlink = () => {
  const { status, data } = useQuery("satalites", () =>
    fetch("https://api.spacexdata.com/v4/starlink")
  );
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;
  console.info(data);
  return (
    <div>
      <h2>Satalites</h2>
      {data.data.map((sat) => {
        return (
          <Link key={sat.id} to={`/characters/${sat.id}`}>
            {sat.id} statalite
            <br></br>
          </Link>
        );
      })}
      <Link to="/">go Home </Link>
    </div>
  );
};

export default Starlink;
