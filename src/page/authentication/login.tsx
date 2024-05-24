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
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { checkLogin } from "@/actions/auth";
import { useSnackbar } from "notistack";

type Props = {
  postData: any;
};
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
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
    console.log(values);
    const response = await checkLogin(values);
    const parseString = JSON.stringify(response.payload);
    localStorage.setItem("user", parseString);
    console.log("response", response);
  };

  // console.log("watch", watch);
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
              variant="body2"
              sx={{ textAlign: "center", marginTop: "16px" }}
            >
              Don't have an account? <a href="#">Sign up here</a>
            </Typography>

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
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              variant="outlined"
              required
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              {...methods.register("username")}
            />

            <TextField
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              required
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...methods.register("password")}
            />
            <Button
              color="primary"
              size="medium"
              sx={{
                alignSelf: "flex-start",
                fontSize: "smaller",
              }}
            >
              Forgot Password?
            </Button>

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
