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
} from "../../../Components/Shop/Products/productsList2";

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
  const result = category1.map((p) => ({ id: p.id, childid: p.childId }));
  // const result = category1.childId.find((p) => p.id === productid);
  // const r = result.childId.find((r) => r.id === productid);
  console.log("result:", result);
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
  }, [slug]);
  return (
    <div style={{ maxHeight: "300px", overflow: "auto", width: "400px" }}>
      {category1.map((p) => (
        <div
          // className={`${classes["category-header2"]} ${
          //   isExpanded ? "expanded" : ""
          // } `}

          key={p.id}
          // style={{display:"flex",alignItems:"center"}}
          style={{ backgroundColor: "green" }}
        >
          {/* <input
            checked={activeItem}
            key={p.id}
            type="radio"
            name="radioid1"
            // value={c.title}
          ></input> */}
          <div
            style={{
              backgroundColor: "pink",
              display: "flex",
              // justifyContent: "space-between",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Link
              style={{ textDecoration: "none" }}
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
                    <IoCheckmark />
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

          {expandedItem === p.slug &&
            // p.hasChild === 0 &&
            p.child.map((c) => (
              <div
                // className={classes["subCategory-list"]}

                style={{ marginRight: "15px", backgroundColor: "yellow" }}
                key={c.id}
              >
                {/* <input
                  checked={activeItem}
                  key={c.id}
                  type="radio"
                  name="radioid"
                  // value={c.title}
                ></input> */}
                <Link
                  style={{ textDecoration: "none" }}
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
                      setIsInputVisible(c.id === isInputVisible ? null : c.id);
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
                        <IoCheckmark />
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
                {/* <MdOutlineExpandMore /> */}
                {expandedItem2 === c.slug &&
                  c.hasChild === 1 &&
                  c.child.map((c1) => (
                    <div
                      style={{ marginRight: "15px", backgroundColor: "blue" }}
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
                        style={{ textDecoration: "none" }}
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
                        </label>
                      </Link>
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
                            className={
                              activeItem === c1.slug
                                ? classes.expanded
                                : classes.unexpanded
                            }
                          />
                        )
                      }
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
            ))}
        </div>
      ))}

      {/* <Collapse
        items={itemsNest}
        defaultActiveKey="1"
        bordered={false}
        expandIconPosition="end"
      />

      <Checkbox onChange={onChange}>Checkbox</Checkbox> */}
      {category1.map((p) => (
        <Collapse
          // defaultActiveKey={["1"]}
          onChange={onChange}
          key={p.id}
          bordered={false}
          // expandIconPosition="end"
          style={{ backgroundColor: "white" }}
          styles={{ lineHeight: "0.5" }}
          contentBg="red"
        >
          <Collapse.Panel
            // onClick={() => setIsInputVisible(true)}
            key={p.id}
            // {...p.hasChild ===0 ? showArrow="false" : showArrow="true"}
            header={
              <Link
                style={{ textDecoration: "none" }}
                to={`/product-category/${p.id}/${p.slug}`}
                // onMouseEnter={() => setMenuItemId(menuitem.id)}
              >
                <span>{p.title}</span>
                {/* {isInputVisible && (
                  <Checkbox checked={isInputVisible}></Checkbox>
                )} */}
                {/* <Checkbox onChange={onChange}>
                  plist2:{p.title}
                  {p.id}
                </Checkbox> */}
              </Link>
            }
          >
            {/* <p>paragraf {p.title}</p> */}
            {/* <Collapse
              // defaultActiveKey={["2"]}
              onChange={onChange}
              key={p.id}
              bordered={false}
              expandIconPosition="end"
            >
              <Collapse.Panel
                header={
                  <Link
                    to={`/product-category/${p.id}/${p.slug}`}
                    // onMouseEnter={() => setMenuItemId(menuitem.id)}
                  > */}
            {p.child.map((c) => (
              <Collapse
                // defaultActiveKey={["2"]}
                onChange={onChange}
                key={c.id}
                bordered={false}
                // expandIconPosition="end"
                style={{ backgroundColor: "white" }}
              >
                <Collapse.Panel
                  header={
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/product-category/${c.id}/${c.slug}`}
                      // onMouseEnter={() => setMenuItemId(menuitem.id)}
                    >
                      <span>{c.title}</span>
                      {/* <Checkbox onChange={onChange} key={c.id}>
                        plist3:{c.title}
                      </Checkbox>
                      <Radio onChange={onChange} key={c.id}>
                        radio
                      </Radio> */}
                    </Link>
                  }
                >
                  {c.hasChild === 1 &&
                    c.child.map((c1) => (
                      <Collapse
                        // defaultActiveKey={["2"]}
                        onChange={onChange}
                        key={c1.id}
                        bordered={false}
                        // expandIconPosition="end"
                        showArrow={false}
                        style={{ backgroundColor: "white" }}
                      >
                        <Collapse.Panel
                          showArrow={false}
                          header={
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/product-category/${c1.id}/${c1.slug}`}
                              // onMouseEnter={() => setMenuItemId(menuitem.id)}
                            >
                              <span>{c1.title}</span>
                              {/* <Checkbox onChange={onChange} key={c1.id}>
                                plist4:{c1.title}
                              </Checkbox> */}
                            </Link>
                          }
                        ></Collapse.Panel>
                      </Collapse>
                    ))}
                </Collapse.Panel>
              </Collapse>
            ))}
            {/* </Link>
                }
                key={p.id}
              ></Collapse.Panel>
            </Collapse> */}
            {/* <Link
              to={`/product-category/${p.id}/${p.slug}`}
              // onMouseEnter={() => setMenuItemId(menuitem.id)}
            >
              <Checkbox onChange={onChange}>plist2:{p.title}</Checkbox>
            </Link> */}
          </Collapse.Panel>
        </Collapse>
      ))}
      {/* {plainOptions2.map((p) => (
        <Collapse
          // defaultActiveKey={["1"]"}
          onChange={() => onChangee(Collapse.header)}
          key={plainOptions2}
          bordered={false}
          expandIconPosition="end"
        >
          <Collapse.Panel header={<Checkbox onChange={onChange}>{p}</Checkbox>}> */}
      {/* <p>paragraf {p.title}</p> */}
      {/* <Link
              to={`/product-category/${p.id}/${p.slug}`}
              // onMouseEnter={() => setMenuItemId(menuitem.id)}
            >
              <Checkbox onChange={onChange}>plainoption2:{p}</Checkbox>
            </Link> */}
      {/* {category[categoryName].map((c) => (
              <Collapse
                // defaultActiveKey={["1"]}
                onChange={() => onChangee(Collapse.header)}
                key={c}
                bordered={false}
                expandIconPosition="end"
              >
                <Collapse.Panel
                  header={<Checkbox onChange={onChange}>{c}</Checkbox>}
                ></Collapse.Panel>
              </Collapse>
            ))}
            {c[categoryName].map((c1) => (
              <Collapse
                // defaultActiveKey={["1"]}
                onChange={() => onChangee(Collapse.header)}
                key={c1}
                bordered={false}
                expandIconPosition="end"
              >
                <Collapse.Panel
                  header={<Checkbox onChange={onChange}>{c1}</Checkbox>}
                ></Collapse.Panel>
              </Collapse>
            ))} */}
      {/* </Collapse.Panel>
        </Collapse>
      ))} */}
    </div>
  );
};

export default CategoryFilter;
