import { useLoaderData } from 'react-router-dom';

import type { PostData } from '../components/Post/Post';
import PostDetail from '../components/PostDetail/PostDetail';

function PostDetailPage() {
  const loaded = useLoaderData() as PostData;

  return (
    <main>
      <PostDetail data={loaded.data} />
    </main>
  );
}

export default PostDetailPage;
