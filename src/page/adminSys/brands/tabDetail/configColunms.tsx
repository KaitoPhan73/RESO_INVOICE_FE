import { RoleEnum } from "@/enums/role";
import { TInventoryItem } from "@/schemaValidations/inventoryItems.chema";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { TOrganization } from "@/schemaValidations/organization.schema";
import { TOrganizationAccountsResponse } from "@/schemaValidations/organizationaccounts.schema";
import { TUser } from "@/schemaValidations/user.schema";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType, Tag } from "antd"; // Assuming you are using Ant Design

export const organizationAccountsColumns: CustomColumnType<TOrganizationAccountsResponse>[] =
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
    // {
    //   title: "Mã cửa hàng",
    //   dataIndex: "",
    //   key: "storeCode",
    // },
    {
      title: "Mã thương hiệu",
      dataIndex: "brandCode",
      key: "brandCode",
    },
  ];

export const itemColumns: CustomColumnType<TInventoryItem>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Unit Price",
    dataIndex: "unitPrice",
    key: "unitPrice",
  },
];

export const invoiceColumns: CustomColumnType<TInvoice>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Invoice Code",
    dataIndex: "invoiceCode",
    key: "invoiceCode",
  },
  {
    title: "Created Date",
    dataIndex: "createdDate",
    key: "createdDate",
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
    key: "totalAmount",
  },
];

export const userColumns: CustomColumnType<TUser>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
];

export const organizationColumns: CustomColumnType<TOrganization>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Representative",
    dataIndex: "representative",
    key: "representative",
  },
];
