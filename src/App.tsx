import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Clock, Users, TrendingUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

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
          elementOrSelector:"#my-cal-inline-30min",
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
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">
                Wayora AI
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors">
                Home
              </a>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="flex items-center text-slate-300 hover:text-white transition-colors"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg border border-slate-700">
                    <div className="py-1">
                      <a
                        href="/notary-landing"
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                      >
                        Notary Services
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/data-protection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Data Protection
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#consultation"
                className="cta-button"
              >
                Free Consultation
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-md mt-2">
                <a href="#home" className="block px-3 py-2 text-slate-300 hover:text-white">
                  Home
                </a>
                <a
                  href="/notary-landing"
                  className="block px-3 py-2 text-slate-300 hover:text-white"
                >
                  Notary Services
                </a>
                <a
                  href="/data-protection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-slate-300 hover:text-white"
                >
                  Data Protection
                </a>
                <a
                  href="#consultation"
                  className="block px-3 py-2 cta-button mt-4 text-center"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="section py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Smart Automation That Saves
              <span className="gradient-text">
                {" "}Hours Every Week
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your local business with AI-powered automation that works 24/7, handles client inquiries, 
              and grows your revenue while you focus on what matters most.
            </p>
            <a
              href="#consultation"
              className="cta-button-large"
            >
              Get Your Free Consultation
            </a>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="section py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Challenge Every Local Business Faces
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              You're not short on work, you're short on time. Every day, you're answering the same questions, 
              managing appointments, and handling admin tasks that keep you from serving clients.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="feature-card">
                <div className="text-blue-400 mb-4">
                  <Clock className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Repetitive Customer Questions</h3>
                <p className="text-slate-300">
                  "What documents do I need?" "Can I get an appointment today?" "How much do you charge?" 
                  The same questions, over and over.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-purple-400 mb-4">
                  <TrendingUp className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Missed Opportunities</h3>
                <p className="text-slate-300">
                  Potential clients calling after hours, messaging on weekends, or finding competitors 
                  who respond faster than you can.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-blue-500 mb-4">
                  <Users className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Administrative Overload</h3>
                <p className="text-slate-300">
                  Appointment confirmations, follow-ups, document collection, and review requests 
                  eating up your valuable time.
                </p>
              </div>
            </div>

            <a
              href="#consultation"
              className="cta-button-large"
            >
              Schedule Free Consultation
            </a>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="section py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Your AI-Powered Business Assistant
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Imagine a professional assistant that never sleeps, never takes breaks, and handles your clients 
              with the same care and expertise you do. That's what we build for local businesses like yours.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">24/7 AI Chat Assistant</h3>
                <ul className="text-slate-300 space-y-2 text-left">
                  <li>• Instant responses to common questions</li>
                  <li>• Custom-trained on your services and pricing</li>
                  <li>• Works on your website, WhatsApp, and social media</li>
                  <li>• Professional, friendly tone that matches your brand</li>
                </ul>
              </div>

              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Smart Email Automation</h3>
                <ul className="text-slate-300 space-y-2 text-left">
                  <li>• Appointment confirmations and reminders</li>
                  <li>• Document collection and checklists</li>
                  <li>• Follow-up sequences that build relationships</li>
                  <li>• Personalized messaging in your voice</li>
                </ul>
              </div>

              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">SMS & Review Management</h3>
                <ul className="text-slate-300 space-y-2 text-left">
                  <li>• Text appointment reminders and updates</li>
                  <li>• Automated review collection system</li>
                  <li>• Missing document notifications</li>
                  <li>• Thank you messages that build loyalty</li>
                </ul>
              </div>
            </div>

            <a
              href="#consultation"
              className="cta-button-large"
            >
              Book Your Free Demo
            </a>
          </div>
        </section>

        {/* Results Section */}
        <section className="section py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Results Speak for Themselves
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Our clients consistently report significant time savings, improved customer satisfaction, 
              and increased revenue within the first month of implementation.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="stats-card">
                <div className="stats-number">15+</div>
                <div className="text-slate-300">Hours Saved Weekly</div>
              </div>
              <div className="stats-card">
                <div className="stats-number">90%</div>
                <div className="text-slate-300">Faster Response Time</div>
              </div>
              <div className="stats-card">
                <div className="stats-number">40%</div>
                <div className="text-slate-300">More Reviews Generated</div>
              </div>
              <div className="stats-card">
                <div className="stats-number">60%</div>
                <div className="text-slate-300">Increase in Bookings</div>
              </div>
            </div>

            <a
              href="#consultation"
              className="cta-button-large"
            >
              Get Started Today
            </a>
          </div>
        </section>

        {/* Process Section */}
        <section className="section py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How We Make It Happen
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Our proven 3-step process gets you up and running with minimal disruption to your current operations. 
              No technical expertise required on your end.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="process-step">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Discovery & Strategy</h3>
                <p className="text-slate-300">
                  We analyze your current processes, identify automation opportunities, and create a custom 
                  solution blueprint for your business.
                </p>
              </div>

              <div className="text-center">
                <div className="process-step">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Build & Integration</h3>
                <p className="text-slate-300">
                  Our team develops and tests your AI assistant, integrates it with your existing systems, 
                  and ensures everything works seamlessly.
                </p>
              </div>

              <div className="text-center">
                <div className="process-step">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Launch & Optimize</h3>
                <p className="text-slate-300">
                  We deploy your automation, provide training, and continuously monitor and improve performance 
                  based on real-world usage.
                </p>
              </div>
            </div>

            <a
              href="#consultation"
              className="cta-button-large"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Local Businesses Choose Wayora AI
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Local Business Focused</h3>
                <p className="text-slate-300">
                  We understand the unique challenges of local service businesses. Our solutions are designed 
                  specifically for companies that depend on trust, relationships, and community reputation.
                </p>
              </div>

              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">No Tech Stress</h3>
                <p className="text-slate-300">
                  We handle all the technical complexity. You get a simple, reliable system that just works, 
                  with ongoing support to ensure everything runs smoothly.
                </p>
              </div>

              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">Proven ROI</h3>
                <p className="text-slate-300">
                  Our automation systems typically pay for themselves within 2-3 months through time savings, 
                  increased bookings, and improved customer retention.
                </p>
              </div>
            </div>

            <a
              href="#consultation"
              className="cta-button-large"
            >
              Claim Your Free Consultation
            </a>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="section py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Your Data & Privacy Matter
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Data Protection</h3>
                <p className="text-slate-300">
                  Your business data is protected with industry-standard encryption and secure data handling practices. 
                  We follow strict protocols to ensure your information remains confidential.
                </p>
              </div>

              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Privacy First</h3>
                <p className="text-slate-300">
                  We don't store sensitive client information unnecessarily and follow strict privacy protocols 
                  for all communications. Your clients' privacy is our priority.
                </p>
              </div>

              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">Compliance Ready</h3>
                <p className="text-slate-300">
                  Our systems are designed to help you maintain professional standards and compliance requirements 
                  specific to your industry and location.
                </p>
              </div>
            </div>

            <a
              href="#consultation"
              className="cta-button-large"
            >
              Discuss Security & Privacy
            </a>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="consultation" className="section py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join successful local businesses who've already automated their way to more time, more clients, and more revenue.
            </p>
            
            <a
              href="#cal-widget"
              className="cta-button-large mb-6"
            >
              Book Your Free Consultation Now
            </a>
            
            <p className="text-slate-400 text-sm">
              No obligation. No sales pressure. Just real solutions for your business.
            </p>
          </div>
        </section>

        {/* Cal.com Widget Section */}
        <section id="cal-widget" className="section py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Schedule Your Free Consultation
            </h2>
            <div className="cal-container">
              <div className="cal-embed-wrapper">
                <div 
                  id="my-cal-inline-30min"
                  className="cal-embed"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold gradient-text mb-2">
              Wayora AI
            </h3>
            <p className="text-slate-400">Smart Automation Solutions for Local Businesses</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a>
            <span className="text-slate-600">|</span>
            <a href="/notary-landing" className="text-slate-400 hover:text-white transition-colors">Notary Services</a>
            <span className="text-slate-600">|</span>
            <a href="/data-protection" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              Data Protection
            </a>
            <span className="text-slate-600">|</span>
            <a href="#consultation" className="text-slate-400 hover:text-white transition-colors">Free Consultation</a>
          </div>
          
          <div className="text-slate-500 text-sm">
            © 2025 Wayora AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;