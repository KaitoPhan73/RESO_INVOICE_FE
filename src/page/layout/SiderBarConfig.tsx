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
  BranchesOutlined,
  ShopOutlined,
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
    label: <span style={{ fontSize: "18px", fontWeight: "lighter" }}>Admin System</span>,
    key: "1",
    icon: <ShopOutlined />,
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>Brands</span>
    ),
    key: "sub2",
    icon: <CoffeeOutlined />,
    children: [
      customMenuItem(PATH_ADMINSYSTEM.brands, "Management"),
      customMenuItem(PATH_ADMINSYSTEM.brandaccount, "Accounts"),
      customMenuItem(PATH_ADMINSYSTEM.partners, "Partners"),

    ],
  },
  // {
  //   label: (
  //     <span style={{ fontSize: "16px", fontWeight: "bold" }}>
  //       Brands Detail
  //     </span>
  //   ),
  //   key: "sub3",
  //   icon: <CoffeeOutlined />,
  //   children: [
  //     customMenuItem(PATH_ADMINSYSTEM.invoicessystem, "Invoices"),
  //     customMenuItem(PATH_ADMINSYSTEM.organizationssystem, "Organizations"),
  //     customMenuItem(PATH_ADMINSYSTEM.brandaccount, "Organization Account"),
  //     customMenuItem(PATH_ADMINSYSTEM.userssystem, "Users"),
  //   ],
  // },
];

const BrandAdminSiderBarConfig = [
  {
    label: <SidebarLogo />,
    key: "logo",
    icon: null,
  },
  {
    label: <span style={{ fontSize: "18px", fontWeight: "lighter" }}>Brand System</span>,
    key: "1",
    icon: <ShopOutlined />,
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>Organizations</span>
    ),
    key: "sub1",
    icon: <UserOutlined />,
    children: [
      customMenuItem(PATH_BRAND.organizations, "Management"),
      customMenuItem(PATH_BRAND.organizationaccounts, "Accounts"),
      customMenuItem(PATH_BRAND.partners, "Partner"),

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
    children: [customMenuItem(PATH_ORGANIZATION.reportInvoices, "Report")],
  },
];

const OrganizationSiderBarConfig = [
  {
    label: <SidebarLogo />,
    key: "logo",
    icon: null,
  },
  {
    label: customMenuItem(PATH_ORGANIZATION.reportInvoices, "Báo cáo").label,
    key: customMenuItem(PATH_ORGANIZATION.reportInvoices, "Báo cáo").key,
    icon: <LineChartOutlined />,
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
      customMenuItem(PATH_ORGANIZATION.invoicetemplate, "Mẫu"),
      customMenuItem(PATH_ORGANIZATION.invoices, "Hóa đơn"),
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
    children: [
      customMenuItem(PATH_ORGANIZATION.stores, "Cửa hàng"),
      customMenuItem(PATH_ORGANIZATION.template, "template"),
    ],
  },
];

const SiderBarConfig = {
  SystemAdminSiderBarConfig,
  BrandAdminSiderBarConfig,
  OrganizationSiderBarConfig,
};
export default SiderBarConfig;
