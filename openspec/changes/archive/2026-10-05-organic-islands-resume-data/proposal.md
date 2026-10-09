## Why

As ilhas do mapa 3D atualmente possuem formato excessivamente geométrico e cilíndrico, e seus pontos de interesse contêm apenas elementos isolados (por exemplo, poucas árvores na floresta). Além disso, os conteúdos exibidos na aplicação precisam ser atualizados e mapeados com fidelidade a partir do arquivo real `curriculo_thiago_panchiniak.md`, incluindo uma nova experiência de navegação com camada adicional de zoom para explorar os diferentes distritos de stacks na cidade tecnológica da Ilha About Me.

## What Changes

- **Geometria Orgânica e Disforme das Ilhas**: Substituição das bases cilíndricas por relevos insulares naturais com contornos recortados, costões rochosos e elevações irregulares procedurais.
- **Blocos Densos de Elementos 3D por Região**: Transformação dos POIs em conjuntos densos e ricos de modelos estilizados (ex.: bosque denso com múltiplas árvores e arbustos, cordilheira com múltiplos picos e contrafortes, malha urbana com quarteirões e edifícios).
- **Nova Camada de Zoom na Cidade de Stacks (Item 5)**: Implementação de um nível de zoom aprofundado na Vila/Cidade de Habilidades da Ilha About Me, permitindo que a câmera mergulhe na malha urbana e destaque distritos específicos para cada stack tecnológica (Geotecnologias/GIS, Programação/Backend, Engenharia de Dados/Nuvem, Ciência de Dados/IA, e Tecnologias Futuras).
- **Mapeamento Integral do `curriculo_thiago_panchiniak.md`**:
  - **Sidebar Lateral**: Preenchimento rigoroso com o Item 1 (Resumo sobre mim) e Item 2 (Tags de atuação e interesse).
  - **Ilha About Me**: Integração do Item 3 (Quem eu sou — trajetória) na Floresta, Item 4 (Formação acadêmica) nas Montanhas, e Item 5 (Stacks e tecnologias) na Cidade com zoom em distritos.
  - **Ilha Resume**: Atualização com o Item 6 (Histórico profissional: Lifeshub, Consultoria em Geoprocessamento/IPUF/Labtrans, Docência e Projetos Próprios).
  - **Ilha Portfolio**: Atualização com o Item 7 (MapGenPlus, Inteligência de Mercado, GeoBrasil Censo 2022, Pipeline ETL Azure, LLM Local Llama, API de Drones FastAPI/Docker e Circula).
  - **Ilha Contact e Header**: Atualização com dados reais de cabeçalho (links para GitHub `ThiagoPanchi`, LinkedIn, email `panchiniak@gmail.com` e localização `Florianópolis/Santa Catarina`).

## Capabilities

### New Capabilities
<!-- Nenhuma nova capability introduzida; evolui as capabilities existentes. -->

### Modified Capabilities
- `3d-map-navigation`: Requisitos atualizados para contemplar geometrias orgânicas das ilhas, densidade em blocos de elementos 3D e nova camada de zoom urbano para a cidade de stacks (Item 5).
- `portfolio-ui`: Requisitos atualizados para integrar os itens 1 a 7 do arquivo de currículo na Sidebar, Header, Modais de POIs e canais de contato.

## Impact

- **Código Frontend**: Alterações nos componentes Three.js (`IslandAbout.jsx`, `IslandResume.jsx`, `IslandPortfolio.jsx`, `IslandContact.jsx`, `CameraRig.jsx`, `islandsConfig.js`) e componentes UI (`Sidebar.jsx`, `Header.jsx`, `ModalDetail.jsx`).
- **Arquivos de Dados**: Atualização e expansão de `src/data/content.pt.json` e `src/data/content.en.json` com todas as seções do currículo.
- **Configurações e Dependências**: Sem novas dependências externas de pacotes.
