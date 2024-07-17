import { Avatar, Button, Layout, Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import authApi from "@/actions/auth";

const { Header } = Layout;

type Props = {
  style?: any;
  setCollapsed: any;
  collapsed: boolean;
};

const HeaderCustom = ({ style, setCollapsed, collapsed }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlashing(!flashing);
    }, 500);

    return () => clearInterval(interval);
  }, [flashing]);

  const handleLogout = async () => {
    router.push("/logout");
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
              width: 90,
              height: 90,
            }}
          />
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
