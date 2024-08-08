import React, { useState } from "react";
import { Box, Button, TextField, inputLabelClasses } from "@mui/material";
import { CloudUploadRounded } from "@mui/icons-material";
import { labelSorting, excelUpload, zipUpload, fileUpload } from "../API";

export default function Dropship() {
  const [excel, setExcel] = useState(null);
  const [zip, setZip] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === "xlsx-file") {
      console.log("Excel uploaded");
      setExcel(file);
    } else if (e.target.name === "zip-file") {
      console.log("Zip uploaded");
      setZip(file);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    console.log(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!excel || !zip || !name) {
      alert("Please upload both files and provide sheet name.");
      return;
    }

    setLoading(true);
    try {
      await excelUpload(excel);
      await zipUpload(zip);
      await labelSorting(excel, zip, name);
    } catch (error) {
      console.error("Error during sorting labels:", error);
      setError("Failed to sort labels. :( ");
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      if (files[0].name.endsWith(".xlsx")) {
        console.log("Excel uploaded");
        setExcel(files[0]);
      } else if (files[0].name.endsWith(".zip")) {
        console.log("Zip uploaded");
        setZip(files[0]);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Box className="DropShip">
      <h1>Dropship Labels</h1>
      <Box
        className="upload"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        sx={{
          border: "2px dashed #ccc",
          borderRadius: 2,
          padding: 2,
          textAlign: "center",
          position: "relative",
          "&:hover": {
            borderColor: "#888",
          },
        }}
      >
        <Button
          className="dropship"
          component="label"
          variant="contained"
          startIcon={<CloudUploadRounded />}
        >
          Upload Excel
          <input
            type="file"
            name="xlsx-file"
            hidden
            onChange={handleFileChange}
            accept=".xlsx"
          />
        </Button>
        <Button
          className="dropship"
          component="label"
          variant="contained"
          startIcon={<CloudUploadRounded />}
        >
          Upload Zip
          <input
            type="file"
            name="zip-file"
            hidden
            onChange={handleFileChange}
            accept=".zip"
          />
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
        <Button
          className="dropship"
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          sx={{
            "&.Mui-disabled": {
              backgroundColor: "gray",
              color: "white",
            },
          }}
        >
          {loading ? "Sorting..." : "Sort Labels"}
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Box>
    </Box>
  );
}
