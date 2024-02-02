import React, { useEffect, useMemo, useState } from "react";
import {
  useParams,
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom";

// components
import productslist from "./productslist";
import {
  productslist2,
  child1,
  child2,
  child3,
  productFilter,
} from "./productsList2";

// images
import productimg from "../../../assets/image/photo_2019-12-11_16-39-53.jpg";

// style
import classes from "./style.module.css";

// package
import { Pagination } from "antd";
import { keys, values } from "lodash";

const Products = (props) => {
  // variables
  const plist = productslist;
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log("location:", location);
  console.log(
    "location.search:",
    location.search,
    location.state,
    location.pathname
  );
  const encodeString = encodeURIComponent(location.search);
  console.log("encodestring:", encodeString);

  // states
  const { productid, slug } = useParams();
  console.log("plist:", plist);
  console.log("slug11:", slug);
  console.log("propsslug11:", props.Slug);
  const [productsList, setProductsList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [filterItems, setFilterItems] = useState({});

  function getProductById(products, searchId) {
    for (let product of products) {
      if (product.id.toString() === searchId) return product;
      if (product.child) {
        let output = getProductById(product.child, searchId);
        if (output) {
          return output;
        }
      }
    }
  }

  // const product = useMemo(
  //   () => getProductById(plist, productid),
  //   [getProductById, plist, productid]
  // );
  // console.log(product.child, "productm");

  const resultProduct = () => {
    const result = child3.filter(
      (item) =>
        item.category === slug || item.parent1 === slug || item.parent === slug
    );
    console.log("slugresultfree:", slug);
    console.log("resultfreefilter:", result);
    setProductsList(result);
    const resultCount = result.map((r) =>
      r.attributes.filter((a) => a.colorcount !== null)
    );
    const uncount = resultCount.map((rc) => rc.length > 0);
    if (resultCount.map((rc) => rc.length > 0)) {
      console.log("ifrrrrrrrrrrrrrrrrrrcrr:", resultCount, uncount);
    } else {
      console.log("elserrrrrrrrrrrrrrrrrrcrr:", resultCount, uncount);
    }
  };
  // const result = child3
  //   .filter(
  //     (item) =>
  //       item.category === slug || item.parent1 === slug || item.parent === slug
  //   )
  //   .filter(
  //     (i) =>
  //       i.material === props.searchparams.get("material") ||
  //       i.attributes.filter(
  //         (a) => a.color === props.searchparams.get("color")
  //       ) ||
  //       i.attributes.map((a) =>
  //         a.sizelist.filter((s) => s.size === props.searchparams.get("size"))
  //       )
  //   );
  // // / console.log("resultout:", result);
  // const result2 = child3
  //   .filter(
  //     (item) =>
  //       item.category === slug &&
  //       // ||
  //       // item.parent1 === slug ||
  //       // (item.parent === slug
  //       item.material === props.searchparams.get("material")
  //   )
  //   // .filter((i) => i.attributes.color === props.searchparams.get("color"));
  //   .map((i) =>
  //     i.attributes
  //       .filter((a) => a.color === props.searchparams.get("color"))
  //       .map((s) =>
  //         s.sizelist.filter(
  //           (item) => item.size === props.searchparams.get("size")
  //         )
  //       )
  // );
  // .map((s) => s.sizelist.filter((item) => item.id === 11112));

  // console.log("resultout2:", result2);
  const resultFilteredProduct = () => {
    // const result = productFilter.filter(
    //   (p) =>
    //     p.size.toString() === props.searchparams.get("size") ||
    //     p.color === props.searchparams.get("color") ||
    //     p.material === props.searchparams.get("material")
    // );
    // const result = child3
    //   .filter(
    //     (item) =>
    //       item.category === slug ||
    //       item.parent1 === slug ||
    //       (item.parent === slug &&
    //         item.material === props.searchparams.get("material"))
    //   )
    //   .map((i) =>
    //     i.attributes
    //       .filter((a) => a.color === props.searchparams.get("color"))

    //       .map((s) =>
    //         s.sizelist.filter(
    //           (item) => item.size.toString() === props.searchparams.get("size")
    //         )
    //       )
    //   );
    const r1 = child3.filter((item) => item.category === slug);
    console.log("r1:", r1);
    // const r2 = r1.filter(
    //   (i) =>
    //     i.material === props.searchparams.get("material") &&
    //     i.attributes.filter((a) => a.color === props.searchparams.get("color"))
    //   // ||
    //   // i.attributes.map((a) =>
    //   // a.sizelist.filter((s) => s.size === props.searchparams.get("size"))
    //   // )
    // );
    // console.log("r2:", r2);
    // const result = child3
    //   .filter(
    //     (item) => {
    //       console.log("item.id:", item.id);
    //       return item.category === slug;
    //     }
    //     //  ||
    //     // item.parent1 === slug ||
    //     // item.parent === slug
    //   )
    //   .filter(
    //     (i) =>;2
    //       i.material === props.searchparams.get("material") &&
    //       i.attributes.filter(
    //         (a) => a.color === props.searchparams.get("color")
    //       ) &&
    //       i.attributes.map((a) =>
    //         a.sizelist.filter((s) => s.size === props.searchparams.get("size"))
    //       )
    //   );
    // console.log("resultfilter:", result);
    // const result3 = child3
    //   .filter((item) => item.category === slug)
    //   .filter((i) => {
    //     if (props.searchparams.get("material")) {
    //       i.material === props.searchparams.get("material");
    //     }
    //     if (props.searchparams.get("color")) {
    //       i.attributes.filter(
    //         (a) => a.color === props.searchparams.get("color")
    //       );
    //     }
    //     if (props.searchparams.get("size")) {
    //       i.attributes.map((a) =>
    //         a.sizelist.filter((s) => s.size === props.searchparams.get("size"))
    //       );
    //     }
    //   });
    // const resultsnavigateQ = child3.filter((p) =>
    //   p.title.toLowerCase().includes(searchParams.get("q").toLowerCase())
    // );
    // console.log("resultnavigationq:", resultsnavigateQ);
    // setSearchState(results);
    const result3 = child3
      .filter(
        (item) =>
          item.category === slug &&
          // item.title
          //   .toLowerCase()
          //   .includes(searchParams.get("q").toLowerCase()) &&
          item.material === searchParams.get("material")
      )
      // .filter((i) => {

      // if (searchParams.get("material")) {

      // i.material === searchParams.get("material") &&
      // }
      // if (searchParams.get("color")) {
      .filter((i) => {
        i.attributes.filter((a) => a.color === searchParams.get("color")) &&
          // }
          // if (searchParams.get("size")) {
          i.attributes.map((a) =>
            a.sizelist.filter((s) => s.size === searchParams.get("size"))
          );
        // }
      });
    console.log("result3:", result3);
    if (result3.length) {
      setProductsList(result3);
    } else {
      // alert("نتیجه ای یافت نشد");
    }
  };
  // console.log("productlist:", productsList);
  // const size = props.searchparams.get("size");
  // // const size = 49;
  // const color = props.searchparams.get("color");
  // // const color = "قرمز";
  // const material = props.searchparams.get("material");
  // console.log("size,color,material:", size, color, material);
  // console.log("filteritem:", filterItems);
  // const filter = {
  //   size: [props.searchparams.get("size")],
  //   material: props.searchparams.get("material"),
  //   color: [props.searchparams.get("color")],
  // };
  // console.log("filterget:", filter);

  useEffect(() => {
    const keys = searchParams.keys();
    console.log("keys,:", keys);
    // const prevSearchParams = {};
    // let searchParamsAll = "";
    let searchParamsAll = {};
    for (var key of keys) {
      // prevSearchParams[key] = searchParams.getAll(key);
      searchParamsAll[key] = searchParams.getAll(key);
    }

    console.log(
      "serachParamsall:",
      Object.keys(searchParamsAll).length > 0,
      searchParamsAll,
      searchParamsAll.length > 0
    );
    if (Object.keys(searchParamsAll).length > 0) {
      console.log("productlistuseeif:", productsList);
      resultFilteredProduct();
    } else {
      console.log("productlistuseels:", productsList);
      console.log("sluguseeefect:", slug, productid);
      console.log("slugprops:", props.Slug);
      // setSearchParams("");
      resultProduct();
    }
  }, [searchParams, productid, slug]);
  // useEffect(() => {
  //   if (productsList.length > 0) {
  //     // if (isLoading) {
  //     console.log("productlistuseeif:", productsList);
  //     resultFilteredProduct();
  //   } else {
  //     console.log("productlistuseels:", productsList);
  //     resultProduct();
  //   }
  // }, [resultFilteredProduct, resultProduct]);
  const handleFilter = () => {
    const result = child3.filter(
      (item) =>
        item.category === slug || item.parent1 === slug || item.parent === slug
    );
    console.log("resultfreefilter:", result);
    setProductsList(result);
  };

  const handleInitialProducts = () => {
    const result = child3.filter(
      (item) =>
        item.category === slug || item.parent1 === slug || item.parent === slug
    );
    console.log("resultfreefilter:", result);
    setProductsList(result);
  };
  // useEffect(() => {
  //   const filterItemskey = Object.keys(filterItems);
  //   if (filterItemskey.length > 0) handleFilter();
  //   else handleInitialProducts();
  // }, [filterItems]);
  // return (
  //   <section
  //     className={`${classes["product-section"]} ${classes["grid--3--cols"]}`}
  //   >
  //     {plist
  //       .filter((f) => f.id.toString() === productid)
  //       ?.map((i) => (
  //         <div key="i.id" className={classes["single-product"]}>
  //           {i.child?.map((c1) => (
  //             <div key={c1.id}>
  //               {c1.child?.map((c2) => (
  //                 <div key={c2.id}>
  //                   {c1.type === 0 &&
  //                     c2.child?.map((c3) => (
  //                       <div key={c3.id}>
  //                         <img
  //                           style={{
  //                             objectFit: "contain",
  //                           }}
  //                           src={c3.img}
  //                           alt="productimg"
  //                           className={classes["product-img"]}
  //                         />

  //                         <div className={classes["product-color_section"]}>
  //                           <div className={classes["product-color"]}>
  //                             {c3.title}
  //                           </div>
  //                         </div>
  //                         <div key="c3.id" className={classes["product-title"]}>
  //                           {c3.title}
  //                         </div>
  //                         <div className={classes["product-price_section"]}>
  //                           <div
  //                             key="c3.id"
  //                             className={classes["price-and_off"]}
  //                           >
  //                             <div className={classes["product-orginal_price"]}>
  //                               <span>{c3.price}</span>
  //                               <span>تومان</span>
  //                             </div>
  //                             <div className={classes["product-off"]}>
  //                               {c3.off}%
  //                             </div>
  //                           </div>
  //                           <div className={classes["product-off_price"]}>
  //                             <span>{c3.price - c3.price * c3.off * 0.01}</span>
  //                             <span>تومان</span>
  //                           </div>
  //                         </div>
  //                         <hr className={classes["hr-div"]} />

  //                         <div className={classes.visitdetails}>
  //                           <Link
  //                             className={classes["visit-btn"]}
  //                             to={`/product-detail/${c3.id}/${c3.slug}`}
  //                           >
  //                             مشاهده و سفارش
  //                           </Link>
  //                         </div>
  //                       </div>
  //                     ))}
  //                 </div>
  //               ))}
  //             </div>
  //           ))}
  //         </div>
  //       ))}
  //   </section>
  // );

  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    const x = priceFormat?.format(price);
    // console.log("intl:", x);
    return x;
  };

  return (
    <section className={classes["product-section"]}>
      {/* <ul style={{ backgroundColor: "green" }}>
        {child3.map((c3) =>
          c3.attributes
            .map((a) => a.sizelist)
            .filter((f) => f.size == searchParams.size)
            .map((item) => <li key={item.id}>{item.size}</li>)
        )}
      </ul> */}
      <div>
        {/* <span>size: {props.searchparams.get("size")}</span>
        <span>material: {props.searchparams.get("material")}</span>
        <span> color: {props.searchparams.get("color")}</span>
        <span>minprice: {props.searchparams.get("minPrice")}</span>
        <span> maxprice: {props.searchparams.get("maxPrice")}</span>
        <span>
          has selling stock: {props.searchparams.get("has_selling_stock")}
        </span> */}
      </div>
      <div className={classes["pagintion-shop"]}>
        <Pagination defaultCurrent={1} pageSize={18} total={180} size="small" />
      </div>

      <div className={`${classes["product-shop"]} ${classes["grid--3--cols"]}`}>
        {/* {productFilter
          .filter(
            (p) =>
              p.size.toString() === props.searchparams.get("size") ||
              p.color === props.searchparams.get("color") ||
              p.material === props.searchparams.get("material")
          ) */}
        {
          // props.searchparams.get("material") &&
          //   props.searchparams.get("size") &&
          //   props.searchparams.get("color") &&
          // child3
          //   .filter(
          //     (item) =>
          //       item.category === slug ||
          //       item.parent1 === slug ||
          //       (item.parent === slug &&
          //         item.material === props.searchparams.get("material"))
          //   )
          //   .filter(
          //     (i) => i.attributes.color === props.searchparams.get("color")
          //   )
          //   .filter(
          //     (s) =>
          //       (s.size === s.size.toString()) ===
          //       props.searchparams.get("size")
          //   )
          //   .map((item) => (
          //     <div key={item.id}>
          //       {item.id}
          //       {item.title}
          //     </div>
          //   ))
        }

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
        {/* {child3
          .filter(
            (item) =>
              item.category === slug ||
              item.parent1 === slug ||
              item.parent === slug
          ) */}
        {/* .map((c3) => ( */}
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
                {/* {/* <hr className={classes["hr-div"]} /> */}

                {/* <div className={classes.visitdetails}>مشاهده و سفارش</div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
