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
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const layoutStyle = {
    marginLeft: isMobile ? 0 : collapsed ? 80 : 200,
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobile(false); // Desktop
        setCollapsed(false);
      } else {
        setIsMobile(true); // Mobile or Tablet
        setCollapsed(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const findOpenKeys = (items: any[], path: string): string[] => {
      for (let item of items) {
        if (item.children) {
          for (let child of item.children) {
            if (path.startsWith(child.key)) {
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

    const findSelectedKey = (items: any[], path: string): string => {
      for (let item of items) {
        if (path.startsWith(item.key)) {
          return item.key;
        }
        if (item.children) {
          const selectedKey = findSelectedKey(item.children, path);
          if (selectedKey) {
            return selectedKey;
          }
        }
      }
      return "";
    };

    const selectedKey = findSelectedKey(items, pathname);
    setSelectedKeys([selectedKey]);

    const openKeys = findOpenKeys(items, pathname);
    setOpenKeys(openKeys);
  }, [pathname]);

  const onOpenChange = (keys: any) => {
    setOpenKeys(keys);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <SidebarComponent
        collapsed={collapsed}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        setCollapsed={setCollapsed}
        setOpenKeys={setOpenKeys}
        setSelectedKeys={setSelectedKeys}
        isMobile={isMobile}
      />
      <Layout style={layoutStyle}>
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
