import React from 'react';
import './Screen.css';

const PlanStrip = ({ title, className = '' }) => {
  // Generate unique IDs for filters to avoid conflicts when multiple strips are rendered
  const leftFilterId = `filter0_d_strip_left_${Math.random().toString(36).substr(2, 9)}`;
  const rightFilterId = `filter0_d_strip_right_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`plan-strip-wrapper ${className}`}>
      <div className="plan-strip-bg" />
      <div className="plan-strip-fold-wrapper" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
        <svg
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#B38100', filter: 'drop-shadow(0 -1px 4px rgba(0,37,63,0.06))' }}
        >
          <g filter={`url(#${leftFilterId})`}>
            <path d="M3 6V0H0L3 6Z" fill="#B38100" />
          </g>
          <defs>
            <filter id={leftFilterId} x="-4" y="-5" width="11" height="14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.145098 0 0 0 0 0.247059 0 0 0 0.06 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_strip_left" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_strip_left" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="plan-strip-fold-wrapper" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}>
        <svg
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#B38100', filter: 'drop-shadow(0 -1px 4px rgba(0,37,63,0.06))' }}
        >
          <g filter={`url(#${rightFilterId})`}>
            <path d="M0 6V0H3L0 6Z" fill="#B38100" />
          </g>
          <defs>
            <filter id={rightFilterId} x="-4" y="-5" width="11" height="14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.145098 0 0 0 0 0.247059 0 0 0 0.06 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_strip_right" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_strip_right" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="plan-strip-text">
        {title}
      </div>
    </div>
  );
};

export default PlanStrip;
