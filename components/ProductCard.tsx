import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group border border-slate-100">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-xs font-bold shadow-sm text-gray-800">
          {product.category}
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-medium text-gray-900 hover:text-gold-600 transition truncate w-48">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center bg-green-50 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold">
            <Star className="h-3 w-3 fill-current mr-1" />
            {product.rating}
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gold-500 hover:text-white transition"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;