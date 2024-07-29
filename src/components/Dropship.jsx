import React from "react";
import { Box, Button } from "@mui/material";
import { CloudUploadRounded } from "@mui/icons-material";

export default function Dropship() {
  const handleFileUpload = () => {
    //upload onto api
  };

  return (
    <>
      <h1>Dropship Labels</h1>
      <Box className="upload">
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadRounded />}
        >
          Upload Files
          <input type="file" hidden onChange={handleFileUpload}></input>
        </Button>
      </Box>
    </>
  );
}
