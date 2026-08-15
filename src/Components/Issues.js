import React, { Component } from 'react';

class Issues extends Component {
  render() {
    return (
      <section className="issues">
        <div className="issues-bottom">
          <div className="issues-header">
            <div className="issues-eyebrow">&mdash; Where Steve Stands</div>
            <h1>Five Commitments for District 5</h1>
            <p className="issues-sub">
              Five commitments for District 5.
            </p>
          </div>

          <div className="issues-list">
            <div className="issue-row">
              <div className="issue-num">01</div>
              <div className="issue-content">
                <h3>Fairview Park</h3>
                <p>
                  Opposing the ecology-first master plan that would lock
                  residents out of the park they've always used. Fairview
                  belongs to Costa Mesa families &mdash; that means
                  protecting continued access for RC glider flying and the
                  recreational uses that have defined the park for
                  generations, not managing people out.
                </p>
              </div>
            </div>

            <div className="issue-row">
              <div className="issue-num">02</div>
              <div className="issue-content">
                <h3>Public Safety</h3>
                <p>
                  Addressing property crime rates well above the national
                  average with real investment in enforcement and
                  prevention.
                </p>
                <div className="issue-stat">
                  <span className="stat-figure">61%</span>
                  <span className="stat-caption">higher property crime rate than the national average</span>
                </div>
              </div>
            </div>

            <div className="issue-row">
              <div className="issue-num">03</div>
              <div className="issue-content">
                <h3>Fiscal Responsibility</h3>
                <p>
                  Closing the structural deficit without shortchanging core
                  services, and holding the line on spending that outpaces
                  revenue.
                </p>
                <div className="issue-stat">
                  <span className="stat-figure">$3M</span>
                  <span className="stat-caption">lost in general fund revenue this year</span>
                </div>
              </div>
            </div>

            <div className="issue-row">
              <div className="issue-num">04</div>
              <div className="issue-content">
                <h3>Pro-Business Growth</h3>
                <p>
                  A robust business community in Costa Mesa helps everyone thrive. The more successful businesses we have, the more our city can succeeed. A great idea shouldn't be drowned in red tape.
                </p>
                <div className="issue-stat">
                  <span className="stat-figure">5%</span>
                  <span className="stat-caption">of the city's general fund comes from the hotel tax alone</span>
                </div>
              </div>
            </div>

            <div className="issue-row">
              <div className="issue-num">05</div>
              <div className="issue-content">
                <h3>Government Transparency</h3>
                <p>
                  A city council that shows its work, holds open meetings
                  that mean something, and answers to District 5 residents
                  first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Issues;