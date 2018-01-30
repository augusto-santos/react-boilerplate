/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import history from '../../core/history';
import { Link } from 'react-router-dom';
import s from './Navigation.css';

function Navigation() {
  return (
    <nav className={s.nav}>
      <Link to="/" className={`${s.link}`} >
        About
      </Link>
      <Link to="/get-started" className={`${s.link}`}>
        Get Started
      </Link>
      <Link to="/404" className={`${s.link}`}>
        Not Found
      </Link>
    </nav>
  );
}

export default Navigation;
