import React from "react";
import { Drawer, Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavTabs from "./NavTabs";

const MenuDrawer = ({ open, handleClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box role="presentation" minWidth={300} padding={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="h1">
            Menu
          </Typography>
          <IconButton onClick={handleClose} color="error" variant="outlined">
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>

        <NavTabs handleClose={handleClose} />
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
