import React, { useEffect } from 'react';
    import { getCurrentIP } from '../services/ipLogger';
    import { getGeolocation } from '../services/geolocation';

    const MetricsLogger = ({ asset, setAsset }) => {
      useEffect(() => {
        async function fetchMetrics() {
          try {
            const ip = await getCurrentIP();
            const location = await getGeolocation();
            setAsset(prev => ({
              ...prev,
              ip: ip || 'Unknown',
              location: location ? `${location.latitude}, ${location.longitude}` : 'Unknown'
            }));
          } catch (error) {
            console.error('Error fetching metrics:', error);
          }
        }
        fetchMetrics();
      }, [setAsset]);

      return (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Logged Metrics</h3>
          <div className="bg-white p-3 rounded-md shadow-sm border border-industrial-border">
            <p><span className="font-medium">IP Address:</span> {asset.ip || 'Loading...'}</p>
            <p><span className="font-medium">Location:</span> {asset.location || 'Loading...'}</p>
          </div>
        </div>
      );
    };

    export default MetricsLogger;
