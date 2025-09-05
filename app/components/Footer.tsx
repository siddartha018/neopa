import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-6">CATCHUP®</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Bold ideas, beautifully executed. We create brands, websites, and visual content that move businesses forward.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-4xl font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
              Book a 15-min call
              <span className="ml-1 flex items-center justify-center w-7 h-7 rounded-full bg-black">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                  style={{ transform: "rotate(-45deg)" }} // 2 o'clock direction
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Sitemap Column */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">SITEMAP</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Work</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">SERVICES</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Branding</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Photography</a></li>
              </ul>
            </div>

            {/* Recent Works Column */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">RECENT WORKS</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Liva</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Krona</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Velto</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sonar</a></li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">CONNECT</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dribbble</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Email Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © Catchup 2025. All rights reserved.
          </div>

          {/* Legal Links and Framer Badge */}
          <div className="flex items-center gap-6">
            {/* Legal Links */}
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
            </div>

            {/* Made in Framer Badge */}
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
