import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../services/mockData';
import { useCart } from '../context/CartContext';
import { Star, Check, Truck, ShieldCheck } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <Link to="/shop" className="text-gold-600 mt-4 inline-block hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
        addToCart(product, selectedSize);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Image */}
          <div className="space-y-4">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden bg-gray-100">
              <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <p className="text-sm text-gold-600 font-bold uppercase tracking-wide mb-2">{product.category}</p>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                   ))}
                </div>
                <span className="text-gray-500 text-sm">({product.rating} Rating)</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="border-t border-b border-gray-100 py-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                 <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                 {product.stock > 0 ? (
                   <span className="flex items-center text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded">
                     <Check className="h-4 w-4 mr-1" /> In Stock
                   </span>
                 ) : (
                   <span className="text-red-600 text-sm font-bold bg-red-50 px-2 py-1 rounded">Out of Stock</span>
                 )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <div className="flex space-x-2">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-md flex items-center justify-center border font-bold transition ${
                        selectedSize === size 
                          ? 'border-gold-500 bg-gold-50 text-gold-700' 
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <button 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-gray-900 text-white font-bold py-4 px-6 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
              >
                Add to Cart
              </button>
              <button className="flex-none p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500">
                <ShieldCheck className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-3 text-sm text-gray-500">
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-3 text-gray-400" />
                <span>Free delivery on orders over $100</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 mr-3 text-gray-400" />
                <span>2 year warranty on stitching</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;