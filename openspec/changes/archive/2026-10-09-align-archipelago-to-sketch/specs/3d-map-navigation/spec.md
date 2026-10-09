## MODIFIED Requirements

### Requirement: Renderização da Cena 3D do Arquipélago
O sistema SHALL / DEVE renderizar uma cena 3D com plano oceânico e quatro ilhas com relevos e contornos orgânicos e disformes (não cilíndricos/redondos), contendo blocos densos e agrupados de elementos 3D, e SHALL / DEVE organizar o arquipélago conforme o esboço fornecido: Ilha de Portfólio ampla no noroeste, Ilha Sobre Mim ampla no sudoeste, Ilha da Trajetória/Currículo alongada no leste, e Ilha de Contato menor com farol próxima ao centro inferior. A Ilha About Me SHALL / DEVE ter uma base geral substancialmente ampliada, até cerca de 3x o tamanho percebido anterior quando necessário, em formato orgânico próximo a um grão de feijão, sem leitura circular. A Ilha About Me SHALL / DEVE usar o padrão anterior de cores de terreno/base, enquanto o plano oceânico ou espaço entre ilhas SHALL / DEVE ter tonalidade mais clara ou mais azulada para destacar a silhueta das ilhas. A Ilha About Me SHALL / DEVE comportar uma Cidade de Stacks ampliada e legível, com base/chão cinza claro, prédios em diferentes tons de cinza escuro, janelas claras/brancas e vias visíveis entre os blocos urbanos, mantendo espaço livre suficiente para que os distritos tecnológicos fiquem dentro da área visível no zoom urbano. A Ilha do Curriculo SHALL / DEVE ter tamanho percebido aproximadamente triplicado, silhueta organica em formato alongado/irregular coerente com o esboço, quatro regioes profissionais visualmente distintas distribuidas ao longo do corpo da ilha, e distancia da Ilha de Contato suficiente para manter oceano livre entre elas.

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
- **THEN** a cidade aparece na porção superior da ilha, a montanha ocupa a região oeste ou sudoeste, e a floresta ocupa a região sudeste ou inferior, preservando uma leitura equivalente ao esboço e mantendo os POIs correspondentes acessíveis.

#### Scenario: Espaçamento urbano para seleção de stacks
- **WHEN** a Cidade de Stacks é exibida no zoom urbano
- **THEN** os distritos tecnológicos aparecem afastados o suficiente para que seus botões/POIs sejam distinguíveis e selecionáveis sem sobreposição visual excessiva.

#### Scenario: Cidade ampliada sem botões fora da tela
- **WHEN** o usuário entra no zoom urbano da Cidade de Stacks em uma visualização desktop ou mobile suportada
- **THEN** todos os cinco botões/POIs de stacks aparecem dentro da área visível da cena, sem ficarem cortados pelas bordas da viewport.

#### Scenario: Visualização da Ilha do Curriculo em meia lua
- **WHEN** o usuário navega para a Ilha do Curriculo
- **THEN** o sistema exibe a ilha no lado leste do arquipélago com silhueta alongada e irregular coerente com o esboço, mantendo quatro regioes profissionais legiveis ao longo do corpo da ilha.

#### Scenario: Espaçamento entre Curriculo e Contato
- **WHEN** o usuário visualiza a Ilha do Curriculo e a Ilha de Contato no arquipelago
- **THEN** as ilhas nao se sobrepoem visualmente e existe oceano livre suficiente entre elas para que o farol continue legivel como uma ilha separada.

#### Scenario: Distribuição das regiões profissionais da Ilha do Curriculo
- **WHEN** o usuário visualiza a Ilha do Curriculo no enquadramento normal
- **THEN** Lifeshub aparece como uma cidade na porção norte ou noroeste da ilha, IPUF/LabTrans/UFSC aparece como uma floresta na porção central ou leste, Docencia aparece como uma fazenda na porção inferior central, e Projetos Proprios aparece como uma fabrica na extremidade inferior ou sudoeste.

#### Scenario: Composição do arquipélago conforme rascunho
- **WHEN** o usuário está na `Visão Geral` do arquipélago
- **THEN** a composição espacial segue o rascunho fornecido, com Portfólio no noroeste, Sobre Mim no sudoeste, Currículo no leste, e Contato como ilha menor próxima ao centro inferior, sem colisão visual entre ilhas ou com a sidebar.

#### Scenario: Distribuição interna da Ilha de Portfólio conforme rascunho
- **WHEN** o usuário visualiza a Ilha de Portfólio
- **THEN** o aeroporto aparece na parte superior da ilha, a floresta aparece no lado oeste/interior, o porto aparece na costa sudoeste, a área residencial ocupa a faixa inferior ou central, e a estação de foguete aparece no lado leste, mantendo os cinco POIs de projeto acessíveis.

#### Scenario: Ilha de Contato centralizada no farol
- **WHEN** o usuário visualiza a Ilha de Contato no arquipélago ou em zoom de seção
- **THEN** a ilha aparece compacta, orgânica e separada das demais, com o farol/farol de contato como foco central e com o POI de contato acessível.
