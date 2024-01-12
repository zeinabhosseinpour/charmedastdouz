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

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const { productId, slug } = useParams();
  console.log("shop");
  return (
    <div>
      <Header />
      <main
        className={` ${classes.container} ${classes.grid} ${classes["grid--2--cols"]} ${classes.content} `}
      >
        <Filter
          slug={slug}
          productId={productId}
          searchparams={searchParams}
          setsearchparams={setSearchParams}
        />
        <div>
          <Ordering />

          <Products
            searchparams={searchParams}
            setsearchparams={setSearchParams}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
