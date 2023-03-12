import { IchildrenProps } from '@/types/init';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: IchildrenProps) {
  return (
    <div className="max-w-screen-2xl  mx-auto py-10 ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
