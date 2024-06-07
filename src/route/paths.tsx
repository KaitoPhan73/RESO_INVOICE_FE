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
  partners: path(ROOT_DASHBOARD, "/partners"),
  stores: path(ROOT_DASHBOARD, "/stores"),
};

const PATH_ORGANIZATION = {
  root: PATH_DASHBOARD,
  stores: path(PATH_DASHBOARD.organizations, "/stores"),
  invoices: path(PATH_DASHBOARD.organizations, "/invoices"),
  invoicetemplate: path(PATH_DASHBOARD.organizations, "/templates"),
};

const PATH_USER = {
  root: ROOT_USER,
  contact: path(ROOT_DASHBOARD, "/contact"),
  about: path(ROOT_DASHBOARD, "/about"),
};

const PATH_COMPANY = {
  root: ROOT_COMPANY,
  // brands: path(ROOT_COMPANY, "/brands"),
  // partners: path(ROOT_COMPANY, "/partners"),
  organizations: path(ROOT_COMPANY, "/organizations"),
  stores: path(ROOT_COMPANY, "/stores"),
};

const PATH_CHART = {
  root: ROOT_CHART,
  chart: path(ROOT_CHART, "/chartTest"),
};

const PATHS = {
  PATH_DASHBOARD,
  PATH_USER,
  PATH_CHART,
  PATH_ORGANIZATION,
};

export default PATHS;
