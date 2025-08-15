import React from 'react';
import { Users, Award, MapPin, Target } from 'lucide-react';
import CompanyJourney from '../components/CompanyJourney';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Starlight Tech
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Founded in the heart of Dubai, we are pioneers in cloud technology, 
            dedicated to transforming businesses across the Middle East and beyond.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-gray-400 mb-4">
                Established in 2018 in Dubai, UAE, Starlight Tech emerged from a vision to democratize 
                enterprise-grade cloud solutions for businesses of all sizes. Our founders, experienced 
                technology professionals, recognized the growing need for reliable, secure, and scalable 
                cloud infrastructure in the rapidly evolving Middle East market.
              </p>
              <p className="text-gray-400 mb-4">
                From our state-of-the-art facilities in Dubai Internet City, we serve clients across 
                the GCC, Africa, and Asia, providing them with cutting-edge cloud solutions that drive 
                innovation and growth.
              </p>
              <p className="text-gray-400">
                Today, we stand as a trusted partner to over 500 companies, from ambitious startups 
                to Fortune 500 enterprises, helping them navigate their digital transformation journey 
                with confidence and success.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">6</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Journey Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Journey</h2>
            <p className="text-xl text-gray-400">From startup to Dubai's leading cloud solutions provider</p>
          </div>
          <CompanyJourney />
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
              <p className="text-gray-400 text-sm">
                Continuously pushing the boundaries of what's possible with cloud technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Partnership</h3>
              <p className="text-gray-400 text-sm">
                Building lasting relationships based on trust, transparency, and mutual success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Excellence</h3>
              <p className="text-gray-400 text-sm">
                Delivering superior quality in every solution, service, and interaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Local Expertise</h3>
              <p className="text-gray-400 text-sm">
                Deep understanding of Middle East market needs and regulatory requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Leadership Team</h2>
            <p className="text-xl text-gray-400">Experienced professionals driving our vision forward</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-blue-400/50 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Ahmed Al-Rashid</h3>
              <p className="text-blue-400 mb-3">Chief Executive Officer</p>
              <p className="text-gray-400 text-sm">
                Former VP of Cloud Solutions at a Fortune 500 company with 15+ years in enterprise technology.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-blue-400/50 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Sarah Johnson</h3>
              <p className="text-green-400 mb-3">Chief Technology Officer</p>
              <p className="text-gray-400 text-sm">
                Cloud architecture expert with extensive experience in scaling infrastructure for global enterprises.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-blue-400/50 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Omar Hassan</h3>
              <p className="text-purple-400 mb-3">Chief Operations Officer</p>
              <p className="text-gray-400 text-sm">
                Operations specialist with a proven track record of delivering exceptional customer experiences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;