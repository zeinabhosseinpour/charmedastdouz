import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// package

import { ConfigProvider, Modal } from "antd";
import { cartaction } from "../../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

// style
import classes from "./style.module.css";

// icons

import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";

//  data
import { child3 } from "../../Components/Shop/Products/productsList2";

//component
import ProductAds from "./ProductAds";
import ProductDetailTab from "./ProductDetailTab";
import SwiperSlider from "./SwiperSlider";

const SingleProductDetail = () => {
  //   states

  const [quantity, setQuantity] = useState(1);
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { productid, slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputColor, setInputColor] = useState();
  const [inputSize, setInputSize] = useState();
  const [activeColor, setActiveColor] = useState();
  const [activeSize, setActiveSize] = useState();
  const [sizelist, setSizeList] = useState([]);
  const [countColor, setCountColor] = useState();

  //   variables
  const item = child3.find((item) => item.id.toString() === productid);

  const arrayecolorid = item.attributes[0].id;
  const [itemIdSlider, setItemIdSlider] = useState(arrayecolorid);

  const product = child3.find((p) => p.id.toString() === productid);
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
    { title: product.title, url: `/product-detail/${productid}/${slug}` },
  ];

  //   side effect
  useEffect(() => {
    const item = child3.find((item) => item.id.toString() === productid);
    const arrayeColor = item.attributes[0].color;
    const colorCount = item.attributes[0].colorcount;
    const listSize = item.attributes[0].sizelist.map((s) => ({
      id: s.id,
      size: s.size,
    }));

    setActiveColor(arrayeColor);
    setCountColor(colorCount);
    setSizeList(listSize);
    setInputColor(true);
  }, []);

  //   handlers
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleColorClick = (id, color, count, sizelist) => {
    setActiveColor(color);
    setCountColor(count);
    setQuantity(1);
    setSizeList(sizelist.map((s) => ({ id: s.id, size: s.size })));
    setItemIdSlider(id);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const handleAddToCart = () => {
    const colorItem = item.attributes.find((i) => i.color === activeColor);
    const restCount = cartItem.quantity - countColor;

    if ((inputColor && inputSize) || quantity <= restCount) {
      showModal();
      dispatch(
        cartaction.addToCart({
          cartItem: item,
          quantityItem: quantity,
          productColor: activeColor,
          productSize: activeSize,
          productImg: colorItem.img,
        })
      );
      setActiveSize("");
      setInputSize(false);
    } else {
      alert("لطفا رنگ و سایز محصول را انتخاب نمایید");
    }
  };

  //    functions

  const showModal = () => {
    setIsModalOpen(true);
  };
  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    const x = priceFormat?.format(price);

    return x;
  };

  return (
    <div className={classes["single-product-detail"]}>
      <div className={classes["breadcrumbs"]}>
        {/* دسته بندی / کفش چرمی / کفش زنانه / صندل زنانه */}
        {breadcrumbs.map((crumb, index) => (
          <li style={{ textDecoration: "none", listStyle: "none" }} key={index}>
            {/* <Link
              style={{ textDecoration: "none", listStyle: "none" }}
              to={crumb.url}
            >
              {crumb.title} /
            </Link> */}
            {index > 0 && <span>/</span>}
            {crumb.url ? (
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to={crumb.url}
              >
                {crumb.title}
              </Link>
            ) : (
              <span>{crumb.title}</span>
            )}
          </li>
        ))}
      </div>
      <div>
        {child3
          .filter((c3) => c3.id.toString() === productid)
          ?.map((p) => {
            return (
              <div className={classes["product-section"]} key={p.id}>
                <div className={classes["product-img-information"]}>
                  <div className={classes["section-img"]}>
                    <SwiperSlider
                      colorItemId={itemIdSlider}
                      defaultColorId={arrayecolorid}
                      productId={p.id}
                    />
                  </div>
                  <div className={classes["product-information"]}>
                    <div className={classes["p-categoty"]}>
                      <div>دسته بندی : {p.category}</div>
                      <h2 className={classes["product-title"]}>{p.title}</h2>
                    </div>
                    <div className={classes["product-attribute"]}>
                      <span> ویژگی های محصول</span>
                      <span>جنس محصول : ({p.material})</span>
                    </div>
                    <hr className={classes["hr-div"]} />

                    <div className={classes["product-color"]}>
                      <span> رنگ محصول : ( {activeColor} ) </span>
                      <div className={classes["color-section"]}>
                        {p.attributes.map((item) => (
                          <div key={item.id}>
                            {item.colorcount && (
                              <label
                                className={
                                  activeColor === item.color
                                    ? classes["color-is-active"]
                                    : classes["color-item"]
                                }
                                onClick={() =>
                                  handleColorClick(
                                    item.id,
                                    item.color,
                                    item.colorcount,
                                    item.sizelist
                                  )
                                }
                              >
                                <input
                                  style={{
                                    opacity: 0,
                                    backgroundcolor: "#fff",
                                    border: "solid 1px #d6d5d5",
                                    lineheight: "48px",
                                    borderradius: "12px",
                                    paddingright: "16px",
                                    color: "#000",
                                    fontsize: "15px",
                                  }}
                                  type="radio"
                                  name="productcolor"
                                  onChange={(e) =>
                                    setInputColor(e.target.value)
                                  }
                                />

                                <img
                                  src={item.img}
                                  alt="productimg"
                                  className={classes["product-color-img"]}
                                />
                                <span className={classes["color-name"]}>
                                  {item.color}
                                </span>
                              </label>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={classes["count-available-product"]}>
                      تعداد موجود محصول : {countColor}
                    </div>
                    <div className={classes["product-size"]}>
                      <span> سایز محصول</span>
                      <div className={classes["size-section"]}>
                        {sizelist.map((s) => (
                          <li key={s.id} className={classes["li-size"]}>
                            <label
                              className={
                                activeSize === s.size
                                  ? classes["size-is-active"]
                                  : classes["size-item"]
                              }
                              onClick={() => handleSizeClick(s.size)}
                            >
                              <input
                                className={classes["input-size"]}
                                type="radio"
                                name="productcolor"
                                onChange={(e) => setInputSize(e.target.value)}
                              />
                              <span>{s.size}</span>
                            </label>
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes["seller-section"]}>
                  <div className={classes["seller-top"]}>
                    {p.off && (
                      <div>
                        <div className={classes["section-price_off"]}>
                          <div className={classes["product-orginal_price"]}>
                            {priceIntl(p.price)}
                          </div>
                          <div className={classes["off-section"]}>
                            <span>{p.off}%</span>
                          </div>
                        </div>
                        <div className={classes["priceoff-section"]}>
                          <span>
                            {"   "}تخفیف شما {"   "}
                          </span>
                          <span>
                            {"   "} {priceIntl(p.price * p.off * 0.01)}{" "}
                          </span>
                          <span> تومان </span>
                        </div>
                      </div>
                    )}
                    <div className={classes["priceoff-section"]}>
                      <span>قیمت محصول: </span>
                      <span>{priceIntl(p.price - p.price * p.off * 0.01)}</span>
                      <span>تومان</span>
                    </div>
                    <div className={classes["add-section"]}>
                      <div className={classes["icon-count"]}>
                        <button
                          disabled={quantity >= countColor}
                          className={classes["icon-btn"]}
                        >
                          <HiOutlinePlus
                            onClick={() => setQuantity(quantity + 1)}
                            className={classes.icon}
                          />
                        </button>

                        <span>{priceIntl(quantity)}</span>
                        <FaMinus
                          onClick={() =>
                            quantity > 1 ? setQuantity(quantity - 1) : ""
                          }
                          className={classes.icon}
                        />
                      </div>

                      <ConfigProvider
                        theme={{
                          components: {
                            Modal: {
                              footerBg: "green",
                            },
                          },
                        }}
                      ></ConfigProvider>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorPrimaryBorder: "red",
                            borderRadiusLG: 15,
                            colorIcon: "red",
                          },
                        }}
                      >
                        <button
                          onClick={() =>
                            handleAddToCart(productid, activeColor)
                          }
                          className={classes["btn-add_cart"]}
                        >
                          افزودن به سبد خرید
                        </button>

                        <Modal
                          footer={null}
                          okButtonProps={{
                            style: { backgroundColor: "#ef4056" },
                          }}
                          className={classes["modal"]}
                          autoFocusButton={null}
                          mask={true}
                          width={500}
                          height={500}
                          cancelText="ادامه خرید"
                          okText="مشاهده سبدخرید"
                          maskStyles={{
                            width: "50px",
                            height: "100px",
                            color: "green",
                          }}
                          styles={{
                            mask: {
                              backdropFilter: "blur(10px)",
                            },
                          }}
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        >
                          <div className={classes["modal"]}>
                            <p className={classes["modal-body"]}>
                              سبد خرید شما به روز شد !
                            </p>

                            <div className={classes["modal-footer"]}>
                              <Link
                                onClick={handleCancel}
                                to={`/product-detail/${p.id}/${p.slug}`}
                                className={classes["modal-btn_buy"]}
                              >
                                ادامه دادن خرید
                              </Link>
                              <Link
                                className={classes["modal-btn"]}
                                to={`/cart`}
                              >
                                مشاهده سبد خرید
                              </Link>
                            </div>
                          </div>
                        </Modal>
                      </ConfigProvider>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <ProductAds />
      <hr className={classes["hr-div"]} />
      <ProductDetailTab />
    </div>
  );
};

export default SingleProductDetail;
