// app.js — SoulZine main application logic (v2, 4 Oct 2026).
// One page, state-based flow per DesignUX.md v2.1:
//   Welcome (birthday) → 6 questions (one random twin per group) → Loading (dark, 1.6 s)
//   → Result [การ์ด | ตัวตน | ไลฟ์สไตล์ | เทียบ] + IG Story preview.
// No backend; the research object lives in sessionStorage only (spec §21).
// Plain script (not a module) so index.html also works when opened via file://.
// Globals used: ARCHETYPES (data-archetypes.js), QUESTION_POOL/GROUP_SCENE/drawQuestions
// (data-questions.js), scoreQuiz (scoring.js), ZODIAC/getZodiac/getZodiacIndex/getElement/
// THAI_DAYS/getThaiDayColour/DAYS_IN_MONTH/MONTHS (birthday.js), getTodayLucky
// (data-colours.js), SOULMATCH/drawSoulmatch (data-soulmatch.js), renderIcon/renderScene/
// renderUIIcon (icons.js), t (copy.js), getWellnessBundle (wellness.js),
// getCompareChartData/getIllustrativeRarity/getIllustrativeResearchSnapshot (community.js),
// renderStoryCanvas/shareStoryImage (share.js).

const QUIZ_VERSION = "v2";
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const state = {
  lang: "th",
  step: 1,               // 1 | 2 | "loading" | 3
  qIndex: 0,
  shown: [],             // the 6 drawn question objects
  selections: {},        // qid -> letter (tapped, not yet confirmed)
  birthday: { day: null, month: null, weekday: null },
  result: null,          // { num, scores, picks }
  tab: 0,
  zen: { interval: null, secs: 180 }
};

const today = getTodayLucky();

// ---------- Research object (spec §21, DesignUX §8) ----------
function freshSession() {
  return {
    timestamp: new Date().toISOString(),
    quiz_version: QUIZ_VERSION,
    language: state.lang,
    birth: { day: null, month: null },
    derived: { zodiac: null, element: null, thai_day_color: null },
    shown: [],
    answers: {},
    groups: {},
    archetype: null,
    scores: {}
  };
}
let sessionData = freshSession();
function persistSession() {
  sessionData.language = state.lang;
  try { sessionStorage.setItem("soulzine_v2", JSON.stringify(sessionData)); } catch (e) { /* storage unavailable: keep in memory */ }
}

// ---------- Utilities ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const L = () => state.lang;

function showToast(msg) {
  let toast = $(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2000);
}

function colourName(c) { return L() === "th" ? c.th : c.en; }

const SPARKLES = `
  <svg class="spk spk-1" viewBox="0 0 20 20"><path d="M10 0l2.4 7.6L20 10l-7.6 2.4L10 20l-2.4-7.6L0 10l7.6-2.4z"/></svg>
  <svg class="spk spk-2" viewBox="0 0 20 20"><path d="M10 0l2.4 7.6L20 10l-7.6 2.4L10 20l-2.4-7.6L0 10l7.6-2.4z"/></svg>
  <svg class="spk spk-3" viewBox="0 0 20 20"><path d="M10 0l2.4 7.6L20 10l-7.6 2.4L10 20l-2.4-7.6L0 10l7.6-2.4z"/></svg>`;

function decoLayer(word) {
  return `<div class="deco" aria-hidden="true">
    <div class="dotgrid"></div>
    <div class="ring ring-neon"></div><div class="ring ring-dash"></div>
    <div class="outline-word">${word}</div>${SPARKLES}
  </div>`;
}

function roundLangButton() {
  return `<button type="button" class="round-btn lang-round" data-action="lang" aria-label="${t(L(), "langSwitchAria")}">${t(L(), "langOther")}</button>`;
}

// Page-flip transition (DesignSystem §5). direction: "fwd" | "back" | null
function flip(screen, direction) {
  if (!direction) return;
  const cls = REDUCED_MOTION ? "fade-in" : direction === "back" ? "flip-back" : "flip-fwd";
  screen.classList.remove("flip-fwd", "flip-back", "fade-in");
  void screen.offsetWidth;
  screen.classList.add(cls);
}

// ============================================================
// STEP 1 — Welcome & birthday
// ============================================================
function renderWelcome() {
  const lang = L();
  const root = $("#screen-1");
  const barcode = Array.from({ length: 17 }, (_, i) => `<rect x="${i * 3.7}" y="0" width="${[2, 1, 3][i % 3]}" height="22"></rect>`).join("");
  root.innerHTML = `
    ${decoLayer("ZINE")}
    <div class="page welcome">
      <div class="wm-row">
        <div class="issue">${t(lang, "issue")}</div>
        <div class="seg-toggle" role="group" aria-label="Language">
          <button type="button" data-lang="th" class="${lang === "th" ? "on" : ""}" aria-pressed="${lang === "th"}">TH</button>
          <button type="button" data-lang="en" class="${lang === "en" ? "on" : ""}" aria-pressed="${lang === "en"}">EN</button>
        </div>
      </div>
      <div class="masthead">Soul<span>Zine</span></div>
      <div class="neon-rule" aria-hidden="true"></div>
      <div class="cover-lines">
        <span class="sticker sticker-lime">${t(lang, "coverLine1")}</span>
        <span class="sticker sticker-neon">${t(lang, "coverLine2")}</span>
      </div>
      <h1 class="hook">${t(lang, "headline1")}<br>${t(lang, "headline2")}</h1>
      <p class="sub-hook">${t(lang, "subHook")}</p>
      <div class="pill-row">
        <div class="status-pill"><span class="live-dot"></span><b class="live">${t(lang, "statusLive")}</b><b>${t(lang, "statusNum")}</b><span>${t(lang, "statusText")}</span></div>
        <div class="status-pill"><span class="swatch-dot" style="background:${today.headline.hex}"></span><b>${t(lang, "todayChip", colourName(today.headline))}</b></div>
      </div>

      <div class="bday-card">
        <div class="dial" id="dial" role="img"><div class="dial-ticks"></div><div class="dial-needle" id="dial-needle"></div><div class="dial-core"><small>ZODIAC</small><span id="dial-sign">— —</span></div></div>
        <h2 class="card-title">${t(lang, "birthdayTitle")}</h2>
        <div class="stepper-grid">
          ${stepperHTML("day", t(lang, "dayLabel"), t(lang, "decDay"), t(lang, "incDay"))}
          ${stepperHTML("month", t(lang, "monthLabel"), t(lang, "decMonth"), t(lang, "incMonth"))}
        </div>
        <div class="result-bar" id="result-bar" aria-live="polite"></div>
        <p class="weekday-caption" id="weekday-cap">${t(lang, "weekdayCaption")}</p>
        <div class="weekday-row" role="radiogroup" aria-labelledby="weekday-cap">
          ${THAI_DAYS.map((d, i) => `<button type="button" role="radio" class="weekday-pill" data-weekday="${i}" aria-checked="${state.birthday.weekday === i}" aria-label="${lang === "th" ? d.th : d.en}"><span class="dot" style="background:${d.hex}"></span>${d.short[lang]}</button>`).join("")}
        </div>
      </div>

      <p class="privacy-line">${t(lang, "privacyLine")}</p>
      <div class="cover-foot" aria-hidden="true">
        <svg width="64" height="22" viewBox="0 0 64 22"><g fill="#141414">${barcode}</g></svg><span>p.01</span>
      </div>
    </div>
    <div class="float-bar">
      <button type="button" class="bar-cta" id="start-btn" data-action="start"></button>
    </div>`;
  updateBirthdayUI();
}

function stepperHTML(kind, label, decLabel, incLabel) {
  return `<div class="stepper">
    <button type="button" class="step-btn" data-step="${kind}" data-dir="-1" aria-label="${decLabel}">−</button>
    <div class="step-val"><small>${label}</small><span id="val-${kind}" aria-live="polite">—</span></div>
    <button type="button" class="step-btn" data-step="${kind}" data-dir="1" aria-label="${incLabel}">+</button>
  </div>`;
}

function stepBirthday(kind, dir) {
  const b = state.birthday;
  if (kind === "month") {
    b.month = b.month == null ? (dir > 0 ? 1 : 12) : Math.min(12, Math.max(1, b.month + dir));
    if (b.day != null) b.day = Math.min(b.day, DAYS_IN_MONTH[b.month]);
  } else {
    const max = b.month ? DAYS_IN_MONTH[b.month] : 31;
    b.day = b.day == null ? (dir > 0 ? 1 : max) : Math.min(max, Math.max(1, b.day + dir));
  }
  updateBirthdayUI();
}

function updateBirthdayUI() {
  const lang = L();
  const { day, month, weekday } = state.birthday;
  $("#val-day").textContent = day ?? "—";
  $("#val-month").textContent = month ? MONTHS[month - 1][lang] : "—";
  $$(".weekday-pill").forEach(p => p.setAttribute("aria-checked", String(Number(p.dataset.weekday) === weekday)));

  const bar = $("#result-bar");
  const btn = $("#start-btn");
  const dial = $("#dial");
  if (!day || !month) {
    bar.innerHTML = `<span class="hint">${t(lang, "resultHint")}</span>`;
    dial.classList.remove("set");
    dial.setAttribute("aria-label", t(lang, "dialAria", "—"));
    $("#dial-sign").textContent = "— —";
    btn.disabled = true;
    btn.textContent = t(lang, "startDisabled");
    return;
  }
  const z = getZodiac(day, month);
  const el = getElement(z);
  bar.innerHTML = `<span class="el-dot" style="background:${el.hex}"></span>
    <b>${lang === "th" ? z.th : z.en} · ${lang === "th" ? el.th : el.en}</b>
    <span class="muted">${lang === "th" ? z.rangeTh : z.rangeEn}</span>`;
  dial.classList.add("set");
  $("#dial-needle").style.transform = `rotate(${getZodiacIndex(z) * 30}deg)`;
  $("#dial-sign").textContent = `${z.glyph} ${lang === "th" ? z.th.replace("ราศี", "") : z.en}`;
  dial.setAttribute("aria-label", t(lang, "dialAria", lang === "th" ? z.th : z.en));
  btn.disabled = false;
  btn.textContent = t(lang, "startCta");

  sessionData.birth = { day, month };
  sessionData.derived = { zodiac: z.key, element: el.key, thai_day_color: weekday != null ? THAI_DAYS[weekday].key : null };
  persistSession();
}

// ============================================================
// STEP 2 — Questions
// ============================================================
function startQuiz() {
  state.shown = drawQuestions();
  state.selections = {};
  state.qIndex = 0;
  sessionData.shown = state.shown.map(q => q.id);
  sessionData.answers = {};
  sessionData.groups = {};
  persistSession();
  go(2, "fwd");
}

function renderQuestion() {
  const lang = L();
  const q = state.shown[state.qIndex];
  const total = state.shown.length;
  const picked = state.selections[q.id];
  const progress = ((state.qIndex + (picked ? 1 : 0.35)) / total) * 100;
  const letters = lang === "th" ? ["ก", "ข", "ค", "ง", "จ"] : ["A", "B", "C", "D", "E"];
  const isLast = state.qIndex === total - 1;
  const root = $("#screen-2");
  root.innerHTML = `
    ${decoLayer("Q?")}
    <div class="page question">
      <div class="q-header">
        <button type="button" class="round-btn" data-action="back" aria-label="${t(lang, "backAria")}">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="count-pill" aria-live="polite">${state.qIndex + 1} / ${total}</div>
        ${roundLangButton()}
      </div>
      <div class="progress"><span class="qtag">Q.${state.qIndex + 1}</span><div class="track"><div class="fill" style="width:${progress}%"></div></div></div>
      <h2 class="question-text" id="q-text">${lang === "th" ? q.th : q.en}</h2>
      <div class="answers" role="radiogroup" aria-labelledby="q-text">
        ${q.options.map((o, i) => `<button type="button" role="radio" class="answer-pill" data-answer="${o.id}" aria-checked="${picked === o.id}">
            <span class="radio" aria-hidden="true"></span><span class="ans-letter" aria-hidden="true">${letters[i]}</span><span>${lang === "th" ? o.th : o.en}</span>
          </button>`).join("")}
      </div>
      <div class="scene" aria-hidden="true">${renderScene(GROUP_SCENE[q.group])}</div>
    </div>
    <div class="quiz-nav">
      <button type="button" class="nav-btn nav-prev" data-action="back">${t(lang, "prev")}</button>
      <button type="button" class="nav-btn nav-next" data-action="next" ${picked ? "" : "disabled"}>${picked ? (isLast ? t(lang, "seeResult") : t(lang, "next")) : t(lang, "nextDisabled")}</button>
    </div>`;
}

function pickAnswer(letter) {
  const q = state.shown[state.qIndex];
  state.selections[q.id] = letter;
  renderQuestion();
}

function nextQuestion() {
  const q = state.shown[state.qIndex];
  const letter = state.selections[q.id];
  if (!letter) return;
  sessionData.answers[q.id] = letter;   // confirmed on "ถัดไป" (DesignUX §8)
  sessionData.groups[q.group] = letter;
  persistSession();
  if (state.qIndex < state.shown.length - 1) {
    state.qIndex++;
    renderQuestion();
    flip($("#screen-2"), "fwd");
  } else {
    goToLoading();
  }
}

function handleBack() {
  if (state.step === 2 && state.qIndex > 0) {
    state.qIndex--;
    renderQuestion();
    flip($("#screen-2"), "back");
  } else if (state.step === 2) {
    go(1, "back");
  }
}

// ============================================================
// Loading — the one dark screen (from Option C)
// ============================================================
function goToLoading() {
  const groups = {};
  state.shown.forEach(q => { groups[q.group] = state.selections[q.id]; });
  const { scores, winnerNum } = scoreQuiz(groups);
  state.result = { num: winnerNum, scores, picks: drawSoulmatch(winnerNum) };
  state.tab = 0;
  sessionData.archetype = `ARCHETYPE_${String(winnerNum).padStart(2, "0")}`;
  sessionData.scores = Object.fromEntries(Object.entries(scores).map(([k, v]) => [`ARCHETYPE_${String(k).padStart(2, "0")}`, v]));
  persistSession();
  go("loading", "fwd");
  setTimeout(() => go(3, "fwd"), REDUCED_MOTION ? 700 : 1600);
}

function renderLoading() {
  const lang = L();
  $("#screen-loading").innerHTML = `
    <div class="loading" role="status">
      <div class="grid-floor" aria-hidden="true"></div><div class="horizon" aria-hidden="true"></div>
      <div class="px-row" aria-hidden="true"><span>${t(lang, "loadingTop")}</span><span>${t(lang, "loadingTravel")}</span></div>
      <div class="card-stage" aria-hidden="true">
        <div class="glow-ring"></div><div class="glow-ring-dash"></div>
        <div class="card-back"><div class="card-back-in"><b>SZ</b><small>SOUL CARD</small></div></div>
      </div>
      <p class="loading-copy">${t(lang, "loadingCopy")}</p>
      <div class="px-bar" aria-hidden="true"><span>${t(lang, "loadingBar")}</span><div class="blocks">${"<i></i>".repeat(7)}</div></div>
    </div>`;
}

// ============================================================
// STEP 3 — Result
// ============================================================
function renderResult() {
  const lang = L();
  const arch = ARCHETYPES.find(a => a.num === state.result.num);
  const tabs = t(lang, "tabs");
  $("#screen-3").innerHTML = `
    ${decoLayer("SOUL")}
    <div class="page result">
      <div class="r-header">
        <div><div class="eyebrow">${t(lang, "resultEyebrow")}</div><h1 class="screen-title">${t(lang, "resultTitle")}</h1></div>
        ${roundLangButton()}
      </div>
      <div class="tabs" role="tablist">
        ${tabs.map((name, i) => `<button type="button" role="tab" id="tab-${i}" aria-controls="panel" aria-selected="${state.tab === i}" data-tab="${i}">${name}</button>`).join("")}
      </div>
      <div class="panel" id="panel" role="tabpanel" aria-labelledby="tab-${state.tab}">
        ${[cardTab, identityTab, lifestyleTab, compareTab][state.tab](arch)}
        <p class="disclaimer">${t(lang, "disclaimer")}</p>
      </div>
    </div>
    <div class="float-bar share-bar">
      <button type="button" class="bar-cta" data-action="story">${renderUIIcon("camera")}${t(lang, "igStoryBtn")}</button>
      <button type="button" class="bar-icon" data-action="share" aria-label="${t(lang, "shareBtn")}">${renderUIIcon("share")}<small>${t(lang, "shareBtn")}</small></button>
      <button type="button" class="bar-icon" data-action="retake" aria-label="${t(lang, "retakeBtn")}">${renderUIIcon("retake")}<small>${t(lang, "retakeBtn")}</small></button>
    </div>`;
  if (state.tab === 2) syncZenUI();
}

function tag(kind) {
  const label = { fun: t(L(), "tagFun"), evidence: t(L(), "tagEvidence"), tradition: t(L(), "tagTradition"), sample: t(L(), "sampleData") }[kind];
  return `<span class="tag tag-${kind}">${label}</span>`;
}

function soulCard(arch, rarity, el, extraClass = "") {
  const lang = L();
  const traits = (lang === "th" ? arch.descriptors.th : arch.descriptors.en).slice(0, 3);
  return `<div class="soul-card ${extraClass}">
    <div class="soul-in">
      <div class="rarity-bar"><span>${t(lang, "rarityTier")} · ${rarity}%</span><span class="el-chip" style="background:${el.hex}">${lang === "th" ? el.th : el.en}</span></div>
      <div class="soul-art">${renderIcon(arch.icon, arch.cardHex)}</div>
      <div class="soul-meta">
        <div class="soul-name">${lang === "th" ? arch.th : arch.en}</div>
        <div class="soul-en">${(lang === "th" ? arch.en : arch.th).toUpperCase()}</div>
        <div class="trait-row">${traits.map(d => `<span>${d}</span>`).join("")}</div>
      </div>
    </div>
  </div>`;
}

function cardTab(arch) {
  const lang = L();
  const rarity = getIllustrativeRarity(arch.num);
  const el = getElement(getZodiac(state.birthday.day, state.birthday.month));
  const reveal = state.result.revealed ? "" : "reveal";   // flip-in plays once (DesignUX §4.4)
  state.result.revealed = true;
  return `
    <p class="reveal-intro">${t(lang, "revealIntro")}</p>
    <div class="card-stage-result">${soulCard(arch, rarity, el, reveal)}</div>
    <blockquote class="vibe">“${lang === "th" ? arch.vibe.th : arch.vibe.en}”</blockquote>
    <div class="rarity-note"><span class="asterisk">✳</span><div><b>${t(lang, "rarityNote", rarity)}</b> ${tag("sample")}<p>${lang === "th" ? arch.oneLiner.th : arch.oneLiner.en}</p></div></div>`;
}

function identityTab(arch) {
  const lang = L();
  const { day, month, weekday } = state.birthday;
  const z = getZodiac(day, month);
  const el = getElement(z);
  const thaiDay = getThaiDayColour(weekday);
  const descs = lang === "th" ? arch.descriptors.th : arch.descriptors.en;
  return `
    <section class="block">
      <div class="block-head"><h3>${t(lang, "blockBirthday")}</h3>${tag("fun")}</div>
      <div class="tile-grid">
        <div class="tile"><small>${t(lang, "westernZodiac")}</small><b>${z.glyph} ${lang === "th" ? z.th : z.en}</b><span>${lang === "th" ? z.rangeTh : z.rangeEn}</span></div>
        <div class="tile"><small>${t(lang, "elementLabel")}</small><b><i class="dot" style="background:${el.hex}"></i>${lang === "th" ? el.th : el.en}</b><span>${lang === "th" ? el.meaningTh : el.meaningEn}</span></div>
        ${thaiDay ? `<div class="tile tile-wide"><small>${t(lang, "thaiDayLabel")} ${tag("tradition")}</small><b><i class="dot" style="background:${thaiDay.hex}"></i>${lang === "th" ? `${thaiDay.th} · ${thaiDay.colourTh}` : `${thaiDay.en} · ${thaiDay.colourEn}`}</b><span>${lang === "th" ? thaiDay.vibeTh : thaiDay.vibeEn}</span></div>` : ""}
      </div>
      <div class="horoscope"><small>${t(lang, "horoscopeLabel")}</small><p>${lang === "th" ? z.vibeTh : z.vibeEn}</p></div>
    </section>
    <section class="block">
      <div class="block-head"><h3>${t(lang, "blockBrief")}</h3>${tag("fun")}</div>
      <div class="trait-row big">${descs.map(d => `<span>${d}</span>`).join("")}</div>
      <p class="story">${lang === "th" ? arch.story.th : arch.story.en}</p>
    </section>
    ${todayColourBlock()}`;
}

function todayColourBlock() {
  const lang = L();
  const dayName = lang === "th" ? today.day.th : today.day.en;
  const cats = today.categories.map(c => `
    <div class="cat${c.key === "avoid" ? " avoid" : ""}">
      <div class="cat-swatches">${c.colours.map(col => `<i style="background:${col.hex}"></i>`).join("")}</div>
      <div><b>${lang === "th" ? c.th : c.en}</b><span class="cat-col">${c.colours.map(colourName).join(", ")}</span><p>${lang === "th" ? c.lineTh : c.lineEn}</p></div>
    </div>`).join("");
  return `<section class="block today-card">
    <div class="block-head"><h3>${t(lang, "blockToday", dayName)}</h3>${tag("evidence")}</div>
    <div class="today-head"><i class="big-swatch" style="background:${today.headline.hex}"></i><div><small>${t(lang, "todayHeadline")}</small><b>${colourName(today.headline)}</b></div></div>
    <div class="cat-grid">${cats}</div>
    <p class="source">${today.expired ? t(lang, "todayExpired", today.yearBE) : t(lang, "todaySource", today.yearBE)}</p>
  </section>`;
}

function lifestyleTab(arch) {
  const lang = L();
  const sm = SOULMATCH[arch.num];
  const p = state.result.picks;
  const place = sm.places[p.place];
  const wellness = getWellnessBundle(today.headlineKey);
  const food = wellness.food[lang];
  return `
    <section class="pop-panel">
      <div class="pop-head"><h3>${t(lang, "blockPop")}</h3><span class="decades">${t(lang, "popDecades")}</span></div>
      <div class="pop-row"><span class="pop-ic">${renderUIIcon("music")}</span><div><small>${t(lang, "popSong")}</small><b>${sm.songs[p.song]}</b></div></div>
      <div class="pop-row"><span class="pop-ic">${renderUIIcon("film")}</span><div><small>${t(lang, "popMovie")}</small><b>${sm.movies[p.movie]}</b></div></div>
      <div class="pop-row"><span class="pop-ic">${renderUIIcon("spark")}</span><div><small>${t(lang, "popPlace")}</small><b>${lang === "th" ? place.th : place.en}</b><span>${lang === "th" ? place.whyTh : place.whyEn}</span></div></div>
      <button type="button" class="reroll" data-action="reroll">${renderUIIcon("retake")}${t(lang, "reroll")}</button>
    </section>
    <section class="block">
      <div class="block-head"><h3>${t(lang, "blockEat")}</h3>${tag("fun")}</div>
      <div class="food-row">${food.foods.map(f => `<span class="food">${renderUIIcon("food")}${f}</span>`).join("")}</div>
      <p class="caption">${food.line}</p>
      <p class="caption muted">${t(lang, "eatCaption", colourName(today.headline))} · ${t(lang, "sourceWord")}: ${wellness.foodSource}</p>
    </section>
    <section class="block zen">
      <div class="block-head"><h3>${t(lang, "blockZen")}</h3>${tag("fun")}</div>
      <p>${lang === "th" ? arch.zen.th : arch.zen.en}</p>
      <div class="zen-row">
        <div class="zen-ring" id="zen-ring"><span id="zen-time">3:00</span></div>
        <button type="button" class="zen-btn" id="zen-btn" data-action="zen">${t(lang, "zenStart")}</button>
      </div>
    </section>
    <section class="block">
      <div class="block-head"><h3>${t(lang, "blockSelfCare")}</h3>${tag("fun")}</div>
      <p>${lang === "th" ? arch.wellness.th : arch.wellness.en}</p>
    </section>
    <section class="block evidence">
      <div class="block-head"><h3>${t(lang, "blockGoodToKnow")}</h3>${tag("evidence")}</div>
      ${[["labelHealthyEating", wellness.healthyEating], ["labelHolistic", wellness.holistic], ["labelAyurveda", wellness.ayurveda]].map(([k, n]) =>
        `<div class="ev-line"><b>${t(lang, k)}</b><p>${n[lang]}</p><small>${t(lang, "sourceWord")}: ${n.source}</small></div>`).join("")}
    </section>
    <section class="rec-slot"><div class="rec-thumb">${renderUIIcon("spark")}</div><div><b>${t(lang, "recTitle")}</b><p>${t(lang, "recBody")}</p></div></section>`;
}

function compareTab(arch) {
  const lang = L();
  const bars = getCompareChartData(arch.num);
  const max = Math.max(...bars.map(b => b.pct));
  const fills = ["var(--lilac)", "var(--pink)", "#FFFFFF"];
  const rarity = getIllustrativeRarity(arch.num);
  return `
    <section class="block chart">
      <div class="block-head"><h3>${t(lang, "blockCompare")}</h3>${tag("sample")}</div>
      <div class="bars">
        ${bars.map((b, i) => `<div class="bar-col">
          <span class="bar-badge">${b.pct}%</span>
          <div class="bar${b.isYou ? " you" : ""}" style="height:${Math.max(18, (b.pct / max) * 100)}%;${b.isYou ? "" : `background:${fills[i % 3]}`}"></div>
          <span class="bar-label">${b.isYou ? `★ ${t(lang, "compareYou")}` : lang === "th" ? b.labelTh : b.labelEn}</span>
        </div>`).join("")}
      </div>
    </section>
    <div class="rarity-note"><span class="asterisk">✳</span><div><b>${t(lang, "rarityNote", rarity)}</b> ${tag("sample")}</div></div>
    <button type="button" class="text-link" data-action="research">${t(lang, "researchLink")}</button>`;
}

// ---------- Zen timer (one interval only) ----------
function syncZenUI() {
  const ring = $("#zen-ring"), time = $("#zen-time"), btn = $("#zen-btn");
  if (!ring) return;
  const s = state.zen.secs;
  time.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  ring.style.setProperty("--p", `${((180 - s) / 180) * 360}deg`);
  btn.textContent = state.zen.interval ? t(L(), "zenStop") : s === 0 ? t(L(), "zenAgain") : t(L(), "zenStart");
}
function toggleZen() {
  if (state.zen.interval) { clearInterval(state.zen.interval); state.zen.interval = null; syncZenUI(); return; }
  if (state.zen.secs === 0) state.zen.secs = 180;
  state.zen.interval = setInterval(() => {
    state.zen.secs = Math.max(0, state.zen.secs - 1);
    if (state.zen.secs === 0) { clearInterval(state.zen.interval); state.zen.interval = null; }
    syncZenUI();
  }, 1000);
  syncZenUI();
}
function stopZen() { clearInterval(state.zen.interval); state.zen = { interval: null, secs: 180 }; }

// ---------- Share / story / research ----------
function currentArch() { return ARCHETYPES.find(a => a.num === state.result.num); }

async function openStory() {
  const lang = L();
  const arch = currentArch();
  const z = getZodiac(state.birthday.day, state.birthday.month);
  let overlay = $("#story-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "story-overlay";
    overlay.className = "overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = `
    <div class="overlay-head"><span>${t(lang, "storyHeader")}</span><button type="button" class="round-btn" data-action="close-story" aria-label="${t(lang, "storyClose")}">✕</button></div>
    <div class="story-wrap"><canvas aria-label="${t(lang, "storyTitle")}"></canvas></div>
    <button type="button" class="bar-cta story-save" data-action="save-story">${t(lang, "storyDownload")}</button>`;
  overlay.hidden = false;
  await renderStoryCanvas($("canvas", overlay), {
    archetype: arch,
    zodiac: `${z.glyph} ${lang === "th" ? z.th : z.en}`,
    luckyColour: t(lang, "todayChip", colourName(today.headline)),
    luckyHex: today.headline.hex,
    rarityPct: getIllustrativeRarity(arch.num),
    oneLiner: lang === "th" ? arch.oneLiner.th : arch.oneLiner.en,
    entityName: lang === "th" ? arch.th : arch.en,
    storyTitle: t(lang, "storyTitle"),
    storyFooter: t(lang, "storyFooter")
  });
}

async function saveStory() {
  const arch = currentArch();
  const btn = $(".story-save");
  btn.disabled = true;
  await shareStoryImage($("#story-overlay canvas"), `soulzine-${arch.id.toLowerCase()}.png`, t(L(), "storyTitle"));
  showToast(t(L(), "toastSaved"));
  btn.disabled = false;
}

function shareResult() {
  const lang = L();
  const arch = currentArch();
  const text = `${lang === "th" ? arch.oneLiner.th : arch.oneLiner.en} — ${t(lang, "shareMessage")}`;
  if (navigator.share) {
    navigator.share({ text, url: location.href }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(`${text} ${location.href}`).then(() => showToast(t(lang, "toastCopied")));
  } else {
    showToast(t(lang, "toastCopied"));
  }
}

function openResearch() {
  const lang = L();
  const snap = getIllustrativeResearchSnapshot();
  const top = ARCHETYPES.find(a => a.num === snap.topArchetypeNum);
  let overlay = $("#research-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "research-overlay";
    overlay.className = "overlay research";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = `<div class="research-panel">
    <div class="research-badge">${t(lang, "researchBadge")}</div>
    <h2>${t(lang, "researchTitle")}</h2>
    <div class="research-stats">
      <div><b>${snap.totalPlayers.toLocaleString()}</b><small>${t(lang, "researchStat1")}</small></div>
      <div><b>${lang === "th" ? top.th : top.en}</b><small>${t(lang, "researchStat2")}</small></div>
      <div><b>${lang === "th" ? snap.standoutDimension.th : snap.standoutDimension.en}</b><small>${t(lang, "researchStat3")}</small></div>
    </div>
    <p>${t(lang, "researchInterpretation")}</p>
    <button type="button" class="nav-btn nav-prev" data-action="close-research">${t(lang, "researchClose")}</button>
  </div>`;
  overlay.hidden = false;
}

function retake() {
  stopZen();
  state.result = null;
  state.selections = {};
  sessionData.answers = {};
  sessionData.groups = {};
  sessionData.shown = [];
  sessionData.archetype = null;
  sessionData.scores = {};
  persistSession();
  go(1, "back");      // birthday is kept (DesignUX §2)
}

// ============================================================
// Router + events
// ============================================================
const SCREENS = { 1: "#screen-1", 2: "#screen-2", loading: "#screen-loading", 3: "#screen-3" };
const RENDER = { 1: renderWelcome, 2: renderQuestion, loading: renderLoading, 3: renderResult };

function go(step, direction) {
  state.step = step;
  render(direction);
  window.scrollTo(0, 0);
}

function render(direction) {
  $$(".screen").forEach(s => s.classList.remove("active"));
  const screen = $(SCREENS[state.step]);
  screen.classList.add("active");
  RENDER[state.step]();
  flip(screen, direction);
  document.documentElement.lang = state.lang;
  document.body.dataset.step = state.step;
}

function setLang(lang) {
  if (lang === state.lang) return;
  state.lang = lang;
  persistSession();
  render(null);       // switching never resets progress, answers or tab
}

document.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b || b.disabled) return;
  if (b.dataset.lang) return setLang(b.dataset.lang);
  if (b.dataset.step) return stepBirthday(b.dataset.step, Number(b.dataset.dir));
  if (b.dataset.weekday != null) {
    const w = Number(b.dataset.weekday);
    state.birthday.weekday = state.birthday.weekday === w ? null : w;   // tap again to clear
    return updateBirthdayUI();
  }
  if (b.dataset.answer) return pickAnswer(b.dataset.answer);
  if (b.dataset.tab != null) {
    state.tab = Number(b.dataset.tab);
    renderResult();
    $(`#tab-${state.tab}`).focus();
    return;
  }
  const actions = {
    lang: () => setLang(state.lang === "th" ? "en" : "th"),
    start: startQuiz,
    back: handleBack,
    next: nextQuestion,
    story: openStory,
    "save-story": saveStory,
    "close-story": () => { $("#story-overlay").hidden = true; },
    share: shareResult,
    retake,
    research: openResearch,
    "close-research": () => { $("#research-overlay").hidden = true; },
    zen: toggleZen,
    reroll: () => { state.result.picks = drawSoulmatch(state.result.num); renderResult(); }
  };
  if (actions[b.dataset.action]) actions[b.dataset.action]();
});

// Arrow keys move between tabs (ARIA tab pattern)
document.addEventListener("keydown", (e) => {
  if (e.target.getAttribute && e.target.getAttribute("role") === "tab" && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
    state.tab = (state.tab + (e.key === "ArrowRight" ? 1 : 3)) % 4;
    renderResult();
    $(`#tab-${state.tab}`).focus();
  }
  if (e.key === "Escape") $$(".overlay").forEach(o => { o.hidden = true; });
});

// Browser Back = previous question or step (DesignUX §2)
history.pushState({ soulzine: true }, "");
window.addEventListener("popstate", () => {
  if (state.step === 2) handleBack();
  history.pushState({ soulzine: true }, "");
});

render(null);
