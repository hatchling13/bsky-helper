import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Root from './pages/Root';
import Login from './pages/Login/Login';
import Timeline from './pages/Timeline';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="login" element={<Login />} />
      <Route path="timeline" element={<Timeline />} />
    </Route>
  )
);

export default router;
