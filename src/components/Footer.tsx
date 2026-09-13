import logoText from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="bg-base-100 pt-20 pb-10 border-t border-gray-100 mt-20">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-8">
        <div className="md:col-span-1 space-y-4">
          <img src={logoText} alt="DevStack Logo" className="h-8 object-contain" />
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-sm font-medium text-gray-500 pt-2">
            <a className="hover:text-pink-600 cursor-pointer">GitHub</a>
            <a className="hover:text-pink-600 cursor-pointer">Twitter</a>
            <a className="hover:text-pink-600 cursor-pointer">LinkedIn</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Product</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a className="hover:text-pink-600 cursor-pointer">Home</a></li>
            <li><a className="hover:text-pink-600 cursor-pointer">Technologies</a></li>
            <li><a className="hover:text-pink-600 cursor-pointer">Projects</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Company</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a className="hover:text-pink-600 cursor-pointer">About</a></li>
            <li><a className="hover:text-pink-600 cursor-pointer">Contact</a></li>
            <li><a className="hover:text-pink-600 cursor-pointer">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a className="hover:text-pink-600 cursor-pointer">Privacy Policy</a></li>
            <li><a className="hover:text-pink-600 cursor-pointer">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 DevStack. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-gray-600 cursor-pointer">Privacy</a>
          <a className="hover:text-gray-600 cursor-pointer">Terms</a>
        </div>
      </div>
    </footer>
  );
}