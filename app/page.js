import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-[85vh] flex items-center justify-center px-4">
      <div className="max-w-5xl text-center bg-white/90 backdrop-blur rounded-2xl shadow-lg px-8 py-16">
<div className="flex items-center justify-center gap-3 mb-4">
  <ShieldCheck className="w-14 h-14 text-purple-600" />
  <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
    Phish<span className="text-purple-600">Net</span>
  </h1>
</div>

        {/* Main Tagline */}
        <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
          Detect Phishing. Educate Users. Secure the Digital World.
        </p>

        {/* Description */}
        <p className="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          PhishNet is an AI-powered cybersecurity platform designed to identify
          phishing threats in real time and educate users through interactive
          training, real-world case studies, and expert whitepapers.
          Our mission is to reduce human error — the weakest link in cybersecurity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/analyzer"
            className="px-7 py-3 rounded-xl bg-purple-600 text-white font-semibold
                       hover:bg-purple-700 transition-all duration-200 hover:scale-105"
          >
            🔍 Analyze a Suspicious URL
          </Link>

          <Link
            href="/training"
            className="px-7 py-3 rounded-xl bg-gray-900 text-white font-semibold
                       hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            🎓 Start Phishing Training
          </Link>

          <Link
            href="/whitepapers"
            className="px-7 py-3 rounded-xl bg-green-600 text-white font-semibold
                       hover:bg-green-700 transition-all duration-200 hover:scale-105"
          >
            📄 Explore Whitepapers
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-gray-50 rounded-xl p-6 border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">⚡ Real-Time URL Analysis</h3>
            <p className="text-sm text-gray-600">
              Instantly scan URLs using AI-driven reputation analysis to detect
              phishing, malware, and malicious domains.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🧠 Awareness & Training</h3>
            <p className="text-sm text-gray-600">
              Interactive quizzes and learning modules designed to train employees
              and individuals to recognize phishing attacks.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📚 Research-Backed Insights</h3>
            <p className="text-sm text-gray-600">
              Access real-world phishing case studies and downloadable
              cybersecurity whitepapers curated from trusted sources.
            </p>
          </div>
        </div>

        {/* Trust Line */}
        <p className="text-sm text-gray-500 mt-12">
          Built for students, professionals, and organizations to fight phishing together.
        </p>
      </div>
    </main>
  );
}
