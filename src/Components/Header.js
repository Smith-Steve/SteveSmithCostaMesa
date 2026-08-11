import React, { Component } from 'react';
import LanguageToggle from './LanguageToggle';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleIssuesClick = this.handleIssuesClick.bind(this);
    this.handleEndorsementsClick = this.handleEndorsementsClick.bind(this);
    this.handleDistrictClick = this.handleDistrictClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleGetInvolvedClick = this.handleGetInvolvedClick.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  handleHomeClick(e) {
    e.preventDefault();
    this.props.onNavigate('home');
    this.closeMenu();
  }

  handleIssuesClick(e) {
    e.preventDefault();
    this.props.onNavigate('issues');
    this.closeMenu();
  }

  handleEndorsementsClick(e) {
    e.preventDefault();
    this.props.onNavigate('endorsements');
    this.closeMenu();
  }

  handleDistrictClick(e) {
    e.preventDefault();
    this.props.onNavigate('district');
    this.closeMenu();
  }

  handleAboutClick(e) {
    e.preventDefault();
    this.props.onNavigate('about');
    this.closeMenu();
  }

  handleGetInvolvedClick(e) {
    e.preventDefault();
    this.props.onNavigate('getInvolved');
    this.closeMenu();
  }

  render() {
    const homeClass = this.props.currentPage === 'home' ? 'active' : '';
    const issuesClass = this.props.currentPage === 'issues' ? 'active' : '';
    const endorsementsClass = this.props.currentPage === 'endorsements' ? 'active' : '';
    const districtClass = this.props.currentPage === 'district' ? 'active' : '';
    const aboutClass = this.props.currentPage === 'about' ? 'active' : '';
    const getInvolvedClass = this.props.currentPage === 'getInvolved' ? 'active' : '';
    const navOpenClass = this.state.menuOpen ? 'nav-open' : '';

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
              <li><a href="#home" className={homeClass} onClick={this.handleHomeClick}>Home</a></li>
              <li><a href="#issues" className={issuesClass} onClick={this.handleIssuesClick}>Issues</a></li>
              <li><a href="#endorsements" className={endorsementsClass} onClick={this.handleEndorsementsClick}>Endorsements</a></li>
              <li><a href="#district" className={districtClass} onClick={this.handleDistrictClick}>District</a></li>
              <li><a href="#about" className={aboutClass} onClick={this.handleAboutClick}>About</a></li>
              <li><a href="#getinvolved" className={getInvolvedClass} onClick={this.handleGetInvolvedClick}>Get Involved</a></li>
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