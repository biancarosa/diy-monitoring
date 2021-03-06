import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Monitor from './Monitor';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Monitor url="https://celebroapi-staging.stone.com.br:5959/health-check" title="Celebro - STAGING"/>,
  document.getElementById('monitors')
);
