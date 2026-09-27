// share.js — IG Story canvas export, per Design/DesignUX.md §6.
// Canvas 1080x1920 (9:16), foil background, safe zones respected.
// Depends on renderIcon + the shared INK constant from icons.js (loaded first).

const W = 1080, H = 1920;
const YELLOW = "#FFE45C";

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

function wrapText(ctx, text, x, y, maxWidth, lineHeight, align = "center") {
  const words = text.split(" ");
  let line = "";
  const lines = [];
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  ctx.textAlign = align;
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return lines.length * lineHeight;
}

async function renderStoryCanvas(canvas, { archetype, lang, zodiac, luckyColour, rarityPct, oneLiner, entityName, storyTitle, storyFooter }) {
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  // foil gradient background (160deg per spec)
  const grad = ctx.createLinearGradient(0, 0, W * 0.3, H);
  grad.addColorStop(0, "#BFF3E4");
  grad.addColorStop(0.35, "#D8C8FF");
  grad.addColorStop(0.65, "#FFD9CC");
  grad.addColorStop(1, "#A9E3F7");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // safe zone: content between y=250 and y=H-300
  let y = 340;

  // script title
  ctx.font = "italic 56px 'Sriracha', cursive";
  ctx.fillStyle = "#4FC9E8";
  ctx.strokeStyle = INK; ctx.lineWidth = 2;
  ctx.textAlign = "center";
  ctx.strokeText(storyTitle, W / 2, y);
  ctx.fillText(storyTitle, W / 2, y);
  y += 90;

  // character card
  const cardX = W * 0.15, cardY = y, cardW = W * 0.7, cardH = W * 0.7;
  ctx.fillStyle = "#FBF5EA";
  roundRect(ctx, cardX, cardY, cardW, cardH, 40);
  ctx.fill();
  ctx.lineWidth = 6; ctx.strokeStyle = INK;
  roundRect(ctx, cardX, cardY, cardW, cardH, 40);
  ctx.stroke();

  const iconSvg = renderIcon(archetype.icon, archetype.cardHex);
  const img = await loadSvgAsImage(iconSvg, 700);
  if (img) {
    const iconSize = cardW * 0.62;
    ctx.drawImage(img, cardX + (cardW - iconSize) / 2, cardY + (cardH - iconSize) / 2, iconSize, iconSize);
  }

  // rarity stamp
  const stampR = 90;
  const stampX = cardX + cardW - 20, stampY = cardY + 10;
  ctx.save();
  ctx.translate(stampX, stampY);
  ctx.rotate(-6 * Math.PI / 180);
  const stampGrad = ctx.createLinearGradient(-stampR, -stampR, stampR, stampR);
  stampGrad.addColorStop(0, "#BFF3E4"); stampGrad.addColorStop(0.5, "#D8C8FF"); stampGrad.addColorStop(1, "#FFD9CC");
  ctx.fillStyle = stampGrad;
  ctx.beginPath(); ctx.arc(0, 0, stampR, 0, Math.PI * 2); ctx.fill();
  ctx.lineWidth = 5; ctx.strokeStyle = INK; ctx.stroke();
  ctx.setLineDash([4, 5]);
  ctx.beginPath(); ctx.arc(0, 0, stampR - 12, 0, Math.PI * 2); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = INK; ctx.textAlign = "center";
  ctx.font = "italic 900 40px 'Prompt', sans-serif";
  ctx.fillText(`${rarityPct}%`, 0, 10);
  ctx.restore();

  y = cardY + cardH + 70;

  // entity name
  ctx.font = "italic 900 64px 'Prompt', sans-serif";
  ctx.fillStyle = INK; ctx.textAlign = "center";
  ctx.shadowColor = "#E0147A"; ctx.shadowOffsetX = 5; ctx.shadowOffsetY = 5;
  y += wrapText(ctx, entityName, W / 2, y, W * 0.8, 72);
  ctx.shadowColor = "transparent"; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0;

  y += 20;
  ctx.font = "400 34px 'Taviraj', serif";
  ctx.fillStyle = "#3A3336";
  y += wrapText(ctx, oneLiner, W / 2, y, W * 0.75, 46);

  y += 50;
  // chips
  const chips = [zodiac, luckyColour];
  ctx.font = "600 30px 'Noto Sans Thai', sans-serif";
  const paddings = chips.map(c => ctx.measureText(c).width + 60);
  const totalW = paddings.reduce((a, b) => a + b, 0) + 24;
  let cx = W / 2 - totalW / 2;
  chips.forEach((label, i) => {
    const w = paddings[i];
    ctx.fillStyle = "#FFFFFF";
    roundRect(ctx, cx, y, w, 66, 33);
    ctx.fill();
    ctx.lineWidth = 4; ctx.strokeStyle = INK;
    roundRect(ctx, cx, y, w, 66, 33);
    ctx.stroke();
    ctx.fillStyle = INK; ctx.textAlign = "center";
    ctx.fillText(label, cx + w / 2, y + 43);
    cx += w + 24;
  });

  // footer pill
  const footY = H - 220;
  ctx.fillStyle = INK;
  roundRect(ctx, W * 0.1, footY, W * 0.8, 100, 50);
  ctx.fill();
  ctx.fillStyle = YELLOW;
  ctx.font = "700 32px 'Noto Sans Thai', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(storyFooter, W / 2, footY + 62);
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
    } catch (e) {
      // fall through to download
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  return { ok: true, method: "download" };
}
