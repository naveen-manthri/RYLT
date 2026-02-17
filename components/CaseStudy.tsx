import React from 'react';

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyProps {
  title: string;
  description: string;
  stats: CaseStudyStat[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, description, stats }) => {
  return (
    <div className="bg-rylt-black text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl">
        <span className="text-rylt-green font-bold tracking-wider uppercase mb-2 block">Case Study</span>
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-700 pt-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-rylt-green">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent hidden lg:block"></div>
    </div>
  );
};

export default CaseStudy;
