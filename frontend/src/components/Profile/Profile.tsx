import ProfileBackground from '../ProfileBackground/ProfileBackground';
import Avatar from '../Avatar/Avatar';

import './styles.css';

type ProfileData = {
  data: {
    displayName: string;
    handle: string;
    backgroundImage: {
      src: string;
      alt: string;
    };
    avatar: {
      src: string;
      alt: string;
    };
    followersCount: number;
    followingsCount: number;
    postsCount: number;
    bio: string;
    followedMe: boolean;
    isFollowing: boolean;
  };
};

function Profile({ data }: ProfileData) {
  const {
    displayName,
    handle,
    backgroundImage,
    avatar,
    followersCount,
    followingsCount,
    postsCount,
    bio,
    followedMe,
    isFollowing,
  } = data;

  return (
    <header className="Profile">
      <ProfileBackground
        backgroundImage={backgroundImage}
        displayName={displayName}
      />
      <div className="ProfileAvatar">
        <Avatar src={avatar.src} alt={avatar.alt} />
      </div>
      <section className="ProfileContent">
        <div className="ProfileMenu">
          {/* Menu */}
          {/* 1. not followed 2. followed 3. self */}
          {isFollowing ? <button>Followed</button> : <button>Follow</button>}
        </div>
        <div className="ProfileIdentifier">
          <span>{displayName}</span>
          <span>{`@${handle}`}</span>
        </div>
        {/* followedMe && 'Followed me' */}
        <div className="ProfileCounts">
          <span>{`${followersCount} followers`}</span>
          <span>{`${followingsCount} followings`}</span>
          <span>{`${postsCount} posts`}</span>
        </div>
        <p>{bio}</p>
      </section>
    </header>
  );
}

export default Profile;
