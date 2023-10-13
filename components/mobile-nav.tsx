'use client';

import { Category } from '@/types';
import { Menu } from 'lucide-react';
import MobileMenuItem from './mobile-menu-item';
import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface MobileNavProps {
  data: Category[];
}

const MobileNav: React.FC<MobileNavProps> = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleMenuItemClick = (href: string) => {
    router.push(href); // Use router.push to navigate to the clicked route
    toggleOpen(); // Close the menu
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="p-3 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:bg-black hover:text-white transition"
          onClick={toggleOpen} // Toggle the menu on click
        >
          <Menu />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {routes.map((route) => (
              <MobileMenuItem
                key={route.href}
                onClick={() => handleMenuItemClick(route.href)}
                label={route.label}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
