import React, { Component } from 'react';
import './Css/App.css';
import StatusBar from './Components/StatusBar';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MeetSteve from './Components/MeetSteve';
import Issues from './Components/Issues';
import Endorsements from './Components/Endorsements';
import District from './Components/District';
import IntroVideo from './Components/IntroVideo';
import About from './Components/About';
import GetInvolved from './Components/GetInvolved';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    };
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(page) {
    this.setState({ page });
  }

  renderPage() {
    switch (this.state.page) {
      case 'issues':
        return <Issues />;
      case 'endorsements':
        return <Endorsements />;
      case 'district':
        return <District />;
      case 'about':
        return <About />;
      case 'getInvolved':
        return <GetInvolved />;
      case 'home':
      default:
        return (
          <React.Fragment>
            <Hero />
            <IntroVideo />
            <MeetSteve onNavigate={this.handleNavigate} />
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <div className="app">
        <StatusBar />
        <Header onNavigate={this.handleNavigate} currentPage={this.state.page} />
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default App;