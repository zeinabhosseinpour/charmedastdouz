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

// icon
import { SlHandbag } from "react-icons/sl";
import { Flex } from "antd";
import { RiHome2Line } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

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
      <div
        id="base_layout_mobile_footer"
        className={classes["base_layout_mobile_footer"]}
      >
        <div className={classes["footer-mobile"]}>
          <nav className={classes["footer-mobile_nav"]}>
            <ul className={classes["footer-mobile_ul"]}>
              <li className={classes["footer-mobile_li"]}>
                <Link to="/" className={classes["footer-mobile_link"]}>
                  <RiHome2Line className={classes["footer-mobile_icon"]} />
                  <span>خانه</span>
                </Link>
              </li>
              <li className={classes["footer-mobile_li"]}>
                <Link className={classes["footer-mobile_link"]}>
                  <BiCategoryAlt className={classes["footer-mobile_icon"]} />
                  <span>دسته بندی</span>
                </Link>
              </li>
              <li className={classes["footer-mobile_li"]}>
                <Link to={`/cart`} className={classes["footer-mobile_link"]}>
                  {/* <FiShoppingCart className={classes["footer-mobile_icon"]} /> */}
                  <ShoppingLogo className={classes["footer-mobile_icon"]} />
                  <span>سبد خرید</span>
                </Link>
              </li>
              <li className={classes["footer-mobile_li"]}>
                <Link to={`/login`} className={classes["footer-mobile_link"]}>
                  <FaRegUser className={classes["footer-mobile_icon"]} />
                  <span>پروفایل کاربری</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
