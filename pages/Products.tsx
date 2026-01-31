import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { Check, Download, Search } from 'lucide-react';
import SEO from '../components/SEO';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Heating' | 'Dehumidification'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      p.title.toLowerCase().includes(searchLower) || 
      p.description.toLowerCase().includes(searchLower) ||
      p.features.some(f => f.toLowerCase().includes(searchLower));
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-in fade-in duration-500">
      <SEO 
        title="Products" 
        description="Explore RYLT Energy's range of high-efficiency swimming pool heat pumps and industrial dehumidifiers designed for Indian conditions." 
      />
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-400 text-lg">Advanced thermal and humidity control solutions for every industry.</p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
            
            {/* Tabs */}
            <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {['All', 'Heating', 'Dehumidification'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? 'bg-rylt-green text-black shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rylt-green focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {isLoading ? (
          // Skeleton Loader
          <div className="space-y-24">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-12 items-start">
                 <div className="w-full lg:w-1/2">
                   <div className="h-64 bg-gray-200 rounded-2xl animate-pulse mb-6"></div>
                   <div className="flex gap-4">
                     <div className="h-12 bg-gray-200 rounded-lg animate-pulse flex-1"></div>
                     <div className="h-12 bg-gray-200 rounded-lg animate-pulse flex-1"></div>
                   </div>
                 </div>
                 <div className="w-full lg:w-1/2 space-y-4">
                   <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                   <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                   <div className="h-20 w-full bg-gray-200 rounded animate-pulse"></div>
                   <div className="h-40 w-full bg-gray-200 rounded animate-pulse"></div>
                 </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Product Images & Quick Actions */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl mb-6 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    loading="lazy"
                    width="800"
                    height="600"
                    className="w-full h-auto object-cover" 
                  />
                </div>
                <div className="flex gap-4">
                   <button className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                      <Download size={18} /> Brochure
                   </button>
                   <a href="#contact" className="flex-1 border-2 border-black text-black py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors text-center">
                      Enquire Now
                   </a>
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-1/2">
                 <span className="inline-block px-3 py-1 bg-green-100 text-rylt-green rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                   {product.category}
                 </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{product.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <Check className="text-rylt-green mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4">Ideal Applications</h3>
                  <div className="flex flex-wrap gap-2">
                     {product.applications.map((app, i) => (
                       <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-200">
                         {app}
                       </span>
                     ))}
                  </div>
                </div>

                {/* Specs Table */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 font-bold text-sm text-gray-700 uppercase">
                    Technical Specifications
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-white border-b border-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-gray-500 font-medium">Model</th>
                          {product.models[0].specs.map((s, i) => (
                             <th key={i} className="px-6 py-3 text-gray-500 font-medium whitespace-nowrap">{s.label}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {product.models.map((model, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-black">{model.name}</td>
                             {model.specs.map((s, j) => (
                               <td key={j} className="px-6 py-4 text-gray-600 whitespace-nowrap">{s.value}</td>
                             ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-600">No products found.</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;