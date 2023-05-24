import * as RadixLabel from '@radix-ui/react-label';

import type { MouseEventHandler, ReactNode } from 'react';

import './styles.css';

type IconButtonType = {
  value: number;
  label: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

function IconButton({ value, label, handleClick, children }: IconButtonType) {
  return (
    <button onClick={handleClick} className="IconButton">
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
