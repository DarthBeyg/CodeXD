// ../components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { Nunito } from 'next/font/google'

const font = Nunito({ 
    weight: ['400', '500', '600', '700',],
    subsets: ['latin'],
  })

const Header: React.FC = () => {
  return (
    <header className={`text-black font-semibold text-2xl md:text-3xl ${font.className} bg-[#e0f2f7] p-2 flex flex-col md:flex-row justify-between items-center`}>
      <Link href="/" className="transform hover:scale-105 motion-preset-slide-right motion-duration-500 motion-delay-500 ">
        Volk's Personal Blog
      </Link>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-3">
        <Link href="/technology" className="transform hover:scale-105 motion-preset-compress motion-delay-100 motion-duration-500 py-2 px-4 rounded-md">
          Tech Blogs
        </Link>
        <Link href="/traveling" className="transform hover:scale-105 motion-preset-compress motion-delay-150 motion-duration-500 py-2 px-4 rounded-md">
          Traveling Blogs
        </Link>
        <Link href="/finance" className="transform hover:scale-105 motion-preset-compress motion-delay-200 motion-duration-500 py-2 px-4 rounded-md">
          Financial Blogs
        </Link>
      </div>
    </header>
  );
};

export default Header;
