'use client';

import UrlScanResult from '@/components/UrlScanResult';
import { useState } from 'react';

export default function AnalyzerPage() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    if (!url) return;

    const res = await fetch('/api/check-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    const json = await res.json();
    if (json.success) {
      setResult(json.data);
    }
  };

  const handleReset = () => {
    setUrl('');
    setResult(null);
  };

  return (
    <main className="h-2-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8 py-6">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Phishing URL Analyzer
        </h1>
        <p className="text-gray-600 mb-6">
          Instantly analyze suspicious links using AI-powered reputation checks
          to detect phishing, malware, and unsafe domains.
        </p>

        {/* Input */}
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 rounded-lg mb-4
                     focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleCheck}
            disabled={!url}
            className="flex-1 bg-purple-600 text-white font-semibold px-4 py-3
                       rounded-lg hover:bg-purple-700 transition
                       disabled:opacity-50"
          >
            🔍 Scan URL
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-3 rounded-lg border border-gray-300
                       text-gray-700 hover:bg-gray-100 transition"
          >
            Reset
          </button>
        </div>

        {/* Result */}
        {result && <UrlScanResult data={result} />}

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          Tip: Always verify URLs before clicking links.
        </p>
      </div>
    </main>
  );
}
