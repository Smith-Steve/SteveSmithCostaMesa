import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Seo from './Components/Seo';

function Home() {
  return (
    <React.Fragment>
      <Seo
        title="Steve Smith for Costa Mesa City Council District 5"
        description="Steve Smith is running for Costa Mesa City Council District 5 on public safety, fiscal responsibility, and government transparency. Learn where he stands and how to get involved."
        path="/"
      />
      <Hero />
      <IntroVideo />
      <MeetSteve />
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="app">
      <StatusBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/issues"
          element={
            <React.Fragment>
              <Seo
                title="Where Steve Stands | Issues | Steve Smith for Costa Mesa"
                description="Steve Smith's five commitments for Costa Mesa District 5: Fairview Park access, public safety, fiscal responsibility, pro-business growth, and government transparency."
                path="/issues"
              />
              <Issues />
            </React.Fragment>
          }
        />
        <Route
          path="/endorsements"
          element={
            <React.Fragment>
              <Seo
                title="Endorsements | Steve Smith for Costa Mesa"
                description="See who is endorsing Steve Smith for Costa Mesa City Council District 5, including local, county, and state elected officials and organizations."
                path="/endorsements"
              />
              <Endorsements />
            </React.Fragment>
          }
        />
        <Route
          path="/district"
          element={
            <React.Fragment>
              <Seo
                title="District 5 Map | Steve Smith for Costa Mesa"
                description="See the boundaries of Costa Mesa City Council District 5 and find out if you live in the district Steve Smith is running to represent."
                path="/district"
              />
              <District />
            </React.Fragment>
          }
        />
        <Route
          path="/about"
          element={
            <React.Fragment>
              <Seo
                title="About Steve Smith | Costa Mesa City Council District 5"
                description="Meet Steve Smith, a Costa Mesa resident and technology professional serving on the City's Animal Services Committee, running for City Council District 5."
                path="/about"
              />
              <About />
            </React.Fragment>
          }
        />
        <Route
          path="/get-involved"
          element={
            <React.Fragment>
              <Seo
                title="Get Involved | Volunteer with Steve Smith for Costa Mesa"
                description="Volunteer for Steve Smith's Costa Mesa City Council campaign. Knock on doors, sign up for the mailing list, request a yard sign, or join an upcoming event."
                path="/get-involved"
              />
              <GetInvolved />
            </React.Fragment>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
