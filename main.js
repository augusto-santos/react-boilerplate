/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/app';

import store from './core/store';
import Router from './core/router';

const container = document.getElementById('root');


ReactDOM.render(
  <App store={store}>
    <Router />
  </App>,
  container
);
