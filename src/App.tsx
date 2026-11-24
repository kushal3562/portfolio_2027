import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { AISkills } from '@/components/AISkills';
import { Projects } from '@/components/Projects';
import { AIProjects } from '@/components/AIProjects';
import { Background } from '@/components/Background';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AISkills />
        <Projects />
        <AIProjects />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
