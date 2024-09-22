'use client';

import { INavLinkProps } from '@/types/components/atoms/nav-link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ children, href }: INavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={
        isActive ? 'flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary'
          : 'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
