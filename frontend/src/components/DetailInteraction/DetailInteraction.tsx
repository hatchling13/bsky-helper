import { ChatBubbleIcon, LoopIcon, HeartIcon } from '@radix-ui/react-icons';

import './styles.css';

// Radix Hover Card for popover when :hover

function DetailInteraction() {
  return (
    <section className="DetailInteraction">
      <button>
        <ChatBubbleIcon />
      </button>
      <button>
        <LoopIcon />
      </button>
      <button>
        <HeartIcon />
      </button>
    </section>
  );
}

export default DetailInteraction;
