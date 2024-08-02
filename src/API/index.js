export const baseURL = "http://127.0.0.1:5000/api";

export async function sendShipmentDetails(shipmentDetails) {
  console.log("sending:", shipmentDetails); // log data sent

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
  } catch (error) {
    console.error("Error:", error);
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
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
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
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// file upload
export async function uploadFile(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${baseURL}/fileupload`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
