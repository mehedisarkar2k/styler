import { useRoutes } from 'react-router-dom';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const AppRoutes = () => {
  return useRoutes([MainRoutes, AuthRoutes]);
};

export default AppRoutes;
