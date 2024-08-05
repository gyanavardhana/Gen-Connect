import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/bam/generations.png";
import demoVideo from "../../assets/bam/an3.gif";

const GIFSection = () => (
  <section className="relative w-full h-screen overflow-hidden -mt-20">
    <img src={demoVideo} alt="GenConnect GIF" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-200"></div>
  </section>
);

const LandingPage = () => {
  return (
    <div className="bg-neutral-200 text-gray-900">
      {/* GIF Section */}
      <GIFSection />

      <section className="relative py-24 px-4 lg:px-16 bg-neutral-200">
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-4xl font-bold mb-6 leading-tight">Discover the Power of <span className="text-yellow-500">GenConnect</span></h2>
            <p className="text-xl leading-relaxed">
              Bridge the generational gap with our cutting-edge platform. Gain deep insights into behaviors, preferences, and traits across age groups to create meaningful connections and drive your success.
            </p>
            <Link to="/signup" className="inline-block mt-8">
              <button className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2">
            <img
              src={heroImage}
              alt="GenConnect Hero"
              className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-neutral-300 py-24 px-4 lg:px-16 rounded-t-3xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-yellow-500">GenConnect</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              title: "Insightful Analytics",
              description: "Uncover generational trends with detailed analytics.",
              icon: "chart-line",
            },
            {
              title: "Tailored Strategies",
              description: "Craft personalized marketing that resonates across generations.",
              icon: "bullseye",
            },
            {
              title: "Enhanced Engagement",
              description: "Boost customer engagement through deep understanding.",
              icon: "users",
            },
            {
              title: "Data-Driven Decisions",
              description: "Make informed choices backed by solid data insights.",
              icon: "brain",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-neutral-200 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-yellow-500 text-5xl mb-6">
                <i className={`fas fa-${benefit.icon}`}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-center text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-neutral-200 text-gray-900 py-24 px-4 lg:px-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-2xl mb-12 max-w-3xl mx-auto">
          Harness the power of generational insights and take your strategy to the next level.
        </p>
        <div className="flex justify-center space-x-6">
          <Link to="/signup">
            <button className="bg-yellow-500 text-gray-900 py-3 px-10 rounded-full text-xl font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
              Sign Up Now
            </button>
          </Link>
          <Link to="/learn-more">
            <button className="bg-neutral-300 text-gray-900 py-3 px-10 rounded-full text-xl font-semibold hover:bg-neutral-400 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-neutral-300 text-gray-900 py-12 px-4 lg:px-16 rounded-t-3xl">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-8 lg:mb-0">
            <ul className="flex flex-wrap justify-center lg:justify-start space-x-6">
              <li>
                <Link to="/about" className="hover:text-yellow-500 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-yellow-500 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-yellow-500 transition duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex space-x-6 mb-8 lg:mb-0">
            <a href="https://facebook.com" className="text-2xl hover:text-yellow-500 transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-2xl hover:text-yellow-500 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-2xl hover:text-yellow-500 transition duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div>
            <p className="text-sm">© 2024 GenConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;