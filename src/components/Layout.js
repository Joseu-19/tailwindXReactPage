import React from 'react';
import Header from './Header';  
import Carousel from './Carousel';
import TextArea from './TextArea';
import LatestProjects from './LatestProjects';
import Accordion from './Accordion';
import '../extraStyles/Layout.css';

const Layout = () => {
  return (
    <div className="layout-container flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-100">
    
        <div className="md:col-span-2 space-y-4 relative">
          <div className="relative">
            <Carousel />
            <div className="absolute top-0 left-0 w-full">
              <Accordion />
            </div>
          </div>
          <TextArea />
        </div>

        <div className="space-y-4">
          <LatestProjects />
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 text-base shadow-inner">
        Thank you for visiting!
      </footer>
    </div>
  );
};

export default Layout;
