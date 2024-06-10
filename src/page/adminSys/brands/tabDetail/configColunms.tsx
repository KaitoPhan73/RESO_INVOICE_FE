import { TInventoryItem } from "@/schemaValidations/inventoryItems.chema";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { TOrganization } from "@/schemaValidations/organization.schema";
import { TUser } from "@/schemaValidations/user.schema";
import { TableColumnsType } from "antd"; // Assuming you are using Ant Design

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
