import React from "react";
// style
import classes from "./style.module.css";

//image
import logo from "../../assets/image/gradient.png";

// package
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const validateMobileNumber = (rule, value, callback) => {
    const mobileNumberPattern = /^(\+98|0)?9\d{9}$/;
    // if(/^\d+$/.test(input))
    // ^\d{11$/.test(mobile)}  // نامعتبره
    if (value && !mobileNumberPattern.test(value)) {
      callback("شماره موبایل نادرست وارد شده است. ");
    } else {
      callback();
    }
  };
  const handleLogin = () => {};
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
        <Form
          className={classes["login-form"]}
          name="mobileNumberForm"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <span>سلام!</span>
          <div className={classes["login-textfeild"]}>
            <label className={classes["login-label"]}>
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </label>
          </div>
          <Form.Item
            // className={classes["section-input"]}
            // label="شماره موبایل"
            name="mobileNumber"
            rules={[
              {
                required: true,
                message: "لطفا شماره موبایل را وارد نمایید",
              },
              {
                validator: validateMobileNumber,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              ورود
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};

export default Login;
