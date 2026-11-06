/* ==========================================================================
   LAURA MEDEIROS — interações
   1 Medida (ajuste tipográfico) · 2 Primeira tela "Atenção" · 3 Projetos
   4 Painel do projeto · 5 Rótulo do cursor · 6 Entradas · 7 Abordagem
   8 Serviços · 9 Navegação ativa
   ========================================================================== */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(pointer: fine)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };

  /* 1 — Medida ---------------------------------------------------------
     Ajusta a largura variável (wdth) da fonte para que cada linha ocupe
     exatamente a mesma medida. As medições acontecem num elemento oculto,
     assim a transição visual entre medidas fica suave. */
  const ruler = el('span');
  ruler.setAttribute('aria-hidden', 'true');
  ruler.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;pointer-events:none';
  document.body.appendChild(ruler);

  function measure(line, size, wdth, ls) {
    const cs = getComputedStyle(line);
    ruler.style.fontFamily = cs.fontFamily;
    ruler.style.fontWeight = cs.fontWeight;
    ruler.style.textTransform = cs.textTransform;
    ruler.style.fontSize = size + 'px';
    ruler.style.letterSpacing = (ls || 0) + 'px';
    ruler.style.fontVariationSettings = `'wdth' ${wdth}`;
    ruler.textContent = line.textContent;
    return ruler.getBoundingClientRect().width;
  }
  function fit(lines, target) {
    if (!lines.length || !target) return;
    const longest = lines.reduce((a, b) => (b.textContent.length > a.textContent.length ? b : a));
    const size = 100 * target / (measure(longest, 100, 72) || 1);
    lines.forEach((line) => {
      let lo = 50, hi = 150, best = 50;
      for (let i = 0; i < 14; i++) {
        const mid = (lo + hi) / 2;
        if (measure(line, size, mid) > target) hi = mid; else { lo = mid; best = mid; }
      }
      const gap = target - measure(line, size, best);
      const n = Math.max(1, line.textContent.length - 1);
      line.style.fontSize = size + 'px';
      line.style.fontVariationSettings = `'wdth' ${best.toFixed(1)}`;
      line.style.letterSpacing = gap > 1 ? (gap / n).toFixed(2) + 'px' : '0px';
      line.style.marginRight = gap > 1 ? '-' + (gap / n).toFixed(2) + 'px' : '0px'; // compensa o espaço após a última letra
    });
  }
  function fitWordmark(wm, target) { fit($$('.wm__l', wm), target); }

  const footerWm = $('.footer [data-wm]');
  const fitFooter = () => footerWm && fitWordmark(footerWm, footerWm.clientWidth);

  /* 2 — Primeira tela: Atenção -----------------------------------------
     As letras perto do cursor ganham peso e ficam vinho; a largura é
     compensada para o nome não "pular" de tamanho. */
  const name = $('[data-attention]');
  if (name) {
    $$('.hero__word', name).forEach((word) => {
      word.innerHTML = [...word.textContent].map((c) => '<span class="ch" aria-hidden="true">' + c + '</span>').join('');
    });
    const chars = $$('.ch', name);

    // Abertura: cada letra cai com uma inclinação própria; a agulha percorre a costura
    chars.forEach((c, i) => {
      c.style.setProperty('--i', i);
      c.style.setProperty('--r', ((i % 2 ? 1 : -1) * (8 + (i * 7) % 14)) + 'deg');
    });
    const stitch = $('.hero__stitch');
    const setStitch = () => stitch && stitch.style.setProperty('--sw', stitch.clientWidth + 'px');
    setStitch(); window.addEventListener('resize', setStitch);

    // Tela de entrada: o monograma se desenha enquanto o site carrega;
    // quando a cortina sobe, começa a abertura da primeira tela.
    const heroEl = name.closest('.hero');
    const intro = $('[data-intro]');
    function playHero() {
      heroEl.classList.add('play');
      if (!reduce) {
        name.classList.add('drop');
        setTimeout(() => { if (typeof sweep === 'function') sweep(2200); }, 2800);
      }
    }
    if (!intro || reduce) {
      if (intro) intro.remove();
      document.documentElement.classList.remove('is-loading');
      playHero();
    } else {
      const t0 = performance.now();
      const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
      const maxWait = new Promise((r) => setTimeout(r, 2600));
      Promise.race([fontsReady, maxWait]).then(() => {
        const wait = Math.max(0, 1500 - (performance.now() - t0)); // tempo mínimo para o desenho do monograma
        setTimeout(() => {
          intro.classList.add('intro--out');
          document.documentElement.classList.remove('is-loading');
          setTimeout(playHero, 450);
          setTimeout(() => intro.remove(), 1200);
        }, wait);
      });
    }

    // Surpresa: clicar no nome faz as letras caírem de novo
    const hint = $('.hero__hint');
    name.addEventListener('click', () => {
      if (reduce) return;
      name.classList.remove('drop');
      void name.offsetWidth; // reinicia a animação
      name.style.setProperty('--d', '0s');
      chars.forEach((c) => c.style.setProperty('--d', '0s'));
      name.classList.add('drop');
      if (hint) hint.classList.add('gone');
    });

    // Cópia do nome dentro do arco: sobre a foto, as letras aparecem claras
    const ghost = $('[data-ghost]');
    const mask = ghost && ghost.parentElement;
    if (ghost) ghost.innerHTML = name.innerHTML;
    const ghostChars = ghost ? $$('.ch', ghost) : [];
    function placeGhost() {
      if (!ghost) return;
      const n = name.getBoundingClientRect(), m = mask.getBoundingClientRect();
      ghost.style.left = (n.left - m.left) + 'px';
      ghost.style.top = (n.top - m.top) + 'px';
      ghost.style.width = n.width + 'px';
    }
    placeGhost();
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(placeGhost);
    window.addEventListener('resize', placeGhost);

    const radius = () => Math.max(90, name.getBoundingClientRect().width * 0.12);

    function focusAt(x) {
      const R = radius();
      chars.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const f = x == null ? 0 : Math.max(0, 1 - Math.abs(x - (r.left + r.width / 2)) / R);
        const g = Math.round(200 + f * 620), w = Math.round(100 - f * 26);
        c.style.setProperty('--g', g); c.style.setProperty('--w', w);
        c.classList.toggle('on', f > 0.55);
        const gc = ghostChars[i];
        if (gc) { gc.style.setProperty('--g', g); gc.style.setProperty('--w', w); }
      });
    }

    function sweep(duration, done) {
      const r = name.getBoundingClientRect();
      const from = r.left - 80, to = r.right + 80;
      const t0 = performance.now();
      (function step(now) {
        const p = Math.min(1, (now - t0) / duration);
        const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        focusAt(from + (to - from) * e);
        if (p < 1) requestAnimationFrame(step); else { focusAt(null); if (done) done(); }
      })(t0);
    }

    if (!reduce) {
      if (fine) {
        const hero = name.closest('.hero');
        let raf = 0, px = null;
        hero.addEventListener('pointermove', (e) => { px = e.clientX; if (!raf) raf = requestAnimationFrame(() => { raf = 0; focusAt(px); }); });
        hero.addEventListener('pointerleave', () => focusAt(null));
      } else {
        // Em telas de toque, a "leitura" se repete devagar enquanto a primeira tela está visível
        let visible = true;
        if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(name);
        setInterval(() => { if (visible && !document.hidden) sweep(2600); }, 7000);
      }
    }
  }

  /* Fotos: se o arquivo ainda não existir, a moldura mantém a textura */
  $$('.photo img').forEach((img) => {
    const drop = () => img.remove();
    const ok = () => img.parentElement && img.parentElement.classList.add('has-img');
    if (img.complete) { if (img.naturalWidth === 0) drop(); else ok(); }
    else { img.addEventListener('error', drop); img.addEventListener('load', ok); }
  });

  /* Profundidade: cada imagem se move numa velocidade diferente na rolagem */
  const para = $$('[data-parallax]');
  if (para.length && !reduce) {
    let tick = false;
    const move = () => {
      tick = false;
      const vh = window.innerHeight;
      para.forEach((img) => {
        if (!img.isConnected) return;
        const r = img.parentElement.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const d = (r.top + r.height / 2 - vh / 2) * Number(img.dataset.parallax);
        img.style.transform = `translate3d(0,${d.toFixed(1)}px,0)`;
      });
    };
    window.addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(move); } }, { passive: true });
    move();
  }

  /* Fio vinho: costura responsiva que acompanha a rolagem sem cruzar o conteúdo */
  const thread = $('[data-thread]');
  if (thread && !reduce) {
    const path = $('path', thread);
    const main = $('main');
    let len = 0, startY = 0, endY = 1;
    function build() {
      const mobile = window.matchMedia('(max-width: 760px)').matches;
      const W = main.clientWidth, mb = main.getBoundingClientRect(), top = mb.top + window.scrollY;
      const yOf = (node, offset) => node.getBoundingClientRect().top + window.scrollY - top + (offset || 0);
      const cta = $('.hero__ctas');
      const ctas = cta.getBoundingClientRect();
      const sideX = mobile ? 9 : Math.max(18, parseFloat(getComputedStyle($('.hero')).paddingLeft) * .45);
      const pts = [{
        x: mobile ? sideX : ctas.left + ctas.width / 2 - mb.left,
        y: ctas.bottom + window.scrollY - top + (mobile ? 22 : 28)
      }];
      const secs = $$('main > section').slice(1);
      secs.forEach((section, i) => {
        const y = yOf(section, mobile ? 30 : 48);
        if (mobile) {
          // No celular, a linha permanece junto à margem esquerda para não atravessar textos.
          pts.push({ x: sideX, y });
        } else {
          pts.push({ x: i % 2 ? W - sideX : sideX, y });
        }
      });
      const contact = $('#contato');
      pts[pts.length - 1] = { x: mobile ? sideX : W / 2, y: yOf(contact, mobile ? 30 : 0) };
      let d = `M${pts[0].x},${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i];
        if (mobile) {
          const mid = a.y + (b.y - a.y) * .5;
          const drift = (i % 2 ? 1 : -1) * 5;
          d += ` C${a.x + drift},${mid - 36} ${b.x - drift},${mid + 36} ${b.x},${b.y}`;
        } else {
          const y0 = Math.max(a.y, b.y - 150);
          d += ` L${a.x},${y0} C${a.x},${y0 + (b.y - y0) * .75} ${b.x},${y0 + (b.y - y0) * .25} ${b.x},${b.y}`;
        }
      }
      path.setAttribute('d', d);
      len = path.getTotalLength();
      path.style.strokeDasharray = len;
      startY = pts[0].y + top; endY = pts[pts.length - 1].y + top;
      draw();
    }
    function draw() {
      const y = window.scrollY + window.innerHeight * .75;
      const p = Math.min(1, Math.max(0, (y - startY) / Math.max(1, endY - startY)));
      path.style.strokeDashoffset = (len * (1 - p)).toFixed(1);
    }
    let t = false;
    window.addEventListener('scroll', () => { if (!t) { t = true; requestAnimationFrame(() => { t = false; draw(); }); } }, { passive: true });
    let rb = 0;
    const rebuild = () => { clearTimeout(rb); rb = setTimeout(build, 150); };
    window.addEventListener('resize', rebuild);
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(build, 300));
    window.addEventListener('load', rebuild);
  }

  /* 3 — Projetos -------------------------------------------------------- */
  const list = $('[data-projetos]');
  const data = Array.isArray(window.PROJETOS) ? window.PROJETOS : [];
  const projetos = data.filter((p) => !p.emPreparacao);
  const slots = data.filter((p) => p.emPreparacao);
  const formatos = ['amplo', 'retrato', 'paisagem', 'panorama'];
  const covers = []; // { wm, host, ratio }

  function coverLines(p) {
    const raw = (p.capa || p.nome || '').split(/<br\s*\/?>/i).map((s) => s.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
    return raw.length ? raw : [p.nome];
  }
  function cover(p, host, ratio) {
    if (p.imagem) {
      const img = el('img');
      img.src = p.imagem; img.alt = p.imagemAlt || ''; img.loading = 'lazy'; img.decoding = 'async';
      host.appendChild(img);
      return;
    }
    const box = el('div', 'cover');
    box.setAttribute('aria-hidden', 'true');
    ['tl', 'tr', 'bl', 'br'].forEach((k) => box.appendChild(el('i', 'crop crop--' + k)));
    const wm = el('span', 'wm');
    coverLines(p).forEach((t) => wm.appendChild(el('span', 'wm__l', t)));
    box.appendChild(wm);
    host.appendChild(box);
    const c = { wm, host, ratio: ratio || 0.56, k: 1 };
    covers.push(c);
    return c;
  }
  function fitCover(c) {
    let target = c.host.clientWidth * c.ratio * c.k;
    fitWordmark(c.wm, target);
    // Limita a altura do bloco a ~50% da capa (capas panorâmicas ou com várias linhas)
    const h = c.wm.getBoundingClientRect().height, max = c.host.clientHeight * 0.5 * c.k;
    if (h > max) fitWordmark(c.wm, target * max / h);
  }

  if (list) {
    projetos.forEach((p, idx) => {
      const fmt = formatos.includes(p.formato) ? p.formato : formatos[idx % formatos.length];
      const art = el('article', 'proj proj--' + fmt);
      art.setAttribute('aria-labelledby', 'proj-' + p.id);

      const open = el('button', 'proj__open');
      open.type = 'button';
      open.setAttribute('aria-label', 'Abrir projeto ' + p.nome);
      open.dataset.index = idx;
      const frame = el('div', 'proj__frame');
      const media = el('div', 'proj__media');
      if (p.tipo) media.appendChild(el('span', 'proj__tag', p.tipo));
      const c = cover(p, media, fmt === 'retrato' ? 0.7 : fmt === 'panorama' ? 0.42 : 0.52);
      frame.appendChild(media); open.appendChild(frame);

      // Ao passar o mouse, o nome do projeto se "remede"
      if (c && !reduce) {
        open.addEventListener('pointerenter', () => { c.k = 1.12; fitCover(c); });
        open.addEventListener('pointerleave', () => { c.k = 1; fitCover(c); });
      }

      const meta = el('div', 'proj__meta');
      const h = el('h3', 'proj__name', p.nome); h.id = 'proj-' + p.id;
      meta.append(el('p', 'proj__seg', p.segmento), h);
      if (p.descricao) meta.appendChild(el('p', 'proj__desc', p.descricao));
      // Até três destaques do projeto, como etiquetas
      if (p.funcionalidades && p.funcionalidades.length) {
        const chips = el('ul', 'proj__chips');
        p.funcionalidades.slice(0, 3).forEach((f) => chips.appendChild(el('li', null, f)));
        meta.appendChild(chips);
      }
      const actions = el('div', 'proj__actions');
      const more = el('button', 'proj__more'); more.type = 'button'; more.dataset.index = idx;
      more.innerHTML = 'Ver projeto <span class="arrow" aria-hidden="true">→</span>';
      more.setAttribute('aria-label', 'Ver detalhes do projeto ' + p.nome);
      actions.appendChild(more);
      if (p.demo) {
        const site = el('a', 'proj__site'); site.href = p.demo; site.target = '_blank'; site.rel = 'noopener';
        site.innerHTML = (p.tipo === 'Demonstração' ? 'Ver demonstração' : 'Ver site') + ' <span class="arrow" aria-hidden="true">↗</span>';
        site.setAttribute('aria-label', (p.tipo === 'Demonstração' ? 'Ver demonstração de ' : 'Ver site de ') + p.nome + ' (abre em nova aba)');
        actions.appendChild(site);
      }
      meta.appendChild(actions);

      art.append(open, meta);
      list.appendChild(art);
    });

    if (slots.length && window.MOSTRAR_EM_PREPARACAO !== false) {
      const box = $('[data-slots]');
      slots.forEach((s) => {
        const li = el('li', 'soon__item');
        li.append(el('span', 'soon__t', s.segmento || 'Nova demonstração'), el('span', 'soon__s', 'Em preparação'));
        box.appendChild(li);
      });
      $('[data-proximos]').hidden = false;
    }
  }

  /* 4 — Painel do projeto ---------------------------------------------- */
  const dlg = $('[data-case]');
  let lastFocus = null;
  function block(label, content) {
    const b = el('div', 'case__block');
    b.appendChild(el('p', 'label', label));
    if (Array.isArray(content)) { const ul = el('ul'); content.forEach((c) => ul.appendChild(el('li', null, c))); b.appendChild(ul); }
    else b.appendChild(el('p', null, content));
    return b;
  }
  function openCase(idx) {
    const p = projetos[idx]; if (!p || !dlg) return;
    lastFocus = document.activeElement;
    const media = $('[data-case-media]', dlg); media.innerHTML = '';
    $('[data-case-meta]', dlg).textContent = [p.segmento, p.tipo].filter(Boolean).join(' · ');
    $('[data-case-title]', dlg).textContent = p.nome;
    $('[data-case-desc]', dlg).textContent = p.descricao || '';
    const grid = $('[data-case-grid]', dlg); grid.innerHTML = '';
    if (p.objetivo) grid.appendChild(block('Objetivo', p.objetivo));
    if (p.solucao) grid.appendChild(block('Solução desenvolvida', p.solucao));
    if (p.funcionalidades && p.funcionalidades.length) grid.appendChild(block('Funcionalidades e diferenciais', p.funcionalidades));
    const act = $('[data-case-actions]', dlg); act.innerHTML = '';
    if (p.demo) {
      const a = el('a', 'btn btn--wine'); a.href = p.demo; a.target = '_blank'; a.rel = 'noopener';
      a.innerHTML = (p.tipo === 'Demonstração' ? 'Ver demonstração' : 'Ver site') + ' <span class="arrow" aria-hidden="true">↗</span>'; act.appendChild(a);
    }
    const talk = el('a', 'btn btn--line'); talk.href = '#contato';
    talk.innerHTML = 'Conversar sobre um projeto assim <span class="arrow" aria-hidden="true">↗</span>';
    talk.addEventListener('click', () => dlg.close());
    act.appendChild(talk);
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    const c = cover(p, media, 0.4);
    if (c) { fitCover(c); covers.pop(); }
    dlg.scrollTop = 0;
    $('[data-case-close]', dlg).focus();
  }
  if (dlg) {
    document.addEventListener('click', (e) => {
      const t = e.target.closest('.proj__open, .proj__more');
      if (t) openCase(Number(t.dataset.index));
    });
    $('[data-case-close]', dlg).addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => { if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true }); });
  }

  /* Ajuste de todas as medidas: ao carregar as fontes e ao redimensionar */
  function refitAll() { fitFooter(); covers.forEach(fitCover); }
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(refitAll);
  let rt = 0;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(refitAll, 120); });

  /* 5 — Rótulo que acompanha o cursor nos projetos ---------------------- */
  if (fine && !reduce) {
    const f = el('div', 'follow', 'Ver projeto'); f.setAttribute('aria-hidden', 'true');
    document.body.appendChild(f);
    let fx = 0, fy = 0, raf = 0;
    const paint = () => { f.style.transform = `translate3d(${fx + 14}px,${fy + 14}px,0)`; raf = 0; };
    document.addEventListener('pointermove', (e) => {
      const over = e.target.closest && e.target.closest('.proj__open');
      f.classList.toggle('on', !!over);
      fx = e.clientX; fy = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    }, { passive: true });
  }

  /* 6 — Entradas ao rolar ----------------------------------------------- */
  // Verificação direta pela posição na rolagem (mais confiável que depender só do IntersectionObserver)
  let pending = $$('.rv, .rv-type, .rv-img, .b, .proj, [data-steps], [data-chat], .panel__list');
  if (reduce) pending.forEach((r) => r.classList.add('in'));
  else {
    let ticking = false;
    const check = () => {
      ticking = false;
      const limit = window.innerHeight * 0.9;
      pending = pending.filter((r) => {
        const t = r.getBoundingClientRect().top;
        if (t < limit) { r.classList.add('in'); return false; }
        return true;
      });
      if (!pending.length) window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', check);
    check();
  }

  /* 7 — Abordagem: o texto vai sendo lido com a rolagem ----------------- */
  const read = $('[data-read]');
  if (read) {
    const text = read.textContent.trim();
    read.setAttribute('aria-label', text);
    read.innerHTML = text.split(/\s+/).map((w) => '<span class="w" aria-hidden="true">' + w + '</span>').join(' ');
    const spans = $$('.w', read);
    if (reduce) spans.forEach((s) => s.classList.add('on'));
    else {
      let ticking = false;
      const update = () => {
        const r = read.getBoundingClientRect(), vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
        const n = Math.round(p * spans.length);
        spans.forEach((s, i) => s.classList.toggle('on', i < n));
        ticking = false;
      };
      window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
      update();
    }
  }

  /* 8 — Serviços (abas acessíveis) ------------------------------------- */
  const tabs = $$('.services [role="tab"]');
  function select(tab, focus) {
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      $('#' + t.getAttribute('aria-controls')).classList.toggle('is-active', on);
    });
    if (focus) tab.focus();
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    if (fine) t.addEventListener('mouseenter', () => select(t));
    t.addEventListener('keydown', (e) => {
      const k = e.key;
      let j = null;
      if (k === 'ArrowDown' || k === 'ArrowRight') j = (i + 1) % tabs.length;
      if (k === 'ArrowUp' || k === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
      if (k === 'Home') j = 0;
      if (k === 'End') j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); select(tabs[j], true); }
    });
  });

  /* 9 — Navegação: marca a seção atual --------------------------------- */
  const links = $$('.nav a, .dock a');
  const sections = ['projetos', 'servicos', 'processo', 'contato'].map((id) => document.getElementById(id)).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const nio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = '#' + en.target.id;
        links.forEach((a) => a.setAttribute('aria-current', String(a.getAttribute('href') === id)));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => nio.observe(s));
  }
  /* 10 — Voltar ao topo + cabeçalho que se recolhe ---------------------- */
  // O cabeçalho é fixo, então "#topo" sozinho não rola a página: rolamos até o início
  $$('a[href="#topo"]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    if (header) header.classList.remove('is-hidden');
  }));
  const totop = $('[data-totop]');
  const ring = totop && $('.totop__ring', totop);
  const header = $('.header');
  const CIRC = 150.8;
  let lastY = window.scrollY, busy = false;
  function onScrollUI() {
    busy = false;
    const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    if (totop) {
      totop.classList.toggle('show', y > window.innerHeight * 0.8);
      ring.style.strokeDashoffset = (CIRC * (1 - (max > 0 ? y / max : 0))).toFixed(1);
    }
    if (header && !reduce) {
      const down = y > lastY + 4, up = y < lastY - 4;
      if (down && y > 320) header.classList.add('is-hidden');
      else if (up || y < 120) header.classList.remove('is-hidden');
    }
    lastY = y;
  }
  window.addEventListener('scroll', () => { if (!busy) { busy = true; requestAnimationFrame(onScrollUI); } }, { passive: true });
  onScrollUI();

  /* 11 — Listas entram item por item ------------------------------------ */
  $$('.ticks, .panel__list').forEach((ul) => $$('li', ul).forEach((li, i) => li.style.setProperty('--i', i)));

  /* 12 — Botões "magnéticos" e cartões que inclinam com o cursor -------- */
  if (fine && !reduce) {
    $$('.btn, .totop').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        b.style.translate = `${(dx * 10).toFixed(1)}px ${(dy * 8).toFixed(1)}px`;
      });
      b.addEventListener('pointerleave', () => { b.style.translate = ''; });
    });
    $$('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) scale(1.02)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }
})();
