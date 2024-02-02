import React, { useEffect, useState } from "react";

// style
import classes from "./style.module.css";

// package
import { Slider, InputNumber, ConfigProvider } from "antd";
import { BsHandbag } from "react-icons/bs";
import useSearchParamsFilter from "../../../Hooks/useSearchParamsFilter";

const PriceRangFilter = (props) => {
  const [updateSearchParams, minPrice] = useSearchParamsFilter("minPrice");
  const [_, maxPrice] = useSearchParamsFilter("maxPrice");

  //  states
  const [sliderValues, setSliderValues] = useState({
    min: 0,
    max: 0,
  });

  //  side effect
  useEffect(() => {
    if (!minPrice[0] && !maxPrice[0]) {
      setSliderValues({ min: 0, max: 0 });
    }
  }, [minPrice[0], maxPrice[0]]);

  const onChange = (values) => {
    setSliderValues({
      min: values[0],
      max: values[1],
    });
  };

  const formattedValue = (value) => {
    const valueFormat = new Intl.NumberFormat("fa-IR");
    const x = valueFormat?.format(value);
    return x;
  };

  const handlePriceReng = () => {
    updateSearchParams({
      minPrice: sliderValues.min,
      maxPrice: sliderValues.max,
    });
  };

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
        //onChangeComplete={onChangeComplete}
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
            value={formattedValue(sliderValues.min)}
            //defaultValue={formattedValue(inputMinValue)}
          />
          <span>تومان</span>
        </div>

        <div className={classes["rangeInput"]}>
          <span> تا </span>
          <input
            className={classes["inputRange"]}
            id="priceRangeMax"
            type="text"
            value={formattedValue(sliderValues.max)}
            // defaultValue={formattedValue(inputMaxValue)}
          />
          <span>تومان</span>
        </div>
      </div>

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
