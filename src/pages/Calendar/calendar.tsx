import React, { useState } from 'react';
import './Cronogram.css';

const timelineData = [
  {
    title: "Inception - 16/09/2025 -> 28/10/2025",
    cards: [
      {
        title: "Início e Equipas - 16/09/2025",
        subtitle: "Apresentação e propostas",
        description: "Apresentação do curso, das propostas de projeto e formação das equipas."
      },
      {
        title: "Milestone 1 - 28/10/2025",
        subtitle: "Objetivos e Calendário",
        description: "Apresentação dos objetivos do ciclo de vida (lifecycle objectives) e do calendário do projeto."
      }
    ]
  },
  {
    title: "Elaboration - 04/11/2025 -> 18/11/2025",
    cards: [
      {
        title: "Check Point - 11/11/2025",
        subtitle: "Acompanhamento",
        description: "Ponto de situação onde cada equipa mostra brevemente o progresso do projeto."
      },
      {
        title: "Milestone 2 - 18/11/2025",
        subtitle: "Arquitetura do Ciclo de Vida",
        description: "Apresentação da arquitetura; o milestone é atingido quando a arquitetura for validada."
      }
    ]
  },
  {
    title: "Construction - 25/11/2025 -> 19/05/2026",
    cards: [
      {
        title: "Milestone 3 (MVP) - 16/12/2025",
        subtitle: "Protótipo e Apresentação Intercalar",
        description: "Apresentação mid-term do MVP com os orientadores e peer evaluation."
      },
      {
        title: "M1 (Semestre 2) - 17/03/2026",
        subtitle: "Usabilidade e Acessibilidade",
        description: "Validação da usabilidade e acessibilidade digital do sistema."
      },
      {
        title: "M2 (Semestre 2) - 24/03/2026 -> 31/03/2026",
        subtitle: "Desenvolvimento do Protótipo",
        description: "Implementação das funcionalidades fundamentais do protótipo."
      },
      {
        title: "M3 (Semestre 2) - 05/05/2026",
        subtitle: "Requisitos Legais e Riscos",
        description: "Apresentação de requisitos legais, riscos técnicos e plano de negócios."
      },
      {
        title: "Milestone 4 - 19/05/2026",
        subtitle: "Validação do Sistema",
        description: "Validação de componentes do sistema: performance, escalabilidade, testes e segurança."
      }
    ]
  },
  {
    title: "Transition - 26/05/2026 -> 02/06/2026",
    cards: [
      {
        title: "Milestone 5 - 26/05/2026",
        subtitle: "Demo, Poster e Vídeo",
        description: "Apresentação de demonstração, poster e vídeo promocional do projeto."
      },
      {
        title: "Milestone 6 - 02/06/2026",
        subtitle: "Apresentação Final",
        description: "Apresentação final do projeto; todas as funcionalidades desenvolvidas!"
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