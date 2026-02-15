import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
    </div>
  );
};
