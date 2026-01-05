import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Bishal K.C.",
    role: "Marketing Director, Nepal Tourism Board",
    content: "Sanjaya ko design ko kaam le hamro tourism campaign ko impact niskai diyeko cha. Unko creativity le hamro brand ko identity lai bahudin samma yaadgar banaidincha.",
    rating: 5,
    image: "/assets/images/profile/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Sunita Thapa",
    role: "Owner, Himalaya Fashion House",
    content: "Himalaya Fashion House ko branding design Sanjaya le gareko. Unko approach le hamro local brand lai international standard ma pugaiyeko cha. Bahut khub kaam garekaa chun.",
    rating: 5,
    image: "/assets/images/profile/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Rajesh Shrestha",
    role: "CEO, Nepal Coffee Exporters",
    content: "Hamro coffee brand ko packaging design garna Sanjaya lai taas thiyo. Unko expertise le hamro product lai European market ma pani successful banaidincha. Highly recommend!",
    rating: 4,
    image: "/assets/images/profile/testimonial-3.jpg"
  },
  {
    id: 4,
    name: "Anita Gautam",
    role: "Founder, Pokhara Crafts Co.",
    content: "Sanjaya le hamro traditional craft ko modern design banayeko. Unko fusion design le hamro local product lai international market ma entry garna sahayog paryo.",
    rating: 5,
    image: "/assets/images/profile/testimonial-4.jpg"
  },
  {
    id: 5,
    name: "Kiran Shah",
    role: "Marketing Head, Chitwan Adventure Tours",
    content: "Tourism industry ma visual impact bahut important cha. Sanjaya ko design le hamro brand lai market ma distinct identity diyeko cha.",
    rating: 5,
    image: "/assets/images/profile/testimonial-5.jpg"
  },
  {
    id: 6,
    name: "Pooja Aryal",
    role: "Owner, Kathmandu Bakes & Cakes",
    content: "Hamro bakery ko packaging design Sanjaya le bahut creative banayeko. Unko design le hamro product lai customer ko attention kadaidincha.",
    rating: 4,
    image: "/assets/images/profile/testimonial-6.jpg"
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
  
  // Get testimonials to display based on screen size
  const getTestimonialsToShow = () => {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // On mobile, show only one testimonial at a time
      return [testimonials[currentIndex]];
    } else {
      // On desktop, show 3 testimonials
      const result: typeof testimonials = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length;
        result.push(testimonials[index]);
      }
      return result;
    }
  };
  
  // Update testimonials when screen size changes
  const [testimonialsToShow, setTestimonialsToShow] = useState<typeof testimonials>(getTestimonialsToShow());
  
  useEffect(() => {
    const updateTestimonials = () => {
      setTestimonialsToShow(getTestimonialsToShow());
    };
    
    window.addEventListener('resize', updateTestimonials);
    updateTestimonials();
    
    return () => window.removeEventListener('resize', updateTestimonials);
  }, [currentIndex]);
  
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our clients say about our design services
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            <AnimatePresence mode="popLayout">
              {testimonialsToShow.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex-1 min-w-[300px]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <Quote className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}