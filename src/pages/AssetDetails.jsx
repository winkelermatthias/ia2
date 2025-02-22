import React, { useState, useEffect } from 'react';
    import { fetchAssetById } from '../services/db';
    import { useParams } from 'react-router-dom';

    const AssetDetails = () => {
      const { id } = useParams();
      const [asset, setAsset] = useState(null);

      useEffect(() => {
        async function loadAsset() {
          const data = await fetchAssetById(id);
          setAsset(data);
        }
        loadAsset();
      }, [id]);

      if (!asset) {
        return <div className="p-6">Loading asset details...</div>;
      }

      return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">{asset.name}</h2>
          <img src={asset.image} alt={asset.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <p className="mb-4">{asset.description}</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Logged Metrics:</h3>
            <p><span className="font-medium">IP Address:</span> {asset.ip}</p>
            <p><span className="font-medium">Location:</span> {asset.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Extract Fields:</h3>
            <p>{asset.extractFields}</p>
          </div>
        </div>
      );
    };

    export default AssetDetails;
