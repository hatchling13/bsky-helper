import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider';

import type { ChangeEvent, FormEvent } from 'react';

import TextInput from '../../components/TextInput/TextInput';

import './styles.css';

function Login() {
  const { user, login } = useContext(AuthContext);

  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setHandle(event.target.value);
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setDisabled(true);

    await login({ handle, password });

    setDisabled(false);
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
      {user.error && user.error.message}
    </main>
  );
}

export default Login;
