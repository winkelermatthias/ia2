import React, { useState } from 'react';
    import { useDropzone } from 'react-dropzone';
    import MetricsLogger from './MetricsLogger';

    const AssetForm = ({ onSave }) => {
      const [asset, setAsset] = useState({
        name: '',
        description: '',
        image: '',
        additionalImages: [],
        ip: '',
        location: '',
        extractFields: ''
      });

      const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        multiple: false,
        onDrop: acceptedFiles => {
          const file = acceptedFiles[0];
          const reader = new FileReader();
          reader.onload = () => {
            setAsset(prev => ({ ...prev, image: reader.result }));
          };
          reader.readAsDataURL(file);
        }
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setAsset(prev => ({ ...prev, [name]: value }));
      };

      const handleSave = () => {
        onSave(asset);
      };

      return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-50 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">Create New Asset</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Asset Name</label>
            <input
              type="text"
              name="name"
              value={asset.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter asset name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={asset.description}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Describe the asset"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Asset Image</label>
            <div 
              {...getRootProps()}
              className="border-dashed border-2 border-gray-300 p-4 mt-2 text-center rounded-md cursor-pointer hover:border-primary transition-colors"
            >
              <input {...getInputProps()} />
              {asset.image ? (
                <img src={asset.image} alt="Asset" className="mx-auto h-40 object-cover rounded-md" />
              ) : (
                <p>Drag & drop an image here, or click to select a file</p>
              )}
            </div>
          </div>
          <MetricsLogger asset={asset} setAsset={setAsset} />
          <div className="mb-4">
            <label className="block text-gray-700">Extract Fields</label>
            <input
              type="text"
              name="extractFields"
              value={asset.extractFields}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g., Serial Number, Model, Power Rating"
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary-dark transition-colors"
          >
            Save Asset
          </button>
        </div>
      );
    };

    export default AssetForm;
