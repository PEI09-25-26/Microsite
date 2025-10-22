import React, { useState } from 'react';
import './Cronogram.css';

const timelineData = [
  {
    title: "Inception - Jan 2025 / Feb 2025",
    cards: [
      {
        title: "Things",
        subtitle: "A lot of things",
        description: "First phase focusing on initial planning and requirements"
      },
      {
        title: "Requirements Gathering",
        subtitle: "Collect user and system requirements",
        description: "Detailed analysis of user needs and system specifications"
      },
      {
        title: "Initial Planning",
        subtitle: "Project scope and objectives",
        description: "Define project goals and deliverables"
      },
      {
        title: "Team Formation",
        subtitle: "Assemble project team",
        description: "Identify and assign team members to roles"
      }
    ]
  },
  {
    title: "Elaboration - Feb 2025 / Mar 2025",
    cards: [
      {
        title: "Things",
        subtitle: "A lot of things",
        description: "Second phase focusing on detailed design and architecture"
      }
    ]
  },
  {
    title: "Construction - Apr 2025 / Aug 2025",
    cards: [
      {
        title: "Things",
        subtitle: "A lot of things",
        description: "Development and implementation phase"
      },
      {
        title: "Development Sprint 1",
        subtitle: "Core functionality",
        description: "Implement basic system features"
      },
      {
        title: "Development Sprint 2",
        subtitle: "Advanced features",
        description: "Add complex system capabilities"
      },
      {
        title: "Testing Phase",
        subtitle: "Quality assurance",
        description: "Comprehensive testing and bug fixes"
      },
      {
        title: "Documentation",
        subtitle: "User and technical docs",
        description: "Create comprehensive documentation"
      }
    ]
  },
  {
    title: "Transition - Sep 2025",
    cards: [
      {
        title: "Things",
        subtitle: "A lot of things",
        description: "Final phase focusing on deployment and transition"
      }
    ]
  }
];

// Calculate fixed height based on 3 cards (for consistent layout)
const CARD_HEIGHT = 120; 
const CARD_GAP = 16; 
const TITLE_HEIGHT = 80; 
const HEADER_HEIGHT = 60; 
const PADDING = 32; 

// Height for exactly 3 cards (visible area)
const VISIBLE_CARDS_HEIGHT = (CARD_HEIGHT * 3) + (CARD_GAP * 2);
const CONTAINER_HEIGHT = HEADER_HEIGHT + TITLE_HEIGHT + VISIBLE_CARDS_HEIGHT + PADDING;

export default function Cronogram() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextPhase = () => {
    setDirection('right');
    setCurrentPhase((prev) => (prev + 1) % timelineData.length);
  };

  const prevPhase = () => {
    setDirection('left');
    setCurrentPhase((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  const goToPhase = (index) => {
    setDirection(index > currentPhase ? 'right' : 'left');
    setCurrentPhase(index);
  };

  return (
    <div 
      className="timeline-container"
      style={{ height: `${CONTAINER_HEIGHT}px` }}
    >
      <div className="timeline-header">
        <button className="nav-button" onClick={prevPhase} disabled={currentPhase === 0}>
          ‹
        </button>
        
        <div className="phase-indicator">
          {timelineData.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${index === currentPhase ? 'active' : ''}`}
              onClick={() => goToPhase(index)}
            />
          ))}
        </div>

        <button className="nav-button" onClick={nextPhase} disabled={currentPhase === timelineData.length - 1}>
          ›
        </button>
      </div>

      <div 
        className="timeline-content"
        style={{ height: `calc(100% - ${HEADER_HEIGHT}px)` }}
      >
        <div className={`timeline-slider direction-${direction}`}>
          <div key={currentPhase} className="timeline-phase active">
            <div className="timeline-title">{timelineData[currentPhase].title}</div>
            <div className="timeline-cards-container">
              <div className="timeline-cards">
                {timelineData[currentPhase].cards.map((card, cardIndex) => (
                  <div 
                    key={cardIndex} 
                    className="timeline-card"
                  >
                    <h3>{card.title}</h3>
                    <p className="subtitle">{card.subtitle}</p>
                    <p className="description">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {timelineData[currentPhase].cards.length > 3}
          </div>
        </div>
      </div>
    </div>
  );
}