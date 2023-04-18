import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

function MachinePartBarcodeGenerator() {
  const [partName, setPartName] = useState('');
  const [partInfo, setPartInfo] = useState('');
  const [scannedInfo, setScannedInfo] = useState('');
  const barcodeRef = useRef(null);
  const [barcodeValue, setBarcodeValue] = useState('');

  function generateBarcode() {
    // generate a random 7-digit number and set it as the barcode value

  
    // encode the part name and information as metadata in a QR code
  const qrCodeValue = `Part Name: ${partName} | Part Information : ${partInfo}`;

  
    setBarcodeValue(qrCodeValue);
    setScannedInfo(qrCodeValue);
  }
  
  function getPartInfo() {
    // retrieve the part name and information using the barcode value
    return scannedInfo ? scannedInfo : 'Scan a barcode to view part information';
  }

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Machine Part Barcode Generator</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="partName">
            Part Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="partName"
            type="text"
            value={partName}
            onChange={(e) => setPartName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="partInfo">
            Part Information:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="partInfo"
            type="text"
            value={partInfo}
            onChange={(e) => setPartInfo(e.target.value)}
          />
        </div>
      </form>
      <div className="my-8">
      <QRCode value={barcodeValue} />
      </div>
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={generateBarcode}
        >
          Generate Barcode
        </button>
      </div>
      <div className="text-center">
        <p className="text-gray-700 font-bold mb-2">
          Scanned Part Information: {getPartInfo()}
        </p>
      </div>
    </div>
  );
}

export default MachinePartBarcodeGenerator;
