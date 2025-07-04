import React, { useEffect } from 'react';
import { Clock, Users, TrendingUp, MessageCircle, Mail, Smartphone, CheckCircle, Shield, Zap, Scale, Target, BarChart3 } from 'lucide-react';

function NotaryLanding() {
  // Load smooth scroll behavior
  useEffect(() => {
    // Add smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
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
            <div className="flex items-center space-x-6">
              <a
                href="/notary-services"
                className="text-slate-300 hover:text-white transition-colors"
              >
                View Plans
              </a>
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
      <main>
        {/* Hero Section */}
        <section className="section py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Automation for Your
              <span className="gradient-text">
                {" "}Notary Business
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop answering the same questions over and over. Let our smart automation handle client inquiries, 
              appointments, and follow-ups while you focus on what matters most, serving your clients professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/notary-services"
                className="cta-button-large"
              >
                See How It Works for Notaries
              </a>
              <a
                href="/notary-services#calendly-widget"
                className="cta-button-large"
              >
                Book Your Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="section py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Challenge Every Notary Faces
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="feature-card">
                <div className="text-blue-400 mb-4">
                  <MessageCircle className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Same Questions, Different Day</h3>
                <p className="text-slate-300">
                  "What documents do I need?" "Can I get an appointment today?" "How much do you charge?" 
                  "Is my overseas document accepted?" These questions consume hours of your day.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-purple-400 mb-4">
                  <Clock className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">After-Hours Missed Opportunities</h3>
                <p className="text-slate-300">
                  Potential clients calling at 9 PM, texting on weekends, or finding competitors 
                  who respond faster than you can.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-blue-500 mb-4">
                  <Users className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Administrative Overload</h3>
                <p className="text-slate-300">
                  Appointment confirmations, document collection reminders, follow-ups, and review requests. 
                  The admin work never ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="section py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Your Personal AI Assistant
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Imagine a professional assistant that works 24/7, never takes breaks, and handles your clients 
              with the same care and expertise you do.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="feature-card">
                <div className="text-blue-400 mb-4">
                  <MessageCircle className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">24/7 AI Chat Assistant</h3>
                <p className="text-slate-300">
                  Instant replies, custom-trained on notary processes, explains document requirements 
                  and procedures in plain language.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-purple-400 mb-4">
                  <Mail className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Smart Email Automation</h3>
                <p className="text-slate-300">
                  Appointment confirmations, document checklists, preparation reminders, 
                  and professional follow-ups that build trust.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-blue-500 mb-4">
                  <Smartphone className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500">SMS & Review Management</h3>
                <p className="text-slate-300">
                  Text reminders, document alerts, appointment updates, and automated 
                  Google review requests to grow your reputation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Experience Section */}
        <section className="section py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How Your Clients Experience The Magic
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="process-step">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3">Instant Response</h3>
                <p className="text-slate-300 text-sm">
                  AI answers queries at any hour, explains processes, provides pricing
                </p>
              </div>

              <div className="text-center">
                <div className="process-step">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3">Smart Booking</h3>
                <p className="text-slate-300 text-sm">
                  Client books directly, gets instant confirmation and preparation checklist
                </p>
              </div>

              <div className="text-center">
                <div className="process-step">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3">Automated Reminders</h3>
                <p className="text-slate-300 text-sm">
                  Email + SMS reminders with document checklist and location details
                </p>
              </div>

              <div className="text-center">
                <div className="process-step">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-3">Seamless Follow-up</h3>
                <p className="text-slate-300 text-sm">
                  Thank you message, document delivery, and Google review request
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Results That Transform Your Practice
            </h2>

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
                <div className="stats-number">60%</div>
                <div className="text-slate-300">More Google Reviews</div>
              </div>
              <div className="stats-card">
                <div className="stats-number">40%</div>
                <div className="text-slate-300">Increase in Bookings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Notaries Choose Wayora AI
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="feature-card">
                <div className="text-blue-400 mb-4">
                  <Scale className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Built for Legal Professionals</h3>
                <p className="text-slate-300">
                  Confidentiality, compliance, and professional standards built into every feature. 
                  We understand the unique requirements of notary work.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-purple-400 mb-4">
                  <Target className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">No Tech Stress</h3>
                <p className="text-slate-300">
                  We handle everything technical. You get a simple, reliable system that just works, 
                  with ongoing support to ensure everything runs smoothly.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-blue-500 mb-4">
                  <BarChart3 className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500">Proven ROI</h3>
                <p className="text-slate-300">
                  Our automation systems typically pay for themselves in 6-8 weeks through time savings, 
                  increased bookings, and improved client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="section py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <Shield className="h-10 w-10 inline-block mr-3 text-blue-400" />
              Data Protection
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your client data is protected with industry-standard encryption, privacy-first design, 
              and compliance-ready systems. We understand the confidential nature of notary work.
            </p>
            <a
              href="/data-protection"
              className="cta-button"
            >
              Learn About Our Security
            </a>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Free Demo Now
            </h2>
            <div className="flex items-center justify-center space-x-8 mb-8 text-slate-300">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>No sales pressure</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Real solutions for notary professionals</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/notary-services"
                className="cta-button-large"
              >
                See How It Works for Notaries
              </a>
              <a
                href="/notary-services#calendly-widget"
                className="cta-button-large"
              >
                Book Your Free Demo
              </a>
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
            <p className="text-slate-400">Smart Automation Solutions for Notary Professionals</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <a href="/" className="text-slate-400 hover:text-white transition-colors">Home</a>
            <span className="text-slate-600">|</span>
            <a href="/notary-services" className="text-slate-400 hover:text-white transition-colors">View Plans</a>
            <span className="text-slate-600">|</span>
            <a href="/data-protection" className="text-slate-400 hover:text-white transition-colors">
              Data Protection
            </a>
            <span className="text-slate-600">|</span>
            <a href="/notary-services#calendly-widget" className="text-slate-400 hover:text-white transition-colors">Free Demo</a>
          </div>
          
          <div className="text-slate-500 text-sm">
            © 2025 Wayora AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NotaryLanding;