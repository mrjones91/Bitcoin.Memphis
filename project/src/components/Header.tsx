import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://res.cloudinary.com/dijital-technologies/image/upload/v1731818858/BOOM/boomi.png" alt="BOOM Logo" className="h-12" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">About</a>
            <a href="#mission" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Mission</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Contact</a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="dark:text-white" /> : <Menu className="dark:text-white" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">About</a>
            <a href="#mission" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Mission</a>
            <a href="#projects" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Projects</a>
            <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}