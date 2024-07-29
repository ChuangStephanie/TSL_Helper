import React from "react";
import { Box, Button, inputLabelClasses, TextField, Typography } from "@mui/material";

export default function Shipment() {
  return (
    <>
      <h1>Shipment Pallet Labels</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        className="form"
      >
        <Typography variant="subtitle1">Order #</Typography>
        <TextField
          id="orderNum"
          label="Order #:"
          multiline
          variant="filled"
          color="primary"
          className="textfield"
          InputLabelProps={{
            sx: {
              color: "gray",
              [`&.${inputLabelClasses.shrink}`]: {
                color: "primary",
              },
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "gray",
            },
          }}
        ></TextField>
        <Box>
          <Typography variant="subtitle1">Destination</Typography>
          <TextField
            id="address"
            label="Address:"
            multiline
            variant="filled"
            color="primary"
            className="textfield"
            InputLabelProps={{
              sx: {
                color: "gray",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "primary",
                },
              },
            }}
            sx={{
              "& .MuiInputBase-input": {
                color: "gray",
              },
            }}
          ></TextField>
          <TextField
            id="city"
            label="City:"
            multiline
            variant="filled"
            color="primary"
            className="textfield"
            InputLabelProps={{
              sx: {
                color: "gray",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "primary",
                },
              },
            }}
            sx={{
              "& .MuiInputBase-input": {
                color: "gray",
              },
            }}
          ></TextField>
          <TextField
            id="state"
            label="State:"
            multiline
            variant="filled"
            color="primary"
            className="textfield"
            InputLabelProps={{
              sx: {
                color: "gray",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "primary",
                },
              },
            }}
            sx={{
              "& .MuiInputBase-input": {
                color: "gray",
              },
            }}
          ></TextField>
          <TextField
            id="zip"
            label="Zip Code:"
            multiline
            variant="filled"
            color="primary"
            className="textfield"
            InputLabelProps={{
              sx: {
                color: "gray",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "primary",
                },
              },
            }}
            sx={{
              "& .MuiInputBase-input": {
                color: "gray",
              },
            }}
          ></TextField>
        </Box>
        <Typography variant="subtitle1">Shipping Carrier</Typography>
        <TextField
          id="carrier"
          label="Shipping Carrier:"
          multiline
          variant="filled"
          color="primary"
          className="textfield"
          InputLabelProps={{
            sx: {
              color: "gray",
              [`&.${inputLabelClasses.shrink}`]: {
                color: "primary",
              },
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "gray",
            },
          }}
        ></TextField>
        <Typography variant="subtitle1">Item(s)</Typography>
        <TextField
          id="item"
          label="Item(s):"
          multiline
          variant="filled"
          color="primary"
          className="textfield"
          InputLabelProps={{
            sx: {
              color: "gray",
              [`&.${inputLabelClasses.shrink}`]: {
                color: "primary",
              },
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "gray",
            },
          }}
        ></TextField>
        <Typography variant="subtitle1">Total Pallets</Typography>
        <TextField
          id="pallets"
          label="Total Pallets:"
          multiline
          variant="filled"
          color="primary"
          className="textfield"
          InputLabelProps={{
            sx: {
              color: "gray",
              [`&.${inputLabelClasses.shrink}`]: {
                color: "primary",
              },
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "gray",
            },
          }}
        ></TextField>
        <Typography variant="subtitle1">Scheduled Ship Date</Typography>
        <TextField
          id="shipdate"
          label="Ship Date:"
          multiline
          variant="filled"
          color="primary"
          className="textfield"
          InputLabelProps={{
            sx: {
              color: "gray",
              [`&.${inputLabelClasses.shrink}`]: {
                color: "primary",
              },
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "gray",
            },
          }}
        ></TextField>
        <Button type="submit">Submit</Button>
      </Box>
    </>
  );
}
