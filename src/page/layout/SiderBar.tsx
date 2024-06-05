import type { MenuProps } from "antd";
import SiderBarConfig from "./SiderBarConfig";
import { getUserInfo } from "@/utils/utils";
import { RoleEnum } from "@/enums/role";
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
  } as MenuItem;
}
const {
  BrandAdminSiderBarConfig,
  OrganizationSiderBarConfig,
  SystemAdminSiderBarConfig,
} = SiderBarConfig;
const role = getUserInfo().role;
let SiderConfigs: MenuItem[] | null = null;

switch (role) {
  case RoleEnum.BrandAdmin:
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

const items: MenuItem[] = SiderConfigs ?? [];

export default items;
