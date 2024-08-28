import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";

// data

import { child3 } from "./productsList2";

// style
import classes from "./style.module.css";

// package
import { Pagination } from "antd";

const Products = () => {
  // states
  const { productid, slug } = useParams();
  const [productsList, setProductsList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // sideEffect

  useEffect(() => {
    const keys = searchParams.keys();

    let searchParamsAll = {};
    for (var key of keys) {
      searchParamsAll[key] = searchParams.getAll(key);
    }

    if (Object.keys(searchParamsAll).length > 0) {
      resultFilteredProduct();
    } else {
      resultProduct();
    }
  }, [searchParams, productid, slug]);

  // functions

  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    const x = priceFormat?.format(price);
    return x;
  };

  const resultProduct = () => {
    const result = child3.filter(
      (item) =>
        item.category === slug || item.parent1 === slug || item.parent === slug
    );

    setProductsList(result);
  };

  const resultFilteredProduct = () => {
    const result3 = child3
      .filter(
        (item) =>
          item.category === slug &&
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

  return (
    <section className={classes["product-section"]}>
      {/* <div className={classes["pagintion-shop"]}>
        <Pagination defaultCurrent={1} pageSize={18} total={180} size="small" />
  </div>*/}

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
                <div className={classes["product-color_section"]}>
                  {c3.attributes.map((item) => (
                    <div
                      className={classes["product-color"]}
                      style={{
                        backgroundColor: item.colorValue,
                      }}
                      key={item.id}
                    ></div>
                  ))}
                </div>

                <div key="c3.id" className={classes["product-title"]}>
                  {c3.title}
                </div>
                <div className={classes["product-price_section"]}>
                  {c3.off && (
                    <div key="c3.id" className={classes["price-and_off"]}>
                      <div className={classes["product-orginal_price"]}>
                        <span> {priceIntl(c3.price)} </span>
                        <span> تومان </span>
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
                    <span> تومان </span>
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
