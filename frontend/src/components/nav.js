import React, { useState } from 'react';

import '../stylesheets/nav.css';

function LandingNav() {
  return (
    <>
      <nav>
        <img src="../assets/tomato.svg" />
        <h2>PomodoroFlow</h2>
        <button>Access</button>
      </nav>
    </>
  );
}

function DashMenu() {
  return (
    <>
      <div id="menu-container"></div>
    </>
  );
}

export default LandingNav; DashMenu;
