import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} PhishNet. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href="mailto:support@phishnet.ai">Contact</a>
        </div>
      </div>
    </footer>
  );
}
