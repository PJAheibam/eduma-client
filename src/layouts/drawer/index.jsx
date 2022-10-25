import React from "react";
import { Drawer, Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MenuDrawer = ({ open, handleClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={handleClose}>
      <Box role="presentation" minWidth={300} padding={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="h1">
            Menu
          </Typography>
          <IconButton onClick={handleClose} color="error" variant="outlined">
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
