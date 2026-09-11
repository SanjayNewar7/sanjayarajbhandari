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
    <section id="clients" className="py-16 sm:py-20 bg-[#f5f5f7] dark:bg-black">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-4xl font-bold text-[#1d1d1f] dark:text-white mb-4">
            Whom I've Worked With
          </h2>
          <div className="w-16 h-1 bg-[#0a84ff] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[#6e6e73] dark:text-[#98989d] max-w-2xl mx-auto">
            Trusted by businesses and startups to bring their vision to life — across design, web, and product.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 max-w-5xl mx-auto">
          {clientLogos.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
              whileHover={{ y: -4, scale: 1.06 }}
              className="flex justify-center items-center h-16 sm:h-20"
            >
              <img
                src={client.image}
                alt={client.name}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-full object-contain transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
