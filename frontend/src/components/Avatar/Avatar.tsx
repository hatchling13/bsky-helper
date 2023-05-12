import * as RadixAvatar from '@radix-ui/react-avatar';
import './styles.css';

type AvatarData = {
  data: {
    src: string;
    alt: string;
  };
};

function Avatar({ data }: AvatarData) {
  const { src, alt } = data;

  return (
    <RadixAvatar.Root className="AvatarRoot">
      <RadixAvatar.AvatarImage className="AvatarIamge" src={src} alt={alt} />
      <RadixAvatar.AvatarFallback className="AvatarFallback" delayMs={600}>
        {alt}
      </RadixAvatar.AvatarFallback>
    </RadixAvatar.Root>
  );
}

export default Avatar;
