import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

//package
import { Collapse, Switch, ConfigProvider, Checkbox, Radio, Flex } from "antd";

// style
import classes from "./style.module.css";

import { MdOutlineExpandMore } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { IoCheckmark } from "react-icons/io5";

//data
import {
  // import { keys } from 'lodash';
  cartaction,
} from "./../../../Store/CartSlice";
import {
  productslist2,
  child1,
  child2,
  child3,
  color,
  size,
  material,
  category,
  category1,
  category2,
} from "../../../Components/Shop/Products/productsList2";
import { listBreadcrumbs } from "../Products/productslist";

const CategoryFilter = () => {
  //state
  const { productid, slug } = useParams();
  console.log("productidcategory:", productid, slug);
  const [params, setParams] = useSearchParams();
  const [categoryName, setCategoryName] = useState();
  console.log("categoryname:", categoryName);
  const onChangee = (key) => {
    console.log("headerkeycolapsobject:", key);
    setCategoryName(key);
  };
  // useEffect(
  //   (key) => {
  //     if (categoryName) {
  //       setCategoryName(key);
  //     }
  //   },
  //   [categoryName]
  // );

  const onChangec = (checkedValues) => {
    const keys = params.keys();

    const prevParams = {};

    for (var key of keys) {
      prevParams[key] = params.getAll(key);
    }
    console.log("prevparamscat:", prevParams);
    setParams({ ...prevParams, category: checkedValues });
  };
  console.log("paramscat:", params);
  console.log("collaps:", "salam");
  // const onChangec = (checkedValues) => {
  //   console.log("checked = ", checkedValues);
  // };
  // const plainOptions=['چرم گاوی ','چرم هورس گاوی','چرم بزی'];

  // const plainOptions = ['Apple', 'Pear', 'Orange'];
  const plainOptions = productslist2.map((c3) => ({
    label: c3.title,
    value: c3.title,
  }));
  // const plainOptions = category[slug].map((c3) => ({
  //   label: c3.title,
  //   value: c3.title,
  // }));
  console.log("plainoption:", plainOptions);
  const plainOptions2 = Object.keys(category);
  console.log("plainoption2:", plainOptions2);

  const options = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
    },
  ];
  // const options = plainOptions.map(po =>{value:po.value});
  const optionsWithDisabled = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
      disabled: false,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  const text = `
   A dog is a type of domesticated animal.
   Known for its loyalty and faithfulness,
   it can be found as a welcome guest in many households across the world.
 `;
  const itemsNest = [
    {
      key: "1",
      label: "This is panel nest panel",
      children: (
        <div>
          <Checkbox.Group
            className={classes["category-header"]}
            options={plainOptions2}
            defaultValue={["Apple"]}
            onChange={onChangec}
          />
          {/* <br />
          <br />
          <Checkbox.Group
            options={options}
            defaultValue={["Pear"]}
            onChange={onChangec}
          />
          <br />
          <br />
          <Checkbox.Group
            options={optionsWithDisabled}
            disabled
            defaultValue={["Apple"]}
            onChange={onChangec}
          />
           */}
        </div>
      ),
    },
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState();
  const [expandedItem, setExpandedItem] = useState();
  const [expandedItem2, setExpandedItem2] = useState();
  const [ischecked, setIsChecked] = useState(false);
  console.log("activeitem:", activeItem);
  console.log("expandeditem", expandedItem);
  console.log("expanded2:", expandedItem2);
  const inputRef = useRef(null);
  const [isInputVisible, setIsInputVisible] = useState(null);
  // const result = category1.map((p) => ({ id: p.id, childid: p.childId }));
  // const result2 = category1.child.find((p) => p.id.toString() === productid);
  // const result = category1.find((p) => p.id.toString() === productid);
  // const result2 = category1.map((p) =>
  //   p.child.find((c) => c.id.toString() === productid)
  // );

  // // const r = result.childId.find((r) => r.id === productid);
  // console.log(
  //   "result:",
  //   // result,
  //   productid,
  //   // result.slug,
  //   "result2:",
  //   result2,
  //   result2.slug,
  //   result2.category
  // );
  // useEffect(() => {
  //   if (ischecked) {
  //     inputRef.current.checked = true;
  //   } else {
  //     inputRef.current.checked = false;
  //   }
  // }, [ischecked]);
  useEffect(() => {
    setActiveItem(slug);
    // const matchedCategory = category1.find((item) => item.slug === slug);
    // if (matchedCategory) {
    //   setActiveItem(matchedCategory);
    // }
    // setExpandedItem(slug);
    // setExpandedItem2(slug);
    let foundCategory = null;
    const foundObject =
      //   // category1.map((p) =>
      //   //   p.child.find((c) => c.slug === slug)
      //   // );
      category1.find((item) =>
        item.child.some((childItem) => childItem.slug === slug)
      );
    const foundObject2 =
      //  category1.find((item) =>
      //   item.child.map((childItem) =>
      //     childItem.child.find((c) => c.slug === slug)
      //   )
      // );
      category1?.map((p) => {
        // p.child?.map((c) => {
        if (p.hasChild === 1) {
          p.child?.find(
            (c) =>
              // if (c.child) {
              // return
              // c.child?.find((item) => item.slug === slug);
              // }
              c.child?.some((childItem) => childItem.slug === slug)
            // }
          );
        }
      });
    const flattened = foundObject2.flat().filter(Boolean);
    const foundObject4 = category2?.map((p) =>
      p.child?.find((c) =>
        c.child?.some((childItem) => childItem.slug === slug)
      )
    );
    const foundObject3 = listBreadcrumbs.find((item) => item.parent === slug);
    console.log("foundobject3:", foundObject3);
    console.log("foundobject2:", foundObject2, flattened);
    console.log("foundobject:", foundObject);
    if (foundObject) {
      // foundCategory = foundObject.category
      foundCategory = foundObject.slug;
      console.log("foundcategory:", foundCategory);
      //   // foundCategory=
    } else {
      console.log("category not found");
    }
    setExpandedItem(foundCategory);
    // setExpandedItem2(flattened[0]?.slug);
    let foundCategory2 = null;
    if (foundObject3) {
      // foundCategory2 = foundObject3.slug;
      foundCategory2 = foundObject3.parent1;
      console.log("foundcategory2:", foundCategory2);
      foundCategory = foundObject3.category;
      console.log("foundcategory:", foundCategory);
      //   // foundCategory=
    } else {
      console.log("category2 not found");
    }
    setExpandedItem2(foundCategory2);
    setExpandedItem(foundCategory);
  }, [listBreadcrumbs, category1, slug]);

  return (
    <div className={classes["product-category"]}>
      {category1.map((p) => (
        <div
          // className={`${classes["category-header2"]} ${
          //   isExpanded ? "expanded" : ""
          // } `}

          key={p.id}
          // style={{display:"flex",alignItems:"center"}}
          // style={{ backgroundColor: "green" }}
          className={classes[""]}
        >
          {/* <input
            checked={activeItem}
            key={p.id}
            type="radio"
            name="radioid1"
            // value={c.title}
          ></input> */}
          <div className={classes["cat-item"]}>
            <Link
              className={classes["cat-item_link"]}
              to={`/product-category/${p.id}/${p.slug}`}
              // onMouseEnter={() => setMenuItemId(menuitem.id)}
            >
              <label
                className={
                  activeItem === p.slug ? classes.expanded : classes.unexpanded
                }
                onClick={() => {
                  // setIsExpanded(!isExpanded);
                  // if (activeItem !== "")
                  setActiveItem(activeItem === p.slug ? null : p.slug);
                  // else setActiveItem("");
                  // setIsChecked(!ischecked);
                  // setIsInputVisible(true);
                  // setIsInputVisible(p.id === isInputVisible ? null : p.id);
                }}
              >
                {p.title}
                {
                  // inputRef &&
                  // isInputVisible && (
                  // isInputVisible === p.id && (
                  activeItem === p.slug && (
                    // <input
                    //   //   // checked={activeItem}
                    //   //   // ref={inputRef}
                    //   type="checkbox"
                    //   //   name="radioid1"
                    //   //   // value={c.title}
                    // ></input>
                    <IoCheckmark
                      className={`${classes["icon-checkmark"]}
                     ${
                       activeItem === p.slug
                         ? classes.expanded
                         : classes.unexpanded
                     }`}
                    />
                  )
                }
              </label>
            </Link>
            <MdKeyboardArrowRight
              className={
                expandedItem === p.slug
                  ? classes["icon-category_expanded"]
                  : classes["icon-category"]
              }
              onClick={() => {
                // setIsExpanded(!isExpanded);
                // if (activeItem !== "")
                setExpandedItem(expandedItem === p.slug ? null : p.slug);
                // else setActiveItem("");
              }}
            />
          </div>
          {/* <MdOutlineExpandMore style={{ color: "red" }} /> */}

          {expandedItem === p.slug && (
            // p.hasChild === 0 &&

            <div className={classes["list-shown"]}>
              {p.child.map((c) => (
                <div
                  // className={classes["subCategory-list"]}

                  key={c.id}
                >
                  {/* <input
                  checked={activeItem}
                  key={c.id}
                  type="radio"
                  name="radioid"
                  // value={c.title}
                ></input> */}
                  <div
                    className={` ${classes["cat-item"]} ${classes["list-cat_item"]} `}
                  >
                    <Link
                      className={classes["cat-item_link"]}
                      to={`/product-category/${c.id}/${c.slug}`}
                      // onMouseEnter={() => setMenuItemId(menuitem.id)}
                    >
                      <label
                        className={
                          activeItem === c.slug
                            ? classes.expanded
                            : classes.unexpanded
                        }
                        onClick={() => {
                          // setIsExpanded(!isExpanded);
                          // if (activeItem !== "")
                          setActiveItem(activeItem === c.slug ? null : c.slug);
                          // else setActiveItem("");
                          // setIsInputVisible(true);
                          setIsInputVisible(
                            c.id === isInputVisible ? null : c.id
                          );
                        }}
                      >
                        {c.title}
                        {
                          // inputRef &&
                          // isInputVisible && (
                          // isInputVisible === c.id && (
                          activeItem === c.slug && (
                            // <input
                            //   // checked={activeItem}
                            //   // ref={inputRef}
                            //   type="checkbox"
                            //   name="radioid1"
                            //   // value={c.title}
                            // ></input>
                            <IoCheckmark
                              className={`${classes["icon-checkmark"]}
                            ${
                              activeItem === c.slug
                                ? classes.expanded
                                : classes.unexpanded
                            }`}
                            />
                          )
                        }
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
                          // setIsExpanded(!isExpanded);
                          // if (activeItem !== "")
                          setExpandedItem2(
                            expandedItem2 === c.slug ? null : c.slug
                          );
                          // else setActiveItem("");
                        }}
                      />
                    )}
                  </div>
                  {/* <MdOutlineExpandMore /> */}
                  {expandedItem2 === c.slug && c.hasChild === 1 && (
                    <div className={classes["list-shown"]}>
                      {c.child.map((c1) => (
                        <div
                          className={` ${classes["cat-item"]} ${classes["list-cat_subitem"]} `}
                          key={c1.id}
                        >
                          {/* <input
                        checked={activeItem}
                        key={c1.id}
                        type="radio"
                        name="radioid2"
                        // value={c.title}
                      ></input> */}
                          <Link
                            className={classes["cat-item_link"]}
                            to={`/product-category/${c1.id}/${c1.slug}`}
                            // onMouseEnter={() => setMenuItemId(menuitem.id)}
                          >
                            <label
                              className={
                                activeItem === c1.slug
                                  ? classes.expanded
                                  : classes.unexpanded
                              }
                              onClick={() => {
                                // setIsExpanded(!isExpanded);
                                // if (activeItem !== "")
                                setActiveItem(
                                  activeItem === c1.slug ? null : c1.slug
                                );
                                // else setActiveItem("");
                                // setIsInputVisible(true);
                                setIsInputVisible(
                                  c1.id === isInputVisible ? null : c1.id
                                );
                              }}
                            >
                              {c1.title}

                              {
                                // inputRef &&
                                // isInputVisible && (
                                // isInputVisible === c1.id && (
                                activeItem === c1.slug && (
                                  // <input
                                  //   checked={activeItem}
                                  //   // ref={inputRef}
                                  //   type="checkbox"
                                  //   name="radioid1"
                                  //   value={c1.title}
                                  //   key={c1.id}
                                  // />
                                  <IoCheckmark
                                    className={`${classes["icon-checkmark"]}
                     ${
                       activeItem === c1.slug
                         ? classes.expanded
                         : classes.unexpanded
                     } `}
                                  />
                                )
                              }
                            </label>
                          </Link>

                          {/* {c.hasChild !== 1 && (
                        <MdKeyboardArrowRight
                        onClick={() => {
                          // if (activeItem !== "")
                          setExpandedItem(
                            expandedItem === c1.title ? null : c1.title
                          );
                        else setActiveItem("");
                        }}
                        />
                      )} */}
                          {/* <MdOutlineExpandMore /> */}
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
