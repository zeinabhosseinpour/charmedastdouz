import React from "react";
import { ConfigProvider, Badge, Dropdown, Space } from "antd";
// import { DownOutlined } from "@ant-design/icons";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
// import { Dropdown, Space } from "antd";

const ShoppingLogo = () => {
  const items = [
    { key: "1", label: "کیف دوشی زنانه مدل 113" },
    { key: "2", label: "کیف دوشی زنانه مدل 113" },
    { key: "3", label: "کیف دوشی زنانه مدل 113" },
  ];
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            lineHeight: 10,
            /* here is your global tokens */
          },
        }}
      ></ConfigProvider>
      <Dropdown menu={{ items }}>
        <Badge
          count={0}
          showZero
          offset={[5, 5]}
          size="large"
          status="processing"
          on
        >
          <FiShoppingCart size={25} />
        </Badge>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default ShoppingLogo;
