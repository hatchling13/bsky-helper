import type { ChangeEventHandler } from 'react';
import * as RadixLabel from '@radix-ui/react-label';

import './styles.css';

type TextInputType = {
  label: string;
  value: string;
  type: 'text' | 'password';
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function TextInput({ label, value, type, onChange }: TextInputType) {
  return (
    <div className="TextInput">
      <RadixLabel.Root htmlFor={label}>{label}</RadixLabel.Root>
      <input
        type={type}
        name={label}
        id={label}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default TextInput;
