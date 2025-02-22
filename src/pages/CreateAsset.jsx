import React from 'react';
    import AssetForm from '../components/AssetForm';
    import { saveAsset } from '../services/db';
    import { useNavigate } from 'react-router-dom';

    const CreateAsset = () => {
      const navigate = useNavigate();

      const handleSaveAsset = async (assetData) => {
        await saveAsset(assetData);
        navigate('/');
      };

      return (
        <div className="p-6">
          <AssetForm onSave={handleSaveAsset} />
        </div>
      );
    };

    export default CreateAsset;
