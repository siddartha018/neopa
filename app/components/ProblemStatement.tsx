import React from 'react';

const problems = [
  {
    id: 1,
    icon: '📝',
    title: 'Content Without Context',
    description: 'Content is created without context.',
    color: 'bg-red-50 border-red-200',
    iconBg: 'bg-red-100',
  },
  {
    id: 2,
    icon: '📊',
    title: 'Ads Without Insight',
    description: 'Ads run without insight.',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    id: 3,
    icon: '📈',
    title: 'Metrics Without Meaning',
    description: 'Metrics are tracked without meaning.',
    color: 'bg-yellow-50 border-yellow-200',
    iconBg: 'bg-yellow-100',
  },
];

const ProblemStatement = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="typography-heading mb-4">
            Most brands don&apos;t have a media problem.
            <br />
            <span className="text-gray-600">They have a relevance problem.</span>
          </h2>
        </div>

        {/* Problem Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className={`relative rounded-2xl border-2 ${problem.color} p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${problem.iconBg} mb-4`}>
                <span className="text-2xl">{problem.icon}</span>
              </div>

              {/* Content */}
              <h3 className="typography-title mb-2 text-gray-900">
                {problem.title}
              </h3>
              <p className="typography-body text-gray-700">
                {problem.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-300 rounded-tr-lg opacity-30" />
            </div>
          ))}
        </div>

        {/* Solution Statement */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-2xl border-2 border-gray-200 px-8 py-6 md:px-12 md:py-8 shadow-md">
            <p className="typography-heading text-2xl md:text-3xl text-gray-900">
              We exist to fix that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

