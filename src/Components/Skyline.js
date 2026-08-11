import React, { Component } from 'react';
 
class Skyline extends Component {
  render() {
    return (
      <svg
        className="skyline"
        viewBox="0 0 1400 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* back layer: distant ridges */}
        <path
          d="M0,180 L0,140 L80,110 L140,135 L220,90 L300,120 L380,75 L460,115 L560,55 L620,95 L700,70 L780,100 L860,60 L940,105 L1020,80 L1100,125 L1180,95 L1260,115 L1320,85 L1400,110 L1400,200 L0,200 Z"
          fill="#2E3A4C"
          opacity="0.5"
        />
        {/* middle layer */}
        <path
          d="M0,200 L0,160 L60,145 L120,165 L200,120 L260,150 L340,100 L380,135 L460,90 L520,140 L600,80 L660,130 L720,95 L780,140 L840,110 L900,150 L960,115 L1040,155 L1120,120 L1200,150 L1280,130 L1360,160 L1400,140 L1400,200 Z"
          fill="#212B3A"
          opacity="0.8"
        />
        {/* foreground: main peak */}
        <path
          d="M0,200 L0,175 L120,170 L200,165 L320,175 L450,165 L540,140 L580,100 L610,55 L640,15 L670,55 L710,105 L750,150 L820,165 L920,160 L1040,170 L1180,160 L1300,170 L1400,165 L1400,200 Z"
          fill="#1A222E"
        />
        {/* white snowcap on the peak */}
        <path
          d="M610,55 L640,15 L670,55 L660,65 L650,55 L640,62 L630,52 L620,62 Z"
          fill="#F1EEE4"
          opacity="0.85"
        />
        {/* gold sun accent */}
        <circle cx="1180" cy="55" r="14" fill="#C9A24B" opacity="0.85" />
        <circle cx="1180" cy="55" r="22" fill="#C9A24B" opacity="0.15" />
      </svg>
    );
  }
}
 
export default Skyline;
 