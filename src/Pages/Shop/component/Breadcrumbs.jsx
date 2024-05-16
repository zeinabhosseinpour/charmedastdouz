import { Link } from "react-router-dom";

//   data
import { child3 } from "../../../Components/Shop/Products/productsList2";

//   style
import classes from "./style.module.css";

const Breadcrumbs = (props) => {
  const product = child3?.find(
    (p) =>
      p.categoryId?.toString() === props.productid ||
      p.parent1Id?.toString() === props.productid ||
      p.parentId?.toString() === props.productid
  );

  const breadcrumbs = [
    { title: "خانه", url: "/" },
    {
      title: product.category,
      url: `/product-category/${product.categoryId}/${product.category}`,
    },
    {
      title: product.parent1,
      url: `/product-category/${product.parent1Id}/${product.parent1}`,
    },
    {
      title: product.parent,
      url: `/product-category/${product.parentId}/${product.parent}`,
    },
    // {
    //   title: product.title,
    //   url: `/product-detail/${props.productid}/${props.slug}`,
    // },
  ];

  return (
    <div>
      <div className={classes["breadcrumbs"]}>
        دسته بندی / کفش چرمی / کفش زنانه / صندل زنانه
        {breadcrumbs.map((crumb, index) => (
          // product.category === props.productid &&
          <li key={index}>
            {index > 0 && <span>/</span>}
            {crumb.url ? (
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to={crumb.url}
              >
                {crumb.title} /
              </Link>
            ) : (
              <span>{crumb.title}</span>
            )}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
