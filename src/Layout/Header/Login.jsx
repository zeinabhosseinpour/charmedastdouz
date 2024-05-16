import { Link } from "react-router-dom";

// icons
import { FaRegUser } from "react-icons/fa";

// style
import classes from "./style.module.css";

const Login = () => {
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
