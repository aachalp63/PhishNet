import './globals.css';
import { ShieldAlert } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'PhishNet – Phishing Detection & Awareness Hub',
  description: 'AI-powered anti-phishing education and detection platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans text-gray-800 min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        <main className="flex items-center justify-center overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
