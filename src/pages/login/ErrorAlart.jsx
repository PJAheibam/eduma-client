import React from "react";
import { Collapse, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const ErrorAlart = ({ error }) => {
  const [open, setOpen] = useState(error ? true : false);
  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        variant="filled"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {error}
      </Alert>
    </Collapse>
  );
};

export default ErrorAlart;
