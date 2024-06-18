import React, { useState } from "react";
import {
  Typography,
  FormControl,
  FormHelperText,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

interface TyphoFieldProps {
  name: string;
  label: string;
  variant?:
    | "body1"
    | "body2"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
  className?: string;
  fullWidth?: boolean;
  showBorder?: boolean; // Prop to control border visibility
}

const TyphoField: React.FC<TyphoFieldProps> = ({
  name,
  label,
  variant = "body1",
  color = "initial",
  className = "",
  fullWidth = false,
  showBorder = false, // Default to no border
  ...props
}) => {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const [fullText, setFullText] = useState<string | null>(null);

  const handleClickOpen = (text: string) => {
    setFullText(text);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFullText(null);
  };

  return (
    <>
      <Controller
        render={({ field, fieldState }) => (
          <FormControl
            className={className}
            fullWidth={fullWidth}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {/* Wrapping the label in a Box for overflow handling */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              onClick={() => handleClickOpen(`${label}: ${field.value}`)}
              title={label} // Show full label on hover
            >
              <Typography variant="caption" color="textSecondary">
                {label}:
              </Typography>
            </Box>

            <Box
              sx={{
                border: showBorder ? "1px solid" : "none",
                borderColor: "grey.400",
                borderRadius: "4px",
                padding: showBorder ? "8px" : "0",
                minHeight: "24px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              onClick={() => handleClickOpen(field.value || "")}
              title={field.value} // Show full value on hover
            >
              <Typography variant={variant} color={color} noWrap>
                {field.value ? field.value : "\u00A0"}
              </Typography>
            </Box>
            {fieldState.error && (
              <FormHelperText error>{fieldState.error.message}</FormHelperText>
            )}
          </FormControl>
        )}
        name={name}
        control={control}
      />

      {/* Dialog for showing full text */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Chi tiết</DialogTitle>
        <DialogContent>
          <Typography variant="body1" color="textPrimary">
            {fullText}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TyphoField;
