"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid } from "@mui/material";
import { FormProvider, useForm, Controller } from "react-hook-form";
import {
  VisibilityOff,
  Visibility,
  AccountCircle,
  Lock,
} from "@mui/icons-material";
import { useSnackbar } from "notistack";
import InputField from "@/components/form/InputField";
import authApi from "@/actions/auth";
import { LoginBody, TLoginBody } from "@/schemaValidations/auth.schema";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/User/userSlice";
import PATHS from "@/route/paths";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  postData: any;
};

export default function LoginPage() {
  const { PATH_DASHBOARD } = PATHS;
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector((state: RootState) => state.user.userServer);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const methods = useForm<TLoginBody>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { handleSubmit, control } = methods;
  const onSubmit = async (values: TLoginBody) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await authApi.checkLogin(values);
      const { accessToken, ...user } = response.payload;
      await authApi.auth({
        accessToken: response.payload.accessToken,
        user: JSON.stringify(user),
      });
      if (response.status === 200) {
        dispatch(setUser(user));
        enqueueSnackbar("Login successfully", { variant: "success" });
        if (user?.role === 0) {
          router.push(PATHS.PATH_BRAND.reportInvoices);
        } else if (user?.role === 1) {
          router.push(PATHS.PATH_ADMINSYSTEM.brands);
        } else if (user?.role === 2) {
          router.push(PATHS.PATH_ORGANIZATION.reportInvoices);
        }
      }
    } catch (error: any) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container relative h-screen items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="hidden h-full w-full bg-muted lg:block relative">
            <Image
              src="/images/invoice-background.jpg"
              alt="Image"
              layout="fill"
              objectFit="cover"
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Đăng nhập
                </h1>
                <p className="text-sm text-muted-foreground">
                  CHÀO MỪNG ĐẾN VỚI DEER COFFEE
                </p>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputField name="username" label="Username" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-200 hover:text-black transition duration-300"
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
