import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Ruler, Truck } from 'lucide-react';
import { MOCK_PRODUCTS } from '../services/mockData';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 h-[600px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1594938298603-c8148c47e356?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Tailor working" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">
            Bespoke Tailoring & <br /> Premium Fabrics
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
            Experience the art of perfect fit. From ready-to-wear classics to custom-tailored masterpieces, 
            Mehedi Tailors brings your style to life.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/tailoring" 
              className="px-8 py-3 bg-gold-500 text-white font-bold rounded-md hover:bg-gold-600 transition flex items-center justify-center"
            >
              <Scissors className="mr-2 h-5 w-5" />
              Custom Tailoring
            </Link>
            <Link 
              to="/shop" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-gray-900 transition flex items-center justify-center"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Scissors className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Tailoring</h3>
              <p className="text-gray-600">Over 20 years of experience in crafting perfectly fitted suits and traditional attire.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-600">
                <Ruler className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Perfect Fit Guarantee</h3>
              <p className="text-gray-600">We offer free alterations if your custom garment doesn't fit exactly as you envisioned.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Standard delivery within 3-5 days. Express tailoring options available for urgent needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Featured Collections</h2>
              <p className="text-gray-500 mt-2">Discover our latest arrivals and premium fabrics.</p>
            </div>
            <Link to="/shop" className="text-gold-600 font-bold hover:text-gold-700 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif font-bold mb-6">Need a custom measurement?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Create your profile, save your measurements, and order custom-tailored clothes from anywhere. 
            Our expert tailors review every detail.
          </p>
          <Link 
            to="/tailoring" 
            className="inline-block px-10 py-4 bg-gold-500 text-white font-bold rounded shadow-lg hover:bg-gold-600 transition transform hover:-translate-y-1"
          >
            Start Tailoring Process
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;