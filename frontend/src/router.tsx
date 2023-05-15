import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Root from './pages/Root';
import Login from './pages/Login/Login';
import Timeline from './pages/Timeline';
import AuthorFeed from './pages/AuthorFeed';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="login" element={<Login />} />
      <Route path="timeline" element={<Timeline />} />
      <Route path="authorfeed" element={<AuthorFeed />} />
    </Route>
  )
);

export default router;
