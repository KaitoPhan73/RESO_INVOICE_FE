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
    // Function to determine if it's a desktop screen
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCollapsed(false); // Desktop
      } else {
        setCollapsed(true); // Mobile or Tablet
      }
    };

    // Set the initial collapsed state based on the screen size
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const findOpenKeys = (items: any[], path: string): string[] => {
      for (let item of items) {
        if (item.children) {
          // Kiểm tra từng child của item
          for (let child of item.children) {
            if (path.startsWith(child.key)) {
              // Nếu path bắt đầu bằng child.key, trả về key của item
              return [item.key];
            }
          }
          // Nếu không tìm thấy trong children của item, tiếp tục đệ quy
          const openKey = findOpenKeys(item.children, path);
          if (openKey.length) {
            // Nếu tìm thấy openKey, trả về key của item và openKey
            return [item.key, ...openKey];
          }
        }
      }
      return []; // Nếu không tìm thấy, trả về mảng rỗng
    };

    const findSelectedKey = (items: any[], path: string): string => {
      for (let item of items) {
        if (path.startsWith(item.key)) {
          // Nếu path bắt đầu bằng item.key, trả về item.key
          return item.key;
        }
        if (item.children) {
          // Nếu không, tiếp tục tìm trong children của item
          const selectedKey = findSelectedKey(item.children, path);
          if (selectedKey) {
            return selectedKey;
          }
        }
      }
      return ""; // Nếu không tìm thấy, trả về chuỗi rỗng
    };

    // Tìm selectedKey dựa trên pathname
    const selectedKey = findSelectedKey(items, pathname);
    setSelectedKeys([selectedKey]);

    // Tìm openKeys dựa trên pathname
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
