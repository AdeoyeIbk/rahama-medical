import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { SegmentedContactForm } from '@/components/forms/SegmentedContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-[#000066] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
            <Badge variant="orange" size="md">
              Inquiries & Partnerships
            </Badge>
            <h1 className="text-4xl font-extrabold font-heading text-white">
              Connect With <span className="heading-accent text-white">Rahama Digital Health</span>
            </h1>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
              Whether you represent a hospital facility, medical practice, or partnership inquiry, our infrastructure team is ready to support you.
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 dark:bg-[#030318] text-slate-900 dark:text-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SegmentedContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
