import React, { useState } from 'react';
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa';
import PlanStrip from './PlanStrip';
import './Screen.css';

const Screen = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [selectedPlan, setSelectedPlan] = useState('flexi40');

  return (
    <div className="flexi-pass-new">
    
      {/* Background decorative elements */}
      <div className="bg-decorations">
        <div className="bg-blur purple"></div>
        <div className="bg-blur yellow"></div>
        <img src="./heroimage.png" alt="" className="bg-image" />
      </div>

      <div className="gradient-overlay"></div>

      {/* Back Button */}
      <button className="back-btn">
        <FaChevronLeft />
      </button>

      {/* Logo Section */}
      <div className="logo-section">
        <div className="cityflo-logo">
          <svg width="67" height="21" viewBox="0 0 67 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4052 5.14759H11.3191V15.8525H13.4052V5.14759Z" fill="#FFB800"/>
            <path d="M47.891 0H45.8171V15.8524H47.891V0Z" fill="#FFB800"/>
            <path d="M17.6361 12.8294V7.1952H15.3274V5.14757H16.9013C17.3072 5.14757 17.6361 4.82278 17.6361 4.42205V0H19.7101V5.14757H22.0614V7.1952H19.7101V12.5956C19.7101 13.2642 20.2587 13.8048 20.9348 13.8048H22.3012V15.8524H20.699C19.0076 15.8524 17.6361 14.4983 17.6361 12.8284" fill="#FFB800"/>
            <path d="M38.3564 15.8524V7.92072C38.3564 7.51999 38.0274 7.1952 37.6215 7.1952H36.2865V5.14757H38.3564V3.03698C38.3564 1.37608 39.7127 0.026982 41.3949 0.0129913L43.0215 0V2.08661H41.6561C40.9799 2.08661 40.4313 2.62825 40.4313 3.2958V5.14757H43.0225V7.1952H40.4313V15.8524H38.3574H38.3564Z" fill="#FFB800"/>
            <path d="M0 10.6209V10.3791C0 7.49003 2.37254 5.14759 5.29874 5.14759H8.71584V7.19523H5.42222C3.57298 7.19523 2.07496 8.67524 2.07496 10.5C2.07496 12.3248 3.57399 13.8048 5.42222 13.8048H8.71584V15.8525H5.29874C2.37254 15.8525 0 13.51 0 10.6209Z" fill="#FFB800"/>
            <path d="M50.631 10.5C50.631 7.54399 53.0582 5.14759 56.0522 5.14759H61.0028C63.9968 5.14759 66.424 7.54399 66.424 10.5C66.424 13.4561 63.9968 15.8525 61.0028 15.8525H56.0522C53.0582 15.8525 50.631 13.4561 50.631 10.5ZM56.0532 13.8048H61.0018C62.851 13.8048 64.349 12.3248 64.349 10.5C64.349 8.67524 62.85 7.19523 61.0018 7.19523H56.0532C54.204 7.19523 52.706 8.67524 52.706 10.5C52.706 12.3248 54.205 13.8048 56.0532 13.8048Z" fill="#FFB800"/>
            <path d="M24.4966 21V19.1862H25.6212C26.3702 19.1862 27.0443 18.7375 27.3246 18.051L28.189 15.9384L23.7729 5.14759H25.8276L29.2164 13.4281L32.6041 5.14759H34.6589L30.262 15.8924L29.101 18.7315C28.5403 20.1036 27.192 21.001 25.693 21.001H24.4966V21Z" fill="#FFB800"/>
          </svg>
        </div>
        <div className="dotted-line">
          <svg width="196" height="1" viewBox="0 0 196 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L196 0" stroke="url(#paint0_linear)" strokeDasharray="2 4"/>
            <defs>
              <linearGradient id="paint0_linear" x1="6.79562" y1="0" x2="197.431" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF8E6" stopOpacity="0"/>
                <stop offset="0.505208" stopColor="#FFF8E6"/>
                <stop offset="1" stopColor="#FFF8E6" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/d3e9d9e892d19fbc822d019fea9b7b0f698ddf6e?width=323" alt="Pass Logo" className="pass-logo" />
      </div>

      {/* Features Section */}
      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-bg"></div>
          <div className="feature-icon savings-icon">
            <img src={`${process.env.PUBLIC_URL || ''}/Offer.png`} alt="Savings" width="40" height="40" />
          </div>
          <div className="feature-text">
            <span className="text-white">Savings up to</span>{' '}
            <span className="text-yellow">30%</span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-bg"></div>
          <div className="feature-icon seat-icon">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.17676 1H22.8232C25.9392 1 28.2961 3.81908 27.7441 6.88574L24.6641 24H5.33594L2.25586 6.88574C1.70386 3.81908 4.06081 1 7.17676 1Z" fill="url(#paint0_linear_seat)" stroke="#B38100" strokeWidth="2"/>
              <rect y="24" width="32" height="9" rx="4" fill="url(#paint1_linear_seat)" stroke="#B38100" strokeWidth="2"/>
              <rect x="8" y="22" width="16" height="4" rx="2" fill="#FFE296"/>
              <defs>
                <linearGradient id="paint0_linear_seat" x1="6.85714" y1="1.38889" x2="22.577" y2="27.2593" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D19702"/>
                  <stop offset="1" stopColor="#9F7400"/>
                </linearGradient>
                <linearGradient id="paint1_linear_seat" x1="6.85714" y1="24.38889" x2="22.577" y2="50.2593" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D19702"/>
                  <stop offset="1" stopColor="#9F7400"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="feature-text">
            <span className="text-white">Rides are</span><br/>
            <span className="text-yellow">Pre-booked</span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-bg"></div>
          <div className="feature-icon reschedule-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="14.3333" fill="url(#paint0_linear_reschedule)" stroke="#B38100" strokeWidth="2"/>
              <path d="M26.6667 20H20.4167C20.1865 20 20 19.8134 20 19.5833V14.1666" stroke="#FFE296" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="paint0_linear_reschedule" x1="12.7618" y1="8.14812" x2="30.7491" y2="32.8164" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D19702"/>
                  <stop offset="1" stopColor="#9F7400"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="feature-text">
            <span className="text-white">Reschedule for</span>{' '}
            <span className="text-yellow">free</span>
          </div>
        </div>
      </div>

      {/* Prime Separator */}
      <div className="prime-separator">
        <svg width="216" height="12" viewBox="0 0 216 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M90 6H0" stroke="url(#paint0_linear_sep)" strokeDasharray="2 4"/>
          <path d="M102 6C105.314 6 108 3.31424 108 0C108 3.31424 110.686 6 114 6C110.686 6 108 8.68576 108 12C108 8.68576 105.314 6 102 6Z" fill="url(#paint1_radial_sep)"/>
          <path opacity="0.5" d="M126 6H216" stroke="url(#paint2_linear_sep)" strokeDasharray="2 4"/>
          <defs>
            <linearGradient id="paint0_linear_sep" x1="90" y1="6.03469" x2="2.96366" y2="6.03615" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF8E6"/>
              <stop offset="1" stopColor="#FFF8E6" stopOpacity="0"/>
            </linearGradient>
            <radialGradient id="paint1_radial_sep" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108 6) rotate(90) scale(6)">
              <stop stopColor="#FFD66B"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="paint2_linear_sep" x1="126" y1="6.03469" x2="213.036" y2="6.03615" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF8E6"/>
              <stop offset="1" stopColor="#FFF8E6" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Refund Message */}
      <div className="refund-message-container">
        <div className="refund-message-bg"></div>
        <div className="refund-message">
          <span className="text-white">Get a </span>
          <span className="text-yellow">full refund</span>
          <span className="text-white"> when you</span><br/>
          <span className="text-yellow underline">cancel a ride</span>
        </div>
      </div>

      {/* Select Plan Section */}
      <div className="select-plan-section">
        <div className="section-title-wrapper">
          <svg width="296" height="26" viewBox="0 0 296 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M73 13L0 13" stroke="url(#paint0_linear_title)" strokeDasharray="2 4"/>
            <text fill="#FFF8E6" x="89" y="20" fontFamily="Figtree" fontSize="20" fontWeight="600">Select a plan</text>
            <path opacity="0.5" d="M221 13L294 13" stroke="url(#paint1_linear_title)" strokeDasharray="2 4"/>
            <defs>
              <linearGradient id="paint0_linear_title" x1="70.469" y1="13" x2="-0.532848" y2="13" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF8E6"/>
                <stop offset="1" stopColor="#FFF8E6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_title" x1="223.531" y1="13" x2="294.533" y2="13" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF8E6"/>
                <stop offset="1" stopColor="#FFF8E6" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <p className="consecutive-weekdays">Rides are pre-booked on consecutive weekdays</p>

        {/* Trip Type Tabs */}
        <div className="trip-tabs">
          <button 
            className={`trip-tab ${tripType === 'oneWay' ? 'active' : ''}`}
            onClick={() => setTripType('oneWay')}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6667 6.66669L15 10M15 10L11.6667 13.3334M15 10H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>One-way</span>
          </button>
          <button 
            className={`trip-tab ${tripType === 'roundTrip' ? 'active' : ''}`}
            onClick={() => setTripType('roundTrip')}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4967 2.83002L16.83 6.16335M16.83 6.16335L13.4967 9.49668M16.83 6.16335H8.82999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.50333 10.5L3.17 13.8333M3.17 13.8333L6.50333 17.1667M3.17 13.8333H11.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Round Trip</span>
          </button>
        </div>

        {/* Plans Container */}
        <div className="plans-container">
          {/* Flexi Plan Strip */}
          <PlanStrip 
            title="Flexi Plan - Maximum flexibility" 
          />

          {/* Flexi Plan 40 Rides - Selected */}
          <div className={`plan-card ${selectedPlan === 'flexi40' ? 'selected' : ''}`} onClick={() => setSelectedPlan('flexi40')}>
            <div className="plan-header">
              <div className="plan-radio">
                {selectedPlan === 'flexi40' ? (
                  <div className="radio-checked">
                    <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 3.2L1.80807 5.43748C2.20831 5.93279 2.9634 5.93279 3.36365 5.43748L7.75758 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className="radio-unchecked"></div>
                )}
              </div>
              <div className="plan-info">
                <div className="plan-rides-row">
                  <h3 className="plan-rides">40 Rides</h3>
                  <div className="plan-price">
                    <span className="price-amount">₹195</span>
                    <span className="price-unit">/ride</span>
                  </div>
                </div>
                <p className="plan-breakdown">(20 morning + 20 evening)</p>
                <div className="plan-badges">
                  <span className="badge success">Full refunds on cancellations</span>
                  <span className="badge success">Free rescheduling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flexi Plan 10 Rides */}
          <div className={`plan-card ${selectedPlan === 'flexi10' ? 'selected' : ''}`} onClick={() => setSelectedPlan('flexi10')}>
            <div className="plan-header">
              <div className="plan-radio">
                {selectedPlan === 'flexi10' ? (
                  <div className="radio-checked">
                    <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 3.2L1.80807 5.43748C2.20831 5.93279 2.9634 5.93279 3.36365 5.43748L7.75758 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className="radio-unchecked"></div>
                )}
              </div>
              <div className="plan-info">
                <div className="plan-rides-row">
                  <h3 className="plan-rides">10 Rides</h3>
                  <div className="plan-price">
                    <span className="price-amount">₹207</span>
                    <span className="price-unit">/ride</span>
                  </div>
                </div>
                <p className="plan-breakdown">(5 morning + 5 evening)</p>
                <div className="plan-badges">
                  <span className="badge success">Full refunds on cancellations</span>
                  <span className="badge success">Free rescheduling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="plan-divider"></div>

          {/* Super Saver Plan Strip */}
          <PlanStrip 
            title="Super Saver Plan - Maximum savings" 
          />

          {/* Super Saver Plan 40 Rides */}
          <div className={`plan-card ${selectedPlan === 'saver40' ? 'selected' : ''}`} onClick={() => setSelectedPlan('saver40')}>
            <div className="plan-header">
              <div className="plan-radio">
                {selectedPlan === 'saver40' ? (
                  <div className="radio-checked">
                    <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 3.2L1.80807 5.43748C2.20831 5.93279 2.9634 5.93279 3.36365 5.43748L7.75758 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className="radio-unchecked"></div>
                )}
              </div>
              <div className="plan-info">
                <div className="plan-rides-row">
                  <h3 className="plan-rides">40 Rides</h3>
                  <div className="plan-price">
                    <span className="price-amount">₹159</span>
                    <span className="price-unit">/ride</span>
                  </div>
                </div>
                <p className="plan-breakdown">(20 morning + 20 evening)</p>
                <div className="plan-badges">
                  <span className="badge error">No refund on cancellations</span>
                  <span className="badge success">Free rescheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>

     
        {/* Proceed Button */}
        <button className="proceed-btn">Proceed with selected plan</button>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-section">
        <div className="section-title-wrapper">
          <svg width="296" height="26" viewBox="0 0 296 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M73 13L0 13" stroke="url(#paint0_linear_works)" strokeDasharray="2 4"/>
            <text fill="#FFF8E6" x="89" y="20" fontFamily="Figtree" fontSize="20" fontWeight="600">How it works</text>
            <path opacity="0.5" d="M225 13L298 13" stroke="url(#paint1_linear_works)" strokeDasharray="2 4"/>
            <defs>
              <linearGradient id="paint0_linear_works" x1="70.469" y1="13" x2="-0.532848" y2="13" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF8E6"/>
                <stop offset="1" stopColor="#FFF8E6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_works" x1="227.531" y1="13" x2="298.533" y2="13" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF8E6"/>
                <stop offset="1" stopColor="#FFF8E6" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="benefits-list">
          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.17676 1H22.8232C25.9392 1 28.2961 3.81908 27.7441 6.88574L24.6641 24H5.33594L2.25586 6.88574C1.70386 3.81908 4.06081 1 7.17676 1Z" fill="url(#paint0_linear_benefit1)" stroke="#B38100" strokeWidth="2"/>
                <rect y="24" width="32" height="9" rx="4" fill="url(#paint1_linear_benefit1)" stroke="#B38100" strokeWidth="2"/>
                <rect x="8" y="23" width="16" height="4" rx="2" fill="#FFE296"/>
                <defs>
                  <linearGradient id="paint0_linear_benefit1" x1="6.85714" y1="1.38889" x2="22.577" y2="27.2593" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D19702"/>
                    <stop offset="1" stopColor="#9F7400"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_benefit1" x1="6.85714" y1="24.38889" x2="22.577" y2="50.2593" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D19702"/>
                    <stop offset="1" stopColor="#9F7400"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="benefit-text">Once you buy the pass, rides are booked on consecutive weekdays at your selected timing(s) and seat</p>
          </div>

          <div className="benefit-divider"></div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="14.3333" fill="url(#paint0_linear_benefit2)" stroke="#B38100" strokeWidth="2"/>
                <path d="M26.6667 20H20.4167C20.1865 20 20 19.8134 20 19.5833V14.1666" stroke="#FFE296" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_benefit2" x1="12.7618" y1="8.14811" x2="30.7491" y2="32.8164" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D19702"/>
                    <stop offset="1" stopColor="#9F7400"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="benefit-text">If you decide to travel earlier or later, reschedule your ride anytime</p>
          </div>

          <div className="benefit-divider"></div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15C5 12.2386 7.23858 10 10 10H30C32.7614 10 35 12.2386 35 15V30C35 32.7614 32.7614 35 30 35H10C7.23858 35 5 32.7614 5 30V15Z" fill="url(#paint0_linear_benefit3)" stroke="#B38100" strokeWidth="2"/>
                <path d="M7 18L33 18" stroke="#FFE296" strokeWidth="2" strokeLinecap="square"/>
                <path d="M10 25H12" stroke="#FFE296" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18.25 25H20.25" stroke="#FFE296" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="31.875" cy="31.875" r="7.125" fill="#FFE296" stroke="#B38100" strokeWidth="2"/>
                <path d="M30 34L34 30" stroke="#B38100" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M30 30L34 34" stroke="#B38100" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M13.3359 5L13.3359 8.33333" stroke="#B38100" strokeWidth="2" strokeLinecap="round"/>
                <path d="M26.6641 5L26.6641 8.33333" stroke="#B38100" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_benefit3" x1="11.8571" y1="11.3889" x2="27.577" y2="37.2593" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D19702"/>
                    <stop offset="1" stopColor="#9F7400"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="benefit-text">For refundable passes: If you don't travel on a particular day, cancel up to 30 min before scheduled departure, and get a full refund in your Cityflo wallet</p>
          </div>
        </div>
      </div>

      {/* Did You Know Section */}
      <div className="did-you-know-section">
        <div className="bulb-icon-wrapper">
          <div className="bulb-bg"></div>
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/f9af72a0b52300d94c7c5d1a6ff048c1d88d68b6?width=64" alt="lightbulb" className="bulb-img" />
        </div>
        <h3 className="did-you-know-title">Did you know</h3>
        <svg className="arrow-decoration" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 19.2191C19.4445 19.9515 19.2165 20.3921 18.7575 20.9161C18.3541 21.3766 17.7271 22.2841 17.1433 22.4261C16.7081 22.5319 16.173 20.803 16.0552 20.4968C15.8693 20.0141 15.4721 18.794 15.3923 18.2691" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17.5817 21.0932C18.1512 17.3929 17.6518 13.4516 15.897 10.2701C14.0917 6.99686 11.1676 5.55211 8.08731 4.79578C5.00702 4.03946 3.49999 4 3.49999 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <p className="did-you-know-text">
          <span className="text-large">7K+ Cityfloers</span><br/>
          <span className="text-small">are on the Flexi Pass</span>
        </p>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="faq-header">
          <h3 className="faq-title">Frequently Asked Questions</h3>
        </div>
        
        <div className="faq-questions">
          <div className="faq-item">
            <div className="faq-question">
              <span>What is Cityflo Flexi pass?</span>
              <FaChevronDown className="chevron-icon" />
            </div>
            <div className="faq-divider"></div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <span>Why should I buy a round trip pass?</span>
              <FaChevronDown className="chevron-icon" />
            </div>
            <div className="faq-divider"></div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <span>Why should I buy a one way pass?</span>
              <FaChevronDown className="chevron-icon" />
            </div>
            <div className="faq-divider"></div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <span>Does this pass include weekends or holidays?</span>
              <FaChevronDown className="chevron-icon" />
            </div>
            <div className="faq-divider"></div>
          </div>
        </div>

        <div className="faq-blur-overlay"></div>
        
        <button className="view-all-faqs">
          <span>View all FAQs</span>
          <FaChevronDown className="chevron-down" />
        </button>
      </div>
    </div>
  );
};

export default Screen;
