"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { CreateBrandBody, TCreateBrandBody } from "@/schemaValidations/brand.schema";
import { InputField, SelectField } from "@/components/form";
import PATHS from "@/route/paths";
import brandApi from "@/actions/brands";
import { statusList } from "./config";

export default function CreateBrandPage() {
  const { PATH_ADMINSYSTEM } = PATHS;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const methods = useForm<TCreateBrandBody>({
    resolver: zodResolver(CreateBrandBody),
    defaultValues: {
      name: "",
      code: "",
      status: 1,
      taxCode: "",
      descriptions: "",
      secretKey: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values: TCreateBrandBody) => {
    try {
      console.log("Submitting values:", values);
      const response = await brandApi.createBrand(values);
      console.log("values", values);
      if (response.status === 201) {
        router.push(PATH_ADMINSYSTEM.brands);
        enqueueSnackbar("Tạo thành công", { variant: "success" });
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      enqueueSnackbar("Tạo thất bại", { variant: "error" });
    }
  };

  return (
    <FormProvider {...methods}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InputField name="name" label="Tên" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="code" label="Mã" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <SelectField name="status" label="Trạng thái" options={statusList} fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="taxCode" label="Mã số thuế" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="descriptions" label="Mô tả" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="secretKey" label="Mã bí mật" fullWidth />
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
