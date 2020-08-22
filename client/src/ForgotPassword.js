import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from './common/Button.tsx';
import Input from './common/Input.tsx';
import message from './common/message.tsx';
import Spacer from './common/Spacer.tsx';
import { api } from './utilities/fetch-json.js';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    document.title = 'SQLPad - Forgot Password';
  }, []);

  const resetPassword = async (e) => {
    e.preventDefault();
    const json = await api.post('/api/forgot-password', { email });
    if (json.error) {
      return message.error(json.error);
    }
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/password-reset" />;
  }

  return (
    <div style={{ width: '300px', textAlign: 'center', margin: '100px auto' }}>
      <form onSubmit={resetPassword}>
        <h1>SQLPad</h1>
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Spacer size={2} />
        <Button style={{ width: '100%' }} htmlType="submit" variant="primary">
          Reset Password
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
