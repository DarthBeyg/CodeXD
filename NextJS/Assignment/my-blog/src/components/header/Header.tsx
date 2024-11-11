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
      <Link href="/" className="transform hover:scale-105 transition-transform ease-in-out">
        Volk's Personal Blog
      </Link>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-3">
        <Link href="/technology" className="transform hover:scale-105 py-2 px-4 rounded-md transition-transform ease-in-out">
          Tech Blogs
        </Link>
        <Link href="/traveling" className="transform hover:scale-105 py-2 px-4 rounded-md transition-transform ease-in-out">
          Traveling Blogs
        </Link>
        <Link href="/finance" className="transform hover:scale-105 py-2 px-4 rounded-md transition-transform ease-in-out">
          Financial Blogs
        </Link>
      </div>
    </header>
  );
};

export default Header;
