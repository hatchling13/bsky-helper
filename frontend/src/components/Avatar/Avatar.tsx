import * as RadixAvatar from '@radix-ui/react-avatar';
import './style.css';

const placeholder = {
  src: 'https://placehold.co/128x128/png',
  alt: 'placeholder text',
};

function Avatar() {
  return (
    <RadixAvatar.Root className="AvatarRoot">
      <RadixAvatar.AvatarImage
        className="AvatarIamge"
        src={placeholder.src}
        alt={placeholder.alt}
      />
      <RadixAvatar.AvatarFallback className="AvatarFallback" delayMs={600}>
        {placeholder.alt}
      </RadixAvatar.AvatarFallback>
    </RadixAvatar.Root>
  );
}

export default Avatar;
