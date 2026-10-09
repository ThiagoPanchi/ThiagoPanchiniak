## Purpose

Garante a experiência multilíngue da aplicação, permitindo a comutação instantânea e persistente entre Português (PT-BR) e Inglês (EN) em todos os textos da interface e dados dos modais.

## Requirements

### Requirement: Comutação Dinâmica de Idioma
O sistema SHALL / DEVE permitir a troca de idioma entre Português (PT-BR) e Inglês (EN) a qualquer momento através de controle interativo no cabeçalho sem recarregar a página.

#### Scenario: Alternância para Inglês
- **WHEN** o usuário seleciona a opção "EN" no seletor de idioma
- **THEN** todos os rótulos de navegação, textos da barra lateral e títulos de seções são atualizados imediatamente para o idioma inglês.

#### Scenario: Alternância para Português
- **WHEN** o usuário seleciona a opção "PT" no seletor de idioma
- **THEN** todos os textos da interface e descrições são apresentados em português brasileiro.

### Requirement: Persistência da Preferência de Idioma
O sistema SHALL / DEVE gravar a preferência de idioma selecionada pelo usuário no armazenamento local (*localStorage*) do navegador.

#### Scenario: Recarregamento da página
- **WHEN** o usuário recarrega a página ou retorna em nova sessão
- **THEN** o sistema recupera a última preferência salva no armazenamento local e inicializa a aplicação no idioma correspondente.

### Requirement: Localização Integral dos Dados de Conteúdo
O sistema SHALL / DEVE fornecer versões traduzidas para todos os registros biográficos, acadêmicos, históricos profissionais e descrições de projetos exibidos nos modais.

#### Scenario: Abertura de modal em idioma ativo
- **WHEN** um modal de Ponto de Interesse é aberto com o idioma inglês ativo
- **THEN** o título, descrição, atribuições e detalhes apresentados refletem o conteúdo em inglês sem misturar termos não localizados.
