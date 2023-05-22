import { useLoaderData } from 'react-router-dom';

import type { PostData } from '../components/Post/Post';
import PostDetail from '../components/PostDetail/PostDetail';
import DetailInteraction from '../components/DetailInteraction/DetailInteraction';

function PostDetailPage() {
  const loaded = useLoaderData() as PostData;

  return (
    <main>
      <PostDetail data={loaded.data} />
      <DetailInteraction />
      {/* Replys */}
    </main>
  );
}

export default PostDetailPage;
