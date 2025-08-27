import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { NavBar } from './nav.js';

import { testAccessToken, register, login } from '../scripts/api.js';

import '../stylesheets/auth.css';

function Auth() {
  const navigate = useNavigate();
  const [hasAccount, setHasAccount] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    tokenTest();
  }, []);

  function tokenTest() {
    testAccessToken().then(response => {
      console.log('Access token test response:', response);
      if (response) {
        navigate('/app');
      }
    }).catch(error => {
      console.error('Access token test error:', error);     
    });
  }

  function changeAuth() {
    setHasAccount(!hasAccount);
    setFormData({ name: '', email: '', password: '' });
  }

  const handleValueChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    try {
      const response = await register(name, email, password);
      console.log('Registration response:', response);
    } catch (error) {
      console.error('Registration response:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const response = await login(email, password);
      console.log('Login response:', response);
      tokenTest();
    } catch (error) {
      console.log('Login response:', error);
    }
  };

  return (
    <>
			<NavBar />

      { hasAccount ?
        (
          <div id="form-wrapper">
            <h2>Login</h2>
            <form onSubmit={ handleLogin }>
              <label htmlFor="email">Email:</label><br />
              <input
                type="text"
                id="email"
                name="email"
                value={ formData.email }
                onChange={handleValueChange}
                required
              />
              <br />

              <label htmlFor="password">Password:</label><br />
              <input
                type="password"
                id="password"
                name="password"
                value={ formData.password }
                onChange={ handleValueChange }
                required
              />
              <br />

              <input type="submit" id="submit" value="Login" />
              <br />

              <button onClick={changeAuth}>Create an account.</button>
            </form>
          </div>
        ) : (
          <div id="form-wrapper">
            <h2>Register</h2>
            <form>
              <label htmlFor="first-name">Name:</label><br />
              <input
                type="text"
                id="first-name"
                name="first-name"/>
                value={ formData.name }
                onChange={ handleValueChange }
                required
              <br />
            
              <label htmlFor="email">Email:</label><br />
              <input
                type="text"
                id="email"
                name="email"
                value={ formData.email }
                onChange={ handleValueChange }
                required
              />
              <br />

              <label htmlFor="password">Password:</label><br />
              <input
                type="password"
                id="password"
                name="password"
                value={ formData.password }
                onChange={ handleValueChange }
                required
              />
              <br />
            
              <input type="submit" id="submit" value="Register" />
              <br />
            
              <button onClick={changeAuth}>Already have an account.</button>
            </form>
          </div>
        )
      }
    </>
  ); 
}

export default Auth;
