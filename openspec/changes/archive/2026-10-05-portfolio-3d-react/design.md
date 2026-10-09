## Context

O projeto consiste na criação de uma Single Page Application (SPA) estática desenvolvida em React para o portfólio pessoal de Thiago Panchiniak, conforme detalhado no PRD e na proposta. A aplicação combina uma interface gráfica 2D (Header, Sidebar e Modais com paleta Dark/Green/Gray) com um cenário central 3D ("Fake Map") desenvolvido em Three.js, representando um arquipélago fictício com 4 ilhas navegáveis e pontos de interesse (POIs).

## Goals / Non-Goals

**Goals:**
- Implementar o arquipélago 3D interativo com Three.js / React Three Fiber, garantindo 60 FPS e carregamento instantâneo.
- Prover controle de câmera cinemático que transita suavemente entre as ilhas a partir dos cliques no cabeçalho ou no mapa.
- Construir a interface 2D com Tailwind CSS, integrando Sidebar fixa com foto e links, Header com navegação e seleção de idioma, e modais para detalhamento de POIs.
- Implementar suporte bilíngue completo (Português e Inglês) usando dados desacoplados em JSON.
- Configurar build estático e pipeline no GitHub Actions para deploy no GitHub Pages sem custos de infraestrutura.

**Non-Goals:**
- Utilização de qualquer biblioteca de mapas baseada em coordenadas reais (Leaflet, Mapbox, OpenLayers, Cesium).
- Implementação de backend dinâmico ou banco de dados; a aplicação é puramente estática.
- Suporte a painel administrativo ou autenticação de usuários (gestão de dados via arquivos JSON/Markdown).

## Decisions

### 1. Stack Base: React 18 + Vite
- **Decisão**: Utilizar React 18 com Vite como bundler.
- **Justificativa**: Vite oferece compilação rápida, Hot Module Replacement (HMR) quase instantâneo e geração de bundles estáticos otimizados para o GitHub Pages.
- **Alternativas consideradas**:
  - *Next.js (Static Export)*: Complexidade adicional de roteamento e dependências desnecessárias para uma SPA focada em 3D.
  - *Create React App (CRA)*: Obsoleto e sem suporte a otimizações modernas de empacotamento.

### 2. Renderização 3D: Three.js com @react-three/fiber (R3F) e @react-three/drei
- **Decisão**: Empregar Three.js através de R3F e Drei para estruturação declarativa da cena.
- **Justificativa**: R3F permite compor a cena como componentes React, facilitando a vinculação de estado (ilha ativa, idioma, hover de POI e disparo de modais). Os utilitários do Drei simplificam animações de câmera, iluminação e controle orbital.
- **Alternativas consideradas**:
  - *Three.js imperativo em useEffect*: Requereria orquestração manual complexa de lifecycle, listeners de redimensionamento e sincronização com a UI do React.

### 3. Modelagem Procedural / Low-Poly para o Arquipélago
- **Decisão**: Construir as ilhas, relevos (montanhas, árvores, vilas, domos e farol) utilizando primitivas geométricas procedurais estilizadas (*low-poly*) e shaders de água leves.
- **Justificativa**: Garante peso de download inferior a 2 MB, carregamento imediato sem requisições assíncronas a arquivos GLTF pesados, eliminando riscos de texturas quebradas e mantendo 60 FPS contínuos.
- **Alternativas consideradas**:
  - *Modelos GLTF/GLB externos*: Aumentariam o tempo de carregamento inicial e poderiam apresentar inconsistências de escala e sombreamento.

### 4. Orquestração da Câmera Cinemática
- **Decisão**: Criar um componente `CameraRig` gerenciado por interpolação suave (lerp via `useFrame` ou GSAP) entre coordenadas predefinidas (posição e alvo *lookAt*) associadas a cada ilha.
- **Justificativa**: Assegura movimentos cinematográficos fluidos (1.0s a 1.5s) que valorizam a experiência espacial sem causar desorientação ao usuário.

### 5. Camadas de UI e Eventos (Pointer Events)
- **Decisão**: O Canvas 3D ocupa 100% da viewport em plano de fundo (`z-0`), enquanto a UI (Header, Sidebar e Modais) reside em uma camada superior (`z-10`) com container `pointer-events-none`, ativando `pointer-events-auto` estritamente nos botões e cartões interativos.
- **Justificativa**: Permite que o usuário clique e arraste no mapa 3D em qualquer área vazia sem interceptação acidental por divs transparentes.

### 6. Internacionalização e Camada de Dados
- **Decisão**: Utilizar `react-i18next` com arquivos de dados estruturados em JSON (`data/content.pt.json` e `data/content.en.json`).
- **Justificativa**: Separa o conteúdo textual da lógica de apresentação, permitindo edição fácil dos projetos, experiências e biografias de Thiago.

## Risks / Trade-offs

- **[Performance em dispositivos com hardware limitado / móvel]**
  - *Mitigação*: Limitar `pixelRatio` a 2 (`Math.min(window.devicePixelRatio, 2)`), evitar pós-processamento pesado (como bloom excessivo) e habilitar gaveta (drawer) responsiva para a sidebar em telas < 768px.
- **[Roteamento e caminhos de assets no GitHub Pages]**
  - *Mitigação*: Configurar `base: './'` no `vite.config.js` para garantir carregamento relativo de assets em qualquer subdiretório do GitHub Pages.
- **[Conflito de eventos de clique entre o Canvas e os Modais]**
  - *Mitigação*: Desativar raycasting quando um modal estiver aberto (`activeModal !== null`) e usar `stopPropagation` nos componentes de diálogo.

## Migration Plan

1. Inicialização do projeto com Vite no diretório de desenvolvimento.
2. Construção modular dos componentes e validação local via `npm run dev`.
3. Geração e teste do build de produção via `npm run build` e `npm run preview`.
4. Configuração do workflow `.github/workflows/deploy.yml` para publicação automatizada na branch `gh-pages`.
