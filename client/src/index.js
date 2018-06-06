import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from "react-router-dom";

import App from './App';
// css
import "./assests/css/bootstrap.min.css";
import "./assests/css/style.css";
import "./assests/css/index.css";


ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));

