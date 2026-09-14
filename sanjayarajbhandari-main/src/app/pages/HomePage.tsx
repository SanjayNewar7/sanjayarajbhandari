import { Header } from '../components/Header';
import { HeroModern } from '../components/HeroModern';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Work } from '../components/Work';
import { ClientLogos } from '../components/ClientLogos';
import { GlobalReach } from '../components/GlobalReach';
import { Events } from '../components/Events';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" className="landing-page">
        <HeroModern />
        <Experience />
        <Skills />
        <Work />
        <ClientLogos />
        <GlobalReach />
        <Events />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
