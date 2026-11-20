let context;
let enabled = false;
const oscillators = new Set();
export function setSound(value) {
  enabled = value;
  if (!value) {
    for (const oscillator of oscillators) { try { oscillator.stop(); } catch {} }
    oscillators.clear();
  }
  return enabled;
}

export function playSound(kind = 'click') {
  if (!enabled) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    context ||= new AudioContextClass();
    if (context.state === 'suspended') context.resume().catch(() => {});
    const notes = kind === 'win' ? [523.25, 659.25, 783.99, 1046.5] : kind === 'result' ? [392, 523.25, 659.25] : [660, 880];
    notes.forEach((frequency, i) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const start = context.currentTime + i * 0.095;
      oscillator.type = 'square';
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.035, start + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.13);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillators.add(oscillator);
      oscillator.onended = () => { oscillators.delete(oscillator); oscillator.disconnect(); gain.disconnect(); };
      oscillator.start(start);
      oscillator.stop(start + 0.14);
    });
  } catch { /* El audio es opcional; la navegación siempre sigue disponible. */ }
}

export function celebrate(canvas) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  let frame;
  let start;
  let previous;
  const colors = ['#ffc948', '#f27e8d', '#6599e4', '#74b68a', '#a98bce'];
  const particles = Array.from({ length: 100 }, () => ({ x: Math.random(), y: Math.random() * -0.8, speed: 0.12 + Math.random() * 0.13, size: 5 + Math.random() * 5, angle: Math.random() * 6, color: colors[Math.floor(Math.random() * colors.length)] }));
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);
  function stop() {
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', resize);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function draw(time) {
    start ??= time;
    previous ??= time;
    const dt = Math.min((time - previous) / 1000, 0.05);
    previous = time;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particles.forEach(p => {
      p.y += p.speed * dt;
      p.angle += dt * 2;
      ctx.save();
      ctx.translate(p.x * innerWidth + Math.sin(p.angle) * 25, p.y * innerHeight);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    if (time - start < 6500) frame = requestAnimationFrame(draw);
    else stop();
  }
  frame = requestAnimationFrame(draw);
  return stop;
}
