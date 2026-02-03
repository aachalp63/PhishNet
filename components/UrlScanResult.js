'use client';

import React from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  Globe,
  ShieldX,
  MailWarning,
  Bug,
} from 'lucide-react';

export default function UrlScanResult({ data }) {
  if (!data) return null;

  const isSafe = !data.unsafe;
  const bgColor = isSafe ? 'bg-green-50' : 'bg-red-50';
  const borderColor = isSafe ? 'border-green-300' : 'border-red-300';
  const textColor = isSafe ? 'text-green-700' : 'text-red-700';
  const Icon = isSafe ? ShieldCheck : AlertTriangle;

  return (
    <div className={`rounded-2xl shadow-md p-6 mt-6 border ${bgColor} ${borderColor}`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-6 h-6 ${textColor}`} />
        <h2 className={`text-xl font-semibold ${textColor}`}>
          {isSafe ? 'This URL looks Safe ✅' : 'Caution! This URL may be Malicious ⚠️'}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-500" />
          <span><strong>Domain:</strong> {data.domain}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-gray-500" />
          <span><strong>Risk Score:</strong> {data.risk_score}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldX className="w-4 h-4 text-gray-500" />
          <span><strong>Phishing:</strong> {data.phishing ? 'Yes' : 'No'}</span>
        </div>
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-gray-500" />
          <span><strong>Suspicious:</strong> {data.suspicious ? 'Yes' : 'No'}</span>
        </div>
        <div className="flex items-center gap-2">
          <MailWarning className="w-4 h-4 text-gray-500" />
          <span><strong>Spamming:</strong> {data.spamming ? 'Yes' : 'No'}</span>
        </div>
        <div className="flex items-center gap-2">
          <Bug className="w-4 h-4 text-gray-500" />
          <span><strong>Unsafe:</strong> {data.unsafe ? 'Yes' : 'No'}</span>
        </div>
      </div>
    </div>
  );
}
