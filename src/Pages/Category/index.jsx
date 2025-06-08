import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//  style
import classes from "./style.module.css";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";

//   data
import { category1 } from "../../Components/Shop/Products/productsList2";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";

const Category = () => {
  // states
  const { productid, slug } = useParams();
  const [menuItemId, setMenuItemId] = useState(1);
  const [menuItem, setMenuItem] = useState();
  const [menuItemSlug, setMenuItemSlug] = useState();
  //   states

  const [activeItem, setActiveItem] = useState(1);
  const [expandedItem, setExpandedItem] = useState();
  const [expandedItem2, setExpandedItem2] = useState();
  const [isInputVisible, setIsInputVisible] = useState(null);

  useEffect(() => {
    if (category1.length > 0) {
      setMenuItem(category1[0].title);
    }
  }, []);

  return (
    <Fragment>
      <Header />

      <div className={classes["category-mobile"]}>
        <ul className={classes["category-list"]}>
          {category1.map((p) => (
            <li
              key={p.id}
              className={`${classes["category-item"]}
                                          ${
                                            activeItem === p.id
                                              ? classes["category-item-active"]
                                              : ""
                                          }`}
              onClick={() => {
                setActiveItem(p.id),
                  setMenuItem(p.title),
                  setMenuItemSlug(p.slug);
              }}
            >
              <img src={p.pic} alt="bag" width="20px" height="20px" />
              <span className={classes["nav-menu_rightdropdown-linkitem"]}>
                {p.title}
              </span>
            </li>
          ))}
        </ul>
        <div className={classes["left-submenu"]}>
          <div>
            <Link
              className={classes["cat-item_link"]}
              to={`/product-category/${activeItem}/${menuItemSlug}`}
            >
              همه محصولات {menuItem}
            </Link>
          </div>
          {activeItem !== null &&
            category1[activeItem - 1].child.map((p2, i) => (
              <div key={i} className={classes["left-menu-itemm"]}>
                <li key={i} className={classes["left-menu-item"]}>
                  <Link
                    to={`/product-category/${p2.id}/${p2.slug}`}
                    className={classes["left-menu-link"]}
                  >
                    {p2.title}
                  </Link>
                  {p2.hasChild === 1 && (
                    <MdKeyboardArrowRight
                      className={
                        expandedItem2 === p2.slug
                          ? classes["icon-category_expanded"]
                          : classes["icon-category"]
                      }
                      onClick={() => {
                        setExpandedItem2(
                          expandedItem2 === p2.slug ? null : p2.slug
                        );
                      }}
                    />
                  )}
                </li>
                {expandedItem2 === p2.slug && p2.hasChild === 1 && (
                  <div className={classes["list-submenu"]}>
                    {p2.child.map((c1) => (
                      <li key={i} className={classes["left-submenu-item"]}>
                        <Link
                          to={`/product-category/${c1.id}/${c1.slug}`}
                          className={classes["left-submenu-link"]}
                        >
                          {c1.title}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Category;
