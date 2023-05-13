import * as RadixAvatar from '@radix-ui/react-avatar';
import './styles.css';

export type AvatarData = {
  src: string;
  alt: string;
};

function Avatar({ src, alt }: AvatarData) {
  return (
    <a href="#">
      <RadixAvatar.Root className="AvatarRoot">
        <RadixAvatar.AvatarImage className="AvatarIamge" src={src} alt={alt} />
        <RadixAvatar.AvatarFallback className="AvatarFallback" delayMs={600}>
          {alt}
        </RadixAvatar.AvatarFallback>
      </RadixAvatar.Root>
    </a>
  );
}

export default Avatar;
