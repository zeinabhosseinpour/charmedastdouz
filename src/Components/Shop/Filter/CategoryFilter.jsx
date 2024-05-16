import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//  style
import classes from "./style.module.css";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";

//   data
import { category1 } from "../../../Components/Shop/Products/productsList2";
import { listBreadcrumbs } from "../Products/productslist";

const CategoryFilter = () => {
  //   states
  const { productid, slug } = useParams();
  const [activeItem, setActiveItem] = useState();
  const [expandedItem, setExpandedItem] = useState();
  const [expandedItem2, setExpandedItem2] = useState();
  const [isInputVisible, setIsInputVisible] = useState(null);

  //  side effect
  useEffect(() => {
    setActiveItem(slug);

    let foundCategory = null;
    const foundObject = category1.find((item) =>
      item.child.some((childItem) => childItem.slug === slug)
    );

    const foundObject3 = listBreadcrumbs.find((item) => item.parent === slug);

    if (foundObject) {
      foundCategory = foundObject.slug;
    } else {
      console.log("category not found");
    }
    setExpandedItem(foundCategory);
    let foundCategory2 = null;
    if (foundObject3) {
      foundCategory2 = foundObject3.parent1;

      foundCategory = foundObject3.category;
    } else {
      console.log("category2 not found");
    }
    setExpandedItem2(foundCategory2);
    setExpandedItem(foundCategory);
  }, [listBreadcrumbs, category1, slug]);

  return (
    <div className={classes["product-category"]}>
      {category1.map((p) => (
        <div key={p.id} className={classes[""]}>
          <div className={classes["cat-item"]}>
            <Link
              className={classes["cat-item_link"]}
              to={`/product-category/${p.id}/${p.slug}`}
            >
              <label
                className={
                  activeItem === p.slug ? classes.expanded : classes.unexpanded
                }
                onClick={() => {
                  setActiveItem(activeItem === p.slug ? null : p.slug);
                }}
              >
                {p.title}
                {activeItem === p.slug && (
                  <IoCheckmark
                    className={`${classes["icon-checkmark"]}
                     ${
                       activeItem === p.slug
                         ? classes.expanded
                         : classes.unexpanded
                     }`}
                  />
                )}
              </label>
            </Link>
            <MdKeyboardArrowRight
              className={
                expandedItem === p.slug
                  ? classes["icon-category_expanded"]
                  : classes["icon-category"]
              }
              onClick={() => {
                setExpandedItem(expandedItem === p.slug ? null : p.slug);
              }}
            />
          </div>
          {expandedItem === p.slug && (
            <div className={classes["list-shown"]}>
              {p.child.map((c) => (
                <div key={c.id}>
                  <div
                    className={` ${classes["cat-item"]} ${classes["list-cat_item"]} `}
                  >
                    <Link
                      className={classes["cat-item_link"]}
                      to={`/product-category/${c.id}/${c.slug}`}
                    >
                      <label
                        className={
                          activeItem === c.slug
                            ? classes.expanded
                            : classes.unexpanded
                        }
                        onClick={() => {
                          setActiveItem(activeItem === c.slug ? null : c.slug);
                          setIsInputVisible(
                            c.id === isInputVisible ? null : c.id
                          );
                        }}
                      >
                        {c.title}
                        {activeItem === c.slug && (
                          <IoCheckmark
                            className={`${classes["icon-checkmark"]}
                            ${
                              activeItem === c.slug
                                ? classes.expanded
                                : classes.unexpanded
                            }`}
                          />
                        )}
                      </label>
                    </Link>
                    {c.hasChild === 1 && (
                      <MdKeyboardArrowRight
                        className={
                          expandedItem2 === c.slug
                            ? classes["icon-category_expanded"]
                            : classes["icon-category"]
                        }
                        onClick={() => {
                          setExpandedItem2(
                            expandedItem2 === c.slug ? null : c.slug
                          );
                        }}
                      />
                    )}
                  </div>
                  {expandedItem2 === c.slug && c.hasChild === 1 && (
                    <div className={classes["list-shown"]}>
                      {c.child.map((c1) => (
                        <div
                          className={` ${classes["cat-item"]} ${classes["list-cat_subitem"]} `}
                          key={c1.id}
                        >
                          <Link
                            className={classes["cat-item_link"]}
                            to={`/product-category/${c1.id}/${c1.slug}`}
                          >
                            <label
                              className={
                                activeItem === c1.slug
                                  ? classes.expanded
                                  : classes.unexpanded
                              }
                              onClick={() => {
                                setActiveItem(
                                  activeItem === c1.slug ? null : c1.slug
                                );

                                setIsInputVisible(
                                  c1.id === isInputVisible ? null : c1.id
                                );
                              }}
                            >
                              {c1.title}

                              {activeItem === c1.slug && (
                                <IoCheckmark
                                  className={`${classes["icon-checkmark"]}
                     ${
                       activeItem === c1.slug
                         ? classes.expanded
                         : classes.unexpanded
                     } `}
                                />
                              )}
                            </label>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
