import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="mx-auto p-10 text-center">
      <h1 className="text-3xl">Auth Layout</h1>
      <p className="text-xl">Login Here</p>
      <hr />
      <br />

      <Outlet />
    </div>
  );
};

export default AuthLayout;
