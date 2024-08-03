import React from "react";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { filterData } from "./data";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      <div className="container mx-auto px-0 sm:px-4 lg:px-16 xl:px-28 py-8 flex-grow">
        <Filter filterData={filterData} />
      </div>
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4  sm:px-4 lg:px-16 xl:px-28">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Know Top Trending AI</h3>
              <p className="text-sm text-gray-400">Empowering decisions with AI insights</p>
            </div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <p className="text-sm mb-2">Designed & Developed by</p>
              <a 
                href="https://www.linkedin.com/in/shivam-pathak-2244a0230/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 font-medium"
              >
                Shivam Kumar Pathak
              </a>
             
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Know Top Trending AI. All rights reserved.</p>
            <p className="mt-2">
              For any queries: <a href="mailto:sp5486051@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">sp5486051@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;