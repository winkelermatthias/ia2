import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './pages/Home';
    import CreateAsset from './pages/CreateAsset';
    import AssetDetails from './pages/AssetDetails';

    function App() {
      return (
        <Router>
          <div className="min-h-screen bg-industrial-bg flex flex-col">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateAsset />} />
                <Route path="/asset/:id" element={<AssetDetails />} />
              </Routes>
            </main>
            <footer className="bg-industrial-surface text-center text-sm text-gray-500 py-4">
              &copy; {new Date().getFullYear()} Industrial Asset Mapping. All rights reserved.
            </footer>
          </div>
        </Router>
      );
    }

    export default App;
