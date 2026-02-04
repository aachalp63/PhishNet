'use client';

import UrlScanResult from '@/components/UrlScanResult';
import { useState } from 'react';

export default function AnalyzerPage() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
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

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          URL Phishing Scanner
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          Enter the complete URL you want to analyze for potential threats.
        </p>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Website URL
        </label>
        <input
          type="text"
          placeholder="https://example.com"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={handleCheck}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
        🔍 Scan URL
        </button>

        {result && (
          <div className="mt-6">
            <UrlScanResult data={result} />
          </div>
        )}
      </div>
    </div>
  );
}
