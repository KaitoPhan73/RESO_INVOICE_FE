"use client";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import items from "./SiderBar";
import FooterCustom from "./Footer";
import HeaderCustom from "./Header";
import { usePathname } from "next/navigation";
import SidebarComponent from "./SideBarComponent";
const { Content, Sider } = Layout;

const SilderBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const pathname = usePathname();
  useEffect(() => {
    setSelectedKeys([pathname]);

    const findOpenKeys: any = (items: any, path: any) => {
      for (let item of items) {
        if (item.children) {
          for (let child of item.children) {
            if (child.key === path) {
              return [item.key];
            }
          }
          const openKey = findOpenKeys(item.children, path);
          if (openKey.length) {
            return [item.key, ...openKey];
          }
        }
      }
      return [];
    };

    setOpenKeys(findOpenKeys(items, pathname));
  }, [pathname]);

  const onOpenChange = (keys: any) => {
    setOpenKeys(keys);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SidebarComponent
        collapsed={collapsed}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        setCollapsed={setCollapsed}
        setOpenKeys={setOpenKeys}
        setSelectedKeys={setSelectedKeys}
      />
      <Layout>
        <HeaderCustom
          style={{ padding: 0, background: colorBgContainer }}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Content
          style={{ margin: "1px", padding: "2rem", backgroundColor: "white" }}
        >
          {children}
        </Content>
        <FooterCustom style={{ textAlign: "center" }} />
      </Layout>
    </Layout>
  );
};

export default SilderBar;
