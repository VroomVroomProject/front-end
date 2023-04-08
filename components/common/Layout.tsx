import React from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

import { IchildrenProps } from '@/types/init';

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
