// AnalyticsHub.js
import React from 'react';
import Dashboard from './Dashboard';
import Navbar from '../Homepage/Navbar';

// Sample data for various charts
const ageDistributionData = [
  { age: 60, count: 10, generation: "Boomers" },
  { age: 65, count: 15, generation: "Boomers" },
  { age: 30, count: 20, generation: "Millennials" },
  { age: 35, count: 25, generation: "Millennials" },
  { age: 20, count: 30, generation: "Gen Z" },
  { age: 25, count: 35, generation: "Gen Z" },
  { age: 10, count: 40, generation: "Gen Alpha" },
  { age: 15, count: 45, generation: "Gen Alpha" }
];

const locationHeatmapData = [
  { location: "New York", count: 50, longitude: -74.006, latitude: 40.7128, generation: "Boomers" },
  { location: "Los Angeles", count: 60, longitude: -118.2437, latitude: 34.0522, generation: "Millennials" },
  { location: "Chicago", count: 70, longitude: -87.6298, latitude: 41.8781, generation: "Gen Z" },
  { location: "Houston", count: 80, longitude: -95.3698, latitude: 29.7604, generation: "Gen Alpha" },
  { location: "Houston", count: 80, longitude: -25.3698, latitude: 29.7604, generation: "Boomers" },
];

const interestBreakdownData = [
  { interest: "travel", count: 10, generation: "Boomers" },
  { interest: "gardening", count: 15, generation: "Boomers" },
  { interest: "technology", count: 20, generation: "Millennials" },
  { interest: "gaming", count: 25, generation: "Millennials" },
  { interest: "fashion", count: 30, generation: "Gen Z" },
  { interest: "fitness", count: 35, generation: "Gen Z" },
  { interest: "toys", count: 40, generation: "Gen Alpha" },
  { interest: "cartoons", count: 45, generation: "Gen Alpha" }
];

const productViewsData = [
  { productId: 1, views: 100, generation: "Boomers" },
  { productId: 2, views: 150, generation: "Millennials" },
  { productId: 3, views: 200, generation: "Gen Z" },
  { productId: 4, views: 250, generation: "Gen Alpha" }
];

const ratingDistributionData = [
  { rating: 5, count: 20 },
  { rating: 4, count: 30 },
  { rating: 3, count: 25 },
  { rating: 2, count: 15 },
  { rating: 1, count: 10 }
];

const sentimentData = [
  { word: "Great", size: 40 },
  { word: "Loved", size: 30 },
  { word: "Okay", size: 20 },
  { word: "Not satisfied", size: 10 }
];

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
