import React from "react";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export const HeroCards = () => {
  return (
    <div>
      <Card>
        <CardMedia image="" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography
              variant="h2"
              component="h2"
              color="inherit"
            ></Typography>
            <Typography
              variant="h4"
              color="inherit"
              component="h4"
            ></Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
