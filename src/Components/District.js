import React from 'react';
import DistrictMap from '../Images/D5_Map.jpg';

class District extends React.Component {
  render() {
    return (
      <section className="district">
        <div className="district-container">
          <div className="district-header">
            <div className="district-eyebrow">&mdash; Know Your District</div>
            <h1>District 5</h1>
            <p className="district-sub">
              Steve is running to represent Costa Mesa's District 5 on City Council.
              Use the map below to see if you're in District 5.
            </p>
          </div>
          <div className="district-map-wrap">
            <img src={DistrictMap} alt="Costa Mesa City Council District 5 Map" className="district-map" />
          </div>
        </div>
      </section>
    );
  }
}

export default District;