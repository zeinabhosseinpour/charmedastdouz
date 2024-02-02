import React, { useState, useEffect } from "react";

// data
import productslist from "../../Components/Shop/Products/productslist";
import { useMemo } from "react";

import {
  productslist2,
  child1,
  child2,
  child3,
} from "../../Components/Shop/Products/productsList2";

// style
import classes from "./style.module.css";
import "./global.css";

// icons
import { CiSearch } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

// packages
import { Dropdown, Input, ConfigProvider, Flex, Row } from "antd";
import { debounce } from "lodash";
import _ from "lodash";
import { useLocalStorage } from "@uidotdev/usehooks";

import { SearchOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@ant-design/icons/lib/components/Icon";

// component
import Search from "../../Pages/Shop/Search";

// images
import p1 from "../../assets/image/photo_2019-12-11_16-39-53.jpg";
import productimg from "../../assets/image/photo_2019-12-11_16-39-53.jpg";

//
const SearchBar = () => {
  // const [drawing, saveDrawing] = useLocalStorage("drawing", null);

  // states
  const [latestSearch, saveLatestSearch] = useLocalStorage("resulttest", []);
  const [inputValue, setInputValue] = useState("");
  const [searchState, setSearchState] = useState([]);
  const [rpList3, setrpList3] = useState({});
  const navigate = useNavigate();
  console.log("serachState:", searchState);

  // variable

  const pList = productslist;
  var resultSearch;
  const plist2 = productslist2;
  const dropdownItem = [];

  // const ladosh=require("ladosh");

  // const data = useMemo(latestSearch);
  // useEffect(() => {
  //   localStorage.setItem(JSON.stringify(latestSearch));
  // }, [latestSearch]);
  // const data = useMemo(() => _.groupBy(pList, "category"), [todos]);

  // function getProductById(products, searchId) {
  //   for (let product of products) {
  //     if (product.id.toString() === searchId) return product;
  //     if (product.child) {
  //       let output = getProductById(product.child, searchId);
  //       if (output) {
  //         return output;
  //       }
  //     }
  //   }
  // }

  // const product = useMemo(
  //   () => getProductById(plist, productid),
  //   [getProductById, plist, productid]
  // );
  // console.log(product.child, "productm");

  function getProductByTitle(products, inputSearchValue) {
    // for (let product of products) {
    //   if (product.child) {
    //     let output = getProductByTitle(product.child, inputSearchValue);
    //     console.log("output:", output);
    //     if (output) {
    //       return output;
    //     }
    //   } else {
    //     if (product.title.toLowerCase().includes(inputSearchValue.toLowerCase()))
    //       return product;
    //   }

    const result = [];

    // listcheck.map((itemcheck) =>
    products?.map((p) => {
      if (p.child) {
        let output = getProductByTitle(p.child, inputSearchValue);
        console.log("output:", output);
        if (output) {
          return output;
        }
      } else {
        if (p.title.toLowerCase().includes(inputSearchValue.toLowerCase())) {
          const checkResult = result.filter((r) => {
            console.log("r:", r.title, p.title);
            return r.id === p.id;
          });
          console.log(
            "checkresult.length:",
            checkResult.length,
            !checkResult.length
          );
          if (!checkResult.length) result.push(p);
          console.log("resultmap:", result);
          return result;
        }
      }
    });

    console.log("result:", result);

    // if (product.title.toLowerCase().includes(inputSearchValue) && product.child){
    //   let output = getProductByTitle(product.child, inputSearchValue);
    //   console.log("output:", output);
    // }
    // return product;
    // const resultSearch3 = products.filter((p) =>
    //   p.title.toLowerCase().includes(inputSearchValue.toLowerCase())
    // );
    // console.log("resultserach3:", resultSearch3);
    // setSearchState(resultSearch3);
    // if (product.child) {
    // let output = getProductByTitle(product.child, inputSearchValue);
    // console.log("output:", output);
    // if (output) {
    //   return output;
    // }
  }

  // const result = [];
  // listcheck.map((itemcheck) =>
  //   newTodo?.map((todo) => {
  //     if (
  //       todo[itemcheck]
  //         .toLowerCase()
  //         .includes(action.payload.field.toLowerCase())
  //     ) {
  //       const checkResult = result.filter((r) => {
  //         console.log("r:", r.id, todo.id);
  //         return r.id === todo.id;
  //       });
  //       console.log(
  //         "checkresult.length:",
  //         checkResult.length,
  //         !checkResult.length
  //       );
  //       if (!checkResult.length) result.push(todo);
  //     }
  //   })
  console.log("latesrSearch:", latestSearch);
  const handleHistory = () => {
    window.location.reload();
    setInputValue(latestSearch);
    console.log("setinputvalue:", inputValue);
    // const i = localStorage.getItem(latestSearch);
    // setInputValue(i);
    // console.log("setinputvalue:", i);
  };
  // const handleHistory = (e) => {
  //   saveLatestSearch(e.target.value);
  // };

  // handlers
  const searchResult = (value) => {
    const results = child3.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log("results:", results);
    setSearchState(results);
  };
  const handleIconSearch = () => {
    console.log(
      "inputvalueusenavigation:",

      inputValue
    );

    navigate({
      // pathname: "/product-category/1/کیف_های_چرمی",
      pathname: "/search",
      search: `q=${inputValue}`,
    });
    // navigate({ pathname: "/cart", search: `?q=${inputValue}` });
    // navigate("/cart", { sort: "date", order: "newest" });
    // navigate({
    //   pathname: 'listing',
    //   search: '?foo=bar'
    // })
    // navigate("/cart", { state: { message: "Failed to submit form" } });
    // navigate to /listing?foo=bar
    // navigate({
    //   pathname: "listing",
    //   search: "?foo=bar",
    // });

    // // also navigate to /listing?foo=bar
    // navigate({
    //   pathname: "listing",
    //   search: {
    //     foo: "bar",
    //   },
    // });
    // navigate({
    //   pathname: '/posts',
    //   search: '?sort=date&order=newest',
    // });
    // navigate({
    //   pathname: '/posts',
    //   search: `?${createSearchParams(params)}`,
    // });
    // navigate("listing", {
    //   searchParams: {
    //     foo: "bar",
    //   },
    // });
  };

  const debounced = debounce(() => searchResult(inputValue), 1000);

  const handleSearch = (e) => {
    // const debounced = debounce(() => {
    //   console.log("debonce is 500mls");
    // }, 500);

    // debounced();
    saveLatestSearch(e.target.value);
    // const results = child3.filter((p) =>
    //   p.title.toLowerCase().includes(e.target.value.toLowerCase())
    // );
    // console.log("results:", results);
    // setSearchState(results);
    setInputValue(e.target.value);
    // const debounced = debounce(() => searchResult(e.target.value), 1000);
    // if (e.target.value.trim().length >= 2) {
    debounced();
    // }
    setSearchState([]);
    console.log("searchstate:", searchState);

    const pList3 = getProductByTitle(pList, e.target.value);
    // setSearchState(pList3);
    console.log("pList3:", pList3);
    setrpList3(pList3);
    console.log("rpList3:", rpList3);
    // const resultSearch3 = pList3.filter((p) =>
    //   p.title.toLowerCase().includes(e.target.value.toLowerCase())
    // );
    // console.log("resultserach3:", resultSearch3);
    // setSearchState(resultSearch3);

    const pList2 = pList.map((i) =>
      i.child?.map((c1) =>
        c1.child?.map((c2) =>
          c2.child?.map((c3) => ({ id: c3.id, t: c3.title }))
        )
      )
    );
    console.log("pList2:", pList2);
    resultSearch = pList2.filter((p) =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    console.log("e.target.value", e.target.value);
    console.log("resultserach:", resultSearch);
    // setSearchState(resultSearch);
    return resultSearch;
  };

  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    const x = priceFormat?.format(price);
    console.log("intl:", x);
    return x;
  };

  const items = [
    {
      key: "20",
      label: (
        <div style={{ overflow: "scroll" }}>
          <div>
            {searchState.map((p) => (
              <Link
                to={`/product-detail/${p.id}/${p.slug}`}
                className={classes["product-search"]}
                key={p.id}
              >
                <div>
                  <img
                    src={productimg}
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
                        <span>{priceIntl(p.price)}</span>
                        <span>تومان</span>
                      </div>
                    )}
                    <div className={classes["product-off_price"]}>
                      <span>{priceIntl(p.price - p.price * p.off * 0.01)}</span>
                      <span>تومان</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    ...searchState.map((p) => ({
      key: p.id,
      label: (
        <Link
          to={`/product-detail/${p.id}/${p.slug}`}
          className={classes["product-search"]}
        >
          <div>
            <img
              src={productimg}
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
                  <span>{priceIntl(p.price)}</span>
                  <span>تومان</span>
                </div>
              )}
              <div className={classes["product-off_price"]}>
                <span>{priceIntl(p.price - p.price * p.off * 0.01)}</span>
                <span>تومان</span>
              </div>
            </div>
          </div>
        </Link>
      ),
    })),
    // ...searchState,

    {
      key: "3",
      label: (
        <div className={classes["history-search"]}>
          <span>آخرین جستجوهای شما</span>
          <RiDeleteBin5Line className={classes["icon-history"]} />
        </div>
      ),
    },
    {
      key: "5",
      label: <span className={classes["latest-search"]}>{latestSearch}</span>,
    },

    { key: "7", label: inputValue },
  ];

  return (
    <div className={classes["main-searchbar"]}>
      <button onClick={handleHistory}>history</button>
      <ConfigProvider
        theme={{
          components: {
            Dropdown: {
              colorBgContainer: "red",
              /* here is your component tokens */
            },
          },
        }}
      ></ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(240, 240, 241)",
            colorBgContainer: "rgb(240, 240, 241)",
            // colorIcon: "rgb(102, 102, 102)",
            // colorFill: "rgb(66, 71, 80)",
            controlHeight: 50,
            borderRadius: 16,
            // colorBgSpotlight: "red",

            /* here is your global tokens */
          },
        }}
      >
        <Dropdown
          overlayStyle={
            {
              // overflow: "scroll",
            }
          }
          menu={{ items }}
          trigger={["click"]}
        >
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
