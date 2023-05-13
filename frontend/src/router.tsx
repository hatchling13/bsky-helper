import { createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import Login from './pages/Login';
import Timeline from './pages/Timeline';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'timeline',
        element: <Timeline />,
      },
    ],
  },
]);

export default router;
