import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsShopByOpen(false);
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
            {/* Mobile menu button and Search */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-brand hover:bg-gray-100 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
              <button onClick={() => setIsSearchOpen(true)} className="hidden sm:block">
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
                onClick={() => setIsSearchOpen(true)}
                className="sm:hidden"
              >
                <Search className="h-5 w-5 text-gray-600 hover:text-brand cursor-pointer transition-colors" />
              </button>
              
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

          {/* Desktop Navigation */}
          <nav className="border-t border-gray-200 hidden lg:block">
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

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
            <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl">
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center">
                  <img 
                    src="/rradiant-logo.jpg" 
                    alt="RRadiant Refletion Logo" 
                    className="h-8 w-8 mr-2"
                  />
                  <div>
                    <div className="text-lg font-light tracking-wide text-gray-900">
                      <span className="font-serif">RRADIANT REFLETION</span>
                    </div>
                    <div className="text-xs text-gray-600 italic font-light">
                      jewelry
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md text-gray-600 hover:text-brand hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="py-6">
                <div className="space-y-1">
                  <Link 
                    to="/" 
                    className="block px-6 py-3 text-gray-900 font-medium hover:text-brand hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    HOME
                  </Link>
                  
                  <div>
                    <button
                      onClick={() => setIsShopByOpen(!isShopByOpen)}
                      className="w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:text-brand hover:bg-gray-50 transition-colors font-medium"
                    >
                      <span>SHOP BY</span>
                      <ChevronDown className={`h-4 w-4 transform transition-transform ${isShopByOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isShopByOpen && (
                      <div className="bg-gray-50">
                        <Link
                          to="/earrings"
                          className="block px-12 py-3 text-sm text-gray-700 hover:text-brand hover:bg-gray-100 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          Earrings
                        </Link>
                        <Link
                          to="/bracelets"
                          className="block px-12 py-3 text-sm text-gray-700 hover:text-brand hover:bg-gray-100 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          Bracelets
                        </Link>
                        <Link
                          to="/necklaces"
                          className="block px-12 py-3 text-sm text-gray-700 hover:text-brand hover:bg-gray-100 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          Necklaces
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link 
                    to="/products" 
                    className="block px-6 py-3 text-gray-700 font-medium hover:text-brand hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    ALL PRODUCTS
                  </Link>
                  
                  <Link 
                    to="/track-order" 
                    className="block px-6 py-3 text-gray-700 font-medium hover:text-brand hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    TRACK ORDER
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className="block px-6 py-3 text-gray-700 font-medium hover:text-brand hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    CONTACT
                  </Link>

                  {state.user && state.user.email === 'admin@rradiant.com' && (
                    <Link 
                      to="/admin" 
                      className="block px-6 py-3 text-brand font-medium hover:text-brand-hover hover:bg-gray-50 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      ADMIN
                    </Link>
                  )}
                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-8 px-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <button
                      onClick={() => {
                        setIsWishlistOpen(true);
                        closeMobileMenu();
                      }}
                      className="flex items-center space-x-2 text-gray-600 hover:text-brand transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                      <span>Wishlist ({state.wishlist.length})</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => {
                        setIsCartOpen(true);
                        closeMobileMenu();
                      }}
                      className="flex items-center space-x-2 text-gray-600 hover:text-brand transition-colors"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      <span>Cart ({state.cart.length})</span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Wishlist isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;