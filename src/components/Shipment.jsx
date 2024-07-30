import React, { useState } from "react";
import {
  Box,
  Button,
  inputLabelClasses,
  TextField,
  Typography,
} from "@mui/material";

export default function Shipment() {
  const [formValues, setFormValues] = useState([{ item: "" }]);
  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
  };

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
  const addFormFields = () => {
    setFormValues([...formValues], { item: "" });
  };
  const removeFormFields = () => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <>
      <h1>Shipment Pallet Labels</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        className="form"
        onSubmit={handleSubmit}
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
          <Typography variant="subtitle1">Ship To</Typography>
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
        <Box className="items">
          <Typography variant="subtitle1">Item(s)</Typography>
          {formValues.map((element, index) => (
            <Box key={index}>
              <TextField
                id="item"
                label="Item(s)"
                multiline
                variant="filled"
                className="textfield"
                value={element.name || ""}
                onChange={(e) => this.handleChange(index, e)}
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
              />
              {index ? (
                <Button onClick={() => this.removeFormFields(index)}>
                  Remove
                </Button>
              ) : null}
            </Box>
          ))}
          {/* <TextField
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
          ></TextField> */}
          <Button onClick={() => this.addFormFields()}>Add</Button>
        </Box>
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
