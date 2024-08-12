import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  inputLabelClasses,
  Snackbar,
  Slide,
  CircularProgress,
  Fade,
  SnackbarContent,
} from "@mui/material";
import { CloudUploadRounded } from "@mui/icons-material";
import { labelSorting, excelUpload, zipUpload, fileUpload } from "../API";

function SlideUp(props) {
  return <Slide {...props} direction="up" />;
}

export default function Dropship() {
  const [excel, setExcel] = useState(null);
  const [zip, setZip] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackBarMessage] = useState("");

  const showSnackbar = (message) => {
    setSnackBarMessage(message);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === "xlsx-file") {
      console.log("Excel uploaded");
      setExcel(file);
      showSnackbar("Excel file uploaded");
    } else if (e.target.name === "zip-file") {
      console.log("Zip uploaded");
      setZip(file);
      showSnackbar("Zip file uploaded");
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
      showSnackbar("Labels sorted!");
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
        showSnackbar("Excel file uploaded");
      } else if (files[0].name.endsWith(".zip")) {
        console.log("Zip uploaded");
        setZip(files[0]);
        showSnackbar("Zip file uploaded");
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
          {loading ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Sort Labels"
          )}
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Box>
      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        TransitionComponent={SlideUp}
        message={snackbarMessage}
        autoHideDuration={5000}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#49c758",
          },
        }}
      />
    </Box>
  );
}
