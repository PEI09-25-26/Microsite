import React, { useState } from 'react';
import './Cronogram.css';

const timelineData = [
  {
    title: "Inception - 16/9/25 -> 14/10/25",
    cards: [
      {
        title: "Análise da proposta de projeto - 16/9/25 -> 23/9/25",
        subtitle: "",
        description: ""
      },
      {
        title: "Primeiros passos - 23/9/25 -> 7/10/25",
        subtitle: "Identificação de problemas e objetivos",
        description: "Brainstorming de ideias iniciais e definição de equipas"
      },
      {
        title: "Análise de competidores - 30/9/25 -> 14/10/25",
        subtitle: "Pesquisa de mercado",
        description: "Avaliação de soluções existentes e identificação de lacunas"
      },

    ]
  },
  {
    title: "Elaboration - 7/10/25 -> 11/11/25",
    cards: [
      {
        title: "Teste de tecnologias - 7/10/25 -> 28/10/25",
        subtitle: "Exploração de ferramentas e frameworks",
        description: "Avaliação de tecnologias adequadas para o projeto"
      },
      {
        title: "Escolha e validação de arquitetura - 28/10/25 -> 11/11/25",
        subtitle: "Definição da estrutura do sistema",
        description: "Decisão sobre padrões arquiteturais e validação com stakeholders"
      },
      {
        title: "Definição de user cases, personas e requisitos - 28/10/25 -> 11/11/25",
        subtitle: "Compreensão das necessidades do usuário",
        description: "Criação de user stories e especificação de requisitos funcionais e não funcionais"
      }
    ]
  },
  {
    title: "Construction - 4/11/25 -> ...",
    cards: [
      {
        title: "Desenvolvimento MVP - 4/11/25 -> ...",
        subtitle: "Início da produção do produto mínimo viável",
        description: "Foco nas funcionalidades essenciais"
      },
      {
        title: "Protótipo distribuído - 4/11/25 -> 25/11/25",
        subtitle: "Primeira versão funcional do jogo em rede",
        description: "Implementação de funcionalidades básicas de multiplayer"
      },
      {
        title: "Mockup - 4/11/25 -> 18/11/25",
        subtitle: "Design inicial da interface do usuário",
        description: "Criação de wireframes e protótipos visuais"
      },
      {
        title: "Visão por computador - 4/11/25 -> 25/11/25",
        subtitle: "Implementação de reconhecimento de cartas",
        description: "Desenvolvimento de modelos para identificar cartas através da câmera"
      },
      {
        title: "Interface gráfica - 18/11/25 -> 2/12/25",
        subtitle: "Desenvolvimento da UI/UX",
        description: "Implementação de elementos visuais e interação do usuário"
      },
      {
        title: "Algoritmia - 25/11/25 -> 9/12/25",
        subtitle: "Desenvolvimento de algoritmos centrais",
        description: "Criação de lógicas de jogo e IA"
      },
      {
        title: "Testes - 18/11/25 -> 16/12/25",
        subtitle: "Avaliação da experiência do usuário",
        description: "Coleta de feedback e melhorias na interface"
      },
      {
        title: "Integração - 25/11/25 -> 16/12/25",
        subtitle: "Combinação de componentes do sistema",
        description: "Garantia de funcionamento conjunto dos módulos desenvolvidos"
      }
    ]
  },
  {
    title: "Transition - ...",
    cards: [
      {
        title: "Brevemente...",
        subtitle: "",
        description: ""
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