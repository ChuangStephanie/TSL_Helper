export const baseURL = "http://127.0.0.1:5000/api";

export async function sendShipmentDetails(shipmentDetails) {
  console.log("sending:", JSON.stringify(shipmentDetails)); // log data sent

  try {
    const response = await fetch(`${baseURL}/palletlabels/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "shipment-details": shipmentDetails }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // response to be PDF in blob format
    const blob = await response.blob();

    // url for blob object
    const url = window.URL.createObjectURL(blob);

    // Open the PDF in a new tab
    window.open(url, "_blank", "noopener,noreferrer");

    // Optional: Clean up the object URL after some time to release memory
    setTimeout(() => window.URL.revokeObjectURL(url), 10000);
  } catch (error) {
    console.error("Error creating shipment label", error);
    throw error;
  }
}

//label sorting
export async function labelSorting(excel, zip, name) {
  try {
    const formData = new FormData();
    formData.append("xlsx-file", excel);
    formData.append("zip-file", zip);
    formData.append("sheet-name", name);

    const response = await fetch(`${baseURL}/dropship-sort`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => window.URL.revokeObjectURL(url), 10000);

    return { status: "success" };
  } catch (error) {
    console.error("Error sorting labels:", error);
    return { status: "error", message: error.message };
  }
}

// excel upload
export async function excelUpload(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${baseURL}/fileupload/xlsx`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error uploading excel file:", error);
    return { status: "error", message: error.message };
  }
}

// zip upload
export async function zipUpload(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${baseURL}/fileupload/zip`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error uploading zip file:", error);
    return { status: "error", message: error.message };
  }
}

// file upload
// excel and zip inherit from here so probably wont need
//add just in case
export async function fileUpload(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${baseURL}/fileupload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error uploading file:", error);
    return { status: "error", message: error.message };
  }
}
