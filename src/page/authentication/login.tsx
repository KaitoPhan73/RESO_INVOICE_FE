import React from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { FormProvider } from "react-hook-form";

export default function LoginPage() {
  return (
    // <FormProvider>
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Paper className="image">Hình ảnh ở đây</Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className="form">
          <h2>Login</h2>
          <form>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
    // </FormProvider>
  );
}
