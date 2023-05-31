import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isExpired } from 'react-jwt';

import type { FormEvent } from 'react';

import TextInput from '../../components/TextInput/TextInput';
import { UserContext } from '../../providers/UserProvider';

import './styles.css';

function Login() {
  const { user, login } = useContext(UserContext);

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setDisabled(true);

    await login({ identifier, password });

    setDisabled(false);
  };

  useEffect(() => {
    if (user.did !== '') {
      if (isExpired(user.jwt.access)) {
        alert('Access token expired!');
      } else {
        navigate('/timeline', { replace: true });
      }
    }
  }, [user, navigate]);

  return (
    <main className="LoginPage">
      <h1>Log in to Bluesky Social</h1>
      <form method="POST" action="/login" onSubmit={handleSubmit}>
        <fieldset className="LoginForm" disabled={disabled}>
          <TextInput
            type="text"
            label="Handle"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
          />
          <TextInput
            type="password"
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Log in</button>
        </fieldset>
      </form>
    </main>
  );
}

export default Login;
