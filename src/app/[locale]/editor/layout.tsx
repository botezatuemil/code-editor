import React from 'react';

import Navbar from './_components/navigation/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ display: 'flex', width: '100vw', flexDirection: 'column' }}>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
