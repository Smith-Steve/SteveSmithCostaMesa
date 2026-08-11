import React, { Component } from 'react';
import { FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';
import { SiNextdoor } from 'react-icons/si';

class Footer extends Component {
render() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-social">
          <a href="https://x.com/StephenSmithIII" target="_blank" rel="noopener noreferrer" aria-label="X">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/steveforcostamesa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/Steve4CostaMesa/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
        <div className="footer-paid">
          Paid For By Steve Smith For City Council 2026 &middot; #1484466
        </div>
      </div>
    </footer>
  );
}
}

export default Footer;