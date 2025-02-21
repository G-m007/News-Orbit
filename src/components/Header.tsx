'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <header className="bg-gray-900 shadow-lg mb-8">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
            News Orbit
          </Link>
          
          <div className="flex gap-6">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-300`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${isActive('/about') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-300`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-300`}
            >
              Contact
            </Link>
            
          </div>
        </div>
      </nav>
    </header>
  );
}