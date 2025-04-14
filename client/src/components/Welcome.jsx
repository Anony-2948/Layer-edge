import React, { useContext } from 'react';
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from './';
import { shortenAddress } from '../utils/shortenAddress';

// Custom Input component with improved styling
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <div className="relative w-full mb-3">
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="w-full px-4 py-3 bg-gray-800/30 rounded-lg text-white placeholder-gray-400 outline-none border border-gray-700 focus:border-blue-500 transition-all duration-300"
    />
  </div>
);

// Feature card component
const FeatureCard = ({ title, icon, description }) => (
  <div className="flex flex-col p-5 bg-gray-800/40 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full">
    <div className="flex items-center mb-3">
      <div className="text-blue-400 mr-3 text-xl bg-blue-500/10 p-2 rounded-lg">
        {icon}
      </div>
      <h3 className="text-white font-medium text-lg">{title}</h3>
    </div>
    <p className="text-gray-300 text-sm mt-2">{description}</p>
  </div>
);

// Platform stats component
const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
      {value}
    </p>
    <p className="text-gray-400 text-sm">{label}</p>
  </div>
);

const CryptoApp = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);
  
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {/* Hero Section - Modified with left-aligned text and right image */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <br />
          <br />
          <div className="flex flex-col md:flex-row items-center mb-12">
            {/* Left Text Content */}
           
            <div className="w-full md:w-1/2 text-left md:pr-8 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6 leading-tight mt-8 md:mt-0">
              LayerEdge - Powering Fast, Affordable Blockchain Transfers.
              </h2>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
              Built on Layer 2 technology, our platform enables instant Ethereum transfers with ultra-low fees.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                {!currentAccount ? (
                  <button 
                    type="button" 
                    onClick={connectWallet} 
                    className="flex items-center justify-center gap-2 py-3 px-8 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-lg text-white font-medium shadow-lg shadow-blue-600/30 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                    </svg>
                    Connect Wallet
                  </button>
                ) : (
                  <button 
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 px-8 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium transition-all duration-300"
                  >
                    Wallet Connected
                  </button>
                )}
                
                <button className="py-3 px-8 border border-gray-700 hover:border-blue-500 rounded-lg text-white font-medium transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              {/* Platform Stats */}
              
            </div>
            
            {/* Right Image Content - Simplified styling */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="w-full max-w-md">
                <img 
                  src="/image.png" 
                  alt="Crypto Transfer Illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <FeatureCard 
              title="Security First"
              description="Secured with advanced and multi-signature wallet to keep your assets safe."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>} 
            />
            <FeatureCard 
              title="Lightning Fast"
              description="Experience transfers with our optimized blockchain technology, confirming transactions in seconds not minutes."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>} 
            />
            <FeatureCard 
              title="Lowest Fees"
              description="Save money with our low transaction fees, optimized with layer 2 Technology."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>} 
            />
            <FeatureCard 
              title="Global Access"
              description="Send money to anyone, anywhere in the world without barriers. No more waiting for thirdparty middlemen."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>} 
            />
            <FeatureCard 
              title="Smart Contracts"
              description="Leverage Ethereum's smart contract capabilities for conditional transfers, scheduled payments, and automated transactions."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>} 
            />
            <FeatureCard 
              title="Full Transparency"
              description="Every transaction is recorded on the blockchain, providing complete transparency and auditability of all transfers."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>} 
            />
          </div>
        </div>
      </section>

      {/* Exchange Section with Card Form */}
      <section className="w-full py-8 ">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transfer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Ethereum</span> Now
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Send ETH instantly to any wallet address with just a few clicks. Fast, secure, and with minimal fees.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Ethereum Card - Left Side */}
            <div className="md:w-1/3 h-auto md:h-auto rounded-2xl p-5 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden shadow-xl shadow-blue-900/20">
              <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex justify-center items-center border border-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="mt-16 md:mt-24 mb-4 z-10 relative">
                <p className="text-white/70 text-sm font-light mb-2">
                  {currentAccount ? shortenAddress(currentAccount) : "Not Connected"}
                </p>
                <p className="text-white text-2xl font-semibold mb-1">
                  Ethereum
                </p>
                <p className="text-white/70 text-sm">
                  The world's leading programmable blockchain
                </p>
              </div>
              
              {/* Card Design Elements */}
              <div className="absolute -right-10 -top-14 w-40 h-40 rounded-full bg-white/10"></div>
              <div className="absolute -left-6 -bottom-10 w-32 h-32 rounded-full bg-white/10"></div>
            </div>
            
            {/* Transaction Form - Right Side with 2x2 Layout */}
            <div className="md:w-2/3 p-6 rounded-2xl bg-gray-800/30 backdrop-blur-md border border-gray-700/50 shadow-lg">
              <h3 className="text-xl text-white font-medium mb-6">Send Transaction</h3>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Row */}
                  <div>
                    <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                  </div>
                  <div>
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                  </div>
                  
                  {/* Second Row */}
                  <div>
                    <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                  </div>
                  <div>
                    <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                  </div>
                </div>
                
                <div className="w-full h-px bg-gray-700 my-4"></div>
                
                {isLoading ? (
                  <div className="flex justify-center">
                    <Loader />
                  </div>
                ) : (
                  <button 
                    type="button" 
                    onClick={handleSubmit} 
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center shadow-md shadow-blue-900/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Send Transaction
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoApp;