import * as React from 'react';
import { LogoFont } from '../common';

export function LoginNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom">
      <div className="container-fluid">
        <LogoFont />
        <div>
          <button type="button" className="btn btn-base">
            Sign up
          </button>
          <button type="button" className="btn btn-login">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}
