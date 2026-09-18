import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { MissionVisionValuesSection } from '@/components/marketing/MissionVisionValuesSection';

export const metadata = {
  title: 'About Rahama Digital Health | Simple, Connected Care',
  description: 'Learn how Rahama connects hospitals and patients so medical records travel safely across Africa.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0837ad] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Full-bleed Immersive Royal Blue Hero Banner */}
        <section className="bg-gradient-to-b from-[#0837ad] via-[#0935a3] to-[#052370] text-white py-24 sm:py-32 relative overflow-hidden">
          {/* Subtle Ambient Light Glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-400/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1600px] mx-auto px-6 sm:px-16 lg:px-32 relative z-10 text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Connecting Hospitals. <span className="text-blue-200">Protecting Patients.</span>
            </h1>
            <p className="text-base sm:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              Rahama makes sure your medical history travels with you safely whenever you visit a new doctor or hospital, giving you total control of your records on your phone.
            </p>
          </div>
        </section>

        <MissionVisionValuesSection />
      </main>

      <Footer />
    </div>
  );
}
