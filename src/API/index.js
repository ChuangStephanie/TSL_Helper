export const URL = "http://localhost:5000/api";

export async function sendShipmentDetails(shipmentDetails) {
  try {
    const response = await fetch(`${URL}/palletlabels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "shipment-details": shipmentDetails }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating profuct", error);
    throw error;
  }
}
