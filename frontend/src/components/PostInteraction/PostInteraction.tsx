import { ChatBubbleIcon, LoopIcon, HeartIcon } from '@radix-ui/react-icons';

import './styles.css';

// Radix Hover Card for popover when :hover

type PostInteractionType = {
  replys: number;
  reposts: number;
  likes: number;
};

function PostInteraction({ replys, reposts, likes }: PostInteractionType) {
  return (
    <section className="PostInteraction">
      <button>
        <ChatBubbleIcon />
        {!!replys && replys}
      </button>
      <button>
        <LoopIcon />
        {!!reposts && reposts}
      </button>
      <button>
        <HeartIcon />
        {!!likes && likes}
      </button>
    </section>
  );
}

export default PostInteraction;
