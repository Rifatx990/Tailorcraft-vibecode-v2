import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag, User as UserIcon, Menu, X, Scissors } from 'lucide-react';

const Layout: React.FC = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <Scissors className="h-8 w-8 text-gold-600 mr-2" />
              <div>
                <h1 className="text-xl font-serif font-bold text-gray-900 leading-none">Mehedi</h1>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Tailors & Fabrics</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-gold-600 transition">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-gold-600 transition">Shop Fabrics</Link>
              <Link to="/tailoring" className="text-gray-700 hover:text-gold-600 transition">Custom Tailoring</Link>
              
              {user ? (
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-gold-600">
                    <span className="mr-2">{user.name}</span>
                    <UserIcon className="h-5 w-5" />
                  </button>
                  <div className="absolute right-0 w-48 bg-white shadow-xl rounded-md py-2 hidden group-hover:block border border-gray-100 animate-fade-in">
                    <Link to={`/dashboard/${user.role}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Dashboard</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Logout</button>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-gold-600 font-medium">Login / Register</Link>
              )}

              <Link to="/cart" className="relative text-gray-700 hover:text-gold-600">
                <ShoppingBag className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <Link to="/cart" className="relative text-gray-700 mr-4">
                <ShoppingBag className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700">Home</Link>
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700">Shop</Link>
              <Link to="/tailoring" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700">Tailoring</Link>
              {user ? (
                <>
                  <Link to={`/dashboard/${user.role}`} onClick={() => setIsMobileMenuOpen(false)} className="text-gold-600 font-medium">My Dashboard</Link>
                  <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="text-red-600 text-left">Logout</button>
                </>
              ) : (
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-gold-600 font-medium">Login</Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                 <Scissors className="h-6 w-6 text-gold-500 mr-2" />
                 <span className="text-xl font-serif font-bold">Mehedi Tailors</span>
              </div>
              <p className="text-gray-400 text-sm max-w-sm">
                Blending traditional craftsmanship with modern style. We provide bespoke tailoring and premium fabrics to ensure you look your absolute best.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/shop" className="hover:text-gold-400">Shop Fabrics</Link></li>
                <li><Link to="/tailoring" className="hover:text-gold-400">Book Custom Tailoring</Link></li>
                <li><Link to="/dashboard/customer" className="hover:text-gold-400">Track Order</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>123 Tailor Street, Fashion City</li>
                <li>support@meheditailors.com</li>
                <li>+880 1234 567890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Mehedi Tailors And Fabrics. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;