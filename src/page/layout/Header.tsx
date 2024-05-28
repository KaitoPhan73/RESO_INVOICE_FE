"use client";
import { Button, Layout } from "antd";
import React from "react";
import { Col, Row } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header } = Layout;
type Props = {
  style?: any;
  setCollapsed: any;
  collapsed: boolean;
};
const HeaderCustom = ({ style, setCollapsed, collapsed }: Props) => {
  return (
    <Header style={style}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Row justify="end">
        <Col xs={4}>Manage DashBoard</Col>
        <Col xs={4}>Manage User</Col>
      </Row>
    </Header>
  );
};

export default HeaderCustom;
