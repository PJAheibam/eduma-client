import React from "react";
import {
  Box,
  Step,
  StepContent,
  Typography,
  StepLabel,
  Button,
} from "@mui/material";

const ShippingStep = () => {
  return (
    <Step key={step.label}>
      <StepLabel>Shipping</StepLabel>
      <StepContent>
        <Typography>Please prov</Typography>
        <Box sx={{ mb: 2 }}>
          <div>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              {index === steps.length - 1 ? "Finish" : "Continue"}
            </Button>
            <Button
              disabled={index === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
          </div>
        </Box>
      </StepContent>
    </Step>
  );
};

export default ShippingStep;
