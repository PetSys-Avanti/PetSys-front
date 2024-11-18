'use client';

import { Button } from "@/components/ui/button"; 
import Link from "next/link";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ease-in-out
      ${isScrolled ? 'bg-black border-b-2 border-gray-600 py-2 opacity-40' : 'bg-transparent py-4 opacity-100'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-white font-bold text-3xl">PetSys ♥</div>
        
        <ul className="flex space-x-6">
          <li>
            <Button variant="ghost" className={`text-white ${isScrolled ? 'opacity-75' : 'opacity-100'}`}>Home</Button>
          </li>
          <li>
            <Button variant="ghost" className={`text-white ${isScrolled ? 'opacity-75' : 'opacity-100'}`}>Meus Favoritos</Button>
          </li>
          <li>
            <Button variant="ghost" className={`text-white ${isScrolled ? 'opacity-75' : 'opacity-100'}`}>Contato</Button>
          </li>
          <li>
          <Button variant="outline" className={` ${isScrolled ? 'opacity-75' : 'opacity-100'}`}  asChild>
              <Link href="/createacc">Login</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
