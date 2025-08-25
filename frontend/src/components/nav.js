import React, { useState } from 'react';

import '../stylesheets/nav.css';

function NavBar() {
  return (
    <>
      <center>
				<nav>
        	<img src="../assets/tomato.svg" />
        	<h2>PomodoroFlow</h2>
        	<button>Access</button>
      	</nav>
			</center>
    </>
  );
}

function DashMenu() {
	const [isMenuOpen, setMenuState] = useState(true);

	function changeMenuState() {
		setMenuState(!isMenuOpen);
	}

  return (
    <>
			<div id="menu-container">
				<div id="top-section">
					<img src="../assets/tomato.svg" />
					{
						isMenuOpen
							? <h3>PomodoroFlow</h3>
							: <></>
					}
					{ 
						isMenuOpen
							? <img src="../assets/angles-left.svg" />
							: <img src="../assets/angles-right.svg" />
					}
				</div>
				
				<div id="main-menu-section">
					
				</div>
				
				<div id="list-section">
				
				</div>
			</div>
    </>
  );
}

export { NavBar, DashMenu };
