import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// data

import { productslist } from "../../Components/Shop/Products/productslist";
import { child3 } from "../../Components/Shop/Products/productsList2";

// style
import classes from "./style.module.css";
import "./global.css";

// icons
import { CiSearch } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

// packages
import { Dropdown, Input, ConfigProvider } from "antd";
import { debounce } from "lodash";
import _ from "lodash";
import { useLocalStorage } from "@uidotdev/usehooks";

// images
import productimg from "../../assets/image/photo_2019-12-11_16-39-53.jpg";
import { MdHeight } from "react-icons/md";

//
const SearchBar = () => {
  //  states
  const [latestSearch, saveLatestSearch] = useLocalStorage("resulttest", []);
  const [inputValue, setInputValue] = useState("");
  const [searchState, setSearchState] = useState([]);
  const [rpList3, setrpList3] = useState({});
  const navigate = useNavigate();

  // variabless

  const pList = productslist;
  var resultSearch;

  const debounced = debounce(() => searchResult(inputValue), 1000);

  //   functions

  function getProductByTitle(products, inputSearchValue) {
    const result = [];
    products?.map((p) => {
      if (p.child) {
        let output = getProductByTitle(p.child, inputSearchValue);
        if (output) {
          return output;
        }
      } else {
        if (p.title.toLowerCase().includes(inputSearchValue.toLowerCase())) {
          const checkResult = result.filter((r) => {
            return r.id === p.id;
          });

          if (!checkResult.length) result.push(p);
          return result;
        }
      }
    });
  }
  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    const x = priceFormat?.format(price);
    return x;
  };

  // handlers
  const searchResult = (value) => {
    const results = child3.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchState(results);
  };
  const handleIconSearch = () => {
    navigate({
      pathname: `/search`,
      search: `q=${inputValue}`,
    });
  };

  const handleSearch = (e) => {
    saveLatestSearch(e.target.value);

    setInputValue(e.target.value);

    debounced();

    setSearchState([]);

    const pList3 = getProductByTitle(pList, e.target.value);

    setrpList3(pList3);

    const pList2 = pList.map((i) =>
      i.child?.map((c1) =>
        c1.child?.map((c2) =>
          c2.child?.map((c3) => ({ id: c3.id, t: c3.title }))
        )
      )
    );

    resultSearch = pList2.filter((p) =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    return resultSearch;
  };

  //   variables
  const items = [
    {
      key: "1",
      label: (
        <div style={{ overflow: "auto", height: "250px" }}>
          <div>
            {searchState.map((p) => (
              <Link
                to={`/product-detail/${p.id}/${p.slug}`}
                className={classes["product-search"]}
                key={p.id}
              >
                <div>
                  <img
                    src={p.img}
                    alt="productimg"
                    className={classes["product-img"]}
                  />
                </div>
                <div className={classes["product-item"]}>
                  <div className={classes["product-off-section"]}>
                    <h4 className={classes["product-title"]}>{p.title}</h4>
                    {p.off && (
                      <div className={classes["off-section"]}>
                        <span> % {p.off} </span>
                      </div>
                    )}
                  </div>
                  <div className={classes["price-section"]}>
                    {p.off && (
                      <div className={classes["product-orginal_price"]}>
                        <span> {priceIntl(p.price)} </span>
                        <span> تومان </span>
                      </div>
                    )}
                    <div className={classes["product-off_price"]}>
                      <span>
                        {" "}
                        {priceIntl(p.price - p.price * p.off * 0.01)}{" "}
                      </span>
                      <span> تومان </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    //
    //
    //
    {
      key: "2",
      label: (
        <div className={classes["history-search"]}>
          <span>آخرین جستجوهای شما</span>
          <RiDeleteBin5Line className={classes["icon-history"]} />
        </div>
      ),
    },
    {
      key: "3",
      label: <span className={classes["latest-search"]}>{latestSearch}</span>,
    },
  ];

  return (
    <div className={classes["main-searchbar"]}>
      <ConfigProvider
        theme={{
          components: {
            Dropdown: {
              colorBgContainer: "red",
            },
          },
        }}
      ></ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(240, 240, 241)",
            colorBgContainer: "rgb(240, 240, 241)",
            controlHeight: 50,
            borderRadius: 16,
          },
        }}
      >
        <Dropdown menu={{ items }} trigger={["click"]}>
          <div className={classes["searchbar-antd"]}>
            <Input
              value={inputValue}
              prefix={
                <CiSearch
                  onClick={handleIconSearch}
                  className={classes["icon-search"]}
                  fill="rgb(66, 71, 80)"
                  size="20"
                />
              }
              placeholder="جستجوی محصول"
              allowClear
              onChange={handleSearch}
            />
          </div>
        </Dropdown>
      </ConfigProvider>
    </div>
  );
};

export default SearchBar;
