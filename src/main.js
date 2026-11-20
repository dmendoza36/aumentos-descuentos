import './style.css';
import { topics, formulas, worksheets, questions, resultMessages } from './content.js';
import { scoreAnswers, newAttempt } from './exam.js';
import { playSound, setSound, celebrate } from './effects.js';

const app = document.querySelector('#app');
const state = { screen: 'home', topic: 0, sheet: 0, sound: false, ...newAttempt() };
let stopConfetti = () => {};
let dialogTrigger;

const icons = {
  book: '<path d="M3 5h7l2 2 2-2h7v14h-7l-2 2-2-2H3z"/><path d="M12 7v14M6 9h3m-3 4h3m6-4h3m-3 4h3"/>',
  pencil: '<path d="m5 15 11-11 4 4L9 19l-6 2zM14 6l4 4M5 15l4 4"/>',
  trophy: '<path d="M7 3h10v6a5 5 0 0 1-10 0zM7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4M12 14v6m-5 1h10"/>',
  sound: '<path d="M11 4 6 8H3v8h3l5 4zM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
  mute: '<path d="M11 4 6 8H3v8h3l5 4zM16 9l5 6m0-6-5 6"/>',
  star: '<path d="m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1z"/>',
  seed: '<path d="M12 21v-9M12 15C5 15 3 11 3 6c6 0 9 3 9 9Zm0-3c0-6 3-9 9-9 0 6-3 9-9 9Z"/>',
  home: '<path d="m3 10 9-7 9 7v11h-7v-7h-4v7H3z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  formula: '<path d="M6 4h12M6 20h12M8 4l8 16m0-16L8 20"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  spark: '<path d="m12 2 2 7 7 3-7 2-2 8-2-8-8-2 8-3z"/>'
};
function icon(name, cls = '') { return `<svg class="icon ${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.star}</svg>`; }
function button(action, text, cls = 'button primary', attrs = '') { return `<button type="button" class="${cls}" data-action="${action}" ${attrs}>${text}</button>`; }
function title(kicker, heading, desc) { return `<div class="page-heading"><p class="eyebrow">${kicker}</p><h1 tabindex="-1">${heading}</h1><p>${desc}</p></div>`; }
function back() { return button('go:menu', `${icon('home')} Volver al menú`, 'back-button'); }
function tabs(items, selected, action) { return `<div class="tab-list" role="group" aria-label="Elegir contenido">${items.map((name, i) => button(`${action}:${i}`, name, `tab ${i === selected ? 'selected' : ''}`, `aria-pressed="${i === selected}"`)).join('')}</div>`; }

app.innerHTML = `<header class="site-header"><div class="header-inner"><button class="brand" type="button" data-action="go:home" aria-label="Aumentos y descuentos, inicio"><span class="brand-mark" aria-hidden="true">%</span><span>Aventura<span class="brand-sub">con porcentajes</span></span></button><nav aria-label="Navegación principal">${[['home', 'Inicio'], ['menu', 'Aprender'], ['exercises', 'Practicar'], ['exam', 'Examen']].map(([route, label]) => button(`go:${route}`, label, 'nav-link', `data-route="${route}"`)).join('')}</nav>${button('sound', `${icon('mute')}<span>Sonido apagado</span>`, 'sound-button', 'aria-pressed="false" aria-label="Activar sonido"')}</div></header><main id="main" tabindex="-1"></main><footer class="site-footer"><span class="footer-brand">✦ Estudiante Mendoza Prudencio David Alexander — <span class="student-section">5.º B</span></span><span>Aprende a tu ritmo. Cada intento cuenta.</span></footer><dialog class="modal" aria-labelledby="dialog-title"></dialog>`;
const main = app.querySelector('main');
const dialog = app.querySelector('dialog');

function homeView() {
  return `<section class="hero"><div class="hero-copy"><p class="eyebrow"><span class="pixel-star" aria-hidden="true">✦</span> APRENDER TAMBIÉN ES UNA AVENTURA</p><h1 tabindex="-1">Aumentos<br>y <span>descuentos</span><span class="title-spark" aria-hidden="true">✦</span></h1><p class="hero-description">¿Quieres saber cómo aplicar aumentos y descuentos en tu día a día?</p><p class="hero-support">Descubre los porcentajes, practica con ejemplos y supera tu próximo reto.</p>${button('go:menu', `${icon('spark')} ¡Comenzar aventura!`, 'button primary hero-button')}<p class="hero-note">${icon('clock')} A tu ritmo <span aria-hidden="true">·</span> Sin registro <span aria-hidden="true">·</span> Mucho por descubrir</p></div><div class="world-wrap"><div class="world-caption"><span class="mini-pixel" aria-hidden="true"></span> MUNDO DE LOS PORCENTAJES <span class="world-hearts" aria-hidden="true">♥ ♥ ♥</span></div><div class="world-scene"><img class="world-image" src="/assets/world.svg" alt="Una exploradora pixel art descubre una tienda entre árboles y monedas doradas." fetchpriority="high"><span class="floating-tag tag-plus">+20<span>%</span></span><span class="floating-tag tag-minus">−30<span>%</span></span><span class="scene-label">¡Hay mucho por descubrir!</span></div><span class="world-footnote">TU MISIÓN: APRENDER ALGO NUEVO</span></div></section><section class="journey" aria-labelledby="journey-title"><div class="journey-heading student-heading"><h2 id="journey-title">Estudiante<span class="student-name">Mendoza Prudencio David Alexander</span><span class="student-grade">5.º B</span></h2><p>Todo lo que necesitas para empezar.</p></div><div class="journey-items"><div class="journey-item"><span class="icon-box blue">${icon('book')}</span><div><h3>Explora</h3><p>Ideas claras y ejemplos<br>de la vida real.</p></div></div><div class="journey-item"><span class="icon-box green">${icon('pencil')}</span><div><h3>Practica</h3><p>Resuelve paso a paso<br>y gana confianza.</p></div></div><div class="journey-item"><span class="icon-box yellow">${icon('trophy')}</span><div><h3>Ponte a prueba</h3><p>Tres preguntas para<br>celebrar lo aprendido.</p></div></div></div></section>`;
}

function menuView() {
  const cards = [
    ['topics', 'book', 'blue', 'Temas', 'Descubre cómo funcionan los aumentos, descuentos y cambios sucesivos.', 'Explorar los temas'],
    ['formulas', 'formula', 'purple', 'Fórmulas', 'Ten a mano las herramientas para resolver cada situación.', 'Consultar fórmulas'],
    ['exercises', 'pencil', 'green', 'Ejercicios', 'Practica con las hojas de trabajo y descubre las resoluciones.', 'Ir a practicar'],
    ['exam', 'trophy', 'yellow', 'Examen', 'Pon a prueba lo aprendido con tres preguntas. ¡Tú puedes!', 'Comenzar examen']
  ];
  return `${title('ELIGE TU CAMINO', 'Los porcentajes están en todas partes', 'En una oferta, un nuevo precio o una promoción. Aprende a reconocerlos y tomar mejores decisiones.')}<section class="everyday-grid" aria-label="Aplicaciones cotidianas"><article><span class="context-symbol green" aria-hidden="true">−%</span><div><h2>En tus compras</h2><p>Ofertas, rebajas y promociones con descuentos adicionales.</p></div></article><article><span class="context-symbol blue" aria-hidden="true">+%</span><div><h2>En los precios</h2><p>Recargos e impuestos calculados sobre un precio base.</p></div></article><article><span class="context-symbol purple" aria-hidden="true">%</span><div><h2>En los ingresos</h2><p>Aumentos de sueldo y cambios en las cantidades que recibimos.</p></div></article></section><section class="path-grid" aria-label="Secciones de aprendizaje">${cards.map(([route, image, color, heading, desc, label]) => `<article class="path-card ${color}"><span class="icon-box ${color}">${icon(image)}</span><h2>${heading}</h2><p>${desc}</p>${button(`go:${route}`, label, 'button secondary')}</article>`).join('')}</section><div class="gentle-note">${icon('seed')} No hay prisa. Puedes volver a los temas y practicar las veces que quieras.</div>`;
}

function topicsView() {
  const t = topics[state.topic];
  return `${back()}${title('EXPLORA Y COMPRENDE', 'Cada cambio tiene su explicación', 'Conoce la idea, descubre el factor y observa cómo se aplica.')}${tabs(topics.map(t => t.label), state.topic, 'topic')}<section class="lesson-grid"><article class="panel lesson-main"><span class="topic-symbol ${t.color}" aria-hidden="true">${t.symbol}</span><h2 id="lesson-title" tabindex="-1">${t.title}</h2><p>${t.intro}</p><div class="formula-box">${t.formula}</div><h3>¿Para qué se usa?</h3><ul class="check-list">${t.uses.map(use => `<li>${icon('check')}${use}</li>`).join('')}</ul><h3>Así lo resuelves</h3><ol class="steps-list">${t.steps.map(step => `<li>${step}</li>`).join('')}</ol></article><aside class="lesson-side"><article class="panel example-panel"><p class="eyebrow">UN EJEMPLO COTIDIANO</p><h2>${t.example.title}</h2><p>${t.example.text}</p><div class="calculation-list">${t.example.calculations.map(calc => `<p>${calc}</p>`).join('')}</div><p class="answer-callout">${icon('check')}${t.example.result}</p></article><article class="tip-box"><h3>${icon('spark')} Quédate con esta idea</h3><p>${t.tip}</p></article></aside></section><div class="section-actions">${button('go:formulas', 'Consultar fórmulas', 'button secondary')}${button('go:exercises', 'Practicar lo aprendido')}</div>`;
}

function formulasView() {
  return `${back()}${title('TU CAJA DE HERRAMIENTAS', 'Una fórmula para cada cambio', 'Identifica el valor inicial y transforma cada porcentaje en un factor.')}<div class="legend-bar"><span><strong>Vi</strong> Valor inicial</span><span><strong>Vf</strong> Valor final</span><span><strong>A</strong> % de aumento</span><span><strong>D</strong> % de descuento</span></div><section class="formula-grid">${formulas.map(f => `<article class="panel formula-card"><div class="formula-card-heading"><span class="small-symbol ${f.color}" aria-hidden="true">${f.symbol}</span><h2>${f.type}</h2></div><div class="formula-box">${f.formula}</div><p>${f.meaning}</p><div class="formula-example"><strong>Por ejemplo</strong><p>${f.example}</p></div></article>`).join('')}</section><div class="gentle-note">${icon('spark')} En cambios sucesivos, el segundo porcentaje se aplica al nuevo valor: los porcentajes no se suman directamente.</div><div class="section-actions">${button('go:exercises', 'Ponerlo en práctica')}</div>`;
}

function exercisesView() {
  const sheet = worksheets[state.sheet];
  return `${back()}${title('APRENDE HACIENDO', 'La práctica es parte de la aventura', 'Intenta resolver cada situación. Después, abre la resolución y compara tus pasos.')}${tabs(worksheets.map(s => s.title), state.sheet, 'sheet')}<p class="sheet-description" id="sheet-description" tabindex="-1">${sheet.subtitle}</p><section class="exercise-grid">${sheet.exercises.map((ex, i) => `<article class="panel exercise-card"><div class="exercise-heading"><span class="exercise-number">${i + 1}</span><span class="exercise-tag">${ex.tag}</span></div><h2>${ex.title}</h2><p>${ex.text}</p><details><summary>Ver resolución <span class="details-plus" aria-hidden="true">+</span></summary><div class="resolution"><ol class="steps-list">${ex.steps.map(s => `<li>${s}</li>`).join('')}</ol><p class="answer-callout">${icon('check')}${ex.result}</p></div></details></article>`).join('')}</section><div class="exam-invitation"><div><h2>¿Listo para tu siguiente reto?</h2><p>Tres preguntas para descubrir cuánto has aprendido.</p></div>${button('go:exam', `${icon('trophy')} Comenzar examen`)}</div>`;
}

function examView() {
  const q = questions[state.index];
  return `${back()}${title('TU MOMENTO DE PRACTICAR', 'Pon a prueba lo aprendido', 'Respira, lee con calma y elige una alternativa. Cada intento te ayuda a avanzar.')}<div class="exam-layout"><aside class="exam-sidebar"><h2>Tu recorrido</h2><ol class="exam-stations">${questions.map((question, i) => `<li class="${i === state.index ? 'current' : ''} ${state.answers[i] !== null ? 'answered' : ''}" ${i === state.index ? 'aria-current="step"' : ''}><span class="station-number">${state.answers[i] !== null ? icon('check') : i + 1}</span><div><strong>Pregunta ${i + 1}</strong><span>${question.points} puntos</span></div></li>`).join('')}</ol><div class="exam-note">${icon('clock')}<p>Sin límite de tiempo.<br>Avanza a tu ritmo.</p></div><p class="sidebar-total">Puntuación máxima <strong>20 puntos</strong></p></aside><section class="panel question-panel" aria-label="Pregunta ${state.index + 1} de 3"><div class="question-meta"><span>PREGUNTA ${state.index + 1} DE 3</span><span class="points-badge">${q.points} puntos</span></div><h2 id="question-title" tabindex="-1">${q.title}</h2><p class="question-text" id="question-text">${q.text}</p><fieldset aria-describedby="question-text answer-error"><legend>Selecciona una alternativa</legend><div class="options">${q.options.map((option, i) => `<label class="option ${state.answers[state.index] === i ? 'is-selected' : ''}"><input type="radio" name="answer" value="${i}" ${state.answers[state.index] === i ? 'checked' : ''}><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + i)}</span><span>${option}</span><span class="option-check" aria-hidden="true">${icon('check')}</span></label>`).join('')}</div></fieldset><p id="answer-error" class="answer-error" role="alert"></p><div class="question-actions">${state.index > 0 ? button('previous', 'Anterior', 'button secondary') : '<span></span>'}${button('next', state.index === 2 ? 'Finalizar examen' : 'Siguiente pregunta')}</div></section></div>`;
}

function render(focus = true, target = 'h1') {
  const views = { home: homeView, menu: menuView, topics: topicsView, formulas: formulasView, exercises: exercisesView, exam: examView };
  main.className = state.screen === 'home' ? 'home-main' : 'content-main';
  main.innerHTML = views[state.screen]();
  document.querySelectorAll('.nav-link').forEach(link => {
    const route = link.dataset.route;
    const active = route === state.screen || (route === 'menu' && ['topics', 'formulas'].includes(state.screen));
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  document.title = `${{ home: 'Aumentos y descuentos', menu: 'Aprender', topics: 'Temas', formulas: 'Fórmulas', exercises: 'Ejercicios', exam: 'Examen' }[state.screen]} · Aventura con porcentajes`;
  if (focus) {
    const heading = main.querySelector(target) || main;
    heading.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function navigate(screen) {
  hideDialog();
  if (screen === 'exam') Object.assign(state, newAttempt());
  state.screen = screen;
  render();
}

function hideDialog() {
  stopConfetti();
  stopConfetti = () => {};
  if (dialog.open) dialog.close();
  dialog.removeAttribute('data-kind');
}

function openDialog(kind, html) {
  dialogTrigger = document.activeElement;
  dialog.dataset.kind = kind;
  dialog.innerHTML = html;
  dialog.showModal();
  dialog.querySelector('[autofocus], h2')?.focus({ preventScroll: true });
}

function requestNavigation(screen) {
  if (screen === state.screen) return;
  if (state.screen === 'exam' && !state.result) {
    openDialog('exit', `<span class="dialog-icon blue">${icon('book')}</span><h2 id="dialog-title" tabindex="-1">¿Salir de este intento?</h2><p>Si sales ahora, se perderán las respuestas de este intento. Puedes quedarte y continuar a tu ritmo.</p><div class="dialog-actions">${button('stay', 'Continuar examen', 'button primary', 'autofocus')}${button(`exit:${screen}`, 'Salir del examen', 'button secondary')}</div>`);
  } else navigate(screen);
}

function showResult() {
  if (state.result) return;
  state.result = scoreAnswers(state.answers);
  const result = state.result;
  const message = resultMessages[result.correct];
  openDialog('result', `<canvas class="confetti" aria-hidden="true"></canvas><div class="result-content"><span class="dialog-icon yellow result-emblem">${icon(message.symbol)}</span><p class="eyebrow">UN PASO MÁS EN TU AVENTURA</p><h2 id="dialog-title" tabindex="-1">${message.title}</h2><div class="score-display"><strong>${result.score}</strong><span>/ ${result.total}</span></div><p class="correct-count">${result.correct} de 3 respuestas correctas</p><p>${message.text}</p><div class="dialog-actions">${button('retry', 'Volver a intentarlo')}${button('result-menu', 'Volver al menú', 'button secondary')}</div><p class="result-note">Cada intento cuenta. Sigue descubriendo.</p></div>`);
  playSound(result.correct === 3 ? 'win' : 'result');
  if (result.correct === 3) stopConfetti = celebrate(dialog.querySelector('canvas'));
}

document.addEventListener('click', event => {
  const control = event.target.closest('[data-action]');
  if (!control) return;
  const [action, value] = control.dataset.action.split(':');
  if (action === 'sound') {
    state.sound = setSound(!state.sound);
    control.innerHTML = `${icon(state.sound ? 'sound' : 'mute')}<span>Sonido ${state.sound ? 'activado' : 'apagado'}</span>`;
    control.setAttribute('aria-pressed', String(state.sound));
    control.setAttribute('aria-label', `${state.sound ? 'Silenciar' : 'Activar'} sonido`);
    playSound();
    return;
  }
  if (action !== 'next') playSound();
  if (action === 'go') requestNavigation(value);
  if (action === 'topic') { state.topic = Number(value); render(false); document.querySelector('#lesson-title').focus({ preventScroll: true }); }
  if (action === 'sheet') { state.sheet = Number(value); render(false); document.querySelector('#sheet-description').focus({ preventScroll: true }); }
  if (action === 'previous' && !state.result) { state.index = Math.max(0, state.index - 1); render(true, '#question-title'); }
  if (action === 'next' && !state.result) {
    if (state.answers[state.index] === null) {
      document.querySelector('#answer-error').textContent = 'Selecciona una alternativa para continuar.';
      document.querySelector('input[name="answer"]').focus({ preventScroll: true });
      return;
    }
    if (state.index < 2) { state.index += 1; playSound(); render(true, '#question-title'); }
    else if (state.answers.every(a => a !== null)) showResult();
  }
  if (action === 'stay') { hideDialog(); dialogTrigger?.focus(); }
  if (action === 'exit') { Object.assign(state, newAttempt()); navigate(value); }
  if (action === 'retry') navigate('exam');
  if (action === 'result-menu') navigate('menu');
});

document.addEventListener('change', event => {
  if (!event.target.matches('input[name="answer"]') || state.result) return;
  state.answers[state.index] = Number(event.target.value);
  document.querySelectorAll('.option').forEach(label => label.classList.toggle('is-selected', label.querySelector('input').checked));
  document.querySelector('#answer-error').textContent = '';
  const station = document.querySelector('.exam-stations .current');
  station.classList.add('answered');
  station.querySelector('.station-number').innerHTML = icon('check');
  playSound();
});

main.addEventListener('toggle', event => {
  if (event.target.matches('details') && event.target.open) playSound();
}, true);

dialog.addEventListener('cancel', event => {
  event.preventDefault();
  if (dialog.dataset.kind === 'result') navigate('menu');
  else { hideDialog(); dialogTrigger?.focus(); }
});

dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...dialog.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), [tabindex="0"]')];
  const first = controls[0];
  const last = controls.at(-1);
  if (event.shiftKey && (document.activeElement === first || !controls.includes(document.activeElement))) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
});

render(false);
