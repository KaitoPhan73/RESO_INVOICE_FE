"use server";
import UserPage from "@/page/users";
import React from "react";

const Users = async (props: any) => {
  return <UserPage props={props} />;
};
export default Users;
