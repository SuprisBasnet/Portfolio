import { Cursor } from '@/components/Cursor';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Path } from '@/components/Path';
import { Work } from '@/components/Work';
import { Toolkit } from '@/components/Toolkit';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';

function App() {
  return (
    <div className="bg-canvas-500 text-[#1D1A17] font-sans antialiased relative">
      <div className="grain-overlay" aria-hidden />
      <Cursor />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Path />
        <Work />
        <Toolkit />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
