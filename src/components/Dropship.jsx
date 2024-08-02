import React, { useState } from "react";
import { Box, Button, TextField, inputLabelClasses } from "@mui/material";
import { CloudUploadRounded } from "@mui/icons-material";
import { labelSorting, excelUpload, zipUpload, uploadFile } from "../API";

export default function Dropship() {
  const [excel, setExcel] = useState(null);
  const [zip, setZip] = useState(null);
  const [name, setName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === "xlsx-file") {
      setExcel(file);
    } else if (e.target.name === "zip-file") {
      setZip(file);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {};

  return (
    <Box className="DropShip">
      <h1>Dropship Labels</h1>
      <Box className="upload">
        <Button
          className="dropship"
          component="label"
          variant="contained"
          startIcon={<CloudUploadRounded />}
        >
          Upload Excel
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Button
          className="dropship"
          component="label"
          variant="contained"
          startIcon={<CloudUploadRounded />}
        >
          Upload Zip
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <TextField
          label="Sheet Name:"
          variant="filled"
          size="small"
          value={name}
          onChange={handleNameChange}
          InputLabelProps={{
            sx: {
              color: "white",
              [`&.${inputLabelClasses.shrink}`]: {
                color: "primary.light",
              },
            },
          }}
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: "#01579b",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
        />
        <Button className="dropship" variant="contained" onClick={handleSubmit}>
          Sort Labels
        </Button>
      </Box>
    </Box>
  );
}
