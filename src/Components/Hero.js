import React, { Component } from 'react';
import Skyline from './Skyline';

class Hero extends Component {
  render() {
    return (
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-grid">
            <div>
              <h1>
                Steve Smith
                <span className="hero-subtitle">For Costa Mesa City Council 2026</span>
              </h1>
              <p className="lede">
                We live in a coastal paradise here in Costa Mesa, a prosperous and
                highly desirable area of our nation. Yet our city is not living up
                to its potential. Costa Mesa is a hidden gem.
                Steve loves Costa Mesa and appreciates its vibrant, eclectic character. 
                Our city has lost its way and Steve wants to steer our city towards focusing on the
                basics: Public safety, responsible stewardship of our resources, and a hyper-focus on
                energetically building up the greatest city in the world so we
                can prosper as a community.
              </p>
            </div>
            <div className="hero-panel">
            <div className="meta-row">
                <div className="meta-value">Transparency</div>
            </div>
            <div className="meta-row">
                <div className="meta-value">Public Safety</div>
            </div>
            <div className="meta-row">
                <div className="meta-value">Fiscal Responsibility</div>
            </div>
            </div>
          </div>
        </div>
        <Skyline />
      </section>
    );
  }
}

export default Hero;