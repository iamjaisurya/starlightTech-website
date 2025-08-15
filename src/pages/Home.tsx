import React from 'react';
import { ArrowRight, Cloud, Shield, Zap, Globe, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Cloud className="w-20 h-20 text-blue-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Starlight Tech
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Dubai's Premier Cloud Solutions Provider
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses across the UAE with cutting-edge cloud infrastructure, 
              security, and innovation. Your journey to the digital future starts here in the heart of Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>Start Your Cloud Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 px-10 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            <img 
              src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Modern data center with servers and cloud infrastructure" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Enterprise-Grade Infrastructure</h2>
                <p className="text-xl text-gray-200 max-w-2xl">
                  State-of-the-art data centers in Dubai providing 99.9% uptime and lightning-fast performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-green-400 mb-2">6+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Starlight Tech?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leading the way in cloud innovation with enterprise-grade solutions tailored for the Middle East market.
              We combine global expertise with local understanding to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 animate-slide-up">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Enterprise Security</h3>
              <p className="text-gray-400">
                Advanced cybersecurity measures and compliance frameworks to protect your data and operations with UAE regulations.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Lightning Fast</h3>
              <p className="text-gray-400">
                High-performance cloud infrastructure with 99.9% uptime guarantee and ultra-low latency across the region.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Globe className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Global Reach</h3>
              <p className="text-gray-400">
                Strategically located in Dubai with global connectivity and deep regional expertise in Middle East markets.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Expert Team</h3>
              <p className="text-gray-400">
                Certified cloud professionals with extensive experience in enterprise deployments and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Core Services</h2>
            <p className="text-xl text-gray-400">Comprehensive cloud solutions for every business need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transform transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Infrastructure & Hosting</h3>
              <p className="text-gray-300 mb-4">Complete cloud infrastructure deployment and managed hosting solutions.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Cloud Infrastructure Deployment</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Managed Cloud Hosting</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transform transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Migration & Security</h3>
              <p className="text-gray-300 mb-4">Seamless cloud migration with enterprise-grade security measures.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Cloud Migration Services</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Cybersecurity & Compliance</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:scale-105 transform transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">DevOps & Recovery</h3>
              <p className="text-gray-300 mb-4">Advanced automation and comprehensive backup solutions.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />DevOps & Automation</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Data Backup & Recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
            <p className="text-xl text-gray-400">Trusted by leading companies across the UAE</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-white">Ahmed Al-Mansouri</h4>
                  <p className="text-gray-400 text-sm">CTO, Dubai Retail Group</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Starlight Tech transformed our entire infrastructure. Their expertise in cloud migration was exceptional, and the support team is always available."
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-white">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">CEO, Emirates E-Commerce</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The E-Commerce Cloud Accelerator solution boosted our performance by 300%. Outstanding service and technical expertise."
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-white">Omar Hassan</h4>
                  <p className="text-gray-400 text-sm">IT Director, Gulf Healthcare</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Their industry-specific healthcare framework helped us achieve full compliance while improving our operational efficiency."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-400/30 backdrop-blur-sm">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies who trust Starlight Tech for their cloud infrastructure needs. 
              Start your digital transformation journey today with Dubai's leading cloud experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Consultation
              </button>
              <button className="border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                View Our Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;