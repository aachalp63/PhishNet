export default function CaseStudiesPage() {
  return (
    <main className="bg-gray-50 min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Phishing Case Studies
        </h1>
        <p className="text-gray-600 mb-10">
          Real-world phishing attacks explained to help you recognize and avoid online threats.
        </p>

        {/* Case Study List */}
        <ul className="space-y-6">
          {[
            {
              title: "🎯 Google Docs Phishing Scam",
              desc:
                "Emails appeared to come from known contacts inviting users to edit a Google Doc. Clicking the link led to a malicious app requesting email and contacts access.",
              link:
                "https://www.wired.com/story/google-docs-scams-threat-phishing/",
            },
            {
              title: "💳 Fake Bank Alerts",
              desc:
                "SMS messages posed as bank fraud alerts, urging victims to call a number where attackers extracted banking details.",
              link:
                "https://it.uic.edu/news-stories/beware-of-a-recent-text-scam-involving-fake-bank-fraud-alerts/",
            },
            {
              title: "🛒 Amazon Order Confirmation Scam",
              desc:
                "Fake Amazon order emails redirected users to phishing sites designed to steal login credentials.",
              link:
                "https://www.infosecurity-magazine.com/news/amazon-order-confirmation-phishing/",
            },
            {
              title: "🔐 Microsoft 365 Credential Theft",
              desc:
                "Attackers abused Microsoft Office Forms to collect credentials through convincing fake login pages.",
              link:
                "https://perception-point.io/blog/two-step-phishing-campaign-exploits-microsoft-office-forms/",
            },
            {
              title: "📦 DHL Delivery Notification Scam",
              desc:
                "Emails claimed a pending delivery and used malicious QR codes or links to steal personal data.",
              link:
                "https://intelligence.abnormalsecurity.com/attack-library/dhl-impersonator-sends-fraudulent-failed-delivery-notification-containing-malicious-qr-code",
            },
            {
              title: "🏦 IRS Tax Refund Scam",
              desc:
                "Scammers impersonated IRS officials, luring victims into sharing sensitive data or making payments.",
              link:
                "https://www.irs.gov/newsroom/dirty-dozen-tax-scams-for-2025-irs-warns-taxpayers-to-watch-out-for-dangerous-threats",
            },
            {
              title: "🎁 Social Media Giveaway Scam",
              desc:
                "Fake brand giveaways on social media tricked users into paying fees or sharing personal information.",
              link:
                "https://www.bitdefender.com/blog/labs/sponsored-ad-fraud-mystery-box-scams-flood-social-media/",
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

              <p className="text-gray-700 leading-relaxed mb-3">
                {item.desc}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-600 font-medium
                           hover:text-purple-800 hover:underline transition-colors"
              >
                Read full case →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
