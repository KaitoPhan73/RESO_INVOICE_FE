import userApi from "@/actions/users";
import UserPage from "@/page/users";
import React from "react";

const Users = async (props: any) => {
  const params = {
    page: +props.searchParams.page,
    limit: +props.searchParams.limit,
  };
  console.log("props", params);
  const response = await userApi.getUsers(params);
  const data = {
    total: response.payload.length,
    items: response.payload,
  };
  return <UserPage props={props} data={data} />;
};
export default Users;
