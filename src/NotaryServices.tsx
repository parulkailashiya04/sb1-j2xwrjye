import React, { useEffect } from 'react';

function NotaryServices() {
  // Load Cal.com script
  useEffect(() => {
    // Check if Cal.com script is already loaded
    if (window.Cal) {
      initializeCal();
      return;
    }

    // Load Cal.com script using the exact embed code provided
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          let s = d.createElement("script");
          s.src = A; 
          d.head.appendChild(s); 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){ 
            cal.ns[namespace] = cal.ns[namespace] || api; 
            p(cal.ns[namespace], ar); 
            p(cal, ["initNamespace", namespace]); 
          } else p(cal, ar); 
          return; 
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    function initializeCal() {
      if (window.Cal) {
        window.Cal("init", "30min", {origin:"https://app.cal.com"});

        window.Cal.ns["30min"]("inline", {
          elementOrSelector:"#my-cal-inline-30min-notary",
          config: {"layout":"month_view"},
          calLink: "wayora-ai-swrean/30min"
        });

        window.Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      }
    }

    // Initialize immediately if Cal is available
    initializeCal();

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="section text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Notary Services Plans
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We provide tailored AI automation solutions for notary businesses. Our platform helps notaries handle client inquiries, manage appointments, collect documents, and send reminders, all automatically.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="section grid lg:grid-cols-3 gap-8 mb-16">
            {/* Starter Plan */}
            <div className="plan-card">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2 text-blue-400">
                  🟦 Starter Plan
                </h2>
                <div className="text-slate-400 text-sm">Essential automation features</div>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <strong>AI Chatbot:</strong> Replies to common questions like "what documents do I need?" or "where are you located?"
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <strong>Booking Help:</strong> Sends your Google Calendar or Calendly link to book
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <strong>Email Notifications:</strong> Sends a simple confirmation email when a booking is made
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <strong>Document Uploads:</strong> Links to Google Drive or Notion link
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <strong>Client Info Tracking:</strong> Booking details stored in a simple Google Sheet
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <div>
                    <strong>Support:</strong> Email support during business hours
                  </div>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="plan-card">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2 text-purple-400">
                  🟪 Pro Plan
                </h2>
                <div className="text-slate-400 text-sm">Advanced automation & communication</div>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <div>
                    <strong>AI Chatbot:</strong> Understands client questions better and collects details like name, service needed, etc.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <div>
                    <strong>Booking Help:</strong> Sends automatic email reminder for upcoming bookings
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <div>
                    <strong>Email Notifications:</strong> Sends booking confirmation emails and follow-ups with reschedule links
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <div>
                    <strong>SMS Reminders:</strong> Sends reminders via SMS, including reschedule links
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <div>
                    <strong>Document Uploads:</strong> Uploads documents in Google Drive or Notion link
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <div>
                    <strong>Review Requests:</strong> Sends automatic review request emails after each appointment
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <div>
                    <strong>Client Info Tracking:</strong> Searchable list of clients with booking history
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <div>
                    <strong>Workflow Automation:</strong> Basic flow (booking → reminder → review request)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <div>
                    <strong>Support:</strong> Email + limited WhatsApp support for quicker help
                  </div>
                </li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="plan-card">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2 text-slate-300">
                  ⬛ Premium Plan
                </h2>
                <div className="text-slate-400 text-sm">Complete automation solution</div>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>AI Chatbot:</strong> Custom replies in your tone, handles complex requests, follows logic (e.g. power of attorney booking)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>Booking Help:</strong> Smartly adjusts bookings to client's convenience
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>Email Notifications:</strong> Sends custom-branded emails and reminders that match your notary's branding
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>SMS Reminders:</strong> Sends branded SMS including reschedule links, client name, and signed doc alerts
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>Document Uploads:</strong> Uploads and organizes signed documents
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>Review Requests:</strong> Sends review requests via both email and SMS
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>Client Info Tracking:</strong> Smart dashboard with client trends, top services, and insights
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>Workflow Automation:</strong> Fully automated journey: inquiry → chatbot → booking → reminders → follow-up → review, no manual effort
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>Support:</strong> Priority support via email, WhatsApp, and onboarding setup assistance
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span>
                  <div>
                    <strong>Custom Integrations:</strong> Tailored integrations with tools you already use (within scope)
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="section text-center mb-16">
            <a
              href="#cal-widget"
              className="cta-button-large"
            >
              Get Your Free Consultation
            </a>
            <p className="text-slate-400 text-sm mt-4">
              Discuss which plan works best for your notary business
            </p>
          </div>

          {/* Cal.com Widget Section */}
          <section id="cal-widget" className="section py-20 px-4 bg-slate-800/30 rounded-lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Schedule Your Free Consultation
              </h2>
              <div className="cal-container">
                <div className="cal-embed-wrapper">
                  <div 
                    id="my-cal-inline-30min-notary"
                    className="cal-embed"
                  ></div>
                </div>
              </div>
            </div>
          </section>
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
            <a href="/notary-services" className="text-slate-400 hover:text-white transition-colors">Notary Services</a>
            <span className="text-slate-600">|</span>
            <a href="/data-protection" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
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

export default NotaryServices;