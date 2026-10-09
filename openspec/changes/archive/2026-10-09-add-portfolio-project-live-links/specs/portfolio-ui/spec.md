## MODIFIED Requirements

### Requirement: Modais e Popups de Detalhe Contextual
O sistema SHALL / DEVE exibir uma janela modal flutuante com plano de fundo escurecido (*backdrop*) e bordas estilizadas em tons de verde quando um Ponto de Interesse (POI) da cena for acionado, preenchida com os dados correspondentes dos Itens 3, 4, 5, 6 e 7 do `curriculo_thiago_panchiniak.md`, e SHALL / DEVE exibir os modais dos distritos tecnológicos apenas quando os respectivos distritos forem selecionados dentro do zoom urbano da Cidade de Stacks. Os POIs e áreas navegáveis SHALL / DEVE exibir ícones PNG locais de `public/assets/png` conforme o mapa visual definido para cada área, com o ícone da área `Quem sou eu` alinhado um pouco mais a oeste sobre a floresta da Ilha Sobre Mim. Os modais dos projetos GeoBrasil e Circula SHALL / DEVE disponibilizar links de demonstração ao vivo para suas respectivas páginas publicadas no GitHub Pages.

#### Scenario: Visualização de detalhes de um projeto
- **WHEN** o usuário clica em um dos projetos da Ilha de Portfólio
- **THEN** o sistema exibe o modal contendo a descrição real do projeto selecionado, tecnologias e links, respeitando a organização visual atual da ilha.

#### Scenario: Links ao vivo de GeoBrasil e Circula
- **WHEN** o usuário abre o modal do projeto `GeoBrasil` ou `Circula` na Ilha de Portfólio
- **THEN** o botão de demonstração ao vivo aponta para `https://thiagopanchi.github.io/GeoBrasil/` para GeoBrasil e `https://thiagopanchi.github.io/Mock-Circula/` para Circula.

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
- **THEN** o ícone `001-Quem-sou-eu.png` é exibido junto ao marcador clicável dessa área, levemente deslocado para oeste para ficar visualmente alinhado com a floresta.

#### Scenario: Ícones dos distritos tecnológicos
- **WHEN** o usuário entra no zoom urbano de Stacks & Tecnologias
- **THEN** os distritos apresentam `Geotecnologia GIS` com o ícone `004-gis.png`, `Backend e Bancos` com o ícone `005-backend.png`, `IA ML` com o ícone `006-IA-ML.png`, `Cloud ETL` com o ícone `007-ETL.png`, e `Tecnologias Futuras` com o ícone `008-Futuro.png`.

#### Scenario: Ícones da Ilha da Trajetória
- **WHEN** a Ilha da Trajetória/Currículo é exibida
- **THEN** as áreas apresentam `Atual/Ultima Experiencia` com o ícone `012-atual.png`, `Experiencias Anteriores` com o ícone `010-experience.png`, `Docência` com o ícone `011-docencia.png`, e `Projetos Próprios` com o ícone `013-projetos-proprios.png`.

#### Scenario: Organização visual da Ilha de Portfólio
- **WHEN** a Ilha de Portfólio é exibida
- **THEN** ela apresenta `LLM Local Llama` com o ícone `009-ai-assistant.png`, `GeoBrasil` com o ícone `014-GeoBrasil.png`, `Projetos Github` com o ícone `015-github.png`, `MapGenPlus` com o ícone `16-Mapgen.png`, e `Circula` com o ícone `17-Circula.png`.

#### Scenario: Forma e escala da Ilha de Portfólio
- **WHEN** a Ilha de Portfólio é exibida
- **THEN** a ilha aparece com uma composição semelhante a um `T` deitado, aproximadamente o triplo da área visual anterior, litoral com linhas fluidas e orgânicas sem aparência de áreas redondas desconectadas, e mantém os cinco POIs de projeto acessíveis.

#### Scenario: Zonas temáticas da Ilha de Portfólio
- **WHEN** a Ilha de Portfólio é exibida
- **THEN** `MapGenPlus` aparece como uma área montanhosa no lugar do porto/baía anterior, `GeoBrasil` aparece em uma zona residencial extensa e ampliada dentro da ilha com casas baixas, `LLM Local Llama` aparece como aeroporto localizado na perna do `T`, `Circula` aparece em uma floresta visualmente consistente com a floresta da Ilha Sobre Mim e com sua base totalmente contida dentro da ilha, e `Projetos Github` aparece como uma estação de lançamento de foguetes, com todas as áreas usando uma linguagem visual padronizada.

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
