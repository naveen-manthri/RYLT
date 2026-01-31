import React from 'react';
import { CUSTOMERS } from '../constants';
import { Building2, Factory, Warehouse, Trophy } from 'lucide-react';
import SEO from '../components/SEO';

const Customers: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <SEO 
        title="Customers & Case Studies" 
        description="See why major hotel chains, pharma giants, and food industries trust RYLT Energy for their thermal management needs." 
      />
      <div className="bg-gray-50 py-16">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Trusted Partners</h1>
            <p className="text-gray-600 text-lg">Delivering value to industries across India.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
           {CUSTOMERS.map((customer) => (
             <div key={customer.id} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center aspect-square text-center hover:shadow-md transition-shadow">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  {/* Generic icons for demo purposes since we don't have real logos */}
                  {customer.id === 1 && <Building2 size={32} className="text-gray-600" />}
                  {customer.id === 2 && <Factory size={32} className="text-gray-600" />}
                  {customer.id === 3 && <Warehouse size={32} className="text-gray-600" />}
                  {customer.id === 4 && <Trophy size={32} className="text-gray-600" />}
                </div>
                <h3 className="font-bold text-lg">{customer.name}</h3>
                <span className="text-xs text-gray-500 mt-2 uppercase tracking-wide">{customer.logo}</span>
             </div>
           ))}
        </div>

        <div className="bg-rylt-black text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="text-rylt-green font-bold tracking-wider uppercase mb-2 block">Case Study</span>
              <h2 className="text-3xl font-bold mb-6">Optimizing Chocolate Production</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                A leading confectionery manufacturer in Maharashtra faced issues with "Sugar Bloom" during the monsoon season. 
                By installing RYLT Industrial Dehumidifiers (DR900 series), they maintained a constant humidity of 50% RH, 
                eliminating product rejection and saving ₹20 Lakhs annually in waste reduction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-700 pt-8">
                <div>
                   <p className="text-3xl font-bold text-rylt-green">50%</p>
                   <p className="text-gray-400 text-sm">Consistent RH maintained</p>
                </div>
                <div>
                   <p className="text-3xl font-bold text-rylt-green">ZERO</p>
                   <p className="text-gray-400 text-sm">Product Rejection</p>
                </div>
                <div>
                   <p className="text-3xl font-bold text-rylt-green">24/7</p>
                   <p className="text-gray-400 text-sm">Continuous Operation</p>
                </div>
              </div>
            </div>
             <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Customers;