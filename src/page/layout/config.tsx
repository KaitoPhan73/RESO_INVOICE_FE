import { getUserInfo } from "@/utils/utils";

export const getRole = () => {
  const user = getUserInfo();
  return user?.role;
};
