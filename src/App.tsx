import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Practices from './components/Practices';
import Process from './components/Process';
import Stats from './components/Stats';
import Cases from './components/Cases';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      {/* зернистость поверх всей страницы */}
      <div
        className="fixed inset-0 z-[70] pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <Header />
      <main>
        <Hero />
        <Ticker />
        <Practices />
        <Process />
        <Stats />
        <Cases />
        <Team />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
