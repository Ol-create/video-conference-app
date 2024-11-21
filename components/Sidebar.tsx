'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Link from Next.js

import { sidebarLinks } from '@/constants';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-col gap-6'>
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);
          return (
            <Link
              key={link.label}
              href={link.route}
              className={`flex gap-4 items-center p-4 rounded-lg justify-start ${
                isActive ? 'bg-blue-1' : ''
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
