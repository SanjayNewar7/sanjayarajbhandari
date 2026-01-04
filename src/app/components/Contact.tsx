import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have a project in mind? Let's work together to create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 h-full">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a 
                        href="mailto:Sanjaynewar007@gmail.com"
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        Sanjaynewar007@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <a 
                        href="tel:9817262424"
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        9817262424
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location</p>
                      <p className="text-gray-900">Bharatpur-4, Chitwan</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-100">
                  <p className="text-sm text-gray-600 mb-4">Follow me on</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.behance.net/sanjayarajbhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg" alt="Behance" className="w-5 h-5 invert" />
                    </a>
                    <a
                      href="https://www.pinterest.com/sanjaynewar007/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinterest.svg" alt="Pinterest" className="w-5 h-5 invert" />
                    </a>
                    <a
                      href="https://www.instagram.com/sanjay_newar7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="w-5 h-5 invert" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sanjayarajbhandari/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 invert" />
                    </a>
                  </div>
                  
                  {/* Quote Section */}
                  <div className="mt-6 pt-6 border-t border-blue-100">
                    <blockquote className="text-gray-700 italic text-center max-w-md mx-auto">
                      "In the digital age, your brand is your promise to your customer. We craft visual experiences that not only captivate but convert, turning your vision into digital reality."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl text-white h-full">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg text-white/80 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/60"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg text-white/80 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/60"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg text-white/80 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/60"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-white/80 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white resize-none placeholder:text-white/60"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}