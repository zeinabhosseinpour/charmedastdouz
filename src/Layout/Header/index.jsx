import React from "react";
import { Link } from "react-router-dom";

// style
import classes from "./style.module.css";
import "./global.css";

// components
import SearchBar from "./SearchBar";
import Login from "./Login";
import ShoppingLogo from "./ShoppingLogo";
import NavBar from "./NavBar";

// images
import logo from "../../assets/image/gradient.png";

import { SlHandbag } from "react-icons/sl";
import { Flex } from "antd";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes["header-div"]}>
        <div className={classes.topheader}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={logo} alt="logo" className={classes["logo-img"]} />
            </Link>
          </div>
          <SearchBar />
          <div className={classes["left-header"]}>
            <Login />
            <ShoppingLogo />
          </div>
        </div>

        <NavBar />
        <hr className={classes["hr-div"]} />
      </div>
    </div>
  );
};

export default Header;
