"use client";
import { Layout } from "antd";
import React from "react";
import { Col, Row } from "antd";
const { Header } = Layout;
type Props = {
  style?: any;
};
const HeaderCustom = ({ style }: Props) => {
  return (
    <Header style={style}>
      <Row justify="end">
        <Col xs={4}>Manage DashBoard</Col>
        <Col xs={4}>Manage User</Col>
      </Row>
    </Header>
  );
};

export default HeaderCustom;
