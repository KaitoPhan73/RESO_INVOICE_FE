import React, { useEffect, useState } from "react";
import { Layout, Menu, MenuProps, Drawer } from "antd";
import SiderBarConfig from "./SiderBarConfig";
import { RoleEnum } from "@/enums/role";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { TLoginResponse } from "@/schemaValidations/auth.schema";
import userApi from "@/actions/users";

const { Sider } = Layout;
const {
  BrandAdminSiderBarConfig,
  OrganizationSiderBarConfig,
  SystemAdminSiderBarConfig,
} = SiderBarConfig;

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  openKeys: string[];
  onOpenChange: (keys: string[]) => void;
  setOpenKeys: React.Dispatch<React.SetStateAction<string[]>>;
  selectedKeys: string[];
  setSelectedKeys: React.Dispatch<React.SetStateAction<string[]>>;
  isMobile: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  };
}

const SidebarComponent = ({
  collapsed,
  openKeys,
  selectedKeys,
  setCollapsed,
  onOpenChange,
  setOpenKeys,
  setSelectedKeys,
  isMobile,
}: SidebarProps) => {
  const userRedux = useSelector((state: RootState) => state.user.userServer);
  const [user, setUser] = useState<TLoginResponse | undefined | null>();

  useEffect(() => {
    if (userRedux === null) {
      const fetchData = async () => {
        try {
          const res = await userApi.getUserFromServer();
          setUser(res.payload);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchData();
    } else {
      setUser(userRedux);
    }
  }, [userRedux]);

  let SiderConfigs: MenuItem[];

  switch (user?.role) {
    case RoleEnum.Brand:
      SiderConfigs = BrandAdminSiderBarConfig.map(
        ({ label, key, icon, children }) => getItem(label, key, icon, children)
      );
      break;
    case RoleEnum.Organization:
      SiderConfigs = OrganizationSiderBarConfig.map(
        ({ label, key, icon, children }) => getItem(label, key, icon, children)
      );
      break;
    case RoleEnum.SystemAdmin:
      SiderConfigs = SystemAdminSiderBarConfig.map(
        ({ label, key, icon, children }) => getItem(label, key, icon, children)
      );
      break;
    default:
      SiderConfigs = [];
      break;
  }

  const items: MenuItem[] = SiderConfigs;

  return isMobile ? (
    <Drawer title="Menu" placement="left" onClose={() => setCollapsed(true)}>
      <Menu
        theme="light"
        mode="inline"
        items={items}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={() => setCollapsed(true)}
      />
    </Drawer>
  ) : (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        items={items}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        // style={{ width: collapsed ? 80 : 220 }}
      />
    </Sider>
  );
};

export default SidebarComponent;
