import Post from '../components/Post/Post';

import { postData } from '../placeholderData';

function Timeline() {
  return (
    <main>
      {postData.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </main>
  );
}

export default Timeline;
