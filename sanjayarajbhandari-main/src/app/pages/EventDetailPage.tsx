import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, MapPin, Tag, User, Users } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { events } from '../data/events';

export function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
        <Header />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-[#1d1d1f] dark:text-white mb-4">Event Not Found</h1>
          <Link to="/events" className="text-[#0a84ff] hover:text-[#0066cc] inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherEvents = events.filter((e) => e.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <section className="pt-32 pb-16 bg-[#0a84ff] text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <Link to="/events" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Events</span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6">
              {event.type}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl">
              {event.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start max-w-6xl mx-auto">
            <div className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="rounded-2xl overflow-hidden shadow-xl mb-10"
              >
                <img src={event.image} alt={event.title} className="w-full aspect-[16/9] object-cover" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="macos-card rounded-2xl p-5 flex items-start gap-3">
                  <User className="w-5 h-5 text-[#0a84ff] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#6e6e73] dark:text-[#98989d] mb-1">Role</p>
                    <p className="font-semibold text-[#1d1d1f] dark:text-white">{event.role}</p>
                  </div>
                </div>
                <div className="macos-card rounded-2xl p-5 flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#0a84ff] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#6e6e73] dark:text-[#98989d] mb-1">
                      Organizer
                    </p>
                    <p className="font-semibold text-[#1d1d1f] dark:text-white">{event.organizer}</p>
                  </div>
                </div>
                <div className="macos-card rounded-2xl p-5 flex items-start gap-3">
                  <Tag className="w-5 h-5 text-[#0a84ff] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#6e6e73] dark:text-[#98989d] mb-1">
                      Category
                    </p>
                    <p className="font-semibold text-[#1d1d1f] dark:text-white">{event.type}</p>
                  </div>
                </div>
                {event.location && (
                  <div className="macos-card rounded-2xl p-5 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0a84ff] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#6e6e73] dark:text-[#98989d] mb-1">
                        Location
                      </p>
                      <p className="font-semibold text-[#1d1d1f] dark:text-white">{event.location}</p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-4">About this event</h2>
                <p className="text-lg text-[#3a3a3c] dark:text-[#c7c7cc] leading-relaxed">{event.description}</p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-32">
              <h2 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-4">Other Events</h2>
              <div className="space-y-4">
                {otherEvents.map((other) => (
                  <Link key={other.id} to={`/events/${other.slug}`} className="group block">
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="macos-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                        <img
                          src={other.image}
                          alt={other.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0a84ff]">
                          {other.type}
                        </span>
                        <h3 className="text-sm font-bold text-[#1d1d1f] dark:text-white leading-snug mt-1 group-hover:text-[#0a84ff] transition-colors">
                          {other.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
              <Link
                to="/events"
                className="mt-5 inline-flex items-center gap-1.5 text-[#0a84ff] text-sm font-medium hover:text-[#0066cc]"
              >
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
