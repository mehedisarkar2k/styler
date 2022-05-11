import AuthLayout from '../layout/AuthLayout';

const AuthRoutes = {
  path: '/auth',
  element: <AuthLayout />,
  children: [
    {
      path: '',
      element: (
        <div>
          <input type="text" placeholder="Email" />
        </div>
      ),
    },
    {
      path: 'login',
      element: (
        <div>
          <input type="text" placeholder="Email" />
        </div>
      ),
    },
    {
      path: 'register',
      element: (
        <div>
          <input type="text" placeholder="Register Email" />
        </div>
      ),
    },
  ],
};

export default AuthRoutes;
