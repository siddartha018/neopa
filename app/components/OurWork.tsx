'use client';

import React from 'react';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  description: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: 'liva',
    title: 'Liva',
    subtitle: 'Beauty & Skincare',
    tags: ['Branding', 'Photography'],
    image: '/images/ni1.avif',
    description:
      'Elevated their visual identity and launched a product campaign that doubled engagement.',
  },
  {
    id: 'krona',
    title: 'Krona',
    subtitle: 'Architecture Studio',
    tags: ['Design', 'Development'],
    image: '/images/ni2.avif',
    description:
      'Created a clean, responsive portfolio that drove 70% more client inquiries.',
  },
  {
    id: 'velto',
    title: 'Velto',
    subtitle: 'Streetwear Brand',
    tags: ['Branding', 'Photography'],
    image: '/images/ni3.avif',
    description:
      'Refreshed their brand with bold visuals and editorial content for web and social.',
  },
  {
    id: 'sonar',
    title: 'Sonar',
    subtitle: 'SaaS Platform',
    tags: ['Design', 'Development'],
    image: '/images/ni2.avif',
    description:
      'Crafted a modern, conversion‑focused landing page to support product growth.',
  },
];

const ArrowBadge = () => (
  <div className="shrink-0 rounded-full  p-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black"
        style={{ backgroundColor: '#34d399', borderRadius: '9999px', transform: 'rotate(-45deg)' }} // emerald-400
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700">
    {children}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.href || '#'}
    className="group block overflow-hidden rounded-2xl bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
      <Image
        src={project.image}
        alt={`${project.title} – ${project.subtitle}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={false}
      />
    </div>
    <div className="flex items-start justify-between gap-3 px-2 pt-3">
      <div className="flex flex-wrap gap-1">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <ArrowBadge />
    </div>
    <div className="px-2 pb-3 pt-1">
      <h3 className="text-[15px] font-semibold text-gray-900">
        {project.title} — {project.subtitle}
      </h3>
      <p className="mt-1 text-[12px] leading-relaxed text-gray-600">
        {project.description}
      </p>
    </div>
  </a>
);

const OurWork = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-gray-500">
            Our Work
          </p>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-3"></div>
          <h2 className="text-xl lg:text-4xl font-bold text-gray-900 sm:text-4xl">
            Selected Work That Speaks for Itself
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[12px] leading-relaxed text-gray-600">
            A look at the brands, websites, and visuals we’ve brought to life — combining strategy, creativity, and craft.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* View All Works */}
        <div className="mt-8 flex justify-center">
          <button className="group inline-flex items-center gap-2 rounded-4xl bg-black px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-gray-800">
            <span>View All Works</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
                style={{ transform: 'rotate(-45deg)' }}
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
      </div>
    </section>
  );
};

export default OurWork;


