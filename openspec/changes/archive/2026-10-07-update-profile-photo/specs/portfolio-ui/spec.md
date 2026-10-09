## MODIFIED Requirements

### Requirement: Sidebar Lateral de Apresentação
O sistema SHALL / DEVE exibir uma barra lateral esquerda fixa contendo a foto de perfil real do profissional, nome completo, título profissional ("Geógrafo | Desenvolvimento GIS e WebGIS | Engenharia de Dados | Ciência de Dados | Aplicações com IA"), o texto completo do Item 1 (Resumo sobre mim), tags de atuação resumidas para recrutadores, e links diretos para GitHub (`ThiagoPanchi`), LinkedIn, e-mail (`panchiniak@gmail.com`) e localização (`Florianópolis/Santa Catarina`). Em telas desktop, a sidebar SHALL / DEVE ocupar aproximadamente 35% da largura disponível da plataforma, preservando o conteúdo rolável quando necessário. A área da foto de perfil SHALL / DEVE usar a imagem fornecida pelo usuário, exibir a imagem inteira sem corte ou distorção, adaptar largura e altura ao tamanho da sidebar para preservar a proporção do retrato, e preservar o indicador de status sem cobrir o rosto de forma significativa. As tags da sidebar SHALL / DEVE ocupar no máximo duas linhas visíveis e resumir o posicionamento profissional em temas de mercado, como Desenvolvimento GIS, Engenharia de Dados, Desenvolvimento Web e IA.

#### Scenario: Visualização da sidebar
- **WHEN** a página é carregada em telas desktop
- **THEN** a sidebar lateral apresenta a foto de perfil real inteira e proporcional, o resumo biográfico completo do Item 1 e tags resumidas para recrutadores em no máximo duas linhas com links funcionais para os canais de contato, ocupando cerca de 35% da área total da plataforma.

#### Scenario: Download do currículo
- **WHEN** o usuário clica no botão "Download CV" na barra lateral
- **THEN** o sistema inicia o download do arquivo de currículo em formato PDF no idioma atualmente selecionado.

#### Scenario: Foto de perfil acessível e contida
- **WHEN** a sidebar exibe a área de perfil em desktop ou mobile
- **THEN** a foto fornecida aparece inteira, com texto alternativo apropriado, contida no frame arredondado, largura e altura adaptadas ao tamanho da sidebar, e sem distorção de proporção.

#### Scenario: Tags resumidas para recrutadores
- **WHEN** a sidebar exibe as tags de atuação
- **THEN** o sistema apresenta no máximo duas linhas de tags com temas generalistas e alinhados a busca de recrutadores, incluindo Desenvolvimento GIS, Engenharia de Dados, Desenvolvimento Web e IA ou equivalentes localizados por idioma.
