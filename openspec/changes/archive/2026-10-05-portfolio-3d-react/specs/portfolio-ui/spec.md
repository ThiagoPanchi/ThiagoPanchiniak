## Purpose

Fornece a camada de interface gráfica 2D com paleta dark (Preto, Cinza e Verde), integrando barra lateral fixa, cabeçalho de navegação e janelas modais responsivas para exibição de conteúdo detalhado.

## ADDED Requirements

### Requirement: Sidebar Lateral de Apresentação
O sistema SHALL / DEVE exibir uma barra lateral esquerda fixa contendo a foto de perfil do profissional, nome completo, áreas de especialidade (GIS, Dados, IA), breve resumo bio e botões diretos de contato e currículo.

#### Scenario: Visualização da sidebar
- **WHEN** a página é carregada em telas desktop
- **THEN** a sidebar lateral permanece visível e acessível à esquerda sem cobrir os controles centrais do mapa.

#### Scenario: Download do currículo
- **WHEN** o usuário clica no botão "Download CV" na barra lateral
- **THEN** o sistema inicia o download do arquivo de currículo em formato PDF no idioma atualmente selecionado.

### Requirement: Cabeçalho de Navegação
O sistema SHALL / DEVE disponibilizar um cabeçalho fixo no topo da página contendo o logotipo/identificador, botões de navegação para as quatro seções (*About Me*, *Resume*, *Portfolio*, *Contact*) e o comutador de idioma.

#### Scenario: Indicação de seção ativa
- **WHEN** a câmera 3D transita para uma ilha específica
- **THEN** o botão correspondente no cabeçalho exibe estilo visual ativo com destaque em verde.

### Requirement: Modais e Popups de Detalhe Contextual
O sistema SHALL / DEVE exibir uma janela modal flutuante com plano de fundo escurecido (*backdrop*) e bordas estilizadas em tons de verde quando um Ponto de Interesse (POI) da cena for acionado.

#### Scenario: Visualização de detalhes de um projeto
- **WHEN** o usuário clica em um domo de projeto na Ilha de Portfólio
- **THEN** o sistema exibe o modal contendo título, descrição detalhada, tecnologias utilizadas e links para o repositório no GitHub e demo online.

#### Scenario: Fechamento do modal
- **WHEN** o usuário clica no botão fechar (X), pressiona a tecla Esc ou clica no backdrop externo
- **THEN** o modal é ocultado e o foco visual retorna à visualização da ilha corrente.

### Requirement: Responsividade e Fallback Visual
O sistema SHALL / DEVE adaptar a disposição dos elementos de interface para telas compactas e dispositivos móveis.

#### Scenario: Acesso em tela pequena
- **WHEN** a largura da viewport é inferior a 768 pixels
- **THEN** a sidebar lateral é recolhida em um menu deslizante (*drawer*) e a navegação permanece acessível sem obstruir a interação tátil.
