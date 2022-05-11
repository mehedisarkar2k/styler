import MainLayout from '../layout/MainLayout';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'home',
      element: <div>Home</div>,
    },
  ],
};

export default MainRoutes;
