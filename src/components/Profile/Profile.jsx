import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [tab, setTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ email: '', password: '', name: '', terms: false });

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login: ' + loginData.email);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!registerData.terms) {
      alert('You must accept the Terms and Conditions.');
      return;
    }
    alert('Register: ' + registerData.email);
  };

  const handleForgotPassword = () => {
    alert('Forgot password clicked!');
  };

  return (
    <div className="profile-form-container">
      <div className="profile-tabs">
        <button
          className={tab === 'login' ? 'active' : ''}
          onClick={() => setTab('login')}
        >
          Login
        </button>
        <button
          className={tab === 'register' ? 'active' : ''}
          onClick={() => setTab('register')}
        >
          Register
        </button>
      </div>
      {tab === 'login' && (
        <form className="profile-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={e => setLoginData({ ...loginData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={e => setLoginData({ ...loginData, password: e.target.value })}
            required
          />
          <div className="forgot-password-row">
            <span className="forgot-password-link" onClick={handleForgotPassword}>
              Forgot password?
            </span>
          </div>
          <button type="submit">Login</button>
        </form>
      )}
      {tab === 'register' && (
        <form className="profile-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={registerData.name}
            onChange={e => setRegisterData({ ...registerData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={e => setRegisterData({ ...registerData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={e => setRegisterData({ ...registerData, password: e.target.value })}
            required
          />
          <label className="terms-label">
            <input
              type="checkbox"
              checked={registerData.terms}
              onChange={e => setRegisterData({ ...registerData, terms: e.target.checked })}
              required
            />
            I accept the <a href="#" target="_blank" rel="noopener noreferrer">Terms and Conditions.</a>
          </label>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Profile;