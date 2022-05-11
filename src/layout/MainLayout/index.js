import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <h1>Hello Main Layout</h1>

      <Outlet />
    </div>
  );
};

export default MainLayout;
