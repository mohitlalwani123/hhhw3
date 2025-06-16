import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, ChevronLeft, ChevronRight, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useAppContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-brand hover:text-brand-hover">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const isInWishlist = state.wishlist.find(item => item.id === product.id);
  const images = product.images || [product.image];

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const addToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-brand transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-brand transition-colors">Products</Link></li>
            <li>/</li>
            <li><Link to={`/${product.category}`} className="hover:text-brand transition-colors capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden group">
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </>
              )}
              {product.sale && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-brand to-brand-hover text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg">
                  Sale
                </div>
              )}
              {product.soldOut && (
                <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg">
                  Sold Out
                </div>
              )}
              
              {/* Image indicator dots */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      currentImageIndex === index 
                        ? 'border-brand shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">(24 reviews)</span>
                <span className="text-green-600 font-medium">✓ In Stock</span>
              </div>
              
              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-4xl font-bold text-brand">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Quick Features */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <label className="text-lg font-medium text-gray-900">Quantity:</label>
                  <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(quantity - 1)}
                      className="px-4 py-3 hover:bg-gray-50 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-3 border-x-2 border-gray-200 font-semibold min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={addToCart}
                  disabled={product.soldOut}
                  className={`flex-1 flex items-center justify-center space-x-3 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    product.soldOut
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-brand text-white hover:bg-brand-hover shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                  }`}
                >
                  <ShoppingBag className="h-6 w-6" />
                  <span>{product.soldOut ? 'Sold Out' : 'Add to Cart'}</span>
                </button>
                <button
                  onClick={toggleWishlist}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:border-brand group"
                >
                  <Heart className={`h-6 w-6 transition-colors ${
                    isInWishlist 
                      ? 'text-red-500 fill-current' 
                      : 'text-gray-600 group-hover:text-brand'
                  }`} />
                </button>
              </div>

              <button className="w-full bg-gray-900 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Service Features */}
            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand/10 p-3 rounded-lg">
                    <Truck className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Free Shipping</p>
                    <p className="text-sm text-gray-600">On orders over ₹1000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-brand/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Secure Payment</p>
                    <p className="text-sm text-gray-600">100% secure checkout</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-brand/10 p-3 rounded-lg">
                    <RotateCcw className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Easy Returns</p>
                    <p className="text-sm text-gray-600">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex space-x-8 border-b border-gray-200">
            {[
              { id: 'description', name: 'Description' },
              { id: 'specifications', name: 'Specifications' },
              { id: 'care', name: 'Care Instructions' },
              { id: 'reviews', name: 'Reviews (24)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-brand text-brand'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h3>
                <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                  <p>{product.description}</p>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Materials Used</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.materials.map((material, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <span className="font-medium text-gray-900">{material}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Dimensions & Weight</h4>
                    <div className="space-y-3">
                      {product.dimensions && (
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Dimensions:</span>
                          <span className="font-medium">{product.dimensions}</span>
                        </div>
                      )}
                      {product.weight && (
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Weight:</span>
                          <span className="font-medium">{product.weight}</span>
                        </div>
                      )}
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium capitalize">{product.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Materials</h4>
                    <div className="space-y-3">
                      {product.materials.map((material, index) => (
                        <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Material {index + 1}:</span>
                          <span className="font-medium">{material}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Care Instructions</h3>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                  <p className="text-amber-800 font-medium">
                    Proper care will ensure your jewelry maintains its beauty and lasts for years to come.
                  </p>
                </div>
                <div className="space-y-4">
                  {product.careInstructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  {/* Sample reviews */}
                  {[
                    {
                      name: "Priya Sharma",
                      rating: 5,
                      date: "2 weeks ago",
                      review: "Absolutely beautiful! The quality is exceptional and it looks even better in person. The packaging was also very elegant."
                    },
                    {
                      name: "Rahul Kumar",
                      rating: 5,
                      date: "1 month ago", 
                      review: "Perfect gift for my wife. She loved it! The craftsmanship is top-notch and delivery was very fast."
                    },
                    {
                      name: "Anita Singh",
                      rating: 4,
                      date: "1 month ago",
                      review: "Great product overall. The design is elegant and it's comfortable to wear. Would definitely recommend!"
                    }
                  ].map((review, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.review}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;