"use client";
import { Avatar, Button, Layout, Col, Row } from "antd";
import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import authApi from "@/actions/auth";

const { Header } = Layout;

type Props = {
  style?: any;
  setCollapsed: any;
  collapsed: boolean;
};

function clearCookies() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}

const HeaderCustom = ({ style, setCollapsed, collapsed }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authApi.logoutFromNextClientToNextServer(true);
      clearCookies();
      localStorage.clear();
      sessionStorage.clear();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Header style={style}>
      <Row justify="space-between">
        <Col>
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
        </Col>
        <Col>
          <Avatar size={36} icon={<UserOutlined />} />
        </Col>
        <Col>
          <Button type="text" icon={<LogoutOutlined />} onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderCustom;
