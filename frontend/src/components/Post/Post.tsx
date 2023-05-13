import Avatar, { AvatarData } from '../Avatar/Avatar';

import './styles.css';

type PostData = {
  data: {
    reposterDisplayName: string;
    user: {
      avatar: AvatarData;
      displayName: string;
      handle: string;
    };
    createdAt: string;
    content: {
      text: string;
      embed: string | null;
    };
    replysCount: number;
    likesCount: number;
  };
};

function Post({ data }: PostData) {
  const {
    reposterDisplayName,
    user,
    content,
    createdAt,
    replysCount,
    likesCount,
  } = data;

  const duration = Date.now() - new Date(createdAt).getUTCMilliseconds();

  const { src, alt } = user.avatar;

  return (
    <article className="Post">
      <Avatar src={src} alt={alt} />
      <section>
        <span>
          <a href="#">{reposterDisplayName}</a> reposted
        </span>
        <br />
        <span>
          {user.displayName} {`@${user.handle}`}
          {` - ${duration} milliseconds`}
        </span>
        <section className="Content">
          <p className="Text">{content.text}</p>
          {/* Embed */}
        </section>
        <div>
          <span>Replys count : {replysCount}</span>
          {', '}
          <span>Likes count : {likesCount}</span>
        </div>
      </section>
    </article>
  );
}

export default Post;
