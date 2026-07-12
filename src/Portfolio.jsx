import { palette, fontImport } from './theme/palette';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import ChangelogSection from './components/ChangelogSection';
import StackSection from './components/StackSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Portfolio() {
  return (
    <div style={{ background: palette.bg, minHeight: '100vh', color: palette.text }}>
      <style>{fontImport}</style>
      <Nav />
      <Hero />
      <About />
      <ChangelogSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
