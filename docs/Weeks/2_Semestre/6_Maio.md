---
id: weeks-6-maio
sidebar_position: 3
---

# 6 Maio

**Data:** 6 de maio de 2026  
**Unidade Curricular:** PEI  
**Projeto:** Sueca Application with Virtual Player  
**Grupo:** P9  
**Docentes:** Guilherme Campos e Daniel Albuquerque  
**Participantes:** Cátia Lopes, Daniel Martins, Gonçalo Calvo, Lucas Ruivo, Pedro Marques, Tiago Mendes  
**Local:** Sala 301  
**Hora:** 15h30-17h15  

## Ordem de Trabalhos
1. Uso de Domínios
2. Containerização
3. Consolidação backend
4. Atualizações no frontend
5. Desenvolvimento das estatísticas 
6. Visão computacional

---

### 1. Uso de Domínios
Foi abordada a possibilidade de aquisição do domínio `suecadaojogo.com`, que se encontra atualmente disponível para registo anual.
Apresentou-se a sugestão de integrar no website um mecanismo que possibilite o descarregamento e instalação direta da aplicação nos dispositivos móveis. Decidiu-se, contudo, que esta funcionalidade não assume caráter prioritário na fase atual de desenvolvimento.

### 2. Containerização
Informou-se que o processo de containerização da aplicação foi concluído, visando potenciar a organização do ambiente de desenvolvimento e simplificar a gestão dos múltiplos componentes do sistema.

### 3. Consolidação do Backend
Debateu-se a consolidação da vertente backend. A arquitetura, que se encontrava previamente distribuída em várias ramificações, foi centralizada numa versão única e coesa (frontend 1.4 integrado com Publish-Subscribe).
Retomou-se a análise da migração do modelo puramente REST para a infraestrutura híbrida baseada em Publish-Subscribe, tendo-se reafirmado os ganhos operacionais obtidos com esta modernização.

### 4. Atualizações no Frontend
Demonstraram-se as melhorias implementadas na interface gráfica, assumindo-se o compromisso de retificar pequenas não conformidades que ainda subsistem. As otimizações reportadas incluem:
- Integração de uma animação fluida para a ação de "cortar o baralho", centrada no ecrã.
- Reformulação dinâmica do aspeto visual do baralho: apresentação em tons de cinza quando esgotado, e em coloração padrão quando contém cartas.
- Otimização do ecrã de final de jogo, promovendo uma disposição mais clara da pontuação e um alinhamento estético mais fiel à temática da Sueca.

### 5. Desenvolvimento das Estatísticas
Efetuou-se um ponto de situação face à componente analítica. Embora o desenvolvimento esteja em curso, os dados não se encontram numa fase de consolidação que permita uma demonstração conclusiva. 
Constatou-se que a simulação de cada jogo decorre num intervalo temporal entre os 10 e os 15 segundos, valor que os docentes consideraram deveras moroso para o processamento esperado. Os testes incidiram numa amostragem composta por um agente com comportamento aleatório (random), dois agentes de nível intermédio (average) e um agente de nível elementar (weak).

Recomendações docentes:
- Proceder a testes preliminares de base com a totalidade dos agentes a operar de forma aleatória, de modo a possibilitar a análise de cenários de empate.
- Inspecionar eventuais estrangulamentos motivados pela dependência dos ciclos de teste face ao processamento da interface gráfica.

Salientou-se, ainda, a necessidade imperativa de promover o total desacoplamento entre os algoritmos de lógica de jogo e as rotinas de visualização, em prol da eficiência e escalabilidade sistémica.

### 6. Visão Computacional
Discutiu-se a viabilidade de conceber um algoritmo dinâmico para regulação do limiar (threshold) de deteção, adaptável às variações de luminosidade. No entanto, deliberou-se que a afetação de recursos a esta investigação seria desproporcional tendo em conta a maturidade atual do projeto.
Em contrapartida, concordou-se em apostar na implementação de um sistema robusto de feedback ao utilizador, concretizado através de:
- Alertas visuais na interface.
- Indicações sonoras (por ex.: "Por favor, desloque-se para um ambiente com melhor iluminação").

### Notas Finais
A equipa docente recomendou expressamente que o foco do grupo de trabalho se restrinja a dois vetores fundamentais:
- Conclusão do desenvolvimento do modelo de jogo híbrido.
- Aprimoramento da capacidade analítica e de tomada de decisão dos agentes inteligentes.
