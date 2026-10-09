## MODIFIED Requirements

### Requirement: Cabeçalho de Navegação
O sistema SHALL / DEVE disponibilizar um cabeçalho fixo no topo da página contendo o logotipo/identificador, botões de navegação para as quatro seções (*About Me*, *Resume*, *Portfolio*, *Contact*) e o comutador de idioma, preservando a indicação ativa da seção About Me também durante a camada de zoom urbano `aboutCity`.

#### Scenario: Indicação de seção ativa
- **WHEN** a câmera 3D transita para uma ilha específica
- **THEN** o botão correspondente no cabeçalho exibe estilo visual ativo com destaque em verde.

#### Scenario: Indicação ativa durante zoom urbano
- **WHEN** o usuário entra no zoom da Cidade de Stacks
- **THEN** o cabeçalho mantém a seção About Me visualmente ativa para indicar que o zoom urbano pertence à Ilha Sobre Mim.

### Requirement: Modais e Popups de Detalhe Contextual
O sistema SHALL / DEVE exibir uma janela modal flutuante com plano de fundo escurecido (*backdrop*) e bordas estilizadas em tons de verde quando um Ponto de Interesse (POI) da cena for acionado, preenchida com os dados correspondentes dos Itens 3, 4, 5, 6 e 7 do `curriculo_thiago_panchiniak.md`, e SHALL / DEVE exibir os modais dos distritos tecnológicos apenas quando os respectivos distritos forem selecionados dentro do zoom urbano da Cidade de Stacks.

#### Scenario: Visualização de detalhes de um projeto
- **WHEN** o usuário clica em um dos projetos da Ilha de Portfólio (Item 7)
- **THEN** o sistema exibe o modal contendo a descrição real do projeto (MapGenPlus, Inteligência de Mercado, GeoBrasil Censo 2022, Pipeline ETL Azure, LLM Llama Local, API Drones ou Circula), tecnologias e links.

#### Scenario: Fechamento do modal
- **WHEN** o usuário clica no botão fechar (X), pressiona a tecla Esc ou clica no backdrop externo
- **THEN** o modal é ocultado e o foco visual retorna à visualização da ilha corrente.

#### Scenario: Detalhe de distrito no zoom urbano
- **WHEN** o usuário está no zoom urbano e clica em um distrito tecnológico da Cidade de Stacks
- **THEN** o sistema exibe o modal do distrito selecionado com suas tecnologias e aplicações.

### Requirement: Responsividade e Fallback Visual
O sistema SHALL / DEVE adaptar a disposição dos elementos de interface para telas compactas e dispositivos móveis, mantendo acessíveis os controles de entrada e saída do zoom urbano sem obstruir a exploração da cena.

#### Scenario: Acesso em tela pequena
- **WHEN** a largura da viewport é inferior a 768 pixels
- **THEN** a sidebar lateral é recolhida em um menu deslizante (*drawer*) e a navegação permanece acessível sem obstruir a interação tátil.

#### Scenario: Controle de zoom urbano em tela pequena
- **WHEN** o usuário acessa a Ilha Sobre Mim ou a Cidade de Stacks em tela compacta
- **THEN** o controle para entrar ou sair do zoom urbano permanece visível e acionável sem cobrir os POIs principais.
