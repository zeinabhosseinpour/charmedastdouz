import React, { useEffect, useState } from "react";
import { useParams ,Link, useSearchParams,useLocation} from "react-router-dom";


//data
import {
  productslist2,
  child1,
  child2,
  child3,
  color,
  size,
  material

} from "../../../Components/Shop/Products/productsList2";

//package
import { Collapse, Switch ,ConfigProvider,Checkbox, Flex} from "antd";

// style 
import classes from './style.module.css';
import './global.css';


// component

import SizeFilter from "./sizeFilter";
import ColorsFilter from "./ColorsFilter";
import CategoryFilter from './CategoryFilter';
import MaterialFilter from "./MaterialFilter";
import PriceRangFilter from "./PriceRangFilter"; 


const Filter = (props) => {
   //state

  //  const location = useLocation();
  //  const searchParams = new URLSearchParams(location.search);
  //  const query = searchParams.get('color');
  //  console.log("query:",query);

const [materialChecked,setMaterialChecked]=useState(props.searchparams.get('material') || '');
const [sizeChecked,setSizeChecked]=useState(props.searchparams.get('size') || '');
const [colorChecked,setColorChecked]=useState([]);
const [rangePrice,setRangePrice]=useState([]);
const [checkedStock,setCheckedStock]=useState(1);
const [minPrice,setMinPrice]=useState();
const [maxPrice,setMaxPrice]=useState();
const [listchecked,setListChecked]=useState();
   const [searchParams, setSearchParams] = useSearchParams();
   console.log("searchparamsindexfilter:",searchParams);

   useEffect(()=> {
    const params=new URLSearchParams();
    props.searchparams.set('size',sizeChecked);
   props.searchparams.set('material',materialChecked);
   props.setsearchparams(params);

// props.setsearchparams(prev => ({...prev,size:sizeChecked,material:materialChecked,color:colorChecked,
//   minPrice:minPrice,maxPrice:maxPrice,
//   has_selling_stock:checkedStock}));

   },[sizeChecked,materialChecked]);

   const handleOnClick=()=> {
    // props.setsearchparams({size:sizecheckedvalues,material:matcheckedvalues});
    props.setsearchparams({size:sizeChecked,material:materialChecked,color:colorChecked,
    minPrice:minPrice,maxPrice:maxPrice,
    has_selling_stock:checkedStock});



    // props.setsearchparams({size:checksize,material:checkmaterial});
    console.log("sizecheckedhandle:",sizeChecked);
  console.log("materialcheckedhandle:",materialChecked);
  console.log("searchparampropshandle:",props.searchParams);
   }

  console.log("sizechecked:",sizeChecked);
  console.log("materialchecked:",materialChecked);
  console.log("searchparamprops:",props.searchParams);

   const { productid, slug } = useParams();
  
  console.log("collaps:","salam");


  const onChangec = (checkedValues) => {
    console.log('checkedvalues = ', checkedValues);
  };
//   // const plainOptions=['چرم گاوی ','چرم هورس گاوی','چرم بزی'];

//   // const plainOptions = ['Apple', 'Pear', 'Orange'];
//   const plainOptions=productslist2.map(c3 => ({label:c3.title, value:c3.title}));
//   console.log("plainoption:",plainOptions);
//   const options = [
//     {
//       label: 'Apple',
//       value: 'Apple',
//     },
//     {
//       label: 'Pear',
//       value: 'Pear',
//     },
//     {
//       label: 'Orange',
//       value: 'Orange',
//     },
//   ];
//   // const options = plainOptions.map(po =>{value:po.value});
//   const optionsWithDisabled = [
//     {
//       label: 'Apple',
//       value: 'Apple',
//     },
//     {
//       label: 'Pear',
//       value: 'Pear',
//     },
//     {
//       label: 'Orange',
//       value: 'Orange',
//       disabled: false,
//     },
//   ];
  const onChange = (checked) => {
    // console.log("keycolapspanel",key);
    console.log(`switch to ${checked}`);
    setCheckedStock(checked);
    
  };
//   const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;
//   const itemsNest = [
//     {
//       key: "1",
//       label: "This is panel nest panel",
//       children: (<div>
//         <Checkbox.Group className={classes['category-header']} options={plainOptions} defaultValue={['Apple']} onChange={onChangec} />
//       <br />
//       <br />
//       <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChangec} />
//       <br />
//       <br />
//       <Checkbox.Group
//         options={optionsWithDisabled}
//         disabled
//         defaultValue={['Apple']}
//         onChange={onChangec}
//       />,
//       </div>)
//     },
//   ];
  const items = [
    {
      key: "2",
      label: <div className={classes['filter-header']} >
      <span className={classes["filter-header_right"]}>فیلترها</span>
      <span onClick={() =>props.setsearchparams("")} className={classes["filter-header_left"]}>حذف فیلترها</span>
    </div>,
      showArrow:false,
      collapsible:"icon"   

    },
    {
      key: "1",
      label:<div className={classes['header-panel']}>دسته بندی</div> ,
      children: <CategoryFilter/>,
    },
   
    {
      key: "3",
      label: (
        <div  className={classes['filter-header']}>
          <span className={classes['header-panel']}> فقط کالاهای موجود</span>
          <div>
          <ConfigProvider
  theme={{
    token: {
      /* here is your global tokens */
     colorPrimary:"#eb3a3a",
    //  colorPrimary: "rgb(25, 191, 211)",
    
    },
  }}
>
<Switch size="small" defaultChecked  onChange={onChange} on />
  
</ConfigProvider>
            
          </div>
        </div>,
      
      ),
      showArrow:false,
      collapsible:"icon" 
    },
    {
      key: "8",
      label:<div className={classes['header-panel']}>سایز</div> ,
      children: ( <SizeFilter 
        searchparams={props.searchparams} setsearchparams={props.setsearchparams} 

        // listchecked={listchecked} setListChecked={setListChecked}
        sizechecked={sizeChecked} 
        setsizechecked={setSizeChecked} 
        handleonclick={handleOnClick}
        />

      //   <ul style={{display:"flex",flexDirection:"column",gap:"15px",maxHeight:"180px",overflow:"auto",padding:"10px"}}>
      //   {/* {size.map(m =>  */}
      //   {/* <li  style={{display:"flex",flexDirection:"column",gap:"15px"}}>
      // {size["پوشاک چرمی"].map (s => 
      //   <div >{s}</div>
      //   )}
      //   </li> */}
          
      //      {/* )} */}
      //     {size[slug].map(s =>
      //       <li  style={{display:"flex",flexDirection:"column",gap:"15px"}}>
      //         {s}
      //       </li>
      //       )}
      // </ul>
      ),
    },
    {
      key: "9",
      label:<div className={classes['header-panel']}> رنگ محصول</div>,
      children: ( <ColorsFilter 
        searchparams={searchParams} setsearchparams={setSearchParams}
        colorchecked={colorChecked} 
        setcolorchecked={setColorChecked}
        handleonclick={handleOnClick}
        />
        // <div>
        // {/* {child3.filter(item => item.id===3111 ).map(c3 => 

        // (<ul key={c3.id} style={{display:"flex",flexDirection:"column",gap:"15px",maxHeight:"180px",overflow:"auto",padding:"10px"}}>
        //   {c3.attributes.map(a =>
        //     (<div key={a.id}  >
        //   {a.colorcount !==null &&  (
        //     <li style={{display:"Flex",justifyContent:"space-between" ,gap:"10px",listStyle:"none"}}>
        //       <Link    to={`/product-detail`} style={{display:"flex",gap:"10px",color:"rgb(119, 119, 119)"}}>
        //   <div style={{width:"25px",height:"25px",border:"1px solid red",borderRadius:"100%",backgroundColor:a.colorValue}}></div>
        //   <span >{a.color}</span>
        //   </Link>
        //  <div style={{paddingInline:"5px",textAlign:"center",fontSize:"12px",minwidth: "30px",height:"20px",lineHeight:"18px",borderRadius:"35px",border:"1px solid rgba(0, 0, 0, 0.105)",color:" rgb(119, 119, 119)"}} >   {a.colorcount} </div>
        //     </li>
          
        //   )}
        //      </div>)  )
        
        //   }
        //   </ul>)
          
        //   )} */}
        //   {color[slug].map(c => 
        //     <div>
            
        //     <li style={{display:"Flex",justifyContent:"space-between" ,gap:"10px",listStyle:"none"}}>
        //       <Link    to={`/product-detail`} style={{display:"flex",gap:"10px",color:"rgb(119, 119, 119)"}}>
        //   <div style={{width:"25px",height:"25px",border:"1px solid red",borderRadius:"100%",backgroundColor:c.value}}></div>
        //   <span >{c.label}</span>
        //   </Link>
        //  <div style={{paddingInline:"5px",textAlign:"center",fontSize:"12px",minwidth: "30px",height:"20px",
        //  lineHeight:"18px",borderRadius:"35px",border:"1px solid rgba(0, 0, 0, 0.105)",color:" rgb(119, 119, 119)"}} >   
        //  {c.countColor} </div>
        //     </li>
        //     </div>
        //     )}
        
        // </div>
      ),
    },
//     {
//       key: "4",
//       label:<div className={classes['header-panel']}> رنگ محصول</div>,
//       children: (
//         <div>
//         {child3.filter(item => item.id===3111 ).map(c3 => 

//         (<ul key={c3.id} style={{display:"flex",flexDirection:"column",gap:"15px",maxHeight:"180px",overflow:"auto",padding:"10px"}}>
//           {c3.attributes.map(a =>
//             (<div key={a.id}  >
//           {a.colorcount !==null &&  (
//             <li style={{display:"Flex",justifyContent:"space-between" ,gap:"10px",listStyle:"none"}}>
//               <Link    to={`/product-detail`} style={{display:"flex",gap:"10px",color:"rgb(119, 119, 119)"}}>
//           <div style={{width:"25px",height:"25px",border:"1px solid red",borderRadius:"100%",backgroundColor:a.colorValue}}></div>
//           <span >{a.color}</span>
//           </Link>
//          <div style={{paddingInline:"5px",textAlign:"center",fontSize:"12px",minwidth: "30px",height:"20px",lineHeight:"18px",borderRadius:"35px",border:"1px solid rgba(0, 0, 0, 0.105)",color:" rgb(119, 119, 119)"}} >   {a.colorcount} </div>
//             </li>
          
//           )}
//              </div>)  )
        
//           }
//           </ul>)
          
//           )}
        
//         </div>
//       ),
//     },
//     {
//       key: "5",
//       label:  <div className={classes['header-panel']}>سایز</div>,
//       children: (
// //         <div>
        
// //         {child3.filter(item => item.id===3111 ).map(c3 => 

// // (<ul key={c3.id} style={{display:"flex",flexDirection:"column",gap:"15px",maxHeight:"180px",overflow:"auto",padding:"10px"}}>
// //   {c3.attributes.map(a =>
// //     (<div key={a.id}  >
// //       {a.sizelist.map(s => 
// //         <li key={s.id}>{s.size}</li>
// //         )}
// //       </div>
        
// //       ))}
// //       </ul>)
// //         )}
// //         </div>
// <ul style={{display:"flex",flexDirection:"column",gap:"15px",maxHeight:"180px",overflow:"auto",padding:"10px"}}>
//   {/* {size.map(s => 
//   <li key={s.id}>
// {s.size}
//   </li>
    
//     )} */}
   
// </ul>
//       )
//     },
    {
      key: "6",
      label:<div className={classes['header-panel']}>جنس</div> ,
      children: (<MaterialFilter
         searchparams={searchParams} setsearchparams={setSearchParams}
        handleonclick={handleOnClick}
        materialchecked={materialChecked} 
        setmaterialchecked={setMaterialChecked}/>
      //   <ul style={{display:"flex",flexDirection:"column",gap:"15px",maxHeight:"180px",overflow:"auto",padding:"10px"}}>
      //   {material.map(m => 
      //   <li key={m.id}>
      // {m.material}
      //   </li>
          
      //     )}
      // </ul>
      ),
    },
    {
      key: "7",
      label: <div className={classes['header-panel']}>فیلتر برساس قیمت</div>,
      children: (
    <PriceRangFilter
    // rangeprice={rangePrice} 
    // setrangeprice={setRangePrice} 
    minprice={minPrice}
    setminprice={setMinPrice}
    maxprice={maxPrice}
    setmaxprice={setMaxPrice}

    handleonclick={handleOnClick}
    />
      ),
    },
   
  ];
 
 

  // variable
  const c3 = child3.filter((p) => p.id.toString() === productid);
  console.log("c3.material:", c3.material, c3,productid,slug);

  return (
    <section>
      
      <div>

{/* <h1>Search Results for: {query}</h1> */}

</div>

      <div>
       
        <ConfigProvider
         theme={{
          components: {
            Switch: {
              handleSizeSM: 10,
              trackMinWidthSM: 5,
              trackHeightSM: 5,
              trackPadding: 32,
              innerMaxMargin:10,
              trackHeight:12
              
            },
          },
        }}
 
>
  
</ConfigProvider>
        <div>
        <ConfigProvider
  theme={{
    token: {
      /* here is your global tokens */
      borderRadius:26,
      // colorBorder: #e0e0e2
    },
  }}
>
<Collapse
       style={{position:"sticky"}}
       items={items}
    collapsible="header"    
   expandIconPosition="end"
      //  onChange={onChange}
       expandIcon={null}
       
     />
</ConfigProvider>
        
          
        </div>
      </div>
    </section>
  );
};

export default Filter;
