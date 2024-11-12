'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-0 border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              
              <span className="font-semibold text-lg hidden sm:block">Volk's Personal Blog</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link 
              href="/tech" 
              className="text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              Tech Blogs
            </Link>
            <Link 
              href="/traveling" 
              className="text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              Travel Blogs
            </Link>
            <Link 
              href="/finance" 
              className="text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              Finance
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "sm:hidden",
        isOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
          <Link
            href="/route1"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Route 1
          </Link>
          <Link
            href="/route2"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Route 2
          </Link>
        </div>
      </div>
    </nav>
  )
}