import React from "react";
import { Box, TextField } from "@mui/material";

export default function Shipment() {
  return (
    <>
      <h1>Shipment Pallet Labels</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          id="orderNum"
          label="Order #"
          multiline
          variant="filled"
          color="primary"
        ></TextField>
      </Box>
    </>
  );
}
