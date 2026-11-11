/* ==========================================================================
   IDIOMAS — português (padrão), inglês e espanhol.

   Como funciona:
   - No index.html, cada texto traduzível tem data-i18n="chave"
     (e data-i18n-aria="chave" para descrições de leitores de tela).
   - O texto em português fica no próprio index.html; aqui ficam só as
     versões em inglês (en) e espanhol (es).
   - Textos dos projetos ficam em js/projects.js, nos blocos en: {} e es: {}.
   - O idioma escolhido fica salvo no navegador. Também dá para abrir o site
     já num idioma: index.html?lang=en ou index.html?lang=es
   ========================================================================== */
(function () {
  const LANGS = ['pt', 'en', 'es'];

  /* Textos da página (o português está no index.html) */
  const PAGE = {
    en: {
      'skip': 'Skip to content',
      'nav.projetos': 'Projects',
      'nav.servicos': 'Services',
      'nav.processo': 'Process',
      'nav.contato': 'Contact',
      'nav.aria': 'Language',
      'header.cta': 'Let’s talk <span class="arrow" aria-hidden="true">↗</span>',
      'hero.phrase': 'First understand. <span class="accent">Then build.</span>',
      'hero.sub': 'Custom websites, mini systems and digital presence.',
      'hero.cta1': 'Let’s talk <span class="arrow" aria-hidden="true">↗</span>',
      'hero.cta2': 'See projects <span aria-hidden="true">↓</span>',
      'about.label': 'Approach',
      'about.sobre': 'About',
      'about.lede': 'I’m Laura Medeiros. I bring together strategy, digital presence and technology for businesses and professionals. No ready-made templates.',
      'about.sub': 'Before building, I understand',
      'about.t1': 'The business',
      'about.t2': 'The goals',
      'about.t3': 'The audience',
      'about.t4': 'The identity',
      'about.t5': 'The challenges',
      'about.t6': 'The routine and the sales',
      'gallery.title': 'Strategy behind it. <span class="accent">Intention in every detail.</span>',
      'gallery.intro': 'Three things every project gets.',
      'gallery.g1': '<span class="g__word">Strategy</span><span class="g__txt">Understand the business before the first screen.</span>',
      'gallery.g2': '<span class="g__word">Design</span><span class="g__txt">Identity applied with intention.</span>',
      'gallery.g3': '<span class="g__word">Technology</span><span class="g__txt">Fast, responsive and easy to update.</span>',
      'work.title': 'Every project, <span class="accent">made to measure.</span>',
      'work.intro': 'No two look alike, because no two businesses are the same.',
      'work.soon': 'Coming soon',
      'services.title': 'Every service solves <span class="accent">a real problem.</span>',
      'services.tabA': 'Custom websites',
      'services.tabB': 'Mini systems',
      'services.tabC': 'Digital presence',
      'services.tabD': 'Maintenance & support',
      'services.aTitle': 'Custom professional websites',
      'services.aSum': 'Websites built from scratch, aligned with each business’s identity and goals.',
      'services.bTitle': 'Custom mini systems',
      'services.bBadge': 'Add-on package · as needed',
      'services.bSum': 'Tailor-made tools to organize processes and simplify tasks.',
      'services.cTitle': 'Digital presence strategy',
      'services.cSum': 'Strategy and presentation to strengthen the company’s online presence.',
      'services.dTitle': 'Maintenance and support',
      'services.dBadge': 'Optional · scope defined per project',
      'services.dSum': 'Updates, improvements and follow-up after delivery.',
      'process.title': 'How a project <span class="accent">comes together.</span>',
      'process.s1': '<h3>Immersion</h3><p>Understand the business, the audience and the goals.</p>',
      'process.s2': '<h3>Strategy</h3><p>Define the solution, structure and visual direction.</p>',
      'process.s3': '<h3>Development</h3><p>Build the website and, if it makes sense, mini systems.</p>',
      'process.s4': '<h3>Delivery</h3><p>Present, refine and deliver.</p>',
      'process.s5': '<h3>Continuity</h3><p>Maintenance and support, if you want it.</p>',
      'process.note': 'There’s no single formula.',
      'terms.label': 'How I work',
      'terms.title': 'Agreed <span class="accent">from the start.</span>',
      'terms.customLabel': 'Tailor-made',
      'terms.customBig': 'No ready-made templates.',
      'terms.customTxt': 'Every project starts from scratch, based on your business.',
      'terms.payLabel': 'Payment',
      'terms.payAria': '50% upfront and 50% on delivery',
      'terms.payA': 'upfront',
      'terms.payB': 'on delivery',
      'terms.timeLabel': 'Timeline',
      'terms.timeNum': 'up to <strong>15</strong> days',
      'terms.timeTxt': 'Depending on schedule and when materials are sent.',
      'terms.talkLabel': 'It starts with a conversation',
      'terms.talkBubble': 'Shall we figure out what you need?',
      'terms.talkTxt': 'A meeting before any proposal.',
      'terms.extraPill': '+ add-on package',
      'terms.extraTxt': 'Suggested only when it makes sense.',
      'terms.careMid': 'Continuity, if you want it.',
      'contact.title': 'Shall we figure out what your business <span class="accent">really needs?</span>',
      'contact.lede': 'Your next project can start with a conversation. Pick one of the messages, or reach out directly.',
      'contact.btn': 'Chat on WhatsApp <span class="arrow" aria-hidden="true">↗</span>',
      'chat.in': 'Hi! Where would you like to start?',
      'chat.aria': 'Choose a message',
      'chat.o1': 'I need a website <span class="arrow" aria-hidden="true">↗</span>',
      'chat.o2': 'I want to organize processes <span class="arrow" aria-hidden="true">↗</span>',
      'chat.o3': 'Not sure yet, let’s talk <span class="arrow" aria-hidden="true">↗</span>',
      'footer.sig': 'First understand.<br>Then build.',
      'footer.top': 'Back to top ↑',
      'totop.aria': 'Back to top',
      'case.close': 'Close ✕',
      'case.closeAria': 'Close project'
    },
    es: {
      'skip': 'Saltar al contenido',
      'nav.projetos': 'Proyectos',
      'nav.servicos': 'Servicios',
      'nav.processo': 'Proceso',
      'nav.contato': 'Contacto',
      'nav.aria': 'Idioma',
      'header.cta': 'Hablemos <span class="arrow" aria-hidden="true">↗</span>',
      'hero.phrase': 'Primero entender. <span class="accent">Después construir.</span>',
      'hero.sub': 'Sitios web, mini sistemas y presencia digital a medida.',
      'hero.cta1': 'Hablemos <span class="arrow" aria-hidden="true">↗</span>',
      'hero.cta2': 'Ver proyectos <span aria-hidden="true">↓</span>',
      'about.label': 'Enfoque',
      'about.sobre': 'Sobre mí',
      'about.lede': 'Soy Laura Medeiros. Uno estrategia, presencia digital y tecnología para empresas y profesionales. Sin plantillas prediseñadas.',
      'about.sub': 'Antes de desarrollar, entiendo',
      'about.t1': 'El negocio',
      'about.t2': 'Los objetivos',
      'about.t3': 'El público',
      'about.t4': 'La identidad',
      'about.t5': 'Las dificultades',
      'about.t6': 'La rutina y las ventas',
      'gallery.title': 'Estrategia detrás. <span class="accent">Intención en cada detalle.</span>',
      'gallery.intro': 'Tres cuidados presentes en cada proyecto.',
      'gallery.g1': '<span class="g__word">Estrategia</span><span class="g__txt">Entender el negocio antes de la primera pantalla.</span>',
      'gallery.g2': '<span class="g__word">Diseño</span><span class="g__txt">Identidad aplicada con intención.</span>',
      'gallery.g3': '<span class="g__word">Tecnología</span><span class="g__txt">Rápido, adaptable y fácil de actualizar.</span>',
      'work.title': 'Cada proyecto, <span class="accent">una medida.</span>',
      'work.intro': 'Ninguno se parece a otro, porque ningún negocio es igual.',
      'work.soon': 'Próximamente',
      'services.title': 'Cada servicio resuelve <span class="accent">un problema real.</span>',
      'services.tabA': 'Sitios personalizados',
      'services.tabB': 'Mini sistemas',
      'services.tabC': 'Presencia digital',
      'services.tabD': 'Mantenimiento y soporte',
      'services.aTitle': 'Sitios web profesionales personalizados',
      'services.aSum': 'Sitios desarrollados desde cero, alineados con la identidad y los objetivos de cada negocio.',
      'services.bTitle': 'Mini sistemas personalizados',
      'services.bBadge': 'Paquete adicional · según la necesidad',
      'services.bSum': 'Herramientas a medida para organizar procesos y simplificar tareas.',
      'services.cTitle': 'Estrategia de presencia digital',
      'services.cSum': 'Estrategia y presentación para fortalecer la presencia online de la empresa.',
      'services.dTitle': 'Mantenimiento y soporte',
      'services.dBadge': 'Opcional · alcance definido por proyecto',
      'services.dSum': 'Actualizaciones, mejoras y seguimiento después de la entrega.',
      'process.title': 'Cómo nace <span class="accent">un proyecto.</span>',
      'process.s1': '<h3>Inmersión</h3><p>Entender el negocio, el público y los objetivos.</p>',
      'process.s2': '<h3>Estrategia</h3><p>Definir la solución, la estructura y la dirección visual.</p>',
      'process.s3': '<h3>Desarrollo</h3><p>Construir el sitio y, si tiene sentido, mini sistemas.</p>',
      'process.s4': '<h3>Entrega</h3><p>Presentar, ajustar y entregar.</p>',
      'process.s5': '<h3>Continuidad</h3><p>Mantenimiento y soporte, si lo deseas.</p>',
      'process.note': 'No existe una fórmula única.',
      'terms.label': 'Cómo trabajo',
      'terms.title': 'Acordado <span class="accent">desde el inicio.</span>',
      'terms.customLabel': 'A medida',
      'terms.customBig': 'Nada de plantillas prediseñadas.',
      'terms.customTxt': 'Cada proyecto nace desde cero, a partir de tu negocio.',
      'terms.payLabel': 'Pago',
      'terms.payAria': '50% al inicio y 50% en la entrega',
      'terms.payA': 'al inicio',
      'terms.payB': 'en la entrega',
      'terms.timeLabel': 'Plazo',
      'terms.timeNum': 'hasta <strong>15</strong> días',
      'terms.timeTxt': 'Según la agenda y el envío de los materiales.',
      'terms.talkLabel': 'Empieza con una conversación',
      'terms.talkBubble': '¿Entendemos juntos lo que necesitas?',
      'terms.talkTxt': 'Una reunión antes de cualquier propuesta.',
      'terms.extraPill': '+ paquete adicional',
      'terms.extraTxt': 'Propuesto solo cuando tiene sentido.',
      'terms.careMid': 'Continuidad, si lo deseas.',
      'contact.title': '¿Entendemos lo que tu negocio <span class="accent">realmente necesita?</span>',
      'contact.lede': 'Tu próximo proyecto puede empezar con una conversación. Elige uno de los mensajes o escríbeme directamente.',
      'contact.btn': 'Hablar por WhatsApp <span class="arrow" aria-hidden="true">↗</span>',
      'chat.in': '¡Hola! ¿Por dónde quieres empezar?',
      'chat.aria': 'Elige un mensaje',
      'chat.o1': 'Necesito un sitio web <span class="arrow" aria-hidden="true">↗</span>',
      'chat.o2': 'Quiero organizar procesos <span class="arrow" aria-hidden="true">↗</span>',
      'chat.o3': 'Aún no lo sé, quiero conversar <span class="arrow" aria-hidden="true">↗</span>',
      'footer.sig': 'Primero entender.<br>Después construir.',
      'footer.top': 'Volver arriba ↑',
      'totop.aria': 'Volver arriba',
      'case.close': 'Cerrar ✕',
      'case.closeAria': 'Cerrar proyecto'
    }
  };

  /* Textos usados pelo main.js e pelos links do WhatsApp (nos três idiomas) */
  const JS = {
    pt: {
      'title': 'Laura Medeiros — Soluções digitais sob medida',
      'description': 'Laura Medeiros. Sites, mini sistemas e presença digital sob medida. Primeiro entender. Depois construir.',
      'manifesto': 'Seu negócio não precisa se adaptar a uma solução pronta. A solução é que se adapta a ele.',
      'proj.open': 'Abrir projeto {n}',
      'proj.see': 'Ver projeto',
      'proj.seeAria': 'Ver detalhes do projeto {n}',
      'proj.site': 'Ver site',
      'proj.siteAria': 'Ver site de {n} (abre em nova aba)',
      'proj.demo': 'Ver demonstração',
      'proj.demoAria': 'Ver demonstração de {n} (abre em nova aba)',
      'proj.soon': 'Em preparação',
      'case.goal': 'Objetivo',
      'case.solution': 'Solução desenvolvida',
      'case.features': 'Funcionalidades e diferenciais',
      'case.talk': 'Conversar sobre um projeto assim',
      'wa.geral': 'Olá, Laura! Vi seu portfólio e gostaria de conversar sobre um projeto.',
      'wa.site': 'Olá, Laura! Vi seu portfólio e quero conversar sobre um site para o meu negócio.',
      'wa.processos': 'Olá, Laura! Vi seu portfólio e quero conversar sobre uma solução para organizar processos do meu negócio.',
      'wa.conversar': 'Olá, Laura! Vi seu portfólio e gostaria de conversar para entender o que meu negócio precisa.'
    },
    en: {
      'title': 'Laura Medeiros — Custom digital solutions',
      'description': 'Laura Medeiros. Custom websites, mini systems and digital presence. First understand. Then build.',
      'manifesto': 'Your business doesn’t need to adapt to an off-the-shelf solution. The solution adapts to it.',
      'proj.open': 'Open project {n}',
      'proj.see': 'See project',
      'proj.seeAria': 'See details of project {n}',
      'proj.site': 'Visit site',
      'proj.siteAria': 'Visit the {n} website (opens in a new tab)',
      'proj.demo': 'See demo',
      'proj.demoAria': 'See the {n} demo (opens in a new tab)',
      'proj.soon': 'In progress',
      'case.goal': 'Goal',
      'case.solution': 'Solution',
      'case.features': 'Features and highlights',
      'case.talk': 'Talk about a project like this',
      'wa.geral': 'Hi Laura! I saw your portfolio and would like to talk about a project.',
      'wa.site': 'Hi Laura! I saw your portfolio and would like to talk about a website for my business.',
      'wa.processos': 'Hi Laura! I saw your portfolio and would like to talk about a solution to organize my business processes.',
      'wa.conversar': 'Hi Laura! I saw your portfolio and would like to talk to understand what my business needs.'
    },
    es: {
      'title': 'Laura Medeiros — Soluciones digitales a medida',
      'description': 'Laura Medeiros. Sitios web, mini sistemas y presencia digital a medida. Primero entender. Después construir.',
      'manifesto': 'Tu negocio no necesita adaptarse a una solución estándar. Es la solución la que se adapta a él.',
      'proj.open': 'Abrir proyecto {n}',
      'proj.see': 'Ver proyecto',
      'proj.seeAria': 'Ver detalles del proyecto {n}',
      'proj.site': 'Ver sitio',
      'proj.siteAria': 'Ver el sitio de {n} (se abre en una nueva pestaña)',
      'proj.demo': 'Ver demostración',
      'proj.demoAria': 'Ver la demostración de {n} (se abre en una nueva pestaña)',
      'proj.soon': 'En preparación',
      'case.goal': 'Objetivo',
      'case.solution': 'Solución desarrollada',
      'case.features': 'Funcionalidades y diferenciales',
      'case.talk': 'Hablar sobre un proyecto así',
      'wa.geral': '¡Hola, Laura! Vi tu portafolio y me gustaría conversar sobre un proyecto.',
      'wa.site': '¡Hola, Laura! Vi tu portafolio y quiero conversar sobre un sitio web para mi negocio.',
      'wa.processos': '¡Hola, Laura! Vi tu portafolio y quiero conversar sobre una solución para organizar los procesos de mi negocio.',
      'wa.conversar': '¡Hola, Laura! Vi tu portafolio y me gustaría conversar para entender lo que mi negocio necesita.'
    }
  };

  const WHATSAPP = '5511971216374';
  const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };
  const OG_LOCALE = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function initial() {
    const q = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(q)) return q;
    const saved = store('lm-lang');
    if (LANGS.includes(saved)) return saved;
    const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
    return nav === 'en' || nav === 'es' ? nav : 'pt';
  }

  let lang = initial();

  // Guarda o português original de cada elemento antes de qualquer troca
  const nodes = [...document.querySelectorAll('[data-i18n]')].map((n) => ({ n, key: n.dataset.i18n, pt: n.innerHTML }));
  const arias = [...document.querySelectorAll('[data-i18n-aria]')].map((n) => ({ n, key: n.dataset.i18nAria, pt: n.getAttribute('aria-label') }));
  const was = [...document.querySelectorAll('[data-wa]')];

  function t(key) { return (JS[lang] && JS[lang][key]) || JS.pt[key] || key; }
  function tn(key, name) { return t(key).replace('{n}', name); }

  // Projeto no idioma atual: campos de p.en / p.es substituem os do português
  function loc(p) { return Object.assign({}, p, (lang !== 'pt' && p[lang]) || {}, { _pt: p }); }

  function apply() {
    const dict = PAGE[lang] || {};
    nodes.forEach(({ n, key, pt }) => { n.innerHTML = lang === 'pt' ? pt : (dict[key] || pt); });
    arias.forEach(({ n, key, pt }) => n.setAttribute('aria-label', lang === 'pt' ? pt : (dict[key] || pt)));
    was.forEach((a) => { a.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(t('wa.' + a.dataset.wa)); });

    document.documentElement.lang = HTML_LANG[lang];
    document.title = t('title');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = t('description');
    const og = document.querySelector('meta[property="og:locale"]');
    if (og) og.content = OG_LOCALE[lang];
    const ogt = document.querySelector('meta[property="og:title"]');
    if (ogt) ogt.content = t('title');

    document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  }

  function set(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    store('lm-lang', lang);
    apply();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('[data-lang]');
    if (b) set(b.dataset.lang);
  });

  apply();
  window.I18N = { get lang() { return lang; }, t, tn, loc, set };
})();
