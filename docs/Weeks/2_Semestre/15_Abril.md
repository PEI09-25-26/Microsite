---
id: weeks-15-abril
sidebar_position: 2
---

# 15 Abril

**Data:** 15 de abril de 2026  
**Unidade Curricular:** PEI  
**Projeto:** Sueca Application with Virtual Player  
**Grupo:** P9  
**Docentes:** Guilherme Campos e Daniel Albuquerque  
**Participantes:** Cátia Lopes, Daniel Martins, Gonçalo Calvo, Lucas Ruivo, Pedro Marques, Tiago Mendes  
**Local:** Sala 301  
**Hora:** 11h  

## Ordem de Trabalhos
1. Demonstração da interface e sistema de autenticação 
2. Visão computacional para reconhecimento de cartas 
3. Alteração de arquitetura (REST → Publish-Subscribe) 
4. Agentes inteligentes

---

### 1. Demonstração da Interface e Sistema de Autenticação
Foi apresentada a nova interface relativa ao perfil de utilizador, incluindo funcionalidades de login, criação de conta e edição de perfil.
Os docentes deram feedback positivo relativamente ao design e organização destas funcionalidades.

Como melhorias da interface em geral, foi sugerido:
- Simplificar a interface inicial, introduzindo um botão principal “Jogar”, que ao clicar abre as opções de jogo. 

### 2. Visão Computacional (Reconhecimento de Cartas)
Foram apresentadas duas abordagens para resolver o problema de identificação de cartas na mesa, ambas recorrendo a YOLO e OpenCV:
- Identificação da carta completa seguida de recorte do canto (através das coordenadas da carta); 
- Identificação direta do canto da carta. 

Foi referido que a versão anterior apresentava dificuldades na identificação de cartas específicas, como cincos e Ases.

Os docentes reforçaram a importância de:
- Permitir correção manual em caso de erro na deteção; 
- Considerar maior utilização de técnicas de OCR (Reconhecimento de Caracteres), em complemento ao reconhecimento por imagem; 
- Implementar estatísticas automáticas de desempenho (ex.: taxa de erro, número de falhas). 

Foi ainda destacado que:
- A deteção funciona eficientemente a curta distância; 
- Os principais constrangimentos ocorrem a distâncias superiores. 

### 3. Alteração de Arquitetura (REST → Publish-Subscribe)
Foi apresentada a evolução da arquitetura do sistema:
- **Modelo Anterior:** Comunicação baseada em pedidos periódicos (GET) a cada 2 segundos. Identificou-se o problema de sobrecarga do servidor, especialmente em cenários com múltiplas salas ativas.
- **Modelo Atual:** Implementação de uma arquitetura baseada em eventos (Publish-Subscribe), onde as atualizações são transmitidas de forma assíncrona apenas quando ocorrem alterações. 

Concluiu-se que esta alteração proporciona uma solução significativamente mais eficiente e escalável.

### 4. Agentes Inteligentes
Foi discutido o progresso no desenvolvimento dos agentes artificiais.

Os docentes recomendaram:
- A utilização de fluxogramas como ferramentas de abstração de alto nível, sendo idealmente gerados automaticamente a partir do código.
- Uma abordagem incremental no desenvolvimento do agente, otimizando o seu desempenho em cenários específicos (ex.: otimização de jogadas na última posição da vaza).

Adicionalmente, foi sugerido:
- Explorar as árvores de decisão para simular todas as possíveis jogadas e escolher a que maximiza o retorno.
- Introduzir fatores probabilísticos associados às possíveis ações dos adversários (como a probabilidade de corte de um naipe). 

### 5. Outros Aspetos Técnicos
Foi detetado que o endereço IP do sistema encontrava-se configurado de forma estática (*hardcoded*). Acordou-se a sua correção e parametrização, visando facilitar as metodologias de teste e a portabilidade global da aplicação.
