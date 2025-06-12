import React from 'react';
import { signInWithPopup, provider, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => navigate('/map'))
      .catch((err) => console.error('Login failed:', err));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login to continue</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
