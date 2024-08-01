import React, { useState } from "react";
import {
  Box,
  Button,
  inputLabelClasses,
  TextField,
  Typography,
} from "@mui/material";
import { sendShipmentDetails } from "../API";

export default function Shipment() {
  const [formValues, setFormValues] = useState([{ item: "", quantity: "" }]);
  const [orderNum, setOrderNum] = useState("");
  const [shipFrom, setShipFrom] = useState({
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [shipTo, setShipTo] = useState({
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [carrier, setCarrier] = useState("");
  const [palletCount, setPalletCount] = useState("");
  const [shipDate, setShipDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const shipmentDetails = {
        "order-number":orderNum,
        "pallet-count": Number(palletCount), //change to number
        carrier,
        "ship-date": shipDate,
        origin: shipFrom,
        destination: shipTo,
        "order-summary": formValues.map(({item, quantity}) => ({
          item,
          qty: Number(quantity),
        })),
      };
      await sendShipmentDetails(shipmentDetails);
      alert("Shipment details submitted successfully! :)");
    } catch (error) {
      console.error("Error submitting shipment details:", error);
      alert("failed to submit shipment details. :(");
    }
    console.log("submitted");
  };

  const handleChange = (i, e) => {
    const newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
  const addFormFields = () => {
    setFormValues([...formValues, { item: "", quantity: "" }]);
    console.log("item added");
  };
  const removeFormFields = (i) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
    console.log("item removed");
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
          id="order-number"
          label="Order #:"
          variant="filled"
          value={orderNum}
          onChange={(e) => setOrderNum(e.target.value)}
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
            id="address"
            label="Address:"
            variant="filled"
            value={shipFrom.address}
            onChange={(e) =>
              setShipFrom({ ...shipFrom, address: e.target.value })
            }
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
            id="address2"
            label="APT/STE/etc:"
            variant="filled"
            value={shipFrom.address2}
            onChange={(e) =>
              setShipFrom({ ...shipFrom, address2: e.target.value })
            }
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
            variant="filled"
            value={shipFrom.city}
            onChange={(e) =>
              setShipFrom({ ...shipFrom, city: e.target.value })
            }
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
            variant="filled"
            value={shipFrom.state}
            onChange={(e) =>
              setShipFrom({ ...shipFrom, state: e.target.value })
            }
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
            variant="filled"
            value={shipFrom.zip}
            onChange={(e) =>
              setShipFrom({ ...shipFrom, zip: e.target.value })
            }
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
        <Box className="shiptTo">
          <Typography variant="subtitle1">Ship To</Typography>
          <TextField
            id="address"
            label="Address:"
            variant="filled"
            value={shipTo.address}
            onChange={(e) =>
              setShipTo({ ...shipTo, address: e.target.value })
            }
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
            id="address2"
            label="APT/STE/etc:"
            variant="filled"
            value={shipTo.address2}
            onChange={(e) =>
              setShipTo({ ...shipTo, address2: e.target.value })
            }
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
            variant="filled"
            value={shipTo.city}
            onChange={(e) =>
              setShipTo({ ...shipTo, city: e.target.value })
            }
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
            variant="filled"
            value={shipTo.state}
            onChange={(e) =>
              setShipTo({ ...shipTo, state: e.target.value })
            }
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
            variant="filled"
            value={shipTo.zip}
            onChange={(e) =>
              setShipTo({ ...shipTo, zip: e.target.value })
            }
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
          variant="filled"
          value={carrier}
          onChange={(e) => setCarrier(e.target.value)}
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
                name="item"
                label="Item(s)"
                multiline
                variant="filled"
                className="textfield"
                value={element.item || ""}
                onChange={(e) => handleChange(index, e)}
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
              <TextField
                name="quantity"
                label="Qty"
                multiline
                variant="filled"
                className="textfield"
                value={element.quantity || ""}
                onChange={(e) => handleChange(index, e)}
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
                <Button
                  variant="contained"
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </Button>
              ) : null}
            </Box>
          ))}
          <Button variant="contained" onClick={() => addFormFields()}>
            Add
          </Button>
        </Box>
        <Typography variant="subtitle1">Total Pallets</Typography>
        <TextField
          id="pallets"
          label="Total Pallets:"
          variant="filled"
          value={palletCount}
          onChange={(e) => setPalletCount(e.target.value)}
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
          variant="filled"
          value={shipDate}
          onChange={(e) => setShipDate(e.target.value)}
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
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
}
