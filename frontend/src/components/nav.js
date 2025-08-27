import React, { useState } from 'react';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

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
	const [isMenuOpen, setMenuState] = useState(false);

	function changeMenuState() {
		setMenuState(!isMenuOpen);
	}

  return (
    <>
			<div id={ isMenuOpen ? "open-menu-container" : "closed-menu-container"}>
				<div id={ isMenuOpen ? "open-top-section" : "closed-top-section"}>
					<img id="tomato-icon" src="../assets/tomato.svg" />
					{
						isMenuOpen
							? <h3 id="title">PomodoroFlow</h3>
							: <></>
					}
					{ 
						isMenuOpen
							? <FaAnglesLeft onClick={ changeMenuState }/>
							: <FaAnglesRight onClick={ changeMenuState }/>
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
