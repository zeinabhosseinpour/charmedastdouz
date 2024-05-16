import { useParams } from "react-router-dom";

// components
import Header from "./../../Layout/Header/index";
import Filter from "../../Components/Shop/Filter";
import Ordering from "./../../Components/Shop/Ordering/index";
import Products from "./../../Components/Shop/Products/index";
import Footer from "./../../Layout/Footer/index";
import Breadcrumbs from "./component/Breadcrumbs";

//style
import classes from "./style.module.css";

const Search = () => {
  const { productid, slug } = useParams();

  return (
    <div>
      <Header />
      {/* <Breadcrumbs productid={productid} slug={slug} /> */}
      <main
        className={` ${classes.container} ${classes.grid} ${classes["grid--2--cols"]} ${classes.content} `}
      >
        <Filter slug={slug} productId={productid} />
        <div>
          <Ordering />

          <Products Slug={slug} />
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

export default Search;
