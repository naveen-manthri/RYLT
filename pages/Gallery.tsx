import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Maximize2, ZoomIn, X } from 'lucide-react';
import SEO from '../components/SEO';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter items
  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const categories = ['All', 'Heating', 'Dehumidification', 'Others'];

  return (
    <div className="animate-in fade-in duration-500 min-h-screen bg-white">
      <SEO 
        title="Project Gallery" 
        description="View our gallery of successful heat pump and dehumidifier installations across various industries in India." 
      />
      <div className="bg-rylt-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Gallery</h1>
          <p className="text-gray-400 text-lg">See our solutions in action.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-full space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3] bg-gray-100"
                onClick={() => setSelectedImage(item.src)}
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <span className="text-rylt-green text-xs font-bold uppercase tracking-wider mb-2">
                     {item.category}
                   </span>
                   <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                   <p className="text-white/80 text-sm mt-2 leading-relaxed">{item.description}</p>
                   <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all delay-100 hover:bg-white hover:text-black">
                    <ZoomIn size={20} />
                   </div>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <Maximize2 className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg font-medium">No images found for this category.</p>
            <button 
              onClick={() => setFilter('All')}
              className="mt-6 bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-rylt-green hover:text-black transition-colors"
            >
              View All Images
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center pointer-events-none">
             {/* Close Button - positioned relative to viewport or container */}
            <div className="absolute top-4 right-4 pointer-events-auto">
                <button 
                className="text-white/70 hover:text-white bg-black/50 hover:bg-black p-2 rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
                >
                <X size={32} />
                </button>
            </div>

            <img 
              src={selectedImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain pointer-events-auto"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;