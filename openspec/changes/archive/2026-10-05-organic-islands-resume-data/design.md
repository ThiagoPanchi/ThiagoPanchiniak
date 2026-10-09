## Context

O portfólio 3D interativo de Thiago Panchiniak necessita de uma evolução visual e conteudística. Visualmente, as ilhas cilíndricas originais devem ser substituídas por relevos orgânicos, acidentados e naturais, e as representações regionais devem ser expandidas para blocos/clusters densos de elementos gráficos. No conteúdo, a aplicação deve refletir com total fidelidade o arquivo `curriculo_thiago_panchiniak.md`, com destaque para uma nova camada de zoom cinemático na Cidade de Stacks (Item 5), permitindo navegar por distritos tecnológicos dedicados.

## Goals / Non-Goals

**Goals:**
- **Relevos Orgânicos e Disformes**: Modelar as 4 ilhas com silhuetas naturais, costões rochosos e elevações irregulares compostas, abandonando a geometria cilíndrica simples.
- **Blocos Densos de Elementos (Icon Blocks)**: Implementar conjuntos agrupados de elementos 3D em cada POI (bosque com múltiplas árvores e vegetação, cordilheira com picos encadeados, malha urbana com múltiplos edifícios dividida em distritos, bases tecnológicas modulares).
- **Camada de Zoom Urbano (City Zoom - Item 5)**: Desenvolver um novo estado de câmera e navegação focado na Cidade de Stacks da Ilha About Me, com 5 distritos tecnológicos interativos (Geotecnologias/GIS, Backend/Bancos, Engenharia de Dados/Nuvem, Ciência de Dados/IA, e Tecnologias Futuras).
- **Mapeamento Rigoroso do Currículo**:
  - Sidebar: Item 1 (Resumo sobre mim) e Item 2 (19 tags de especialidade).
  - Ilha About Me: Item 3 (Floresta da Trajetória), Item 4 (Cordilheira da Formação) e Item 5 (Cidade das Stacks com zoom).
  - Ilha Resume: Item 6 (4 marcos cronológicos: Lifeshub, Consultoria Técnica IPUF/Labtrans/UFSC, Docência, Projetos Próprios).
  - Ilha Portfolio: Item 7 (7 projetos detalhados: MapGenPlus, Inteligência de Mercado, GeoBrasil Censo 2022, Pipeline ETL Azure, LLM Local Llama, API de Drones FastAPI/Docker e Circula).
  - Ilha Contact & Header: Contatos reais (`panchiniak@gmail.com`, `https://github.com/ThiagoPanchi`, LinkedIn, Florianópolis/SC).

**Non-Goals:**
- Uso de bibliotecas externas de mapas ou carregamento de arquivos GIS externos.
- Adição de novos frameworks ou dependências pesadas; todo o trabalho deve preservar a taxa estável de 60 FPS com WebGL nativo e Three.js.

## Decisions

### 1. Modelagem Procedural de Ilhas Orgânicas e Disformes
- **Decisão**: Construir as bases das ilhas a partir da composição de múltiplos lóbulos poligonais irregulares com alturas variadas, costões rochosos e faixas litorâneas assimétricas.
- **Justificativa**: Garante uma estética de arquipélago natural e autêntico sem recorrer a arquivos pesados de malha externa, mantendo tempo de carregamento zero e renderização fluida.
- **Alternativas consideradas**: *Carregamento de arquivos `.obj`/`.gltf`*: Aumentaria o tempo de download inicial e criaria dependências de assets estáticos externos.

### 2. Agrupamentos Densos de Elementos (Icon Blocks)
- **Decisão**: Cada região/POI passa a ser composta por um grupo de 8 a 16 elementos 3D articulados (ex.: na Floresta, árvores em diferentes escalas, coníferas, copas arredondadas e rochas; na Montanha, 5 picos com cristas e passagens rochosas).
- **Justificativa**: Elimina a sensação de "vazio" e transmite riqueza visual e imersão cartográfica.

### 3. Nova Camada de Zoom: A Cidade Tecnológica (Item 5)
- **Decisão**: Adicionar o estado de câmera `aboutCity` com coordenadas de aproximação `position: [-20, 7, 14]` e `target: [-20, 2, 10]`.
- **Justificativa**: Permite que o usuário explore a cidade de perto. Dentro da cidade, 5 distritos são destacados com cores e edificações temáticas correspondentes às 5 seções do Item 5 do currículo. Um botão no HUD permite voltar do zoom da cidade para a visão da Ilha About Me.

### 4. Estrutura de Dados Bilíngue Expandida
- **Decisão**: Estruturar `content.pt.json` e `content.en.json` com campos dedicados para todos os 7 itens do currículo, mantendo a integridade textual e adicionando suporte aos 5 distritos da cidade e aos 7 projetos do portfólio.
- **Justificativa**: Centraliza o conteúdo e assegura que qualquer texto possa ser atualizado facilmente sem mexer no código dos componentes 3D.

## Risks / Trade-offs

- **[Performance com aumento do número de geometrias 3D]**
  - *Mitigação*: Reutilizar geometrias instanciadas ou primitivas leves com flat shading (`meshStandardMaterial`), mantendo o draw call count bem abaixo dos limites de gargalo em dispositivos móveis e desktops.
- **[Navegação e desorientação da câmera com duplo nível de zoom]**
  - *Mitigação*: Adicionar breadcrumb claro no HUD ("Ilha Sobre Mim > Cidade de Stacks") e botão evidente de "Voltar para Ilha" ao navegar dentro do zoom urbano.
