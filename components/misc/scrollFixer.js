'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return <>{children}</>;
}
