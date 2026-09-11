import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { events } from '../data/events';

export function EventsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <section className="pt-32 pb-16 bg-[#0a84ff] text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Workshops taught, conferences presented, and campaigns led along the way
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event, i) => (
              <Link key={event.id} to={`/events/${event.slug}`} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="macos-card rounded-3xl overflow-hidden flex flex-col h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0a84ff] mb-2">
                      {event.type}
                    </span>
                    <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white leading-snug mb-2 group-hover:text-[#0a84ff] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#6e6e73] dark:text-[#98989d] leading-relaxed mb-3">
                      <span className="font-medium text-[#1d1d1f] dark:text-white">{event.role}</span> —{' '}
                      {event.organizer}
                    </p>
                    <p className="text-sm text-[#6e6e73] dark:text-[#98989d] leading-relaxed mb-4 flex-1">
                      {event.description}
                    </p>
                    {event.location && (
                      <div className="flex items-center gap-1.5 text-xs text-[#6e6e73] dark:text-[#98989d] mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-sm font-medium text-[#0a84ff] pt-3 border-t border-black/[0.06] dark:border-white/10">
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
