// style
import classes from "./style.module.css";

// components
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import BanerSlider from "./components/BanerSlider";

//   images

import img1 from "../../assets/image/icons8-shoes-64.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={classes["section-imgg"]}>
        <BanerSlider />
      </div>
      <div
        style={{
          border: "1px solid gray",
          borderRadius: "100%",
          width: "80px",
          height: "80px",
        }}
      >
        <img src={img1} alt="productimg" className={classes.mainimg} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
