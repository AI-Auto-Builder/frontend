'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { menuItems } from '@/data/layouts/menuItems';
import Link from 'next/link';
import MenuItems from './MenuItems';
import MobileMenuItems from './MobileMenuItems';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-white px-6 shadow-md'>
      <div className='flex h-16 items-center justify-between'>
        <Link
          href='/'
          className='transform text-xl font-bold duration-200 hover:scale-110'
        >
          LOGO
        </Link>

        <div className='hidden items-center space-x-10 pr-10 lg:flex'>
          {menuItems.map((item, idx) => (
            <MenuItems key={idx} item={item} />
          ))}
        </div>

        {/* 모바일 메뉴 버튼 */}
        <div className='lg:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='rounded-md p-2 text-gray-700 hover:text-blue-600 focus:outline-none'
          >
            {isMobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className='py-4 lg:hidden'>
          {menuItems.map((item, idx) => (
            <MobileMenuItems key={idx} item={item} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
