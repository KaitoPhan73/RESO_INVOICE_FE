import React, { useState } from "react";
import {
  Typography,
  FormControl,
  FormHelperText,
  Box,
  Popover,
  IconButton,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

interface Option {
  value: any; // Cập nhật type definition cho Option
  label: string;
}

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
  showBorder?: boolean;
  options?: Option[]; // Options can be an array of Options or an enum object
  convert?: (value: any) => string; // Convert function receives the field value
}

const TyphoField: React.FC<TyphoFieldProps> = ({
  name,
  label,
  variant = "body1",
  color = "initial",
  className = "",
  fullWidth = false,
  showBorder = false,
  options,
  convert, // Accepts a convert function
}) => {
  const { control } = useFormContext();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [fullText, setFullText] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setFullText(event.currentTarget.dataset.value || null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFullText(null);
  };

  const open = Boolean(anchorEl);

  const getOptionLabel = (value: any) => {
    if (options) {
      const option = options.find((opt) => opt.value == value);
      return option ? option.label : String(value);
    }
    return String(value);
  };

  const getValueLabel = (value: any) => {
    if (options) {
      const option = options.find((opt) => opt.value == value);
      return option ? option.label : String(value);
    }
    if (convert) {
      return convert(value);
    }
    return String(value);
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              onClick={handleClick}
              data-value={field.value}
              title={label}
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
              onClick={handleClick}
              data-value={field.value || ""}
              title={field.value}
            >
              <Typography variant={variant} color={color} noWrap>
                {field.value ? getValueLabel(field.value) : "\u00A0"}
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

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box p={2} sx={{ minWidth: "200px" }}>
          <Typography variant="body1" color="textPrimary">
            {fullText ? getValueLabel(fullText) : ""}
          </Typography>
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{ position: "absolute", top: "8px", right: "8px" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Popover>
    </>
  );
};

export default TyphoField;
