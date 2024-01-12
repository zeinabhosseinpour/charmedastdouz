import React, { useState } from "react";

// style
import classes from "./style.module.css";

// icons
import { PiSortAscendingBold } from "react-icons/pi";
import { HiSortDescending } from "react-icons/hi";

const Ordering = () => {
  const [activeOption, setActiveOption] = useState("mostvisited");

  // handlers
  const handleOrdering = () => {};

  const handleoptionClick = (option) => {
    setActiveOption(option);
  };
  return (
    <section>
      <ul className={classes["sort-section"]}>
        <li className={`${classes["sort-byitem"]} ${classes["sort-header"]} `}>
          <HiSortDescending />
          <span>مرتب سازی:</span>
        </li>
        <li
          className={
            activeOption === "mostvisited"
              ? classes["sort-is_active"]
              : classes["sort-byitem"]
          }
          onClick={() => handleoptionClick("mostvisited")}
        >
          <span> پر بازدیدترین</span>
        </li>
        <li
          className={
            activeOption === "newest"
              ? classes["sort-is_active"]
              : classes["sort-byitem"]
          }
          onClick={() => handleoptionClick("newest")}
        >
          <span onClick={handleOrdering}>جدیدترین</span>
        </li>
        <li
          className={
            activeOption === "mostseller"
              ? classes["sort-is_active"]
              : classes["sort-byitem"]
          }
          onClick={() => handleoptionClick("mostseller")}
        >
          <span onClick={handleOrdering}>پرفروش ترین</span>
        </li>
        <li
          className={
            activeOption === "cheapest"
              ? classes["sort-is_active"]
              : classes["sort-byitem"]
          }
          onClick={() => handleoptionClick("cheapest")}
        >
          <a>ارزان ترین</a>
        </li>
        <li
          className={
            activeOption === "mostexpensive"
              ? classes["sort-is_active"]
              : classes["sort-byitem"]
          }
          onClick={() => handleoptionClick("mostexpensive")}
        >
          <span onClick={handleOrdering}>گران ترین</span>
        </li>
        <li
          className={
            activeOption === "mostpopular"
              ? classes["sort-is_active"]
              : classes["sort-byitem"]
          }
          onClick={() => handleoptionClick("mostpopular")}
        >
          <span onClick={handleOrdering}>محبوب ترین</span>
        </li>

        <li
          className={
            activeOption === "mostoff"
              ? classes["sort-is_active"]
              : classes["sort-byitem"]
          }
          onClick={() => handleoptionClick("mostoff")}
        >
          <span onClick={handleOrdering}>بیشترین تخفیف</span>
        </li>
      </ul>
    </section>
  );
};

export default Ordering;
