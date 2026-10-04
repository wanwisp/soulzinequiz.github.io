// share.js — IG Story canvas export per DesignUX.md §4.5 (v2.1).
// 1080 × 1920 (9:16), holo background + dot grid, safe zones: content kept out of the
// top 250 px and bottom 300 px. Fonts: Prompt (display) + Anuphan (body), as loaded
// by index.html. Depends on renderIcon + INK from icons.js.

const W = 1080, H = 1920;
const LIME = "#E6F76B";
const MAGENTA = "#E0147A";

function loadSvgAsImage(svgString, size = 600) {
  return new Promise((resolve) => {
    const svg64 = btoa(unescape(encodeURIComponent(svgString)));
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.width = size; img.height = size;
    img.src = `data:image/svg+xml;base64,${svg64}`;
  });
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Wraps on spaces; Thai has few spaces, so long Thai lines also break by character width.
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const tokens = text.includes(" ") ? text.split(" ") : Array.from(text);
  const joiner = text.includes(" ") ? " " : "";
  const lines = [];
  let line = "";
  for (const tok of tokens) {
    const test = line ? line + joiner + tok : tok;
    if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = tok; }
    else line = test;
  }
  if (line) lines.push(line);
  ctx.textAlign = "center";
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return lines.length * lineHeight;
}

async function renderStoryCanvas(canvas, { archetype, zodiac, luckyColour, luckyHex, rarityPct, oneLiner, entityName, storyTitle, storyFooter }) {
  if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) { /* draw with fallbacks */ } }
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  // holo background (four-pastel sweep) + white dot grid
  const grad = ctx.createLinearGradient(0, 0, W * 0.3, H);
  grad.addColorStop(0, "#BFF3E4"); grad.addColorStop(0.35, "#D8C8FF");
  grad.addColorStop(0.65, "#FFD9CC"); grad.addColorStop(1, "#A9E3F7");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "rgba(255,255,255,.55)";
  for (let gx = 24; gx < W; gx += 48) for (let gy = 24; gy < H; gy += 48) { ctx.beginPath(); ctx.arc(gx, gy, 3, 0, Math.PI * 2); ctx.fill(); }

  let y = 330;
  // wordmark
  ctx.textAlign = "center";
  ctx.font = "italic 900 84px 'Prompt', sans-serif";
  const soulW = ctx.measureText("Soul").width, zineW = ctx.measureText("Zine").width;
  ctx.textAlign = "left";
  ctx.fillStyle = INK; ctx.fillText("Soul", W / 2 - (soulW + zineW) / 2, y);
  ctx.fillStyle = MAGENTA; ctx.fillText("Zine", W / 2 - (soulW + zineW) / 2 + soulW, y);
  y += 80;
  ctx.textAlign = "center";
  ctx.fillStyle = INK;
  ctx.font = "800 46px 'Prompt', sans-serif";
  ctx.fillText(storyTitle, W / 2, y);
  y += 50;

  // mini soul card: foil frame + white inner + ink rarity bar
  const cardW = 640, cardH = 820, cardX = (W - cardW) / 2, cardY = y;
  ctx.save();
  ctx.shadowColor = "rgba(61,245,255,.7)"; ctx.shadowBlur = 40;
  const foil = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
  foil.addColorStop(0, "#BFF3E4"); foil.addColorStop(0.35, "#D8C8FF"); foil.addColorStop(0.65, "#FFD9CC"); foil.addColorStop(1, "#A9E3F7");
  ctx.fillStyle = foil;
  roundRect(ctx, cardX, cardY, cardW, cardH, 56); ctx.fill();
  ctx.restore();
  const inX = cardX + 18, inY = cardY + 18, inW = cardW - 36, inH = cardH - 36;
  ctx.fillStyle = "#FFFFFF"; roundRect(ctx, inX, inY, inW, inH, 42); ctx.fill();
  ctx.lineWidth = 4; ctx.strokeStyle = INK; roundRect(ctx, inX, inY, inW, inH, 42); ctx.stroke();
  ctx.save(); roundRect(ctx, inX, inY, inW, inH, 42); ctx.clip();
  ctx.fillStyle = INK; ctx.fillRect(inX, inY, inW, 84);
  ctx.fillStyle = LIME; ctx.font = "800 34px 'Prompt', sans-serif"; ctx.textAlign = "center";
  ctx.fillText(`★ ULTRA RARE · ${rarityPct}%`, W / 2, inY + 56);
  ctx.fillStyle = "#F9C3DF"; ctx.fillRect(inX, inY + 84, inW, 360);
  ctx.restore();
  const img = await loadSvgAsImage(renderIcon(archetype.icon, archetype.cardHex), 600);
  if (img) ctx.drawImage(img, W / 2 - 160, inY + 104, 320, 320);
  ctx.fillStyle = INK; ctx.font = "900 50px 'Prompt', sans-serif";
  let ty = inY + 520;
  ty += wrapText(ctx, entityName, W / 2, ty, inW - 70, 60);
  ctx.fillStyle = "#4A4550"; ctx.font = "500 28px 'Anuphan', sans-serif";
  wrapText(ctx, oneLiner, W / 2, ty + 6, inW - 80, 38);

  y = cardY + cardH + 60;
  // chips: zodiac + today's lucky colour (with swatch)
  ctx.font = "700 32px 'Anuphan', sans-serif";
  const chips = [{ label: zodiac }, { label: luckyColour, hex: luckyHex }];
  const widths = chips.map(c => ctx.measureText(c.label).width + (c.hex ? 104 : 64));
  let cx = W / 2 - (widths.reduce((a, b) => a + b, 0) + 20) / 2;
  chips.forEach((c, i) => {
    ctx.fillStyle = "#FFFFFF"; roundRect(ctx, cx, y, widths[i], 72, 36); ctx.fill();
    ctx.lineWidth = 4; ctx.strokeStyle = INK; roundRect(ctx, cx, y, widths[i], 72, 36); ctx.stroke();
    let textX = cx + widths[i] / 2;
    if (c.hex) {
      ctx.fillStyle = c.hex; ctx.beginPath(); ctx.arc(cx + 44, y + 36, 16, 0, Math.PI * 2); ctx.fill();
      ctx.lineWidth = 3; ctx.stroke();
      textX += 20;
    }
    ctx.fillStyle = INK; ctx.textAlign = "center"; ctx.fillText(c.label, textX, y + 47);
    cx += widths[i] + 20;
  });

  // footer link pill (inside the bottom safe zone line)
  const footY = H - 420;
  ctx.fillStyle = INK; roundRect(ctx, W * 0.12, footY, W * 0.76, 104, 52); ctx.fill();
  ctx.fillStyle = LIME; ctx.font = "800 36px 'Prompt', sans-serif"; ctx.textAlign = "center";
  ctx.fillText(storyFooter, W / 2, footY + 66);
}

async function canvasToBlob(canvas) {
  return new Promise((resolve) => canvas.toBlob(resolve, "image/png", 0.95));
}

async function shareStoryImage(canvas, filename, shareText) {
  const blob = await canvasToBlob(canvas);
  if (!blob) return { ok: false, method: "none" };
  const file = new File([blob], filename, { type: "image/png" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text: shareText });
      return { ok: true, method: "webshare" };
    } catch (e) { /* fall through to download */ }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  return { ok: true, method: "download" };
}
