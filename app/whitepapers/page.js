export default function WhitepapersPage() {
  return (
    <main className="bg-gray-50 min-h-screen px-13 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Email Security & Cybersecurity Whitepapers
        </h1>
        <p className="text-gray-600 mb-10">
          Download in-depth reports and guides to strengthen your cybersecurity knowledge.
        </p>

        {/* Whitepaper Cards */}
        <ul className="space-y-6">
          {[
            {
              title: "📄 2024 Email Security Report",
              desc:
                "A comprehensive report on the latest email-based threats, attack vectors, and statistics.",
              file: "/docs/email-security-2024.pdf",
            },
            {
              title: "🔒 Zero Trust Networking Guide",
              desc:
                "Learn how to implement a Zero Trust Architecture to secure modern enterprise networks.",
              file: "/docs/zero-trust-networking.pdf",
            },
            {
              title: "🎯 Phishing Threats & Trends 2024",
              desc:
                "Analysis of phishing techniques, targets, and patterns observed across industries in 2024.",
              file: "/docs/phishing-threats-2024.pdf",
            },
            {
              title: "🧠 Employee Phishing Awareness Training",
              desc:
                "A training manual to help staff recognize and avoid common social engineering attacks.",
              file: "/docs/The-Complete-Security-Awareness-Plan-and-Strategy-Guide.pdf",
            },
            {
              title: "🛡️ Ransomware Prevention & Response Guide",
              desc:
                "Best practices for detecting, preventing, and recovering from ransomware attacks.",
              file: "/docs/ransomware-prevention-guide.pdf",
            },
            {
              title: "✉️ Email Authentication & DMARC Explained",
              desc:
                "A technical overview of SPF, DKIM, and DMARC protocols for securing email domains.",
              file: "/docs/email-authentication-dmarc.pdf",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {item.desc}
              </p>

              <a
                href={item.file}
                download
                className="inline-flex items-center gap-2 text-purple-600 font-medium
                           hover:text-purple-800 hover:underline transition-colors"
              >
                ⬇ Download PDF
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
