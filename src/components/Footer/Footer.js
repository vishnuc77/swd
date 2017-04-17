/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// Import custom footer styles
import s from './Footer.css';
import Link from '../Link';
// Selectively import materialize.css as and when needed in your components
import sm from 'materialize-css/bin/materialize.css'
// Utility module for using multiple class names in HTML elements
import classnames from 'classnames';

class Footer extends React.Component {
  render() {

    return (
      <footer className={classnames(sm.pageFooter,sm.blueGrey,sm.darken2)} >
          <div className={sm.container}>
            <div className={sm.row}>
              <div className={classnames(sm.col,sm.l4,sm.s12)}>
                <h5 className={sm.whiteText}>More</h5>
                <ul>
                  <li><a className={sm.whiteText} href="/swd-services">SWD Services</a></li>
                  <li><a className={sm.whiteText} href="/csa">CSA</a></li>
                  <li><a className={sm.whiteText} href="/activity-center">Activity Center</a></li>
                </ul>
              </div>
              <div className={classnames(sm.col,sm.l4,sm.s12)}>
                <h5 className={sm.whiteText}>Connect</h5>
                <ul>
                  <li><a className={sm.whiteText} href="#!">Link 1</a></li>
                  <li><a className={sm.whiteText} href="#!">Link 2</a></li>
                  <li><a className={sm.whiteText} href="#!">Link 3</a></li>
                  <li><a className={sm.whiteText} href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className={classnames(sm.col,sm.l4,sm.s12)}>
                <h5 className={sm.whiteText}>Connect</h5>
                <ul>
                  <li><a className={sm.whiteText} href="#!">Contact Us</a></li>
                  <li><a className={sm.whiteText} href="#!">About Us</a></li>
                  <li><a className={sm.whiteText} href="#!">Link 3</a></li>
                  <li><a className={sm.whiteText} href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={sm.footerCopyright}>
            <div className={sm.container}>
            Developed By OSDLabs
            </div>
          </div>
        </footer>
    );
  }
}

// Passing in only Materialize styles for now. Later on, we have to concatenate it with the footer's custom style also
export default withStyles(sm)(Footer);
