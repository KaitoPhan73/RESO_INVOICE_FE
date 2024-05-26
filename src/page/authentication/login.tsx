"use client";
import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form"; // Import FormProvider if using React Hook Form
import { TLogin } from "@/types/User";
import InputField from "@/components/form/InputField";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import authApi from "@/app/actions/auth";

type Props = {
  postData: any;
};
export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const methods = useForm<TLogin>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (values: TLogin) => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await authApi.checkLogin(values);

      await authApi.auth({
        sessionToken: response.payload.accessToken,
        // expiresAt: response.payload.,
      });
      if (response.status === 200) {
        enqueueSnackbar("Login successfully", { variant: "success" });
        router.push("/dashboard/users");
      }
    } catch (error: any) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <FormProvider {...methods}>
      <Grid container spacing={2} sx={{ height: "100vh" }}>
        <Grid item xs={6} sm={6}>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Grid>
        <Grid item xs={6} sm={6} sx={{ display: "flex", alignItems: "center" }}>
          <Paper
            className="form"
            sx={{
              padding: "40px",
              maxWidth: "450px", // Tăng giá trị maxWidth lên
              margin: "auto",
              borderRadius: "16px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              color: "#333",
            }}
          >
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
              Welcome you come back !!!
            </h2>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "center", marginTop: "16px" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: "100%", height: "1px", bgcolor: "grey.500" }}
                />
                <Box sx={{ px: 1, fontWeight: "bold" }}>OR</Box>
                <Box
                  sx={{ width: "100%", height: "1px", bgcolor: "grey.500" }}
                />
              </Box>
            </Typography>

            {/* Form */}
            <InputField name="username" label="UserName" fullWidth />

            <InputField name="password" label="Password" fullWidth />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              sx={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Login
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
