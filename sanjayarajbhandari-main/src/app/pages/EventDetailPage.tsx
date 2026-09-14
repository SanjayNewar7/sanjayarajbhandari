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
                {event.overview && (
                  <p className="mt-4 text-base leading-7 text-[#6e6e73] dark:text-[#98989d]">{event.overview}</p>
                )}
                {event.responsibilities && (
                  <div className="mt-8 rounded-3xl border border-black/[0.06] bg-[#f5f5f7] p-6 dark:border-white/10 dark:bg-white/[0.05] sm:p-7">
                    <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white">Creative responsibilities</h3>
                    <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                      {event.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3 text-[#3a3a3c] dark:text-[#c7c7cc]">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0a84ff]" />
                          <span className="leading-6">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {event.outcome && (
                  <div className="mt-8 border-l-4 border-[#0a84ff] pl-5">
                    <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white">
                      {event.type === 'Marketing Campaign' ? 'Campaign outcome' : 'Event outcome'}
                    </h3>
                    <p className="mt-3 leading-7 text-[#6e6e73] dark:text-[#98989d]">{event.outcome}</p>
                  </div>
                )}

                {event.gallery && event.gallery.length > 0 && (
                  <section className="mt-12" aria-labelledby="event-gallery-title">
                    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0a84ff]">Inside the experience</p>
                        <h2 id="event-gallery-title" className="mt-2 text-2xl font-bold text-[#1d1d1f] dark:text-white sm:text-3xl">
                          Three days, one creative journey
                        </h2>
                      </div>
                      <p className="max-w-sm text-sm leading-6 text-[#6e6e73] dark:text-[#98989d]">
                        From an active classroom to a shared moment of recognition.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {event.gallery.map((item, index) => (
                        <motion.figure
                          key={item.image}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.45, delay: index * 0.08 }}
                          className={`group overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.05] ${index === 0 ? 'sm:col-span-2' : ''}`}
                        >
                          <div className={index === 0 ? 'aspect-[16/9] overflow-hidden' : 'aspect-[4/3] overflow-hidden'}>
                            <img
                              src={item.image}
                              alt={item.alt}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                            />
                          </div>
                          <figcaption className="p-5 text-sm leading-6 text-[#6e6e73] dark:text-[#b0b0b5]">
                            <span className="mr-2 font-semibold text-[#0a84ff]">0{index + 1}</span>
                            {item.caption}
                          </figcaption>
                        </motion.figure>
                      ))}
                    </div>
                  </section>
                )}
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
