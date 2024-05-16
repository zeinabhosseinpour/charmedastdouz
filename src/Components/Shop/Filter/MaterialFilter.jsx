//  data
import { material } from "../Products/productsList2";

//  package

import { Checkbox } from "antd";

//  style
import classes from "./style.module.css";

//  component
import useSearchParamsFilter from "../../../Hooks/useSearchParamsFilter";

const MaterialFilter = () => {
  //  states
  const [updateSearchParams, componentParams] =
    useSearchParamsFilter("material");

  //   variables
  const materialOptions = material.map((s) => ({
    label: s.material,
    value: s.material,
  }));

  //   handlers
  const onChange = (checkedValues) => {
    updateSearchParams({ material: checkedValues });
  };

  return (
    <div>
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
          value={componentParams}
          className={classes["category-header"]}
          options={materialOptions}
          onChange={onChange}
        />
      </ul>
    </div>
  );
};

export default MaterialFilter;
