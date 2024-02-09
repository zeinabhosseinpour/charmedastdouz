import React, { useEffect, useMemo, useState } from "react";
import {
  useParams,
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom";

// components
import productslist from "./productslist";
import { child3 } from "./productsList2";

// style
import classes from "./style.module.css";

// package
import { Pagination } from "antd";

const Products = () => {
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
  // console.log(product.child, "product");

  // variables

  const params = useSearchParams();

  // states
  const { productid, slug } = useParams();
  const [productsList, setProductsList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const encodeString = encodeURIComponent(location.search);
  console.log("encodestring:", encodeString);

  // function

  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    const x = priceFormat?.format(price);
    return x;
  };

  const resultProduct = () => {
    console.log("called product");

    const result = child3.filter(
      (item) =>
        item.category === slug || item.parent1 === slug || item.parent === slug
    );

    setProductsList(result);
  };

  const resultFilteredProduct = () => {
    console.log("called filter", searchParams);
    const result3 = child3
      .filter(
        (item) =>
          item.category === slug &&
          // item.title
          //   .toLowerCase()
          //   .includes(searchParams.get("q").toLowerCase()) &&
          item.material === searchParams.get("material")
      )

      .filter((i) => {
        i.attributes.filter((a) => a.color === searchParams.get("color")) &&
          i.attributes.map((a) =>
            a.sizelist.filter((s) => s.size === searchParams.get("size"))
          );
      });
    if (result3.length) {
      setProductsList(result3);
    } else {
      // alert("نتیجه ای یافت نشد");
    }
  };

  // sideEffect

  useEffect(() => {
    const filtersLength = params[0].size;

    // let searchParamsAll = {};
    // for (var key of keys) {
    //   searchParamsAll[key] = searchParams.getAll(key);
    // }

    if (filtersLength > 0) {
      resultFilteredProduct();
    } else {
      resultProduct();
    }
  }, [searchParams, productid, slug]);

  return (
    <section className={classes["product-section"]}>
      <div className={classes["pagintion-shop"]}>
        <Pagination defaultCurrent={1} pageSize={18} total={180} size="small" />
      </div>

      <div
        style={{ backgroundColor: "pink" }}
        className={`${classes["product-shop"]} ${classes["grid--3--cols"]}`}
      >
        {productsList.map((item) => (
          <div key={item.id} className={classes["single-product"]}>
            {item.id}
            {item.category}
            {item.title}
            {item.material}
            {item.price}off
            {item.off}%
            {item.attributes.map((a) => (
              <div key={a.id}>
                {a.color}
                {a.sizelist.map((s) => (
                  <div key={s.id}>{s.size}</div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={`${classes["product-shop"]} ${classes["grid--3--cols"]}`}>
        {productsList.map((c3) => (
          <Link
            key={c3.id}
            to={`/product-detail/${c3.id}/${c3.slug}`}
            className={classes["link-product"]}
          >
            <div className={classes["single-product"]}>
              <div className={classes["section-img"]}>
                <img
                  src={c3.img}
                  alt="productimg"
                  className={classes["product-img"]}
                />
              </div>
              <div className={classes["product-feature"]}>
                {/* <div className={classes["product-color_section"]}> */}
                <div className={classes["product-color_section"]}>
                  {c3.attributes.map((item) => (
                    <div
                      className={classes["product-color"]}
                      style={{
                        // borderRadius: "100%",
                        backgroundColor: item.colorValue,
                        // width: "20px",
                        // height: "20px",
                        // border: "1px solid gray",
                      }}
                      key={item.id}
                    ></div>
                  ))}
                </div>
                {/* </div> */}
                <div key="c3.id" className={classes["product-title"]}>
                  {c3.title}
                </div>
                <div className={classes["product-price_section"]}>
                  {c3.off && (
                    <div key="c3.id" className={classes["price-and_off"]}>
                      <div className={classes["product-orginal_price"]}>
                        <span>{priceIntl(c3.price)}</span>
                        <span>تومان</span>
                      </div>
                      <div className={classes["product-off_section"]}>
                        <div className={classes["product-off"]}>{c3.off}%</div>
                      </div>
                    </div>
                  )}

                  <div className={classes["product-off_price"]}>
                    <span>
                      {priceIntl(c3.price - c3.price * c3.off * 0.01)}
                    </span>
                    <span>تومان</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
