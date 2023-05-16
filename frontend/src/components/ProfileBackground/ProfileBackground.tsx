import * as RadixDialog from '@radix-ui/react-dialog';
import * as RadixVisuallyHidden from '@radix-ui/react-visually-hidden';

import './styles.css';

type BackgroundImageData = {
  src: string;
  alt: string;
};

type ProfileBackgroundData = {
  backgroundImage: BackgroundImageData;
  displayName: string;
};

function ProfileBackground({
  backgroundImage,
  displayName,
}: ProfileBackgroundData) {
  const { src, alt } = backgroundImage;

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger className="DialogTrigger" asChild>
        <img src={src} alt={alt} />
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="DialogOverlay" />
        <RadixDialog.Content className="DialogContent">
          <RadixVisuallyHidden.Root asChild>
            <RadixDialog.Title>{`Profile picture of ${displayName}`}</RadixDialog.Title>
          </RadixVisuallyHidden.Root>
          <RadixVisuallyHidden.Root asChild>
            <RadixDialog.Description>{alt}</RadixDialog.Description>
          </RadixVisuallyHidden.Root>
          <img src={src} alt={alt} />
          {/* Close button for accessibility */}
          {/*
          <RadixDialog.Close>
            <button aria-label="Close">
              <Cross2Icon />
            </button>
          </RadixDialog.Close>
          */}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

export default ProfileBackground;
