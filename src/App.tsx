import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import VideoModal from './components/VideoModal';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Founder from './components/Founder';
import ClientCta from './components/ClientCta';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Project } from './config/projects';
import type { ServiceItem } from './config/services';

export default function App() {
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null);
  const [selectedServiceForBrief, setSelectedServiceForBrief] = useState<string>("AI UGC Ads");

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForBrief(service.title);
    handleScrollTo('contact');
  };

  const handleStartProject = (project?: Project) => {
    if (project) {
      setSelectedServiceForBrief(`${project.category} (${project.brand} style)`);
    }
    handleScrollTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] relative selection:bg-[#E10600] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onStartProject={() => handleStartProject()} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onViewWork={() => handleScrollTo('work')}
          onStartProject={() => handleStartProject()}
        />

        {/* Selected Work Portfolio Section */}
        <Portfolio onOpenDemo={(project) => setActiveVideoProject(project)} />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Process Section */}
        <Process />

        {/* Why SD ADWORKS */}
        <WhyUs />

        {/* Meet the Creator / Founder Section */}
        <Founder />

        {/* Client CTA Section */}
        <ClientCta
          onStartProject={() => handleStartProject()}
          onViewWork={() => handleScrollTo('work')}
        />

        {/* Contact Section */}
        <Contact initialServiceNeed={selectedServiceForBrief} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-screen Video Player Modal */}
      <VideoModal
        project={activeVideoProject}
        onClose={() => setActiveVideoProject(null)}
        onStartProject={handleStartProject}
      />

    </div>
  );
}
