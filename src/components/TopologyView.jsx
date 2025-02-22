import React from 'react';
    import AssetCard from './AssetCard';

    const TopologyView = ({ assets, onSelectAsset }) => {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {assets.map(asset => (
            <AssetCard key={asset.id} asset={asset} onSelect={onSelectAsset} />
          ))}
        </div>
      );
    };

    export default TopologyView;
