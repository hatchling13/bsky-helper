import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { ChangeEvent, FormEvent } from 'react';

import TextInput from '../../components/TextInput/TextInput';

import './styles.css';

function Login() {
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setHandle(event.target.value);
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setDisabled(true);

    const timeout = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    await timeout(3000);

    console.log({ handle, password });
    setDisabled(false);

    navigate('/timeline', { replace: true });
  };

  return (
    <main className="LoginPage">
      <h1>Log in to Bluesky Social</h1>
      <form method="POST" action="/login" onSubmit={handleSubmit}>
        <fieldset className="LoginForm" disabled={disabled}>
          <TextInput
            type="text"
            label="Handle"
            value={handle}
            onChange={onHandleChange}
          />
          <TextInput
            type="password"
            label="Password"
            value={password}
            onChange={onPasswordChange}
          />
          <button type="submit">Log in</button>
        </fieldset>
      </form>
    </main>
  );
}

export default Login;
