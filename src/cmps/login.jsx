import React, { useState } from 'react';

export function Login({ onSubmit }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  function handleChange(ev) {
    const { value } = ev.target;
    const type = ev.target.id;
    if (type) setCredentials((prevCredentials) => ({ ...prevCredentials, [type]: value }));
  }

  function onSubmitForm(ev) {
    ev.preventDefault();
    if (validateCredentials()) {
      onSubmit(credentials);
      setCredentials({ username: '', password: '' });
    } else {
      setError('Invalid credentials');
    }
  }

  function validateCredentials() {
    const { username, password } = credentials;
    const isUsernameValid = /^[A-Za-z]{4,}$/.test(username); // At least 4 English characters
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password); // At least 1 letter, 1 number, and 6 characters
    return isUsernameValid && isPasswordValid;
  }

  const isSubmitAllowed = credentials.username !== '' && credentials.password !== '';

  return (
    <>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={!isSubmitAllowed}>
          Login
        </button>
      </form>
    </>
  );
}
