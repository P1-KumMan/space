import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import fetch from "./fetch";

const Sat = () => {
    const { status, data } = useQuery("sat", () =>
        fetch("https://api.spacexdata.com/v4/launches/5eb87d30ffd86e000604b378")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    return (
        <div>
            <Carousel>
                {data.data.links.flickr.original.map((img, i) => (
                    <img
                        key={i}
                        style={{
                            width: "100%",
                            height: 400,
                            objectFit: "contain",
                        }}
                        src={img}
                        alt={data.data.name}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default Sat;
