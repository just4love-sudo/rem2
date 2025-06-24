// FLOATING HEART SVG BACKGROUND
window.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.className = 'floating-svg';
  document.body.appendChild(container);

  const NUM_FLOATERS = 30;
  const colorOptions = ['#f7accf', '#fbd2e0', '#ffcce0', '#ffd9e6'];

  for (let i = 0; i < NUM_FLOATERS; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 32 29.6");
    svg.style.left = `${Math.random() * 100}%`;
    svg.style.animationDelay = `${Math.random() * 10}s`;
    svg.style.animationDuration = `${8 + Math.random() * 6}s`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", colorOptions[Math.floor(Math.random() * colorOptions.length)]);
    path.setAttribute("d", "M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.1,16,21.2,16,21.2s16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z");

    svg.appendChild(path);
    container.appendChild(svg);
  }
});

// SIDE VINES / DECORATIVE
['left', 'right'].forEach(side => {
  const deco = document.createElement('div');
  deco.className = `side-deco ${side}`;
  document.body.appendChild(deco);
});

// CURSOR SPARKLES
document.addEventListener('mousemove', e => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});

// FLOATING LOVE QUOTES
const loveQuotes = [
  "You are my home.",
  "Forever starts with you.",
  "Even silence with you is poetry.",
  "Every heartbeat is yours.",
  "You live in every letter I write.",
  "You're my favorite place.",
  "Loving you feels like breathing.",
  "I wish I was better."
];

loveQuotes.forEach(q => {
  const note = document.createElement('div');
  note.className = 'love-note';
  note.textContent = q;

  const side = Math.random() < 0.5
    ? Math.random() * 10 + 5     // Left
    : Math.random() * 10 + 80;   // Right
  note.style.left = `${side}%`;
  note.style.bottom = `${Math.random() * 50 + 20}%`;
  note.style.animationDelay = `${Math.random() * 10}s`;

  document.body.appendChild(note);
});

// FLOATING BUTTERFLIES
const butterflyCount = 8;
for (let i = 0; i < butterflyCount; i++) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add('butterfly');
  svg.setAttribute("viewBox", "0 0 64 64");
  svg.style.top = `${Math.random() * 80 + 10}%`;
  svg.style.left = Math.random() < 0.5
    ? `${140 + Math.random() * 40}px`
    : `${window.innerWidth - (140 + Math.random() * 40)}px`;
  svg.style.animationDelay = `${Math.random() * 10}s`;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "#f7accf");
  path.setAttribute("d", "M32 12 C24 0, 0 20, 16 32 C0 44, 24 64, 32 52 C40 64, 64 44, 48 32 C64 20, 40 0, 32 12Z");
  svg.appendChild(path);
  document.body.appendChild(svg);
}
