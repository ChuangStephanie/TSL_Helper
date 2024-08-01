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
    window.open(url, '_blank', 'noopener,noreferrer');

    // Optional: Clean up the object URL after some time to release memory
    setTimeout(() => window.URL.revokeObjectURL(url), 10000);

  } catch (error) {
    console.error("Error creating shipment label", error);
    throw error;
  }
}
