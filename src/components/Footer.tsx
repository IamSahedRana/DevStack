import logoText from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        

        <div className="py-10 sm:py-14">
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 lg:gap-16">


            <div className="text-center md:text-left">
              <a href="/" className="inline-block">
                <img
                  src={logoText}
                  alt="DevStack"
                  className="h-7 w-auto object-contain"
                />
              </a>

              <p className="mx-auto mt-4 max-w-xs text-sm leading-5 text-slate-500 md:mx-0">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>


              <div className="mt-5 flex justify-center gap-5 text-sm font-medium md:justify-start">
                <a
                  href="#"
                  className="text-slate-600 transition-colors hover:text-pink-600"
                >
                  GitHub
                </a>

                <span className="text-slate-400">•</span>

                <a
                  href="#"
                  className="text-slate-600 transition-colors hover:text-pink-600"
                >
                  Twitter
                </a>

                <span className="text-slate-400">•</span>

                <a
                  href="#"
                  className="text-slate-600 transition-colors hover:text-pink-600"
                >
                  LinkedIn
                </a>
              </div>
            </div>


            <div className="hidden text-left md:block">
              <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                Product
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="/" className="hover:text-pink-600">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#technologies" className="hover:text-pink-600">
                    Technologies
                  </a>
                </li>

                <li>
                  <a href="#projects" className="hover:text-pink-600">
                    Projects
                  </a>
                </li>
              </ul>
            </div>


            <div className="hidden text-left md:block">
              <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                Company
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#about" className="hover:text-pink-600">
                    About
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-pink-600">
                    Contact
                  </a>
                </li>

                <li>
                  <a href="#careers" className="hover:text-pink-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

    
            <div className="hidden text-left md:block">
              <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                Legal
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#privacy" className="hover:text-pink-600">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#terms" className="hover:text-pink-600">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>


        <div
          className="
            flex w-full items-center justify-between
            border border-slate-100
            px-2 py-3
            text-[11px] leading-none text-slate-400
            sm:px-3 sm:text-xs
          "
        >
          <p className="whitespace-nowrap">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="ml-3 flex shrink-0 items-center gap-4 sm:gap-6">
            <a
              href="#privacy"
              className="whitespace-nowrap transition-colors hover:text-slate-600"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="whitespace-nowrap transition-colors hover:text-slate-600"
            >
              Terms
            </a>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </footer>
  );
}