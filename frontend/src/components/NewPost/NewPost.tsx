import { FormEvent, useState } from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import * as RadixVisuallyHidden from '@radix-ui/react-visually-hidden';

import Avatar from '../Avatar/Avatar';

import './styles.css';

const avatarData = {
  src: 'https://placehold.co/64x64/png',
  alt: 'placeholder text',
};

function NewPost() {
  const [text, setText] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({ text });
  }

  return (
    <section className="NewPost">
      <Avatar src={avatarData.src} alt={avatarData.alt} />
      <form className="NewPostForm" onSubmit={handleSubmit}>
        <RadixVisuallyHidden.Root>
          <RadixLabel.Root htmlFor="postText">
            Text for new post
          </RadixLabel.Root>
        </RadixVisuallyHidden.Root>
        <textarea
          id="postText"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
        <button type="submit" disabled={text.length === 0}>
          Post
        </button>
      </form>
    </section>
  );
}

export default NewPost;
