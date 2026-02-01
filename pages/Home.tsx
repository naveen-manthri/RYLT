import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, ThermometerSun, Zap, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import SEO from '../components/SEO';

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/id/195/1920/1080',
    title: <span>Redefine Your Life <br/> With <span className="text-rylt-green">Technology</span></span>,
    description: "Pioneering sustainable heating and dehumidification solutions. Engineered in India for global standards of efficiency and reliability.",
    primaryCta: { text: "Explore Products", link: "/products" },
    secondaryCta: { text: "Contact Sales", link: "/contact" }
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/48/1920/1080', // Tech/Engineering vibe
    title: <span>Trusted by <span className="text-rylt-green">Industry Leaders</span></span>,
    description: "Proudly partnering with major pharmaceutical giants and luxury hotel chains. Delivering excellence in precision thermal management.",
    primaryCta: { text: "View Our Customers", link: "/customers" },
    secondaryCta: null
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/250/1920/1080', // Camera/Tech
    title: <span>New: <span className="text-rylt-green">RYLT-X Series</span></span>,
    description: "Announcing our new range of ultra-efficient pool heat pumps with 30% higher COP. The future of energy efficiency is here.",
    primaryCta: { text: "See What's New", link: "/products" },
    secondaryCta: null
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/28/1920/1080', // Nature/Forest
    title: <span>Go Green, <span className="text-rylt-green">Save More</span></span>,
    description: "Switch to RYLT heat pumps today. Reduce your carbon footprint while saving up to 70% on operational costs.",
    primaryCta: { text: "Get a Quote", link: "/contact" },
    secondaryCta: null
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <SEO 
        title="Home" 
        description="RYLT Energy - Pioneering sustainable heating and dehumidification solutions engineered in India for global efficiency standards." 
      />
      {/* Hero Carousel */}
      <section className="relative bg-rylt-black text-white h-[550px] md:h-[600px] overflow-hidden group">
        
        {/* Slides */}
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out w-full h-full flex items-center`}
            style={{ 
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <img 
                src={slide.image} 
                alt="Background" 
                className="w-full h-full object-cover opacity-40"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
              <div className={`max-w-2xl transform transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={slide.primaryCta.link} className="bg-rylt-green text-black hover:bg-white px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                    {slide.primaryCta.text} <ArrowRight size={20} />
                  </Link>
                  {slide.secondaryCta && (
                    <Link to={slide.secondaryCta.link} className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-bold transition-all text-center">
                      {slide.secondaryCta.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm z-30 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm z-30 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Next Slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx ? 'bg-rylt-green w-8' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose RYLT Energy?</h2>
            <div className="w-20 h-1 bg-rylt-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-rylt-green">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Energy Efficient</h3>
              <p className="text-gray-600">Save up to 70% on energy costs compared to traditional heating methods.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Precise Control</h3>
              <p className="text-gray-600">Advanced humidity and temperature control for industrial and leisure applications.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                <ThermometerSun size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Indian Climate Ready</h3>
              <p className="text-gray-600">Built to withstand extreme heat, monsoons, and diverse Indian weather conditions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliable Support</h3>
              <p className="text-gray-600">24/7 after-sales support and standard warranty on all our Make-in-India products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-rylt-green font-semibold uppercase tracking-wider text-sm">Our Innovations</span>
              <h2 className="text-3xl font-bold mt-2">Featured Products</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-rylt-green hover:text-black font-semibold transition-colors">
              View All Products <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase z-10">
                    {product.category}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-rylt-green transition-colors">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <Link to={`/products`} className="inline-block text-sm font-bold border-b-2 border-black pb-1 hover:border-rylt-green hover:text-rylt-green transition-colors">
                    View Specifications
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center text-rylt-green font-semibold">
              View All Products <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rylt-green py-20">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to upgrade your efficiency?</h2>
            <p className="text-lg mb-8 text-black/80">Get a customized quote for your swimming pool or industrial facility today.</p>
            <Link to="/contact" className="inline-block bg-black text-white hover:bg-gray-800 px-10 py-4 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1">
              Request a Quote
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;