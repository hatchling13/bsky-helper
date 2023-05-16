import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';

import { postData } from '../placeholderData';

function Timeline() {
  return (
    <main style={{ maxWidth: '600px' }}>
      {/* Placeholder style for wireframing */}
      <NewPost />
      {postData.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </main>
  );
}

export default Timeline;
