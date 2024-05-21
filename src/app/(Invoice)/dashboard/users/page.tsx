import UserPage from "@/page/users";
import React from "react";

const Users = async (props: any) => {
  // const res = await fetch(
  //   `https://660bbdb3ccda4cbc75dd950a.mockapi.io/api/student/users`,
  //   {
  //     method: "GET",
  //     cache: "no-store",
  //   }
  // );
  return <UserPage props={props} />;
};
export default Users;
