import { useEffect, useState } from "react";

//  style
import classes from "./style.module.css";

//  package
import { Slider, ConfigProvider } from "antd";

//   component
import useSearchParamsFilter from "../../../Hooks/useSearchParamsFilter";

const PriceRangFilter = () => {
  //  states
  const [sliderValues, setSliderValues] = useState({
    min: 0,
    max: 0,
  });

  const [updateSearchParams, minPrice] = useSearchParamsFilter("minPrice");
  const [_, maxPrice] = useSearchParamsFilter("maxPrice");

  //  side effect
  useEffect(() => {
    if (!minPrice[0] && !maxPrice[0]) {
      setSliderValues({ min: 50000, max: 12000000 });
    }
  }, [minPrice[0], maxPrice[0]]);

  //  functions
  const formattedValue = (value) => {
    const valueFormat = new Intl.NumberFormat("fa-IR");
    const x = valueFormat?.format(value);
    return x;
  };

  //   handlers
  const handlePriceRang = () => {
    updateSearchParams({
      minPrice: sliderValues.min,
      maxPrice: sliderValues.max,
    });
  };

  const onChange = (values) => {
    setSliderValues({
      min: values[0],
      max: values[1],
    });
  };

  return (
    <div className={classes["filter-priceRange"]}>
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              dotActiveBorderColor: "red",
              trackBg: "green",
              railBg: "red",
              handleColor: "pink",
              trackHoverBg: "red",
            },
          },
        }}
      ></ConfigProvider>

      <Slider
        range
        step={10}
        min={50000}
        max={12000000}
        defaultValue={[50000, 12000000]}
        value={[sliderValues.min, sliderValues.max]}
        onChange={onChange}
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
            defaultValue={formattedValue(50000)}
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
            defaultValue={formattedValue(12000000)}
          />
          <span>تومان</span>
        </div>
      </div>

      <button
        onClick={() => handlePriceRang()}
        className={classes["btn-filter_pricerange"]}
      >
        اعمال محدوده قیمت
      </button>
    </div>
  );
};

export default PriceRangFilter;
