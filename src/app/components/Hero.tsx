import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Sanjaya Rajbhandari
              </h1>
              <p className="text-2xl text-gray-600">Graphics Designer</p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Crafting visual stories through innovative design solutions. 
              Specializing in branding, packaging, and digital design with over 2.5 years of experience.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <a 
                href="https://www.behance.net/sanjayarajbhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Behance</span>
              </a>
              <a 
                href="https://www.pinterest.com/sanjaynewar007/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Pinterest</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600 rounded-full blur-2xl opacity-20"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njc0NzI4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Sanjaya Rajbhandari" 
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}