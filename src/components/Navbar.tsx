'use client';

import { useState, useEffect, useContext } from 'react';
import { Button } from "@/components/ui/button"; 
import Link from "next/link";

import { UserNav } from './User-nav';
import { usePathname } from 'next/navigation';
import { AuthContext } from '@/app/contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useContext(AuthContext); 
  const pathname = usePathname(); 
  
  const isHomePage = pathname === "/"; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleContatoClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth', 
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ease-in-out
      ${isScrolled ? 'bg-black border-b-2 border-gray-600 py-2 opacity-40' : 'bg-slate-600 border-b-2 py-4 opacity-100'}
      ${isHomePage ? 'bg-transparent' : 'bg-slate-600 border-b-2 border-gray-300 py-2 opacity-90'}`}> 
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        
        <Link href="/" className="text-white font-bold text-3xl">
          PetSys ♥
        </Link>
        
        <ul className="flex space-x-6">
          <li>
            <Button 
              variant="ghost" 
              className={`text-white ${isScrolled ? 'opacity-75' : 'opacity-100'}`} 
            >
              <Link href="/">Home</Link>  
            </Button>
          </li>

   
          {isHomePage && (
            <li>
              <Button 
                variant="ghost" 
                className={`text-white ${isScrolled ? 'opacity-75' : 'opacity-100'}`} 
                onClick={handleContatoClick} 
              >
                Contato
              </Button>
            </li>
          )}

          <li>
            {!isAuthenticated ? (
              <Button variant="outline" className={`${isScrolled ? 'opacity-75' : 'opacity-100'}`} asChild>
                <Link href="/createacc">Login</Link>
              </Button>
            ) : (
              <UserNav /> 
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
