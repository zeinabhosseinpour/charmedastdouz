import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

//package
import { Collapse, Switch, ConfigProvider, Checkbox, Flex } from "antd";

// style
import classes from "./style.module.css";

//data
import {
  // import { keys } from 'lodash';
  productslist2,
  child1,
  child2,
  child3,
  color,
  size,
  material,
  category,
  category1,
} from "../../../Components/Shop/Products/productsList2";

const CategoryFilter = () => {
  //state
  const { productid, slug } = useParams();
  console.log("productidcategory:", productid, slug);
  const [params, setParams] = useSearchParams();
  const [categoryName, setCategoryName] = useState();
  console.log("categoryname:", categoryName);
  const onChangee = (key) => {
    console.log("headerkeycolapsobject:", key);
    setCategoryName(key);
  };
  // useEffect(
  //   (key) => {
  //     if (categoryName) {
  //       setCategoryName(key);
  //     }
  //   },
  //   [categoryName]
  // );

  const onChangec = (checkedValues) => {
    const keys = params.keys();

    const prevParams = {};

    for (var key of keys) {
      prevParams[key] = params.getAll(key);
    }
    console.log("prevparamscat:", prevParams);
    setParams({ ...prevParams, category: checkedValues });
  };
  console.log("paramscat:", params);
  console.log("collaps:", "salam");
  // const onChangec = (checkedValues) => {
  //   console.log("checked = ", checkedValues);
  // };
  // const plainOptions=['چرم گاوی ','چرم هورس گاوی','چرم بزی'];

  // const plainOptions = ['Apple', 'Pear', 'Orange'];
  const plainOptions = productslist2.map((c3) => ({
    label: c3.title,
    value: c3.title,
  }));
  // const plainOptions = category[slug].map((c3) => ({
  //   label: c3.title,
  //   value: c3.title,
  // }));
  console.log("plainoption:", plainOptions);
  const plainOptions2 = Object.keys(category);
  console.log("plainoption2:", plainOptions2);

  const options = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
    },
  ];
  // const options = plainOptions.map(po =>{value:po.value});
  const optionsWithDisabled = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
      disabled: false,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  const text = `
   A dog is a type of domesticated animal.
   Known for its loyalty and faithfulness,
   it can be found as a welcome guest in many households across the world.
 `;
  const itemsNest = [
    {
      key: "1",
      label: "This is panel nest panel",
      children: (
        <div>
          <Checkbox.Group
            className={classes["category-header"]}
            options={plainOptions2}
            defaultValue={["Apple"]}
            onChange={onChangec}
          />
          {/* <br />
          <br />
          <Checkbox.Group
            options={options}
            defaultValue={["Pear"]}
            onChange={onChangec}
          />
          <br />
          <br />
          <Checkbox.Group
            options={optionsWithDisabled}
            disabled
            defaultValue={["Apple"]}
            onChange={onChangec}
          />
           */}
        </div>
      ),
    },
  ];
  return (
    <div style={{ maxHeight: "300px", overflow: "auto", width: "400px" }}>
      {/* <Collapse
        items={itemsNest}
        defaultActiveKey="1"
        bordered={false}
        expandIconPosition="end"
      />

      <Checkbox onChange={onChange}>Checkbox</Checkbox> */}
      {category1.map((p) => (
        <Collapse
          // defaultActiveKey={["1"]}
          onChange={onChange}
          key={p.id}
          bordered={false}
          expandIconPosition="end"
          style={{ backgroundColor: "white" }}
          styles={{ lineHeight: "0.5" }}
          contentBg="red"
        >
          <Collapse.Panel
            key={p.id}
            // {...p.hasChild ===0 ? showArrow="false" : showArrow="true"}
            header={
              <Link
                to={`/product-category/${p.id}/${p.slug}`}
                // onMouseEnter={() => setMenuItemId(menuitem.id)}
              >
                <Checkbox onChange={onChange}>
                  plist2:{p.title}
                  {p.id}
                </Checkbox>
              </Link>
            }
          >
            {/* <p>paragraf {p.title}</p> */}
            {/* <Collapse
              // defaultActiveKey={["2"]}
              onChange={onChange}
              key={p.id}
              bordered={false}
              expandIconPosition="end"
            >
              <Collapse.Panel
                header={
                  <Link
                    to={`/product-category/${p.id}/${p.slug}`}
                    // onMouseEnter={() => setMenuItemId(menuitem.id)}
                  > */}
            {p.child.map((c) => (
              <Collapse
                // defaultActiveKey={["2"]}
                onChange={onChange}
                key={c.id}
                bordered={false}
                expandIconPosition="end"
                style={{ backgroundColor: "white" }}
              >
                <Collapse.Panel
                  header={
                    <Link
                      to={`/product-category/${c.id}/${c.slug}`}
                      // onMouseEnter={() => setMenuItemId(menuitem.id)}
                    >
                      <Checkbox onChange={onChange} key={c.id}>
                        plist3:{c.title}
                      </Checkbox>
                    </Link>
                  }
                >
                  {c.hasChild === 1 &&
                    c.child.map((c1) => (
                      <Collapse
                        // defaultActiveKey={["2"]}
                        onChange={onChange}
                        key={c1.id}
                        bordered={false}
                        // expandIconPosition="end"
                        showArrow={false}
                        style={{ backgroundColor: "white" }}
                      >
                        <Collapse.Panel
                          showArrow={false}
                          header={
                            <Link
                              to={`/product-category/${c1.id}/${c1.slug}`}
                              // onMouseEnter={() => setMenuItemId(menuitem.id)}
                            >
                              <Checkbox onChange={onChange} key={c1.id}>
                                plist4:{c1.title}
                              </Checkbox>
                            </Link>
                          }
                        ></Collapse.Panel>
                      </Collapse>
                    ))}
                </Collapse.Panel>
              </Collapse>
            ))}
            {/* </Link>
                }
                key={p.id}
              ></Collapse.Panel>
            </Collapse> */}
            {/* <Link
              to={`/product-category/${p.id}/${p.slug}`}
              // onMouseEnter={() => setMenuItemId(menuitem.id)}
            >
              <Checkbox onChange={onChange}>plist2:{p.title}</Checkbox>
            </Link> */}
          </Collapse.Panel>
        </Collapse>
      ))}
      {/* {plainOptions2.map((p) => (
        <Collapse
          // defaultActiveKey={["1"]"}
          onChange={() => onChangee(Collapse.header)}
          key={plainOptions2}
          bordered={false}
          expandIconPosition="end"
        >
          <Collapse.Panel header={<Checkbox onChange={onChange}>{p}</Checkbox>}> */}
      {/* <p>paragraf {p.title}</p> */}
      {/* <Link
              to={`/product-category/${p.id}/${p.slug}`}
              // onMouseEnter={() => setMenuItemId(menuitem.id)}
            >
              <Checkbox onChange={onChange}>plainoption2:{p}</Checkbox>
            </Link> */}
      {/* {category[categoryName].map((c) => (
              <Collapse
                // defaultActiveKey={["1"]}
                onChange={() => onChangee(Collapse.header)}
                key={c}
                bordered={false}
                expandIconPosition="end"
              >
                <Collapse.Panel
                  header={<Checkbox onChange={onChange}>{c}</Checkbox>}
                ></Collapse.Panel>
              </Collapse>
            ))}
            {c[categoryName].map((c1) => (
              <Collapse
                // defaultActiveKey={["1"]}
                onChange={() => onChangee(Collapse.header)}
                key={c1}
                bordered={false}
                expandIconPosition="end"
              >
                <Collapse.Panel
                  header={<Checkbox onChange={onChange}>{c1}</Checkbox>}
                ></Collapse.Panel>
              </Collapse>
            ))} */}
      {/* </Collapse.Panel>
        </Collapse>
      ))} */}
    </div>
  );
};

export default CategoryFilter;
