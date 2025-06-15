import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

function ImageCompressor() {
  const [compressedFile, setCompressedFile] = useState(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setOriginalSize((file.size / 1024 / 1024).toFixed(2)); // in MB

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressed = await imageCompression(file, options);
      setCompressedSize((compressed.size / 1024 / 1024).toFixed(2));
      setCompressedFile(compressed);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = () => {
    if (!compressedFile) return;
    const link = document.createElement('a');
    link.href = URL.createObjectURL(compressedFile);
    link.download = 'compressed.jpg';
    link.click();
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">JPEG Image Compressor</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
      
      {compressedFile && (
        <div className="mt-4 text-sm text-gray-700">
          <p>Original Size: {originalSize} MB</p>
          <p>Compressed Size: {compressedSize} MB</p>
          <button onClick={handleDownload} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Download Compressed Image
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageCompressor;