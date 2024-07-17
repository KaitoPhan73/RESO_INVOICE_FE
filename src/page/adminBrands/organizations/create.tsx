"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { InputField, SelectField } from "@/components/form";
import PATHS from "@/route/paths";
import { CreateOrganizationSchema, TCreateOrganizationSchema } from "@/schemaValidations/organizations.schema";
import organizationsApi from "@/actions/organizations";
import { TBrandBody } from "@/schemaValidations/brand.schema";

// interface Props {
//   props: any;
//   brands: any;
// }

export default function CreateOrganizationinBrandPage() {
  const { PATH_BRAND } = PATHS;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const methods = useForm<TCreateOrganizationSchema>({
    resolver: zodResolver(CreateOrganizationSchema),
    defaultValues: {
      name: "",
      address: "",
      representative: "",
      taxCode: "",
      code: "",
      // brandName: "",
    },
  });

  // const option = brands.items.map((item: TBrandBody) => ({
  //   label: item.name,
  //   value: item.id,
  // }));

  const { handleSubmit } = methods;

  const onSubmit = async (values: TCreateOrganizationSchema) => {
    try {
      console.log("Submitting values:", values);
      const response = await organizationsApi.createOrganization(values);
      console.log("values", values);
      if (response.status === 201) {
        router.push(PATH_BRAND.organizations);
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
          <InputField name="address" label="Địa chỉ" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="representative" label="Người đại diện" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="taxCode" label="Mã số thuế" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="code" label="Mã" fullWidth />
        </Grid>
        {/* <Grid item xs={4}>
          <SelectField
            name="brandId"
            label="Brand Name"
            options={option}
            fullWidth
          />
        </Grid> */}
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
