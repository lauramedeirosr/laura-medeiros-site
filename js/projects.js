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
     en / es         traduções em inglês e espanhol: repita só os campos de texto
                     (segmento, tipo, descricao, objetivo, solucao, funcionalidades,
                     imagemAlt). Campo ausente = aparece o texto em português.

   Projetos ainda em construção: use { emPreparacao: true, segmento: '...' },
   com en/es para as traduções do segmento.
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
    demo: 'https://amenitycreative.com.br',
    en: {
      segmento: 'Event video production company',
      tipo: 'Live site',
      imagemAlt: 'Amenity Creative website homepage, with the headline "Excelência visual que posiciona."',
      descricao: 'Website for a video production company covering events, brands and corporate content in São Paulo.',
      objetivo: 'Present the company with the same visual standard as the work it delivers, and make it easy to request a proposal.',
      solucao: 'A dark, cinematic website with services, work method, a case portfolio and direct paths to a proposal and WhatsApp.',
      funcionalidades: [
        'Proposal request form',
        'WhatsApp with a ready-made message',
        'Three-step work method',
        'Portfolio with case pages',
        'Frequently asked questions'
      ]
    },
    es: {
      segmento: 'Productora audiovisual para eventos',
      tipo: 'Sitio en línea',
      imagemAlt: 'Página de inicio del sitio de Amenity Creative, con el título "Excelência visual que posiciona."',
      descricao: 'Sitio web para una productora audiovisual de eventos, marcas y contenido corporativo en São Paulo.',
      objetivo: 'Presentar la productora con el mismo nivel visual del trabajo que entrega y facilitar la solicitud de presupuesto.',
      solucao: 'Sitio oscuro y cinematográfico, con servicios, método de trabajo, portafolio de casos y caminos directos a presupuesto y WhatsApp.',
      funcionalidades: [
        'Solicitud de presupuesto por formulario',
        'WhatsApp con mensaje listo',
        'Método de trabajo en tres etapas',
        'Portafolio con páginas de casos',
        'Preguntas frecuentes'
      ]
    }
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
    demo: 'https://aquecemaster.com.br',
    en: {
      segmento: 'Water heating for showers and pools',
      tipo: 'Live site',
      imagemAlt: 'Aquece Master website homepage, with the headline "O banho perfeito começa na temperatura exata."',
      descricao: 'Website for a solar, gas, electric and heat-pump heating company focused on high-end homes.',
      objetivo: 'Convey technical trust and turn website visits into requests for site visits and quotes.',
      solucao: 'A website with services, a gallery of completed projects, a four-step process and the standards followed, with direct contact for quotes.',
      funcionalidades: [
        'Booking for site visits and quotes',
        'WhatsApp on every page',
        'Gallery of completed projects',
        'Four-step work process',
        'Frequently asked questions'
      ]
    },
    es: {
      segmento: 'Calentamiento de agua para ducha y piscina',
      tipo: 'Sitio en línea',
      imagemAlt: 'Página de inicio del sitio de Aquece Master, con el título "O banho perfeito começa na temperatura exata."',
      descricao: 'Sitio web para una empresa de calentamiento solar, a gas, eléctrico y por bomba de calor, enfocada en residencias de alto nivel.',
      objetivo: 'Transmitir confianza técnica y convertir las visitas al sitio en solicitudes de visita técnica y presupuesto.',
      solucao: 'Sitio con servicios, galería de obras realizadas, proceso en cuatro etapas y normas seguidas, con contacto directo para presupuesto.',
      funcionalidades: [
        'Agendamiento de visita técnica y presupuesto',
        'WhatsApp en todas las páginas',
        'Galería de obras realizadas',
        'Proceso de trabajo en cuatro etapas',
        'Preguntas frecuentes'
      ]
    }
  },

  {
    id: 'davanna',
    nome: 'Davanna',
    segmento: 'Arquitetura residencial',
    tipo: 'Site no ar',
    formato: 'panorama',
    imagem: 'assets/projetos/davanna/capa.jpg',
    imagemAlt: 'Página inicial do site da Davanna, com o título "Matéria, vão e luz."',
    capa: 'Davanna<br><i>Arquitetura.</i>',
    descricao: 'Site para um escritório de arquitetura residencial autoral, com projetos em São Paulo e na Serra da Mantiqueira.',
    objetivo: 'Apresentar o escritório e seu olhar sobre a matéria, o vão e a luz, com a sobriedade que o trabalho pede.',
    solucao: 'Site de estética escura e sóbria, que dá protagonismo às imagens e à identidade autoral dos projetos residenciais.',
    funcionalidades: [],
    demo: 'https://davanna-umber.vercel.app/',
    en: {
      segmento: 'Residential architecture',
      tipo: 'Live site',
      imagemAlt: 'Davanna website homepage, with the headline "Matéria, vão e luz."',
      descricao: 'Website for a signature residential architecture studio, with projects in São Paulo and the Serra da Mantiqueira.',
      objetivo: 'Present the studio and its view of material, space and light, with the restraint the work calls for.',
      solucao: 'A dark, understated website that puts the images and the signature identity of the residential projects front and center.'
    },
    es: {
      segmento: 'Arquitectura residencial',
      tipo: 'Sitio en línea',
      imagemAlt: 'Página de inicio del sitio de Davanna, con el título "Matéria, vão e luz."',
      descricao: 'Sitio web para un estudio de arquitectura residencial de autor, con proyectos en São Paulo y en la Serra da Mantiqueira.',
      objetivo: 'Presentar el estudio y su mirada sobre la materia, el vano y la luz, con la sobriedad que el trabajo requiere.',
      solucao: 'Sitio de estética oscura y sobria, que da protagonismo a las imágenes y a la identidad de autor de los proyectos residenciales.'
    }
  },

  // Em construção
  { emPreparacao: true, segmento: 'Clínica de estética', en: { segmento: 'Aesthetic clinic' }, es: { segmento: 'Clínica estética' } }
];
