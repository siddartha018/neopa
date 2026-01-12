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
              Where Strategy Meets Culture
            </h2>
            <p className="typography-body mb-4">
              A people first media agency delivering strategy, storytelling, and scalable growth.
            </p>
            <p className="typography-small text-gray-500">
              We exist to help brands stay human, relevant, and profitable in a fast moving digital world.
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
                  <a href="/contact" className="typography-small hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
               
              </ul>
              {/* Instagram Link */}
              <div className="mt-6">
                <a
                  href="https://www.instagram.com/soical_monks?igsh=aHU4cTV5eXgwaHE="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  <span className="typography-small">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
