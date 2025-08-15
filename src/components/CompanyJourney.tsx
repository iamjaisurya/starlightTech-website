import React from 'react';
import { Rocket, Users, Award, Globe, Building, TrendingUp } from 'lucide-react';

const CompanyJourney: React.FC = () => {
  const milestones = [
    {
      year: '2025',
      quarter: 'Q1',
      title: 'Foundation',
      description: 'Starlight Tech founded in Dubai Internet City with a vision to democratize cloud solutions',
      icon: Rocket,
      color: 'blue',
      achievements: ['Company established', 'Initial team of 5 experts', 'First office in Dubai']
    },
    {
      year: '2025',
      quarter: 'Q2',
      title: 'First Clients',
      description: 'Secured first 10 enterprise clients and launched core cloud services',
      icon: Users,
      color: 'green',
      achievements: ['10+ enterprise clients', 'Core services launched', 'UAE compliance achieved']
    },
    {
      year: '2025',
      quarter: 'Q3',
      title: 'Rapid Growth',
      description: 'Expanded team to 25 professionals and introduced AI-powered solutions',
      icon: TrendingUp,
      color: 'purple',
      achievements: ['25+ team members', 'AI solutions launched', '50+ active clients']
    },
    {
      year: '2025',
      quarter: 'Q4',
      title: 'Market Recognition',
      description: 'Achieved industry certifications and recognition as emerging cloud leader',
      icon: Award,
      color: 'yellow',
      achievements: ['Industry certifications', 'Cloud leader recognition', '100+ clients served']
    },
    {
      year: '2026',
      quarter: 'Q1-Q2',
      title: 'Regional Expansion',
      description: 'Expanding services across GCC countries with strategic partnerships',
      icon: Globe,
      color: 'indigo',
      achievements: ['GCC expansion', 'Strategic partnerships', 'Multi-region presence']
    },
    {
      year: '2026',
      quarter: 'Q3-Q4',
      title: 'Innovation Hub',
      description: 'Establishing Dubai as our innovation hub for next-generation cloud technologies',
      icon: Building,
      color: 'cyan',
      achievements: ['Innovation center', 'R&D investments', 'Future tech development']
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 border-blue-400 bg-blue-500',
    green: 'from-green-500 to-green-600 border-green-400 bg-green-500',
    purple: 'from-purple-500 to-purple-600 border-purple-400 bg-purple-500',
    yellow: 'from-yellow-500 to-yellow-600 border-yellow-400 bg-yellow-500',
    indigo: 'from-indigo-500 to-indigo-600 border-indigo-400 bg-indigo-500',
    cyan: 'from-cyan-500 to-cyan-600 border-cyan-400 bg-cyan-500',
  };

  return (
    <div className="py-12">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>
        
        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;
            const colorClass = colorClasses[milestone.color as keyof typeof colorClasses];
            
            return (
              <div key={index} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${colorClass.split(' ')[2]} bg-gradient-to-r ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]} z-10 shadow-lg`}></div>
                
                {/* Content card */}
                <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-${milestone.color}-400/50 transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]} flex items-center justify-center mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{milestone.year} {milestone.quarter}</div>
                        <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{milestone.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Key Achievements</h4>
                      <ul className="space-y-1">
                        {milestone.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-400 flex items-center">
                            <div className={`w-2 h-2 rounded-full ${colorClass.split(' ')[3]} mr-2`}></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyJourney;