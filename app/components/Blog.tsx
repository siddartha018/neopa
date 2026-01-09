import React from 'react';

const blogPosts = [
  {
    id: 1,
    image: '/nimages/im1.png',
    title: 'Savor the Stillness',
    tag: 'Editing',
  },
  {
    id: 2,
    image: '/nimages/im2.png',
    title: 'Minimal Mood',
    tag: 'Editing',
  },
  {
    id: 3,
    image: '/nimages/im3.png',
    title: 'Concrete & Contrast',
    tag: 'Editing',
  },
  {
    id: 4,
    image: '/nimages/im4.png',
    title: 'Framed by Light',
    tag: 'Lighting',
  },
  {
    id: 5,
    image: '/nimages/im5.png',
    title: 'In Motion',
    tag: 'Effect',
  },
  {
    id: 6,
    image: '/nimages/im6.png',
    title: 'Texture & Tone',
    tag: 'Effect',
  },
];

const Blog = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="typography-eyebrow">
              Blog
            </span>
          </div>

          <h2 className="typography-heading mb-4">
            News & Update
          </h2>
          <p className="max-w-2xl mx-auto typography-body">
            Insights and stories from my photography journey, showcasing my creative process and recent projects.
          </p>
        </div>

        {/* Blog Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Image with viewfinder brackets */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                {/* Viewfinder brackets overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-stretch justify-between p-3 md:p-4">
                  <div className="flex flex-col justify-between">
                    <span className="block h-4 w-4 md:h-5 md:w-5 border-l-2 border-t-2 border-white rounded-tl-lg" />
                    <span className="block h-4 w-4 md:h-5 md:w-5 border-l-2 border-b-2 border-white rounded-bl-lg" />
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <span className="block h-4 w-4 md:h-5 md:w-5 border-r-2 border-t-2 border-white rounded-tr-lg" />
                    <span className="block h-4 w-4 md:h-5 md:w-5 border-r-2 border-b-2 border-white rounded-br-lg" />
                  </div>
                </div>
              </div>

              {/* Title and Tag */}
              <div className="px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-3">
                <h3 className="typography-title flex-1">
                  {post.title}
                </h3>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 typography-badge whitespace-nowrap">
                  {post.tag}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-black text-white typography-button px-8 py-2.5 hover:bg-gray-900 transition-colors duration-200"
          >
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

