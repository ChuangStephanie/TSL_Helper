import React, { useRef } from "react";
import { Button } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import "../CSS/modal.css";
import "../CSS/print.css";
import "../CSS/reset.css";
import "../CSS/styles.css";

export default function BOL() {
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  return (
    <>
      <Button className="print" variant="contained" onClick={handlePrint}>Print</Button>
      <div id="main">
        <form ref={printRef} id="form" action="topdf.php" method="post">
          <div id="invHeader">
            <div id="headLeft">
              <h1>Bill of Lading</h1>
              <div style={{ marginTop: 16 }}>
                <p>Ship From:</p>
                <p>
                  <textarea id="shipper" defaultValue={""} />
                </p>
                <div style={{ border: "none", float: "left", width: 300 }}>
                  <span>SID#: </span>
                  <input type="text" id="sid" />
                </div>
                <div style={{ border: "none", float: "left" }}>
                  <input type="checkbox" id="fobOne" />
                  <span> FOB</span>
                </div>
                <div
                  style={{ border: "none", padding: 0, margin: 0 }}
                  className="clear"
                >
                  {/*empty*/}
                </div>
              </div>
              <div>
                <div style={{ border: "none", float: "left", width: 185 }}>
                  <p>Ship To:</p>
                  <p></p>
                </div>
                <div style={{ border: "none", float: "left" }}>
                  <span>Location No:</span>
                  <input type="text" size={6} id="locNo" />
                </div>
                <div style={{ border: "none" }} className="clear">
                  {/*empty*/}
                </div>
                <textarea id="shipTo" defaultValue={""} />
                <div style={{ border: "none", float: "left", width: 300 }}>
                  <span>CID#: </span>
                  <input type="text" id="cid" />
                </div>
                <div style={{ border: "none", float: "left" }}>
                  <input type="checkbox" id="fobTwo" />
                  <span> FOB</span>
                </div>
                <div
                  style={{ border: "none", padding: 0, margin: 0 }}
                  className="clear"
                >
                  {/*empty*/}
                </div>
              </div>
              <div>
                <p>Third Party Freight Charges - Bill To:</p>
                <p>
                  <textarea id="thirdPty" defaultValue={""} />
                </p>
              </div>
            </div>
            {/*end headLeft*/}
            <div id="headRight">
              <div className="inlineSpan border">
                <span>Date:</span>
                <span className="fullWidth">
                  &nbsp;
                  <input type="text" id="date" />
                </span>
              </div>
              <div className="inlineSpan border">
                <span>Bill of Lading No:</span>
                <span className="fullWidth">
                  &nbsp;
                  <input type="text" id="BOL" />
                </span>
                <div className="barcode">
                  <span>
                    BARCODE SPACE<span></span>
                  </span>
                </div>
              </div>
              <div className="inlineSpan border">
                <div>
                  <span>Carrier Name:</span>
                  <span className="fullWidth">
                    &nbsp;
                    <input type="text" id="carrier" />
                  </span>
                </div>
                <div>
                  <span>Trailer No:</span>
                  <span className="fullWidth">
                    &nbsp;
                    <input type="text" id="trailer" />
                  </span>
                </div>
                <div>
                  <span>Seal Number(s):</span>
                  <span className="fullWidth">
                    &nbsp;
                    <input type="text" id="seal" />
                  </span>
                </div>
              </div>
              <div className="inlineSpan border">
                <div>
                  <span>SCAC:</span>
                  <span className="fullWidth">
                    &nbsp;
                    <input type="text" id="SCAC" />
                  </span>
                </div>
                <div>
                  <span>Pro No:</span>
                  <span className="fullWidth">
                    &nbsp;
                    <input type="text" id="ProNo" />
                  </span>
                </div>
                <div className="barcode">
                  <span>
                    BARCODE SPACE<span></span>
                  </span>
                </div>
              </div>
              <div className="border">
                <p style={{ paddingBottom: 6 }}>
                  Freight Charge Terms (prepaid unless marked otherwise)
                </p>
                <input type="checkbox" id="pre" />
                <span> Prepaid</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id="col" />
                <span> Collect</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id="third" />
                <span> 3rd Party</span>
              </div>
              <div className="border">
                <input type="checkbox" id="masterBOL" />
                <span> Master BOL: w/attached underlying BOLs</span>
              </div>
            </div>
            {/*end headRight"*/}
            <div className="clear">{/*empty*/}</div>
            <div id="inst">
              <p>Special Instructions:</p>
              <textarea id="notes" defaultValue={""} />
            </div>
          </div>
          {/*end invHeader*/}
          <div id="invTable">
            <table id="items">
              <thead>
                <tr>
                  <th className="tableBanner" colSpan={5}>
                    Customer Order Information
                  </th>
                </tr>
                <tr>
                  <th>Customer Order No.</th>
                  <th># Pkgs.</th>
                  <th>Weight</th>
                  <th>Pallet/Slip (Y/N)</th>
                  <th>Additional Shipper Info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: 135 }}>
                    <input type="text" id="ordNo_1" />
                  </td>
                  <td style={{ width: 45 }}>
                    <input type="text" className="pkgs" id="pkgs_1" />
                  </td>
                  <td style={{ width: 45 }}>
                    <input type="text" className="wght" id="wght_1" />
                  </td>
                  <td style={{ width: 55 }}>
                    <input type="text" id="pallet_1" />
                  </td>
                  <td>
                    <input type="text" id="shipInfo_1" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="ordNo_2" />
                  </td>
                  <td>
                    <input type="text" className="pkgs" id="pkgs_2" />
                  </td>
                  <td>
                    <input type="text" className="wght" id="wght_2" />
                  </td>
                  <td>
                    <input type="text" id="pallet_2" />
                  </td>
                  <td>
                    <input type="text" id="shipInfo_2" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="ordNo_3" />
                  </td>
                  <td>
                    <input type="text" className="pkgs" id="pkgs_3" />
                  </td>
                  <td>
                    <input type="text" className="wght" id="wght_3" />
                  </td>
                  <td>
                    <input type="text" id="pallet_3" />
                  </td>
                  <td>
                    <input type="text" id="shipInfo_3" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="ordNo_4" />
                  </td>
                  <td>
                    <input type="text" className="pkgs" id="pkgs_4" />
                  </td>
                  <td>
                    <input type="text" className="wght" id="wght_4" />
                  </td>
                  <td>
                    <input type="text" id="pallet_4" />
                  </td>
                  <td>
                    <input type="text" id="shipInfo_4" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="ordNo_5" />
                  </td>
                  <td>
                    <input type="text" className="pkgs" id="pkgs_5" />
                  </td>
                  <td>
                    <input type="text" className="wght" id="wght_5" />
                  </td>
                  <td>
                    <input type="text" id="pallet_5" />
                  </td>
                  <td>
                    <input type="text" id="shipInfo_5" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="ordNo_6" />
                  </td>
                  <td>
                    <input type="text" className="pkgs" id="pkgs_6" />
                  </td>
                  <td>
                    <input type="text" className="wght" id="wght_6" />
                  </td>
                  <td>
                    <input type="text" id="pallet_6" />
                  </td>
                  <td>
                    <input type="text" id="shipInfo_6" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="ordNo_7" />
                  </td>
                  <td>
                    <input type="text" className="pkgs" id="pkgs_7" />
                  </td>
                  <td>
                    <input type="text" className="wght" id="wght_7" />
                  </td>
                  <td>
                    <input type="text" id="pallet_7" />
                  </td>
                  <td>
                    <input type="text" id="shipInfo_7" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="ordNo_8" />
                  </td>
                  <td>
                    <input type="text" className="pkgs" id="pkgs_8" />
                  </td>
                  <td>
                    <input type="text" className="wght" id="wght_8" />
                  </td>
                  <td>
                    <input type="text" id="pallet_8" />
                  </td>
                  <td>
                    <input type="text" id="shipInfo_8" />
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="totals">
                  <td>Totals</td>
                  <td>
                    <div id="total-pkgs" />
                  </td>
                  <td>
                    <div id="total-wght" />
                  </td>
                  <td className="blocked" colSpan={2}>
                    {" "}
                  </td>
                </tr>
              </tfoot>
            </table>
            <table id="carrier">
              <thead>
                <tr>
                  <th className="tableBanner" colSpan={9}>
                    Carrier Information
                  </th>
                </tr>
                <tr>
                  <th colSpan={2}>Handling Unit</th>
                  <th colSpan={2}>Package</th>
                  <td className="blank" colSpan={2}>
                    {" "}
                  </td>
                  <th>Commodity Description</th>
                  <th colSpan={2}>LTL Only</th>
                </tr>
                <tr>
                  <th>QTY</th>
                  <th>TYPE</th>
                  <th>QTY</th>
                  <th>TYPE</th>
                  <th>Weight</th>
                  <th>H.M. (X)</th>
                  <th style={{ fontSize: ".65em", fontWeight: "normal" }}>
                    Commodities requiring special or additional care or
                    attention in handling or stowing must be so marked and
                    packaged as to ensure safe transportation with ordinary
                    care.{" "}
                    <p>
                      <strong>See Section 2(e) of MNMFC Item 360</strong>
                    </p>
                  </th>
                  <th>NMFC No.</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: 45 }}>
                    <input type="text" className="qtyA" id="qtyA_1" />
                  </td>
                  <td style={{ width: 45 }}>
                    <input type="text" id="typeA_1" />
                  </td>
                  <td style={{ width: 45 }}>
                    <input type="text" className="qtyB" id="qtyB_1" />
                  </td>
                  <td style={{ width: 45 }}>
                    <input type="text" id="typeB_1" />
                  </td>
                  <td style={{ width: 45 }}>
                    <input type="text" className="carWght" id="carWght_1" />
                  </td>
                  <td style={{ width: 45 }}>
                    <input type="text" id="hm_1" />
                  </td>
                  <td>
                    <input type="text" id="desc_1" />
                  </td>
                  <td style={{ width: 45 }}>
                    <input type="text" id="nmfc_1" />
                  </td>
                  <td style={{ width: 45 }}>
                    <input type="text" id="class_1" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="qtyA" id="qtyA_2" />
                  </td>
                  <td>
                    <input type="text" id="typeA_2" />
                  </td>
                  <td>
                    <input type="text" className="qtyB" id="qtyB_2" />
                  </td>
                  <td>
                    <input type="text" id="typeB_2" />
                  </td>
                  <td>
                    <input type="text" className="carWght" id="carWght_2" />
                  </td>
                  <td>
                    <input type="text" id="hm_2" />
                  </td>
                  <td>
                    <input type="text" id="desc_2" />
                  </td>
                  <td>
                    <input type="text" id="nmfc_2" />
                  </td>
                  <td>
                    <input type="text" id="class_2" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="qtyA" id="qtyA_3" />
                  </td>
                  <td>
                    <input type="text" id="typeA_3" />
                  </td>
                  <td>
                    <input type="text" className="qtyB" id="qtyB_3" />
                  </td>
                  <td>
                    <input type="text" id="typeB_3" />
                  </td>
                  <td>
                    <input type="text" className="carWght" id="carWght_3" />
                  </td>
                  <td>
                    <input type="text" id="hm_3" />
                  </td>
                  <td>
                    <input type="text" id="desc_3" />
                  </td>
                  <td>
                    <input type="text" id="nmfc_3" />
                  </td>
                  <td>
                    <input type="text" id="class_3" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="qtyA" id="qtyA_4" />
                  </td>
                  <td>
                    <input type="text" id="typeA_4" />
                  </td>
                  <td>
                    <input type="text" className="qtyB" id="qtyB_4" />
                  </td>
                  <td>
                    <input type="text" id="typeB_4" />
                  </td>
                  <td>
                    <input type="text" className="carWght" id="carWght_4" />
                  </td>
                  <td>
                    <input type="text" id="hm_4" />
                  </td>
                  <td>
                    <input type="text" id="desc_4" />
                  </td>
                  <td>
                    <input type="text" id="nmfc_4" />
                  </td>
                  <td>
                    <input type="text" id="class_4" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="qtyA" id="qtyA_5" />
                  </td>
                  <td>
                    <input type="text" id="typeA_5" />
                  </td>
                  <td>
                    <input type="text" className="qtyB" id="qtyB_5" />
                  </td>
                  <td>
                    <input type="text" id="typeB_5" />
                  </td>
                  <td>
                    <input type="text" className="carWght" id="carWght_5" />
                  </td>
                  <td>
                    <input type="text" id="hm_5" />
                  </td>
                  <td>
                    <input type="text" id="desc_5" />
                  </td>
                  <td>
                    <input type="text" id="nmfc_5" />
                  </td>
                  <td>
                    <input type="text" id="class_5" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="qtyA" id="qtyA_6" />
                  </td>
                  <td>
                    <input type="text" id="typeA_6" />
                  </td>
                  <td>
                    <input type="text" className="qtyB" id="qtyB_6" />
                  </td>
                  <td>
                    <input type="text" id="typeB_6" />
                  </td>
                  <td>
                    <input type="text" className="carWght" id="carWght_6" />
                  </td>
                  <td>
                    <input type="text" id="hm_6" />
                  </td>
                  <td>
                    <input type="text" id="desc_6" />
                  </td>
                  <td>
                    <input type="text" id="nmfc_6" />
                  </td>
                  <td>
                    <input type="text" id="class_6" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="qtyA" id="qtyA_7" />
                  </td>
                  <td>
                    <input type="text" id="typeA_7" />
                  </td>
                  <td>
                    <input type="text" className="qtyB" id="qtyB_7" />
                  </td>
                  <td>
                    <input type="text" id="typeB_7" />
                  </td>
                  <td>
                    <input type="text" className="carWght" id="carWght_7" />
                  </td>
                  <td>
                    <input type="text" id="hm_7" />
                  </td>
                  <td>
                    <input type="text" id="desc_7" />
                  </td>
                  <td>
                    <input type="text" id="nmfc_7" />
                  </td>
                  <td>
                    <input type="text" id="class_7" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="qtyA" id="qtyA_8" />
                  </td>
                  <td>
                    <input type="text" id="typeA_8" />
                  </td>
                  <td>
                    <input type="text" className="qtyB" id="qtyB_8" />
                  </td>
                  <td>
                    <input type="text" id="typeB_8" />
                  </td>
                  <td>
                    <input type="text" className="carWght" id="carWght_8" />
                  </td>
                  <td>
                    <input type="text" id="hm_8" />
                  </td>
                  <td>
                    <input type="text" id="desc_8" />
                  </td>
                  <td>
                    <input type="text" id="nmfc_8" />
                  </td>
                  <td>
                    <input type="text" id="class_8" />
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="totals">
                  <td>
                    <div id="handling-qty" />
                  </td>
                  <td className="blocked"> </td>
                  <td>
                    <div id="package-qty" />
                  </td>
                  <td className="blocked"> </td>
                  <td>
                    <div id="carrier-weight" />
                  </td>
                  <td className="blocked"> </td>
                  <td>Totals</td>
                  <td className="blocked"> </td>
                  <td className="blocked"> </td>
                </tr>
              </tfoot>
            </table>
          </div>
          {/*end invTable*/}
          <div id="ftrBox">
            <div className="ftr left two-col" style={{ height: 65 }}>
              <p style={{ marginBottom: 6 }}>
                Where the rate is dependent on value, shippers are required to
                state specifically in writing the agreed or declared value of
                the property as follows:
              </p>
              <p style={{ marginBottom: 6 }}>
                "The agreed or declared value of the property is specifically
                stated by the shipper to be not exceeding
              </p>
              <input type="text" id="valueOne" />
              <span>FOB</span>
              <input type="text" id="valueTwo" />
              ."
            </div>
            <div
              className="ftr left two-col"
              style={{ height: 65, fontSize: "1em" }}
            >
              <p style={{ padding: "6px 0" }}>
                <strong>COD Amt. $</strong>
                <input type="text" id="COD" />
              </p>
              <p>
                <strong>Fee Terms:</strong>
                <span>
                  <input type="checkbox" id="collect" />
                  Collect
                </span>
                <input type="checkbox" id="prepaid" />
                <span>Prepaid</span>
              </p>
              <p>
                <input type="checkbox" id="checkOK" />
                <span>Customer Check Acceptable</span>
              </p>
            </div>
            <div className="clear">{/*empty*/}</div>
            <div className="ftr" style={{ height: 10 }}>
              <p>
                <strong>
                  NOTE: Liability Limitation for loss or damage in this shipment
                  may be applicable. See 49 U.S.C. - 14706(c)(1)(A) and (B).
                </strong>
              </p>
            </div>
            <div className="ftr left two-col" style={{ height: 45 }}>
              <p>
                RECEIVED, subject to individually determined rates or contracts
                that have been agreed upon in writing between the carrier and
                shipper, if applicable, otherwise to the rates, classifications
                and rules that have been established by the carrier and are
                available to the shipper, on request, and to all applicable
                state and federal regulations.
              </p>
            </div>
            <div className="ftr left two-col" style={{ height: 45 }}>
              <p>
                The carrier shall not make delivery of this shipment without
                payment of freight and all other lawful charges.
              </p>
              <div className="left" style={{ marginTop: 16 }}>
                Shipper Signature
              </div>
              <div
                className="left"
                style={{
                  width: 200,
                  height: 24,
                  borderBottom: "1px solid black",
                }}
              />
              <div className="clear">{/*empty*/}</div>
            </div>
            <div className="clear">{/*empty*/}</div>
            <div
              className="ftr left"
              style={{ height: 85, width: 237, fontSize: ".65em" }}
            >
              <p>
                This is to certify that the above named materials are properly
                classified, packaged, marked and labeled, and are in proper
                condition for transportation according to the applicable
                regulations of the DOT.
              </p>
              <div className="left" style={{ width: 150, marginRight: 10 }}>
                <div
                  style={{
                    width: 150,
                    height: 36,
                    borderBottom: "1px solid black",
                  }}
                />
                <p>Shipper Signature</p>
              </div>
              <div className="left">
                <div
                  style={{
                    width: 75,
                    height: 36,
                    borderBottom: "1px solid black",
                  }}
                />
                <p>Date</p>
              </div>
            </div>
            <div className="ftr left" style={{ height: 85, width: 257 }}>
              <div className="left" style={{ width: 85 }}>
                <p>
                  <strong>Trailer Loaded</strong>
                </p>
                <p>
                  <input type="checkbox" id="loadedByShip" />
                  By Shipper
                </p>
                <p>
                  <input type="checkbox" id="loadedByDrive" />
                  By Driver
                </p>
              </div>
              <div className="left">
                <p>
                  <strong>Freight Counted</strong>
                </p>
                <p>
                  <input type="checkbox" id="countedByShip" />
                  By Shipper
                </p>
                <p>
                  <input type="checkbox" id="countedByDriveOne" />
                  By Driver/pallets said to contain
                </p>
                <p>
                  <input type="checkbox" id="countedByDriveTwo" />
                  By Driver/Pieces
                </p>
              </div>
              <div className="clear">{/*empty*/}</div>
            </div>
            <div
              className="ftr left"
              style={{ height: 85, width: 276, fontSize: ".65em" }}
            >
              <p>
                Carrier acknowledges receipt of packages and required placards.
                Carrier certifies emergency response information was made
                available and/or carrier has the DOT emergency response
                guidebook or equivalent documentation in the vehicle. Property
                described above is received in good order, except as noted.
              </p>
              <div className="left" style={{ width: 150, marginRight: 10 }}>
                <div
                  style={{
                    width: 150,
                    height: 30,
                    borderBottom: "1px solid black",
                  }}
                />
                <p>Carrier Signature</p>
              </div>
              <div className="left">
                <div
                  style={{
                    width: 75,
                    height: 30,
                    borderBottom: "1px solid black",
                  }}
                />
                <p>Pickup Date</p>
              </div>
            </div>
            <div className="clear">{/*empty*/}</div>
          </div>
        </form>
      </div>
    </>
  );
}
