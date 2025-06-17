import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <img 
                  src="/rradiant-logo.jpg" 
                  alt="RRadiant Refletion Logo" 
                  className="h-8 w-8 mr-2"
                />
                <div className="text-xl font-light tracking-wide text-gray-900">
                  <span className="font-serif">RRADIANT REFLETION</span>
                </div>
              </div>
              <div className="text-xs text-gray-600 italic font-light mb-4">
                jewelry
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-purple-600">✓</span>
                <span className="text-sm text-gray-700">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-600">✓</span>
                <span className="text-sm text-gray-700">Perfect For Gifting</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Contact Us</h4>
              <p className="text-sm text-gray-600">rradiantrefletion.customercare@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-gray-900 mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand transition-colors">Get In Touch</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand transition-colors">Shipping policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand transition-colors">Terms of Conditions</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand transition-colors">Contact information</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand transition-colors">Return and Refund policy</a></li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div className="col-span-1"></div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="font-medium text-gray-900 mb-4">INBOX TO RRADIANT REFLETION OFFICIAL</h4>
            <p className="text-sm text-gray-600 mb-6">
              Join RRADIANT REFLETION exclusive seller community and showcase your exquisite jewelry to a wider audience. Our platform is designed to provide a seamless selling experience with secure transactions, dedicated support, and a growing customer base.
            </p>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
              />
              <button className="w-full bg-brand text-white py-3 px-6 rounded-lg font-medium hover:bg-brand-hover transition-colors">
                SUBSCRIBE
              </button>
            </div>

            <div className="mt-6">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-brand hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-center space-x-6 opacity-70">
            {/* Visa */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" 
              alt="Visa" 
              className="h-8 object-contain"
            />
            
            {/* Mastercard */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" 
              alt="Mastercard" 
              className="h-8 object-contain"
            />
            
            {/* PayPal */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" 
              alt="PayPal" 
              className="h-8 object-contain"
            />
            
            {/* Google Pay */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/200px-Google_Pay_Logo.svg.png" 
              alt="Google Pay" 
              className="h-8 object-contain"
            />
            
            {/* PhonePe */}
            <img 
              src="https://logos-world.net/wp-content/uploads/2020/11/PhonePe-Logo.png" 
              alt="PhonePe" 
              className="h-8 object-contain"
            />
            
            {/* Paytm */}
            <img 
              src="https://logos-world.net/wp-content/uploads/2020/11/Paytm-Logo.png" 
              alt="Paytm" 
              className="h-8 object-contain"
            />
            
            {/* UPI */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/200px-UPI-Logo-vector.svg.png" 
              alt="UPI" 
              className="h-8 object-contain"
            />
            
            {/* Razorpay */}
            <img 
              src="https://razorpay.com/assets/razorpay-logo.svg" 
              alt="Razorpay" 
              className="h-8 object-contain"
            />
            
            {/* Cash on Delivery Icon */}
            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-600">COD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;