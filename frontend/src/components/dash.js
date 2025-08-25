import React from 'react';

import { DashMenu } from './nav.js'

function Dash() {
  return (
		<>
			<div id="dash-wrapper">
				<DashMenu />
				<div id="dash-content">
				</div>
			</div>
		</>
  );
}

export default Dash;
