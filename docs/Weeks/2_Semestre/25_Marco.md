---
id: weeks-25-marco
sidebar_position: 1
---

# 25 Março

**Data:** 25 de março de 2026  
**Unidade Curricular:** PEI  
**Projeto:** Sueca Application with Virtual Player  
**Grupo:** P9  
**Docentes:** Guilherme Campos e Daniel Albuquerque  
**Participantes:** Cátia Lopes, Daniel Martins, Gonçalo Calvo, Lucas Ruivo, Pedro Marques, Tiago Mendes  
**Local:** Sala 301  
**Hora:** 11h  

## Ordem de Trabalhos
1. Demonstração virtual: 1 jogador e 3 bots
2. Demonstração do mockup híbrido 
3. Reconhecimento de cartas 
4. Fluxogramas e evolução do agente inteligente

---

### 1. Demonstração Virtual: 1 jogador e 3 bots
Foi apresentada uma demonstração do sistema com um jogador humano e três bots.
Os docentes referiram que não é adequado incluir um bot que jogue propositadamente mal. Como alternativa, foi sugerida a implementação de diferentes níveis de dificuldade (por exemplo, nível 1 com comportamento aleatório e níveis superiores com maior inteligência).

Relativamente à interface e interação, foram propostas algumas melhorias, nomeadamente:
- Ajustar o fluxo de interação, permitindo primeiro selecionar a ação e só depois o bot (baixa prioridade); 
- Colocar o trunfo noutro lugar, perto do utilizador que o tem, de forma a evitar confusão com cartas jogadas (baixa prioridade); 
- Possibilitar a ordenação das cartas (baixa prioridade); 
- Considerar a opção de mostrar ou ocultar a pontuação nas definições. 

Ao nível da mecânica de jogo, foi sugerido que as cartas jogadas permaneçam visíveis durante um curto período de tempo. A gestão destes tempos deverá ser realizada pelo servidor, evitando esperas desnecessárias. Foi também identificado que o bot com comportamento aleatório pode demorar demasiado tempo a jogar, devendo esse aspeto ser revisto.

Como funcionalidades adicionais, foi sugerida a possibilidade de visualizar a última vaza (baixa prioridade), bem como a inclusão de um monte de cartas com animação. Foi ainda referido que a última ronda poderá ser jogada automaticamente (baixa prioridade).

### 2. Demonstração do Mockup Híbrido
Foi apresentada a versão atual do mockup híbrido, que ainda não se encontra totalmente funcional devido a problemas na gestão do jogo, resultantes da deteção simultânea de múltiplas cartas.

Os docentes recomendaram a documentação clara do estado atual do sistema e dos próximos desenvolvimentos.
Foi também sugerida a criação de um tabuleiro físico para posicionamento das cartas, o que poderá melhorar a organização do jogo e apresentar potencial valor comercial.

Adicionalmente, foi identificado um problema na interface relacionado com o reposicionamento das cartas quando uma é removida. Como solução, foi sugerida a utilização de marcadores de posição (imagens vazias) para manter a estabilidade visual.

### 3. Reconhecimento de Cartas
Foram discutidas diferentes abordagens para o reconhecimento de cartas, nomeadamente:
- Utilização combinada de OpenCV e YOLO; 
- Utilização exclusiva de YOLO. 

Foi sugerida a possibilidade de definir dois fluxos distintos:
- Um para deteção de cartas na mesa (OpenCV + YOLO); 
- Outro para deteção inicial das cartas (apenas YOLO). 

Os docentes recomendaram a realização de testes comparativos entre abordagens, medindo o tempo necessário para detetar cartas ao longo de uma ronda completa.
Foi ainda referido que uma abordagem mais robusta poderá consistir em detetar primeiro a carta e, posteriormente, identificar os seus cantos.
Adicionalmente, foi sugerida a utilização de técnicas de OCR (Optical Character Recognition).

Como medida de robustez, foi recomendada a imposição de restrições que impeçam a sobreposição de cartas, bem como a implementação de alertas para situações de deteção ambígua.

### 4. Fluxogramas e Evolução do Agente Inteligente
Os fluxogramas apresentados deverão ser melhorados, incorporando maior detalhe e seguindo as orientações fornecidas pelos docentes.

Relativamente ao agente inteligente, foi discutida a necessidade de evolução para um modelo mais avançado, capaz de inferir as cartas dos adversários e tomar decisões com base em probabilidades.
Foi dado como exemplo a análise de todas as possíveis combinações de cartas restantes numa fase avançada da jogada, de modo a selecionar a melhor ação.

Foi ainda sugerida a utilização de técnicas de Machine Learning, nomeadamente através da simulação de um elevado número de jogos, permitindo recolher dados estatísticos e melhorar o desempenho dos bots.
