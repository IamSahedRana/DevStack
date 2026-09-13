import bannerStack from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-5 leading-[1.1]">
          Build Your Ideal <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#ff5a5f] via-[#e23e84] to-[#8a38cc] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        
        <p className="text-gray-500 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        
        {/* Buttons Group */}
        <div className="flex flex-row gap-4 justify-center lg:justify-start w-full">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff5a5f] to-[#e23e84] text-white font-medium hover:opacity-90 transition-opacity shadow-md shadow-pink-500/20">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors shadow-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center w-full mt-6 lg:mt-0">
        <img 
          src={bannerStack} 
          alt="Tech Stack 3D" 
          className="w-full max-w-[320px] sm:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-xl" 
        />
      </div>
      
    </div>
  );
}