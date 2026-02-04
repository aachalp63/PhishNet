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

  // ---- Correct Security Logic ----
  const isMalicious = data.unsafe || data.phishing;
  const isSuspicious =
    !isMalicious && (data.suspicious || data.risk_score > 70);
  const isSafe = !isMalicious && !isSuspicious;

  // ---- UI States ----
  let bgColor = 'bg-green-50';
  let borderColor = 'border-green-300';
  let textColor = 'text-green-700';
  let Icon = ShieldCheck;
  let title = 'This URL looks Safe ✅';

  if (isSuspicious) {
    bgColor = 'bg-yellow-50';
    borderColor = 'border-yellow-300';
    textColor = 'text-yellow-700';
    Icon = AlertTriangle;
    title = 'This URL looks Suspicious ⚠️';
  }

  if (isMalicious) {
    bgColor = 'bg-red-50';
    borderColor = 'border-red-300';
    textColor = 'text-red-700';
    Icon = AlertTriangle;
    title = 'Danger! This URL is Malicious 🚨';
  }

  return (
    <div
      className={`rounded-2xl shadow-md p-6 mt-6 border ${bgColor} ${borderColor}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-6 h-6 ${textColor}`} />
        <h2 className={`text-xl font-semibold ${textColor}`}>
          {title}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-500" />
          <span className="break-all">
            <strong>Domain:</strong> {data.domain}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-gray-500" />
          <span>
            <strong>Risk Score:</strong> {data.risk_score}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ShieldX className="w-4 h-4 text-gray-500" />
          <span>
            <strong>Phishing:</strong> {data.phishing ? 'Yes' : 'No'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-gray-500" />
          <span>
            <strong>Suspicious:</strong> {data.suspicious ? 'Yes' : 'No'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <MailWarning className="w-4 h-4 text-gray-500" />
          <span>
            <strong>Spamming:</strong> {data.spamming ? 'Yes' : 'No'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Bug className="w-4 h-4 text-gray-500" />
          <span>
            <strong>Unsafe:</strong> {data.unsafe ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    </div>
  );
}
