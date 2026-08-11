import React from 'react';
import EventHighlight from '../Video/Event_Highlight.MP4';

class IntroVideo extends React.Component {
  render() {
    return (
      <section className="intro-video-section">
        <div className="intro-video-container">
          <video
            className="intro-video"
            autoPlay
            muted
            playsInline
            controls
            preload="auto"
          >
            <source src={EventHighlight} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </section>
    );
  }
}

export default IntroVideo;