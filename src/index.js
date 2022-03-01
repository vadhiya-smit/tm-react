import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextApis} from './context/context';
import { BrowserRouter as Router } from "react-router-dom";
import {Routes ,Route} from "react-router-dom";
import NotFound from './Pages/404';


import './css/bootstrap/css/bootstrap-grid.css'
import './css/bootstrap/css/bootstrap-grid.css.map'
import './css/bootstrap/css/bootstrap-grid.min.css'
import './css/bootstrap/css/bootstrap-grid.min.css.map'
import './css/bootstrap/css/bootstrap-grid.rtl.css'
import './css/bootstrap/css/bootstrap-grid.rtl.css.map'
import './css/bootstrap/css/bootstrap-grid.rtl.min.css'
import './css/bootstrap/css/bootstrap-grid.rtl.min.css.map'
import './css/bootstrap/css/bootstrap-reboot.css'
import './css/bootstrap/css/bootstrap-reboot.css.map'
import './css/bootstrap/css/bootstrap-reboot.min.css'
import './css/bootstrap/css/bootstrap-reboot.min.css.map'
import './css/bootstrap/css/bootstrap-reboot.rtl.css'
import './css/bootstrap/css/bootstrap-reboot.rtl.css.map'
import './css/bootstrap/css/bootstrap-reboot.rtl.min.css'
import './css/bootstrap/css/bootstrap-reboot.rtl.min.css.map'
import './css/bootstrap/css/bootstrap-utilities.css'
import './css/bootstrap/css/bootstrap-utilities.css.map'
import './css/bootstrap/css/bootstrap-utilities.min.css'
import './css/bootstrap/css/bootstrap-utilities.min.css.map'
import './css/bootstrap/css/bootstrap-utilities.rtl.css'
import './css/bootstrap/css/bootstrap-utilities.rtl.css.map'
import './css/bootstrap/css/bootstrap-utilities.rtl.min.css'
import './css/bootstrap/css/bootstrap-utilities.rtl.min.css.map'
import './css/bootstrap/css/bootstrap.css'
import './css/bootstrap/css/bootstrap.css.map'
import './css/bootstrap/css/bootstrap.min.css'
import './css/bootstrap/css/bootstrap.min.css.map'
import './css/bootstrap/css/bootstrap.rtl.css'
import './css/bootstrap/css/bootstrap.rtl.css.map'
import './css/bootstrap/css/bootstrap.rtl.min.css'
import './css/bootstrap/css/bootstrap.rtl.min.css.map'

// import './css/bootstrap/js/bootstrap.bundle.js'
// import './css/bootstrap/js/bootstrap.bundle.js.map'
// import './css/bootstrap/js/bootstrap.bundle.min.js'
// import './css/bootstrap/js/bootstrap.bundle.min.js.map'
// import './css/bootstrap/js/bootstrap.esm.js'
// import './css/bootstrap/js/bootstrap.esm.js.map'
// import './css/bootstrap/js/bootstrap.esm.min.js'
// import './css/bootstrap/js/bootstrap.esm.min.js.map'
// import './css/bootstrap/js/bootstrap.js'
// import './css/bootstrap/js/bootstrap.js.map'
// import './css/bootstrap/js/bootstrap.min.js'
// import './css/bootstrap/js/bootstrap.min.js.map'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextApis>
        <App />
      </ContextApis>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
