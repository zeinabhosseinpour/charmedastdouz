import React from "react";
import { useParams } from "react-router-dom";

//data
import {
  productslist2,
  child1,
  child2,
  child3,
  color,
  size,
  material,
  productFilter,
} from "../Products/productsList2";

// package
// import { Checkbox } from "antd";
import { Button, theme, Checkbox } from "antd";

const { useToken } = theme;

// style
import classes from "./style.module.css";

const MaterialFilter = (props) => {
  const { token } = useToken();
  const { productid, slug } = useParams();

  const plainOptions = material.map((s) => ({
    label: s.material,
    value: s.material,
  }));

  //   const plainOptions = productslist2.map((c3) => ({
  //     label: c3.title,
  //     value: c3.title,
  //   }));
  const onChangec = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const handleCheckboxChange = (checkedValues) => {
    props.handleonclick(checkedValues);
  };
  const onChange = (checkedValues) => {
    props.setmaterialchecked(checkedValues);
    props.handleonclick();

    // setIsChecked(ischecked);
    // props.setsearchparams((prev) => ({ ...prev, material: checkedValues }));
    // setListChecked([...listChecked, checkedValues]);
    // console.log("listcheck:", listChecked);
    // setSearchParams({ size: checkedValues });
    // console.log("checkedvalues: ", checkedValues);
    // console.log("searchparam:", searchParams);
    // props.setsearchparams({ material: checkedValues });

    // props.setsearchparams({ material: checkedValues });

    // props.handleonclick(checkedValues);
    // props.setmaterialchecked(checkedValues);
    console.log("matcheckedvalues: ", checkedValues);
    // console.log(" props.setsearchparams:", props.setsearchparams);
    // props.setListChecked(checkedValues);
  };
  return (
    <div>
      {/* <div>propscolor: {props.searchparams.get("material")}</div> */}
      {/* <div>
        {productFilter
          .filter((p) => p.material === props.searchparams.get("material"))
          ?.map((item) => (
            <div key={item.id}>
              sss
              {item.size} {item.id}
              bbb {item.title}
              {item.color} {item.material}
            </div>
          ))}
      </div> */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",

          gap: "15px",
          maxHeight: "180px",
          overflow: "auto",
          padding: "10px",
        }}
      >
        <Checkbox.Group
          className={classes["category-header"]}
          options={plainOptions}
          // defaultValue={["Apple"]}
          onChange={onChange}
          // onChange={handleCheckboxChange}
        />
      </ul>
    </div>
  );
};

export default MaterialFilter;
