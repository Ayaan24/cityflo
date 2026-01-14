import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import './FlexiPass.css';

const FlexiPass = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [selectedPlan, setSelectedPlan] = useState({
    type: 'flexi',
    rides: 40
  });

  const flexiPlans = [
    { rides: 40, morning: 20, evening: 20, price: 195 },
    { rides: 10, morning: 5, evening: 5, price: 207 }
  ];

  const superSaverPlans = [
    { rides: 40, morning: 20, evening: 20, price: 159 }
  ];

  return (
    <div className="flexi-pass-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="time">9:30</span>
        <div className="status-icons">
          <img src="/topbin.png" alt="Status Icons" className="status-icons-image" />
        </div>
      </div>

      {/* Back Button */}
      <button className="back-button">
        <IoMdArrowRoundBack className="back-icon" />
      </button>

      {/* Hero Section with Background */}
      <div className="hero-section">
        <div className="hero-background">
          <img src="/heroimage.png" alt="Hero" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <img src="/cityflologo.png" alt="Cityflo" className="logo" />
          <h1 className="flexi-pass-title">FLEXI PASS</h1>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <img src="/Offer.png" alt="Savings" className="feature-icon" />
          </div>
          <p className="feature-text">Savings up to 30%</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <img src="/rides.png" alt="Pre-booked" className="feature-icon" />
          </div>
          <p className="feature-text">Rides are Pre-booked</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <img src="/Subscription.png" alt="Reschedule" className="feature-icon" />
          </div>
          <p className="feature-text">Reschedule for free</p>
        </div>
      </div>

      {/* Small Separator */}
      <div className="feature-separator"></div>

      {/* Refund Policy */}
      <div className="refund-policy">
        <p className="refund-text">
          Get a <span className="highlight">full refund</span> when you{' '}
          <span className="highlight">cancel a ride</span>
        </p>
        <div className="refund-checkmark">✓</div>
      </div>

      {/* Plan Selection Section */}
      <div className="plan-selection">
        <h2 className="section-title">Select a plan</h2>
        <p className="section-subtitle">Rides are pre-booked on consecutive weekdays</p>

        {/* Trip Type Toggle */}
        <div className="trip-toggle">
          <button
            className={`trip-option ${tripType === 'oneWay' ? 'active' : ''}`}
            onClick={() => setTripType('oneWay')}
          >
            <span>One-way</span>
            {tripType === 'oneWay' && <IoMdArrowRoundBack className="arrow-icon" />}
          </button>
          <button
            className={`trip-option ${tripType === 'roundTrip' ? 'active round-trip' : ''}`}
            onClick={() => setTripType('roundTrip')}
          >
            <span>Round Trip</span>
            {tripType === 'roundTrip' && <IoMdArrowRoundBack className="arrow-icon" />}
          </button>
        </div>

        {/* Flexi Plan */}
        <div className="plan-card flexi-plan">
          <h3 className="plan-card-title">Flexi Plan - Maximum flexibility</h3>
          {flexiPlans.map((plan, index) => (
            <div
              key={`flexi-${plan.rides}`}
              className={`plan-option ${
                selectedPlan.type === 'flexi' && selectedPlan.rides === plan.rides
                  ? 'selected'
                  : ''
              }`}
              onClick={() => setSelectedPlan({ type: 'flexi', rides: plan.rides })}
            >
              <div className="plan-option-left">
                {selectedPlan.type === 'flexi' && selectedPlan.rides === plan.rides ? (
                  <FaCheckCircle className="check-icon" />
                ) : (
                  <div className="radio-circle"></div>
                )}
                <div className="plan-details">
                  <p className="ride-count">
                    <strong>{plan.rides} Rides</strong>
                  </p>
                  <p className="ride-breakdown">
                    ({plan.morning} morning + {plan.evening} evening)
                  </p>
                  <div className="plan-features">
                    <span className="feature-badge green">Full refunds on cancellations</span>
                    <span className="feature-badge green">Free rescheduling</span>
                  </div>
                </div>
              </div>
              <div className="plan-price">₹{plan.price}/ride</div>
            </div>
          ))}
        </div>

        {/* Super Saver Plan */}
        <div className="plan-card super-saver-plan">
          <div className="plan-divider"></div>
          <h3 className="plan-card-title">Super Saver Plan - Maximum savings</h3>
          {superSaverPlans.map((plan, index) => (
            <div
              key={`saver-${plan.rides}`}
              className={`plan-option ${
                selectedPlan.type === 'saver' && selectedPlan.rides === plan.rides
                  ? 'selected'
                  : ''
              }`}
              onClick={() => setSelectedPlan({ type: 'saver', rides: plan.rides })}
            >
              <div className="plan-option-left">
                {selectedPlan.type === 'saver' && selectedPlan.rides === plan.rides ? (
                  <FaCheckCircle className="check-icon" />
                ) : (
                  <div className="radio-circle"></div>
                )}
                <div className="plan-details">
                  <p className="ride-count">
                    <strong>{plan.rides} Rides</strong>
                  </p>
                  <p className="ride-breakdown">
                    ({plan.morning} morning + {plan.evening} evening)
                  </p>
                  <div className="plan-features">
                    <span className="feature-badge red">No refund on cancellations</span>
                    <span className="feature-badge green">Free rescheduling</span>
                  </div>
                </div>
              </div>
              <div className="plan-price">₹{plan.price}/ride</div>
            </div>
          ))}
        </div>
      </div>

      {/* Proceed Button */}
      <button className="proceed-button">Proceed with selected plan</button>
    </div>
  );
};

export default FlexiPass;
