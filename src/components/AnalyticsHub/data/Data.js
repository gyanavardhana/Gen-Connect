const ageDistributionData = [
    { age: 60, count: 10, generation: "Boomers" },
    { age: 65, count: 15, generation: "Boomers" },
    { age: 70, count: 12, generation: "Boomers" },
    { age: 75, count: 8, generation: "Boomers" },
    { age: 80, count: 5, generation: "Boomers" },
    { age: 30, count: 20, generation: "Millennials" },
    { age: 35, count: 25, generation: "Millennials" },
    { age: 40, count: 18, generation: "Millennials" },
    { age: 45, count: 22, generation: "Millennials" },
    { age: 50, count: 17, generation: "Millennials" },
    { age: 20, count: 30, generation: "Gen Z" },
    { age: 25, count: 35, generation: "Gen Z" },
    { age: 18, count: 40, generation: "Gen Z" },
    { age: 22, count: 32, generation: "Gen Z" },
    { age: 28, count: 28, generation: "Gen Z" },
    { age: 10, count: 40, generation: "Gen Alpha" },
    { age: 15, count: 45, generation: "Gen Alpha" },
    { age: 8, count: 50, generation: "Gen Alpha" },
    { age: 12, count: 42, generation: "Gen Alpha" },
    { age: 14, count: 38, generation: "Gen Alpha" }
  ];
  
  const locationHeatmapData = [
    // Existing data
    { location: "New York", count: 50, longitude: -74.006, latitude: 40.7128, generation: "Boomers" },
    { location: "Los Angeles", count: 60, longitude: -118.2437, latitude: 34.0522, generation: "Millennials" },
    { location: "Chicago", count: 70, longitude: -87.6298, latitude: 41.8781, generation: "Gen Z" },
    { location: "Houston", count: 80, longitude: -95.3698, latitude: 29.7604, generation: "Gen Alpha" },
    { location: "Miami", count: 55, longitude: -80.1918, latitude: 25.7617, generation: "Boomers" },
    { location: "San Francisco", count: 65, longitude: -122.4194, latitude: 37.7749, generation: "Millennials" },
    { location: "Seattle", count: 75, longitude: -122.3321, latitude: 47.6062, generation: "Gen Z" },
    { location: "Boston", count: 85, longitude: -71.0589, latitude: 42.3601, generation: "Gen Alpha" },
    { location: "Dallas", count: 60, longitude: -96.7969, latitude: 32.7767, generation: "Boomers" },
    { location: "Atlanta", count: 70, longitude: -84.388, latitude: 33.749, generation: "Millennials" },
    
    // Asia
    { location: "Tokyo", count: 90, longitude: 139.6503, latitude: 35.6762, generation: "Gen Z" },
    { location: "Shanghai", count: 85, longitude: 121.4737, latitude: 31.2304, generation: "Millennials" },
    { location: "Seoul", count: 75, longitude: 126.9780, latitude: 37.5665, generation: "Gen Alpha" },
    { location: "Bangkok", count: 65, longitude: 100.5018, latitude: 13.7563, generation: "Boomers" },
    { location: "Singapore", count: 70, longitude: 103.8198, latitude: 1.3521, generation: "Gen Z" },
  
    // Africa
    { location: "Cairo", count: 60, longitude: 31.2357, latitude: 30.0444, generation: "Millennials" },
    { location: "Lagos", count: 55, longitude: 3.3792, latitude: 6.5244, generation: "Gen Alpha" },
    { location: "Nairobi", count: 50, longitude: 36.8219, latitude: -1.2921, generation: "Boomers" },
    { location: "Johannesburg", count: 65, longitude: 28.0473, latitude: -26.2041, generation: "Gen Z" },
    { location: "Casablanca", count: 45, longitude: -7.5898, latitude: 33.5731, generation: "Millennials" },
  
    // Australia
    { location: "Sydney", count: 80, longitude: 151.2093, latitude: -33.8688, generation: "Gen Alpha" },
    { location: "Melbourne", count: 75, longitude: 144.9631, latitude: -37.8136, generation: "Boomers" },
    { location: "Brisbane", count: 70, longitude: 153.0251, latitude: -27.4698, generation: "Millennials" },
    { location: "Perth", count: 65, longitude: 115.8613, latitude: -31.9523, generation: "Gen Z" },
    { location: "Adelaide", count: 60, longitude: 138.6007, latitude: -34.9285, generation: "Gen Alpha" },
  
    // India
    { location: "Mumbai", count: 85, longitude: 72.8777, latitude: 19.0760, generation: "Millennials" },
    { location: "Delhi", count: 80, longitude: 77.1025, latitude: 28.7041, generation: "Gen Z" },
    { location: "Bangalore", count: 75, longitude: 77.5946, latitude: 12.9716, generation: "Gen Alpha" },
    { location: "Kolkata", count: 70, longitude: 88.3639, latitude: 22.5726, generation: "Boomers" },
    { location: "Chennai", count: 65, longitude: 80.2707, latitude: 13.0827, generation: "Millennials" }
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
    { productId: 4, views: 250, generation: "Gen Alpha" },
    { productId: 5, views: 120, generation: "Boomers" },
    { productId: 6, views: 170, generation: "Millennials" },
    { productId: 7, views: 220, generation: "Gen Z" },
    { productId: 8, views: 270, generation: "Gen Alpha" },
    { productId: 9, views: 130, generation: "Boomers" },
    { productId: 10, views: 180, generation: "Millennials" }
  ];
  
  const ratingDistributionData = [
    { rating: 5, count: 20 },
    { rating: 4, count: 30 },
    { rating: 3, count: 25 },
    { rating: 2, count: 15 },
    { rating: 1, count: 10 }
  ];
  
  const sentimentData = [
    { word: "Great", size: 40, sentiment: 4.8 },
    { word: "Loved", size: 30, sentiment: 4.7 },
    { word: "Okay", size: 20, sentiment: 3.5 },
    { word: "Not satisfied", size: 10, sentiment: 2.0 },
    { word: "Amazing", size: 35, sentiment: 4.9 },
    { word: "Good", size: 25, sentiment: 4.0 },
    { word: "Average", size: 15, sentiment: 3.0 },
    { word: "Bad", size: 5, sentiment: 1.5 },
    { word: "Excellent", size: 45, sentiment: 5.0 },
    { word: "Poor", size: 8, sentiment: 1.8 }
  ];
  

export { ageDistributionData, locationHeatmapData, interestBreakdownData, productViewsData, ratingDistributionData, sentimentData };