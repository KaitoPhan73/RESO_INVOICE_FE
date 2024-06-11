import { RoleEnum } from "@/enums/role";
import { TInventoryItem } from "@/schemaValidations/inventoryItems.chema";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { TOrganization } from "@/schemaValidations/organization.schema";
import { TOrganizationAccounts } from "@/schemaValidations/organizationaccounts.schema";
import { TUser } from "@/schemaValidations/user.schema";
import { TableColumnsType, Tag } from "antd"; // Assuming you are using Ant Design

export const organizationAccountsColumns: TableColumnsType<TOrganizationAccounts> =
  [
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (value: number) => {
        const roles = {
          1: "Admin",
          2: "User",
          3: "Guest",
        };
        return RoleEnum[value] || "Unknown";
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value: number) =>
        value === 0 ? (
          <Tag color="geekblue" key={value}>
            Inactive
          </Tag>
        ) : (
          <Tag color="green" key={value}>
            Active
          </Tag>
        ),
    },
    {
      title: "Mã cửa hàng",
      dataIndex: "storeCode",
      key: "storeCode",
    },
    {
      title: "Mã thương hiệu",
      dataIndex: "brandCode",
      key: "brandCode",
    },
  ];

export const itemColumns: TableColumnsType<TInventoryItem> = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Code",
    dataIndex: "code",
  },
  {
    title: "Unit Price",
    dataIndex: "unitPrice",
  },
];

export const invoiceColumns: TableColumnsType<TInvoice> = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Invoice Code",
    dataIndex: "invoiceCode",
  },
  {
    title: "Created Date",
    dataIndex: "createdDate",
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
  },
];

export const userColumns: TableColumnsType<TUser> = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Username",
    dataIndex: "username",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
];

export const organizationColumns: TableColumnsType<TOrganization> = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Representative",
    dataIndex: "representative",
  },
];
