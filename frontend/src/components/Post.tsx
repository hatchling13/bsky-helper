import Avatar from './Avatar/Avatar';

const placeholder = {
  reposterDisplayName: 'Jane Doe',
  user: {
    avatar: {
      src: 'https://placehold.co/128x128/png',
      alt: 'placeholder text',
    },
    displayName: 'John Doe',
    handle: 'johndoe.bsky.social',
  },
  createdAt: '2023-05-08T17:46:29+09:00', // convert to object when fetching?
  content: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\
    Nulla placerat congue eleifend.\n\
    Donec arcu risus, sollicitudin eget eleifend quis, molestie et libero.',
    embed: null,
  },
  replysCount: 0,
  likesCount: 0,
};

function Post() {
  const elapsedPlaceholder = '3m';
  const created = new Date(placeholder.createdAt);

  return (
    <article>
      <Avatar data={placeholder.user.avatar} />
      <section>
        <span>
          <a href="#">{placeholder.reposterDisplayName}</a> reposted
        </span>
        <br />
        <span>
          <a href="#">{placeholder.user.displayName}</a>{' '}
          <a href="#">{`@${placeholder.user.handle}`}</a>
          {` - ${elapsedPlaceholder}(${created.toString()})`}
        </span>
        <hr />
        {placeholder.content.text}
        <div>
          <span>Replys count : {placeholder.replysCount}</span>{' '}
          <span>Likes count : {placeholder.likesCount}</span>
          <br />
        </div>
      </section>
    </article>
  );
}

export default Post;
