import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const navOpenClass = this.state.menuOpen ? 'nav-open' : '';
    const navLinkClass = ({ isActive }) => (isActive ? 'active' : '');

    return (
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-mark">
            </div>
            <div className="brand-text">
              Steve Smith
              <small>Costa Mesa &middot; District 5</small>
            </div>
          </div>

          <button
            className="hamburger"
            onClick={this.toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={this.state.menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={navOpenClass}>
            <ul>
              <li><NavLink to="/" end className={navLinkClass} onClick={this.closeMenu}>Home</NavLink></li>
              <li><NavLink to="/issues" className={navLinkClass} onClick={this.closeMenu}>Issues</NavLink></li>
              <li><NavLink to="/endorsements" className={navLinkClass} onClick={this.closeMenu}>Endorsements</NavLink></li>
              <li><NavLink to="/district" className={navLinkClass} onClick={this.closeMenu}>District</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass} onClick={this.closeMenu}>About</NavLink></li>
              <li><NavLink to="/get-involved" className={navLinkClass} onClick={this.closeMenu}>Get Involved</NavLink></li>
              <li><LanguageToggle /></li>
              <li><a href="https://secure.anedot.com/stevesmith2026/donate" target="_blank" rel="noopener noreferrer" className="btn-donate">Donate</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
