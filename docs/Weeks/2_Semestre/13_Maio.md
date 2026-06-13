---
id: weeks-13-maio
sidebar_position: 4
---

# 13 Maio

**Data:** 13 de maio de 2026  
**Unidade Curricular:** PEI  
**Projeto:** Sueca Application with Virtual Player  
**Grupo:** P9  
**Docentes:** Guilherme Campos e Daniel Albuquerque  
**Participantes:** Cátia Lopes, Daniel Martins, Gonçalo Calvo, Lucas Ruivo, Pedro Marques, Tiago Mendes  
**Local:** Sala 301  
**Hora:** 15h30

## Ordem de Trabalhos
1. Estatísticas dos agentes
2. Visão Computacional

---

### 1. Estatísticas dos Agentes

Foi discutida a importância da representação gráfica dos resultados estatísticos, de forma a facilitar a interpretação e comparação do desempenho dos diferentes agentes inteligentes.

Os docentes sugeriram a utilização inicial de agentes com comportamento aleatório, procedendo posteriormente a pequenas alterações incrementais na lógica de decisão. Esta abordagem permitirá analisar estatisticamente o impacto de cada melhoria introduzida no comportamento do agente.

Como exemplo ilustrativo, foi sugerida a comparação entre:
- Um agente que opera de forma totalmente aleatória;
- Um agente que apenas recorre ao comportamento aleatório após o esgotamento dos ases do adversário.

Desta forma, será possível medir quantitativamente a evolução do desempenho dos agentes e avaliar a eficácia das estratégias implementadas.

### 2. Visão Computacional

Foi realizada uma demonstração do sistema de visão computacional no contexto do jogo.

Foram identificados os seguintes comportamentos relevantes:
- **Falso positivo:** uma carta pode ser incorretamente identificada durante o movimento de lançamento, sendo posteriormente detetada a carta correta quando imóvel.
- As cartas de valor 8, 9 e 10 não são detetadas, conforme definido no sistema.
- Cartas já previamente identificadas não voltam a ser detetadas durante a mesma sessão.

**Sugestões dos docentes:**
- Aumentar o número de fotogramas analisados por segundo (frames per second), de modo a reduzir a ocorrência de falsos positivos.
- Implementar rastreamento do erro durante a visualização da imagem transformada, com o objetivo de compreender melhor os problemas associados à deteção de cartas Ás.
