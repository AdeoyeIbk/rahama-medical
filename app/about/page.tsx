import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { MissionVisionValuesSection } from '@/components/marketing/MissionVisionValuesSection';

export const metadata = {
  title: 'About Rahama Digital Health — Simple, Connected Care',
  description: 'Learn how Rahama connects hospitals and patients so medical records travel safely across Africa.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-[#000066] text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <Badge variant="orange" size="md">
              About Rahama
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
              Connecting Hospitals. <span className="heading-accent text-white">Protecting Patients.</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Rahama makes sure your medical history travels with you safely whenever you visit a new doctor or hospital—giving you total control of your records on your phone.
            </p>
          </div>
        </section>

        <MissionVisionValuesSection />
      </main>

      <Footer />
    </div>
  );
}
