## MODIFIED Requirements

### Requirement: Renderização da Cena 3D do Arquipélago
O sistema SHALL / DEVE renderizar uma cena 3D com plano oceânico e quatro ilhas com relevos e contornos orgânicos e disformes (não cilíndricos/redondos), contendo blocos densos e agrupados de elementos 3D, e a Ilha About Me SHALL / DEVE ter uma base geral substancialmente ampliada, até cerca de 3x o tamanho percebido anterior quando necessário, em formato orgânico próximo a um grão de feijão, sem leitura circular. A Ilha About Me SHALL / DEVE usar o padrão anterior de cores de terreno/base, enquanto o plano oceânico ou espaço entre ilhas SHALL / DEVE ter tonalidade mais clara ou mais azulada para destacar a silhueta das ilhas. A Ilha About Me SHALL / DEVE comportar uma Cidade de Stacks ampliada e legível, com base/chão cinza claro, prédios em diferentes tons de cinza escuro, janelas claras/brancas e vias visíveis entre os blocos urbanos, mantendo espaço livre suficiente para que os distritos tecnológicos fiquem dentro da área visível no zoom urbano.

#### Scenario: Carregamento inicial da cena
- **WHEN** o usuário acessa a página inicial do portfólio
- **THEN** o sistema exibe o arquipélago com ilhas de silhuetas naturais e recortadas, praias irregulares, mar/espaço entre ilhas em tom claro ou azulado que destaca o terreno, e blocos agrupados de elementos em cada região a 60 FPS.

#### Scenario: Visualização da cidade na Ilha Sobre Mim
- **WHEN** o usuário navega para a Ilha Sobre Mim
- **THEN** o sistema exibe a Ilha Sobre Mim em formato semelhante a um grão de feijão, com base grande e destacada pelo contraste do oceano, e a Cidade de Stacks em tamanho suficiente para identificar a malha urbana, com chão cinza claro, prédios cinza-escuros, janelas brancas e ruas entre edificações.

#### Scenario: Contraste da Ilha Sobre Mim pelo oceano
- **WHEN** o usuário visualiza a Ilha Sobre Mim no enquadramento normal ou no zoom urbano
- **THEN** a base/terreno da ilha mantém o padrão de cores anterior e se separa visualmente do plano oceânico porque o mar/espaço entre ilhas está mais claro ou mais azulado.

#### Scenario: Distribuição interna da Ilha Sobre Mim
- **WHEN** o usuário visualiza a Ilha Sobre Mim no enquadramento normal
- **THEN** a floresta ocupa aproximadamente 25% da ilha em um canto, a montanha ocupa aproximadamente 25% em uma área mais central, e a Cidade de Stacks ocupa aproximadamente 50% da área da ilha.

#### Scenario: Espaçamento urbano para seleção de stacks
- **WHEN** a Cidade de Stacks é exibida no zoom urbano
- **THEN** os distritos tecnológicos aparecem afastados o suficiente para que seus botões/POIs sejam distinguíveis e selecionáveis sem sobreposição visual excessiva.

#### Scenario: Cidade ampliada sem botões fora da tela
- **WHEN** o usuário entra no zoom urbano da Cidade de Stacks em uma visualização desktop ou mobile suportada
- **THEN** todos os cinco botões/POIs de stacks aparecem dentro da área visível da cena, sem ficarem cortados pelas bordas da viewport.

### Requirement: Camada de Zoom Urbano para a Cidade das Stacks
O sistema SHALL / DEVE fornecer uma camada de zoom aprofundada na Cidade/Vila de Habilidades da Ilha About Me (Item 5 do currículo), aproximando a câmera da malha urbana com enquadramento amplo o suficiente para permitir a exploração e seleção individual de distritos tecnológicos (Geotecnologias/GIS, Backend/Dados, Cloud/ETL, IA/ML, e Tecnologias Futuras), revelando esses distritos somente após a entrada no zoom urbano e mantendo todos os botões de seleção visíveis no enquadramento inicial do zoom.

#### Scenario: Entrada no zoom da cidade
- **WHEN** o usuário clica no POI "Stacks & Tecnologias" da Cidade de Stacks ou seleciona a respectiva opção
- **THEN** a câmera transita suavemente para um enquadramento aproximado porém não excessivamente fechado da cidade, revelando todos os distritos tecnológicos individuais e seus botões de seleção.

#### Scenario: Seleção de distrito tecnológico
- **WHEN** o usuário clica em um dos distritos da cidade no zoom urbano
- **THEN** o sistema abre o modal detalhando as tecnologias, aplicações práticas e nível de domínio daquela vertical técnica.

#### Scenario: Enquadramento inicial completo dos botões
- **WHEN** a transição para `aboutCity` termina
- **THEN** o enquadramento inicial mostra simultaneamente os cinco botões/POIs de stacks sem exigir que o usuário rotacione, faça pan ou afaste manualmente a câmera para encontrá-los.
