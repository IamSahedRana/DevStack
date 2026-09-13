import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Stack Context & Components
import { StackProvider } from './context/StackContext'; 
import TechGrid from './components/TechCard'; 
import { StackSidebar } from './components/StackSidebar';

export default function App() {
  return (
    <StackProvider>
      <div className="min-h-screen bg-white">
        
        {/* 1. Navigation Bar */}
        <Navbar />

        {/* 2. Hero Header Section */}
        <Hero />

        {/* 3. Main Content: Grid & Sidebar */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Explore the <span className="text-pink-500">Technologies</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mt-3">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-8 items-start">
            <TechGrid />
            <StackSidebar />
          </div>
        </main>
        
      </div>

      {/* Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </StackProvider>
  );
}