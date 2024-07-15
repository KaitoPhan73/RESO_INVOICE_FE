import React from "react";
import { Typography, Grid, GridProps, Box, Button } from "@mui/material";

type PageProps = {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode; // Add the action prop to accept a React element
} & GridProps;

const Page: React.FC<PageProps> = ({ title, children, action, ...props }) => {
  return (
    <Grid container spacing={2} padding={3}>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        {action && (
          <Box>
            {action} {/* Render the action if provided */}
          </Box>
        )}
      </Grid>
      <Grid container item xs={12} {...props}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Page;
