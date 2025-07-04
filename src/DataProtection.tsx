import React from 'react';

function DataProtection() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">
                Wayora AI
              </h1>
            </div>
            <div>
              <a
                href="/"
                className="text-slate-300 hover:text-white transition-colors"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="section text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Data Protection
            </h1>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* What Is GDPR Section */}
            <section className="section">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                📘 What Is GDPR, And Why It Matters
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  The General Data Protection Regulation (GDPR) is a privacy law that applies to any business handling the personal data of individuals in the European Union (EU), whether you're based in the EU or not. It's considered one of the most robust data privacy laws in the world, built to give people control over how their data is collected, stored, and used.
                </p>
                <p>
                  Under GDPR, "personal data" includes any information that can identify a person, names, emails, phone numbers, IP addresses, even chat transcripts or appointment logs. If you're using automation to collect or process this kind of data (which most service-based businesses do), GDPR applies to you.
                </p>
                <p>
                  At Wayora AI, we've built everything from the ground up to support GDPR compliance, both for ourselves and for the businesses that use our platform.
                </p>
              </div>
            </section>

            {/* How Wayora AI Follows GDPR */}
            <section className="section">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                🛡️ How Wayora AI Follows GDPR
              </h2>
              <div className="space-y-6">
                <div className="feature-card">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">1️⃣ Consent-Driven Automation</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We ensure that any personal data collected via chatbot, form, or email flow is done with clear consent. Your clients won't be tricked into giving data, they'll always know why it's being asked, how it's used, and how to opt out.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">2️⃣ Data Minimization by Default</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We only collect the data necessary to perform the task at hand, nothing more. Whether it's booking an appointment, confirming a document checklist, or sending a reminder, we avoid storing unnecessary information.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">3️⃣ Full Control for Your Clients</h3>
                  <p className="text-slate-300 leading-relaxed">
                    If a client wants to access their data, update it, restrict how it's used, or delete it completely, we make that easy. You don't need to dig through settings or logs. Just email us, and we'll take care of it quickly and professionally.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">4️⃣ Encryption & Secure Storage</h3>
                  <p className="text-slate-300 leading-relaxed">
                    All data is encrypted both when it's moving (in transit) and when it's stored (at rest). Our systems run on secure, GDPR-compliant infrastructure with access controls, backups, and regular audits in place.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">5️⃣ Trusted Partners Only</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Any third-party service (like cloud hosting, analytics, or email providers) we work with is carefully vetted and bound by Data Processing Agreements. We don't partner with anyone who can't meet GDPR standards.
                  </p>
                </div>

                <div className="feature-card">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">6️⃣ Data Processing Agreement (DPA) Available</h3>
                  <p className="text-slate-300 leading-relaxed">
                    If your business needs to show GDPR compliance, we provide a ready-to-sign Data Processing Agreement (DPA) outlining how data is handled under the law. This is available to all Wayora AI users upon request.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Responsibility Section */}
            <section className="section">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                🔍 Your Responsibility, Simplified
              </h2>
              <p className="text-slate-300 leading-relaxed">
                As a business owner, GDPR says you're responsible for protecting your clients' data. With Wayora AI, we make that responsibility easier to fulfill, giving you the tools, infrastructure, and support to operate within the law, without slowing you down.
              </p>
            </section>

            {/* Privacy Policy */}
            <section className="section">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                📄 Privacy Policy
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                At Wayora AI, your privacy is not just a legal obligation, it's a core part of our product philosophy. This Privacy Policy explains how we collect, use, share, and protect your information when you interact with our website, services, and AI automation tools.
              </p>

              <div className="space-y-8">
                {/* Who We Are */}
                <div className="feature-card">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">1️⃣ Who We Are</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Wayora AI provides AI-driven automation for service-based businesses such as notaries, real estate professionals, and legal firms. Our mission is to help you save time and serve clients better, while keeping your data safe and secure.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    For the purposes of the General Data Protection Regulation (GDPR), Wayora AI acts as a Data Controller for website visitors and as a Data Processor when handling your clients' information through our platform.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="feature-card">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">2️⃣ Information We Collect</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">A. Information You Provide to Us</h4>
                    <ul className="text-slate-300 space-y-1 ml-6">
                      <li>• Contact details (name, email, phone) when you fill out forms or sign up for demos</li>
                      <li>• Business information (business name, website, services) when onboarding</li>
                      <li>• Support communications or feedback</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-3 text-slate-200">B. Information Collected Automatically</h4>
                    <ul className="text-slate-300 space-y-1 ml-6">
                      <li>• Log data (IP address, browser type, time of access)</li>
                      <li>• Usage data (pages visited, features used)</li>
                      <li>• Cookies and tracking technologies</li>
                    </ul>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    We do not collect sensitive personal data like government IDs, biometric data, or health information unless explicitly required for a service and with your consent.
                  </p>
                </div>

                {/* Continue with remaining sections... */}
                <div className="feature-card">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">📬 Contact Us</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    If you have questions or concerns about this policy, data handling, or anything else, we're here to help.
                  </p>
                  <div className="text-slate-300">
                    <p className="font-semibold">Wayora AI</p>
                    <p>
                      Email:{' '}
                      <a href="mailto:privacy@wayora.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                        privacy@wayora.ai
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="section text-center mt-16 pt-16 border-t border-slate-800">
            <a
              href="/"
              className="cta-button-large"
            >
              Return to Home
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold gradient-text mb-2">
              Wayora AI
            </h3>
            <p className="text-slate-400">Smart Automation Solutions for Local Businesses</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <a href="/" className="text-slate-400 hover:text-white transition-colors">Home</a>
            <span className="text-slate-600">|</span>
            <a href="/notary-landing" className="text-slate-400 hover:text-white transition-colors">Notary Services</a>
            <span className="text-slate-600">|</span>
            <a href="/data-protection" className="text-slate-400 hover:text-white transition-colors">
              Data Protection
            </a>
            <span className="text-slate-600">|</span>
            <a href="/#consultation" className="text-slate-400 hover:text-white transition-colors">Free Consultation</a>
          </div>
          
          <div className="text-slate-500 text-sm">
            © 2025 Wayora AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DataProtection;