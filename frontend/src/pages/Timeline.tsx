import { useLoaderData } from 'react-router-dom';

import DraftEditor from '../components/DraftEditor/DraftEditor';
import Post from '../components/Post/Post';

import type { PostData } from '../components/Post/Post';

function Timeline() {
  const loaded = useLoaderData() as Array<PostData>;

  return (
    <main>
      <DraftEditor />
      {loaded.map((post) => (
        <Post key={post.data.id} data={post.data} />
      ))}
    </main>
  );
}

export default Timeline;
