import React from 'react';
import { COMPANY_INFO, TEAM } from '../constants';
import { Target, Eye, Users } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <SEO 
        title="About Us" 
        description="Learn about RYLT Energy's mission to redefine thermal solutions with Make-in-India innovation, reliability, and sustainable technology." 
      />
      {/* Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About RYLT Energy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Headquartered in Hyderabad, we are committed to pioneering sustainable and innovative thermal solutions.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-rylt-green">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full text-rylt-green">
                   <Eye size={32} />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {COMPANY_INFO.vision}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-black">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 p-3 rounded-full text-black">
                   <Target size={32} />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {COMPANY_INFO.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://picsum.photos/id/238/800/800" 
                alt="Engineering Excellence" 
                loading="lazy"
                width="800"
                height="800"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <span className="text-rylt-green font-bold tracking-wider uppercase text-sm">Who We Are</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Make-in-India Innovation</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  RYLT Energy specializes in the design, development, and manufacturing of energy-efficient heat pump systems and industrial dehumidifiers. Our products cater to a wide range of applications including swimming pools, residential, commercial, and industrial heating needs.
                </p>
                <p>
                  Optimized for diverse Indian climatic conditions, our products combine the reliability of global OEM components with the ingenuity of Indian engineering.
                </p>
                <p>
                  Whether it's ensuring the perfect temperature for a resort swimming pool or maintaining critical humidity levels in a pharmaceutical factory, RYLT Energy delivers precision, efficiency, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-gray-600 mt-4">The experts behind the technology.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md text-center group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    loading="lazy"
                    width="400"
                    height="400"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-rylt-green font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;