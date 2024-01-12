import React, { useState } from "react";

import { useParams, Link } from "react-router-dom";

//data
import {
  productslist2,
  child1,
  child2,
  child3,
  color,
  size,
  material,
  productFilter,
} from "../../../Components/Shop/Products/productsList2";

// style
import classes from "./style.module.css";

const ColorsFilter = (props) => {
  //state

  const { productid, slug } = useParams();
  const [checkedValues, setCheckedValues] = useState([]);

  // variable
  const c3 = child3.filter((p) => p.id.toString() === productid);
  console.log("c3.material:", c3.material, c3, productid, slug);
  console.log("checkvaluescolor:", checkedValues);

  const handleColor = (colorLabel) => {
    setCheckedValues(colorLabel);
    console.log("checkvaluescolorhandle:", checkedValues);
    props.setcolorchecked([...props.colorchecked, colorLabel]);
    props.handleonclick();
    console.log(" props.setsearchparams:", props.setsearchparams);

    // child3.map((c3) => c3.attributes.filter((a) => a.color === colorLabel));
    // props.setsearchparams({ color: colorLabel });

    // console.log("checkedvalues: ", checkedValues);
  };

  // console.log("colorlabel:",colorLabel)
  // const onChange = (checkedValues) => {
  //   // setIsChecked(ischecked);
  //   // setSearchParams((prev) => [...prev, { size: checkedValues }]);
  //   // setListChecked([...listChecked, checkedValues]);
  //   // console.log("listcheck:", listChecked);
  //   // setSearchParams({ size: checkedValues });
  //   // console.log("checkedvalues: ", checkedValues);
  //   // console.log("searchparam:", searchParams);
  //   props.setsearchparams({ color: checkedValues });
  //   console.log("checkedvalues: ", checkedValues);
  //   console.log(" props.setsearchparams:", props.setsearchparams);
  // };

  return (
    <section
      style={{
        display: "Flex",
        // justifyContent: "space-between",
        flexDirection: "column",
        gap: "6px",
        listStyle: "none",
        cursor: "pointer",
      }}
    >
      {/* <div>propscolor: {props.searchparams.get("color")}</div> */}
      {/* <div>
        {productFilter
          .filter((p) => p.color === props.searchparams.get("color"))
          ?.map((item) => (
            <div key={item.id}>
              {item.size} {item.id}
              bbb {item.title}
              {item.color}
              {item.material}
            </div>
          ))}
      </div> */}
      {/* {child3.filter(item => item.id===3111 ).map(c3 => 

        (<ul key={c3.id} style={{display:"flex",flexDirection:"column",gap:"15px",maxHeight:"180px",overflow:"auto",padding:"10px"}}>
          {c3.attributes.map(a =>
            (<div key={a.id}  >
          {a.colorcount !==null &&  (
            <li style={{display:"Flex",justifyContent:"space-between" ,gap:"10px",listStyle:"none"}}>
              <Link    to={`/product-detail`} style={{display:"flex",gap:"10px",color:"rgb(119, 119, 119)"}}>
          <div style={{width:"25px",height:"25px",border:"1px solid red",borderRadius:"100%",backgroundColor:a.colorValue}}></div>
          <span >{a.color}</span>
          </Link>
         <div style={{paddingInline:"5px",textAlign:"center",fontSize:"12px",minwidth: "30px",height:"20px",lineHeight:"18px",borderRadius:"35px",border:"1px solid rgba(0, 0, 0, 0.105)",color:" rgb(119, 119, 119)"}} >   {a.colorcount} </div>
            </li>
          
          )}
             </div>)  )
        
          }
          </ul>)
          
          )} */}
      {color[slug].map((c) => (
        <div key={c.id}>
          <li
            style={{
              display: "Flex",
              justifyContent: "space-between",
              gap: "10px",
              // listStyle: "none",
              // cursor: "pointer",
            }}
          >
            {/* <Link
              to={`/product-detail`}
              style={{
                display: "flex",
                gap: "10px",
                color: "rgb(119, 119, 119)",
              }}
              onclick={() => handleColor(c.label)}
            > */}
            <div
              style={{
                width: "25px",
                height: "25px",
                border: "1px solid red",
                borderRadius: "100%",
                backgroundColor: c.value,
              }}
              onClick={() => handleColor(c.label)}
            ></div>
            <span>{c.label}</span>
            {/* </Link> */}
            <div
              style={{
                paddingInline: "5px",
                textAlign: "center",
                fontSize: "12px",
                minwidth: "30px",
                height: "20px",
                lineHeight: "18px",
                borderRadius: "35px",
                border: "1px solid rgba(0, 0, 0, 0.105)",
                color: " rgb(119, 119, 119)",
              }}
            >
              {c.countColor}
            </div>
          </li>
        </div>
      ))}
    </section>
  );
};

export default ColorsFilter;
