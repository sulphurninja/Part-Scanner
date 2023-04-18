import React, { useState, useRef } from 'react';
import Barcode from 'react-barcode';

function MachinePartBarcodeGenerator() {
  const [partName, setPartName] = useState('');
  const [partInfo, setPartInfo] = useState('');
  const barcodeRef = useRef(null);

  function generateBarcode() {
    barcodeRef.current.value = `${partName} - ${partInfo}`;
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
        <Barcode value={`${partName.slice(0,3)}${Math.floor(Math.random() * 9098999)}`} ref={barcodeRef} />
      </div>
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={generateBarcode}
        >
          Generate Barcode
        </button>
      </div>
    </div>
  );
}

export default MachinePartBarcodeGenerator;
