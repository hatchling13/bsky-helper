import Post from './components/Post/Post';

import { data } from './placeholderData';

function App() {
  return (
    <>
      {data.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </>
  );
}

export default App;
