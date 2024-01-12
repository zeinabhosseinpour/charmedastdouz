import React, { useEffect, useState } from "react";

// style
import classes from "./style.module.css";

// package
import { Slider, InputNumber, ConfigProvider } from "antd";
import { BsHandbag } from "react-icons/bs";

const PriceRangFilter = (props) => {
  const [inputMinValue, setInputMinValue] = useState(50000);

  const [inputMaxValue, setInputMaxValue] = useState(12000000);

  const onChangeComplete = (value) => {
    console.log("onChangeComplete: ", value);
  };

  const onChange = (newValue) => {
    console.log("newvalue:", newValue, newValue[0]);
    setInputMinValue(newValue[0]);
    setInputMaxValue(newValue[1]);
  };
  console.log("inputvalumin:", inputMinValue);
  const handlePriceReng = () => {
    // props.setrangeprice(inputMinValue, inputMaxValue);
    props.setminprice(inputMinValue);
    props.setmaxprice(inputMaxValue);
    props.handleonclick();
  };

  const formattedValue = (value) => {
    const valueFormat = new Intl.NumberFormat("fa-IR");
    const x = valueFormat?.format(value);
    console.log("intl:", x);
    return x;
  };

  // useEffect(()={

  // },[])
  return (
    <div className={classes["filter-priceRange"]}>
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              /* here is your component tokens */
              dotActiveBorderColor: "red",
              trackBg: "green",
              railBg: "red",
              handleColor: "pink",
              trackHoverBg: "red",
            },
          },
        }}
      ></ConfigProvider>
      {/* <Slider
        styles={{ trackBg: "yellow", handleColor: "pink", railBg: "red" }}
        style={{ rail: "yellow", trackBg: "red", handleColor: "pink" }}
        range
        // rail="red"
        // trackBg="red"
        // defaultValue={[20, 50]}
        min={50000}
        max={10000000}
        onChange={onChange}
        // value={typeof inputValue === "number" ? inputValue : 0}
        step={40000}
      /> */}
      <div style={{ position: "relative" }}>
        <input
          // min={50000}
          id="RangeMin"
          type="range"
          style={{ position: "absolute" }}
        />
        <input
          // max={12000000}
          id="RangeMin"
          type="range"
          style={{ zIndex: "50" }}
        />
      </div>
      <Slider
        range
        step={10}
        min={50000}
        max={12000000}
        defaultValue={[50000, 12000000]}
        onChange={onChange}
        onChangeComplete={onChangeComplete}
        // railStyle={{ backgroundColor: "red" }}
        trackStyle={{ backgroundColor: "#ef4056" }}
        styles={{ trackBg: "yellow", handleColor: "pink", railBg: "red" }}
      />
      <div className={classes["priceRange"]}>
        <div className={classes["rangeInput"]}>
          <span> از </span>
          <input
            className={classes["inputRange"]}
            id="priceRangeMin"
            type="text"
            value={formattedValue(inputMinValue)}
            defaultValue={formattedValue(inputMinValue)}
          />
          <span>تومان</span>
        </div>

        <div className={classes["rangeInput"]}>
          <span> تا </span>
          <input
            className={classes["inputRange"]}
            id="priceRangeMax"
            type="text"
            value={formattedValue(inputMaxValue)}
            // defaultValue={formattedValue(inputMaxValue)}
          />
          <span>تومان</span>
        </div>
      </div>

      {/* <InputNumber
        // min={0}
        // max={1}
        style={{
          margin: "0 16px",
        }}
        // step={0.01}
        value={inputMinValue}
        onChange={onChange}
        controls={false}
        decimalSeparator="0"
      /> */}
      <button
        onClick={() => handlePriceReng()}
        className={classes["btn-filter_pricerange"]}
      >
        اعمال محدوده قیمت
      </button>
    </div>
  );
};

export default PriceRangFilter;
