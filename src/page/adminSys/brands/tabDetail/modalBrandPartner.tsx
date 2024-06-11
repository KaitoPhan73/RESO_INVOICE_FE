import { InputField, SelectField } from "@/components/form";
import {
  BrandPartnerBody,
  TBrandPartnerBody,
} from "@/schemaValidations/brand.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { statusList } from "../config";

type Props = {
  brandId: string;
};
export default function ModalBrandPartner({ brandId }: Props) {
  const methods = useForm<TBrandPartnerBody>({
    resolver: zodResolver(BrandPartnerBody),
    defaultValues: {
      brandId: brandId,
      partnerId: "",
      status: 0,
      config: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (values: TBrandPartnerBody) => {
    try {
      //   const response = await brandApi.createBrand(values);
      console.log("values", values);
      // if (response.status === 200) {
      //   router.push(PATH_DASHBOARD.brand);
      //   enqueueSnackbar("Tạo thành công", { variant: "success" });
      // }
    } catch (error: any) {
      console.log("error", error);
    }
  };
  return (
    <FormProvider {...methods}>
      <Grid container spacing={4} display={"flex"} justifyContent={"center"}>
        <Grid item xs={4}>
          <InputField name="config" label="Config" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="status"
            label="Trạng thái"
            options={statusList}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="status"
            label="Trạng thái"
            options={statusList}
            fullWidth
          />
        </Grid>
      </Grid>
    </FormProvider>
  );
}
