## MODIFIED Requirements

### Requirement: Renderização da Cena 3D do Arquipélago
O sistema SHALL / DEVE renderizar uma cena 3D com plano oceânico e quatro ilhas com relevos e contornos orgânicos e disformes (não cilíndricos/redondos), contendo blocos densos e agrupados de elementos 3D, e a Ilha About Me SHALL / DEVE ter uma base geral substancialmente ampliada, até cerca de 3x o tamanho percebido anterior quando necessário, em formato orgânico próximo a um grão de feijão, sem leitura circular. A Ilha About Me SHALL / DEVE usar o padrão anterior de cores de terreno/base, enquanto o plano oceânico ou espaço entre ilhas SHALL / DEVE ter tonalidade mais clara ou mais azulada para destacar a silhueta das ilhas. A Ilha About Me SHALL / DEVE comportar uma Cidade de Stacks ampliada e legível, com base/chão cinza claro, prédios em diferentes tons de cinza escuro, janelas claras/brancas e vias visíveis entre os blocos urbanos, mantendo espaço livre suficiente para que os distritos tecnológicos fiquem dentro da área visível no zoom urbano. A Ilha do Curriculo SHALL / DEVE ter tamanho percebido aproximadamente triplicado, silhueta organica em formato de meia lua/crescente, quatro regioes profissionais visualmente distintas distribuidas ao longo da meia lua, concavidade da meia lua voltada para as demais ilhas do arquipelago, e distancia da Ilha de Contato suficiente para manter aproximadamente tres larguras de ilha de oceano livre entre elas.

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

#### Scenario: Visualização da Ilha do Curriculo em meia lua
- **WHEN** o usuário navega para a Ilha do Curriculo
- **THEN** o sistema exibe a Ilha do Curriculo em tamanho aproximadamente triplicado, com silhueta de meia lua/crescente, concavidade voltada para as outras ilhas e quatro regioes profissionais legiveis ao longo do arco.

#### Scenario: Espaçamento entre Curriculo e Contato
- **WHEN** o usuário visualiza a Ilha do Curriculo e a Ilha de Contato no arquipelago
- **THEN** as ilhas nao se sobrepoem visualmente e existe aproximadamente o espaco de tres ilhas de oceano livre entre elas.

#### Scenario: Distribuição das regiões profissionais da Ilha do Curriculo
- **WHEN** o usuário visualiza a Ilha do Curriculo no enquadramento normal
- **THEN** Lifeshub aparece como uma cidade em uma ponta da meia lua, IPUF/LabTrans/UFSC aparece como uma floresta no meio da meia lua, Docencia aparece como uma fazenda no meio da meia lua, e Projetos Proprios aparece como uma fabrica na outra ponta da meia lua.

### Requirement: Interatividade com Pontos de Interesse (POIs)
O sistema SHALL / DEVE detectar o apontamento do cursor e o clique do usuário sobre os blocos de elementos tridimensionais das ilhas e permitir interação com regiões agrupadas, incluindo um fluxo em dois níveis para a Cidade de Stacks: um único POI de entrada na visão da Ilha Sobre Mim e POIs de distrito somente no zoom urbano. Na Ilha do Curriculo, os POIs de experiencia SHALL / DEVE manter os mesmos conteudos de experiencia, mas SHALL / DEVE apresentar labels atualizados e coerentes com os novos ambientes visuais.

#### Scenario: Hover sobre elemento clicável
- **WHEN** o usuário move o cursor do mouse sobre um bloco interativo da ilha (ex.: bosque de árvores)
- **THEN** o cursor muda para estilo ponteiro (*pointer*) e o grupo de elementos 3D recebe realce visual com tonalidade verde.

#### Scenario: Clique em ponto de interesse
- **WHEN** o usuário clica sobre a Floresta na Ilha About Me
- **THEN** o sistema aciona a abertura de uma janela de detalhes (*popup/modal*) contendo o texto biográfico do Item 3 do currículo.

#### Scenario: Entrada única para Stacks na visão da ilha
- **WHEN** o usuário está na visão da Ilha Sobre Mim antes do zoom urbano
- **THEN** a cidade expõe apenas um POI de entrada para "Stacks & Tecnologias" e não expõe individualmente os POIs de Geotecnologias, Backend, Cloud/ETL, IA/ML ou Tecnologias Futuras.

#### Scenario: Labels de experiência da Ilha do Curriculo
- **WHEN** o usuário visualiza ou seleciona os POIs da Ilha do Curriculo
- **THEN** Lifeshub aparece com label "Atual/Ultima Experiencia", IPUF/LabTrans/UFSC aparece com label "Experiencias Anteriores", Docencia permanece identificada como "Docencia", e Projetos Proprios permanece identificado como "Projetos Proprios".

## ADDED Requirements

### Requirement: Bussola de Orientacao da Cena 3D
O sistema SHALL / DEVE exibir uma bussola no canto superior direito da interface para fornecer nocao de direcao/orientacao durante a navegacao e exploracao da cena 3D, e essa bussola SHALL / DEVE representar a orientacao atual da visao do usuario no mapa. O sistema SHALL / DEVE tratar a direcao da Ilha de Portfolio como Norte e a direcao da Ilha de Contato como Sul.

#### Scenario: Bussola visivel durante navegacao
- **WHEN** o usuário navega, orbita ou transita entre ilhas na cena 3D
- **THEN** a bussola permanece visivel no canto superior direito, acima da cena, sem bloquear os controles principais.

#### Scenario: Contexto direcional
- **WHEN** o usuário observa a bussola durante a exploracao da cena
- **THEN** o sistema apresenta indicacao visual de direcao/orientacao suficiente para ajudar o usuário a entender a direcao relativa da cena, considerando Portfolio como Norte e Contato como Sul.

#### Scenario: Movimento da bussola com a visao
- **WHEN** o usuário orbita ou muda a direcao da camera no mapa
- **THEN** a bussola atualiza sua orientacao visual para refletir a visao atual em vez de permanecer estatica.
