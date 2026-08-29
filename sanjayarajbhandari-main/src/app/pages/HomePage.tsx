import { Header } from '../components/Header';
import { HeroModern } from '../components/HeroModern';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Work } from '../components/Work';
import { ClientLogos } from '../components/ClientLogos';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />
      <HeroModern />
      <Experience />
      <Skills />
      <Work />
      <ClientLogos />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
