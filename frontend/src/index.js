import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home.js';
import Dash from './components/dash.js';
import Account from './components/account.js';
import Auth from './components/auth.js';
import NoPage from './components/nopage.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/app" element={ <Dash /> }></Route>
        <Route path="/account" element={ <Account /> }></Route>
        <Route path="/auth" element={ <Auth /> }></Route>
        <Route path="*" element={ <NoPage /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
