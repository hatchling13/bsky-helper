import Profile from '../components/Profile/Profile';
import Post from '../components/Post/Post';

import { postData, profileData } from '../placeholderData';

function AuthorFeed() {
  return (
    <main style={{ width: '600px' }}>
      {/* Placeholder style for wireframing */}
      <Profile data={profileData} />
      <hr />
      {postData.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </main>
  );
}

export default AuthorFeed;
