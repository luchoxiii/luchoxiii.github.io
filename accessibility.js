/* accessibility.js — panel de accesibilidad + mejoras ARIA para luchoxiii.github.io
   Cargar con: <script src="accessibility.js" defer></script> (antes de </body>) */
(function () {
  'use strict';

  var KEY = 'a11y-prefs-v1';
  var SIZES = [100, 112, 125, 150];
  var MAIL = 'eagleblue91@gmail.com';

  var T = {
    es: { fab:'Accesibilidad', title:'Opciones de accesibilidad', size:'Tamaño del texto', smaller:'Reducir texto', larger:'Aumentar texto',
      contrast:'Alto contraste', spacing:'Espaciado del texto', font:'Fuente de alta legibilidad', links:'Subrayar enlaces', motion:'Pausar animaciones',
      reset:'Restablecer', close:'Cerrar', theme:'Modo oscuro', lang:'Seleccionar idioma', newtab:' (se abre en una pestaña nueva)',
      skip:'Saltar al contenido', nav:'Navegación principal', sizeAnn:'Tamaño de texto', on:'activado', off:'desactivado', resetDone:'Preferencias restablecidas',
      stTitle:'Declaración de accesibilidad',
      stBody:'Este sitio busca cumplir con las pautas WCAG 2.2 nivel AA del W3C: navegación completa con teclado, enlace para saltar al contenido, contraste de color suficiente, textos alternativos y opciones de visualización ajustables. Si encontrás una barrera, escribime a ' + MAIL + ' y la corrijo.' },
    en: { fab:'Accessibility', title:'Accessibility options', size:'Text size', smaller:'Decrease text', larger:'Increase text',
      contrast:'High contrast', spacing:'Text spacing', font:'High-legibility font', links:'Underline links', motion:'Pause animations',
      reset:'Reset', close:'Close', theme:'Dark mode', lang:'Select language', newtab:' (opens in a new tab)',
      skip:'Skip to content', nav:'Main navigation', sizeAnn:'Text size', on:'on', off:'off', resetDone:'Preferences reset',
      stTitle:'Accessibility statement',
      stBody:'This site aims to meet W3C WCAG 2.2 level AA: full keyboard navigation, a skip link, sufficient color contrast, text alternatives and adjustable display options. If you find a barrier, email ' + MAIL + ' and I will fix it.' },
    pt: { fab:'Acessibilidade', title:'Opções de acessibilidade', size:'Tamanho do texto', smaller:'Diminuir texto', larger:'Aumentar texto',
      contrast:'Alto contraste', spacing:'Espaçamento do texto', font:'Fonte de alta legibilidade', links:'Sublinhar links', motion:'Pausar animações',
      reset:'Redefinir', close:'Fechar', theme:'Modo escuro', lang:'Selecionar idioma', newtab:' (abre em uma nova aba)',
      skip:'Pular para o conteúdo', nav:'Navegação principal', sizeAnn:'Tamanho do texto', on:'ativado', off:'desativado', resetDone:'Preferências redefinidas',
      stTitle:'Declaração de acessibilidade',
      stBody:'Este site busca atender às diretrizes WCAG 2.2 nível AA do W3C: navegação completa por teclado, link para pular o conteúdo, contraste suficiente, textos alternativos e opções de exibição ajustáveis. Se encontrar uma barreira, escreva para ' + MAIL + ' e eu corrijo.' },
    fr: { fab:'Accessibilité', title:"Options d'accessibilité", size:'Taille du texte', smaller:'Réduire le texte', larger:'Agrandir le texte',
      contrast:'Contraste élevé', spacing:'Espacement du texte', font:'Police très lisible', links:'Souligner les liens', motion:'Mettre en pause les animations',
      reset:'Réinitialiser', close:'Fermer', theme:'Mode sombre', lang:'Choisir la langue', newtab:' (s’ouvre dans un nouvel onglet)',
      skip:'Aller au contenu', nav:'Navigation principale', sizeAnn:'Taille du texte', on:'activé', off:'désactivé', resetDone:'Préférences réinitialisées',
      stTitle:"Déclaration d'accessibilité",
      stBody:"Ce site vise à respecter les WCAG 2.2 niveau AA du W3C : navigation complète au clavier, lien d'évitement, contraste suffisant, textes alternatifs et options d'affichage réglables. Si vous rencontrez un obstacle, écrivez à " + MAIL + '.' },
    it: { fab:'Accessibilità', title:'Opzioni di accessibilità', size:'Dimensione del testo', smaller:'Riduci testo', larger:'Ingrandisci testo',
      contrast:'Contrasto elevato', spacing:'Spaziatura del testo', font:'Font ad alta leggibilità', links:'Sottolinea i link', motion:'Metti in pausa le animazioni',
      reset:'Ripristina', close:'Chiudi', theme:'Modalità scura', lang:'Seleziona la lingua', newtab:' (si apre in una nuova scheda)',
      skip:'Vai al contenuto', nav:'Navigazione principale', sizeAnn:'Dimensione del testo', on:'attivo', off:'disattivo', resetDone:'Preferenze ripristinate',
      stTitle:'Dichiarazione di accessibilità',
      stBody:'Questo sito punta a rispettare le WCAG 2.2 livello AA del W3C: navigazione completa da tastiera, link per saltare al contenuto, contrasto sufficiente, testi alternativi e opzioni di visualizzazione regolabili. Se trovi una barriera, scrivi a ' + MAIL + '.' },
    de: { fab:'Barrierefreiheit', title:'Optionen zur Barrierefreiheit', size:'Textgröße', smaller:'Text verkleinern', larger:'Text vergrößern',
      contrast:'Hoher Kontrast', spacing:'Textabstand', font:'Gut lesbare Schrift', links:'Links unterstreichen', motion:'Animationen pausieren',
      reset:'Zurücksetzen', close:'Schließen', theme:'Dunkelmodus', lang:'Sprache auswählen', newtab:' (öffnet in neuem Tab)',
      skip:'Zum Inhalt springen', nav:'Hauptnavigation', sizeAnn:'Textgröße', on:'an', off:'aus', resetDone:'Einstellungen zurückgesetzt',
      stTitle:'Erklärung zur Barrierefreiheit',
      stBody:'Diese Website strebt die Einhaltung der W3C-WCAG 2.2 Stufe AA an: vollständige Tastaturbedienung, Sprunglink, ausreichender Kontrast, Alternativtexte und anpassbare Darstellung. Wenn Sie eine Barriere finden, schreiben Sie an ' + MAIL + '.' }
  };

  var root = document.documentElement;
  var prefs = { size: 0, contrast: false, spacing: false, font: false, links: false, motion: false };
  try { var saved = JSON.parse(localStorage.getItem(KEY)); if (saved) for (var k in prefs) if (k in saved) prefs[k] = saved[k]; } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch (e) {} }

  function lang() {
    var sel = document.getElementById('languageSelector');
    var l = (sel && sel.value) || root.lang || 'es';
    l = l.slice(0, 2).toLowerCase();
    return T[l] ? l : 'es';
  }
  function t() { return T[lang()]; }

  function apply() {
    root.style.fontSize = SIZES[prefs.size] + '%';
    root.classList.toggle('a11y-contrast', prefs.contrast);
    root.classList.toggle('a11y-spacing', prefs.spacing);
    root.classList.toggle('a11y-font', prefs.font);
    root.classList.toggle('a11y-links', prefs.links);
    root.classList.toggle('a11y-motion', prefs.motion);
  }
  apply(); // aplicar cuanto antes

  function el(tag, props, kids) {
    var n = document.createElement(tag);
    for (var p in props) { if (p === 'text') n.textContent = props[p]; else n.setAttribute(p, props[p]); }
    (kids || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }

  function init() {
    var main = document.getElementById('main-content');
    if (main) main.setAttribute('tabindex', '-1');

    /* ---- Widget ---- */
    var fab = el('button', { type: 'button', 'class': 'a11y-fab', 'aria-expanded': 'false', 'aria-controls': 'a11y-panel' });
    fab.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>';
    var panel = el('div', { id: 'a11y-panel', 'class': 'a11y-panel', role: 'region', hidden: '' });
    var live = el('div', { 'class': 'a11y-sr', role: 'status', 'aria-live': 'polite' });
    var widget = el('div', { 'class': 'a11y-widget', 'data-a11y-widget': '' }, [fab, panel, live]);
    document.body.appendChild(widget);

    var opts = [['contrast', 'contrast'], ['spacing', 'spacing'], ['font', 'font'], ['links', 'links'], ['motion', 'motion']];
    var els = {};

    function announce(msg) { live.textContent = ''; setTimeout(function () { live.textContent = msg; }, 50); }

    function buildPanel() {
      var s = t();
      panel.innerHTML = '';
      panel.setAttribute('aria-label', s.title);
      panel.appendChild(el('h2', { text: s.title }));

      var out = el('output', { 'aria-live': 'off' });
      var dec = el('button', { type: 'button', 'aria-label': s.smaller, text: 'A−' });
      var inc = el('button', { type: 'button', 'aria-label': s.larger, text: 'A+' });
      var sizeBox = el('div', { 'class': 'a11y-size' }, [dec, out, inc]);
      panel.appendChild(el('div', { 'class': 'a11y-row' }, [el('span', { 'class': 'a11y-row-label', text: s.size }), sizeBox]));
      function showSize() { out.textContent = SIZES[prefs.size] + '%'; dec.disabled = prefs.size === 0; inc.disabled = prefs.size === SIZES.length - 1; }
      function step(d) {
        prefs.size = Math.max(0, Math.min(SIZES.length - 1, prefs.size + d));
        apply(); save(); showSize(); announce(t().sizeAnn + ' ' + SIZES[prefs.size] + '%');
      }
      dec.addEventListener('click', function () { step(-1); });
      inc.addEventListener('click', function () { step(1); });
      showSize();

      opts.forEach(function (o) {
        var b = el('button', { type: 'button', 'class': 'a11y-opt', 'aria-pressed': String(prefs[o[0]]), text: s[o[1]] });
        b.addEventListener('click', function () {
          prefs[o[0]] = !prefs[o[0]];
          b.setAttribute('aria-pressed', String(prefs[o[0]]));
          apply(); save();
          announce(t()[o[1]] + ': ' + (prefs[o[0]] ? t().on : t().off));
        });
        els[o[0]] = b;
        panel.appendChild(b);
      });

      var reset = el('button', { type: 'button', text: s.reset });
      reset.addEventListener('click', function () {
        prefs = { size: 0, contrast: false, spacing: false, font: false, links: false, motion: false };
        apply(); save(); buildPanel(); announce(t().resetDone);
        panel.querySelector('button').focus();
      });
      var close = el('button', { type: 'button', text: s.close });
      close.addEventListener('click', function () { toggle(false, true); });
      panel.appendChild(el('div', { 'class': 'a11y-actions' }, [reset, close]));
    }

    function toggle(open, refocus) {
      panel.hidden = !open;
      fab.setAttribute('aria-expanded', String(open));
      if (open) { var f = panel.querySelector('button:not([disabled])'); if (f) f.focus(); }
      else if (refocus) fab.focus();
    }
    fab.addEventListener('click', function () { toggle(panel.hidden, false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) toggle(false, true); });
    document.addEventListener('click', function (e) { if (!panel.hidden && !widget.contains(e.target)) toggle(false, false); });

    /* ---- Declaración de accesibilidad en el footer ---- */
    var footer = document.querySelector('footer');
    var stSummary = el('summary'), stText = el('p');
    var statement = el('details', { 'class': 'a11y-statement' }, [stSummary, stText]);
    if (footer) footer.appendChild(statement);

    /* ---- Textos traducibles + ARIA (se re-ejecuta al cambiar de idioma) ---- */
    function labelAll() {
      var s = t();
      fab.setAttribute('aria-label', s.fab);
      fab.setAttribute('title', s.fab);
      stSummary.textContent = s.stTitle;
      stText.textContent = s.stBody;
      root.style.setProperty('--a11y-newtab', '"' + s.newtab + '"');
      var sel = document.getElementById('languageSelector'); if (sel) sel.setAttribute('aria-label', s.lang);
      var tb = document.getElementById('themeToggle'); if (tb) tb.setAttribute('aria-label', s.theme);
      var skip = document.querySelector('.skip-link'); if (skip) skip.textContent = s.skip;
      var nav = document.querySelector('nav.nav'); if (nav) nav.setAttribute('aria-label', s.nav);
      buildPanel();
    }
    function syncTheme() {
      var tb = document.getElementById('themeToggle');
      if (tb) tb.setAttribute('aria-pressed', String(document.body.classList.contains('dark')));
    }

    /* ---- Arreglos estructurales (por si aún no están en el HTML) ---- */
    function enhance() {
      // <base target="_blank"> hace que hasta los anclas internos abran pestaña nueva
      var base = document.querySelector('base[target]'); if (base) base.remove();
      var skip = document.querySelector('.skip-link'); if (skip) skip.setAttribute('target', '_self');
      document.querySelectorAll('a[data-scroll]').forEach(function (a) {
        if (!a.getAttribute('href')) a.setAttribute('href', a.getAttribute('data-scroll'));
        a.setAttribute('target', '_self');
      });
      document.querySelectorAll('a[href]').forEach(function (a) {
        var h = a.getAttribute('href');
        var external = /^https?:\/\//i.test(h) && a.hostname !== location.hostname;
        if (external || /\.pdf($|\?)/i.test(h)) {
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('data-a11y-ext', '');
        }
      });
      document.querySelectorAll('.cert-logo, .resource-icon').forEach(function (n) { n.setAttribute('aria-hidden', 'true'); });
      document.querySelectorAll('svg:not([aria-hidden])').forEach(function (n) { n.setAttribute('aria-hidden', 'true'); n.setAttribute('focusable', 'false'); });
      document.querySelectorAll('main section[id]').forEach(function (sec) {
        var h = sec.querySelector('h2'); if (h && !h.id) h.id = sec.id + '-heading';
        if (h && !sec.hasAttribute('aria-labelledby')) sec.setAttribute('aria-labelledby', h.id);
      });
    }

    labelAll(); syncTheme(); enhance();

    var sel = document.getElementById('languageSelector');
    if (sel) sel.addEventListener('change', function () { setTimeout(function () { labelAll(); enhance(); }, 0); });
    new MutationObserver(function () { labelAll(); }).observe(root, { attributes: true, attributeFilter: ['lang'] });
    new MutationObserver(syncTheme).observe(document.body, { attributes: true, attributeFilter: ['class'] });
    // Las tarjetas de certificaciones se regeneran por JS: reaplicar
    var grid = document.getElementById('certGrid');
    if (grid) new MutationObserver(function () { enhance(); }).observe(grid, { childList: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
