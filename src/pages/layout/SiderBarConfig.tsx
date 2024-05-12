import PATHS from "@/routes/paths";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const { PATH_DASHBOARD } = PATHS;

const customLink = (path: string, name: string) => {
  return <Link href={path}>{name}</Link>;
};

const AdminSiderBarConfig = [
  {
    label: <Link href={"/"}>Home</Link>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  // {
  //   label: <Link href={"/dashboard"}>Dashboard</Link>,
  //   key: "2",
  //   icon: <DesktopOutlined />,
  // },
  {
    label: "Home",
    key: "sub1",
    icon: <UserOutlined />,
    children: [
      {
        label: customLink(PATH_DASHBOARD.about, "About"),
        key: "3",
      },
      {
        label: customLink(PATH_DASHBOARD.user, "User Manager"),
        key: "4",
      },
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
