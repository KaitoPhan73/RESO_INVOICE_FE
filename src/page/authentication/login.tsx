"use client";
import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { TLogin } from "@/types/User";
import { useRouter } from "next/navigation";
import {
  VisibilityOff,
  Visibility,
  AccountCircle,
  Lock,
} from "@mui/icons-material";
import { Input } from "antd";
import { checkLogin } from "@/actions/auth";
import { useSnackbar } from "notistack";
import InputField from "@/components/form/InputField";

type Props = {
  postData: any;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const methods = useForm<TLogin>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { handleSubmit, control } = methods;

  const onSubmit = async (values: TLogin) => {
    console.log(values);
    const checkUser = await checkLogin(values);
    if (checkUser.status === 200) {
      enqueueSnackbar("Login successfully", { variant: "success" });
      router.push("/dashboard/users");
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
            alt="Background image"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Grid>
        <Grid item xs={6} sm={6} sx={{ display: "flex", alignItems: "center" }}>
          <Paper
            className="form"
            sx={{
              padding: "40px",
              maxWidth: "450px",
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

            <InputField
              name="username"
              label="UserName"
              fullWidth
              sx={{ width: "100%", mb: 2 }} // Adjust the width and margin bottom
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <InputField
              name="password"
              label="Password"
              fullWidth
              sx={{ width: "100%", mb: 2 }} // Adjust the width and margin bottom
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              type={showPassword ? "text" : "password"}
            />

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

            <Box sx={{ textAlign: "center", marginBottom: "16px" }}>
              <Typography variant="body2" sx={{ display: "inline" }}>
                Dont have an account?{" "}
                <Link href="/register" color="primary">
                  Register
                </Link>
              </Typography>{" "}
              |
              <Typography variant="body2" sx={{ display: "inline" }}>
                {" "}
                <Link href="/forgot-password" color="primary">
                  Forgot Password?
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
