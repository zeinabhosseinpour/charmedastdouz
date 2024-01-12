import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

//data
import {
  productslist2,
  child1,
  child2,
  child3,
  color,
  size,
  material,
} from "../Products/productsList2";

// package
import { Checkbox } from "antd";

// style
import classes from "./style.module.css";

import { productFilter } from "../Products/productsList2";

const SizeFilter = (props) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [ischecked, setIsChecked] = useState();
  const [listChecked, setListChecked] = useState([]);
  const [valueChecked, setValueChecked] = useState();

  // const result = child3.map((c3) => c3.attributes);
  // console.log("resultparam:", result);
  // const result1 = result.map((a) => ).map(i =>i.sizelist);
  // console.log("result1param:", result1);
  // const result2 = result.filter((f) => f.size == props.searchparams.size);
  // console.log("result2param:", result2);
  // const result3 = result2.map((item) =>
  //   console.log("itempropsparam:", item.size)
  // );
  // console.log("result3param:", result3);

  // const r = productFilter.filter(
  //   (p) => p.size.toString() === props.searchparams.get("size")
  // );
  // console.log("rparamssize:", r);
  // const r1 = r.map((item) => {
  //   return console.log("item:", item.size, item);
  // });
  // console.log("r1:", r1);

  const { productId, slug } = useParams();
  const plainOptions = size[slug].map((s) => ({
    label: s,
    value: s,
  }));

  //   const plainOptions = productslist2.map((c3) => ({
  //     label: c3.title,
  //     value: c3.title,
  //   }));
  // const byTitle = (title) => (book) =>
  //   book.title.toLowerCase().includes((title || "").toLowerCase());
  // <ul>
  //   {books.filter(byTitle(search.get("title"))).map((book) => (
  //     <li key={book.title}>{book.title}</li>
  //   ))}
  // </ul>;

  // const bySearch = (search) => (book) =>
  //   book.title.toLowerCase().includes((search.title || "").toLowerCase()) &&
  //   book.isCompleted === search.isCompleted;

  // <ul>
  //   {books.filter(bySearch(search)).map((book) => (
  //     <li key={book.title}>{book.title}</li>
  //   ))}
  // </ul>;
  const handleCheckboxChange = (checkedValues) => {
    props.handleonclick(checkedValues);
  };
  const onChangex = (checkedValues) => {
    // props.setsizechecked([...checkedValues, checkedValues]);
    props.setsizechecked(checkedValues);
    // props.setsearchparams({ size: checkedValues });

    props.handleonclick();
    console.log("searchparamszie:", props.searchparams);
  };

  const onChange = (checkedValues) => {
    props.setsizechecked(checkedValues);
    props.handleonclick();
    console.log("sizecheckedvalues: ", checkedValues);
    //   // setIsChecked(ischecked);
    // props.setsearchparams((prev) => ({ ...prev, size: checkedValues }));
    //   // setListChecked([...listChecked, checkedValues]);
    //   console.log("listcheck:", listChecked);
    //  setSearchParams({ size: checkedValues });

    //   // console.log("checkedvalues: ", checkedValues);
    //   // console.log("searchparam:", searchParams);
    //   // props.setListChecked(checkedValues);

    //   // props.handleonclick(checkedValues);
    //   // props.setsearchparams({ size: checkedValues ,material:});

    // props.setsearchparams({ size: checkedValues });

    //   // console.log(" props.searchparams:", props.searchparams);
  };
  // console.log("sizecheckedset:",props.)
  //   const itemsNest = [
  //     {
  //       key: "1",
  //       label: "This is panel nest panel",
  //       children: (
  //         <div>
  //           <Checkbox.Group
  //             className={classes["category-header"]}
  //             options={plainOptions}
  //             defaultValue={["Apple"]}
  //             onChange={onChangec}
  //           />
  //           <br />
  //           <br />,
  //         </div>
  //       ),
  //     },
  //   ];

  return (
    <div>
      {/* <div>propssize: {props.searchparams.get("size")}</div> */}
      {/* <div>
        {r.map((item) => (
          <div key={item.id}>
            sss
            {item.size} {item.id}
            bbb {item.title}
            {item.color} {item.material}
          </div>
        ))}
      </div>
      <div>getsize[1]:{props.searchparams.get("size")}</div> */}
      {/* <ul style={{ backgroundColor: "green" }}>
        {child3.map((c3) =>
          c3.attributes
            .map((a) => a.sizelist)
            .filter((f) => f.size == searchParams.get("size[0]"))
            .map((item) => <li key={item.id}>{item.size}</li>)
        )}
      </ul> */}
      {/* <div>size:{props.setsearchparams.size}</div> */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxHeight: "180px",
          overflow: "auto",
          padding: "10px",
        }}
      >
        {/* {size.map(m =>  */}
        {/* <li  style={{display:"flex",flexDirection:"column",gap:"15px"}}>
      {size["پوشاک چرمی"].map (s => 
        <div >{s}</div>
        )}
        </li> */}

        {/* )} */}
        {/* {size[slug].map((s) => (
        <li
          key={s.id}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          {s}
        </li>
      ))} */}
        <Checkbox.Group
          className={classes["category-header"]}
          options={plainOptions}
          // defaultValue={["Apple"]}
          // value={searchParams.get("size")}
          // value={searchParams.size}
          onChange={onChange}
          // onChange={handleCheckboxChange}
        />
      </ul>
    </div>
  );
};

export default SizeFilter;
