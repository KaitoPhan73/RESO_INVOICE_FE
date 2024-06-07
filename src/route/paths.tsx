const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
};
const ROOT_DASHBOARD = "/dashboard";
const ROOT_COMPANY = "/company";
const ROOT_USER = "/users";
const ROOT_CHART = "/chart";

const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD,
  brand: path(ROOT_DASHBOARD, "/brand"),
  user: path(ROOT_DASHBOARD, "/users"),
  invoice: path(ROOT_DASHBOARD, "/invoice"),
};

const PATH_USER = {
  root: ROOT_USER,
  contact: path(ROOT_DASHBOARD, "/contact"),
  about: path(ROOT_DASHBOARD, "/about"),
};

const PATH_COMPANY = {
  root: ROOT_COMPANY,
  organizations: path(ROOT_COMPANY, "/organizations"),
  partners: path(ROOT_COMPANY, "/organizations/partners"),
  stores: path(ROOT_COMPANY, "/organizations/stores"),
  invoicetemplate: path(ROOT_COMPANY, "/organizations/invoicetemplate"),
};

const PATH_CHART = {
  root: ROOT_CHART,
  chart: path(ROOT_CHART, "/chartTest"),
};

const PATHS = {
  PATH_DASHBOARD,
  PATH_USER,
  PATH_COMPANY,
  PATH_CHART,
};

export default PATHS;
