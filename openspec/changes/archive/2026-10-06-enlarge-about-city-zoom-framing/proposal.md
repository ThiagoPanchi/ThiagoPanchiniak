## Why

Mesmo após os ajustes anteriores, o zoom da Cidade de Stacks ainda fica próximo demais e deixa botões de stacks fora da tela. A Ilha Sobre Mim e a área urbana precisam ganhar mais escala e um enquadramento mais aberto para que todos os botões de distrito apareçam claramente quando o usuário clicar em "Stacks & Tecnologias".

## What Changes

- Aumentar novamente a área útil da Ilha Sobre Mim, incluindo a base geral da ilha, podendo chegar a cerca de 3x o tamanho percebido atual, preservando espaço para floresta e montanha.
- Ampliar a cidade e distribuir seus distritos/stacks em uma área maior, com distância suficiente entre os botões para evitar sobreposição ou saída da tela.
- Voltar a base/terreno da ilha para o padrão de cores anterior e destacar as ilhas ajustando o espaço entre elas/oceano para uma tonalidade mais clara ou mais próxima de azul.
- Alterar a silhueta da Ilha Sobre Mim para um formato orgânico mais próximo de um grão de feijão, evitando leitura circular.
- Redistribuir as áreas da Ilha Sobre Mim para que a floresta ocupe aproximadamente 25% em um canto, a montanha aproximadamente 25% em uma área mais central e a Cidade de Stacks aproximadamente 50% da ilha.
- Ajustar o preset de câmera `aboutCity` para um enquadramento mais alto/distante e centrado na cidade ampliada, garantindo que todos os botões de stacks fiquem visíveis ao entrar no zoom.
- Manter o fluxo atual: antes do zoom aparece apenas o botão "Stacks & Tecnologias"; depois do zoom aparecem os botões dos distritos.
- Não alterar conteúdo textual, links, quantidade de ilhas ou quantidade de distritos tecnológicos.

## Capabilities

### New Capabilities
<!-- Nenhuma nova capability introduzida; evolui capacidades existentes. -->

### Modified Capabilities
- `3d-map-navigation`: Ajusta os requisitos de escala, formato, distribuição interna e contraste visual da Ilha Sobre Mim/Cidade de Stacks e o enquadramento do zoom urbano para manter todos os botões de stacks visíveis.

## Impact

- **Componentes 3D**: `IslandAbout.jsx` para escala, formato orgânico, distribuição interna, cores da base/terreno e espaçamento visual dos distritos.
- **Cena/oceano**: ajuste visual do mar ou espaço entre ilhas para destacar melhor as ilhas sem clarear a paleta do terreno.
- **Configuração de navegação**: `islandsConfig.js` para coordenadas dos POIs e preset `aboutCity`.
- **Validação visual**: requer conferência desktop/mobile do zoom urbano para garantir que todos os botões aparecem dentro da tela.
- **Dependências**: sem novas dependências previstas.
