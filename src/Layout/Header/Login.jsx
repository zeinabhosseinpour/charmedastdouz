import React from "react";
import { Link } from "react-router-dom";

// icons
import { FaRegUser } from "react-icons/fa";

// style
import classes from "./style.module.css";

import { Input } from "antd";
import { FiPhone } from "react-icons/fi";
import { PiPhoneLight } from "react-icons/pi";
import { PiPhoneThin } from "react-icons/pi";

const Login = () => {
  // const { Search } = Input;
  // const onSearch = (value, _e, info) => console.log(info?.source, value);
  // <Search placeholder="input search text" onSearch={onSearch} enterButton />
  return (
    <div className={classes.login}>
      <Link to="/login" className={classes.alogin}>
        <FaRegUser className={classes["left-header_img"]} />
        <span>ورود و ثبت نام</span>
      </Link>
    </div>
  );
};

export default Login;
