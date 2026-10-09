## Purpose

Fornece uma experiência de visualização cartográfica 3D interativa de um arquipélago fictício com quatro ilhas temáticas, orquestrando transições suaves de câmera e seleção de pontos de interesse.

## ADDED Requirements

### Requirement: Renderização da Cena 3D do Arquipélago
O sistema SHALL / DEVE renderizar uma cena 3D com plano oceânico e quatro ilhas distintas (*About Me*, *Resume*, *Portfolio* e *Contact*), cada uma com topografia e elementos visuais representativos em estilo low-poly.

#### Scenario: Carregamento inicial da cena
- **WHEN** o usuário acessa a página inicial do portfólio
- **THEN** o sistema exibe a cena 3D completa com visão panorâmica isométrica (*Overview*) abrangendo todo o arquipélago a 60 quadros por segundo em hardware compatível com WebGL.

### Requirement: Transição de Câmera Entre Ilhas
O sistema SHALL / DEVE mover a câmera dinamicamente com animação suave de aproximação (*zoom*, translação e rotação orbital) quando o usuário seleciona uma das abas de navegação.

#### Scenario: Seleção de aba no cabeçalho
- **WHEN** o usuário clica no botão "About Me" no cabeçalho
- **THEN** a câmera executa uma transição cinematográfica fluida (duração entre 1,0s e 1,5s) posicionando o enquadramento na Ilha About Me.

#### Scenario: Retorno à visão panorâmica
- **WHEN** o usuário clica na área do oceano ou no botão de visão geral
- **THEN** a câmera retorna suavemente para a posição panorâmica do arquipélago completo.

### Requirement: Interatividade com Pontos de Interesse (POIs)
O sistema SHALL / DEVE detectar o apontamento do cursor e o clique do usuário sobre os elementos tridimensionais das ilhas (Floresta, Montanha, Vila, Marcos de Carreira, Domos de Projetos e Farol).

#### Scenario: Hover sobre elemento clicável
- **WHEN** o usuário move o cursor do mouse sobre um elemento interativo da ilha
- **THEN** o cursor muda para estilo ponteiro (*pointer*) e o elemento 3D recebe realce visual com tonalidade verde.

#### Scenario: Clique em ponto de interesse
- **WHEN** o usuário clica com o botão esquerdo sobre a Floresta na Ilha About Me
- **THEN** o sistema aciona a abertura de uma janela de detalhes (*popup/modal*) contendo as informações biográficas correspondentes.

### Requirement: Restrição de Órbita e Enquadramento
O sistema SHALL / DEVE permitir rotação e inclinação limitadas da cena pelo usuário, sem permitir que a câmera atravesse o solo ou perca a orientação espacial do arquipélago.

#### Scenario: Interação manual de órbita
- **WHEN** o usuário clica e arrasta o mouse sobre a cena 3D
- **THEN** a câmera rotaciona suavemente respeitando limites mínimos e máximos de azimute e elevação polar.
