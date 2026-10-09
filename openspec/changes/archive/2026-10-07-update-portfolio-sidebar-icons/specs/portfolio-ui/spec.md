## MODIFIED Requirements

### Requirement: Sidebar Lateral de Apresentação
O sistema SHALL / DEVE exibir uma barra lateral esquerda fixa contendo a foto de perfil do profissional, nome completo, título profissional ("Geógrafo | Desenvolvimento GIS e WebGIS | Engenharia de Dados | Ciência de Dados | Aplicações com IA"), o texto completo do Item 1 (Resumo sobre mim), tags de atuação do Item 2 do currículo, e links diretos para GitHub (`ThiagoPanchi`), LinkedIn, e-mail (`panchiniak@gmail.com`) e localização (`Florianópolis/Santa Catarina`). Em telas desktop, a sidebar SHALL / DEVE ocupar aproximadamente 35% da largura disponível da plataforma, preservando o conteúdo rolável quando necessário.

#### Scenario: Visualização da sidebar
- **WHEN** a página é carregada em telas desktop
- **THEN** a sidebar lateral apresenta o resumo biográfico completo do Item 1 e a lista integral de tags do Item 2 com links funcionais para os canais de contato, ocupando cerca de 35% da área total da plataforma.

#### Scenario: Download do currículo
- **WHEN** o usuário clica no botão "Download CV" na barra lateral
- **THEN** o sistema inicia o download do arquivo de currículo em formato PDF no idioma atualmente selecionado.

### Requirement: Modais e Popups de Detalhe Contextual
O sistema SHALL / DEVE exibir uma janela modal flutuante com plano de fundo escurecido (*backdrop*) e bordas estilizadas em tons de verde quando um Ponto de Interesse (POI) da cena for acionado, preenchida com os dados correspondentes dos Itens 3, 4, 5, 6 e 7 do `curriculo_thiago_panchiniak.md`, e SHALL / DEVE exibir os modais dos distritos tecnológicos apenas quando os respectivos distritos forem selecionados dentro do zoom urbano da Cidade de Stacks. Os POIs e áreas navegáveis SHALL / DEVE exibir ícones PNG locais de `public/assets/png` conforme o mapa visual definido para cada área.

#### Scenario: Visualização de detalhes de um projeto
- **WHEN** o usuário clica em um dos projetos da Ilha de Portfólio
- **THEN** o sistema exibe o modal contendo a descrição real do projeto selecionado, tecnologias e links, respeitando a organização visual atual da ilha.

#### Scenario: Fechamento do modal
- **WHEN** o usuário clica no botão fechar (X), pressiona a tecla Esc ou clica no backdrop externo
- **THEN** o modal é ocultado e o foco visual retorna à visualização da ilha corrente.

#### Scenario: Detalhe de distrito no zoom urbano
- **WHEN** o usuário está no zoom urbano e clica em um distrito tecnológico da Cidade de Stacks
- **THEN** o sistema exibe o modal do distrito selecionado com suas tecnologias e aplicações.

#### Scenario: Ícones e nomes da Ilha Sobre Mim
- **WHEN** a Ilha Sobre Mim é exibida
- **THEN** os POIs apresentam `Quem sou eu` com o ícone `001-Quem-sou-eu.png`, `Formação` com o ícone `002-formacao.png`, e `Stacks & Tecnologias` com o ícone `003-stack.png`.

#### Scenario: Ícone da área Quem sou eu
- **WHEN** a área `Quem sou eu` está visível na Ilha Sobre Mim
- **THEN** o ícone `001-Quem-sou-eu.png` é exibido junto ao marcador clicável dessa área.

#### Scenario: Ícones dos distritos tecnológicos
- **WHEN** o usuário entra no zoom urbano de Stacks & Tecnologias
- **THEN** os distritos apresentam `Geotecnologia GIS` com o ícone `004-gis.png`, `Backend e Bancos` com o ícone `005-backend.png`, `IA ML` com o ícone `006-IA-ML.png`, `Cloud ETL` com o ícone `007-ETL.png`, e `Tecnologias Futuras` com o ícone `008-Futuro.png`.

#### Scenario: Ícones da Ilha da Trajetória
- **WHEN** a Ilha da Trajetória/Currículo é exibida
- **THEN** as áreas apresentam `Atual/Ultima Experiencia` com o ícone `012-atual.png`, `Experiencias Anteriores` com o ícone `010-experience.png`, `Docência` com o ícone `011-docencia.png`, e `Projetos Próprios` com o ícone `013-projetos-proprios.png`.

#### Scenario: Organização visual da Ilha de Portfólio
- **WHEN** a Ilha de Portfólio é exibida
- **THEN** ela apresenta `LLM Local Llama` com o ícone `009-ai-assistant.png`, `GeoBrasil` com o ícone `014-GeoBrasil.png`, `Projetos Github` com o ícone `015-github.png`, `MapGenPlus` com o ícone `16-Mapgen.png`, e `Circula` com o ícone `17-Circula.png`.

#### Scenario: Ícone da Ilha de Contato
- **WHEN** a Ilha de Contato/Farol é exibida
- **THEN** o POI de contato apresenta o ícone `018-contato.png` junto ao marcador clicável.

#### Scenario: Agrupamento de projetos GitHub
- **WHEN** o usuário aciona a área `Projetos Github`
- **THEN** o modal correspondente representa em uma única área os conteúdos antes separados em `Pipeline ETL Azure`, `API de Drones` e `Inteligência de Mercado`.

#### Scenario: Enquadramento de ilha após zoom
- **WHEN** o usuário navega ou aproxima a câmera para uma ilha em telas desktop com a sidebar ampliada
- **THEN** a ilha selecionada permanece inteira e utilizável na área visível do mapa que sobra ao lado da sidebar, sem ficar cortada pela barra lateral.

#### Scenario: Enquadramento da visão geral
- **WHEN** o usuário está na `Visão Geral` do arquipélago
- **THEN** todas as ilhas aparecem por inteiro dentro da área visível do mapa, incluindo a Ilha Sobre Mim sem corte nas bordas da tela.
