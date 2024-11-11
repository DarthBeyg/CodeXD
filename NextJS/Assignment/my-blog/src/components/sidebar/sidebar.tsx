'use client'
import { useState } from 'react';
import { Home, Menu } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-screen bg-gray-100 p-4 ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300`}>
      <div className="flex justify-center mb-4">
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Home className="mr-2" />
            Home
          </button>
        </Link>
      </div>
      <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full mb-4" onClick={toggleSidebar}>
        <Menu className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`flex flex-col ${isOpen ? 'visible' : 'invisible'} transition-opacity duration-300`}>
        <Link href="/route1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
            Route 1
          </button>
        </Link>
        <Link href="/route2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
            Route 2
          </button>
        </Link>
        <Link href="/route3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Route 3
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;