import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Use React.lazy for dynamic imports
const AgeDistribution = React.lazy(() => import('./AgeDistribution'));
const LocationHeatmap = React.lazy(() => import('./LocationHeatmap'));
const InterestBreakdown = React.lazy(() => import('./InterestBreakdown'));
const ProductViewsBarChart = React.lazy(() => import('./ProductViewsBarChart'));
const RatingDistribution = React.lazy(() => import('./RatingDistribution'));
const SentimentWordCloud = React.lazy(() => import('./SentimentWordCloud'));

const Dashboard = ({
  ageDistributionData,
  locationHeatmapData,
  interestBreakdownData,
  productViewsData,
  ratingDistributionData,
  sentimentData
}) => {
  const [selectedSection, setSelectedSection] = useState('Age Distribution');

  const sections = [
    { title: 'Age Distribution', component: AgeDistribution, data: ageDistributionData },
    { title: 'Location Heatmap', component: LocationHeatmap, data: locationHeatmapData },
    { title: 'Interest Breakdown', component: InterestBreakdown, data: interestBreakdownData },
    { title: 'Product Views', component: ProductViewsBarChart, data: productViewsData },
    { title: 'Rating Distribution', component: RatingDistribution, data: ratingDistributionData },
    { title: 'Sentiment Analysis', component: SentimentWordCloud, data: sentimentData },
  ];

  const descriptions = {
    'Age Distribution': 'This chart displays the age distribution across different generations, providing insights into our user base demographics.',
    'Location Heatmap': 'The location heatmap visualizes the geographical distribution of our users, crucial for understanding regional trends.',
    'Interest Breakdown': 'This visualization breaks down the various interests of our user base, helping us create more engaging content.',
    'Product Views': 'The product views bar chart showcases the popularity of different products or features on our platform.',
    'Rating Distribution': 'This chart illustrates the distribution of user ratings across our products or services.',
    'Sentiment Analysis': 'The sentiment word cloud visualizes the most common words used in user feedback, color-coded by sentiment.',
  };

  const scrollLeft = () => {
    const index = sections.findIndex(section => section.title === selectedSection);
    if (index > 0) {
      setSelectedSection(sections[index - 1].title);
    }
  };

  const scrollRight = () => {
    const index = sections.findIndex(section => section.title === selectedSection);
    if (index < sections.length - 1) {
      setSelectedSection(sections[index + 1].title);
    }
  };

  const SelectedComponent = sections.find(section => section.title === selectedSection).component;

  return (
    <div className="min-h-screen bg-neutral-200 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <h1 className="text-4xl font-bold mt-3 mb-12 text-center text-gray-800">
          GenConnect Data Visualization Dashboard
        </h1>

        {/* Section Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-lg">
            {sections.map((section, index) => (
              <button
                key={section.title}
                onClick={() => setSelectedSection(section.title)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  selectedSection === section.title
                    ? 'bg-amber-500 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:bg-gray-100'
                } ${index !== 0 ? 'ml-2' : ''}`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Data Visualization Area */}
        <motion.div
          key={selectedSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-l-4 border-amber-500 pl-3">
            {selectedSection}
          </h2>

          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0 pr-0 lg:pr-8">
              <Suspense fallback={<div>Loading...</div>}>
                {selectedSection === 'Rating Distribution' ? (
                  <RatingDistribution data={ratingDistributionData} />
                ) : (
                  <SelectedComponent data={sections.find(section => section.title === selectedSection).data} />
                )}
              </Suspense>
            </div>
            <div className="w-full lg:w-1/3">
              <p className="text-gray-700">{descriptions[selectedSection]}</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={scrollLeft}
            className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-400 transition duration-300 shadow-lg"
            disabled={selectedSection === sections[0].title}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-400 transition duration-300 shadow-lg"
            disabled={selectedSection === sections[sections.length - 1].title}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
