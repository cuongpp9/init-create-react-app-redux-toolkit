import * as React from 'react';
import { LoginNavBar } from '../../components';
import { landingImage } from 'containers/Assets/images';

export default function LandingPage() {
  return (
    <div className="container">
      <LoginNavBar />
      <div className="col-md-12 row">
        <div className="col-md-5 image-landing-viewer">
          <img
            src={landingImage}
            className="landing-bg"
            alt="img-avatar"
            height="100%"
            width="100%"
          />
        </div>
        <div className="col-md-7 landing-content">
          <div className="content">
            <div className="slider-title">
              Your ultimate credit card advisor for the maximum reward.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
