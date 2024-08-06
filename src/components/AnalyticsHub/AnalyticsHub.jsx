// AnalyticsHub.js
import React from 'react';
import Dashboard from './Dashboard';
import Navbar from '../Homepage/Navbar';
import { ageDistributionData, locationHeatmapData, interestBreakdownData, productViewsData, ratingDistributionData, sentimentData } from './data/Data';

const AnalyticsHub = () => {
  return (
    <div >
      <Navbar />
      <Dashboard
        ageDistributionData={ageDistributionData}
        locationHeatmapData={locationHeatmapData}
        interestBreakdownData={interestBreakdownData}
        productViewsData={productViewsData}
        ratingDistributionData={ratingDistributionData}
        sentimentData={sentimentData}
      />
    </div>
  );
};

export default AnalyticsHub;
