import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import { StackProvider } from './context/StackContext';
import TechGrid from './components/TechCard';
import { StackSidebar } from './components/StackSidebar';

export default function App() {
  return (
    <StackProvider>
      <div className="min-h-screen bg-white text-slate-900">
        
        <Navbar />

        <Hero />

        <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          
          {/* Technologies Heading */}
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
              Explore the{' '}
              <span className="bg-linear-to-r from-[#ff5a5f] to-[#8a38cc] bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mt-3 text-base text-gray-500 sm:text-lg">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Technology Grid + Sidebar */}
          <div className="flex flex-col items-start gap-8 xl:flex-row">
            <TechGrid />
            <StackSidebar />
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </div>
    </StackProvider>
  );
}