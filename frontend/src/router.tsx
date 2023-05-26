import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Root from './pages/Root';
import Login from './pages/Login/Login';
import Timeline from './pages/Timeline';
import AuthorFeed from './pages/AuthorFeed';
import PostDetailPage from './pages/PostDetailPage';

import { postDetailLoader, getPosts } from './loaders';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="login" element={<Login />} />
      <Route path="timeline" element={<Timeline />} loader={getPosts} />
      <Route path="authorfeed" element={<AuthorFeed />} />
      <Route
        path="post/:postId"
        element={<PostDetailPage />}
        loader={postDetailLoader}
      />
    </Route>
  )
);

export default router;
