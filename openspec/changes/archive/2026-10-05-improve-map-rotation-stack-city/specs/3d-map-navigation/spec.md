## MODIFIED Requirements

### Requirement: Renderização da Cena 3D do Arquipélago
O sistema SHALL / DEVE renderizar uma cena 3D com plano oceânico e quatro ilhas com relevos e contornos orgânicos e disformes (não cilíndricos/redondos), contendo blocos densos e agrupados de elementos 3D, e a Ilha About Me SHALL / DEVE ter área suficiente para comportar uma Cidade de Stacks ampliada e legível, com base/chão cinza claro, prédios em diferentes tons de cinza escuro, janelas claras/brancas e vias visíveis entre os blocos urbanos.

#### Scenario: Carregamento inicial da cena
- **WHEN** o usuário acessa a página inicial do portfólio
- **THEN** o sistema exibe o arquipélago com ilhas de silhuetas naturais e recortadas, praias irregulares e blocos agrupados de elementos em cada região a 60 FPS.

#### Scenario: Visualização da cidade na Ilha Sobre Mim
- **WHEN** o usuário navega para a Ilha Sobre Mim
- **THEN** o sistema exibe a Ilha Sobre Mim e a Cidade de Stacks em tamanho suficiente para identificar a malha urbana, com chão cinza claro, prédios cinza-escuros, janelas brancas e ruas entre edificações.

#### Scenario: Espaçamento urbano para seleção de stacks
- **WHEN** a Cidade de Stacks é exibida no zoom urbano
- **THEN** os distritos tecnológicos aparecem afastados o suficiente para que seus botões/POIs sejam distinguíveis e selecionáveis sem sobreposição visual excessiva.

### Requirement: Transição de Câmera Entre Ilhas
O sistema SHALL / DEVE mover a câmera dinamicamente com animação suave de aproximação (*zoom*, translação e rotação orbital) quando o usuário seleciona uma das abas de navegação ou quando aciona uma camada de zoom aprofundada, e SHALL / DEVE liberar a órbita manual após a transição terminar para que o mapa não retorne automaticamente à visão-alvo enquanto o usuário explora a cena.

#### Scenario: Seleção de aba no cabeçalho
- **WHEN** o usuário clica no botão "About Me" no cabeçalho
- **THEN** a câmera executa uma transição cinematográfica fluida posicionando o enquadramento na Ilha About Me.

#### Scenario: Retorno à visão panorâmica
- **WHEN** o usuário clica na área do oceano ou no botão de visão geral
- **THEN** a câmera retorna suavemente para a posição panorâmica do arquipélago completo.

#### Scenario: Exploração manual após transição
- **WHEN** uma transição de câmera para Overview, ilha ou zoom urbano termina
- **THEN** o usuário consegue girar/orbitar a cena livremente sem que a câmera seja puxada de volta continuamente para a pose inicial da visão selecionada.

### Requirement: Interatividade com Pontos de Interesse (POIs)
O sistema SHALL / DEVE detectar o apontamento do cursor e o clique do usuário sobre os blocos de elementos tridimensionais das ilhas e permitir interação com regiões agrupadas, incluindo um fluxo em dois níveis para a Cidade de Stacks: um único POI de entrada na visão da Ilha Sobre Mim e POIs de distrito somente no zoom urbano.

#### Scenario: Hover sobre elemento clicável
- **WHEN** o usuário move o cursor do mouse sobre um bloco interativo da ilha (ex.: bosque de árvores)
- **THEN** o cursor muda para estilo ponteiro (*pointer*) e o grupo de elementos 3D recebe realce visual com tonalidade verde.

#### Scenario: Clique em ponto de interesse
- **WHEN** o usuário clica sobre a Floresta na Ilha About Me
- **THEN** o sistema aciona a abertura de uma janela de detalhes (*popup/modal*) contendo o texto biográfico do Item 3 do currículo.

#### Scenario: Entrada única para Stacks na visão da ilha
- **WHEN** o usuário está na visão da Ilha Sobre Mim antes do zoom urbano
- **THEN** a cidade expõe apenas um POI de entrada para "Stacks & Tecnologias" e não expõe individualmente os POIs de Geotecnologias, Backend, Cloud/ETL, IA/ML ou Tecnologias Futuras.

### Requirement: Restrição de Órbita e Enquadramento
O sistema SHALL / DEVE permitir rotação e inclinação limitadas da cena pelo usuário, sem permitir que a câmera atravesse o solo ou perca a orientação espacial do arquipélago, e SHALL / DEVE permitir liberdade de giro horizontal contínua suficiente para explorar o mapa sem recenter automático durante a interação manual.

#### Scenario: Interação manual de órbita
- **WHEN** o usuário clica e arrasta o mouse sobre a cena 3D
- **THEN** a câmera rotaciona suavemente respeitando limites mínimos e máximos de elevação polar, sem retornar automaticamente para a orientação anterior após o usuário soltar o arraste.

### Requirement: Camada de Zoom Urbano para a Cidade das Stacks
O sistema SHALL / DEVE fornecer uma camada de zoom aprofundada na Cidade/Vila de Habilidades da Ilha About Me (Item 5 do currículo), aproximando a câmera da malha urbana com enquadramento amplo o suficiente para permitir a exploração e seleção individual de distritos tecnológicos (Geotecnologias/GIS, Backend/Dados, Cloud/ETL, IA/ML, e Tecnologias Futuras), revelando esses distritos somente após a entrada no zoom urbano.

#### Scenario: Entrada no zoom da cidade
- **WHEN** o usuário clica no POI "Stacks & Tecnologias" da Cidade de Stacks ou seleciona a respectiva opção
- **THEN** a câmera transita suavemente para um enquadramento aproximado porém não excessivamente fechado da cidade, revelando todos os distritos tecnológicos individuais e seus botões de seleção.

#### Scenario: Seleção de distrito tecnológico
- **WHEN** o usuário clica em um dos distritos da cidade no zoom urbano
- **THEN** o sistema abre o modal detalhando as tecnologias, aplicações práticas e nível de domínio daquela vertical técnica.
