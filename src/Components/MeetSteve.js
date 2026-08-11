import React, { Component } from 'react';

class MeetSteve extends Component {
  constructor(props) {
    super(props);

    this.images = [
      require('../Images/Steve_Sitting_Transparent.png'),
      require('../Images/Steve_Standing_Transparent.png'),
    ];

    this.state = {
      selectedImage: this.images[Math.floor(Math.random() * this.images.length)],
    };

    this.handleLearnMoreClick = this.handleLearnMoreClick.bind(this);
  }

  handleLearnMoreClick() {
    if (this.props.onNavigate) {
      this.props.onNavigate('about');
    }
  }

  render() {
    return (
      <section className="meet-steve">
        <div className="meet-steve-grid">
          <div className="meet-steve-photo">
            <img src={this.state.selectedImage} alt="Steve Smith" />
          </div>
            <div className="meet-steve-text">
            <h2>Steve Smith</h2>
            <p>
                Costa Mesa is a little slice of paradise, and we're going to treat
                it that way when I'm on your city council. Your voice isn't being
                heard: right now we've got a top down style of
                governance, and your opinions are not welcome. By
                day I am a technology professional, and by night I'm a Costa Mesa Enthusiast, resident, and a
                community member who has the privilege of serving on your Animal Services Committee. I
                believe openness and transparency are the keys to good governance, and when I'm
                elected your voice will be heard. I will work to make sure that your city government is open, transparent, and accountable to you, the residents of Costa Mesa.
            </p>
            <button className="btn-learn-more" onClick={this.handleLearnMoreClick}>More</button>
            </div>
        </div>
      </section>
    );
  }
}

export default MeetSteve;