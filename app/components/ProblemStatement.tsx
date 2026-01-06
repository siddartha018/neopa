import React from 'react';

const ProblemStatement = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="typography-heading mb-6">
            Most brands don&apos;t have a media problem.
            <br />
            <span className="text-gray-600">They have a relevance problem.</span>
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-8">
            <p className="typography-body text-lg">
              Content is created without context.
            </p>
            <p className="typography-body text-lg">
              Ads run without insight.
            </p>
            <p className="typography-body text-lg">
              Metrics are tracked without meaning.
            </p>
          </div>

          <p className="typography-heading text-2xl md:text-3xl">
            We exist to fix that.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

