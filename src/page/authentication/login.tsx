"use client"
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Grid,
  Paper,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
  VisibilityOff,
  Visibility,
  AccountCircle,
  Lock,
} from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import '@dotlottie/player-component/dist/dotlottie-player.mjs'; // Import player-component
import InputField from '@/components/form/InputField';
import authApi from '@/actions/auth';
import { LoginBody, TLoginBody } from '@/schemaValidations/auth.schema';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/User/userSlice';
import PATHS from '@/route/paths';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


type Props = {
  postData: any;
};

export default function LoginPage() {
  const { PATH_DASHBOARD } = PATHS;
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector((state: RootState) => state.user.userServer);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const methods = useForm<TLoginBody>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const { handleSubmit, control } = methods;
  console.log("userOKKK", user);
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
        enqueueSnackbar('Login successfully', { variant: 'success' });
        if (user?.role === 0) {
          router.push(PATHS.PATH_BRAND.organizations);
        } else if (user?.role === 1) {
          router.push(PATHS.PATH_ADMINSYSTEM.brands);
        } else if (user?.role === 2) {
          router.push(PATHS.PATH_ORGANIZATION.invoices);
        }
      }
    } catch (error: any) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        width: '100%',
        margin: '10px auto',
        position: 'relative',
      }}
    >
      <div
        className="top"
        style={{
          background: '#131be1',
          height: '300px',
          position: 'relative',
          backgroundImage: `url("/images/logo-deercoffee.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="logo"
          style={{
            position: 'absolute',
            maxWidth: '100px',
            top: '28%',
            left: '50%',
            transform: 'translateX(-50%)',
            WebkitTransform: 'translateX(-50%)',
          }}
        >
          <img src="" alt="" width="100px" />
        </div>
      </div>
      <div
        className="bottom"
        style={{
          background: '#eee',
          borderRadius: '20px',
          marginTop: '10px',
        }}
      >
        <FormProvider {...methods}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12}>
              <Paper
                className="form"
                sx={{
                  padding: '40px',
                  maxWidth: '500px',
                  margin: 'auto',
                  borderRadius: '20px',
                  boxShadow: '30px 20px 20px rgba(0, 0, 0, 0.1)',
                  color: '#333',
                  border: '1px solid #333',
                }}
              >
                <h2
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontFamily: 'initial',
                  }}
                >
                  Welcome you come back !!!
                </h2>
                <Typography
                  variant="subtitle2"
                  sx={{ textAlign: 'center', marginTop: '16px' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{ width: '100%', height: '1px', bgcolor: 'grey.500' }}
                    />
                    <Box sx={{ px: 1, fontWeight: 'bold' }}>OR</Box>
                    <Box
                      sx={{ width: '100%', height: '1px', bgcolor: 'grey.500' }}
                    />
                  </Box>
                </Typography>

                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="Username"
                      placeholder="Username"
                      fullWidth
                      sx={{ width: '100%', mb: 2 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      fullWidth
                      sx={{ width: '100%', mb: 2 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={togglePasswordVisibility}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit(onSubmit)}
                  sx={{
                    marginTop: '10px',
                    marginBottom: '10px',
                    borderRadius: '30px',
                    background: '#f8c407',
                    borderColor: '#f8c407',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#fff',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  {loading ? 'Happy Code ...' : 'Login'}
                </Button>

                {/* Hiển thị animation khi đang loading */}
                {loading && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <dotlottie-player
                      src="https://lottie.host/d4dd4311-b564-4771-83e3-06141e29eeb4/tQqrViPvvP.json"
                      background="transparent"
                      speed="1"
                      style={{ width: 150, height: 150 }}
                      loop
                      autoplay
                    ></dotlottie-player>
                  </div>
                )}
              </Paper>
            </Grid>
          </Grid>
        </FormProvider>
      </div>
    </div>
  );
}
