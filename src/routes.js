import { HomePage } from './pages/home-page.jsx';
import { LoginPage } from './pages/login-page.jsx';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
];

export default routes;
