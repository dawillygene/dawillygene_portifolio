import React from 'react';

const testimonials = [
  {
    delay: '0.1s',
    stars: 5,
    text: "Dawilly delivered our e-commerce platform ahead of schedule with exceptional attention to detail. His ability to translate business requirements into technical solutions is outstanding.",
    initials: "JD",
    name: "Jane Doe",
    title: "CTO, Retail Solutions",
  },
  {
    delay: '0.2s',
    stars: 5,
    text: "Working with Dawilly was a game-changer for our startup. His expertise across multiple technologies allowed us to launch our MVP quickly and iterate based on user feedback.",
    initials: "MS",
    name: "Michael Smith",
    title: "Founder, Tech Startup",
  },
  {
    delay: '0.3s',
    stars: 4.5,
    text: "The IoT solution Dawilly designed for our manufacturing process improved efficiency by 35%. His understanding of both software and hardware made him the perfect developer for this project.",
    initials: "LW",
    name: "Lisa Wong",
    title: "Operations Director, Manufacturing Inc.",
  },
];

const renderStars = (stars) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0;
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fas fa-star text-yellow-500"></i>
      ))}
      {halfStar && <i className="fas fa-star-half-alt text-yellow-500"></i>}
    </>
  );
};

const Testimonials = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="section-title fade-in">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonials.map((t, idx) => (
          <div
            className="p-6 rounded-lg relative fade-in"
            style={{
              animationDelay: t.delay,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
            key={idx}
          >
            <div
              className="text-5xl absolute top-6 right-6 opacity-20"
              style={{ color: 'var(--accent1)' }}
            >
              <i className="fas fa-quote-right"></i>
            </div>
            <div className="mb-6">{renderStars(t.stars)}</div>
            <p className="text-gray-300 mb-6">{t.text}</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                <span className="text-lg font-bold">{t.initials}</span>
              </div>
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;