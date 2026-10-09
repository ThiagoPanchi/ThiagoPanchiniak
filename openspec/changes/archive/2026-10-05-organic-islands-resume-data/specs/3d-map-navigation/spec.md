## MODIFIED Requirements

### Requirement: Renderização da Cena 3D do Arquipélago
O sistema SHALL / DEVE renderizar uma cena 3D com plano oceânico e quatro ilhas com relevos e contornos orgânicos e disformes (não cilíndricos/redondos), contendo blocos densos e agrupados de elementos 3D (bosque com múltiplas árvores na floresta, cordilheira com múltiplos picos na montanha, aglomerado urbano com múltiplos edifícios na cidade, e plataformas tecnológicas compostas).

#### Scenario: Carregamento inicial da cena
- **WHEN** o usuário acessa a página inicial do portfólio
- **THEN** o sistema exibe o arquipélago com ilhas de silhuetas naturais e recortadas, praias irregulares e blocos agrupados de elementos em cada região a 60 FPS.

### Requirement: Transição de Câmera Entre Ilhas
O sistema SHALL / DEVE mover a câmera dinamicamente com animação suave de aproximação (*zoom*, translação e rotação orbital) quando o usuário seleciona uma das abas de navegação ou quando aciona uma camada de zoom aprofundada.

#### Scenario: Seleção de aba no cabeçalho
- **WHEN** o usuário clica no botão "About Me" no cabeçalho
- **THEN** a câmera executa uma transição cinematográfica fluida posicionando o enquadramento na Ilha About Me.

#### Scenario: Retorno à visão panorâmica
- **WHEN** o usuário clica na área do oceano ou no botão de visão geral
- **THEN** a câmera retorna suavemente para a posição panorâmica do arquipélago completo.

### Requirement: Interatividade com Pontos de Interesse (POIs)
O sistema SHALL / DEVE detectar o apontamento do cursor e o clique do usuário sobre os blocos de elementos tridimensionais das ilhas e permitir interação com regiões agrupadas.

#### Scenario: Hover sobre elemento clicável
- **WHEN** o usuário move o cursor do mouse sobre um bloco interativo da ilha (ex.: bosque de árvores)
- **THEN** o cursor muda para estilo ponteiro (*pointer*) e o grupo de elementos 3D recebe realce visual com tonalidade verde.

#### Scenario: Clique em ponto de interesse
- **WHEN** o usuário clica sobre a Floresta na Ilha About Me
- **THEN** o sistema aciona a abertura de uma janela de detalhes (*popup/modal*) contendo o texto biográfico do Item 3 do currículo.

## ADDED Requirements

### Requirement: Camada de Zoom Urbano para a Cidade das Stacks
O sistema SHALL / DEVE fornecer uma camada de zoom aprofundada na Cidade/Vila de Habilidades da Ilha About Me (Item 5 do currículo), aproximando a câmera da malha urbana para permitir a exploração e seleção individual de distritos tecnológicos (Geotecnologias/GIS, Backend/Dados, Cloud/ETL, IA/ML, e Tecnologias Futuras).

#### Scenario: Entrada no zoom da cidade
- **WHEN** o usuário clica na Cidade/Vila de Stacks ou seleciona a respectiva opção
- **THEN** a câmera transita suavemente para um enquadramento aproximado da cidade, revelando os distritos tecnológicos individuais.

#### Scenario: Seleção de distrito tecnológico
- **WHEN** o usuário clica em um dos distritos da cidade no zoom urbano
- **THEN** o sistema abre o modal detalhando as tecnologias, aplicações práticas e nível de domínio daquela vertical técnica.
