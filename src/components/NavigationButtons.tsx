import React from 'react';
import { Twitter, ShoppingCart } from 'lucide-react';

const NavigationButtons: React.FC = () => {
  return (
    <>
      {/* X Community Button - Top Left */}
      <a 
        href="https://x.com/i/communities/1970113854479728699" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-6 left-6 z-20 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group border-2 border-yellow-400 hover:border-yellow-300"
      >
        <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Community</span>
      </a>

      {/* Buy BNBot Button - Top Right */}
      <a 
        href="https://four.meme/token/0xb71024e212a8263f08ee76fb183722d1f4894444" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-6 right-6 z-20 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group border-2 border-yellow-400 hover:border-yellow-300"
      >
        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span>Buy BNBot</span>
      </a>
    </>
  );
};

export default NavigationButtons;