"use client";
import Page from "@/components/PageProps";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { Card, Grid, Typography, Box } from "@mui/material";
import React from "react";

// Định nghĩa kiểu cho props
type Props = {
  data: TInvoice["responsePartNer"];
};

// Component chính
export default function ResponsePartnerPage({ data }: Props) {
  return (
    <Page title="Lịch sử hóa đơn với đối tác" spacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card style={{ width: "100%", padding: "16px" }}>
            <Grid container spacing={2}>
              {/* Mỗi phần tử trong data */}
              <Grid item xs={12} md={12} lg={2}>
                <DataField label="Mã đối tác" value={data.code} />
              </Grid>
              <Grid item xs={12} md={6} lg={data.data !== null ? 5 : 10}>
                <DataField
                  label="Thông báo"
                  value={data.message}
                  isError={true} // Đánh dấu là message để có thể tùy chỉnh màu sắc
                />
              </Grid>
              {data.data !== null && (
                <Grid item xs={12} md={6} lg={5}>
                  <DataField
                    label="Dữ liệu"
                    value={JSON.stringify(data.data)}
                  />
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
}

// Component hiển thị dữ liệu
type DataFieldProps = {
  label: string;
  value: string | number | null | undefined;
  isError?: boolean; // Thêm prop để xác định message có màu đỏ
};

const DataField = ({ label, value, isError = false }: DataFieldProps) => {
  return (
    <Box
      sx={{
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        color="textSecondary"
        sx={{ flexShrink: 0 }}
      >
        {label}:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          color: isError ? "red" : "inherit",
          marginLeft: "16px",
          wordBreak: "break-word",
        }}
      >
        {value ? value : "N/A"}
      </Typography>
    </Box>
  );
};
