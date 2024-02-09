import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// package

import { ConfigProvider, Modal } from "antd";
import { cartaction } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

//image
import img1 from "../../assets/image/0003081_Commodity-guarantee-removebg-preview.png";
import img2 from "../../assets/image/0003071_fast-sending.png";
import img3 from "../../assets/image/icons8-leather-64.png";
import img4 from "../../assets/image/7days.png";
import productimg from "../../assets/image/photo_2019-12-11_16-39-53.jpg";

// style
import classes from "./style.module.css";

// icon
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

//component

import { child3 } from "../../Components/Shop/Products/productsList2";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { Content } from "antd/es/layout/layout";
import ProductAds from "./ProductAds";
import ProductDetailTab from "./ProductDetailTab";
import SwiperSlider from "./SwiperSlider";

const SingleProductDetail = () => {
  // const [itemColor, setItemColor] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputColor, setInputColor] = useState();
  const [inputSize, setInputSize] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // handlers
  const handleDetails = () => {};
  const { productid, slug } = useParams();
  const item = child3.find((item) => item.id.toString() === productid);
  const arryeSize = item.attributes[0].sizelist[0].size;
  console.log(" arryeSizeproductdetail:", arryeSize);
  const [activeSize, setActiveSize] = useState();
  console.log("activesize:", activeSize);
  const colorCount = item.attributes[0].colorcount;
  const [countColor, setCountColor] = useState();
  console.log("colorcount:", colorCount);
  const listSize = item.attributes[0].sizelist.map((s) => ({
    id: s.id,
    size: s.size,
  }));
  const sizeActive = listSize[0].size;
  console.log("sizeactive:", sizeActive);
  const [sizelist, setSizeList] = useState([]);

  const arrayecolorid = item.attributes[0].id;

  console.log("arrayecolorid:", arrayecolorid);
  const arrayeColor = item.attributes[0].color;
  console.log("arrayecolor:", arrayeColor);
  const [activeColor, setActiveColor] = useState();
  // const colorItem = item.attributes.find((i) => i.color === activeColor);
  // console.log("coloritem:", colorItem, colorItem.img);

  const handleColorClick = (id, color, count, sizelist) => {
    setActiveColor(color);
    setCountColor(count);
    // setItemColor(color);
    setQuantity(1);
    console.log("countcolor:", count);
    console.log("sizelisthandl:", sizelist);
    setSizeList(sizelist.map((s) => ({ id: s.id, size: s.size })));
    setItemIdSlider(id);
    // <SwiperSlider itemId={itemIdSlider} />;
  };
  const [itemIdSlider, setItemIdSlider] = useState(arrayecolorid);
  console.log("itemsliderid:", itemIdSlider);
  console.log("sizelist:", sizelist);
  const handleSizeClick = (size) => {
    console.log("sizehandle:", size);
    setActiveSize(size);
  };
  //state

  console.log("param:", productid);
  const [quantity, setQuantity] = useState(1);
  // const addItemToCart = useSelector(cartaction.addToCart);
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const item = child3.find((item) => item.id.toString() === productid);
    const arrayeColor = item.attributes[0].color;
    const colorCount = item.attributes[0].colorcount;
    const listSize = item.attributes[0].sizelist.map((s) => ({
      id: s.id,
      size: s.size,
    }));
    const arryeSize = item.attributes[0].sizelist[0].size;
    setActiveColor(arrayeColor);
    setCountColor(colorCount);
    setSizeList(listSize);
    // setActiveSize(arryeSize);
    setInputColor(true);
    // setInputSize(true);
  }, []);
  console.log("activecolor", activeColor);

  const handleBtn = () => {
    const itemColor = cartItem.find(
      (itemcolor) => itemcolor.color === activeColor
    );
    return itemColor;
  };

  //handler
  const handleAddToCart = (id) => {
    // const Item: CartItem = {
    //   id: productid,
    //   title: item.title,
    //   price: item.price,
    //   quantity,
    // };
    const colorItem = item.attributes.find((i) => i.color === activeColor);

    console.log("color:", activeColor);
    console.log("quantity:", quantity);
    console.log("activesize:", activeSize);
    const restCount = cartItem.quantity - countColor;
    console.log("restCount:", restCount);
    // if (restCount) {}
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
    console.log("addcart:", id, item);

    //     const shoeItem: CartItem = {
    //       id: shoeId,
    //       name: shoeData.name,
    //       price: +shoeData.price.slice(1),
    //       category: shoeData.category,
    //       image: shoeData.images[0],
    //       quantity,
    //       includedInSum: false,
    //   };
    //   dispatch( addToCart(shoeItem) );

    //   setShowNotification(true);
    //   setTimeout(() => setShowNotification(false), 4000);
    // }
    // dispatch(cartaction.addToCart({ productId: productid }));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    dispatch(cartaction.incrementQuantity({ productId: productid }));
  };
  const handleDecrement = (id) => {
    dispatch(cartaction.decrementQuantity({ productId: id }));
    console.log("decre:", id);
  };
  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    const x = priceFormat?.format(price);
    // console.log("intl:", x);
    return x;
  };

  const getPriceOff = (price, off) => {
    if (off !== null) {
      const priceOff = price - price * off * 0.01;
      return priceIntl(priceOff);
    } else {
      // console.log("offget:", off);
      return priceIntl(price);
    }
  };

  // const grandTotal =
  //     cartItems.length === 0
  //       ? 0
  //       : cartItems
  //           .map((item) =>
  //             item.includedInSum ? item.price * item.quantity : 0
  //           )
  //           .reduce((itemPrice, accPrice) => accPrice + itemPrice);
  //   const cartQuantity = cartItems.length;

  //   const cartTotal = cartItem
  //     .map((item) => item.price * item.quantity)
  //     .reduce((prevValue, currValue) => prevValue + currValue, 0);
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
            // const priceFormat = new Intl.NumberFormat("fa-Ir");
            // const price = priceFormat.format(p.price);
            // console.log("priceformat:", price);
            // const off = new Intl.NumberFormat("fa-IR", {}).format(
            //   p.price * p.off * 0.01
            // );
            // console.log("offformat:", off);
            // const priceOff = new Intl.NumberFormat("fa-IR", {}).format(
            //   p.price - p.price * p.off * 0.01
            // );
            // console.log("priceOffformat:", priceOff);

            return (
              <div className={classes["product-section"]} key={p.id}>
                <div className={classes["product-img-information"]}>
                  <div className={classes["section-img"]}>
                    <SwiperSlider
                      colorItemId={itemIdSlider}
                      defaultColorId={arrayecolorid}
                      productId={p.id}
                    />
                    {/* <div className={classes["product-main-img"]}>

                      <img
                        src={p.img}
                        alt="productimg"
                        className={classes.mainimg}
                      />
                    </div>
                    <div className={classes["product-subimg"]}>
                      <img
                        src={p.img}
                        alt="productimg"
                        className={classes.subimg}
                      />
                      <img
                        src={p.img}
                        alt="productimg"
                        className={classes.subimg}
                      />
                      <img
                        src={p.img}
                        alt="productimg"
                        className={classes.subimg}
                      />
                    </div> */}
                  </div>
                  <div className={classes["product-information"]}>
                    <div className={classes["p-categoty"]}>
                      <div>دسته بندی: {p.category}</div>
                      <h2 className={classes["product-title"]}>{p.title}</h2>
                    </div>
                    <div className={classes["product-attribute"]}>
                      <span> ویژگی های محصول</span>
                      <span>جنس محصول : ({p.material})</span>
                      {/* <span>
                          {p.length} * {p.height} * {p.width}
                        </span> */}
                    </div>
                    <hr className={classes["hr-div"]} />

                    <div className={classes["product-color"]}>
                      <span> :رنگ محصول ( {activeColor} ) </span>
                      <div className={classes["color-section"]}>
                        {p.attributes.map((item) => (
                          // console.log("itemattribute:", item);
                          // setActiveColor(p.attributes[0]);

                          <div key={item.id}>
                            {/* <ul
                              //
                              >
                                {item.sizelist((s) => (
                                  <span
                                    key={s.id}
                                    className={
                                      activeSize === s.size
                                        ? classes["color-is-active"]
                                        : classes["color-item"]
                                    }
                                    onClick={() => handleSizeClick(s.size)}
                                  >
                                    222
                                  </span>
                                ))}
                              </ul> */}
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
                                    // cursor: "not-allowed",
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
                              /* <ul
                                //
                                >
                                  {activeColor === item.color
                                    ? item.sizelist.map((s) => ({
                                        id: s.id,
                                        size: s.size,
                                      }))
                                    : "11"}
                                </ul> */
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
                          <span> تخفیف شما</span>
                          <span>{priceIntl(p.price * p.off * 0.01)}</span>
                          <span>تومان</span>
                        </div>
                      </div>
                    )}
                    <div className={classes["priceoff-section"]}>
                      <span>قیمت محصول: </span>
                      <span>{priceIntl(p.price - p.price * p.off * 0.01)}</span>
                      <span>تومان</span>
                      {/* <span>{getPriceOff(p.price, p.off)}</span> */}
                    </div>
                    <div className={classes["add-section"]}>
                      <div className={classes["icon-count"]}>
                        <button
                          disabled={quantity >= countColor}
                          className={classes["icon-btn"]}
                        >
                          <HiOutlinePlus
                            // disabled={quantity > countColor}
                            onClick={
                              () =>
                                // quantity < countColor &&
                                setQuantity(quantity + 1)
                              // : ""
                            }
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
                              /* here is your component tokens */
                              footerBg: "green",
                            },
                          },
                        }}
                      ></ConfigProvider>
                      <ConfigProvider
                        theme={{
                          token: {
                            /* here is your global tokens */
                            colorPrimaryBorder: "red",
                            borderRadiusLG: 15,
                            // borderRadiusSM: 15,
                            colorIcon: "red",
                            // colorText: "red",
                          },
                        }}
                      >
                        {/* {handleBtn().length > 0 ? (
                            <button>مشاهده سبد خرید</button>
                          ) : ( */}
                        <button
                          onClick={() =>
                            handleAddToCart(productid, activeColor)
                          }
                          className={classes["btn-add_cart"]}
                        >
                          افزودن به سبد خرید
                        </button>
                        {/* )} */}
                        <Modal
                          // closeIcon={null}
                          footer={null}
                          okButtonProps={{
                            style: { backgroundColor: "#ef4056" },
                          }}
                          className={classes["modal"]}
                          autoFocusButton={null}
                          mask={false}
                          width={500}
                          height={500}
                          cancelText="ادامه خرید"
                          okText="مشاهده سبدخرید"
                          maskStyles={{
                            width: "50px",
                            height: "100px",
                            color: "green",
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
