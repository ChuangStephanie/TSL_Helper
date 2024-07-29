import React from "react";
import {
  Box,
  Button,
  inputLabelClasses,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function BOL() {
  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
  };

  return (
    <>
      <h1>Bill of Lading</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        className="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="subtitle1">Bill of Lading No</Typography>
        <TextField
          id="orderNum"
          label="Bill of Lading No:"
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
        <Box className="shipFrom">
          <Typography variant="subtitle1">Ship From</Typography>
          <TextField
            id="fromAddress"
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
            id="fromCity"
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
            id="fromState"
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
            id="fromZip"
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
          <FormGroup>
            <TextField
              id="SID"
              variant="filled"
              size="small"
              label="SID#"
              color="primary"
              InputLabelProps={{
                sx: {
                  color: "gray",
                  fontSize: "12px",
                  top: "-5px",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "primary",
                  },
                },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: "gray",
                },
                "& .MuiFilledInput-root": {
                  height: "30px",
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="FOB"
            ></FormControlLabel>
          </FormGroup>
        </Box>
        <Box className="shipTo">
          <Typography variant="subtitle1">Ship To</Typography>
          <TextField
            id="toAddress"
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
            id="toState"
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
            id="toZip"
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
          <FormGroup>
            <TextField
              id="CID"
              variant="filled"
              size="small"
              label="CID#"
              color="primary"
              InputLabelProps={{
                sx: {
                  color: "gray",
                  fontSize: "12px",
                  top: "-5px",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "primary",
                  },
                },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: "gray",
                },
                "& .MuiFilledInput-root": {
                  height: "30px",
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="FOB"
            ></FormControlLabel>
          </FormGroup>
        </Box>
        <Box className="shipping">
          <Typography variant="subtitle1">Shipping Carrier</Typography>
          <TextField
            id="carrier"
            label="Carrier Name:"
            multiline
            variant="filled"
            color="primary"
            className="textfield"
            size="small"
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
            id="trailer"
            label="Trailer No:"
            multiline
            variant="filled"
            color="primary"
            className="textfield"
            size="small"
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
            id="seal"
            label="Seal Number(s):"
            multiline
            variant="filled"
            color="primary"
            className="textfield"
            size="small"
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
        <Box className="items">
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
        </Box>
        <Box className="freightCharges">
          <Typography variant="subtitle1">
            Third Party Freight Charges
          </Typography>
          <TextField
            id="freight"
            label="Bill To:"
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
          <Typography sx={{ color: "gray" }}>
            Freight Charge Terms (prepaid unless marked otherwise)
          </Typography>
          <FormGroup className="checkbox" row>
            <FormControlLabel
              control={<Checkbox />}
              label="Prepaid"
            ></FormControlLabel>
            <FormControlLabel
              control={<Checkbox />}
              label="Collect"
            ></FormControlLabel>
            <FormControlLabel
              control={<Checkbox />}
              label="3rd Party"
            ></FormControlLabel>
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Master BOL: w/attached underlying BOLs"></FormControlLabel>
          </FormGroup>
        </Box>
        <Box className="">
        <Typography variant="subtitle1">Customer Order Information</Typography>
        <TextField
          id="orderNum"
          label="Customer Order No.:"
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
          id="pkgs"
          label="# Pkgs:"
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
          id="weight"
          label="Weight:"
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
        <Button type="submit">Submit</Button>
      </Box>
    </>
  );
}
