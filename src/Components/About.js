import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);

    this.images = [
      require('../Images/Steve_Andrew_Coffee.jpg'),
      require('../Images/Steve_Andrew_Counting.jpg'),
      require('../Images/Steve_Billy_Coffee.jpg'),
      require('../Images/Steve_Billy_Sitting.jpg'),
      require('../Images/Steve_Hunter_Sitting.jpg'),
      require('../Images/Steve_Standing.jpg'),
      require('../Images/Steve_Mike.jpg'),
      require('../Images/Steve_Lulu_Billy.jpg'),
    ];

    this.state = {
      selectedImages: this.pickThree(),
    };
  }

  pickThree() {
    const shuffled = [...this.images].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }

  render() {
    const [squarePhoto, widePhoto1, widePhoto2] = this.state.selectedImages;

    return (
      <section className="about">
        <div className="about-container">
          <div className="about-header">
            <div className="about-eyebrow">&mdash; Get to Know</div>
            <h2>About Steve</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Steve Smith is a long-time Costa Mesa resident who loves
                this city for what it already is &mdash; a vibrant,
                eclectic community with real character &mdash; and
                believes in what it can still become. By day, he's a
                technology professional working in enterprise contact
                center systems; by night, he's a hands-on member of the
                community, serving on the City's Animal Services
                Committee, where he helps advise the Council on pet
                licensing, live release rates, and the programs that keep
                Costa Mesa's animal care system running well.
              </p>
              <p>
                Steve isn't a career politician, and he's not running
                because it's the next rung on a ladder. He's running
                because he believes open communication builds stronger
                neighborhoods, and because a great city deserves a council
                that treats residents like partners, not an audience.
                Fiscal responsibility, public safety, and a government
                that shows its work &mdash; that's the standard he'll hold
                himself to on Day One.
              </p>
            </div>

            <div className="about-photo about-photo-square">
              <img src={squarePhoto} alt="Steve Smith" />
            </div>
          </div>

          <div className="about-photo-row">
            <div className="about-photo about-photo-wide">
              <img src={widePhoto1} alt="Steve Smith" />
            </div>
            <div className="about-photo about-photo-wide">
              <img src={widePhoto2} alt="Steve Smith" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;