import React from "react";
import { Link } from "react-router-dom";

// style
import classes from "./style.module.css";

//image
import logo from "../../assets/image/gradient.png";

const Login = () => {
  const handleLogin = () => {};
  return (
    <main className={classes["main-login"]}>
      <div className={classes["body-login"]}>
        <div className={classes["logo-about"]}>
          <Link to="/" className={classes.logo}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </div>
        <div>
          <div className={classes.login}>ورود | ثبت نام</div>
        </div>
        <form className={classes["login-form"]}>
          <span>سلام!</span>
          <div className={classes["login-textfeild"]}>
            <label className={classes["login-label"]}>
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </label>
            <div className={classes["section-input"]}>
              <input
                type="text"
                name="username"
                id="username"
                dir="ltr"
                className={classes["login-input"]}
              />
            </div>
          </div>

          <button
            type="submit"
            id="login-register"
            onClick={handleLogin}
            className={classes["login-btn"]}
          >
            ورود
          </button>

          <div className={classes.privacy}>
            <span>
              <span> ورود شما به معنای پذیرش </span>

              <Link to={`/`} className={classes["site-privacy"]}>
                شرایط رز چرم
              </Link>
              <span> و </span>
              <Link to={`/privacy`} className={classes["site-privacy"]}>
                قوانین حریم‌خصوصی
              </Link>
              <span> است</span>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
