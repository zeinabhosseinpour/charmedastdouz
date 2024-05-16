import { Link } from "react-router-dom";

//  style
import classes from "./style.module.css";

//  image
import logo from "../../assets/image/gradient.png";

//  icons
import { PiInstagramLogoLight } from "react-icons/pi";
import { LiaTelegramPlane } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div
        className={`${classes.container} ${classes.grid} ${classes["grid--5--cols"]} `}
      >
        <div className={classes["logo-about"]}>
          <Link to="/" className={classes["footer-logo"]}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>

          <div className={classes.about}>
            <h2 className={classes["footer-heading"]}>درباره ما</h2>
            <p className={classes["about-p"]}>
              رز چرم با تکیه بر شعار "لبخند ماندگار" رضایت مشتری را در اولویت
              دستور کار خود قرار داده است و سعی کرده است با ارائه محصولات با
              کیفیت و خدمات مناسب لبخند مشتری را پس از خرید ماندگار کند.
            </p>
          </div>
        </div>

        <nav className={classes["nav-col"]}>
          <h3 className={classes["footer-heading"]}>راهنمای خرید</h3>
          <ul className={classes["footer-nav"]}>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                راهنمای خرید از رز چرم
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                راهنمای خرید اقساطی
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                راهنمای خرید عمده
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                نحوه ثبت سفارش
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                روش های پرداخت سفارش
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                شیوه های ارسال سفارش
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={classes["nav-col"]}>
          <h3 className={classes["footer-heading"]}>خدمات مشتریان</h3>
          <ul className={classes["footer-nav"]}>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                سوالات متداول
              </Link>
            </li>
            <li>
              <Link to="/privacy" className={classes["footer-link"]}>
                قوانین حریم خصوصی
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                گارانتی محصول
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                شیوه تعویض و عودت محصول
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                پیگیری ارسال سفارش ها
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["footer-link"]}>
                نگهداری از محصولات چرمی
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes["logo-col"]}>
          <div className={classes["address-col"]}>
            <h4 className={classes["footer-heading"]}>آدرس و تلفن رز چرم</h4>
            <div className={classes.contacts}>
              <span>تهران خیابان تهران گالری رز چرم</span>
            </div>
            <ul className={classes["footer-nav"]}>
              <li className={classes["contacts-link"]}>
                <span>تلفن :</span>
                <span>
                  <Link to="/" className={classes["footer-link"]}>
                    0210001234
                  </Link>
                </span>
              </li>

              <li className={classes["contacts-link"]}>
                <span>موبایل :</span>
                <span>
                  <Link to="/" className={classes["footer-link"]}>
                    090000000
                  </Link>
                </span>
              </li>
              <li className={classes["contacts-link"]}>
                <span> ایمیل :</span>
                <span>
                  <Link to="/" className={classes["footer-link"]}>
                    info@rosecharm.ir
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div className={classes["newsletter-section"]}>
            <h4>
              شماره موبایل خود را وارد کنید تا از تخفیف‌های رزچرم باخبر شوید.
            </h4>
            <div className={classes["newsletter_frm"]}>
              <input
                placeholder="شماره موبایل خود را وارد کنید"
                className={classes["newsletter_input"]}
              />
              <button type="submit" className={classes["newsletter_btn"]}>
                ارسال
              </button>
            </div>
          </div>
          <h4 className={`${classes["footer-heading"]} ${classes.social} `}>
            ما را در شبکه های اجتماعی دنبال کنید
          </h4>
          <div>
            <ul className={classes["social-links"]}>
              <li>
                <Link to="/" className={classes["footer-link"]}>
                  <PiInstagramLogoLight className={classes["social-icon"]} />
                </Link>
              </li>
              <li>
                <Link to="/" className={classes["footer-link"]}>
                  <LiaTelegramPlane className={classes["social-icon"]} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
