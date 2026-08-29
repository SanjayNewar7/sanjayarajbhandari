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

function MarqueeRow({ direction, duration }: { direction: 'left' | 'right'; duration: number }) {
  const items = [...clientLogos, ...clientLogos];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 sm:gap-6 w-max"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((client, i) => (
          <div
            key={`${client.id}-${i}`}
            className="flex justify-center items-center shrink-0 w-24 h-20 sm:w-28 sm:h-24"
          >
            <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ClientLogos() {
  return (
    <section id="clients" className="py-16 bg-[#f5f5f7] dark:bg-black">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1d1d1f] dark:text-white mb-4">
            Whom I've Worked With
          </h2>
          <p className="text-lg text-[#6e6e73] dark:text-[#98989d] max-w-2xl mx-auto">
            Trusted by businesses and startups to bring their vision to life — across design, web, and product.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <MarqueeRow direction="left" duration={28} />
          <MarqueeRow direction="right" duration={32} />
        </div>
      </div>
    </section>
  );
}
