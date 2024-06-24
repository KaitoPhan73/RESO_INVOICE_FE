import PATHS from "@/route/paths";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  CoffeeOutlined,
  AppstoreAddOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

const {
  PATH_DASHBOARD,
  PATH_ORGANIZATION,
  PATH_CHART,
  PATH_BRAND,
  PATH_ADMINSYSTEM,
} = PATHS;

const customMenuItem = (path: string, name: string) => {
  return {
    label: <Link href={path}>{name}</Link>,
    key: path,
  };
};

const SidebarLogo = () => (
  <div style={{ padding: "20px", textAlign: "center", borderRadius: "100%" }}>
    <Image
      src="/images/logo-deercoffee.jpg"
      alt="Logo 3D"
      width={100}
      height={100}
      style={{ borderRadius: "100%" }}
    />
  </div>
);

const SystemAdminSiderBarConfig = [
  {
    label: <SidebarLogo />,
    key: "logo",
    icon: null,
  },
  {
    label: <span style={{ fontSize: "16px", fontWeight: "bold" }}>Home</span>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>DashBoard</span>
    ),
    key: "sub2",
    icon: <CoffeeOutlined />,
    children: [
      customMenuItem(PATH_ADMINSYSTEM.partners, "Partners"),
      customMenuItem(PATH_ADMINSYSTEM.brands, "Brand"),
      customMenuItem(PATH_ADMINSYSTEM.brandaccount, "Brand Account Management"),
    ],
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>
        Brands Detail
      </span>
    ),
    key: "sub3",
    icon: <CoffeeOutlined />,
    children: [
      customMenuItem(PATH_ADMINSYSTEM.inventoryitemssystem, "Inventory Items"),
      customMenuItem(PATH_ADMINSYSTEM.invoicessystem, "Invoices"),
      customMenuItem(PATH_ADMINSYSTEM.organizationssystem, "Organizations"),
      customMenuItem(PATH_ADMINSYSTEM.userssystem, "Users"),
    ],
  },
];

const BrandAdminSiderBarConfig = [
  {
    label: <SidebarLogo />,
    key: "logo",
    icon: null,
  },
  {
    label: <span style={{ fontSize: "16px", fontWeight: "bold" }}>Home</span>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>Organization</span>
    ),
    key: "sub1",
    icon: <UserOutlined />,
    children: [
      customMenuItem(PATH_BRAND.organizationaccounts, "Accounts"),
      customMenuItem(PATH_BRAND.organizations, "Management"),
    ],
  },

  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>Invoice</span>
    ),
    key: "sub2",
    icon: <FileOutlined />,
    children: [customMenuItem(PATH_BRAND.invoices, "Management")],
  },

  {
    label: <span style={{ fontSize: "16px", fontWeight: "bold" }}>Chart</span>,
    key: "sub3",
    icon: <LineChartOutlined />,
    children: [customMenuItem(PATH_CHART.chart, "Chart")],
  },
];

const OrganizationSiderBarConfig = [
  {
    label: <SidebarLogo />,
    key: "logo",
    icon: null,
  },
  {
    label: <span style={{ fontSize: "16px", fontWeight: "bold" }}>Home</span>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>
        Quản lí hóa đơn
      </span>
    ),
    key: "sub1",
    icon: <DesktopOutlined />,
    children: [
      customMenuItem(PATH_ORGANIZATION.invoicetemplate, "Template"),
      customMenuItem(PATH_ORGANIZATION.invoices, "Invoice"),
    ],
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>
        Quản lí cửa hàng
      </span>
    ),
    key: "sub2",
    icon: <CoffeeOutlined />,
    children: [customMenuItem(PATH_ORGANIZATION.stores, "Stores"),
    customMenuItem(PATH_ORGANIZATION.template, "template")],

  },
];

const SiderBarConfig = {
  SystemAdminSiderBarConfig,
  BrandAdminSiderBarConfig,
  OrganizationSiderBarConfig,
};
export default SiderBarConfig;
