import { c as createComponent } from './astro-component_BLqcxYvp.mjs';
import 'piccolore';
import { i as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, j as defineScriptVars, f as addAttribute, u as unescapeHTML, k as renderHead, l as renderComponent } from './server_CuAhN97a.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Nav;
  const { t } = Astro2.props;
  const { nav } = t;
  return renderTemplate`${maybeRenderHead()}<header class="nav" id="nav" data-astro-cid-dmqpwcec> <div class="container nav__inner" data-astro-cid-dmqpwcec> <a href="/" class="nav__logo" aria-label="Bheex.ai inicio" data-astro-cid-dmqpwcec> <img src="/assets/logos/Bheex.Logos.principal.png" alt="Bheex.ai" height="36" data-astro-cid-dmqpwcec> </a> <nav class="nav__links" aria-label="Navegación principal" data-astro-cid-dmqpwcec> <a href="#agentes" data-i18n="nav.agents" data-astro-cid-dmqpwcec>${nav.agents}</a> <a href="#como-funciona" data-i18n="nav.howItWorks" data-astro-cid-dmqpwcec>${nav.howItWorks}</a> <a href="#resultados" data-i18n="nav.results" data-astro-cid-dmqpwcec>${nav.results}</a> <a href="#contacto" data-i18n="nav.contact" data-astro-cid-dmqpwcec>${nav.contact}</a> </nav> <a href="#contacto" class="btn btn--primary nav__cta" data-i18n="nav.cta" data-astro-cid-dmqpwcec>${nav.cta}</a> <button class="nav__burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-mobile" data-astro-cid-dmqpwcec> <span data-astro-cid-dmqpwcec></span><span data-astro-cid-dmqpwcec></span><span data-astro-cid-dmqpwcec></span> </button> </div> <div class="nav__mobile" id="nav-mobile" hidden data-astro-cid-dmqpwcec> <a href="#agentes" data-i18n="nav.agents" data-astro-cid-dmqpwcec>${nav.agents}</a> <a href="#como-funciona" data-i18n="nav.howItWorks" data-astro-cid-dmqpwcec>${nav.howItWorks}</a> <a href="#resultados" data-i18n="nav.results" data-astro-cid-dmqpwcec>${nav.results}</a> <a href="#contacto" data-i18n="nav.contact" data-astro-cid-dmqpwcec>${nav.contact}</a> <a href="#contacto" class="btn btn--primary" data-i18n="nav.cta" data-astro-cid-dmqpwcec>${nav.cta}</a> </div> </header>  ${renderScript($$result, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/Nav.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const { t } = Astro2.props;
  const { hero } = t;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section class="hero" aria-labelledby="hero-heading" data-astro-cid-bbe6dxrz> <!-- Hex geometry --> <div class="hero__geo" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg class="hex-ring r1" viewBox="0 0 400 460" fill="none" data-astro-cid-bbe6dxrz><polygon points="200,4 396,104 396,304 200,404 4,304 4,104" stroke="#F67029" stroke-width="1.2" stroke-opacity="0.14" data-astro-cid-bbe6dxrz></polygon></svg> <svg class="hex-ring r2" viewBox="0 0 280 322" fill="none" data-astro-cid-bbe6dxrz><polygon points="140,4 276,76 276,220 140,292 4,220 4,76" stroke="#F67029" stroke-width="0.8" stroke-opacity="0.09" data-astro-cid-bbe6dxrz></polygon></svg> <svg class="hex-ring r3" viewBox="0 0 160 184" fill="none" data-astro-cid-bbe6dxrz><polygon points="80,4 156,44 156,124 80,164 4,124 4,44" stroke="#F67029" stroke-width="0.6" stroke-opacity="0.2" data-astro-cid-bbe6dxrz></polygon></svg> <div class="hex-x-mark" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg viewBox="0 0 32 32" fill="none" data-astro-cid-bbe6dxrz><line x1="3" y1="3" x2="29" y2="29" stroke="#F67029" stroke-width="2" stroke-opacity="0.5" data-astro-cid-bbe6dxrz></line><line x1="29" y1="3" x2="3" y2="29" stroke="#F67029" stroke-width="2" stroke-opacity="0.5" data-astro-cid-bbe6dxrz></line></svg> </div> </div> <!-- Brand corner accents --> <div class="corner tr" aria-hidden="true" data-astro-cid-bbe6dxrz></div> <div class="container hero__inner" data-astro-cid-bbe6dxrz> <div class="hero__copy" data-astro-cid-bbe6dxrz> <p class="eyebrow" data-i18n="hero.eyebrow" data-astro-cid-bbe6dxrz>', '</p> <h1 id="hero-heading" data-astro-cid-bbe6dxrz> <span class="hero__static" data-i18n="hero.headlineStatic" data-astro-cid-bbe6dxrz>', '</span> <span class="hero__typewriter" aria-live="polite" data-astro-cid-bbe6dxrz> <span class="hero__typewriter-text" id="tw-text" data-astro-cid-bbe6dxrz>', '</span> <span class="hero__cursor" aria-hidden="true" data-astro-cid-bbe6dxrz>|</span> </span> </h1> <p class="hero__sub" data-i18n="hero.sub" data-astro-cid-bbe6dxrz>', '</p> <div class="hero__actions" data-astro-cid-bbe6dxrz> <a href="#contacto" class="btn btn--primary" data-i18n="hero.ctaPrimary" data-astro-cid-bbe6dxrz>', '</a> <a href="#como-funciona" class="btn btn--ghost" data-i18n="hero.ctaSecondary" data-astro-cid-bbe6dxrz>', '</a> </div> </div> <div class="hero__visual" aria-hidden="true" data-astro-cid-bbe6dxrz> <div class="agent-stack" data-astro-cid-bbe6dxrz> <div class="agent-card ac--support" data-astro-cid-bbe6dxrz> <div class="ac__icon" data-astro-cid-bbe6dxrz> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bbe6dxrz><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-bbe6dxrz></path></svg> </div> <div class="ac__info" data-astro-cid-bbe6dxrz> <p class="ac__name" data-i18n="hero.agentLabels.support" data-astro-cid-bbe6dxrz>', '</p> <p class="ac__status" data-astro-cid-bbe6dxrz><span class="dot" data-astro-cid-bbe6dxrz></span><span data-i18n="hero.agentLabels.supportStatus" data-astro-cid-bbe6dxrz>', '</span></p> </div> <span class="ac__badge" data-i18n="hero.agentLabels.live" data-astro-cid-bbe6dxrz>', '</span> </div> <div class="agent-card ac--sales" data-astro-cid-bbe6dxrz> <div class="ac__icon" data-astro-cid-bbe6dxrz> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bbe6dxrz><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" data-astro-cid-bbe6dxrz></polyline><polyline points="16 7 22 7 22 13" data-astro-cid-bbe6dxrz></polyline></svg> </div> <div class="ac__info" data-astro-cid-bbe6dxrz> <p class="ac__name" data-i18n="hero.agentLabels.sales" data-astro-cid-bbe6dxrz>', '</p> <p class="ac__status" data-astro-cid-bbe6dxrz><span class="dot" data-astro-cid-bbe6dxrz></span><span data-i18n="hero.agentLabels.salesStatus" data-astro-cid-bbe6dxrz>', '</span></p> </div> <span class="ac__badge" data-i18n="hero.agentLabels.active" data-astro-cid-bbe6dxrz>', '</span> </div> <div class="agent-card ac--marketing" data-astro-cid-bbe6dxrz> <div class="ac__icon" data-astro-cid-bbe6dxrz> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bbe6dxrz><circle cx="18" cy="5" r="3" data-astro-cid-bbe6dxrz></circle><circle cx="6" cy="12" r="3" data-astro-cid-bbe6dxrz></circle><circle cx="18" cy="19" r="3" data-astro-cid-bbe6dxrz></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-astro-cid-bbe6dxrz></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-astro-cid-bbe6dxrz></line></svg> </div> <div class="ac__info" data-astro-cid-bbe6dxrz> <p class="ac__name" data-i18n="hero.agentLabels.marketing" data-astro-cid-bbe6dxrz>', '</p> <p class="ac__status" data-astro-cid-bbe6dxrz><span class="dot" data-astro-cid-bbe6dxrz></span><span data-i18n="hero.agentLabels.marketingStatus" data-astro-cid-bbe6dxrz>', '</span></p> </div> <span class="ac__badge" data-i18n="hero.agentLabels.active" data-astro-cid-bbe6dxrz>', '</span> </div> </div> </div> </div> <!-- Scroll indicator --> <div class="hero__scroll" aria-hidden="true" data-astro-cid-bbe6dxrz> <div class="scroll-line" data-astro-cid-bbe6dxrz></div> </div> </section> <!-- Typewriter — both language sets passed, picks at runtime --> <script>(function(){', "\n(function() {\n  const el = document.getElementById('tw-text');\n  if (!el) return;\n\n  const isEn = (navigator.language || 'es').toLowerCase().startsWith('en');\n  const phrases = isEn ? phrasesEn : phrasesEs;\n\n  let pi = 0, ci = 0, deleting = false;\n\n  function tick() {\n    const phrase = phrases[pi];\n    if (!deleting) {\n      el.textContent = phrase.slice(0, ++ci);\n      if (ci === phrase.length) { deleting = true; return setTimeout(tick, 2200); }\n    } else {\n      el.textContent = phrase.slice(0, --ci);\n      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; return setTimeout(tick, 300); }\n    }\n    setTimeout(tick, deleting ? 38 : 62);\n  }\n  setTimeout(tick, 1200);\n})();\n})();<\/script>"])), maybeRenderHead(), hero.eyebrow, hero.headlineStatic, hero.typewriterPhrases[0], hero.sub, hero.ctaPrimary, hero.ctaSecondary, hero.agentLabels.support, hero.agentLabels.supportStatus, hero.agentLabels.live, hero.agentLabels.sales, hero.agentLabels.salesStatus, hero.agentLabels.active, hero.agentLabels.marketing, hero.agentLabels.marketingStatus, hero.agentLabels.active, defineScriptVars({ phrasesEs: hero.typewriterPhrases, phrasesEn: ["Agents execute.", "Support never stops.", "Sales scale up.", "Marketing automates."] }));
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/Hero.astro", void 0);

const $$LogoCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LogoCarousel;
  const { t } = Astro2.props;
  const integrations = [
    { name: "HubSpot", abbr: "HS" },
    { name: "Salesforce", abbr: "SF" },
    { name: "Zendesk", abbr: "ZD" },
    { name: "Slack", abbr: "SL" },
    { name: "WhatsApp", abbr: "WA" },
    { name: "Notion", abbr: "NT" },
    { name: "Gmail", abbr: "GM" },
    { name: "Intercom", abbr: "IC" },
    { name: "Shopify", abbr: "SP" },
    { name: "Stripe", abbr: "ST" },
    { name: "Make", abbr: "MK" },
    { name: "Zapier", abbr: "ZP" }
  ];
  const items = [...integrations, ...integrations];
  return renderTemplate`${maybeRenderHead()}<section class="carousel-section"${addAttribute(t.carousel.label, "aria-label")} data-astro-cid-lqivs3vl> <div class="container carousel__header" data-astro-cid-lqivs3vl> <p class="carousel__label" data-i18n="carousel.label" data-astro-cid-lqivs3vl>${t.carousel.label}</p> </div> <div class="carousel__track-wrap" aria-hidden="true" data-astro-cid-lqivs3vl> <div class="carousel__fade carousel__fade--left" data-astro-cid-lqivs3vl></div> <div class="carousel__track" id="carousel-track" data-astro-cid-lqivs3vl> ${items.map((item) => renderTemplate`<div class="carousel__item" data-astro-cid-lqivs3vl> <div class="carousel__logo" data-astro-cid-lqivs3vl> <span class="logo-abbr" data-astro-cid-lqivs3vl>${item.abbr}</span> </div> <span class="logo-name" data-astro-cid-lqivs3vl>${item.name}</span> </div>`)} </div> <div class="carousel__fade carousel__fade--right" data-astro-cid-lqivs3vl></div> </div> </section>`;
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/LogoCarousel.astro", void 0);

const $$Agents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Agents;
  const { t } = Astro2.props;
  const { agents } = t;
  const icons = [
    `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`
  ];
  return renderTemplate`${maybeRenderHead()}<section class="agents" id="agentes" aria-labelledby="agents-heading" data-astro-cid-mrg5s34m> <div class="container" data-astro-cid-mrg5s34m> <div class="agents__header gsap-reveal" data-astro-cid-mrg5s34m> <h2 id="agents-heading" data-astro-cid-mrg5s34m> <span data-i18n="agents.heading" data-astro-cid-mrg5s34m>${agents.heading}</span><br data-astro-cid-mrg5s34m> <span class="agents__accent" data-i18n="agents.headingAccent" data-astro-cid-mrg5s34m>${agents.headingAccent}</span> </h2> <p class="agents__sub" data-i18n="agents.sub" data-astro-cid-mrg5s34m>${agents.sub}</p> </div> <div class="agents__grid gsap-stagger" data-astro-cid-mrg5s34m> ${agents.cards.map((card, i) => renderTemplate`<article${addAttribute(`agent ${i === 0 ? "agent--featured" : ""}`, "class")} data-astro-cid-mrg5s34m> <div class="agent__icon" aria-hidden="true" data-astro-cid-mrg5s34m>${unescapeHTML(icons[i])}</div> <h3 class="agent__name"${addAttribute(`agents.cards.${i}.name`, "data-i18n")} data-astro-cid-mrg5s34m>${card.name}</h3> <p class="agent__tagline"${addAttribute(`agents.cards.${i}.tagline`, "data-i18n")} data-astro-cid-mrg5s34m>${card.tagline}</p> <p class="agent__desc"${addAttribute(`agents.cards.${i}.desc`, "data-i18n")} data-astro-cid-mrg5s34m>${card.desc}</p> <ul class="agent__features" data-astro-cid-mrg5s34m> ${card.features.map((f, fi) => renderTemplate`<li${addAttribute(`agents.cards.${i}.features.${fi}`, "data-i18n")} data-astro-cid-mrg5s34m> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F67029" stroke-width="2.5" aria-hidden="true" data-astro-cid-mrg5s34m><polyline points="20 6 9 17 4 12" data-astro-cid-mrg5s34m></polyline></svg> ${f} </li>`)} </ul> <a href="#contacto"${addAttribute(`btn ${i === 0 ? "btn--primary" : "btn--ghost"} agent__cta`, "class")}${addAttribute(`agents.cards.${i}.cta`, "data-i18n")} data-astro-cid-mrg5s34m> ${card.cta} </a> </article>`)} </div> </div> </section>`;
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/Agents.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$AgentDemo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AgentDemo;
  const { t } = Astro2.props;
  const { demo } = t;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="demo-section" id="demo" aria-labelledby="demo-heading" data-astro-cid-pzhwjack> <div class="container" data-astro-cid-pzhwjack> <div class="demo__header" data-astro-cid-pzhwjack> <h2 id="demo-heading" data-i18n="demo.heading" data-astro-cid-pzhwjack>', '</h2> <p class="demo__sub" data-i18n="demo.sub" data-astro-cid-pzhwjack>', '</p> </div> <div class="demo__layout" data-astro-cid-pzhwjack> <!-- Scenario selector --> <div class="demo__sidebar" data-astro-cid-pzhwjack> <p class="demo__select-label" data-i18n="demo.selectLabel" data-astro-cid-pzhwjack>', '</p> <div class="demo__scenarios" role="tablist" aria-label="Agent scenarios" data-astro-cid-pzhwjack> ', ' </div> <!-- Mini metrics --> <div class="demo__metric" data-astro-cid-pzhwjack> <span class="dm__value" data-astro-cid-pzhwjack>98%</span> <span class="dm__label" data-i18n="results.metrics.0.label" data-astro-cid-pzhwjack>', '</span> </div> </div> <!-- Chat window --> <div class="demo__chat" id="demo-chat" role="tabpanel" data-astro-cid-pzhwjack> <div class="chat__header" data-astro-cid-pzhwjack> <div class="chat__avatar" data-astro-cid-pzhwjack> <img src="/assets/logos/Bheex.Isotipo.principal.png" alt="Bheex.ai agent" width="24" height="24" data-astro-cid-pzhwjack> </div> <div data-astro-cid-pzhwjack> <p class="chat__name" data-astro-cid-pzhwjack>Agente Bheex.ai</p> <p class="chat__online" data-astro-cid-pzhwjack><span class="dot" data-astro-cid-pzhwjack></span>En línea</p> </div> <button class="chat__replay" id="replay-btn" title="Replay" aria-label="Replay conversation" data-astro-cid-pzhwjack> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-pzhwjack><polyline points="1 4 1 10 7 10" data-astro-cid-pzhwjack></polyline><path d="M3.51 15a9 9 0 1 0 .49-3.96" data-astro-cid-pzhwjack></path></svg> </button> </div> <div class="chat__messages" id="chat-messages" aria-live="polite" aria-label="Chat conversation" data-astro-cid-pzhwjack> <!-- Populated by JS --> </div> <div class="chat__typing" id="chat-typing" aria-live="polite" aria-label="Agent is typing" hidden data-astro-cid-pzhwjack> <span data-astro-cid-pzhwjack></span><span data-astro-cid-pzhwjack></span><span data-astro-cid-pzhwjack></span> </div> </div> </div> </div> </section> <!-- Pass conversations to JS — both languages, pick at runtime --> <script>(function(){', `
const isEn = (navigator.language || 'es').toLowerCase().startsWith('en');
const conversations = isEn ? conversationsEn : conversationsEs;
let currentScenario = 'support';
let playing = false;
let timeouts = [];

const messagesEl = document.getElementById('chat-messages');
const typingEl = document.getElementById('chat-typing');
const replayBtn = document.getElementById('replay-btn');

function clearTimeouts() {
  timeouts.forEach(clearTimeout);
  timeouts = [];
}

function createBubble(role, text) {
  const div = document.createElement('div');
  div.className = \`msg msg--\${role}\`;
  div.innerHTML = \`
    \${role === 'agent' ? '<div class="msg__avatar"><img src="/assets/logos/Bheex.Isotipo.principal.png" width="20" height="20" alt=""/></div>' : ''}
    <div class="msg__bubble">\${text}</div>
  \`;
  return div;
}

async function playConversation(key) {
  if (playing) return;
  playing = true;
  clearTimeouts();
  messagesEl.innerHTML = '';
  typingEl.hidden = true;

  const msgs = conversations[key];
  if (!msgs) { playing = false; return; }

  let cumulativeDelay = 400;

  for (let i = 0; i < msgs.length; i++) {
    const m = msgs[i];
    const delay = m.delay || 600;

    if (m.role === 'agent') {
      // Show typing indicator before agent message
      const showTyping = ((d) => {
        return () => {
          typingEl.hidden = false;
          messagesEl.scrollTop = messagesEl.scrollHeight;
        };
      })(cumulativeDelay);

      const t1 = setTimeout(showTyping, cumulativeDelay);
      timeouts.push(t1);
      cumulativeDelay += delay;

      const hideTypingAndShow = ((text, cd) => {
        return () => {
          typingEl.hidden = true;
          const bubble = createBubble('agent', text);
          messagesEl.appendChild(bubble);
          messagesEl.scrollTop = messagesEl.scrollHeight;
        };
      })(m.text, cumulativeDelay);

      const t2 = setTimeout(hideTypingAndShow, cumulativeDelay);
      timeouts.push(t2);
      cumulativeDelay += 200;
    } else {
      const showUser = ((text, cd) => {
        return () => {
          const bubble = createBubble('user', text);
          messagesEl.appendChild(bubble);
          messagesEl.scrollTop = messagesEl.scrollHeight;
        };
      })(m.text, cumulativeDelay);

      const t3 = setTimeout(showUser, cumulativeDelay);
      timeouts.push(t3);
      cumulativeDelay += 600;
    }
  }

  const done = setTimeout(() => { playing = false; }, cumulativeDelay + 500);
  timeouts.push(done);
}

// Scenario buttons
document.querySelectorAll('.scenario-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.scenario-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const key = btn.dataset.scenario;
    if (key) {
      currentScenario = key;
      playing = false;
      playConversation(key);
    }
  });
});

// Replay
replayBtn?.addEventListener('click', () => {
  playing = false;
  playConversation(currentScenario);
});

// Auto-play on first intersection
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !playing && messagesEl.children.length === 0) {
      setTimeout(() => playConversation(currentScenario), 400);
      observer.disconnect();
    }
  });
}, { threshold: 0.4 });

const section = document.getElementById('demo');
if (section) observer.observe(section);
})();<\/script>`], ["", '<section class="demo-section" id="demo" aria-labelledby="demo-heading" data-astro-cid-pzhwjack> <div class="container" data-astro-cid-pzhwjack> <div class="demo__header" data-astro-cid-pzhwjack> <h2 id="demo-heading" data-i18n="demo.heading" data-astro-cid-pzhwjack>', '</h2> <p class="demo__sub" data-i18n="demo.sub" data-astro-cid-pzhwjack>', '</p> </div> <div class="demo__layout" data-astro-cid-pzhwjack> <!-- Scenario selector --> <div class="demo__sidebar" data-astro-cid-pzhwjack> <p class="demo__select-label" data-i18n="demo.selectLabel" data-astro-cid-pzhwjack>', '</p> <div class="demo__scenarios" role="tablist" aria-label="Agent scenarios" data-astro-cid-pzhwjack> ', ' </div> <!-- Mini metrics --> <div class="demo__metric" data-astro-cid-pzhwjack> <span class="dm__value" data-astro-cid-pzhwjack>98%</span> <span class="dm__label" data-i18n="results.metrics.0.label" data-astro-cid-pzhwjack>', '</span> </div> </div> <!-- Chat window --> <div class="demo__chat" id="demo-chat" role="tabpanel" data-astro-cid-pzhwjack> <div class="chat__header" data-astro-cid-pzhwjack> <div class="chat__avatar" data-astro-cid-pzhwjack> <img src="/assets/logos/Bheex.Isotipo.principal.png" alt="Bheex.ai agent" width="24" height="24" data-astro-cid-pzhwjack> </div> <div data-astro-cid-pzhwjack> <p class="chat__name" data-astro-cid-pzhwjack>Agente Bheex.ai</p> <p class="chat__online" data-astro-cid-pzhwjack><span class="dot" data-astro-cid-pzhwjack></span>En línea</p> </div> <button class="chat__replay" id="replay-btn" title="Replay" aria-label="Replay conversation" data-astro-cid-pzhwjack> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-pzhwjack><polyline points="1 4 1 10 7 10" data-astro-cid-pzhwjack></polyline><path d="M3.51 15a9 9 0 1 0 .49-3.96" data-astro-cid-pzhwjack></path></svg> </button> </div> <div class="chat__messages" id="chat-messages" aria-live="polite" aria-label="Chat conversation" data-astro-cid-pzhwjack> <!-- Populated by JS --> </div> <div class="chat__typing" id="chat-typing" aria-live="polite" aria-label="Agent is typing" hidden data-astro-cid-pzhwjack> <span data-astro-cid-pzhwjack></span><span data-astro-cid-pzhwjack></span><span data-astro-cid-pzhwjack></span> </div> </div> </div> </div> </section> <!-- Pass conversations to JS — both languages, pick at runtime --> <script>(function(){', `
const isEn = (navigator.language || 'es').toLowerCase().startsWith('en');
const conversations = isEn ? conversationsEn : conversationsEs;
let currentScenario = 'support';
let playing = false;
let timeouts = [];

const messagesEl = document.getElementById('chat-messages');
const typingEl = document.getElementById('chat-typing');
const replayBtn = document.getElementById('replay-btn');

function clearTimeouts() {
  timeouts.forEach(clearTimeout);
  timeouts = [];
}

function createBubble(role, text) {
  const div = document.createElement('div');
  div.className = \\\`msg msg--\\\${role}\\\`;
  div.innerHTML = \\\`
    \\\${role === 'agent' ? '<div class="msg__avatar"><img src="/assets/logos/Bheex.Isotipo.principal.png" width="20" height="20" alt=""/></div>' : ''}
    <div class="msg__bubble">\\\${text}</div>
  \\\`;
  return div;
}

async function playConversation(key) {
  if (playing) return;
  playing = true;
  clearTimeouts();
  messagesEl.innerHTML = '';
  typingEl.hidden = true;

  const msgs = conversations[key];
  if (!msgs) { playing = false; return; }

  let cumulativeDelay = 400;

  for (let i = 0; i < msgs.length; i++) {
    const m = msgs[i];
    const delay = m.delay || 600;

    if (m.role === 'agent') {
      // Show typing indicator before agent message
      const showTyping = ((d) => {
        return () => {
          typingEl.hidden = false;
          messagesEl.scrollTop = messagesEl.scrollHeight;
        };
      })(cumulativeDelay);

      const t1 = setTimeout(showTyping, cumulativeDelay);
      timeouts.push(t1);
      cumulativeDelay += delay;

      const hideTypingAndShow = ((text, cd) => {
        return () => {
          typingEl.hidden = true;
          const bubble = createBubble('agent', text);
          messagesEl.appendChild(bubble);
          messagesEl.scrollTop = messagesEl.scrollHeight;
        };
      })(m.text, cumulativeDelay);

      const t2 = setTimeout(hideTypingAndShow, cumulativeDelay);
      timeouts.push(t2);
      cumulativeDelay += 200;
    } else {
      const showUser = ((text, cd) => {
        return () => {
          const bubble = createBubble('user', text);
          messagesEl.appendChild(bubble);
          messagesEl.scrollTop = messagesEl.scrollHeight;
        };
      })(m.text, cumulativeDelay);

      const t3 = setTimeout(showUser, cumulativeDelay);
      timeouts.push(t3);
      cumulativeDelay += 600;
    }
  }

  const done = setTimeout(() => { playing = false; }, cumulativeDelay + 500);
  timeouts.push(done);
}

// Scenario buttons
document.querySelectorAll('.scenario-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.scenario-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const key = btn.dataset.scenario;
    if (key) {
      currentScenario = key;
      playing = false;
      playConversation(key);
    }
  });
});

// Replay
replayBtn?.addEventListener('click', () => {
  playing = false;
  playConversation(currentScenario);
});

// Auto-play on first intersection
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !playing && messagesEl.children.length === 0) {
      setTimeout(() => playConversation(currentScenario), 400);
      observer.disconnect();
    }
  });
}, { threshold: 0.4 });

const section = document.getElementById('demo');
if (section) observer.observe(section);
})();<\/script>`])), maybeRenderHead(), demo.heading, demo.sub, demo.selectLabel, demo.scenarios.map((s, i) => renderTemplate`<button${addAttribute(`scenario-btn ${i === 0 ? "active" : ""}`, "class")} role="tab"${addAttribute(i === 0 ? "true" : "false", "aria-selected")} aria-controls="demo-chat"${addAttribute(s.key, "data-scenario")}${addAttribute(`demo.scenarios.${i}.label`, "data-i18n")} data-astro-cid-pzhwjack> <span class="scenario-icon" data-astro-cid-pzhwjack> ${s.key === "support" && renderTemplate`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-pzhwjack><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-pzhwjack></path></svg>`} ${s.key === "sales" && renderTemplate`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-pzhwjack><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" data-astro-cid-pzhwjack></polyline><polyline points="16 7 22 7 22 13" data-astro-cid-pzhwjack></polyline></svg>`} ${s.key === "marketing" && renderTemplate`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-pzhwjack><circle cx="18" cy="5" r="3" data-astro-cid-pzhwjack></circle><circle cx="6" cy="12" r="3" data-astro-cid-pzhwjack></circle><circle cx="18" cy="19" r="3" data-astro-cid-pzhwjack></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-astro-cid-pzhwjack></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-astro-cid-pzhwjack></line></svg>`} </span> ${s.label} </button>`), t.results.metrics[0].label, defineScriptVars({
    conversationsEs: demo.conversations,
    conversationsEn: {
      support: [
        { role: "user", text: "Hi, I can't access my account. The system says my password is incorrect." },
        { role: "agent", text: "Hi. Let me verify your account right now.", delay: 900 },
        { role: "agent", text: "I found your profile. I see there were 3 failed attempts this morning. For security, I temporarily blocked access.", delay: 1800 },
        { role: "agent", text: "I sent you an email to your registered address with a link to reset your password. Did you receive it?", delay: 2700 },
        { role: "user", text: "Yes, I got it. Thank you!" },
        { role: "agent", text: "Done. If you need anything else, I'm here. Ticket #1842 resolved.", delay: 1200 }
      ],
      sales: [
        { role: "user", text: "Hi, I saw your page. We have a 15-person sales team and waste a lot of time on follow-ups." },
        { role: "agent", text: "Thanks for reaching out. How many new leads do you receive per month approximately?", delay: 800 },
        { role: "user", text: "About 200 monthly leads, but we only close 12-15." },
        { role: "agent", text: "That's a 6-7%!c(MISSING)lose rate. The Bheex.ai Sales Agent can automatically qualify those 200 leads and prioritize the 40-50 with the highest probability of closing.", delay: 1600 },
        { role: "agent", text: "Do you use HubSpot or Salesforce? The integration is direct.", delay: 2200 },
        { role: "user", text: "We use HubSpot. This looks interesting." },
        { role: "agent", text: "Perfect. I've scheduled a demo with our team for Thursday at 10am. Does that work for you?", delay: 1400 }
      ],
      marketing: [
        { role: "user", text: "I need to know the performance of my campaigns from last week." },
        { role: "agent", text: "Querying data from your active campaigns...", delay: 700 },
        { role: "agent", text: "Summary for week of May 26: Email campaign A had 34%!o(MISSING)pen rate (+8%!v(MISSING)s previous week). LinkedIn Ads generated 47 clicks at $2.30 CPC.", delay: 1500 },
        { role: "agent", text: "The best-performing ad was the retail success story. Would you like me to duplicate it with a 20%!h(MISSING)igher budget?", delay: 2400 },
        { role: "user", text: "Yes, do it." },
        { role: "agent", text: "Campaign duplicated and active. You'll receive the report next Monday.", delay: 1e3 }
      ]
    },
    scenarios: demo.scenarios
  }));
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/AgentDemo.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HowItWorks;
  const { t } = Astro2.props;
  const { howItWorks } = t;
  return renderTemplate`${maybeRenderHead()}<section class="hiw" id="como-funciona" aria-labelledby="hiw-heading" data-astro-cid-cmgpsf2k> <div class="container" data-astro-cid-cmgpsf2k> <h2 id="hiw-heading" class="hiw__heading gsap-reveal" data-i18n="howItWorks.heading" data-astro-cid-cmgpsf2k>${howItWorks.heading}</h2> <div class="hiw__steps gsap-stagger" data-astro-cid-cmgpsf2k> ${howItWorks.steps.map((step, i) => renderTemplate`<div class="hiw__step" data-astro-cid-cmgpsf2k> <div class="hiw__num" aria-hidden="true" data-astro-cid-cmgpsf2k>${step.num}</div> <div class="hiw__content" data-astro-cid-cmgpsf2k> <h3${addAttribute(`howItWorks.steps.${i}.title`, "data-i18n")} data-astro-cid-cmgpsf2k>${step.title}</h3> <p${addAttribute(`howItWorks.steps.${i}.body`, "data-i18n")} data-astro-cid-cmgpsf2k>${step.body}</p> </div> </div>`)} </div> </div> </section>`;
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/HowItWorks.astro", void 0);

const $$Results = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Results;
  const { t } = Astro2.props;
  const { results } = t;
  return renderTemplate`${maybeRenderHead()}<section class="results" id="resultados" aria-labelledby="results-heading" data-astro-cid-pvyyuo2j> <div class="container" data-astro-cid-pvyyuo2j> <div class="results__header gsap-reveal" data-astro-cid-pvyyuo2j> <h2 id="results-heading" data-i18n="results.heading" data-astro-cid-pvyyuo2j>${results.heading}</h2> <p class="results__note" data-i18n="results.note" data-astro-cid-pvyyuo2j>${results.note}</p> </div> <div class="results__grid gsap-stagger" data-astro-cid-pvyyuo2j> ${results.metrics.map((m, i) => renderTemplate`<div class="results__item" data-astro-cid-pvyyuo2j> <span class="results__value counter"${addAttribute(m.value, "data-target")}${addAttribute(m.suffix, "data-suffix")}${addAttribute(`${m.value}${m.suffix} ${m.label}`, "aria-label")} data-astro-cid-pvyyuo2j>${m.value}${m.suffix}</span> <span class="results__label"${addAttribute(`results.metrics.${i}.label`, "data-i18n")} data-astro-cid-pvyyuo2j>${m.label}</span> <div class="results__bar" aria-hidden="true" data-astro-cid-pvyyuo2j></div> </div>`)} </div> <blockquote class="results__quote gsap-reveal" data-astro-cid-pvyyuo2j> <p data-i18n="results.quote" data-astro-cid-pvyyuo2j>${results.quote}</p> <cite data-astro-cid-pvyyuo2j> <strong data-i18n="results.quoteName" data-astro-cid-pvyyuo2j>${results.quoteName}</strong> <span data-i18n="results.quoteTitle" data-astro-cid-pvyyuo2j>${results.quoteTitle}</span> </cite> </blockquote> </div> </section>`;
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/Results.astro", void 0);

const $$CTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CTA;
  const { t } = Astro2.props;
  const { cta } = t;
  return renderTemplate`${maybeRenderHead()}<section class="cta-section" id="contacto" aria-labelledby="cta-heading" data-astro-cid-4xty6sx2> <div class="corner-accent top-right" aria-hidden="true" data-astro-cid-4xty6sx2></div> <div class="corner-accent bottom-left" aria-hidden="true" data-astro-cid-4xty6sx2></div> <div class="cta__hex-deco" aria-hidden="true" data-astro-cid-4xty6sx2> <svg viewBox="0 0 400 460" fill="none" data-astro-cid-4xty6sx2> <polygon points="200,6 394,106 394,306 200,406 6,306 6,106" stroke="#F67029" stroke-width="1.5" stroke-opacity="0.15" data-astro-cid-4xty6sx2></polygon> <polygon points="200,40 360,120 360,280 200,360 40,280 40,120" stroke="#F67029" stroke-width="0.8" stroke-opacity="0.08" data-astro-cid-4xty6sx2></polygon> </svg> </div> <div class="container cta__inner" data-astro-cid-4xty6sx2> <div class="cta__copy gsap-reveal" data-astro-cid-4xty6sx2> <h2 id="cta-heading" data-i18n="cta.heading" data-astro-cid-4xty6sx2>${cta.heading}</h2> <p class="cta__sub" data-i18n="cta.sub" data-astro-cid-4xty6sx2>${cta.sub}</p> </div> <form class="cta__form gsap-reveal" style="--delay: 120ms" novalidate aria-label="Contact form" id="cta-form" data-astro-cid-4xty6sx2> <div class="form__row" data-astro-cid-4xty6sx2> <div class="form__field" data-astro-cid-4xty6sx2> <label for="cta-name" data-i18n="cta.labelName" data-astro-cid-4xty6sx2>${cta.labelName}</label> <input type="text" id="cta-name" name="name"${addAttribute(cta.placeholderName, "placeholder")} required autocomplete="name" data-i18n-placeholder="cta.placeholderName" data-astro-cid-4xty6sx2> </div> <div class="form__field" data-astro-cid-4xty6sx2> <label for="cta-email" data-i18n="cta.labelEmail" data-astro-cid-4xty6sx2>${cta.labelEmail}</label> <input type="email" id="cta-email" name="email"${addAttribute(cta.placeholderEmail, "placeholder")} required autocomplete="email" data-i18n-placeholder="cta.placeholderEmail" data-astro-cid-4xty6sx2> </div> </div> <div class="form__field" data-astro-cid-4xty6sx2> <label for="cta-usecase" data-i18n="cta.labelUsecase" data-astro-cid-4xty6sx2>${cta.labelUsecase}</label> <select id="cta-usecase" name="usecase" required data-astro-cid-4xty6sx2> <option value="" disabled selected data-i18n="cta.selectDefault" data-astro-cid-4xty6sx2>${cta.selectDefault}</option> ${cta.options.map((o, i) => renderTemplate`<option${addAttribute(o.value, "value")}${addAttribute(`cta.options.${i}.label`, "data-i18n")} data-astro-cid-4xty6sx2>${o.label}</option>`)} </select> </div> <button type="submit" class="btn btn--primary form__submit" data-i18n="cta.submitLabel" data-astro-cid-4xty6sx2> ${cta.submitLabel} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-4xty6sx2> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-4xty6sx2></line><polyline points="12 5 19 12 12 19" data-astro-cid-4xty6sx2></polyline> </svg> </button> <p class="form__note" data-i18n="cta.submitNote" data-astro-cid-4xty6sx2>${cta.submitNote}</p> </form> </div> </section>  ${renderScript($$result, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/CTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/CTA.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ChatWidget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ChatWidget;
  const { t } = Astro2.props;
  const { chat } = t;
  return renderTemplate(_a || (_a = __template(["<!-- Floating chat button -->", '<div class="chat-widget" id="chat-widget" data-astro-cid-ryytxnzt> <div class="chat-panel" id="chat-panel" hidden aria-label="Chat with Bheex.ai agent" role="dialog" aria-modal="true" data-astro-cid-ryytxnzt> <div class="cp__header" data-astro-cid-ryytxnzt> <div class="cp__avatar" data-astro-cid-ryytxnzt> <img src="/assets/logos/Bheex.Isotipo.principal.png" alt="Bheex.ai" width="28" height="28" data-astro-cid-ryytxnzt> </div> <div class="cp__meta" data-astro-cid-ryytxnzt> <p class="cp__title" data-i18n="chat.title" data-astro-cid-ryytxnzt>', '</p> <p class="cp__sub" data-astro-cid-ryytxnzt><span class="dot" data-astro-cid-ryytxnzt></span><span data-i18n="chat.subtitle" data-astro-cid-ryytxnzt>', '</span></p> </div> <button class="cp__close" id="chat-close" aria-label="Close chat" data-astro-cid-ryytxnzt> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-ryytxnzt> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-ryytxnzt></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-ryytxnzt></line> </svg> </button> </div> <div class="cp__messages" id="cp-messages" aria-live="polite" data-astro-cid-ryytxnzt> <!-- Welcome message injected by JS --> </div> <div class="cp__typing" id="cp-typing" hidden aria-live="polite" data-astro-cid-ryytxnzt> <span data-astro-cid-ryytxnzt></span><span data-astro-cid-ryytxnzt></span><span data-astro-cid-ryytxnzt></span> </div> <form class="cp__input-row" id="chat-form" novalidate data-astro-cid-ryytxnzt> <input type="text" id="chat-input" class="cp__input"', ' autocomplete="off" maxlength="500"', ' data-i18n-placeholder="chat.placeholder" data-astro-cid-ryytxnzt> <button type="submit" class="cp__send"', ' data-astro-cid-ryytxnzt> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-ryytxnzt> <line x1="22" y1="2" x2="11" y2="13" data-astro-cid-ryytxnzt></line> <polygon points="22 2 15 22 11 13 2 9 22 2" data-astro-cid-ryytxnzt></polygon> </svg> </button> </form> </div> <button class="chat-fab" id="chat-fab"', ' aria-expanded="false" data-astro-cid-ryytxnzt> <span class="fab__icon fab__icon--open" aria-hidden="true" data-astro-cid-ryytxnzt> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ryytxnzt> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-ryytxnzt></path> </svg> </span> <span class="fab__icon fab__icon--close" aria-hidden="true" hidden data-astro-cid-ryytxnzt> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-ryytxnzt> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-ryytxnzt></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-ryytxnzt></line> </svg> </span> <span class="fab__label" data-i18n="chat.buttonLabel" data-astro-cid-ryytxnzt>', '</span> <span class="fab__pulse" aria-hidden="true" data-astro-cid-ryytxnzt></span> </button> </div> <script>(function(){', `
const panel = document.getElementById('chat-panel');
const fab = document.getElementById('chat-fab');
const closeBtn = document.getElementById('chat-close');
const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const messagesEl = document.getElementById('cp-messages');
const typingEl = document.getElementById('cp-typing');
const iconOpen = fab?.querySelector('.fab__icon--open');
const iconClose = fab?.querySelector('.fab__icon--close');

let isOpen = false;
let messages = [];
let initialized = false;

function scrollBottom() {
  if (messagesEl) messagesEl.scrollTop = messagesEl.scrollHeight;
}

function addMessage(role, text) {
  messages.push({ role, content: text });
  const div = document.createElement('div');
  div.className = \`cm cm--\${role}\`;
  div.innerHTML = role === 'agent'
    ? \`<div class="cm__avatar"><img src="/assets/logos/Bheex.Isotipo.principal.png" width="18" height="18" alt=""/></div><div class="cm__bubble">\${text}</div>\`
    : \`<div class="cm__bubble">\${text}</div>\`;
  messagesEl?.appendChild(div);
  scrollBottom();
}

function showTyping(show) {
  if (typingEl) typingEl.hidden = !show;
  scrollBottom();
}

function openChat() {
  panel.hidden = false;
  fab.setAttribute('aria-expanded', 'true');
  iconOpen.hidden = true;
  iconClose.hidden = false;
  isOpen = true;
  input?.focus();

  if (!initialized) {
    initialized = true;
    setTimeout(() => addMessage('agent', welcomeMsg), 300);
  }
}

function closeChat() {
  panel.hidden = true;
  fab.setAttribute('aria-expanded', 'false');
  iconOpen.hidden = false;
  iconClose.hidden = true;
  isOpen = false;
}

fab?.addEventListener('click', () => isOpen ? closeChat() : openChat());
closeBtn?.addEventListener('click', closeChat);

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isOpen) closeChat();
});

// Send message
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = input?.value.trim();
  if (!text) return;

  addMessage('user', text);
  input.value = '';

  showTyping(true);

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: messages.slice(1) }), // skip welcome
    });
    const data = await res.json();
    showTyping(false);
    addMessage('agent', data.reply || 'Something went wrong. Try again.');
  } catch {
    showTyping(false);
    addMessage('agent', 'Connection error. Please try again.');
  }
});
})();<\/script>`], ["<!-- Floating chat button -->", '<div class="chat-widget" id="chat-widget" data-astro-cid-ryytxnzt> <div class="chat-panel" id="chat-panel" hidden aria-label="Chat with Bheex.ai agent" role="dialog" aria-modal="true" data-astro-cid-ryytxnzt> <div class="cp__header" data-astro-cid-ryytxnzt> <div class="cp__avatar" data-astro-cid-ryytxnzt> <img src="/assets/logos/Bheex.Isotipo.principal.png" alt="Bheex.ai" width="28" height="28" data-astro-cid-ryytxnzt> </div> <div class="cp__meta" data-astro-cid-ryytxnzt> <p class="cp__title" data-i18n="chat.title" data-astro-cid-ryytxnzt>', '</p> <p class="cp__sub" data-astro-cid-ryytxnzt><span class="dot" data-astro-cid-ryytxnzt></span><span data-i18n="chat.subtitle" data-astro-cid-ryytxnzt>', '</span></p> </div> <button class="cp__close" id="chat-close" aria-label="Close chat" data-astro-cid-ryytxnzt> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-ryytxnzt> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-ryytxnzt></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-ryytxnzt></line> </svg> </button> </div> <div class="cp__messages" id="cp-messages" aria-live="polite" data-astro-cid-ryytxnzt> <!-- Welcome message injected by JS --> </div> <div class="cp__typing" id="cp-typing" hidden aria-live="polite" data-astro-cid-ryytxnzt> <span data-astro-cid-ryytxnzt></span><span data-astro-cid-ryytxnzt></span><span data-astro-cid-ryytxnzt></span> </div> <form class="cp__input-row" id="chat-form" novalidate data-astro-cid-ryytxnzt> <input type="text" id="chat-input" class="cp__input"', ' autocomplete="off" maxlength="500"', ' data-i18n-placeholder="chat.placeholder" data-astro-cid-ryytxnzt> <button type="submit" class="cp__send"', ' data-astro-cid-ryytxnzt> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-ryytxnzt> <line x1="22" y1="2" x2="11" y2="13" data-astro-cid-ryytxnzt></line> <polygon points="22 2 15 22 11 13 2 9 22 2" data-astro-cid-ryytxnzt></polygon> </svg> </button> </form> </div> <button class="chat-fab" id="chat-fab"', ' aria-expanded="false" data-astro-cid-ryytxnzt> <span class="fab__icon fab__icon--open" aria-hidden="true" data-astro-cid-ryytxnzt> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ryytxnzt> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-ryytxnzt></path> </svg> </span> <span class="fab__icon fab__icon--close" aria-hidden="true" hidden data-astro-cid-ryytxnzt> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-ryytxnzt> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-ryytxnzt></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-ryytxnzt></line> </svg> </span> <span class="fab__label" data-i18n="chat.buttonLabel" data-astro-cid-ryytxnzt>', '</span> <span class="fab__pulse" aria-hidden="true" data-astro-cid-ryytxnzt></span> </button> </div> <script>(function(){', `
const panel = document.getElementById('chat-panel');
const fab = document.getElementById('chat-fab');
const closeBtn = document.getElementById('chat-close');
const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const messagesEl = document.getElementById('cp-messages');
const typingEl = document.getElementById('cp-typing');
const iconOpen = fab?.querySelector('.fab__icon--open');
const iconClose = fab?.querySelector('.fab__icon--close');

let isOpen = false;
let messages = [];
let initialized = false;

function scrollBottom() {
  if (messagesEl) messagesEl.scrollTop = messagesEl.scrollHeight;
}

function addMessage(role, text) {
  messages.push({ role, content: text });
  const div = document.createElement('div');
  div.className = \\\`cm cm--\\\${role}\\\`;
  div.innerHTML = role === 'agent'
    ? \\\`<div class="cm__avatar"><img src="/assets/logos/Bheex.Isotipo.principal.png" width="18" height="18" alt=""/></div><div class="cm__bubble">\\\${text}</div>\\\`
    : \\\`<div class="cm__bubble">\\\${text}</div>\\\`;
  messagesEl?.appendChild(div);
  scrollBottom();
}

function showTyping(show) {
  if (typingEl) typingEl.hidden = !show;
  scrollBottom();
}

function openChat() {
  panel.hidden = false;
  fab.setAttribute('aria-expanded', 'true');
  iconOpen.hidden = true;
  iconClose.hidden = false;
  isOpen = true;
  input?.focus();

  if (!initialized) {
    initialized = true;
    setTimeout(() => addMessage('agent', welcomeMsg), 300);
  }
}

function closeChat() {
  panel.hidden = true;
  fab.setAttribute('aria-expanded', 'false');
  iconOpen.hidden = false;
  iconClose.hidden = true;
  isOpen = false;
}

fab?.addEventListener('click', () => isOpen ? closeChat() : openChat());
closeBtn?.addEventListener('click', closeChat);

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isOpen) closeChat();
});

// Send message
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = input?.value.trim();
  if (!text) return;

  addMessage('user', text);
  input.value = '';

  showTyping(true);

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: messages.slice(1) }), // skip welcome
    });
    const data = await res.json();
    showTyping(false);
    addMessage('agent', data.reply || 'Something went wrong. Try again.');
  } catch {
    showTyping(false);
    addMessage('agent', 'Connection error. Please try again.');
  }
});
})();<\/script>`])), maybeRenderHead(), chat.title, chat.subtitle, addAttribute(chat.placeholder, "placeholder"), addAttribute(chat.placeholder, "aria-label"), addAttribute(chat.send, "aria-label"), addAttribute(chat.buttonLabel, "aria-label"), chat.buttonLabel, defineScriptVars({ welcomeMsg: chat.welcomeMsg, sendLabel: chat.send }));
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/ChatWidget.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { t } = Astro2.props;
  const { footer } = t;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const navLinks = [
    { href: "#agentes", key: 0 },
    { href: "#como-funciona", key: 1 },
    { href: "#resultados", key: 2 }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="footer" aria-label="Footer" data-astro-cid-sz7xmlte> <div class="container footer__inner" data-astro-cid-sz7xmlte> <div class="footer__brand" data-astro-cid-sz7xmlte> <a href="/" aria-label="Bheex.ai" data-astro-cid-sz7xmlte> <img src="/assets/logos/Bheex.Logos.principal.png" alt="Bheex.ai" height="32" data-astro-cid-sz7xmlte> </a> <p class="footer__tagline" data-i18n="footer.tagline" data-astro-cid-sz7xmlte>${footer.tagline}</p> </div> <nav class="footer__nav" aria-label="Footer navigation" data-astro-cid-sz7xmlte> <div class="footer__col" data-astro-cid-sz7xmlte> <p class="footer__col-title" data-i18n="footer.product" data-astro-cid-sz7xmlte>${footer.product}</p> ${footer.navProduct.map((label, i) => renderTemplate`<a${addAttribute(navLinks[i]?.href || "#", "href")}${addAttribute(`footer.navProduct.${i}`, "data-i18n")} data-astro-cid-sz7xmlte>${label}</a>`)} </div> <div class="footer__col" data-astro-cid-sz7xmlte> <p class="footer__col-title" data-i18n="footer.company" data-astro-cid-sz7xmlte>${footer.company}</p> ${footer.navCompany.map((label, i) => renderTemplate`<a href="#"${addAttribute(`footer.navCompany.${i}`, "data-i18n")} data-astro-cid-sz7xmlte>${label}</a>`)} </div> </nav> </div> <div class="container footer__bottom" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${year} Bheex.ai. <span data-i18n="footer.legal" data-astro-cid-sz7xmlte>${footer.legal}</span></p> <div class="footer__legal" data-astro-cid-sz7xmlte> <a href="#" data-i18n="footer.privacy" data-astro-cid-sz7xmlte>${footer.privacy}</a> <a href="#" data-i18n="footer.terms" data-astro-cid-sz7xmlte>${footer.terms}</a> </div> </div> </footer>`;
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/components/Footer.astro", void 0);

const content = {
  es: {
    meta: {
      title: "Bheex.ai — Agentes de IA para tu empresa",
      description: "Bheex.ai despliega agentes de inteligencia artificial para soporte, ventas y marketing. Tu equipo digital en producción en menos de 24 horas."
    },
    nav: {
      agents: "Agentes",
      howItWorks: "Cómo funciona",
      results: "Resultados",
      contact: "Contacto",
      cta: "Solicitar demo"
    },
    hero: {
      eyebrow: "Plataforma de agentes IA",
      headlineStatic: "Tu empresa trabaja.",
      typewriterPhrases: [
        "Los agentes ejecutan.",
        "El soporte no para.",
        "Las ventas escalan.",
        "El marketing se automatiza."
      ],
      sub: "Bheex.ai despliega agentes de inteligencia artificial en soporte, ventas y marketing. Operaciones automáticas en horas, no en meses.",
      ctaPrimary: "Solicitar demo gratuita",
      ctaSecondary: "Ver cómo funciona",
      agentLabels: {
        support: "Agente Soporte",
        supportStatus: "Resolviendo ticket #1842",
        sales: "Agente Ventas",
        salesStatus: "3 leads calificados hoy",
        marketing: "Agente Marketing",
        marketingStatus: "Campaña publicada",
        live: "En vivo",
        active: "Activo"
      }
    },
    carousel: {
      label: "Integra con tus herramientas"
    },
    agents: {
      heading: "Un equipo digital.",
      headingAccent: "Tres frentes cubiertos.",
      sub: "Cada agente opera de forma autónoma, aprende de tu negocio y trabaja junto con tu equipo humano sin fricción.",
      cards: [
        {
          name: "Agente Soporte",
          tagline: "Atención 24/7 sin contratar más personal.",
          desc: "Responde consultas, resuelve tickets, escala casos complejos al equipo humano y registra cada interacción. Tu servicio al cliente opera sin pausas.",
          features: [
            "Resolución automática de tickets frecuentes",
            "Escalamiento inteligente por prioridad",
            "Integración con tu CRM o helpdesk",
            "Reportes diarios de volumen y satisfacción"
          ],
          cta: "Activar agente"
        },
        {
          name: "Agente Ventas",
          tagline: "Califica leads mientras tu equipo cierra negocios.",
          desc: "Identifica prospectos de alto valor, nutre conversaciones de seguimiento y actualiza tu CRM sin intervención manual.",
          features: [
            "Calificación automática de leads entrantes",
            "Secuencias de seguimiento personalizadas",
            "Sincronización con HubSpot, Salesforce u otros"
          ],
          cta: "Activar agente"
        },
        {
          name: "Agente Marketing",
          tagline: "Campañas que se ejecutan solas.",
          desc: "Programa contenido, analiza métricas de campaña y segmenta audiencias. Tu equipo trabaja en estrategia, no en tareas repetitivas.",
          features: [
            "Publicación automática en múltiples canales",
            "Reportes de rendimiento en tiempo real",
            "Segmentación dinámica de audiencias"
          ],
          cta: "Activar agente"
        }
      ]
    },
    demo: {
      heading: "Observa a un agente en acción.",
      sub: "Así responde el Agente Soporte ante una consulta real. Sin scripts rígidos, sin tiempos de espera.",
      selectLabel: "Elige un escenario:",
      scenarios: [
        { label: "Soporte al cliente", key: "support" },
        { label: "Calificación de lead", key: "sales" },
        { label: "Consulta de campaña", key: "marketing" }
      ],
      conversations: {
        support: [
          { role: "user", text: "Hola, no puedo acceder a mi cuenta. El sistema dice que mi contraseña es incorrecta." },
          { role: "agent", text: "Hola. Verifico tu cuenta en este momento.", delay: 900 },
          { role: "agent", text: "Encontré tu perfil. Veo que hubo 3 intentos fallidos esta mañana. Por seguridad, bloqueé el acceso temporalmente.", delay: 1800 },
          { role: "agent", text: "Te envié un correo a la dirección registrada con el enlace para restablecer tu contraseña. ¿Lo recibiste?", delay: 2700 },
          { role: "user", text: "Sí, ya lo recibí. ¡Gracias!" },
          { role: "agent", text: "Listo. Si necesitas algo más, aquí estoy. Ticket #1842 resuelto.", delay: 1200 }
        ],
        sales: [
          { role: "user", text: "Hola, vi su página. Tenemos un equipo de ventas de 15 personas y perdemos mucho tiempo en seguimientos." },
          { role: "agent", text: "Gracias por escribirnos. ¿Cuántos leads nuevos reciben por mes aproximadamente?", delay: 800 },
          { role: "user", text: "Unos 200 leads mensuales, pero solo cerramos 12-15." },
          { role: "agent", text: "Eso es una tasa de cierre del 6-7%. El Agente Ventas de Bheex.ai puede calificar automáticamente esos 200 leads y priorizar los 40-50 con mayor probabilidad de cierre.", delay: 1600 },
          { role: "agent", text: "¿Usas HubSpot o Salesforce? La integración es directa.", delay: 2200 },
          { role: "user", text: "Usamos HubSpot. Esto se ve interesante." },
          { role: "agent", text: "Perfecto. Agendé una demo con nuestro equipo para el jueves a las 10am. ¿Te funciona?", delay: 1400 }
        ],
        marketing: [
          { role: "user", text: "Necesito saber el rendimiento de mis campañas de la semana pasada." },
          { role: "agent", text: "Consultando datos de tus campañas activas...", delay: 700 },
          { role: "agent", text: "Resumen semana del 26 mayo: Email campaign A tuvo 34% de apertura (+8% vs semana anterior). LinkedIn Ads generó 47 clics a $2.30 CPC.", delay: 1500 },
          { role: "agent", text: "El anuncio con mejor rendimiento fue el del caso de éxito de retail. ¿Quieres que lo duplique con un presupuesto 20% mayor?", delay: 2400 },
          { role: "user", text: "Sí, hazlo." },
          { role: "agent", text: "Campaña duplicada y activa. Recibirás el reporte el próximo lunes.", delay: 1e3 }
        ]
      }
    },
    howItWorks: {
      heading: "De la idea al agente activo en un día.",
      steps: [
        { num: "1", title: "Defines el objetivo", body: "Nos cuentas qué proceso quieres automatizar. No necesitas saber de IA." },
        { num: "2", title: "Configuramos tu agente", body: "Nuestro equipo conecta el agente con tus herramientas y lo entrena con el contexto de tu negocio." },
        { num: "3", title: "Tu agente entra en operación", body: "En menos de 24 horas el agente está activo, monitoreado y mejorando con cada interacción." }
      ]
    },
    results: {
      heading: "Números reales de empresas en operación.",
      note: "Datos de clientes activos en los primeros 90 días de uso.",
      metrics: [
        { value: 78, suffix: "%", label: "reducción en tiempo de respuesta de soporte" },
        { value: 3.4, suffix: "x", label: "más leads calificados por mes" },
        { value: 40, suffix: "h", label: "ahorradas por semana en tareas repetitivas" },
        { value: 24, suffix: "h", label: "para tener tu agente en producción" }
      ],
      quote: '"Pasamos de responder tickets en 6 horas a menos de 20 minutos. El agente de Bheex.ai resuelve el 80% sin que nuestro equipo intervenga."',
      quoteName: "María González",
      quoteTitle: "Directora de Operaciones, Fintech LATAM"
    },
    cta: {
      heading: "Tu primer agente en producción antes de mañana.",
      sub: "Sin contratos largos. Sin setup complicado. El equipo de Bheex.ai configura, conecta y lanza tu agente junto contigo.",
      labelName: "Nombre",
      placeholderName: "Tu nombre completo",
      labelEmail: "Email corporativo",
      placeholderEmail: "nombre@empresa.com",
      labelUsecase: "¿Qué quieres automatizar?",
      selectDefault: "Selecciona un área",
      options: [
        { value: "soporte", label: "Soporte al cliente" },
        { value: "ventas", label: "Calificación de ventas" },
        { value: "marketing", label: "Automatización de marketing" },
        { value: "otro", label: "Otro proceso" }
      ],
      submitLabel: "Solicitar demo gratuita",
      submitNote: "Sin tarjeta de crédito. Respuesta en menos de 4 horas.",
      successMsg: "Demo solicitada. Te contactamos pronto."
    },
    chat: {
      buttonLabel: "Habla con un agente",
      title: "Agente Bheex.ai",
      subtitle: "Responde en segundos",
      placeholder: "Escribe tu mensaje...",
      send: "Enviar",
      welcomeMsg: "Hola, soy el agente de Bheex.ai. ¿En qué puedo ayudarte hoy? Puedo contarte sobre nuestros agentes de soporte, ventas y marketing."
    },
    footer: {
      tagline: "Agentes de IA para soporte, ventas y marketing.\nTu equipo digital, disponible 24/7.",
      product: "Producto",
      company: "Empresa",
      navProduct: ["Agentes", "Cómo funciona", "Resultados"],
      navCompany: ["Sobre Bheex.ai", "Blog", "Contacto"],
      legal: "Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos"
    }
  }};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const t = content.es;
  return renderTemplate`<html lang="es" id="html-root"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(t.meta.description, "content")} data-i18n="meta.description"><title data-i18n="meta.title">${t.meta.title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><meta property="og:title"${addAttribute(t.meta.title, "content")}><meta property="og:description"${addAttribute(t.meta.description, "content")}><meta property="og:type" content="website"><link rel="icon" type="image/png" href="/assets/logos/Bheex.Isotipo.principal.png">${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, { "t": t })} <main id="main"> ${renderComponent($$result, "Hero", $$Hero, { "t": t })} ${renderComponent($$result, "LogoCarousel", $$LogoCarousel, { "t": t })} ${renderComponent($$result, "Agents", $$Agents, { "t": t })} ${renderComponent($$result, "AgentDemo", $$AgentDemo, { "t": t })} ${renderComponent($$result, "HowItWorks", $$HowItWorks, { "t": t })} ${renderComponent($$result, "Results", $$Results, { "t": t })} ${renderComponent($$result, "CTA", $$CTA, { "t": t })} </main> ${renderComponent($$result, "Footer", $$Footer, { "t": t })} ${renderComponent($$result, "ChatWidget", $$ChatWidget, { "t": t })} <!-- i18n auto-detect --> ${renderScript($$result, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/pages/index.astro?astro&type=script&index=0&lang.ts")} <!-- GSAP scroll-driven animations --> ${renderScript($$result, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/pages/index.astro?astro&type=script&index=1&lang.ts")} <!-- Scroll reveal observer (fallback / initial state) --> ${renderScript($$result, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/pages/index.astro?astro&type=script&index=2&lang.ts")} </body> </html>`;
}, "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/pages/index.astro", void 0);

const $$file = "/Users/nicolasdurangarces/TODO/BHEEX/bheex-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
