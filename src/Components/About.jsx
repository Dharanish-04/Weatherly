import React from 'react';

// About component for the Weather App
const About = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 sm:p-8 bg-gray-50">
      {/* Main Content Card */}
      <div className="w-full max-w-8xl bg-white shadow-2xl rounded-xl p-6 sm:p-10 border border-blue-100 transition-all duration-300 hover:shadow-blue-300/50 mt-12">
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 text-center">
          About <span className="text-blue-600">Weatherly</span>
        </h1>
        <p className="text-lg text-gray-500 mb-8 text-center">
          Your reliable source for up-to-the-minute weather information.
        </p>

        {/* Content Sections */}
        <div className="space-y-10">

          {/* Our Mission */}
          <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            {/* FIX: Added items-center to align emoji vertically with text */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <span className="text-blue-500 mr-2">&#9728;</span> Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We believe that access to accurate weather data should be simple and fast. Our mission is to provide you with reliable, hyper-local forecasts and real-time conditions so you can plan your day without surprises. Whether you're checking for rain, snow, or just the perfect temperature, **WeatherWise** is here to help you stay informed and safe.
            </p>
          </section>

          {/* Data Accuracy */}
          <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            {/* FIX: Added items-center to align emoji vertically with text */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <span className="text-green-500 mr-2">&#128200;</span> Data & Accuracy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              WeatherWise sources its data from leading global meteorological services. We use the **OpenWeatherMap API** to deliver current conditions, along with hourly and 5-day forecasts. While we strive for perfect accuracy, please remember that weather forecasting is an evolving science, and local conditions can sometimes vary.
            </p>
          </section>
          
          {/* Technology & Development */}
          <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            {/* FIX: Added items-center to align emoji vertically with text */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <span className="text-purple-500 mr-2">&#128187;</span> Technology
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This application is built with modern web technologies for a smooth, fast, and responsive user experience. It uses **React** for the front-end interface, styled efficiently with **Tailwind CSS**. The application is designed to work seamlessly across desktop, tablet, and mobile devices.
            </p>
          </section>

          {/* Contact and Feedback */}
          <div className="text-center pt-4">
            <p className="text-sm text-gray-500">
              Have feedback or suggestions? We'd love to hear them!
            </p>
            <button className="mt-3 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Contact Us
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
