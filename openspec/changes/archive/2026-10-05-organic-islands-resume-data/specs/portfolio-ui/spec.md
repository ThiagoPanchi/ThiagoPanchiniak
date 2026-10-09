## MODIFIED Requirements

### Requirement: Sidebar Lateral de Apresentação
O sistema SHALL / DEVE exibir uma barra lateral esquerda fixa contendo a foto de perfil do profissional, nome completo, título profissional ("Geógrafo | Desenvolvimento GIS e WebGIS | Engenharia de Dados | Ciência de Dados | Aplicações com IA"), o texto completo do Item 1 (Resumo sobre mim), tags de atuação do Item 2 do currículo, e links diretos para GitHub (`ThiagoPanchi`), LinkedIn, e-mail (`panchiniak@gmail.com`) e localização (`Florianópolis/Santa Catarina`).

#### Scenario: Visualização da sidebar
- **WHEN** a página é carregada em telas desktop
- **THEN** a sidebar lateral apresenta o resumo biográfico completo do Item 1 e a lista integral de tags do Item 2 com links funcionais para os canais de contato.

#### Scenario: Download do currículo
- **WHEN** o usuário clica no botão "Download CV" na barra lateral
- **THEN** o sistema inicia o download do arquivo de currículo em formato PDF no idioma atualmente selecionado.

### Requirement: Modais e Popups de Detalhe Contextual
O sistema SHALL / DEVE exibir uma janela modal flutuante com plano de fundo escurecido (*backdrop*) e bordas estilizadas em tons de verde quando um Ponto de Interesse (POI) da cena for acionado, preenchida com os dados correspondentes dos Itens 3, 4, 5, 6 e 7 do `curriculo_thiago_panchiniak.md`.

#### Scenario: Visualização de detalhes de um projeto
- **WHEN** o usuário clica em um dos projetos da Ilha de Portfólio (Item 7)
- **THEN** o sistema exibe o modal contendo a descrição real do projeto (MapGenPlus, Inteligência de Mercado, GeoBrasil Censo 2022, Pipeline ETL Azure, LLM Llama Local, API Drones ou Circula), tecnologias e links.

#### Scenario: Fechamento do modal
- **WHEN** o usuário clica no botão fechar (X), pressiona a tecla Esc ou clica no backdrop externo
- **THEN** o modal é ocultado e o foco visual retorna à visualização da ilha corrente.
