import React from 'react';
import Image from 'next/image';

const NewsInsights = () => {
  const articles = [
    {
      id: 1,
      category: 'Photography',
      date: 'May 30, 2025',
      title: 'How Great Photography Elevates Brand Perception',
      description: 'Tips and examples on how intentional visuals influence customer trust and conversion.',
      image: '/images/ni1.avif',
      imageAlt: 'Person holding camera and SD card'
    },
    {
      id: 2,
      category: 'Development',
      date: 'May 19, 2025',
      title: 'Behind the Build: Designing for a SaaS Product Launch',
      description: 'How we approached UX, speed, and scalability in Sonar\'s new digital experience.',
      image: '/images/ni2.avif',
      imageAlt: 'Architect working at desk with blueprints'
    },
    {
      id: 3,
      category: 'Design',
      date: 'Apr 21, 2025',
      title: 'Web Design Trends That Actually Convert',
      description: 'Practical, timeless approaches to digital design that prioritize usability and performance.',
      image: '/images/ni3.avif',
      imageAlt: 'Abstract colorful design collage'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-90 mb-16">
          {/* Left Side - Header */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-px bg-gray-400 mr-4"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                NEWS & INSIGHTS
              </span>
            </div>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Stories, Strategies & Insights from the Creative Frontlines
            </h2>
          </div>

          {/* Right Side - CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Explore our latest thinking on branding, design, development, and photography – plus real-world lessons from the projects we love.
            </p>
            <button className="group bg-black text-white px-6 py-4 rounded-4xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 w-fit">
              <span>View All</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black bg-white rounded-full"
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
            </button>
          </div>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Tag and Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;
