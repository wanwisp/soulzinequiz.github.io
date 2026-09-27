// icons.js — flat sticker-style inline SVG icons.
// Style per Design/DesignSystem.md §7: 2-3px Press Black outline, 2-3 flat fills,
// no photographic detail. Each function returns an SVG string; viewBox 0 0 120 120.
// `color` = the archetype's own card colour (never the birthday lucky colour).

const INK = "#1A1418";

function svg(inner, viewBox = "0 0 120 120") {
  return `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
}
function eyes(cx1, cy1, cx2, cy2, r = 4) {
  return `<circle cx="${cx1}" cy="${cy1}" r="${r}" fill="${INK}"/><circle cx="${cx2}" cy="${cy2}" r="${r}" fill="${INK}"/>`;
}
function smile(cx, cy, w = 14, h = 8) {
  return `<path d="M ${cx - w/2} ${cy} Q ${cx} ${cy + h} ${cx + w/2} ${cy}" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`;
}

const ICONS = {
  flame: (c) => svg(`
    <path d="M60 12 C40 40 30 55 34 76 C37 94 52 106 60 106 C68 106 83 94 86 76 C90 55 80 40 60 12 Z"
      fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M60 46 C50 62 46 72 50 84 C53 93 60 98 60 98" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
    ${eyes(52, 74, 68, 74)}${smile(60, 80)}
  `),
  raindrop: (c) => svg(`
    <path d="M60 14 C78 44 92 62 92 78 C92 98 78 110 60 110 C42 110 28 98 28 78 C28 62 42 44 60 14 Z"
      fill="${c}" stroke="${INK}" stroke-width="4"/>
    <ellipse cx="48" cy="60" rx="6" ry="10" fill="#fff" opacity="0.6"/>
    ${eyes(52, 82, 68, 82)}${smile(60, 88)}
  `),
  umbrella: (c) => svg(`
    <path d="M14 60 C14 30 34 12 60 12 C86 12 106 30 106 60 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M14 60 Q22 68 30 60 Q38 68 46 60 Q54 68 62 60 Q70 68 78 60 Q86 68 94 60 Q102 68 106 60"
      fill="none" stroke="${INK}" stroke-width="3"/>
    <line x1="60" y1="60" x2="60" y2="102" stroke="${INK}" stroke-width="4"/>
    <path d="M60 102 Q60 112 70 110" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
  `),
  moth: (c) => svg(`
    <ellipse cx="38" cy="55" rx="26" ry="20" fill="${c}" stroke="${INK}" stroke-width="4" transform="rotate(-15 38 55)"/>
    <ellipse cx="82" cy="55" rx="26" ry="20" fill="${c}" stroke="${INK}" stroke-width="4" transform="rotate(15 82 55)"/>
    <ellipse cx="60" cy="60" rx="8" ry="26" fill="#8A7B6B" stroke="${INK}" stroke-width="4"/>
    ${eyes(56, 44, 64, 44, 3)}
    <path d="M52 34 L44 22 M68 34 L76 22" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
  `),
  sparrow: (c) => svg(`
    <ellipse cx="55" cy="65" rx="34" ry="26" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <circle cx="88" cy="45" r="18" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M104 45 L116 40 L104 52 Z" fill="#FFD23F" stroke="${INK}" stroke-width="3"/>
    ${eyes(92, 42, 92, 42, 4)}
    <path d="M30 82 L18 96 M42 86 L34 100" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
  `),
  earthworm: (c) => svg(`
    <path d="M20 90 Q30 60 50 70 Q70 82 80 55 Q88 38 100 34" fill="none" stroke="${c}" stroke-width="20" stroke-linecap="round"/>
    <path d="M20 90 Q30 60 50 70 Q70 82 80 55 Q88 38 100 34" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="100" cy="30" r="13" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <rect x="88" y="18" width="24" height="8" rx="4" fill="#fff" stroke="${INK}" stroke-width="3"/>
    ${eyes(94, 30, 106, 30, 3)}${smile(100, 34, 8, 4)}
    <path d="M14 92 h14" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
  `),
  matcha: (c) => svg(`
    <path d="M30 40 L36 100 Q60 112 84 100 L90 40 Z" fill="#fff" stroke="${INK}" stroke-width="4"/>
    <path d="M32 46 Q60 60 88 46 L86 60 Q60 74 34 60 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <ellipse cx="60" cy="46" rx="28" ry="9" fill="${c}" stroke="${INK}" stroke-width="4"/>
    ${eyes(54, 47, 66, 47, 3)}
  `),
  coaster: (c) => svg(`
    <circle cx="60" cy="60" r="44" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <circle cx="60" cy="60" r="30" fill="none" stroke="${INK}" stroke-width="2.5" opacity="0.4"/>
    ${eyes(50, 55, 70, 55)}${smile(60, 62)}
  `),
  sprout: (c) => svg(`
    <path d="M20 100 h80" stroke="${INK}" stroke-width="4"/>
    <rect x="50" y="70" width="20" height="30" rx="4" fill="#D9A21B" stroke="${INK}" stroke-width="4"/>
    <path d="M60 70 C60 50 60 40 60 28" stroke="${INK}" stroke-width="4" fill="none"/>
    <path d="M60 40 C45 40 38 28 40 16 C54 18 60 28 60 40 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M60 50 C75 50 82 38 80 26 C66 28 60 38 60 50 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
  `),
  stirstick: (c) => svg(`
    <rect x="54" y="14" width="12" height="92" rx="6" fill="${c}" stroke="${INK}" stroke-width="4" transform="rotate(8 60 60)"/>
    ${eyes(53, 55, 67, 55, 3)}
  `),
  cassette: (c) => svg(`
    <rect x="14" y="30" width="92" height="60" rx="10" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <circle cx="42" cy="60" r="14" fill="#fff" stroke="${INK}" stroke-width="4"/>
    <circle cx="78" cy="60" r="14" fill="#fff" stroke="${INK}" stroke-width="4"/>
    <circle cx="42" cy="60" r="4" fill="${INK}"/><circle cx="78" cy="60" r="4" fill="${INK}"/>
    <rect x="30" y="76" width="60" height="8" rx="4" fill="#fff" stroke="${INK}" stroke-width="3"/>
  `),
  cat: (c) => svg(`
    <path d="M30 50 L20 24 L44 40 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M90 50 L100 24 L76 40 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <ellipse cx="60" cy="66" rx="42" ry="34" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M40 60 Q40 50 46 50 Q52 50 52 60" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
    <path d="M68 60 Q68 50 74 50 Q80 50 80 60" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
    ${eyes(46, 62, 74, 62, 3)}
    <path d="M56 72 Q60 76 64 72" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M30 76 L10 72 M30 82 L10 84" stroke="${INK}" stroke-width="2.5"/>
    <path d="M90 76 L110 72 M90 82 L110 84" stroke="${INK}" stroke-width="2.5"/>
  `),
  bobblehead: (c) => svg(`
    <rect x="52" y="86" width="16" height="20" fill="#8A7B6B" stroke="${INK}" stroke-width="3"/>
    <path d="M40 106 h40" stroke="${INK}" stroke-width="4"/>
    <circle cx="60" cy="52" r="36" fill="${c}" stroke="${INK}" stroke-width="4"/>
    ${eyes(48, 50, 72, 50, 4)}${smile(60, 58, 18, 8)}
  `),
  photos: (c) => svg(`
    <rect x="26" y="22" width="60" height="70" rx="4" fill="#fff" stroke="${INK}" stroke-width="3.5" transform="rotate(-8 56 57)"/>
    <rect x="36" y="30" width="60" height="70" rx="4" fill="${c}" stroke="${INK}" stroke-width="4" transform="rotate(6 66 65)"/>
    <rect x="46" y="40" width="30" height="24" fill="#fff" stroke="${INK}" stroke-width="2.5" transform="rotate(6 61 52)"/>
    ${eyes(58, 84, 74, 82, 3)}
  `),
  mic: (c) => svg(`
    <rect x="46" y="14" width="28" height="52" rx="14" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M32 50 Q32 82 60 82 Q88 82 88 50" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
    <line x1="60" y1="82" x2="60" y2="102" stroke="${INK}" stroke-width="4"/>
    <line x1="44" y1="102" x2="76" y2="102" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
    <path d="M20 30 Q10 40 20 50 M100 30 Q110 40 100 50" fill="none" stroke="${INK}" stroke-width="2.5" opacity="0.5"/>
  `),
  steam: (c) => svg(`
    <path d="M30 106 C24 96 24 84 30 74 C36 64 36 54 30 44" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round"/>
    <path d="M60 106 C54 92 54 78 60 66 C66 54 66 42 60 28" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round"/>
    <path d="M90 106 C84 96 84 84 90 74 C96 64 96 54 90 44" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="60" cy="112" rx="4" ry="2" fill="none"/>
  `),
  neon: (c) => svg(`
    <rect x="12" y="40" width="96" height="40" rx="10" fill="${INK}" />
    <path d="M24 60 h20 M56 50 v20 M56 50 h16 M56 60 h14 M80 50 v20 M88 50 v20 M96 50 l-8 20"
      fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="12" y="40" width="96" height="40" rx="10" fill="none" stroke="${INK}" stroke-width="4"/>
  `),
  cockroach: (c) => svg(`
    <ellipse cx="60" cy="66" rx="32" ry="24" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <ellipse cx="60" cy="46" rx="16" ry="13" fill="${c}" stroke="${INK}" stroke-width="4"/>
    ${eyes(54, 45, 66, 45, 3)}${smile(60, 50, 8, 4)}
    <path d="M30 54 L10 44 M30 66 L8 66 M30 78 L10 88" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M90 54 L110 44 M90 66 L112 66 M90 78 L110 88" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M48 34 L42 20 M72 34 L78 20" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>
  `),
  moss: (c) => svg(`
    <ellipse cx="60" cy="80" rx="48" ry="22" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <circle cx="36" cy="62" r="16" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <circle cx="66" cy="54" r="20" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <circle cx="92" cy="66" r="14" fill="${c}" stroke="${INK}" stroke-width="4"/>
    ${eyes(56, 78, 72, 78, 3)}
    <path d="M52 86 Q60 90 68 86" stroke="${INK}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  `),
  fridgelight: (c) => svg(`
    <path d="M60 16 C42 16 30 30 30 48 C30 62 40 68 40 80 L80 80 C80 68 90 62 90 48 C90 30 78 16 60 16 Z"
      fill="${c}" stroke="${INK}" stroke-width="4"/>
    <rect x="46" y="80" width="28" height="14" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <rect x="40" y="94" width="40" height="10" rx="4" fill="${INK}"/>
    ${eyes(52, 48, 68, 48, 4)}${smile(60, 56, 12, 6)}
  `),
  phone: (c) => svg(`
    <rect x="34" y="12" width="52" height="96" rx="10" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <rect x="42" y="24" width="36" height="60" rx="3" fill="#fff" stroke="${INK}" stroke-width="2.5"/>
    ${eyes(52, 50, 68, 50, 3)}${smile(60, 58, 14, 8)}
    <path d="M28 30 l-8-6 M92 30 l8-6 M28 40 l-10 2 M92 40 l10 2" stroke="#E0522C" stroke-width="3" stroke-linecap="round"/>
  `),
  weed: (c) => svg(`
    <rect x="10" y="90" width="100" height="14" fill="#B9B4A6" stroke="${INK}" stroke-width="4"/>
    <path d="M20 90 h18" stroke="${INK}" stroke-width="3"/>
    <path d="M60 90 C58 66 66 50 60 30" stroke="${INK}" stroke-width="4" fill="none"/>
    <path d="M60 66 C46 62 40 50 44 38 C56 42 62 54 60 66 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M60 50 C74 46 80 34 76 22 C64 26 58 38 60 50 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <circle cx="60" cy="26" r="6" fill="#FFD23F" stroke="${INK}" stroke-width="3"/>
  `),
  hammock: (c) => svg(`
    <rect x="10" y="10" width="10" height="90" fill="#8A5A3C" stroke="${INK}" stroke-width="3"/>
    <rect x="100" y="10" width="10" height="90" fill="#8A5A3C" stroke="${INK}" stroke-width="3"/>
    <path d="M18 40 Q60 78 102 40" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M18 40 Q60 72 102 40" fill="none" stroke="${INK}" stroke-width="2" opacity="0.4"/>
    ${eyes(52, 56, 66, 56, 3)}${smile(59, 62, 10, 5)}
  `),
  craftkit: (c) => svg(`
    <rect x="16" y="46" width="88" height="52" rx="8" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <rect x="16" y="46" width="88" height="16" fill="#fff" stroke="${INK}" stroke-width="3"/>
    <circle cx="34" cy="80" r="8" fill="#FFD23F" stroke="${INK}" stroke-width="3"/>
    <circle cx="58" cy="80" r="8" fill="#E0147A" stroke="${INK}" stroke-width="3"/>
    <circle cx="82" cy="80" r="8" fill="#5BB8F0" stroke="${INK}" stroke-width="3"/>
    <path d="M40 46 L48 24 L72 24 L80 46" fill="none" stroke="${INK}" stroke-width="3"/>
  `),
  stickynote: (c) => svg(`
    <path d="M20 20 h70 v70 l-20 20 h-50 z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M70 90 v20 l20 -20 z" fill="#E0C230" stroke="${INK}" stroke-width="3"/>
    <path d="M32 44 h46 M32 58 h46 M32 72 h30" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
  `),
  book: (c) => svg(`
    <path d="M20 20 C40 12 52 16 60 24 V102 C52 94 40 90 20 98 Z" fill="#fff" stroke="${INK}" stroke-width="4"/>
    <path d="M100 20 C80 12 68 16 60 24 V102 C68 94 80 90 100 98 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M30 36 h20 M30 48 h24 M74 36 h18 M74 48 h20" stroke="${INK}" stroke-width="2.5" opacity="0.6"/>
  `),
  boba: (c) => svg(`
    <rect x="30" y="34" width="60" height="66" rx="10" fill="#fff" stroke="${INK}" stroke-width="4" opacity="0.85"/>
    <rect x="30" y="20" width="60" height="12" rx="4" fill="#E0C9A6" stroke="${INK}" stroke-width="3.5"/>
    <circle cx="46" cy="82" r="8" fill="${c}" stroke="${INK}" stroke-width="3"/>
    <circle cx="62" cy="88" r="8" fill="${c}" stroke="${INK}" stroke-width="3"/>
    <circle cx="76" cy="80" r="8" fill="${c}" stroke="${INK}" stroke-width="3"/>
    <rect x="56" y="8" width="8" height="26" fill="#fff" stroke="${INK}" stroke-width="3"/>
    ${eyes(50, 58, 68, 58, 3)}
  `),
  cloud: (c) => svg(`
    <path d="M30 76 a20 20 0 0 1 4-39 a26 26 0 0 1 50-8 a20 20 0 0 1 6 47 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    ${eyes(52, 62, 70, 62, 3)}${smile(60, 68, 14, 6)}
  `),
  wok: (c) => svg(`
    <path d="M14 60 Q60 96 106 60" fill="${c}" stroke="${INK}" stroke-width="6"/>
    <path d="M8 58 L14 60 M112 58 L106 60" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
    <path d="M30 44 Q34 30 30 20 M60 40 Q64 24 60 12 M90 44 Q94 30 90 20"
      fill="none" stroke="#E0522C" stroke-width="4" stroke-linecap="round"/>
  `),
  blanket: (c) => svg(`
    <path d="M40 20 Q30 60 40 106 h20 Q52 60 60 20 Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <path d="M60 20 Q80 60 80 106 h20 Q92 60 70 20 Z" fill="${c}" stroke="${INK}" stroke-width="4" opacity="0.85"/>
    <circle cx="52" cy="34" r="14" fill="#F2E3CF" stroke="${INK}" stroke-width="4"/>
    ${eyes(47, 33, 57, 33, 2.5)}
  `)
};

function renderIcon(key, color = "#FFD23F") {
  const fn = ICONS[key] || ICONS.coaster;
  return fn(color);
}

// Small scene icons for Step 2 question panels + Step 1 illustration strip
const SCENE = {
  umbrella: () => ICONS.umbrella("#FFE45C"),
  cafe: () => ICONS.matcha("#7FA84A"),
  traffic: () => ICONS.bobblehead("#D9A21B"),
  night: () => ICONS.steam("#E8DCC8"),
  afternoon: () => ICONS.phone("#4A3F6B"),
  escape: () => ICONS.blanket("#E0C9A6")
};
function renderScene(key) {
  const fn = SCENE[key] || SCENE.umbrella;
  return fn();
}

// Small stroke-only UI icons (viewBox 0 0 24 24), 2-2.5px stroke, round caps.
// Per Design/DesignSystem.md §7: "Never emoji as icons or buttons." These replace
// any emoji previously used as pop-culture / food / share icons.
const UI = {
  music: () => svg(`<path d="M9 18V6l11-2v12" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/>`, "0 0 24 24"),
  film: () => svg(`<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`, "0 0 24 24"),
  frame: () => svg(`<rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="10" r="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 17l5-5 4 4 3-3 4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`, "0 0 24 24"),
  food: () => svg(`<path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11M18 3c-2 0-3 2-3 5s1 4 3 4v9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`, "0 0 24 24"),
  camera: () => svg(`<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/>`, "0 0 24 24"),
  share: () => svg(`<circle cx="18" cy="5" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="6" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="19" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.3 10.7l7.4-4.4M8.3 13.3l7.4 4.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`, "0 0 24 24"),
  retake: () => svg(`<path d="M20 12a8 8 0 1 1-2.7-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M20 4v5h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`, "0 0 24 24"),
  spark: () => svg(`<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`, "0 0 24 24")
};
function renderUIIcon(key) {
  const fn = UI[key] || UI.share;
  return fn();
}
