import React, { useState, useEffect } from 'react';

const PasswordGate = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const CORRECT_PASSWORD = 'theswan2025';

  useEffect(() => {
    // Check if user is already authenticated (stored in sessionStorage)
    const auth = sessionStorage.getItem('swan_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('swan_authenticated', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-brand-dark font-serif text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-serif">
        <div className="max-w-md w-full px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-normal text-brand-dark mb-4">
              The Old Swan Beaconsfield
            </h1>
            <p className="text-lg text-brand-gray">
              Please enter the password to access the website
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-dark font-serif text-lg"
                autoFocus
              />
            </div>
            
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-brand-dark text-white rounded hover:bg-black transition-all duration-300 font-serif text-lg"
            >
              Enter Website
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-brand-gray">
            <p>Access restricted to authorized users only</p>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default PasswordGate;