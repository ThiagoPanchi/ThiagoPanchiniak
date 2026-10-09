## 1. Mapeamento e Atualização dos Dados do Currículo

- [x] 1.1 Atualizar `content.pt.json` com os dados integrais de `curriculo_thiago_panchiniak.md` (Itens 1 a 7, contatos e links reais), verificando integridade do JSON.
- [x] 1.2 Atualizar `content.en.json` com as traduções para o inglês de todas as seções, distritos da cidade e 7 projetos, verificando consistência das chaves.
- [x] 1.3 Atualizar `islandsConfig.js` com os novos nós de coordenadas e o preset de câmera `aboutCity` para o zoom na cidade.

## 2. Modelagem das Ilhas Orgânicas e Disformes

- [x] 2.1 Remodelar a base da Ilha 1 (About Me) com silhueta irregular e múltiplos platôs assimétricos, verificando aspecto orgânico na cena.
- [x] 2.2 Remodelar a base da Ilha 2 (Resume) com contornos recortados e relevo acidentado, verificando encaixe da rota cronológica.
- [x] 2.3 Remodelar a base da Ilha 3 (Portfolio - Ilha Maior) com terreno insular recortado, praias assimétricas e área expandida para 7 projetos.
- [x] 2.4 Remodelar a base da Ilha 4 (Contact) com formato de ilhota rochosa natural e assimétrica.

## 3. Blocos Densos de Elementos 3D (Icon Blocks)

- [x] 3.1 Implementar o bloco denso da Floresta das Origens com aglomerado de 10+ árvores de tamanhos e espécies variadas, arbustos e rochas.
- [x] 3.2 Implementar o bloco denso da Cordilheira do Conhecimento com múltiplos picos escarpados e cristas rochosas.
- [x] 3.3 Implementar blocos densos com estruturas ricas para os marcos de carreira da Ilha Resume e bases tecnológicas dos 7 projetos da Ilha Portfolio.

## 4. Camada de Zoom Urbano (Cidade das Stacks - Item 5)

- [x] 4.1 Desenvolver a malha urbana da Cidade de Stacks na Ilha About Me com 5 distritos tecnológicos interativos (Geotecnologias, Backend, Cloud/ETL, IA/ML e Tecnologias Futuras).
- [x] 4.2 Integrar a transição cinemática de câmera para o zoom aproximado da cidade (`aboutCity`) com controles de aproximação e retorno no HUD.

## 5. Interface 2D, Sidebar e Validação Final

- [x] 5.1 Atualizar a Sidebar lateral com o texto do Item 1, as 19 tags do Item 2 e os links reais de Thiago (`ThiagoPanchi`, `panchiniak@gmail.com`).
- [x] 5.2 Atualizar os componentes Header, ModalDetail e MapHud para suportar a exploração dos distritos urbanos e dos 7 projetos.
- [x] 5.3 Executar build de produção (`npm run build`) validando ausência de erros e manutenção de 60 FPS estáveis.
