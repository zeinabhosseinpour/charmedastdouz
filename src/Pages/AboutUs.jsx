//  components

import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div style={{ margin: "100px" }}>
        About Us :
        <p>
          رز چرم با تکیه بر شعار "لبخند ماندگار" رضایت مشتری را در اولویت دستور
          کار خود قرار داده است و سعی کرده است با ارائه محصولات با کیفیت و خدمات
          مناسب لبخند مشتری را پس از خرید ماندگار کند.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
