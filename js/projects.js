/* ==========================================================================
   PROJETOS — edite apenas esta lista para adicionar, remover ou reordenar.

   Campos de cada projeto:
     id              identificador único, sem espaços
     nome            nome ou identificação do projeto
     segmento        segmento do negócio
     tipo            etiqueta exibida na capa (ex.: "Site no ar", "Demonstração")
     formato         "amplo" | "retrato" | "paisagem" | "panorama" (proporção da imagem)
     imagem          caminho da imagem de destaque, ex.: "assets/projetos/aquece-master/capa.jpg"
                     (vazio = capa tipográfica gerada com o nome do projeto)
     imagemAlt       descrição da imagem para leitores de tela
     capa            texto da capa tipográfica; use <br> para quebrar em linhas
     descricao       breve descrição
     objetivo        objetivo do projeto
     solucao         solução desenvolvida
     funcionalidades lista de funcionalidades ou diferenciais (vazia = bloco não aparece)
     demo            link para ver o site (vazio = botão não aparece)

   Projetos ainda em construção: use { emPreparacao: true, segmento: '...' }.
   O segmento é opcional; sem ele, aparece "Nova demonstração".
   Quando o material estiver pronto, substitua por um projeto completo.

   Os textos dos projetos abaixo foram escritos a partir do conteúdo de cada site.
   Revise se quiser ajustar o tom ou destacar outros pontos.
   ========================================================================== */

window.MOSTRAR_EM_PREPARACAO = true; // false = esconde os projetos "em preparação"

window.PROJETOS = [
  {
    id: 'amenity-creative',
    nome: 'Amenity Creative',
    segmento: 'Produtora de audiovisual para eventos',
    tipo: 'Site no ar',
    formato: 'amplo',
    imagem: 'assets/projetos/amenity-creative/capa.jpg',
    imagemAlt: 'Página inicial do site da Amenity Creative, com o título "Excelência visual que posiciona."',
    capa: 'Amenity<br><i>Creative.</i>',
    descricao: 'Site para uma produtora de audiovisual de eventos, marcas e conteúdo corporativo em São Paulo.',
    objetivo: 'Apresentar a produtora com o mesmo nível visual do trabalho que ela entrega e facilitar o pedido de proposta.',
    solucao: 'Site escuro e cinematográfico, com serviços, método de trabalho, portfólio de cases e caminhos diretos para proposta e WhatsApp.',
    funcionalidades: [
      'Pedido de proposta por formulário',
      'WhatsApp com mensagem pronta',
      'Método de trabalho em três etapas',
      'Portfólio com páginas de cases',
      'Perguntas frequentes'
    ],
    demo: 'https://amenitycreative.com.br'
  },
  {
    id: 'aquece-master',
    nome: 'Aquece Master',
    segmento: 'Aquecimento de água para banho e piscina',
    tipo: 'Site no ar',
    formato: 'panorama',
    imagem: 'assets/projetos/aquece-master/capa.jpg',
    imagemAlt: 'Página inicial do site da Aquece Master, com o título "O banho perfeito começa na temperatura exata."',
    capa: 'Aquece<br><i>Master.</i>',
    descricao: 'Site para uma empresa de aquecimento solar, a gás, elétrico e por bomba de calor, com foco em residências de alto padrão.',
    objetivo: 'Transmitir confiança técnica e transformar visitas ao site em pedidos de visita técnica e orçamento.',
    solucao: 'Site com serviços, galeria de obras realizadas, processo em quatro etapas e normas seguidas, com contato direto para orçamento.',
    funcionalidades: [
      'Agendamento de visita técnica e orçamento',
      'WhatsApp em todas as páginas',
      'Galeria de obras realizadas',
      'Processo de trabalho em quatro etapas',
      'Perguntas frequentes'
    ],
    demo: 'https://aquecemaster.com.br'
  },

  // Em construção
  { emPreparacao: true, segmento: 'Clínica premium' },
  { emPreparacao: true, segmento: 'Arquitetura e interiores' },
  { emPreparacao: true },
  { emPreparacao: true },
  { emPreparacao: true }
];
