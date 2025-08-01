import React from 'react';

import '../stylesheets/home.css'

//import '../../public/assets/todocreenshot.png'

function Home() {
  function handleAccessClick() {
    window.open(window.location.origin + '/auth', '_self');
  }

  return (
    <>
      <div id="top-wrapper">
        <div id="left-side">
          <div>
            <h2>Simple todo lists. Minimal and bloat-free task management.</h2>
          </div>
          <button class="access-button" onClick={handleAccessClick}>Access</button>
        </div>
        <div id="right-side">
          <span></span>
          <img src="./assets/todoscreenshot.png" />
        </div>
      </div>

      <div id="middle-wrapper">
        <h2>The Ultimate Task Manager</h2>
        <h3>PomodoroFlow is the best task management platform to ever exist. We are taking a simple todo list to the net level by implementing the best management system that exists in this day and age.</h3>
        <button class="access-button" onClick={handleAccessClick}>Access</button>
      </div>

      <div id="bottom-wrapper">
        <h2>Plans</h2>
        <div id="plan-wrapper">
          <div id="left-plan">
            <h3>Free</h3>
            <div class="divider"></div>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button class="access-button" onClick={handleAccessClick}>Access</button>
          </div>
          <div id="right-plan">
            <h3>Premium</h3>
            <div class="divider"></div>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button class="access-button" onClick={handleAccessClick}>Start Now</button>    
          </div>
        </div>
      </div>

      <div id="footer">
        <h4><a href="https://gspteck.com" target="_blank">Created by gspteck.</a></h4>
      </div>
    </>
  );
}

export default Home;
