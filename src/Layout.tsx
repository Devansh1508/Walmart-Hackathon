import React from 'react';
import Navbar from './components/Navbar/Page';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="mt-10">{children}</main>
    </div>
  );
};

export default Layout;
