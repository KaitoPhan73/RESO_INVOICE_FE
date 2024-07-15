"use client";
import organizationApi from "@/actions/organizations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputField, SelectField } from "@/components/form";
import { Button, Grid } from "@mui/material";
import { statusList } from "./config";
import {
  OrganizationAccountsSchema,
  TOrganizationAccountsRequest,
  TOrganizationAccountsResponse,
} from "@/schemaValidations/organizationaccounts.schema";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import PATHS from "@/route/paths";
type Props = {
  organizations: TOrganizationAccountsResponse[];
};

export default function CreateOrganizationAccountPage({
  organizations,
}: Props) {
  const { PATH_BRAND } = PATHS;
  const user = useSelector((state: RootState) => state.user.user);
  const organizationOptions = organizations.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const methods = useForm<TOrganizationAccountsRequest>({
    resolver: zodResolver(OrganizationAccountsSchema),
    defaultValues: {
      username: "",
      name: "",
      password: "",
      status: "1",
      role: 0,
      brandId: user?.brandId,
      organizationId: organizationOptions[0]
        ? organizationOptions[0].value
        : "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (values: TOrganizationAccountsRequest) => {
    console.log("values", values);
    try {
      const response = await organizationApi.createOrganizationAccount(
        user?.brandId!,
        values
      );

      if (response.status === 201) {
        router.push(PATH_BRAND.organizationaccounts);
        enqueueSnackbar("Tạo thành công", { variant: "success" });
      }
    } catch (error: any) {
      enqueueSnackbar("Có lỗi xảy ra", { variant: "error" });
      methods.reset();
      console.log("error", error);
    }
  };
  return (
    <FormProvider {...methods}>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InputField name="username" label="User name" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="name" label="Tên" fullWidth />
        </Grid>

        <Grid item xs={4}>
          <InputField name="password" label="Mật khẩu" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="status"
            label="Trạng thái"
            fullWidth
            options={statusList}
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="organizationId"
            label="Tổ chức"
            fullWidth
            options={organizationOptions}
          />
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit(onSubmit)}
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Tạo
        </Button>
      </Grid>
    </FormProvider>
  );
}
