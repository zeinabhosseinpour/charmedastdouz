// background-color: rgb(243, 248, 253)

import React, { useState } from "react";

import { Link } from "react-router-dom";

// icons
import { PiPhoneLight } from "react-icons/pi";
import { TfiMenu } from "react-icons/tfi";

// style
import classes from "./style.module.css";

// data
import productslist from "../../Components/Shop/Products/productslist";

// images
import img1 from "../../assets/image/52.png";

const NavBar = () => {
  // variables
  const plist = productslist;

  // states
  const [menuItemId, setMenuItemId] = useState(1);
  return (
    <div className={classes["main-header"]}>
      <div className={classes.navbar}>
        <nav className={classes.nav}>
          <ul className={classes["nav-menu"]}>
            <li className={classes["nav-menu_item"]}>
              <Link to="/" className={classes["nav-menu_link"]}>
                <TfiMenu />
                دسته بندی
              </Link>
              <div className={classes["nav-menu_dropdown"]}>
                <div className={classes.rightmenu}>
                  <ul className={classes["ul-right"]}>
                    {plist.map((menuitem) => (
                      <li
                        key={menuitem.id}
                        className={classes["nav-menu_dropdown-item"]}
                      >
                        <Link
                          to={`/product-category/${menuitem.id}/${menuitem.slug}`}
                          onMouseEnter={() => setMenuItemId(menuitem.id)}
                          className={classes["nav-menu_rightdropdown-link"]}
                        >
                          <img
                            src={menuitem.pic}
                            alt="bag"
                            width="20px"
                            height="20px"
                          />
                          {menuitem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={classes.leftmenu}>
                  <ul className={classes["ul-right"]}>
                    {plist
                      .find((i) => menuItemId === i.id)
                      ?.child?.map((m) => (
                        <li
                          key={m.id}
                          className={classes["nav-menu_dropdown-item"]}
                        >
                          <Link
                            to={`/product-category/${m.id}/${m.slug}`}
                            className={classes["nav-menu_leftdropdown-link"]}
                          >
                            {m.title}
                            {m.type !== 0 &&
                              m.child?.map((m2) => (
                                <li
                                  key={m2.id}
                                  className={
                                    classes["nav-submenu_leftdropdown-link"]
                                  }
                                >
                                  <Link
                                    to={`/product-category/${m2.id}/${m2.slug}`}
                                    className={
                                      classes["nav-submenu_leftdropdown-link"]
                                    }
                                  >
                                    {m2.title}
                                  </Link>
                                </li>
                              ))}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </li>
            <li className={classes["nav-menu_item"]}>
              <Link to="/" className={classes["nav-menu_link"]}>
                تخفیف ها و پیشنهادها
              </Link>
            </li>
            <li className={classes["nav-menu_item"]}>
              <Link to="/aboutUs" className={classes["nav-menu_link"]}>
                درباره ما
              </Link>
            </li>
            <li className={classes["nav-menu_item"]}>
              <Link to="/contactUs" className={classes["nav-menu_link"]}>
                تماس با ما
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.phone}>
        <span>09123456789</span>
        <PiPhoneLight className={classes["left-header_img"]} />
      </div>
    </div>
  );
};

export default NavBar;
