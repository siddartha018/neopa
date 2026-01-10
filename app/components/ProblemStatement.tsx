import React from 'react';

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

        {/* Solution Statement */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-2xl border-2 border-gray-200 px-8 py-6 md:px-12 md:py-8 shadow-md">
            <p className="typography-heading text-2xl md:text-3xl text-gray-900">
              Social Monks  exist to fix that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

