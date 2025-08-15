import React from 'react';
import { Server, Shield, Database, Wrench, Lock, Vibrate as Migrate } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Cloud Infrastructure Deployment',
      description: 'Design, configure, and launch scalable cloud environments tailored for your business needs. Our expert team creates robust, high-performance infrastructure that grows with your organization.',
      features: ['Multi-cloud deployment', 'Auto-scaling configuration', 'Load balancing', 'Network security', 'Performance optimization', 'Cost management'],
      color: 'blue',
      detailedDescription: 'Complete cloud infrastructure setup and deployment tailored to your business needs. From virtual machines to container orchestration, we build scalable, reliable infrastructure that grows with your business.'
    },
    {
      icon: Database,
      title: 'Managed Cloud Hosting',
      description: 'High-performance, secure hosting with 24/7 monitoring to ensure maximum uptime. Focus on your business while we handle the technical complexities of cloud infrastructure management.',
      features: ['24/7 monitoring', 'Automated backups', 'Performance optimization', 'Security updates', 'Proactive maintenance', 'Expert support'],
      color: 'green',
      detailedDescription: '24/7 managed hosting services with proactive monitoring, maintenance, and support. Focus on your business while we handle the technical complexities of cloud infrastructure management.'
    },
    {
      icon: Migrate,
      title: 'Cloud Migration Services',
      description: 'Seamless transition from on-premise systems or other platforms to the cloud with zero downtime. Our expert team ensures minimal disruption and maximum data integrity throughout the migration process.',
      features: ['Assessment & planning', 'Zero downtime migration', 'Data integrity assurance', 'Post-migration support', 'Performance testing', 'Training & documentation'],
      color: 'purple',
      detailedDescription: 'Seamless migration of your existing applications and data to the cloud. Our expert team ensures minimal downtime and maximum data integrity throughout the migration process.'
    },
    {
      icon: Shield,
      title: 'Data Backup & Disaster Recovery',
      description: 'Automated backups and fast recovery solutions to safeguard your business data. Comprehensive backup solutions and disaster recovery planning to protect your critical business information.',
      features: ['Automated backups', 'Rapid recovery', 'Compliance ready', 'Multi-region storage', 'Recovery testing', 'Business continuity planning'],
      color: 'yellow',
      detailedDescription: 'Comprehensive backup solutions and disaster recovery planning to protect your critical business data. Automated backups with rapid recovery capabilities ensure business continuity.'
    },
    {
      icon: Lock,
      title: 'Cybersecurity & Compliance',
      description: 'Security audits, threat prevention, and compliance alignment with UAE and global regulations. Advanced security measures and compliance frameworks to protect your cloud infrastructure.',
      features: ['Threat detection', 'UAE compliance', 'Security audits', 'Identity management', 'Vulnerability assessments', 'Incident response'],
      color: 'red',
      detailedDescription: 'Advanced security measures and compliance frameworks to protect your cloud infrastructure. From threat detection to regulatory compliance, we ensure your data stays secure.'
    },
    {
      icon: Wrench,
      title: 'DevOps & Automation',
      description: 'Streamlined CI/CD pipelines, infrastructure-as-code, and automated scaling for faster innovation. DevOps expertise to accelerate your software delivery and deployment processes.',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated testing', 'Container orchestration', 'Monitoring & logging', 'Release management'],
      color: 'indigo',
      detailedDescription: 'Streamline your development and deployment processes with our DevOps expertise. CI/CD pipelines, infrastructure as code, and automated testing to accelerate your software delivery.'
    },
  ];

  const colorClasses = {
    blue: 'from-blue-600/20 to-blue-800/20 border-blue-400/30 text-blue-400',
    green: 'from-green-600/20 to-green-800/20 border-green-400/30 text-green-400',
    purple: 'from-purple-600/20 to-purple-800/20 border-purple-400/30 text-purple-400',
    yellow: 'from-yellow-600/20 to-yellow-800/20 border-yellow-400/30 text-yellow-400',
    indigo: 'from-indigo-600/20 to-indigo-800/20 border-indigo-400/30 text-indigo-400',
    red: 'from-red-600/20 to-red-800/20 border-red-400/30 text-red-400',
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive cloud solutions designed to empower your business with cutting-edge technology, 
            security, and scalability. From infrastructure deployment to ongoing management, we provide 
            everything you need for successful digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[1]} backdrop-blur-sm rounded-xl p-8 border ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[2]} hover:scale-105 transform transition-all duration-300`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <Icon className={`w-12 h-12 ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[3]}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Key Features</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                              <div className={`w-2 h-2 rounded-full ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[3].replace('text-', 'bg-')} mr-2`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <button className={`w-full ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[3].replace('text-', 'bg-')} hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Service Process</h2>
            <p className="text-xl text-gray-400">How we deliver exceptional cloud solutions</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-400">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Assessment</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive analysis of your current infrastructure and business requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-400">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Planning</h3>
              <p className="text-gray-400 text-sm">
                Custom solution design with detailed implementation roadmap and timeline.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-400">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Implementation</h3>
              <p className="text-gray-400 text-sm">
                Expert deployment with minimal disruption to your business operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <span className="text-2xl font-bold text-yellow-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Support</h3>
              <p className="text-gray-400 text-sm">
                Ongoing monitoring, maintenance, and 24/7 technical support.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-400/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the right combination of services for your business needs. 
              Get a free consultation and custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border border-blue-400 hover:bg-blue-400/10 text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;