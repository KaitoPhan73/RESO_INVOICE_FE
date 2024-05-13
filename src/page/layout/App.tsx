"use client";
import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import items from "./SiderBar";
import FooterCustom from "./Footer";
import HeaderCustom from "./Header";

const { Content, Sider } = Layout;

const SilderBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const menuSiderBar = items;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuSiderBar}
        />
      </Sider>
      <Layout>
        <HeaderCustom style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <FooterCustom style={{ textAlign: "center" }} />
      </Layout>
    </Layout>
  );
};

export default SilderBar;
