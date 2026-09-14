import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Rahama Digital Health — Connected Healthcare Infrastructure for Africa',
    template: '%s | Rahama Digital Health'
  },
  description: 'Enabling patients to securely own and access lifelong medical records while allowing healthcare facilities to exchange authorized patient info seamlessly across Africa.',
  keywords: ['Digital Health', 'Healthcare Infrastructure', 'Medical Records', 'Africa Health Tech', 'EMR Interoperability', 'Patient Identity'],
  openGraph: {
    title: 'Rahama Digital Health — Connected Healthcare Infrastructure',
    description: 'Continuity of care shouldn\'t stop at a border. Rahama connects patients, doctors, and hospitals.',
    siteName: 'Rahama Digital Health',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[#FF6600] selection:text-white">
        {children}
      </body>
    </html>
  );
}
