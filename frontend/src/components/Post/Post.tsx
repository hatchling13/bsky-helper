import { useNavigate, Link } from 'react-router-dom';
import AvatarLink from '../Avatar/AvatarLink';
import PostInteraction from '../PostInteraction/PostInteraction';

import type { AvatarData } from '../Avatar/Avatar';

import './styles.css';

export type PostData = {
  data: {
    id: string;
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
    id,
    reposterDisplayName,
    user,
    content,
    createdAt,
    replysCount,
    likesCount,
  } = data;

  const navigate = useNavigate();

  const duration = Date.now() - new Date(createdAt).getUTCMilliseconds();

  const { src, alt } = user.avatar;

  return (
    <article
      className="Post"
      tabIndex={0}
      onClick={() => navigate(`/post/${id}`)}
      onKeyDown={(event) => event.key === 'Enter' && navigate(`/post/${id}`)}
    >
      <section>
        <AvatarLink to="/authorfeed" src={src} alt={alt} />
      </section>
      <section className="PostContent">
        <span>
          <Link
            to="/authorfeed"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            {reposterDisplayName}
          </Link>{' '}
          reposted
        </span>
        <span>
          {user.displayName} {`@${user.handle}`}
          {` - ${duration} milliseconds`}
        </span>
        <section>
          <p className="PostText">{content.text}</p>
          {/* Embed */}
        </section>
        {/* Need repost count data */}
        <PostInteraction replys={replysCount} reposts={0} likes={likesCount} />
      </section>
    </article>
  );
}

export default Post;
