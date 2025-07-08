"use client";
import HeroSection from '../components/HeroSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import DownloadSection from '../components/DownloadSection.jsx';
import InstallationGuide from '../components/InstallationGuide.jsx';
import FAQSection from '../components/FAQSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import TeamSection from '../components/TeamSection.jsx';
import ChangelogSection from '../components/ChangelogSection.jsx';
import ComingSoonSection from '../components/ComingSoonSection.jsx';
import ImpactSection from '../components/ImpactSection.jsx';
import TroubleshootingSection from '../components/TroubleshootingSection.jsx';
import DocumentationSection from '../components/DocumentationSection.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <InstallationGuide />
        <DocumentationSection />
        <ImpactSection />
        <ComingSoonSection />
        <ChangelogSection />
        <TroubleshootingSection />
        <FAQSection />
        <TeamSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
