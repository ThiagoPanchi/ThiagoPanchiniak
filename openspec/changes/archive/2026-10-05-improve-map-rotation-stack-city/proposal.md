## Why

O mapa 3D atualmente corrige continuamente a câmera para a visão-alvo, impedindo o usuário de girar e explorar livremente a cena após uma navegação. A Cidade de Stacks na Ilha Sobre Mim também ainda não comunica visualmente uma cidade: ela precisa aparecer maior, mais legível e revelar os distritos tecnológicos somente após o zoom dedicado.

## What Changes

- Permitir que o usuário gire/orbite o mapa livremente após a transição inicial para a visão selecionada, sem retorno automático contínuo para a pose inicial enquanto estiver interagindo.
- Manter transições cinematográficas para Overview, ilhas e zoom `aboutCity`, mas encerrar a condução automática após a câmera chegar ao alvo para liberar controle manual.
- Reorganizar a Ilha Sobre Mim para que a cidade de Stacks seja maior, mais visível e com linguagem urbana clara: chão/base cinza claro, prédios em tons variados de cinza escuro, janelas brancas e ruas entre blocos.
- Alterar o fluxo da Cidade de Stacks em dois níveis: na visão da Ilha Sobre Mim, exibir apenas um POI/botão de entrada identificado como "Stacks & Tecnologias" no hover; após clicar, aproximar a câmera e revelar os botões/POIs individuais de cada tecnologia/distrito.
- Aumentar ligeiramente a Ilha Sobre Mim e ampliar a área útil da Cidade de Stacks, afastando os distritos entre si para que, no zoom urbano, os botões de seleção das stacks fiquem visíveis, legíveis e sem sobreposição excessiva.
- Ajustar o enquadramento do zoom `aboutCity` para ser menos próximo/mais aberto, preservando o foco na cidade mas permitindo visualizar todos os botões de distrito.
- Preservar a exploração dos cinco distritos tecnológicos no zoom urbano e seus modais de detalhe.

## Capabilities

### New Capabilities
<!-- Nenhuma nova capability introduzida; evolui capacidades existentes. -->

### Modified Capabilities
- `3d-map-navigation`: Ajusta o comportamento de órbita livre, o encerramento da condução automática de câmera e o fluxo de zoom/revelação da Cidade de Stacks.
- `portfolio-ui`: Ajusta a identificação visual/hover do botão único "Stacks & Tecnologias" e a visibilidade dos controles de distrito apenas no zoom urbano.

## Impact

- **Componentes 3D**: `CameraRig.jsx`, `IslandAbout.jsx`, `InteractivePoi.jsx` se necessário para visibilidade/interatividade condicional dos POIs, escala da ilha/cidade e espaçamento dos distritos.
- **Estado de Navegação**: `App.jsx` e `islandsConfig.js` podem precisar distinguir POIs disponíveis na visão da ilha e no zoom `aboutCity`, além de ajustar câmera/alvo do preset urbano.
- **HUD/UI**: `MapHud.jsx` e conteúdos i18n podem precisar ajustar rótulos e instruções do fluxo urbano.
- **Dependências**: Sem novas dependências previstas; manter primitivas Three.js/R3F leves e baixo custo de renderização.
