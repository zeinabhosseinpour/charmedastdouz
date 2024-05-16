import { useParams } from "react-router-dom";

//data
import { size } from "../Products/productsList2";

// package
import { Checkbox } from "antd";

// style
import classes from "./style.module.css";

// components
import useSearchParamsFilter from "../../../Hooks/useSearchParamsFilter";

const SizeFilter = () => {
  // states
  const [updateSearchParams, componentParams] = useSearchParamsFilter("size");
  const { slug } = useParams();

  // variables
  const sizeOptions = size[slug].map((s) => ({
    label: s,
    value: s,
  }));

  //   handler
  const onChange = (checkedValues) => {
    updateSearchParams({ size: checkedValues });
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
          className={classes["category-header"]}
          options={sizeOptions}
          value={componentParams}
          onChange={onChange}
        />
      </ul>
    </div>
  );
};

export default SizeFilter;
