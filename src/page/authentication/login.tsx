"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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

type Props = {
  postData: any;
};

export default function LoginPage() {
  const { PATH_DASHBOARD } = PATHS;
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
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
          router.push(PATHS.PATH_BRAND.organizations);
        } else if (user?.role === 1) {
          router.push(PATHS.PATH_ADMINSYSTEM.brands);
        } else if (user?.role === 2) {
          router.push(PATHS.PATH_ORGANIZATION.invoices);
        }
      }
    } catch (error: any) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stars = document.querySelectorAll(".star");
    const speed = 2;

    stars.forEach((star, index) => {
      const randX = Math.random() * window.innerWidth;
      const randY = Math.random() * window.innerHeight;
      const rotation = Math.random() * 180;

      star.setAttribute(
        "style",
        `top: ${randY}px; left: ${randX}px; transform: rotate(${rotation}deg);`
      );

      const goRight = Math.random() < 0.5;
      const goDown = Math.random() < 0.5;

      let speedX = Math.random() * speed;
      let speedY = Math.random() * speed;

      if (!goRight) speedX = -speedX;
      if (!goDown) speedY = -speedY;

      const updateStarPosition = () => {
        let x = parseFloat(
          star.getAttribute("style")?.split(";")[1]?.split(":")[1] || "0"
        );
        let y = parseFloat(
          star.getAttribute("style")?.split(";")[0]?.split(":")[1] || "0"
        );

        if (x > window.innerWidth || x < 0) speedX = -speedX;
        if (y > window.innerHeight || y < 0) speedY = -speedY;

        x += speedX;
        y += speedY;

        star.setAttribute(
          "style",
          `top: ${y}px; left: ${x}px; transform: rotate(${rotation}deg); box-shadow: 0 0 100px #000;`
        );
      };

      setInterval(updateStarPosition, 1000 / 60);
    });
  }, []);

  return (
    <FormProvider {...methods}>
      <Grid container spacing={2} sx={{ height: "100vh" }}>
        <Grid item xs={6} sm={6}>
          <Box
            component="div"
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              component="img"
              sx={{
                position: "absolute",
                zIndex: 1,
                maxWidth: "100%",
                maxHeight: "100%",
                transition: "transform 0.5s",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
              alt="Background image"
              src="/images/logo-deercoffee.jpg"
            />
            <Box
              component="img"
              sx={{
                position: "absolute",
                zIndex: 0,
                filter: "blur(8px)",
                width: "100%",
                height: "100%",
              }}
              alt="Background image"
              src="/images/logo-deercoffee.jpg"
            />
            {[...Array(10)].map((_, i) => (
              <Box
                key={i}
                className="star"
                component="div"
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  width: "40px",
                  height: "40px",
                  backgroundImage: "url('/images/sky.jpg')",
                  backgroundSize: "cover",
                  animation: "spin 5s linear infinite",
                  borderRadius: "50%",
                  backgroundColor: "black",
                  boxShadow: "0 0 1000px #000",
                }}
              />
            ))}
          </Box>
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
