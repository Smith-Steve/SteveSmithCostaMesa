import React from 'react';

import BarnesPhoto from '../Images/Endorsements/Barnes.jpg';
import DixonPhoto from '../Images/Endorsements/Dixon.jpg';
import PettisPhoto from '../Images/Endorsements/Pettis.jpg';
import BuleyPhoto from '../Images/Endorsements/Buley.jpg';
import MaiPhoto from '../Images/Endorsements/Mai.png';
import WecaPhoto from '../Images/Endorsements/WECA.jpg';
import ChoiPhoto from '../Images/Endorsements/Choi.jpg';
import PlaceholderPhoto from '../Images/Endorsements/placeholder.jpg';

class Endorsements extends React.Component {
  render() {
    const endorsements = [
      { name: 'Sheriff Don Barnes', title: 'Orange County Sheriff', photo: BarnesPhoto },
      { name: 'Diane Dixon', title: 'California State Assembly', photo: DixonPhoto },
      { name: 'Jeff Pettis', title: 'Costa Mesa City Council', photo: PettisPhoto },
      { name: 'Mike Buley', title: 'Costa Mesa City Council', photo: BuleyPhoto },
      { name: 'James Mai', title: 'Vice Mayor, Irvine', photo: MaiPhoto },
      { name: 'WECA', title: 'Western Electrical Contractors Association', photo: WecaPhoto },
      { name: 'Stephen Choi', title: 'California State Senate', photo: ChoiPhoto }
    ];

    return (
      <section
        id="endorsements"
        className="endorsements-section"
        aria-labelledby="endorsements-heading"
      >
        <div className="endorsements-container">
          <h2 id="endorsements-heading" className="endorsements-heading">
            Endorsements
          </h2>
          <p className="endorsements-subheading">
            Steve is proud to be endorsed by:
          </p>
          <ul className="endorsements-grid">
            {endorsements.map((e, i) => (
              <li
                className={`endorsement-card ${i % 2 === 0 ? 'photo-left' : 'photo-right'}`}
                key={i}
              >
                <div className="endorsement-photo-wrap">
                  <img
                    src={e.photo}
                    alt={e.name}
                    className="endorsement-photo"
                    onError={(ev) => {
                      ev.target.onerror = null;
                      ev.target.src = PlaceholderPhoto;
                    }}
                  />
                </div>
                <div className="endorsement-text">
                  <h3 className="endorsement-name">{e.name}</h3>
                  <p className="endorsement-title">{e.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Endorsements;