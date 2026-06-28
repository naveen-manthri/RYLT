import React from 'react';
import { CUSTOMERS } from '../constants';
import { Building2, Factory, Warehouse, Trophy } from 'lucide-react';
import SEO from '../components/SEO';
import CaseStudy from '../components/CaseStudy';

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
             <div key={customer.id} className="bg-white p-8 rounded-xl border border-gray-300 border-1.8 shadow-sm flex flex-col items-center justify-center aspect-square text-center hover:shadow-md transition-shadow">
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

        <div className="space-y-12">
          <CaseStudy
            title="Enhancing Edible Sheet Quality for Cake Decoration"
            description="A leading cake decoration solutions provider, Mavee Foods, faced challenges with moisture absorption and sheet curling during edible sheet production. Seasonal humidity fluctuations were affecting print clarity and shelf life. By installing RYLT Industrial Dehumidifiers, Mavee Foods maintained a stable low-humidity environment, ensuring smooth sheets, sharper prints, and extended usability. This resulted in consistent product quality, reduced rejections, and improved customer satisfaction."
            stats={[
              { value: "45%", label: "RH consistently maintained" },
              { value: "ZERO", label: "Sheet deformation" },
              { value: "IMPROVED", label: "Print finish & shelf life" }
            ]}
          />

          <CaseStudy
            title="Energy-Efficient Pool Heating for All-Season Swimming"
            description="Dolphin Pools, a premium swimming pool solutions provider, required a reliable and cost-effective heating system to enable year-round pool usage while reducing energy consumption. By deploying RYLT Swimming Pool Heat Pumps, Dolphin Pools achieved fast heating, stable water temperatures, and significant power savings compared to conventional heating methods. The system operates efficiently even during cooler months, enhancing user comfort and operational reliability."
            stats={[
              { value: "60-70%", label: "Energy savings" },
              { value: "STABLE", label: "Consistent water temperature" },
              { value: "24/7", label: "Reliable pool operation" }
            ]}
          />

          <CaseStudy
            title="Preventing Chocolate Defects with Controlled Humidity"
            description="Druthi Foods, manufacturers of Gems Chocolates, were experiencing sugar bloom and surface defects due to high humidity during monsoon seasons. These issues led to increased product rejection and wastage. With the installation of RYLT Industrial Dehumidifiers, Druthi Foods stabilized the production environment, eliminating moisture-related defects. This ensured uniform chocolate appearance, improved shelf life, and reduced operational losses."
            stats={[
              { value: "40%", label: "RH maintained across production" },
              { value: "ZERO", label: "Sugar bloom defects" },
              { value: "REDUCED", label: "Waste & rework" }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;