import { ChatBubbleIcon, LoopIcon, HeartIcon } from '@radix-ui/react-icons';

import IconButton from '../IconButton/IconButton';

import './styles.css';

// Radix Hover Card for popover when :hover

const reply = () => {
  console.log('Reply');
};

const repost = () => {
  console.log('Repost');
};

const like = () => {
  console.log('Like');
};

function DetailInteraction() {
  return (
    <section className="DetailInteraction">
      <IconButton handleInteraction={reply} label="" value={0}>
        <ChatBubbleIcon />
      </IconButton>
      <IconButton handleInteraction={repost} label="" value={0}>
        <LoopIcon />
      </IconButton>
      <IconButton handleInteraction={like} label="" value={0}>
        <HeartIcon />
      </IconButton>
    </section>
  );
}

export default DetailInteraction;
