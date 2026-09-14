import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { events } from '../data/events';
import { optimizedImage } from '../utils/optimizedImage';

export function Events() {
  const featured = events.slice(0, 3);

  return (
    <section id="events" className="py-20 sm:py-24 bg-[#f5f5f7] dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-4">Events</h2>
          <div className="w-16 h-1 bg-[#0a84ff] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-[#6e6e73] dark:text-[#98989d] max-w-2xl mx-auto">
            Workshops taught, conferences presented, and campaigns led along the way
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featured.map((event, i) => (
            <Link key={event.id} to={`/events/${event.slug}`} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="macos-card rounded-3xl overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={optimizedImage(event.image)}
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
                  <p className="text-sm text-[#6e6e73] dark:text-[#98989d] leading-relaxed mb-4 flex-1">
                    {event.role} — {event.organizer}
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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a84ff] text-white font-medium text-sm hover:bg-[#0066cc] transition-colors shadow-sm"
          >
            Show More Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
