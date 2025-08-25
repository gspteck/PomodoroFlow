import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingNav from "./components/nav.js";
import DashMenu from "./components/nav.js";

import Home from './components/home.js';
import Dash from './components/dash.js';
import Account from './components/account.js';
import Auth from './components/auth.js';
import NoPage from './components/nopage.js';

export function Navigation() {
  return (
    <LandingNav />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> }></Route>
        <Route path="/app" element={ <Dash /> }></Route>
        <Route path="/account" element={ <Account /> }></Route>
        <Route path="/auth" element={ <Auth /> }></Route>
        <Route path="*" element={ <NoPage /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

const contentContainer = document.getElementById("root");
const menuContainer = document.getElementById("menu");
const navigationContainer = document.getElementById("navigation");

ReactDom.createRoot(contentContainer).render(<App />);

if(menuContainer) {
  ReactDom.createRoot(menuContainer).render(<Navigation />);
} else if (navigationContainer) {
  ReactDom.createRoot(navigationContainer).render(<Navigation />);
}
