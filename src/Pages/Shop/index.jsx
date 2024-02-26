import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

// components
import Header from "./../../Layout/Header/index";
import Filter from "../../Components/Shop/Filter";
import Ordering from "./../../Components/Shop/Ordering/index";
import Products from "./../../Components/Shop/Products/index";
import Footer from "./../../Layout/Footer/index";

//style
import classes from "./style.module.css";
import Breadcrumbs from "./component/Breadcrumbs";

const Shop = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const { productid, slug } = useParams();
  console.log("shoppppproductId:", productid);
  console.log("shop");
  return (
    <div>
      <Header />
      <Breadcrumbs productid={productid} slug={slug} />
      <main
        className={` ${classes.container} ${classes.grid} ${classes["grid--2--cols"]} ${classes.content} `}
      >
        <Filter
          slug={slug}
          productId={productid}
          // searchparams={searchParams}
          // setsearchparams={setSearchParams}
        />
        <div>
          <Ordering />

          <Products
          // Slug={slug}
          // searchparams={searchParams}
          // setsearchparams={setSearchParams}
          />
        </div>
      </main>
      <main
        className={` ${classes.container} ${classes["grid-mobile"]} ${classes["grid--2--rows"]} ${classes.content} `}
      >
        <div className={classes["filter-order_mobile"]}>
          <Filter />
          <Ordering />
        </div>
        <Products style={{ backgroundColor: "mediumspringgreen" }} />
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
