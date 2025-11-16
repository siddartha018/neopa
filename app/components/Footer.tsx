import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Brand Section */}
          <div>
            <h2 className="typography-heading mb-4">
              Neopa<sup className="text-2xl">®</sup>
            </h2>
            <p className="typography-body">
              Contemporary architecture, prime locations, and upscale home design to inspire your next journey.
            </p>
          </div>

          {/* Right Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Pages Column */}
            <div>
              <h3 className="typography-title mb-4">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="typography-small hover:text-gray-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="typography-small hover:text-gray-900 transition-colors">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="typography-title mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="typography-small hover:text-gray-900 transition-colors">
                    Portfolios
                  </a>
                </li>
                <li>
                  <a href="#" className="typography-small hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Utility Pages Column */}
            <div>
              <h3 className="typography-title mb-4">Utility Pages</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="typography-small hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="typography-small hover:text-gray-900 transition-colors">
                    404
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
