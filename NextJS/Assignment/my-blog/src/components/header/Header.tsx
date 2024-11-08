// ../components/Header.tsx
import React from 'react';
import { Nunito } from 'next/font/google'

const font = Nunito({ 
    weight: ['400', '500', '600', '700',],
    subsets: ['latin'],
  })

const Header: React.FC = () => {
  return (
    <header className={`text-black font-semibold text-3xl ${font.className} bg-[#fcd86b] p-2 flex flex-col md:flex-row justify-between items-center`}>
      <button className="transform hover:scale-105 motion-preset-slide-right motion-duration-500 motion-delay-500 mb-2 md:mb-0">
        Volk's Personal Blog
      </button>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-3">
        <button className="transform hover:scale-110 motion-preset-compress motion-delay-100 motion-duration-500 py-2 px-4 rounded-md">
          Tech Blogs
        </button>
        <button className="transform hover:scale-110 motion-preset-compress motion-delay-150 motion-duration-500 py-2 px-4 rounded-md">
          Traveling Blogs
        </button>
        <button className="transform hover:scale-110 motion-preset-compress motion-delay-200 motion-duration-500 py-2 px-4 rounded-md">
          Financial Blogs
        </button>
      </div>
    </header>
  );
};

export default Header;
