import React from 'react';

class LanguageToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentLang: 'en' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Only force-clear to English on the FIRST load of a browser session,
    // not on every mount (which would wipe out an intentional ES switch).
    const alreadyInitialized = sessionStorage.getItem('langInitialized');
    if (!alreadyInitialized) {
      this.clearTranslateCookie();
      sessionStorage.setItem('langInitialized', 'true');
    } else {
      // Reflect current cookie state in the dropdown, if any
      const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
      if (match && match[1]) {
        this.setState({ currentLang: match[1] });
      }
    }
  }

  clearTranslateCookie() {
    const domain = window.location.hostname;
    const past = 'Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = `googtrans=; expires=${past}; path=/;`;
    document.cookie = `googtrans=; expires=${past}; path=/; domain=${domain};`;
    document.cookie = `googtrans=; expires=${past}; path=/; domain=.${domain};`;
  }

  handleChange(e) {
    const lang = e.target.value;
    this.setState({ currentLang: lang });

    const domain = window.location.hostname;

    if (lang === 'en') {
      this.clearTranslateCookie();
    } else {
      this.clearTranslateCookie();
      document.cookie = `googtrans=/en/${lang}; path=/;`;
      document.cookie = `googtrans=/en/${lang}; path=/; domain=${domain};`;
    }

    window.location.reload();
  }

  render() {
    return (
      <div className="lang-toggle-container">
        <div id="google_translate_element" className="lang-toggle-hidden"></div>
        <select
          className="lang-toggle-select"
          value={this.state.currentLang}
          onChange={this.handleChange}
          aria-label="Select language"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    );
  }
}

export default LanguageToggle;