"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TabContext } from "@mui/lab";
import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import InventoryItemsPage from "./inventoryItems";
import InvoicePage from "./invoice";
import OrganizationPage from "./organizations";
import UsersPage from "./users";
import OrganizationsPage from "@/page/organizations";
import OrganizationAccountsPage from "./organizationAccounts";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
type Props = {
  data: {
    // inventoryItems: any;
    invoices: any;
    organizations: any;
    organizationsAccounts: any;
    // users: any;
  };
  props: any;
};
export default function MiddleBrandTab({ data, props }: Props) {
  console.log("params", props);
  const [activeTab, setActiveTab] = useState("1");
  const [value, setValue] = React.useState(0);
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Grid container spacing={2} sx={{ ml: "20px", marginTop: "1rem" }}>
      <hr style={{ border: "1px solid #000", margin: "20px 0" }} />
      <Stack sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            {/* <Tab label="Hàng tồn kho" {...a11yProps(0)} /> */}
            <Tab label="Hóa đơn" {...a11yProps(1)} />
            <Tab label="Tổ chức" {...a11yProps(2)} />
            <Tab label="Tài khoản tổ chức" {...a11yProps(3)} />
          </Tabs>
        </Box>
        {/* <CustomTabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={7}></Grid>
          </Grid>
          <Box sx={{ pt: "5px" }}>
            <TabContext value={activeTab}>
              <InventoryItemsPage data={data.inventoryItems} />
            </TabContext>
          </Box>
        </CustomTabPanel> */}
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={7}></Grid>
          </Grid>
          <Box sx={{ pt: "5px" }}>
            <TabContext value={activeTab}>
              <InvoicePage data={data.invoices} props={props} />
            </TabContext>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={7}></Grid>
          </Grid>
          <Box sx={{ pt: "5px" }}>
            <TabContext value={activeTab}>
              <OrganizationsPage props={props} data={data.organizations} />
            </TabContext>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Grid container spacing={2}>
            <Grid item xs={7}></Grid>
          </Grid>
          <Box sx={{ pt: "5px" }}>
            <TabContext value={activeTab}>
              <OrganizationAccountsPage
                data={data.organizationsAccounts}
                props={props}
              />
            </TabContext>
          </Box>
        </CustomTabPanel>
        {/* <CustomTabPanel value={value} index={3}>
          <Grid container spacing={2}>
            <Grid item xs={7}></Grid>
          </Grid>
          <Box sx={{ pt: "5px" }}>
            <TabContext value={activeTab}>
              <UsersPage data={data.users} />
            </TabContext>
          </Box>
        </CustomTabPanel> */}
      </Stack>
    </Grid>
  );
}
