import React from 'react';
import type { ReactNode } from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 72px)', background: '#f7f8fa' }}>{children}</main>
      <Footer />
    </>
  );
}; 