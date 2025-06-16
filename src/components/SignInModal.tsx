import React, { useState } from 'react';
import { X, Mail, Lock, User, Shield } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const SignInModal = () => {
  const { state, dispatch } = useAppContext();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [adminPassword, setAdminPassword] = useState('');

  const handleClose = () => {
    dispatch({ type: 'TOGGLE_SIGNIN', payload: false });
    setShowAdminLogin(false);
    setFormData({ name: '', email: '', password: '' });
    setAdminPassword('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate authentication
    const user = {
      id: Date.now().toString(),
      email: formData.email,
      name: formData.name || formData.email.split('@')[0],
    };
    
    dispatch({ type: 'SET_USER', payload: user });
    dispatch({ type: 'TOGGLE_SIGNIN', payload: false });
    
    // Reset form
    setFormData({ name: '', email: '', password: '' });
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check admin password (in production, this should be more secure)
    if (adminPassword === 'admin123') {
      const adminUser = {
        id: 'admin',
        email: 'admin@rradiant.com',
        name: 'Admin',
      };
      
      dispatch({ type: 'SET_USER', payload: adminUser });
      dispatch({ type: 'TOGGLE_SIGNIN', payload: false });
      
      // Reset form
      setAdminPassword('');
      setShowAdminLogin(false);
    } else {
      alert('Invalid admin password!');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!state.isSignInOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {showAdminLogin ? 'Admin Login' : (isSignUp ? 'Create Account' : 'Sign In')}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {!showAdminLogin ? (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                      placeholder="Enter your full name"
                      required={isSignUp}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-white py-3 px-6 rounded-lg font-medium hover:bg-brand-hover transition-colors"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="ml-2 text-brand hover:text-brand-hover font-medium"
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  <Shield className="h-5 w-5" />
                  <span>Admin Access</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <form onSubmit={handleAdminLogin} className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-amber-600" />
                  <p className="text-sm text-amber-800 font-medium">
                    Admin access requires special authorization
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                    placeholder="Enter admin password"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Contact system administrator for access credentials
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <Shield className="h-5 w-5" />
                <span>Access Admin Panel</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAdminLogin(false)}
                className="text-brand hover:text-brand-hover font-medium text-sm"
              >
                ← Back to Regular Login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInModal;