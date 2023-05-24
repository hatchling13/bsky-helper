import { ChatBubbleIcon, LoopIcon, HeartIcon } from '@radix-ui/react-icons';

import IconButton from '../IconButton/IconButton';

import './styles.css';
import type { MouseEvent } from 'react';

// Radix Hover Card for popover when :hover

type PostInteractionType = {
  replys: number;
  reposts: number;
  likes: number;
};

const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  event.stopPropagation();
  console.log('Clicked Interaction');
};

function PostInteraction({ replys, reposts, likes }: PostInteractionType) {
  return (
    <section className="PostInteraction">
      <IconButton handleClick={handleClick} label="replys" value={replys}>
        <ChatBubbleIcon />
      </IconButton>
      <IconButton handleClick={handleClick} label="reposts" value={reposts}>
        <LoopIcon />
      </IconButton>
      <IconButton handleClick={handleClick} label="likes" value={likes}>
        <HeartIcon />
      </IconButton>
    </section>
  );
}

export default PostInteraction;
