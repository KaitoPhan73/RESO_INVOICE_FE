const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
};
const ROOT_DASHBOARD = "/dashboard";
const ROOT_USER = "/users";

const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD,
  about: path(ROOT_DASHBOARD, "/about"),
  user: path(ROOT_DASHBOARD, "/users"),
};

const PATH_USER = {
  root: ROOT_USER,
  contact: path(ROOT_DASHBOARD, "/contact"),
  about: path(ROOT_DASHBOARD, "/about"),
};

const PATHS = {
  PATH_DASHBOARD,
  PATH_USER,
};

export default PATHS;
