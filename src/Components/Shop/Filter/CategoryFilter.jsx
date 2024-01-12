import React from "react";
import { useParams } from "react-router-dom";

//package
import { Collapse, Switch, ConfigProvider, Checkbox, Flex } from "antd";

// style
import classes from "./style.module.css";
import { useSearchParams } from "react-router-dom";

//data
import {
  productslist2,
  child1,
  child2,
  child3,
  color,
  size,
  material,
} from "../../../Components/Shop/Products/productsList2";

const CategoryFilter = () => {
  //state
  const [params, setParams] = useSearchParams();

  const { productid, slug } = useParams();

  const onChangec = (checkedValues) => {
    const keys = params.keys();

    const prevParams = {};

    for (var key of keys) {
      prevParams[key] = params.getAll(key);
    }

    setParams({ ...prevParams, category: checkedValues });
  };
  // const plainOptions=['چرم گاوی ','چرم هورس گاوی','چرم بزی'];

  // const plainOptions = ['Apple', 'Pear', 'Orange'];
  const plainOptions = productslist2.map((c3) => ({
    label: c3.title,
    value: c3.title,
  }));
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
            options={plainOptions}
            defaultValue={["Apple"]}
            onChange={onChangec}
          />
          <br />
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
          ,
        </div>
      ),
    },
  ];
  return (
    <div>
      <Collapse items={itemsNest} defaultActiveKey="1" />
    </div>
  );
};

export default CategoryFilter;
