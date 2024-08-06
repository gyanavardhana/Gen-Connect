import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaInfoCircle } from 'react-icons/fa';

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
    'Age Distribution': {
      text: 'This chart provides a comprehensive breakdown of our user base across different generations. Understanding the age distribution is crucial for tailoring our products and marketing strategies to specific demographic groups. It helps us identify which age groups are most engaged with our platform and where we might need to focus our efforts to attract underrepresented age segments.',
      insights: [
        'Identify dominant age groups in our user base',
        'Tailor marketing strategies to specific generations',
        'Develop age-appropriate features and content'
      ]
    },
    'Location Heatmap': {
      text: 'The location heatmap offers a visual representation of our global user distribution. This powerful tool allows us to identify regional trends, popular markets, and areas with potential for growth. By understanding the geographical spread of our users, we can make informed decisions about localization efforts, targeted marketing campaigns, and regional product adaptations.',
      insights: [
        'Identify key markets and potential growth areas',
        'Guide localization and language support decisions',
        'Inform regional marketing and expansion strategies'
      ]
    },
    'Interest Breakdown': {
      text: 'This visualization categorizes and quantifies the diverse interests of our user base. By understanding what captivates our users, we can create more engaging content, develop relevant features, and improve our overall user experience. This data is invaluable for content strategy, product development, and targeted advertising efforts.',
      insights: [
        'Tailor content and features to user interests',
        'Guide product development and feature prioritization',
        'Enhance targeted advertising and personalization'
      ]
    },
    'Product Views': {
      text: 'The product views bar chart offers insights into the popularity and engagement levels of different products or features on our platform. This visualization helps us identify our most successful offerings, as well as areas that might need improvement or more promotion. It\'s a key metric for assessing user engagement and guiding our product strategy.',
      insights: [
        'Identify most popular and underperforming products',
        'Guide resource allocation for product development',
        'Inform marketing and promotional strategies'
      ]
    },
    'Rating Distribution': {
      text: 'This chart illustrates how users rate our products or services across different rating levels. It provides a clear picture of overall user satisfaction and helps identify areas of excellence or potential improvement. By analyzing this distribution, we can set benchmarks, track changes over time, and focus our efforts on enhancing user experience where it matters most.',
      insights: [
        'Assess overall user satisfaction levels',
        'Identify products or features needing improvement',
        'Track the impact of changes and updates over time'
      ]
    },
    'Sentiment Analysis': {
      text: 'The sentiment word cloud visualizes the most frequent words in user feedback, color-coded to represent positive, neutral, or negative sentiment. This powerful tool allows us to quickly gauge the overall mood of our user base and identify specific areas of praise or concern. It\'s instrumental in understanding user perceptions and guiding our efforts to improve user satisfaction.',
      insights: [
        'Quickly identify common themes in user feedback',
        'Gauge overall sentiment towards products or features',
        'Guide customer service and product improvement efforts'
      ]
    },
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
            <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <FaInfoCircle className="mr-2 text-amber-500" />
          Insights
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          {descriptions[selectedSection].text}
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-800">Key Takeaways:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {descriptions[selectedSection].insights.map((insight, index) => (
            <li key={index} className="leading-relaxed">{insight}</li>
          ))}
        </ul>
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
