import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      <main className="pt-20"> {/* Добавьте этот класс */}
        {children}
      </main>
    </div>
  );
};

export default Layout;