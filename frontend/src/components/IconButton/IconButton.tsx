import * as RadixLabel from '@radix-ui/react-label';

import type { ReactNode } from 'react';

import './styles.css';

type IconButtonType = {
  value: number;
  label: string;
  handleInteraction: () => void;
  children: ReactNode;
};

function IconButton({
  value,
  label,
  handleInteraction,
  children,
}: IconButtonType) {
  return (
    <button
      className="IconButton"
      onClick={(event) => {
        event.stopPropagation();
        handleInteraction();
      }}
      onKeyDown={(event) => {
        event.stopPropagation();
        if (event.key === 'Enter') {
          handleInteraction();
        }
      }}
    >
      <div className="Icon" id={label}>
        {children}
      </div>
      {!!value && (
        <RadixLabel.Root className="IconLabel">{value}</RadixLabel.Root>
      )}
    </button>
  );
}

export default IconButton;
