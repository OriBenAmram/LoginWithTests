import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import './assets/styles/style.scss';

import { RootCmp } from './root-cmp.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Router>
    <RootCmp />
  /* </Router> */
);
