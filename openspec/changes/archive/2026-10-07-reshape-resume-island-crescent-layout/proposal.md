## Why

A Ilha do Curriculo precisa representar melhor a trajetória profissional em regiões visuais distintas, com escala e composição mais expressivas. O layout atual agrupa os POIs de experiência em uma base menor e não comunica claramente cidade, floresta, fazenda e fábrica como ambientes separados.

## What Changes

- Triplicar aproximadamente o tamanho percebido da Ilha do Curriculo.
- Alterar a silhueta da Ilha do Curriculo para um formato de meia lua/crescente orgânico.
- Rotacionar toda a composicao da Ilha do Curriculo, incluindo base, regioes, POIs e elementos visuais, para que a parte concava da meia lua fique voltada para as outras ilhas.
- Afastar a Ilha do Curriculo da Ilha de Contato para que exista aproximadamente o espaco de tres ilhas entre elas, evitando sobreposicao visual.
- Reposicionar as quatro experiências ao longo da meia lua:
  - Lifeshub em uma cidade, em uma ponta da meia lua, com tag/label "Atual/Ultima Experiencia".
  - IPUF/LabTrans/UFSC em uma floresta, no meio da meia lua, com tag/label "Experiencias Anteriores".
  - Docencia em uma fazenda, no meio da meia lua.
  - Projetos Proprios em uma fabrica, na outra ponta da meia lua.
- Ajustar os POIs e o enquadramento da Ilha do Curriculo para manter todas as regioes legiveis e selecionaveis.
- Adicionar uma bussola no canto superior direito que represente e se movimente de acordo com a visao atual do usuario no mapa, considerando a Ilha de Contato como Sul e a Ilha de Portfolio como Norte.
- Nao alterar os conteudos dos modais de experiencia, a quantidade de experiencias, a quantidade de ilhas ou a navegacao principal.

## Capabilities

### New Capabilities
<!-- Nenhuma nova capability introduzida; evolui capacidades existentes. -->

### Modified Capabilities
- `3d-map-navigation`: Ajusta escala, silhueta, orientacao, distribuicao visual, espacamento entre ilhas, nomes de POIs, enquadramento da Ilha do Curriculo e orientacao visual por bussola dinamica.

## Impact

- **Componentes 3D**: `IslandResume.jsx` para base em meia lua, escala e modelos visuais de cidade/floresta/fazenda/fabrica.
- **Configuracao de navegacao**: `islandsConfig.js` para centro, coordenadas, labels e camera da Ilha do Curriculo.
- **Interface de orientacao**: componente/overlay de bussola no canto superior direito da cena, sincronizado com a orientacao da camera/mapa.
- **Validacao visual**: requer conferencia desktop/mobile da Ilha do Curriculo para garantir que as quatro regioes ficam visiveis e clicaveis.
- **Dependencias**: sem novas dependencias previstas.
