---
sidebar_position: 2
---

# Tecnologias Usadas

## Introdução
Neste documento estão expostas as tecnologias que iremos utilizar no desenvolvimento do nosso projeto relativo ao Jogo da Sueca, bem como a justificação para a escolha de cada uma delas, tendo em conta as necessidades do projeto.

---

## Back-end: Python
A linguagem *Python* foi escolhida para o desenvolvimento do *back-end* devido à sua forte ligação com a área da *Inteligência Artificial*, sendo considerada a linguagem mais adequada para este tipo de desenvolvimento.

Python destaca-se também pela sua *sintaxe simples e legibilidade*, o que torna o processo de desenvolvimento mais rápido e o código mais fácil de compreender, facilitando o trabalho em equipa.

O desenvolvimento do *back-end* está a ser realizado no *Visual Studio Code (VS Code)*.

---

## Back-end (Card-Identification): YOLO e OpenCV
Escolhemos um sistema híbrido que combina *OpenCV* com *YOLO* para identificar cartas, pois oferece o melhor equilíbrio entre rapidez, precisão e robustez.

- *OpenCV*: Pré-processamento eficiente das imagens, como correção de perspetivas e segmentação, preparando o ambiente para deteções mais fiáveis.  
- *YOLO*: Modelo avançado de deteção de objetos em tempo real, capaz de identificar cartas mesmo em condições complexas, com elevada confiança e velocidade.

A combinação permite que o OpenCV otimize a imagem antes da análise do YOLO, que faz a identificação precisa, resultando num sistema confiável e eficaz para o reconhecimento automático de cartas.  
Referência: [https://tinyurl.com/4jejyk2u](https://tinyurl.com/4jejyk2u)

---

## Front-end (Mockup): Figma
O *Figma* foi a ferramenta escolhida para a fase de planeamento do design da aplicação, permitindo criar um mockup visual e interativo da interface.

A escolha desta ferramenta deve-se à sua *facilidade de utilização* e ao suporte para *colaboração em tempo real*, otimizando o trabalho em equipa e a comunicação durante o desenvolvimento do design.

O Figma ajuda a definir o aspeto visual e a estrutura de navegação da aplicação antes da implementação, garantindo coerência no design final.

---

## Front-end: Kotlin
Inicialmente considerámos utilizar *React Native* para o desenvolvimento do front-end, mas decidimos optar por *Kotlin* como ferramenta principal.

Motivos da escolha:

- Kotlin é a *linguagem oficial para desenvolvimento Android*, oferecendo integração nativa e desempenho superior face a soluções híbridas.  
- A maioria das aplicações de jogo da sueca na Play Store é desenvolvida em Kotlin, demonstrando a sua adequação e eficiência.  
- Sintaxe moderna e segura, totalmente compatível com o ecossistema Java, facilitando o desenvolvimento.

A utilização de Kotlin assegura um *desenvolvimento eficiente* e uma aplicação *estável*, alinhada com as práticas atuais do mercado.

---

## Conclusão
A combinação destas tecnologias — *Python, **YOLO* e *OpenCV* no back-end, *Figma* para mockup e planeamento do design, e *Kotlin* no front-end — proporciona um *equilíbrio entre eficiência, escalabilidade e uma experiência de utilizador moderna e intuitiva*.