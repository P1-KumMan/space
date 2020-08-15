import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Starlink from "./Starlink";
import Sat from "./Sat";
import Rockets from "./Rockets";
import Rocket from "./Rocket";
import Dragon from "./Dragon";
import Dragons from "./Dragons";

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/dragons">Dragon</Link>
        <Link to="/Rockets">Rockets</Link>
        <Link to="/Starlink">StarLink</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/starlink" component={Starlink} />
          <Route path="/sat/:id" component={Sat} />
          <Route path="/rockets" component={Rockets} />
          <Route path="/rocket/:id" component={Rocket} />
          <Route path="/dragons" component={Dragons} />
          <Route path="/dragon/:id" component={Dragon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Header;
