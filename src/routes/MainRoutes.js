import MainLayout from '../layout/MainLayout';
import LandingPage from '../views/Home';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <LandingPage />,
    },
  ],
};

export default MainRoutes;
