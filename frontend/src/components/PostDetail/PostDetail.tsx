import Avatar from '../Avatar/Avatar';

import type { PostData } from '../Post/Post';

import './styles.css';

function PostDetail({ data }: PostData) {
  const {
    reposterDisplayName,
    user,
    content,
    createdAt,
    replysCount,
    likesCount,
  } = data;

  const { src, alt } = user.avatar;

  return (
    <article className="PostDetail">
      <section className="DetailUser">
        <Avatar src={src} alt={alt} />
        <div>
          <span>
            <a href="#">{reposterDisplayName}</a> reposted
          </span>
          <br />
          <span>{user.displayName}</span>
          <br />
          <span>@{user.handle}</span>
        </div>
      </section>
      <section>
        <p>{content.text}</p>
        <section>{content.embed}</section>
        <span>{createdAt}</span>
        <section>
          <span>{replysCount} replys</span> <span>{likesCount} likes</span>
        </section>
      </section>
    </article>
  );
}

export default PostDetail;
