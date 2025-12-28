import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Code, Smartphone, Globe, Server, ArrowRight, Mail, Phone, MapPin, Clock, Users, Award, TrendingUp, Zap, Shield, Target } from 'lucide-react';

const QAAutomationWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('salesforce');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'salesforce',
      icon: <Code className="w-8 h-8" />,
      title: 'Salesforce Testing',
      description: '10 years of expertise in end-to-end Salesforce UI automation',
      features: ['Lightning & Classic UI', 'Apex Testing', 'Integration Testing', 'CPQ Automation']
    },
    {
      id: 'mobile',
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Testing',
      description: 'Cross-platform mobile automation for iOS, Android & Blackberry',
      features: ['Native Apps', 'Hybrid Apps', 'React Native', 'Real Device Testing']
    },
    {
      id: 'ecommerce',
      icon: <Globe className="w-8 h-8" />,
      title: 'E-Commerce Testing',
      description: 'Comprehensive testing for online retail platforms',
      features: ['Payment Gateway', 'Checkout Flow', 'Inventory Systems', 'Performance Testing']
    },
    {
      id: 'api',
      icon: <Server className="w-8 h-8" />,
      title: 'API Testing',
      description: 'RESTful service and API automation with 5 years expertise',
      features: ['REST APIs', 'GraphQL', 'SOAP Services', 'Microservices']
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { number: '500+', label: 'Projects Delivered', icon: <Target className="w-6 h-6" /> },
    { number: '99.9%', label: 'Test Coverage', icon: <Shield className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> }
  ];

  const expertise = [
    { area: 'Salesforce UI Testing', years: '10 Years', level: 100 },
    { area: 'Mobile Testing (iOS/Android)', years: '10 Years', level: 100 },
    { area: 'E-Commerce Testing', years: '10 Years', level: 100 },
    { area: 'API/REST Services', years: '5 Years', level: 85 }
  ];

  const benefits = [
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Faster Time-to-Market', desc: 'Reduce testing cycles by 70% with automation' },
    { icon: <Zap className="w-6 h-6" />, title: 'Cost Efficiency', desc: 'Lower testing costs while improving coverage' },
    { icon: <Shield className="w-6 h-6" />, title: 'Risk Mitigation', desc: 'Catch bugs early with continuous testing' },
    { icon: <Target className="w-6 h-6" />, title: 'Quality Assurance', desc: '99.9% accuracy with automated regression' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>QA Solutions</div>
                <div className={`text-xs ${scrolled ? 'text-gray-600' : 'text-blue-100'}`}>Testing Excellence</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className={`${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition`}>Services</a>
              <a href="#expertise" className={`${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition`}>Expertise</a>
              <a href="#benefits" className={`${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition`}>Benefits</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Get Started
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#expertise" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Expertise</a>
              <a href="#benefits" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Benefits</a>
              <a href="#contact" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-blue-200 text-sm font-medium">10+ Years of Testing Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              QA Automation<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Testing Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Expert manual and automated testing services for Salesforce, Mobile Apps, E-Commerce, and REST APIs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition flex items-center space-x-2 shadow-xl">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
                Explore Services
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex justify-center mb-3 text-blue-300">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive QA automation solutions tailored to your technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                onMouseEnter={() => setActiveService(service.id)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Decade of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team brings extensive experience across multiple domains, ensuring comprehensive quality assurance for your projects.
              </p>
              
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-gray-900">{item.area}</h3>
                      <span className="text-blue-600 font-bold">{item.years}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Testing Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">End-to-End Testing</h4>
                    <p className="text-blue-100">Complete user journey validation from login to checkout</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">UI Automation</h4>
                    <p className="text-blue-100">Selenium, Appium, Cypress for comprehensive UI testing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">API Testing</h4>
                    <p className="text-blue-100">REST, SOAP, GraphQL automated validation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Performance Testing</h4>
                    <p className="text-blue-100">Load, stress, and scalability testing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">CI/CD Integration</h4>
                    <p className="text-blue-100">Jenkins, GitLab, GitHub Actions integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deliver faster, reduce costs, and improve quality with our automation expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Industry-Leading Results</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our clients experience 70% faster release cycles, 50% cost reduction, and 99.9% test coverage
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">70%</div>
                <div className="text-blue-100">Faster Releases</div>
              </div>
              <div>
                <div className="text-4xl font-bold">50%</div>
                <div className="text-blue-100">Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold">99.9%</div>
                <div className="text-blue-100">Test Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technology <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-600">Tools and frameworks we master</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Selenium', 'Appium', 'Cypress', 'RestAssured', 'JMeter', 'Postman', 'Jenkins', 'Git', 'TestNG', 'Cucumber', 'Salesforce', 'React Native'].map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition border border-gray-200 hover:border-blue-300">
                <div className="text-lg font-semibold text-gray-900">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Let's Start Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Testing Journey</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get in touch with our team to discuss your QA automation needs and discover how we can help accelerate your release cycles.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@qasolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Testing Street, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your testing needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <span>{formStatus === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-center">
                    Message sent successfully! We will get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">QA Solutions</div>
                  <div className="text-xs text-gray-400">Testing Excellence</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Delivering world-class QA automation solutions for over a decade.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Salesforce Testing</a></li>
                <li><a href="#services" className="hover:text-white transition">Mobile Testing</a></li>
                <li><a href="#services" className="hover:text-white transition">E-Commerce Testing</a></li>
                <li><a href="#services" className="hover:text-white transition">API Testing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#expertise" className="hover:text-white transition">Expertise</a></li>
                <li><a href="#benefits" className="hover:text-white transition">Benefits</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div>contact@qasolutions.com</div>
                <div>+1 (555) 123-4567</div>
                <div>123 Testing Street<br/>Tech City, TC 12345</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 QA Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QAAutomationWebsite;