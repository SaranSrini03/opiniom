// components/Left.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const Left = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // For active menu highlight

  const menuItems = [
    { name: 'Home', icon: HomeIcon, href: '/' },
    { name: 'Explore', icon: HashtagIcon, href: '/explore' },
    { name: 'Notifications', icon: BellIcon, href: '/notifications' },
    { name: 'Messages', icon: InboxIcon, href: '/messages' },
    { name: 'Profile', icon: UserIcon, href: '/profile' },
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you want to logout?");
    if (confirmLogout) {
      console.log("User logged out");
      // Add your auth logout logic here
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Side Toggle Icon */}
      {/* Mobile Side Toggle Icon */}
      <div className="lg:hidden fixed top-6 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
  fixed lg:sticky top-0 left-0 h-screen flex flex-col p-4 bg-black z-40
  transform transition-transform duration-300 ease-in-out
  ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-64 lg:translate-x-0'}
  w-64
`}>

        {/* Logo */}
        <div className="mb-6 hidden lg:flex items-center justify-center">
          <h1 className="text-2xl font-bold text-white">Opiniom</h1>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 mt-4 lg:mt-0">
          <ul>
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} className="mb-3">
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-4 px-4 py-3 rounded-lg w-full text-left transition-all group
                      ${isActive ? 'bg-gray-700' : 'hover:bg-gray-800'}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                    <span className="text-white font-medium text-lg lg:text-base">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Compose Button - Desktop */}
        <div className="mb-4 hidden lg:block">
          <Link
            href="/compose"
            className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors flex justify-center text-lg"
          >
            + Post
          </Link>
        </div>

        {/* User Profile */}
        <div
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
          onClick={handleLogout}
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden lg:flex flex-col">
            <span className="text-white font-medium">Saran Srini</span>
            <span className="text-gray-400 text-sm">@saran</span>
          </div>
          <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white lg:ml-auto" />
        </div>
      </div>

      {/* Mobile Compose Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Link
          href="/compose"
          className="w-16 h-16 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center shadow-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <PencilSquareIcon className="h-7 w-7" />
        </Link>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Left;
