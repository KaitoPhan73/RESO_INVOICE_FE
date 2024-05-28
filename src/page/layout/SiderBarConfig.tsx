import PATHS from "@/route/paths";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const { PATH_DASHBOARD } = PATHS;

const customMenuItem = (path: string, name: string) => {
  return {
    label: <Link href={path}>{name}</Link>,
    key: path,
  };
};
const AdminSiderBarConfig = [
  {
    label: "Home",
    key: "1",
    icon: <PieChartOutlined />,
  },
  // {
  //   label: <Link href={"/dashboard"}>Dashboard</Link>,
  //   key: "2",
  //   icon: <DesktopOutlined />,
  // },
  {
    label: "Dashboard",
    key: "sub1",
    icon: <UserOutlined />,
    children: [
      customMenuItem(PATH_DASHBOARD.brand, "Brand"),
      customMenuItem(PATH_DASHBOARD.user, "User Manager"),
      customMenuItem(PATH_DASHBOARD.invoice, "Invoice Manager"),
      customMenuItem(PATH_DASHBOARD.user, "User"),
      customMenuItem(PATH_DASHBOARD.invoicetemplate, "Invoice Template"),
    ],
  },
];

const UserSiderBarConfig = [
  {
    label: "Option 1",
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: "Files",
    key: "9",
    icon: <FileOutlined />,
  },
];
const SiderBarConfig = { AdminSiderBarConfig, UserSiderBarConfig };
export default SiderBarConfig;
