import Post from '../components/Post/Post';

import { data } from '../placeholderData';

function Timeline() {
  return (
    <main>
      {data.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </main>
  );
}

export default Timeline;
