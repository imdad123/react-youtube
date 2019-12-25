import React from "react";
import "./SideBarFooter.scss";

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className="footer-block">
        <div>Ewiglife Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers Ewiglife</div>
      </div>
      <div className="footer-block">
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Ewiglife Developer</div>
      </div>
      <div className="footer-block">
        <div>Ewiglife MERN Stack Developer Team</div>
      </div>
      <div className="footer-block">
        <div>© Ewiglife.com</div>
      </div>
    </React.Fragment>
  );
}
