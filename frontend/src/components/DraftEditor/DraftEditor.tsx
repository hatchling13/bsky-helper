import { FormEvent, useState } from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import * as RadixVisuallyHidden from '@radix-ui/react-visually-hidden';
import TextareaAutosize from 'react-textarea-autosize';

import AvatarLink from '../Avatar/AvatarLink';

import './styles.css';

const avatarData = {
  src: 'https://placehold.co/64x64/png',
  alt: 'placeholder text',
};

function DraftEditor() {
  const [text, setText] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({ text });
  }

  return (
    <section className="Editor">
      <AvatarLink to="/authorfeed" src={avatarData.src} alt={avatarData.alt} />
      <form className="EditorForm" onSubmit={handleSubmit}>
        <RadixVisuallyHidden.Root>
          <RadixLabel.Root htmlFor="text">Text for new post</RadixLabel.Root>
        </RadixVisuallyHidden.Root>
        <TextareaAutosize
          className="EditorTextarea"
          id="text"
          placeholder="Something interesting?"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
          autoFocus
        />
        <button type="submit" disabled={text.length === 0}>
          Post
        </button>
      </form>
    </section>
  );
}

export default DraftEditor;
