import { Link } from 'react-router-dom';

import Avatar from './Avatar';

type AvatarLinkType = {
  to: string;
  src: string;
  alt: string;
};

function AvatarLink({ to, src, alt }: AvatarLinkType) {
  return (
    <Link
      to={to}
      onClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.key === 'Enter' && event.stopPropagation()}
    >
      <Avatar src={src} alt={alt} />
    </Link>
  );
}

export default AvatarLink;
