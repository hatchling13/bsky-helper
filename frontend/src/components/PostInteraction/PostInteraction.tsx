import { ChatBubbleIcon, LoopIcon, HeartIcon } from '@radix-ui/react-icons';

import IconButton from '../IconButton/IconButton';

import './styles.css';

// Radix Hover Card for popover when :hover

type PostInteractionType = {
  replys: number;
  reposts: number;
  likes: number;
};

const reply = () => {
  console.log('Reply');
};

const repost = () => {
  console.log('Repost');
};

const like = () => {
  console.log('Like');
};

function PostInteraction({ replys, reposts, likes }: PostInteractionType) {
  return (
    <section className="PostInteraction">
      <IconButton handleInteraction={reply} label="replys" value={replys}>
        <ChatBubbleIcon />
      </IconButton>
      <IconButton handleInteraction={repost} label="reposts" value={reposts}>
        <LoopIcon />
      </IconButton>
      <IconButton handleInteraction={like} label="likes" value={likes}>
        <HeartIcon />
      </IconButton>
    </section>
  );
}

export default PostInteraction;
