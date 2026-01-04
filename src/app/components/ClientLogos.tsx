import { motion } from 'motion/react';

const clientLogos = [
  { id: 1, name: 'Calsie', image: '/assets/images/clients/Calsie Extended.png' },
  { id: 2, name: 'Chitwan Computers', image: '/assets/images/clients/Chitwan Computers Extended.png' },
  { id: 3, name: 'Dream Care', image: '/assets/images/clients/Dream Care Extended.png' },
  { id: 4, name: 'Gaule Enterprises', image: '/assets/images/clients/Gaule Enterprises Extended.png' },
  { id: 5, name: 'Ghumti Pasal', image: '/assets/images/clients/Ghumti Pasal Extended.png' },
  { id: 6, name: 'Matha Films', image: '/assets/images/clients/Matha Films Extended.png' },
  { id: 7, name: 'Momo Bar', image: '/assets/images/clients/Momo Bar Extended.png' },
  { id: 8, name: 'Neon Furniture', image: '/assets/images/clients/Neon Furniture Extended.png' },
  { id: 9, name: 'Shree Restaurant', image: '/assets/images/clients/shree restaurant extended.png' },
  { id: 10, name: 'Sara Mart', image: '/assets/images/clients/sara mart extended.png' },

];

export function ClientLogos() {
  return (
    <section id="clients" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Whom I've Worked With
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by diverse businesses to bring their vision to life through creative design solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-4 md:gap-6 lg:gap-2 items-center justify-items-center">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-20 sm:w-20 md:w-24 lg:w-24 h-20 sm:h-20 md:h-24 lg:h-24"
            >
              <div className="relative w-12 sm:w-12 md:w-16 lg:w-16 h-12 sm:h-12 md:h-16 lg:h-16 flex items-center justify-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-w-[140%] max-h-[140%] object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}