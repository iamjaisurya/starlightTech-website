import React from 'react';
import { Package, ShoppingCart, Brain, Users, Building } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Package,
      title: 'Smart Business Cloud Suite',
      subtitle: 'All-in-One Business Solution',
      description: 'An all-in-one package combining hosting, security, and collaboration tools specifically designed for SMEs. Everything you need to run your business efficiently in the cloud with integrated solutions.',
      features: [
        'Cloud hosting & storage',
        'Advanced security suite',
        'Team collaboration tools',
        'Business email & communication',
        'Data backup & recovery',
        '24/7 technical support',
        'Mobile device management',
        'Document management system'
      ],
      color: 'blue',
      popular: true,
      detailedDescription: 'Complete business infrastructure combining hosting, security, and collaboration tools for small and medium enterprises.'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Cloud Accelerator',
      subtitle: 'Scale Your Online Business',
      description: 'Optimized cloud solutions for online stores with fast load times and secure payment integrations. Complete e-commerce infrastructure solution with high-performance hosting, CDN, and analytics.',
      features: [
        'High-performance e-commerce hosting',
        'Global CDN integration',
        'Secure payment gateway setup',
        'Inventory management system',
        'Customer analytics dashboard',
        'Mobile optimization',
        'SEO optimization tools',
        'Multi-currency support'
      ],
      color: 'green',
      popular: false,
      detailedDescription: 'Comprehensive e-commerce infrastructure with performance optimization and secure payment processing for online businesses.'
    },
    {
      icon: Brain,
      title: 'AI & Analytics Cloud Platform',
      subtitle: 'Intelligent Business Insights',
      description: 'Harness the power of AI-driven analytics to gain actionable insights from your data. Advanced machine learning capabilities with comprehensive AI platform for data-driven decision making.',
      features: [
        'Machine learning models',
        'Big data processing',
        'Predictive analytics',
        'Real-time dashboards',
        'Custom AI solutions',
        'Data visualization tools',
        'Natural language processing',
        'Automated reporting'
      ],
      color: 'purple',
      popular: false,
      detailedDescription: 'Advanced AI and analytics platform providing machine learning capabilities and business intelligence for data-driven organizations.'
    },
    {
      icon: Users,
      title: 'Remote Work Enablement',
      subtitle: 'Empower Your Distributed Team',
      description: 'Secure virtual desktops, team collaboration tools, and VPN solutions for hybrid workplaces. Complete remote work infrastructure including productivity applications to keep your team connected.',
      features: [
        'Virtual desktop infrastructure',
        'Secure VPN access',
        'Video conferencing solutions',
        'File sharing & collaboration',
        'Project management tools',
        'Mobile device management',
        'Time tracking systems',
        'Digital workspace solutions'
      ],
      color: 'yellow',
      popular: false,
      detailedDescription: 'Comprehensive remote work infrastructure with secure access, collaboration tools, and productivity applications for distributed teams.'
    },
    {
      icon: Building,
      title: 'Industry-Specific Cloud Frameworks',
      subtitle: 'Tailored for Your Industry',
      description: 'Preconfigured solutions for sectors like retail, healthcare, and logistics in the UAE market. Specialized cloud solutions designed for specific industries with compliance and regulatory requirements built-in.',
      features: [
        'UAE industry compliance ready',
        'Specialized applications',
        'Regulatory reporting tools',
        'Custom integrations',
        'Sector-specific security',
        'Expert consultation',
        'Local market expertise',
        'Scalable architecture'
      ],
      color: 'indigo',
      popular: false,
      detailedDescription: 'Industry-tailored cloud frameworks designed for specific sectors including healthcare, finance, retail, and logistics with built-in compliance.'
    },
  ];

  const colorClasses = {
    blue: 'from-blue-600/20 to-blue-800/20 border-blue-400/30 text-blue-400 bg-blue-500',
    green: 'from-green-600/20 to-green-800/20 border-green-400/30 text-green-400 bg-green-500',
    purple: 'from-purple-600/20 to-purple-800/20 border-purple-400/30 text-purple-400 bg-purple-500',
    yellow: 'from-yellow-600/20 to-yellow-800/20 border-yellow-400/30 text-yellow-400 bg-yellow-500',
    indigo: 'from-indigo-600/20 to-indigo-800/20 border-indigo-400/30 text-indigo-400 bg-indigo-500',
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Cloud Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pre-configured, industry-tested cloud solutions that solve specific business challenges. 
            From comprehensive business suites to specialized industry frameworks, find the perfect fit for your needs.
            Each solution is tailored for the UAE market with local compliance and support.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const colorClass = colorClasses[solution.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]} backdrop-blur-sm rounded-xl p-8 border ${colorClass.split(' ')[2]} hover:scale-105 transform transition-all duration-300 ${solution.popular ? 'ring-2 ring-blue-400/50' : ''}`}
              >
                {solution.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <Icon className={`w-16 h-16 ${colorClass.split(' ')[3]} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold mb-2 text-white">{solution.title}</h3>
                  <p className={`text-sm font-semibold ${colorClass.split(' ')[3]} uppercase tracking-wider`}>
                    {solution.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {solution.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className={`w-2 h-2 rounded-full ${colorClass.split(' ')[4]} mr-3 flex-shrink-0`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className={`w-full ${colorClass.split(' ')[4]} hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-400">
              Tailored outcomes designed specifically for UAE businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Pre-Configured</h3>
              <p className="text-gray-400">
                Ready-to-deploy solutions that are tested and optimized for immediate implementation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">UAE Compliant</h3>
              <p className="text-gray-400">
                All solutions meet UAE regulatory requirements and local business standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Expert Support</h3>
              <p className="text-gray-400">
                Dedicated support team with deep knowledge of local market requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Not Sure Which Solution is Right for You?</h2>
            <p className="text-xl text-gray-400">
              Our experts can help you choose the perfect combination of solutions for your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Free Consultation</h3>
              <p className="text-gray-400">
                Schedule a free 30-minute consultation with our cloud experts to discuss your requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Custom Assessment</h3>
              <p className="text-gray-400">
                Get a detailed assessment of your current infrastructure and recommendations for optimization.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Tailored Proposal</h3>
              <p className="text-gray-400">
                Receive a customized proposal with pricing and implementation timeline for your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-400/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose from our proven solutions or let us create a custom package tailored specifically for your business needs.
              All solutions come with UAE compliance and local support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </button>
              <button className="border border-blue-400 hover:bg-blue-400/10 text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;