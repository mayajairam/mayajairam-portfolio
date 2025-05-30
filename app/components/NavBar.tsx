'use client';

import React from 'react';

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="text-white font-bold text-lg tracking-tight hover:text-purple-400 transition">
          Maya Jairam
        </a>
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <a href="#skills" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="/MayaJairamResumeFeb2025.pdf" target="_blank" className="hover:text-white transition">Resume</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};
