import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// Local, dependency-free placeholder avatar (no external network request to fail/be blocked).
function dummyAvatar(name: string) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="128" height="128" rx="64" fill="#0a84ff"/><text x="64" y="64" font-family="system-ui, sans-serif" font-size="46" font-weight="700" fill="#fff" text-anchor="middle" dominant-baseline="central">${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const testimonials = [
  {
    id: 1,
    name: "Bishal K.C.",
    role: "Marketing Director, Nepal Tourism Board",
    content: "Sanjaya ko design ko kaam le hamro tourism campaign ko impact niskai diyeko cha. Unko creativity le hamro brand ko identity lai bahudin samma yaadgar banaidincha.",
    image: dummyAvatar("Bishal KC"),
  },
  {
    id: 2,
    name: "Sunita Thapa",
    role: "Owner, Himalaya Fashion House",
    content: "Himalaya Fashion House ko branding design Sanjaya le gareko. Unko approach le hamro local brand lai international standard ma pugaiyeko cha. Bahut khub kaam garekaa chun.",
    image: dummyAvatar("Sunita Thapa"),
  },
  {
    id: 3,
    name: "Rajesh Shrestha",
    role: "CEO, Nepal Coffee Exporters",
    content: "Hamro coffee brand ko packaging design garna Sanjaya lai taas thiyo. Unko expertise le hamro product lai European market ma pani successful banaidincha. Highly recommend!",
    image: dummyAvatar("Rajesh Shrestha"),
  },
  {
    id: 4,
    name: "Anita Gautam",
    role: "Founder, Pokhara Crafts Co.",
    content: "Sanjaya le hamro traditional craft ko modern design banayeko. Unko fusion design le hamro local product lai international market ma entry garna sahayog paryo.",
    image: dummyAvatar("Anita Gautam"),
  },
  {
    id: 5,
    name: "Kiran Shah",
    role: "Marketing Head, Chitwan Adventure Tours",
    content: "Tourism industry ma visual impact bahut important cha. Sanjaya ko design le hamro brand lai market ma distinct identity diyeko cha.",
    image: dummyAvatar("Kiran Shah"),
  },
  {
    id: 6,
    name: "Pooja Aryal",
    role: "Owner, Kathmandu Bakes & Cakes",
    content: "Hamro bakery ko packaging design Sanjaya le bahut creative banayeko. Unko design le hamro product lai customer ko attention kadaidincha.",
    image: dummyAvatar("Pooja Aryal"),
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  // Handle previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0a84ff] to-[#004999]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-16 h-1 bg-white/70 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto flex items-center justify-center gap-3 sm:gap-5">
          {/* Previous — dimmed, de-emphasized */}
          <div className="hidden md:block w-56 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[prevIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-5 scale-90"
              >
                <img
                  src={testimonials[prevIndex].image}
                  alt={testimonials[prevIndex].name}
                  className="w-10 h-10 rounded-full object-cover mx-auto mb-3"
                  loading="lazy"
                />
                <p className="text-xs text-white/80 italic leading-relaxed text-center line-clamp-3">
                  "{testimonials[prevIndex].content}"
                </p>
                <p className="text-xs font-medium text-white text-center mt-3">{testimonials[prevIndex].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center — focused, wide rectangle */}
          <div className="w-full max-w-2xl shrink-0 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -12 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="rounded-3xl bg-white/[0.18] backdrop-blur-3xl border border-white/30 shadow-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left"
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover shrink-0 ring-2 ring-white/40"
                  loading="lazy"
                />

                <div>
                  <p className="text-base sm:text-lg text-white/95 italic leading-relaxed mb-4">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-white/75">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next — dimmed, de-emphasized */}
          <div className="hidden md:block w-56 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[nextIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-5 scale-90"
              >
                <img
                  src={testimonials[nextIndex].image}
                  alt={testimonials[nextIndex].name}
                  className="w-10 h-10 rounded-full object-cover mx-auto mb-3"
                  loading="lazy"
                />
                <p className="text-xs text-white/80 italic leading-relaxed text-center line-clamp-3">
                  "{testimonials[nextIndex].content}"
                </p>
                <p className="text-xs font-medium text-white text-center mt-3">{testimonials[nextIndex].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white/[0.16] backdrop-blur-xl border border-white/25 p-2 rounded-full hover:bg-white/25 hover:shadow-xl transition-all z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white/[0.16] backdrop-blur-xl border border-white/25 p-2 rounded-full hover:bg-white/25 hover:shadow-xl transition-all z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/30'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}