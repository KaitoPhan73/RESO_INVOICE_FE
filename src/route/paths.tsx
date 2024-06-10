const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
};
const ROOT_DASHBOARD = "/dashboard";
const ROOT_COMPANY = "/company";
const ROOT_USER = "/users";
const ROOT_CHART = "/chart";

const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD,
  user: path(ROOT_DASHBOARD, "/users"),
  inventoryitems: path(ROOT_DASHBOARD, "/inventoryitems"),
  invoices: path(ROOT_DASHBOARD, "/invoices"),
  invoicetemplate: path(ROOT_DASHBOARD, "/invoicetemplate"),
  organizations: path(ROOT_DASHBOARD, "/organizations"),
  users: path(ROOT_DASHBOARD, "/users"),
  brands: path(ROOT_DASHBOARD, "/brands"),
  adminsystem: path(ROOT_DASHBOARD, "/admin"),
  userssystem: path(ROOT_DASHBOARD, "/users"),
  inventoryitemssystem: path(ROOT_DASHBOARD, "/inventoryitems"),
  invoicessystem: path(ROOT_DASHBOARD, "/invoices"),
  organizationssystem: path(ROOT_DASHBOARD, "/organizations"),
  partners: path(ROOT_DASHBOARD, "/partners"),
  stores: path(ROOT_DASHBOARD, "/stores"),
};

const PATH_ADMINSYSTEM = {
  root: PATH_DASHBOARD,
  brands: path(PATH_DASHBOARD.adminsystem, "/brands"),
  partners: path(PATH_DASHBOARD.adminsystem, "/partners"),
  brandaccount: path(PATH_DASHBOARD.adminsystem, "/brand-account"),
  userssystem: path(PATH_DASHBOARD.userssystem, "/users"),
  inventoryitemssystem: path(PATH_DASHBOARD.adminsystem, "/inventoryitems"),
  invoicessystem: path(PATH_DASHBOARD.adminsystem, "/invoices"),
  organizationssystem: path(PATH_DASHBOARD.adminsystem, "/organizations"),
};

const PATH_ORGANIZATION = {
  root: PATH_DASHBOARD,
  stores: path(PATH_DASHBOARD.organizations, "/stores"),
  invoices: path(PATH_DASHBOARD.organizations, "/invoices"),
  invoicetemplate: path(PATH_DASHBOARD.organizations, "/templates"),
};

const PATH_BRAND = {
  root: PATH_DASHBOARD,
  organizationaccounts: path(PATH_DASHBOARD.brands, "/organization-accounts"),
  invoices: path(PATH_DASHBOARD.brands, "/invoices"),
  organizations: path(PATH_DASHBOARD.brands, "/organizations"),
};


const PATH_USER = {
  root: ROOT_USER,
  contact: path(ROOT_DASHBOARD, "/contact"),
  about: path(ROOT_DASHBOARD, "/about"),
};

// const PATH_COMPANY = {
//   root: ROOT_COMPANY,
//   // brands: path(ROOT_COMPANY, "/brands"),
//   // partners: path(ROOT_COMPANY, "/partners"),
//   organizations: path(ROOT_COMPANY, "/organizations"),
//   stores: path(ROOT_COMPANY, "/stores"),
// };

const PATH_CHART = {
  root: ROOT_CHART,
  chart: path(ROOT_CHART, "/chartTest"),
};

const PATHS = {
  PATH_DASHBOARD,
  PATH_USER,
  PATH_CHART,
  PATH_ORGANIZATION,
  PATH_BRAND,
  PATH_ADMINSYSTEM
};

export default PATHS;
