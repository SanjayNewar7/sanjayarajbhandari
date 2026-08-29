import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const recipient = 'Sanjaynewar007@gmail.com';
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`

From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`);

      const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-[#6e6e73] dark:text-[#98989d]">
              Have a design, web, or app project in mind? Let's build it together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="macos-card p-8 rounded-2xl h-full">
                <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-white mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0a84ff] p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6e6e73] dark:text-[#98989d] mb-1">Email</p>
                      <a
                        href="mailto:Sanjaynewar007@gmail.com"
                        className="text-[#1d1d1f] dark:text-white hover:text-[#0a84ff] transition-colors"
                      >
                        Sanjaynewar007@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0a84ff] p-3 rounded-xl">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6e6e73] dark:text-[#98989d] mb-1">Phone</p>
                      <a
                        href="tel:9817262424"
                        className="text-[#1d1d1f] dark:text-white hover:text-[#0a84ff] transition-colors"
                      >
                        9817262424
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0a84ff] p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6e6e73] dark:text-[#98989d] mb-1">Location</p>
                      <p className="text-[#1d1d1f] dark:text-white">Bharatpur-4, Chitwan</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <p className="text-sm text-[#6e6e73] dark:text-[#98989d] mb-4">Follow me on</p>
                  <div className="flex gap-3">
                    {[
                      { name: 'Behance', url: 'https://www.behance.net/sanjayarajbhan', icon: 'behance' },
                      { name: 'Figma', url: 'https://www.figma.com/@sanjaya', icon: 'figma' },
                      { name: 'Instagram', url: 'https://www.instagram.com/sanjay_newar7/', icon: 'instagram' },
                      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sanjayarajbhandari/', icon: 'linkedin' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0a84ff] p-3 rounded-xl hover:bg-[#0066cc] transition-colors"
                      >
                        <img
                          src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social.icon}.svg`}
                          alt={social.name}
                          className="w-5 h-5 invert"
                        />
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
                    <blockquote className="text-[#3a3a3c] dark:text-[#c7c7cc] italic text-center max-w-md mx-auto">
                      "Good design isn't just how it looks — it's how the whole product works, from the first sketch to the shipped build."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0a84ff]/90 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl text-white h-full">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl text-white/90 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/60 ${errors.name ? 'border-2 border-red-300' : ''}`}
                    placeholder="Ramesh Shrestha"
                  />
                  {errors.name && <p className="text-red-100 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl text-white/90 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/60 ${errors.email ? 'border-2 border-red-300' : ''}`}
                    placeholder="ramesh.shrestha@example.com"
                  />
                  {errors.email && <p className="text-red-100 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl text-white/90 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/60 ${errors.subject ? 'border-2 border-red-300' : ''}`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-red-100 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl text-white/90 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white resize-none placeholder:text-white/60 ${errors.message ? 'border-2 border-red-300' : ''}`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && <p className="text-red-100 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-[#0a84ff] py-3 rounded-xl hover:bg-white/90 transition-colors font-medium"
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
