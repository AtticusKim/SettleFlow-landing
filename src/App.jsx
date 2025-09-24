import React from 'react';
import {
  BoltIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <BoltIcon className="w-6 h-6 text-brand-primary-600" />
              <span className="text-xl font-bold text-neutral-900">SettleFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200">Features</a>
              <a href="#benefits" className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200">Benefits</a>
              <a href="#contact" className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200">Contact</a>
              <button className="btn-primary">Get Demo</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-brand-primary-50 to-neutral-50 py-20">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Automate Natural Gas Settlement & Reconciliation
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Transform manual invoice processing into streamlined, exception-based workflows for commodity trading firms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Schedule Demo</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              See SettleFlow in Action
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Watch how our platform transforms manual settlement processes into automated workflows
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-neutral-100 rounded-card shadow-card border border-neutral-200 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-2">
                  Product Demo Video
                </h3>
                <p className="text-neutral-600 max-w-md mx-auto">
                  See how SettleFlow automates invoice processing, break detection, and settlement workflows
                </p>
                <button className="btn-primary mt-4">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Streamline Your Settlement Operations
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Built specifically for back-office settlement analysts and trading firms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <DocumentCheckIcon className="w-8 h-8 text-brand-primary-600 mb-4" />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Automated Invoice Ingestion
              </h3>
              <p className="text-neutral-600">
                OCR/AI-powered processing eliminates manual data entry and reduces errors by 95%
              </p>
            </div>

            <div className="card p-6">
              <ChartBarIcon className="w-8 h-8 text-brand-primary-600 mb-4" />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Intelligent Break Detection
              </h3>
              <p className="text-neutral-600">
                Advanced algorithms identify discrepancies and exceptions requiring analyst attention
              </p>
            </div>

            <div className="card p-6">
              <BoltIcon className="w-8 h-8 text-brand-primary-600 mb-4" />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Straight-Through Processing
              </h3>
              <p className="text-neutral-600">
                Automate routine settlements while maintaining full audit trails and compliance
              </p>
            </div>

            <div className="card p-6">
              <ShieldCheckIcon className="w-8 h-8 text-brand-primary-600 mb-4" />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Enterprise-Grade Privacy
              </h3>
              <p className="text-neutral-600">
                SOC2 Type 2 compliant AI systems powered by Microsoft Azure OpenAI with zero data retention and customer data isolation
              </p>
            </div>

            <div className="card p-6">
              <ClockIcon className="w-8 h-8 text-brand-primary-600 mb-4" />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                60% Time Reduction
              </h3>
              <p className="text-neutral-600">
                Free up analysts to focus on high-value exceptions and strategic analysis
              </p>
            </div>

            <div className="card p-6">
              <CpuChipIcon className="w-8 h-8 text-brand-primary-600 mb-4" />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                Enterprise Integration
              </h3>
              <p className="text-neutral-600">
                Seamless integration with existing ETRM systems and trading platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Transform Your Settlement Operations
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-semantic-success-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Reduce Processing Time</h3>
                    <p className="text-neutral-600">Cut settlement processing time from days to hours with automated workflows</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-semantic-success-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Improve Accuracy</h3>
                    <p className="text-neutral-600">Eliminate manual errors with intelligent validation and exception handling</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-semantic-success-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Ensure Compliance</h3>
                    <p className="text-neutral-600">Maintain complete audit trails and regulatory compliance automatically</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-semantic-success-50 rounded-card p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-metric font-bold text-neutral-900">95%</div>
                  <div className="text-sm text-neutral-600">Error Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-metric font-bold text-neutral-900">60%</div>
                  <div className="text-sm text-neutral-600">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-metric font-bold text-neutral-900">100%</div>
                  <div className="text-sm text-neutral-600">Audit Ready</div>
                </div>
                <div className="text-center">
                  <div className="text-metric font-bold text-neutral-900">24/7</div>
                  <div className="text-sm text-neutral-600">Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary-600">
        <div className="max-w-dashboard mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Settlement Operations?
          </h2>
          <p className="text-xl text-brand-primary-100 mb-8 max-w-2xl mx-auto">
            Join leading commodity trading firms already using SettleFlow to streamline their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-primary-600 font-medium py-2.5 px-6 rounded-button hover:bg-neutral-50 transition-colors duration-200">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white font-medium py-2.5 px-6 rounded-button hover:bg-brand-primary-700 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-neutral-900 py-12">
        <div className="max-w-dashboard mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BoltIcon className="w-6 h-6 text-brand-primary-600" />
                <span className="text-xl font-bold text-white">SettleFlow</span>
              </div>
              <p className="text-neutral-400">
                Automating natural gas settlement and reconciliation for commodity trading professionals.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-white mb-4">Product</h3>
              <div className="space-y-2">
                <a href="#features" className="block text-neutral-400 hover:text-white transition-colors duration-200">Features</a>
                <a href="#benefits" className="block text-neutral-400 hover:text-white transition-colors duration-200">Benefits</a>
                <a href="#" className="block text-neutral-400 hover:text-white transition-colors duration-200">Documentation</a>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-white mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block text-neutral-400 hover:text-white transition-colors duration-200">About</a>
                <a href="#" className="block text-neutral-400 hover:text-white transition-colors duration-200">Careers</a>
                <a href="#" className="block text-neutral-400 hover:text-white transition-colors duration-200">Privacy</a>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-white mb-4">Contact</h3>
              <div className="space-y-2 text-neutral-400">
                <p>sales@settleflow.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Schedule a demo to learn more</p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p className="text-neutral-400">© 2024 SettleFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;