## Why

Thiago Panchiniak precisa de um portfólio profissional moderno, bilíngue (Português e Inglês) e de alto impacto para recrutadores e líderes técnicos das áreas de tecnologia, Geoprocessamento (GIS), Engenharia de Dados e Inteligência Artificial. Em vez de um portfólio tradicional em scroll 2D, a solução implementa uma metáfora cartográfica 3D em um mundo fictício ("Fake Map") usando Three.js e React — demonstrando na prática habilidades em computação gráfica e dados espaciais sem depender de bibliotecas prontas de webmapping, com deploy estático e sem custos no GitHub Pages.

## What Changes

- Inicialização do projeto frontend estático com React e Vite.
- Implementação de cena 3D interativa com Three.js (sem bibliotecas como Leaflet ou Mapbox), composta por um arquipélago fictício com 4 ilhas principais (*About Me*, *Resume*, *Portfolio* e *Contact*).
- Sistema de controle de câmera cinematográfico com transições suaves (zoom/pan/orbit) ao navegar pelas abas do cabeçalho.
- Sistema de interação por raycasting nos elementos 3D (hover highlight verde e clique em Pontos de Interesse - POIs como Floresta, Montanha, Vila, Marcos e Projetos).
- Interface de usuário moderna com tema escuro (Preto, Cinza e Verde esmeralda/neon), incluindo Sidebar lateral esquerda fixa com foto, biografia resumida e contatos, além de modais/popups para detalhamento dos POIs.
- Suporte a internacionalização (i18n) bilíngue com alternância dinâmica e persistência de preferência entre Português (PT-BR) e Inglês (EN).
- Configuração de build estático e workflow de CI/CD com GitHub Actions para deploy contínuo no GitHub Pages.

## Capabilities

### New Capabilities
- `3d-map-navigation`: Cena 3D procedural/low-poly com Three.js representando um arquipélago fictício de 4 ilhas, animações de câmera suaves atreladas à navegação e raycasting interativo para POIs.
- `portfolio-ui`: Interface de usuário responsiva com tema dark (Preto/Cinza/Verde), sidebar fixa com resumo e contatos, header de navegação e sistema de modais para exibir o conteúdo dos POIs.
- `internationalization`: Mecanismo de internacionalização reativo para alternância dinâmica entre PT-BR e EN em toda a UI e nos dados dos modais.

### Modified Capabilities
<!-- Nenhuma capacidade existente modificada (projeto greenfield). -->

## Impact

- **Código Novo**: Todo o ecossistema frontend da aplicação em `src/`, configurações de build com Vite e Tailwind CSS, e dados estáticos de conteúdo em `src/data/`.
- **Dependências**: Adição de `react`, `react-dom`, `three`, `@react-three/fiber`, `@react-three/drei`, `i18next`, `react-i18next`, `lucide-react`, `tailwindcss` e ferramentas de bundling.
- **APIs / Backend**: Nenhum backend dedicado necessário; arquitetura estática e autossuficiente para execução client-side.
- **CI/CD**: Criação do workflow `.github/workflows/deploy.yml` para compilação e publicação automatizada no GitHub Pages.
