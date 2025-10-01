import React, { useState } from 'react';
import {
  BoltIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

function App() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showVideoOverlay, setShowVideoOverlay] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [contactSubmitStatus, setContactSubmitStatus] = useState(null);

  const handlePlayVideo = () => {
    setShowVideoOverlay(false);
    const video = document.getElementById('demo-video');
    if (video) video.play();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        setTimeout(() => {
          setShowDemoForm(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;

    setIsContactSubmitting(true);

    try {
      const response = await fetch('/api/contact-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: contactMessage.trim() }),
      });

      if (response.ok) {
        setContactSubmitStatus('success');
        setContactMessage('');
        setTimeout(() => {
          setShowContactForm(false);
          setContactSubmitStatus(null);
        }, 2000);
      } else {
        setContactSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setContactSubmitStatus('error');
    }

    setIsContactSubmitting(false);
  };
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-100">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-900 rounded-md flex items-center justify-center">
                <BoltIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-light text-neutral-900">SettleFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#features" className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm font-medium">Platform</a>
              <a href="#benefits" className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm font-medium">Benefits</a>
              <a href="#contact" className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm font-medium">Contact</a>
              <button className="btn-primary px-6 py-2.5 text-sm">Request Demo</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-white py-24">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-6 leading-tight tracking-tight">
              Settlement Operations,
              <span className="font-medium"> Simplified</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Eliminate manual reconciliation processes with intelligent automation designed specifically for natural gas commodity trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="btn-primary px-8 py-4 text-base" onClick={() => setShowDemoForm(true)}>Request Demo</button>
              <button className="btn-secondary px-8 py-4 text-base" onClick={() => setShowContactForm(true)}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-25">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-neutral-900 mb-4">
              Platform Overview
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              See how our platform streamlines settlement operations from invoice ingestion to final reconciliation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-lg shadow-sm border border-neutral-100 aspect-video overflow-hidden">
              <video
                id="demo-video"
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/demo.mov" type="video/mp4" />
                <source src="/demo.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>

              {showVideoOverlay && (
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-6 h-6 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">
                      Interactive Platform Demo
                    </h3>
                    <p className="text-neutral-200 max-w-md mx-auto mb-6 leading-relaxed text-sm">
                      Watch how SettleFlow processes invoices, detects discrepancies, and manages exceptions
                    </p>
                    <button
                      onClick={handlePlayVideo}
                      className="bg-white text-neutral-900 px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-100 transition-colors shadow-lg"
                    >
                      Play Demo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              Core Capabilities
            </h2>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              Purpose-built automation tools designed for the unique requirements of natural gas settlement operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-neutral-100">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                <DocumentCheckIcon className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Automated Ingestion
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Process invoices automatically with 95% accuracy reduction in manual data entry
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-neutral-100">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                <ChartBarIcon className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Exception Detection
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Identify discrepancies and breaks requiring analyst review with intelligent algorithms
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-neutral-100">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                <BoltIcon className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Straight-Through Processing
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Automate routine settlements with complete audit trails and compliance tracking
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-neutral-100">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Enterprise Security
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                SOC2 compliant infrastructure with Microsoft Azure OpenAI and zero data retention
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-neutral-100">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                <ClockIcon className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                60% Faster Processing
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Reduce settlement time from days to hours, freeing analysts for strategic work
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-neutral-100">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                <CpuChipIcon className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                System Integration
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Connect seamlessly with existing ETRM systems and trading platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-neutral-25">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-8">
                Measurable Impact
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">Reduce Processing Time</h3>
                    <p className="text-neutral-500 leading-relaxed">Cut settlement cycles from days to hours through intelligent automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">Improve Accuracy</h3>
                    <p className="text-neutral-500 leading-relaxed">Eliminate manual errors with intelligent validation and exception handling</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">Ensure Compliance</h3>
                    <p className="text-neutral-500 leading-relaxed">Maintain complete audit trails and regulatory requirements automatically</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-neutral-100">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-neutral-900 mb-2">95%</div>
                  <div className="text-sm text-neutral-500">Error Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-neutral-900 mb-2">60%</div>
                  <div className="text-sm text-neutral-500">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-neutral-900 mb-2">100%</div>
                  <div className="text-sm text-neutral-500">Audit Ready</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-neutral-900 mb-2">24/7</div>
                  <div className="text-sm text-neutral-500">Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
              Coming Soon
            </div>
            <h2 className="text-3xl font-light text-neutral-900 mb-6">
              AI Agents Across Commodity Products
            </h2>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              Expanding beyond natural gas to bring intelligent automation across the entire commodity back-office ecosystem
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-neutral-25 p-8 rounded-lg border border-neutral-100">
                <h3 className="text-lg font-medium text-neutral-900 mb-4">
                  Power & Electricity
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Day-ahead and real-time market reconciliation with nodal pricing validation
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full">ISO Markets</span>
                  <span className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full">LMP Validation</span>
                </div>
              </div>

              <div className="bg-neutral-25 p-8 rounded-lg border border-neutral-100">
                <h3 className="text-lg font-medium text-neutral-900 mb-4">
                  Financial Derivatives
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Automated settlement for futures, options, and swaps across exchanges
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full">Futures</span>
                  <span className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full">Options</span>
                  <span className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full">Swaps</span>
                </div>
              </div>

              <div className="bg-neutral-25 p-8 rounded-lg border border-neutral-100">
                <h3 className="text-lg font-medium text-neutral-900 mb-4">
                  Physical Commodities
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Settlement processing for crude oil, refined products, and NGLs
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full">Crude Oil</span>
                  <span className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full">Refined Products</span>
                </div>
              </div>

              <div className="bg-neutral-25 p-8 rounded-lg border border-neutral-100">
                <h3 className="text-lg font-medium text-neutral-900 mb-4">
                  Environmental Products
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  Carbon credits, renewable energy certificates, and compliance tracking
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full">Carbon Credits</span>
                  <span className="text-xs bg-white border border-neutral-200 text-neutral-600 px-3 py-1 rounded-full">RECs</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 rounded-lg p-8 text-center">
              <h3 className="text-xl font-medium text-white mb-3">
                Specialized AI Agent Capabilities
              </h3>
              <p className="text-neutral-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Purpose-built agents for issue detection, resolution recommendations, compliance monitoring, and predictive analytics—all designed with domain expertise for each commodity product
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="text-sm bg-neutral-800 text-neutral-200 px-4 py-2 rounded-md">Issue Detection</span>
                <span className="text-sm bg-neutral-800 text-neutral-200 px-4 py-2 rounded-md">Smart Resolution</span>
                <span className="text-sm bg-neutral-800 text-neutral-200 px-4 py-2 rounded-md">Compliance Monitoring</span>
                <span className="text-sm bg-neutral-800 text-neutral-200 px-4 py-2 rounded-md">Predictive Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-900">
        <div className="max-w-dashboard mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join commodity trading firms streamlining their settlement operations with SettleFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowDemoForm(true)}
              className="bg-white text-neutral-900 font-medium py-4 px-8 rounded-md hover:bg-neutral-50 transition-colors duration-200"
            >
              Request Demo
            </button>
            <button
              onClick={() => setShowContactForm(true)}
              className="border border-neutral-600 text-white font-medium py-4 px-8 rounded-md hover:bg-neutral-800 transition-colors duration-200"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-white border-t border-neutral-100 py-16">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-neutral-900 rounded flex items-center justify-center">
                  <BoltIcon className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg font-light text-neutral-900">SettleFlow</span>
              </div>
              <p className="text-neutral-500 leading-relaxed">
                Streamlining natural gas settlement operations for commodity trading firms.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 mb-6">Platform</h3>
              <div className="space-y-3">
                <a href="#features" className="block text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm">Core Features</a>
                <a href="#benefits" className="block text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm">Benefits</a>
                <a href="#" className="block text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm">Documentation</a>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 mb-6">Company</h3>
              <div className="space-y-3">
                <a href="#" className="block text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm">About</a>
                <a href="#" className="block text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm">Security</a>
                <a href="#" className="block text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm">Privacy</a>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 mb-6">Contact</h3>
              <div className="space-y-3 text-neutral-500 text-sm">
                <p>hello@settleflow.com</p>
                <p>Schedule a demo to learn more</p>
                <button className="text-neutral-900 font-medium hover:underline text-left">Request Demo →</button>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-100 mt-12 pt-8 text-center">
            <p className="text-neutral-400 text-sm">© 2024 SettleFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showDemoForm && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-neutral-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium text-neutral-900">Request Demo</h2>
              <button
                onClick={() => setShowDemoForm(false)}
                className="text-neutral-500 hover:text-neutral-700"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-1">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-1">
                Tell us about your settlement operations
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent resize-none"
                placeholder="Volume, current process, pain points..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="text-green-600 text-sm font-medium">
                ✓ Thank you! We'll be in touch within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-red-600 text-sm font-medium">
                Something went wrong. Please try again.
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowDemoForm(false)}
                className="flex-1 btn-secondary py-2.5"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 btn-primary py-2.5 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
      )}

      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="p-6 border-b border-neutral-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-neutral-900">Send us a message</h2>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="p-6">
              <div className="mb-4">
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="What would you like to know about SettleFlow?"
                  rows={4}
                  className="w-full px-3 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent resize-none text-sm"
                  required
                />
              </div>

              {contactSubmitStatus === 'success' && (
                <div className="text-green-600 text-sm font-medium mb-4">
                  ✓ Message sent! We'll get back to you soon.
                </div>
              )}

              {contactSubmitStatus === 'error' && (
                <div className="text-red-600 text-sm font-medium mb-4">
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 btn-secondary py-2.5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isContactSubmitting || !contactMessage.trim()}
                  className="flex-1 btn-primary py-2.5 disabled:opacity-50"
                >
                  {isContactSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;