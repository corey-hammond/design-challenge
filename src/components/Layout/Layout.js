import React from "react";
import { Link } from "react-router-dom";
import SVG from "../SVG";
import Menu from "../Menu/Menu";
import classes from "./Layout.module.css";

const layout = props => {
  return (
    <header className={classes.Nav}>
      <div className={classes.Menu}>
        <Link to="/design-challenge">
          <SVG />
        </Link>
        <Menu />
      </div>

      <div className={classes.Contact}>
        <a className={classes.ContactButton}>Contact Us</a>
      </div>
    </header>
  );
};

export default layout;
