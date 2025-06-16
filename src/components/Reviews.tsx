import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "The Bold Bloom Earrings are just gorgeous! 🌸✨ They have the perfect balance of elegance and statement style. The craftsmanship is top-notch, and they add a touch of sophistication to any outfit. I loved them so much that I ordered another pair!"
    },
    {
      id: 2,
      rating: 5,
      text: "The Classic Snake Necklace is just breathtaking! ✨ Its sleek and modern design adds the perfect touch of elegance to any outfit. The quality is exceptional, and it feels so luxurious to wear. A must-have for anyone who loves fine jewelry!"
    },
    {
      id: 3,
      rating: 5,
      text: "The Nova Kada is stunning! ✨ Its sleek and contemporary design adds a bold yet elegant touch to my look. The quality is amazing, and it's so comfortable to wear. Perfect for any occasion—definitely a must-have piece for jewelry lovers!"
    }
  ];

  const features = [
    {
      icon: '👥',
      title: 'CUSTOMER SUPPORT',
      description: 'Dedicated support for anytime you need.'
    },
    {
      icon: '✓',
      title: 'HIGH QUALITY BRAND',
      description: 'Effortless Quality for your peace of mind.'
    },
    {
      icon: '🚚',
      title: 'FAST SHIPPING',
      description: 'Quick and reliable shipping, every time.'
    },
    {
      icon: '🔒',
      title: 'SECURE PAYMENT',
      description: 'Safe and secure payments, guaranteed.'
    }
  ];

  return (
    <>
      {/* Features Section */}
      <section className="py-12 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-sm mb-2">{feature.title}</h3>
                  <p className="text-sm text-brand-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-8">
            {/* Left side - Title */}
            <div className="w-1/3 bg-black text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                WE LET OUR CUSTOMERS SPEAK FOR THEMSELVES.
              </h2>
              <p className="text-gray-300">
                Their love and trust inspire us to create jewelry. Don't just take our word for it—see what our happy customers have to say!
              </p>
            </div>

            {/* Right side - Reviews */}
            <div className="w-2/3 relative">
              <div className="flex space-x-6 overflow-hidden">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm min-w-[300px]">
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;