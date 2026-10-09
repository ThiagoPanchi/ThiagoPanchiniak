## Why

A navegação visual do portfólio precisa ficar mais legível e alinhada aos novos assets gráficos disponíveis em `public/assets/png`. A barra lateral também deve ganhar mais presença no layout desktop, ocupando cerca de 35% da área útil da plataforma sem comprometer o acesso móvel.

## What Changes

- Aumentar a largura desktop da barra lateral para aproximadamente 35% da viewport, mantendo o comportamento de drawer em telas compactas.
- Usar os ícones PNG existentes em `public/assets/png` nos POIs/áreas principais do arquipélago 3D.
- Renomear POIs da Ilha Sobre Mim: `Floresta das Origens` para `Quem sou eu` e `Cordilheira do Conhecimento` para `Formação`.
- Associar ícones específicos aos POIs de Sobre Mim, Stack & Tecnologia, distritos tecnológicos, Currículo e Portfólio.
- Associar o ícone `018-contato.png` ao POI/área de Contato.
- Renomear `GeoBrasil Censo 2022` para `GeoBrasil`.
- Consolidar `Pipeline ETL Azure`, `API de Drones` e `Inteligência de Mercado` em uma única área `Projetos Github` com ícone próprio.
- Preservar a abertura de modais e a navegação por POI, ajustando conteúdo/labels conforme a nova organização visual.
- Ajustar o enquadramento/zoom das ilhas para que, após ampliar a sidebar, a ilha selecionada apareça inteira na área restante do mapa em vez de ficar cortada pela barra lateral.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `portfolio-ui`: Atualiza requisitos de apresentação da sidebar, dos POIs e do enquadramento visual do mapa para suportar largura desktop ampliada, ícones PNG locais, renomeações, agrupamento de projetos e zoom sem corte das ilhas.

## Impact

- Código de UI/3D: `src/components/ui/Sidebar.jsx`, `src/components/3d/InteractivePoi.jsx`, `src/components/3d/IslandAbout.jsx`, `src/components/3d/IslandResume.jsx`, `src/components/3d/IslandPortfolio.jsx`, `src/components/3d/CameraRig.jsx` e/ou `src/components/3d/ArchipelagoScene.jsx` conforme o ponto atual de controle de câmera.
- Dados e conteúdo: `src/data/content.pt.json`, `src/data/content.en.json`, `src/data/islandsConfig.js`.
- Assets usados: arquivos PNG existentes em `public/assets/png`.
- Sem novas dependências previstas.
