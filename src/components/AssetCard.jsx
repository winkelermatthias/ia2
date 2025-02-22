import React from 'react';

    const AssetCard = ({ asset, onSelect }) => {
      return (
        <div 
          className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition duration-300 border border-industrial-border"
          onClick={() => onSelect(asset)}
        >
          <img 
            src={asset.image} 
            alt={asset.name} 
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h3 className="text-xl font-semibold text-industrial-text">{asset.name}</h3>
          <p className="text-gray-600">{asset.description}</p>
          <div className="mt-2 text-sm text-gray-500">
            <p>Location: {asset.location || 'N/A'}</p>
            <p>IP: {asset.ip || 'N/A'}</p>
          </div>
        </div>
      );
    };

    export default AssetCard;
