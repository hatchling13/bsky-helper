import DraftEditor from '../components/DraftEditor/DraftEditor';
import Post from '../components/Post/Post';

import { postData } from '../placeholderData';

function Timeline() {
  return (
    <main style={{ maxWidth: '600px' }}>
      {/* Placeholder style for wireframing */}
      <DraftEditor />
      {postData.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </main>
  );
}

export default Timeline;
