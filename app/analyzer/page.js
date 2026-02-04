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
    <div className="max-w-xl mx-auto p-4">
      <input
        type="text"
        placeholder="Enter URL"
        className="w-full border px-4 py-2 rounded mb-2"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleCheck}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Scan URL
      </button>

      <UrlScanResult data={result} />
    </div>
  );
}
