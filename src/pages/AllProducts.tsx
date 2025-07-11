import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { products } from '../data/products';

const AllProducts = () => {
  const { state, dispatch } = useAppContext();
  const [selectedFilters, setSelectedFilters] = useState({
    collection: '',
    availability: '',
    priceRange: [0, 2000]
  });

  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const collections = [
    { name: 'Home', count: 0 },
    { name: 'Shop By', count: products.length },
    { name: 'All Products', count: products.length },
    { name: 'Track Order', count: 0 },
    { name: 'Contact', count: 0 }
  ];

  const toggleWishlist = (product: any) => {
    const isInWishlist = state.wishlist.find(item => item.id === product.id);
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Hidden on mobile, can be toggled */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">FILTER:</h3>
            </div>

            {/* Collection Filter */}
            <div className="border-b border-gray-200 pb-6">
              <button
                onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <h4 className="text-sm font-medium text-gray-900">COLLECTION</h4>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${isCollectionOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCollectionOpen && (
                <div className="mt-4 space-y-3">
                  {collections.map((collection) => (
                    <div key={collection.name} className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="collection"
                          className="sr-only"
                        />
                        <span className="text-sm text-gray-600 hover:text-brand cursor-pointer">
                          {collection.name}
                        </span>
                      </label>
                      <span className="text-sm text-gray-400">({collection.count})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Availability Filter */}
            <div className="border-b border-gray-200 pb-6">
              <button
                onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <h4 className="text-sm font-medium text-gray-900">AVAILABILITY</h4>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${isAvailabilityOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAvailabilityOpen && (
                <div className="mt-4 space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-sm text-gray-600">In stock ({products.filter(p => !p.soldOut).length})</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-sm text-gray-600">Out of stock ({products.filter(p => p.soldOut).length})</span>
                  </label>
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="pb-6">
              <button
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <h4 className="text-sm font-medium text-gray-900">PRICE</h4>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${isPriceOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPriceOpen && (
                <div className="mt-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">₹</span>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">₹</span>
                      <input
                        type="number"
                        placeholder="999.00"
                        className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => {
                const isInWishlist = state.wishlist.find(item => item.id === product.id);
                
                return (
                  <div key={product.id} className="group cursor-pointer">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                        {product.sale && (
                          <div className="absolute top-4 left-4 bg-brand text-white px-3 py-1 text-sm font-medium rounded z-10">
                            Sale
                          </div>
                        )}
                        {product.soldOut && (
                          <div className="absolute top-4 right-12 bg-red-500 text-white px-3 py-1 text-sm font-medium rounded z-10">
                            Sold Out
                          </div>
                        )}
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(product);
                          }}
                          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow z-10"
                        >
                          <Heart className={`h-4 w-4 transition-colors ${
                            isInWishlist ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'
                          }`} />
                        </button>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {!product.soldOut && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(product);
                            }}
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-hover transition-colors opacity-0 group-hover:opacity-100 flex items-center space-x-2"
                          >
                            <ShoppingBag className="h-4 w-4" />
                            <span>Add to Cart</span>
                          </button>
                        )}
                      </div>
                    </Link>
                    <div className="text-center">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-sm font-medium text-gray-900 mb-2 hover:text-brand transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">
                          Rs. {product.price.toLocaleString()}.00
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            Rs. {product.originalPrice.toLocaleString()}.00
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-12">
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;