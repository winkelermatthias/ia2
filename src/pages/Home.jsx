import React, { useState, useEffect } from 'react';
    import TopologyView from '../components/TopologyView';
    import { fetchAssets } from '../services/db';
    import { useNavigate } from 'react-router-dom';

    const Home = () => {
      const [assets, setAssets] = useState([]);
      const navigate = useNavigate();

      useEffect(() => {
        async function loadAssets() {
          const data = await fetchAssets();
          setAssets(data);
        }
        loadAssets();
      }, []);

      const handleSelectAsset = (asset) => {
        navigate(`/asset/${asset.id}`);
      };

      return (
        <div className="min-h-screen bg-industrial-bg p-4 md:p-8">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-industrial-text">
              Industrial Asset Dashboard
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Visualize and manage your industrial assets with ease.
            </p>
          </header>
          <div className="flex justify-center mb-6">
            <button 
              onClick={() => navigate('/create')}
              className="flex items-center bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span>Create New Asset</span>
            </button>
          </div>
          <TopologyView assets={assets} onSelectAsset={handleSelectAsset} />
        </div>
      );
    };

    export default Home;
