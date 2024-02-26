{
  category1.map((p) => (
    <Collapse
      // defaultActiveKey={["1"]}
      onChange={onChange}
      key={p.id}
      bordered={false}
      // expandIconPosition="end"
      style={{ backgroundColor: "white" }}
      styles={{ lineHeight: "0.5" }}
      contentBg="red"
    >
      <Collapse.Panel
        // onClick={() => setIsInputVisible(true)}
        key={p.id}
        // {...p.hasChild ===0 ? showArrow="false" : showArrow="true"}
        header={
          <Link
            style={{ textDecoration: "none" }}
            to={`/product-category/${p.id}/${p.slug}`}
            // onMouseEnter={() => setMenuItemId(menuitem.id)}
          >
            <span>{p.title}</span>
            {/* {isInputVisible && (
              <Checkbox checked={isInputVisible}></Checkbox>
            )} */}
            {/* <Checkbox onChange={onChange}>
              plist2:{p.title}
              {p.id}
            </Checkbox> */}
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
            // expandIconPosition="end"
            style={{ backgroundColor: "white" }}
          >
            <Collapse.Panel
              header={
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/product-category/${c.id}/${c.slug}`}
                  // onMouseEnter={() => setMenuItemId(menuitem.id)}
                >
                  <span>{c.title}</span>
                  {/* <Checkbox onChange={onChange} key={c.id}>
                    plist3:{c.title}
                  </Checkbox>
                  <Radio onChange={onChange} key={c.id}>
                    radio
                  </Radio> */}
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
                          style={{ textDecoration: "none" }}
                          to={`/product-category/${c1.id}/${c1.slug}`}
                          // onMouseEnter={() => setMenuItemId(menuitem.id)}
                        >
                          <span>{c1.title}</span>
                          {/* <Checkbox onChange={onChange} key={c1.id}>
                            plist4:{c1.title}
                          </Checkbox> */}
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
  ));
}

{
  // xxxxx
  /* {plainOptions2.map((p) => (
    <Collapse
      // defaultActiveKey={["1"]"}
      onChange={() => onChangee(Collapse.header)}
      key={plainOptions2}
      bordered={false}
      expandIconPosition="end"
    >
      <Collapse.Panel header={<Checkbox onChange={onChange}>{p}</Checkbox>}> */
}
{
  /* <p>paragraf {p.title}</p> */
}
{
  /* <Link
          to={`/product-category/${p.id}/${p.slug}`}
          // onMouseEnter={() => setMenuItemId(menuitem.id)}
        >
          <Checkbox onChange={onChange}>plainoption2:{p}</Checkbox>
        </Link> */
}
{
  /* {category[categoryName].map((c) => (
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
        ))} */
}
{
  /* </Collapse.Panel>
    </Collapse>
  ))}  
  */
  // xxxx
}
