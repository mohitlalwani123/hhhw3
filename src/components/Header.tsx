import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import Cart from './Cart';
import Wishlist from './Wishlist';
import SearchModal from './SearchModal';

const Header = () => {
  const { state, dispatch } = useAppContext();
  const [isShopByOpen, setIsShopByOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleUserClick = () => {
    if (state.user) {
      // If user is logged in, show user menu or logout
      const shouldLogout = window.confirm('Do you want to sign out?');
      if (shouldLogout) {
        dispatch({ type: 'SET_USER', payload: null });
      }
    } else {
      // If user is not logged in, show sign in modal
      dispatch({ type: 'TOGGLE_SIGNIN', payload: true });
    }
  };

  return (
    <>
      {/* Top banner */}
      <div className="bg-brand text-white text-center py-2 text-sm">
        GET YOUR JEWELRY FASTER THAN EVER! 
        <Link 
          to="/products"
          className="underline ml-2 hover:text-brand-light transition-colors"
        >
          Shop now
        </Link>
      </div>
      
      {/* Main header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Search */}
            <div className="flex items-center">
              <button onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5 text-gray-600 hover:text-brand cursor-pointer transition-colors" />
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="text-center">
              <div className="flex items-center justify-center mb-1">
                <img 
                  src="/rradiant-logo.jpg" 
                  alt="RRadiant Refletion Logo" 
                  className="h-8 w-8 mr-2"
                />
                <div className="text-xl font-light tracking-wide text-gray-900">
                  <span className="font-serif">RRADIANT REFLETION</span>
                </div>
              </div>
              <div className="text-xs text-gray-600 italic font-light">
                jewelry
              </div>
            </Link>

            {/* User actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleUserClick}
                className="relative"
                title={state.user ? `Signed in as ${state.user.name}` : 'Sign in'}
              >
                <User className={`h-5 w-5 transition-colors ${
                  state.user ? 'text-brand' : 'text-gray-600 hover:text-brand'
                }`} />
                {state.user && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </button>
              
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative"
              >
                <Heart className="h-5 w-5 text-gray-600 hover:text-brand cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-brand text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {state.wishlist.length}
                </span>
              </button>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingBag className="h-5 w-5 text-gray-600 hover:text-brand cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-brand text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {state.cart.length}
                </span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-gray-200">
            <div className="flex items-center justify-center space-x-8 py-4">
              <Link 
                to="/" 
                className="text-gray-900 font-medium hover:text-brand transition-colors border-b-2 border-transparent hover:border-brand pb-1"
              >
                HOME
              </Link>
              
              <div className="relative">
                <button
                  onClick={() => setIsShopByOpen(!isShopByOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-brand cursor-pointer transition-colors font-medium"
                >
                  <span>SHOP BY</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isShopByOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-50">
                    <Link
                      to="/earrings"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand transition-colors"
                      onClick={() => setIsShopByOpen(false)}
                    >
                      Earrings
                    </Link>
                    <Link
                      to="/bracelets"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand transition-colors"
                      onClick={() => setIsShopByOpen(false)}
                    >
                      Bracelets
                    </Link>
                    <Link
                      to="/necklaces"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand transition-colors"
                      onClick={() => setIsShopByOpen(false)}
                    >
                      Necklaces
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/products" 
                className="text-gray-700 font-medium hover:text-brand transition-colors"
              >
                ALL PRODUCTS
              </Link>
              
              <Link 
                to="/track-order" 
                className="text-gray-700 font-medium hover:text-brand transition-colors"
              >
                TRACK ORDER
              </Link>
              
              <Link 
                to="/contact" 
                className="text-gray-700 font-medium hover:text-brand transition-colors"
              >
                CONTACT
              </Link>

              {state.user && state.user.email === 'admin@rradiant.com' && (
                <Link 
                  to="/admin" 
                  className="text-brand font-medium hover:text-brand-hover transition-colors"
                >
                  ADMIN
                </Link>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Modals */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Wishlist isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;