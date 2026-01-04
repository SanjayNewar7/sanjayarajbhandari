import { Header } from '../components/Header';
import { HeroModern } from '../components/HeroModern';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Portfolio } from '../components/Portfolio';
import { ClientLogos } from '../components/ClientLogos';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroModern />
      <Experience />
      <Skills />
      <Portfolio />
      <ClientLogos />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
