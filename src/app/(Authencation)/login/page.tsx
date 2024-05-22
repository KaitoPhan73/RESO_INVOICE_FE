import { checkLogin } from "@/actions/auth";
import LoginPage from "@/page/authentication/login";
import React from "react";

const Login = async () => {
  const res = checkLogin;
  console.log(res);
  return <LoginPage />;
};
export default Login;
