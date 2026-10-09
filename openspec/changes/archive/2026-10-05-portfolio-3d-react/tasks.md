## 1. Configuração e Infraestrutura Inicial

- [x] 1.1 Inicializar aplicação React com Vite, Tailwind CSS e ícones Lucide, verificando execução local sem erros via `npm run dev`.
- [x] 1.2 Instalar Three.js, `@react-three/fiber` e `@react-three/drei`, validando a renderização de um Canvas 3D básico responsivo.
- [x] 1.3 Configurar `i18next` e estruturar arquivos de dados bilíngues (`content.pt.json` e `content.en.json`) com persistência no `localStorage`.

## 2. Modelagem 3D do Arquipélago (Fake Map)

- [x] 2.1 Criar o componente do oceano estilizado com plano d'água e animação suave de ondulações, verificando renderização a 60 FPS.
- [x] 2.2 Desenvolver a malha procedural da Ilha 1 (About Me) contendo os POIs Floresta, Montanha e Vila em estilo low-poly.
- [x] 2.3 Desenvolver a malha procedural da Ilha 2 (Resume) com marcos cronológicos representativos das experiências profissionais.
- [x] 2.4 Desenvolver a malha procedural da Ilha 3 (Portfolio - Ilha Maior) com domos e bases interativas para vitrine de projetos.
- [x] 2.5 Desenvolver a malha procedural da Ilha 4 (Contact - Ilha Menor) com farol/antena de comunicação e feixe de luz rotativo.

## 3. Câmera Cinemática e Raycasting

- [x] 3.1 Implementar o componente `CameraRig` com interpolação suave (lerp) para alternar entre visão panorâmica (Overview) e as 4 ilhas.
- [x] 3.2 Implementar sistema de raycasting com eventos de hover (cursor pointer e highlight verde) e clique em cada POI da cena 3D.

## 4. Camada de Interface 2D (Header, Sidebar e Modais)

- [x] 4.1 Desenvolver o Header fixo com logotipo, botões de navegação com estado ativo sincronizado à câmera e seletor de idioma (PT/EN).
- [x] 4.2 Desenvolver a Sidebar lateral esquerda com foto de perfil, apresentação resumida, tags de especialidade (GIS, Dados, IA), contatos e download do currículo.
- [x] 4.3 Desenvolver o componente Modal/Popup responsivo para exibição detalhada de informações ao clicar nos POIs 3D.
- [x] 4.4 Implementar adaptação responsiva para telas menores (< 768px) com gaveta retrátil para a sidebar e controles táteis.

## 5. Conteúdo, Polimento e Deploy

- [x] 5.1 Preencher todos os dados e textos em Português e Inglês com a biografia, formação, histórico profissional e projetos reais de Thiago.
- [x] 5.2 Otimizar taxa de quadros e consumo de memória (descarte de geometrias/materiais e limites de pixelRatio), verificando estabilidade a 60 FPS.
- [x] 5.3 Configurar pipeline de build estático e workflow do GitHub Actions em `.github/workflows/deploy.yml` para deploy automatizado no GitHub Pages, validando sucesso do comando `npm run build`.
