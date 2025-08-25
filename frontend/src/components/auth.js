import React, { useState } from 'react';

import { NavBar } from './nav.js';

import '../stylesheets/auth.css';

function Auth() {
  const [hasAccount, setHasAccount] = useState(true);

  function changeAuth() {
    setHasAccount(!hasAccount);    
  }

  return (
    <>
			<NavBar />

      { hasAccount ?
        (
          <div id="form-wrapper">
            <h2>Login</h2>
            <form>
              <label for="email">Email:</label><br />
              <input type="text" id="email" name="email" />
              <br />

              <label for="password">Password:</label><br />
              <input type="password" id="password" name="password"/>
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
              <label for="first-name">Name:</label><br />
              <input type="text" id="first-name" name="first-name"/>
              <br />
            
              <label for="email">Email:</label><br />
              <input type="text" id="email" name="email" />
              <br />

              <label for="password">Password:</label><br />
              <input type="password" id="password" name="password" />
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
