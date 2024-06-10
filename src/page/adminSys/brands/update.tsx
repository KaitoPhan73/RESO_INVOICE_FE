"use client";
import brandApi from "@/actions/brands";
import { BrandBody, TBrandBody } from "@/schemaValidations/brand.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputField, SelectField } from "@/components/form";
import { Button, Grid, TextField } from "@mui/material";
import PATHS from "@/route/paths";
import { statusList } from "./config";
import MiddleBrandTab from "./tabDetail/middleTab";
import { Modal } from "antd";
import ModalBrandPartner from "./tabDetail/modalBrandPartner";

type Props = {
  data: {
    detail: any;
    brandId: string;
  };
};
export default function UpdateBrandPage({ data }: Props) {
  const { PATH_DASHBOARD } = PATHS;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const methods = useForm<TBrandBody>({
    resolver: zodResolver(BrandBody),
    defaultValues: {
      ...data.detail,
    },
  });
  console.log("data", data);
  const { handleSubmit } = methods;

  const onSubmit = async (values: TBrandBody) => {
    try {
      // const response = await brandApi.createBrand(values);
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
    <>
      <FormProvider {...methods}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <InputField name="name" label="Tên" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <InputField name="code" label="Mã thương hiệu" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <InputField name="taxcode" label="Mã số thuế" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <InputField name="descriptions" label="Mô tả" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <InputField name="secretKey" label="Mã bí mật" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <SelectField
              name="status"
              label="Trạng thái"
              options={statusList}
              fullWidth
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            display={"flex"}
            justifyContent={"flex-end"}
            spacing={2}
          >
            <Grid item xs={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={showModal}
                sx={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Liên kết đối tác
              </Button>
            </Grid>
            <Grid item xs={2}>
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
          </Grid>
        </Grid>
      </FormProvider>
      <Modal
        title="Liên kết doanh nghiệp với thương hiệu"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalBrandPartner brandId={data.brandId} />
      </Modal>
    </>
  );
}
