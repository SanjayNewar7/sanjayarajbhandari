import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

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
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our clients say about our design services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
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
        </div>
      </div>
    </section>
  );
}