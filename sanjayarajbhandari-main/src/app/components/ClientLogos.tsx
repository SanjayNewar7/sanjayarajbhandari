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
  { id: 11, name: 'Applix', image: '/assets/images/clients/applix-logo.svg' },
  { id: 12, name: 'Community and Care', image: '/assets/images/clients/Community and Care logo.png' },
  { id: 13, name: 'Sagar Distillery Ltd.', image: '/assets/images/clients/Sagar Distellery.png' },
  { id: 14, name: 'Tirupati Paints', image: '/assets/images/clients/Tirupati Paints.png' },
  { id: 15, name: 'Glossy Paints', image: '/assets/images/clients/Glossy Paints.png' },
  { id: 16, name: 'Siddhi Vinayak School', image: '/assets/images/clients/Siddhi Binayak School.png' },
];

const logoRows = [clientLogos.slice(0, 8), clientLogos.slice(8)];

function LogoRow({ clients, direction }: { clients: typeof clientLogos; direction: 'forward' | 'reverse' }) {
  return (
    <div className="client-marquee relative overflow-hidden" aria-label="Client logos">
      <div className={`client-marquee-track client-marquee-${direction}`}>
        {[false, true].map((isCopy) => (
          <div key={String(isCopy)} className={`client-logo-set ${isCopy ? 'client-logo-copy' : ''}`} aria-hidden={isCopy || undefined}>
            {clients.map((client) => (
              <div key={`${isCopy ? 'copy-' : ''}${client.id}`} className="client-logo-item group" title={client.name}>
                <img
                  src={client.image}
                  alt={isCopy ? '' : client.name}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="max-h-[76px] max-w-[132px] object-contain opacity-80 saturate-[.9] transition-[filter,opacity,transform] duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:saturate-100 dark:brightness-110 sm:max-h-[88px] sm:max-w-[155px]"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientLogos() {
  return (
    <section id="clients" className="flex min-h-[680px] items-center overflow-hidden bg-white py-16 dark:bg-black sm:py-20 lg:min-h-[100svh]">
      <div className="w-full">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#2878f0] dark:text-[#5aa2ff] sm:text-4xl">
            Whom I've Worked With
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-[#ff9f0a]" />
          <p className="mx-auto max-w-3xl text-base text-[#536176] dark:text-[#a8b1c1] sm:text-lg">
            Trusted by forward-thinking brands who partnered with me to bring their vision to life.
          </p>
        </motion.div>
        </div>
        <div className="space-y-10 sm:space-y-14">
          <LogoRow clients={logoRows[0]} direction="reverse" />
          <LogoRow clients={logoRows[1]} direction="forward" />
        </div>
      </div>
    </section>
  );
}
