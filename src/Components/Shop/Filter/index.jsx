import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

//  package
import { Collapse, Switch, ConfigProvider } from "antd";

//  style
import classes from "./style.module.css";
import "./filterglob.css";

//  components

import SizeFilter from "./SizeFilter";
import ColorsFilter from "./ColorsFilter";
import CategoryFilter from "./CategoryFilter";
import MaterialFilter from "./MaterialFilter";
import PriceRangFilter from "./PriceRangFilter";
import useSearchParamsFilter from "../../../Hooks/useSearchParamsFilter";

const Filter = () => {
  //   states

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [updateSearchParams, checkedStock] =
    useSearchParamsFilter("has_selling_stock");

  // side effect
  useEffect(() => {
    if (checkedStock[0] === "1") {
      setIsSwitchOn(true);
    } else {
      setIsSwitchOn(false);
    }
  }, [checkedStock[0]]);

  //  handler
  const onChange = (checked) => {
    setIsSwitchOn(checked);

    if (checked) {
      updateSearchParams({ has_selling_stock: "1" });
    } else {
      const params = new URLSearchParams(searchParams);

      params.delete("has_selling_stock");

      setSearchParams(params.toString());
    }
  };

  //   variables
  const items = [
    {
      key: "1",
      label: (
        <div className={classes["filter-header"]}>
          <span className={classes["filter-header_right"]}>فیلترها</span>
          <span
            onClick={() => setSearchParams([])}
            className={classes["filter-header_left"]}
          >
            حذف فیلترها
          </span>
        </div>
      ),
      showArrow: false,
      collapsible: "icon",
    },
    {
      key: "2",
      label: <div className={classes["header-panel"]}>دسته بندی</div>,
      children: <CategoryFilter />,
    },

    {
      key: "3",
      label: (
        <div className={classes["filter-header"]}>
          <span className={classes["header-panel"]}> فقط کالاهای موجود</span>
          <div>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#eb3a3a",
                },
              }}
            >
              <Switch size="small" checked={isSwitchOn} onChange={onChange} />
            </ConfigProvider>
          </div>
        </div>
      ),
      showArrow: false,
      collapsible: "icon",
    },
    {
      key: "4",
      label: <div className={classes["header-panel"]}>سایز</div>,
      children: <SizeFilter />,
    },
    {
      key: "5",
      label: <div className={classes["header-panel"]}> رنگ محصول</div>,
      children: <ColorsFilter />,
    },

    {
      key: "6",
      label: <div className={classes["header-panel"]}>جنس</div>,
      children: <MaterialFilter />,
    },
    {
      key: "7",
      label: <div className={classes["header-panel"]}>فیلتر برساس قیمت</div>,
      children: <PriceRangFilter />,
    },
  ];

  return (
    <section>
      <div className={classes["filter-mobile"]}>
        <div className={classes["filter-icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        <span>فیلتر</span>
      </div>

      <div className={classes.filter}>
        <ConfigProvider
          theme={{
            components: {
              Switch: {
                handleSizeSM: 10,
                trackMinWidthSM: 5,
                trackHeightSM: 5,
                trackPadding: 32,
                innerMaxMargin: 10,
                trackHeight: 12,
              },
            },
          }}
        ></ConfigProvider>
        <div>
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 26,
              },
            }}
          >
            <Collapse
              style={{ position: "sticky" }}
              items={items}
              collapsible="header"
              expandIconPosition="end"
              expandIcon={null}
            />
          </ConfigProvider>
        </div>
      </div>
    </section>
  );
};

export default Filter;
