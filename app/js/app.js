// app.js — Soul Zine main application logic.
// Single page, 3-step state machine. No backend; session data only (SPECFinal.md §21).
// Loaded as a plain script (not type="module") so the app also runs when index.html
// is opened directly via file:// (ES modules are blocked cross-file under file://).
// Depends on globals defined by the scripts loaded before this one in index.html:
// ARCHETYPES, ARCHETYPE_BY_ID (data-archetypes.js), QUESTIONS (data-questions.js),
// scoreQuiz (scoring.js), getZodiac/getElement/getThaiDayColour/getLuckyColour/
// getDayOptions/MONTHS/THAI_DAYS_LIST (birthday.js), renderIcon/renderScene/
// renderUIIcon (icons.js), t (copy.js), getWellnessBundle (wellness.js),
// getCompareChartData/getIllustrativeRarity/getIllustrativeResearchSnapshot
// (community.js), renderStoryCanvas/shareStoryImage (share.js).

const QUIZ_VERSION = "v1";

const state = {
  lang: "th",
  step: 1,
  qIndex: 0,
  birthday: { day: null, month: null, weekday: null },
  answers: {},
  result: null, // { archetypeNum, scores }
  fadeObserver: null,
};

// ---------- Session data object (SPECFinal.md §21) ----------
function initSessionData() {
  const existing = sessionStorage.getItem("soulzine_v1");
  if (existing) {
    try { return JSON.parse(existing); } catch (e) { /* fallthrough */ }
  }
  return {
    timestamp: new Date().toISOString(),
    quiz_version: QUIZ_VERSION,
    language: state.lang,
    birth: { day: null, month: null },
    derived: { zodiac: null, element: null, thai_day_color: null, lucky_color: null },
    answers: {},
    archetype: null,
    scores: {}
  };
}
let sessionData = initSessionData();
function persistSession() {
  sessionData.language = state.lang;
  sessionStorage.setItem("soulzine_v1", JSON.stringify(sessionData));
}

// ---------- Utilities ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html != null) e.innerHTML = html;
  return e;
}
function showToast(msg) {
  let toast = $(".toast");
  if (!toast) {
    toast = el("div", "toast");
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ---------- Language toggle (rendered on every step) ----------
function renderLangToggle(container) {
  container.innerHTML = "";
  const wrap = el("div", "lang-toggle");
  wrap.setAttribute("role", "group");
  wrap.setAttribute("aria-label", t(state.lang, "langToggleAria"));
  ["th", "en"].forEach(code => {
    const btn = el("button", code === state.lang ? "active" : "", code.toUpperCase());
    btn.type = "button";
    btn.addEventListener("click", () => {
      if (state.lang === code) return;
      state.lang = code;
      persistSession();
      renderCurrentStep();
    });
    wrap.appendChild(btn);
  });
  container.appendChild(wrap);
}

// ============================================================
// STEP 1 — Welcome & Birthday Picker
// ============================================================
function renderStep1() {
  const L = state.lang;
  const root = $("#screen-1");
  root.innerHTML = "";

  const header = el("div", "header-row");
  header.appendChild(el("div", "script-mark", t(L, "scriptMark")));
  const toggleHost = el("div");
  header.appendChild(toggleHost);
  root.appendChild(header);
  renderLangToggle(toggleHost);

  const hookWrap = el("div", "hook-sticker-wrap");
  const sticker = el("div", "hook-sticker");
  sticker.innerHTML = `<span class="num">${t(L, "hookBadgeNum")}</span><span class="cap">${t(L, "hookBadgeCap").replace("\n", "<br>")}</span>`;
  hookWrap.appendChild(sticker);
  root.appendChild(hookWrap);

  root.appendChild(el("h1", "headline", t(L, "headline1")));
  const h2 = el("div", "headline-2", t(L, "headline2"));
  root.appendChild(h2);
  root.appendChild(el("p", "sub-hook", t(L, "subHook")));
  root.appendChild(el("p", "explainer", t(L, "explainer")));

  const strip = el("div", "illu-strip");
  ["boba", "cloud", "cassette", "sprout"].forEach(k => {
    const holder = el("div");
    holder.innerHTML = renderIcon(k, k === "boba" ? "#8A5A2E" : k === "cloud" ? "#A9A9D8" : k === "cassette" ? "#8A5A3C" : "#6FBF6F");
    strip.appendChild(holder.firstChild);
  });
  root.appendChild(strip);

  const card = el("div", "birthday-card");
  card.appendChild(el("h2", null, t(L, "birthdayTitle")));

  const wheelRow = el("div", "wheel-row");
  const dayCol = el("div", "wheel-col");
  dayCol.appendChild(el("span", "wheel-label", t(L, "dayLabel")));
  const dayWheel = el("div", "wheel");
  dayWheel.id = "day-wheel";
  dayCol.appendChild(dayWheel);
  wheelRow.appendChild(dayCol);

  const monthCol = el("div", "wheel-col");
  monthCol.appendChild(el("span", "wheel-label", t(L, "monthLabel")));
  const monthWheel = el("div", "wheel");
  monthWheel.id = "month-wheel";
  monthCol.appendChild(monthWheel);
  wheelRow.appendChild(monthCol);
  card.appendChild(wheelRow);

  const chipRow = el("div", "chip-row");
  chipRow.id = "birthday-chips";
  card.appendChild(chipRow);

  // optional weekday row
  const weekdayLabel = el("div", "wheel-label", t(L, "weekdayLabel"));
  weekdayLabel.style.marginTop = "16px";
  card.appendChild(weekdayLabel);
  const weekdayRow = el("div", "chip-row");
  weekdayRow.id = "weekday-row";
  const skipChip = el("button", "chip" + (state.birthday.weekday == null ? "" : ""), t(L, "weekdaySkip"));
  skipChip.type = "button";
  skipChip.style.cursor = "pointer";
  skipChip.addEventListener("click", () => { state.birthday.weekday = null; updateBirthdayChips(); renderWeekdayRow(); });
  weekdayRow.appendChild(skipChip);
  THAI_DAYS_LIST.forEach((d, idx) => {
    const chip = el("button", "chip", "");
    chip.type = "button";
    chip.style.cursor = "pointer";
    chip.innerHTML = `<span class="dot" style="background:${d.hex}"></span>${L === "th" ? d.th : d.en}`;
    chip.addEventListener("click", () => { state.birthday.weekday = idx; updateBirthdayChips(); renderWeekdayRow(); });
    weekdayRow.appendChild(chip);
  });
  card.appendChild(weekdayRow);

  root.appendChild(card);

  const actions = el("div", "step1-actions");
  const btn = el("button", "btn-primary", `${t(L, "startCta")} →`);
  btn.id = "start-btn";
  btn.type = "button";
  btn.disabled = true;
  btn.addEventListener("click", () => {
    if (btn.disabled) return;
    goToStep2();
  });
  actions.appendChild(btn);
  actions.appendChild(el("p", "privacy-line", t(L, "privacyLine")));
  root.appendChild(actions);

  buildWheel(dayWheel, getDayOptions(state.birthday.month || 1), state.birthday.day, (val) => {
    state.birthday.day = val;
    onBirthdayChange();
  });
  buildWheel(monthWheel, MONTHS.map(m => m.num), state.birthday.month, (val) => {
    state.birthday.month = val;
    const days = getDayOptions(val);
    if (state.birthday.day && state.birthday.day > days.length) state.birthday.day = days.length;
    buildWheel(dayWheel, days, state.birthday.day, (dval) => { state.birthday.day = dval; onBirthdayChange(); });
    onBirthdayChange();
  }, (num) => (L === "th" ? MONTHS.find(m => m.num === num).th : MONTHS.find(m => m.num === num).en));

  updateBirthdayChips();
  renderWeekdayRow();

  function renderWeekdayRow() {
    $$("#weekday-row .chip").forEach((c, i) => {
      const isSkip = i === 0;
      const active = isSkip ? state.birthday.weekday == null : (i - 1) === state.birthday.weekday;
      c.style.background = active ? "var(--ink)" : "#fff";
      c.style.color = active ? "var(--yellow)" : "var(--ink)";
    });
  }
}

function updateBirthdayChips() {
  const L = state.lang;
  const chipRow = $("#birthday-chips");
  const btn = $("#start-btn");
  chipRow.innerHTML = "";
  const { day, month } = state.birthday;
  if (!day || !month) {
    const p1 = el("span", "chip placeholder", L === "th" ? "ราศี · ธาตุ" : "Zodiac · Element");
    const p2 = el("span", "chip placeholder", L === "th" ? "สีมงคล" : "Lucky colour");
    chipRow.appendChild(p1); chipRow.appendChild(p2);
    if (btn) { btn.disabled = true; btn.textContent = t(L, "startDisabled"); }
    return;
  }
  const zodiac = getZodiac(day, month);
  const element = getElement(zodiac);
  const lucky = getLuckyColour(day);

  const zChip = el("span", "chip", `${L === "th" ? zodiac.th : zodiac.en} · ${L === "th" ? element.th.split(" ")[0] : element.en.split(" —")[0]}`);
  chipRow.appendChild(zChip);

  const cChip = el("span", "chip");
  cChip.innerHTML = `<span class="dot" style="background:${lucky.hex[0]}"></span><span class="dot" style="background:${lucky.hex[1]}"></span>${L === "th" ? lucky.names.th.join(" & ") : lucky.names.en.join(" & ")}`;
  chipRow.appendChild(cChip);

  if (btn) { btn.disabled = false; btn.innerHTML = `${t(L, "startCta")} →`; }

  sessionData.birth = { day, month };
  sessionData.derived = {
    zodiac: zodiac.key, element: element.key,
    thai_day_color: state.birthday.weekday != null ? THAI_DAYS_LIST[state.birthday.weekday].key : null,
    lucky_color: lucky.names.en.join("_").toLowerCase().replace(/\s+/g, "_")
  };
  persistSession();
}
function onBirthdayChange() { updateBirthdayChips(); }

function buildWheel(container, values, selectedValue, onChange, formatter) {
  container.innerHTML = "";
  container.appendChild(document.createComment("pad-before"));
  const itemEls = [];
  values.forEach(v => {
    const item = el("div", "wheel-item", formatter ? formatter(v) : String(v));
    item.dataset.value = v;
    item.addEventListener("click", () => {
      container.scrollTo({ top: itemEls.indexOf(item) * 40, behavior: "smooth" });
    });
    container.appendChild(item);
    itemEls.push(item);
  });

  let initialIdx = selectedValue ? values.indexOf(selectedValue) : 0;
  if (initialIdx < 0) initialIdx = 0;
  requestAnimationFrame(() => {
    container.scrollTop = initialIdx * 40;
    markSelected(initialIdx);
    if (!selectedValue) {
      // don't auto-select until user scrolls — start with no value, per DesignUX
    }
  });

  let debounceTimer = null;
  function markSelected(idx) {
    itemEls.forEach((it, i) => it.classList.toggle("selected", i === idx));
  }
  container.addEventListener("scroll", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const idx = Math.round(container.scrollTop / 40);
      const clamped = Math.max(0, Math.min(itemEls.length - 1, idx));
      markSelected(clamped);
      onChange(values[clamped]);
    }, 150);
  });

  container.tabIndex = 0;
  container.addEventListener("keydown", (e) => {
    const cur = Math.round(container.scrollTop / 40);
    if (e.key === "ArrowUp") { container.scrollTo({ top: (cur - 1) * 40, behavior: "smooth" }); e.preventDefault(); }
    if (e.key === "ArrowDown") { container.scrollTo({ top: (cur + 1) * 40, behavior: "smooth" }); e.preventDefault(); }
  });
}

// ============================================================
// STEP 2 — Scenario Questions
// ============================================================
function goToStep2() {
  state.step = 2;
  state.qIndex = 0;
  renderCurrentStep();
}

function renderStep2() {
  const L = state.lang;
  const q = QUESTIONS[state.qIndex];
  const root = $("#screen-2");
  root.innerHTML = "";
  root.classList.add("q-screen");

  const header = el("div", "header-row");
  const back = el("button", "back-btn");
  back.type = "button";
  back.setAttribute("aria-label", t(L, "backAria"));
  back.innerHTML = `<svg viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1A1418" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  back.addEventListener("click", handleBack);
  header.appendChild(back);
  header.appendChild(el("div", "q-counter", t(L, "questionOf", state.qIndex + 1, QUESTIONS.length)));
  const toggleHost = el("div");
  header.appendChild(toggleHost);
  root.appendChild(header);
  renderLangToggle(toggleHost);

  const progress = el("div", "progress-row");
  QUESTIONS.forEach((_, i) => {
    if (i > 0) {
      const seg = el("div", i <= state.qIndex ? "seg" : "seg todo");
      progress.appendChild(seg);
    }
    if (i === QUESTIONS.length - 1) {
      const star = el("div");
      star.innerHTML = `<svg class="progress-star" viewBox="0 0 24 24" fill="${i < state.qIndex ? '#A57FD1' : '#fff'}" stroke="#1A1418" stroke-width="1.5"><path d="M12 2l2.9 6.9L22 9.7l-5.5 4.8L18 22l-6-4-6 4 1.5-7.5L2 9.7l7.1-.8L12 2z"/></svg>`;
      progress.appendChild(star.firstChild);
    } else {
      const dot = el("div", `progress-dot ${i === state.qIndex ? "current" : i < state.qIndex ? "" : "todo"}`);
      progress.appendChild(dot);
    }
  });
  root.appendChild(progress);

  const scene = el("div", "scene-panel");
  const sceneIcon = el("div");
  sceneIcon.innerHTML = renderScene(q.scene);
  scene.appendChild(sceneIcon.firstChild);
  root.appendChild(scene);

  root.appendChild(el("h2", "question-text", L === "th" ? q.th : q.en));

  const answers = el("div", "answers");
  const bullets = L === "th" ? ["ก", "ข", "ค", "ง", "จ"] : ["A", "B", "C", "D", "E"];
  const existingAnswer = state.answers[q.id];
  q.options.forEach((opt, i) => {
    const btn = el("button", "answer-option" + (existingAnswer === opt.id ? " selected" : ""));
    btn.type = "button";
    btn.innerHTML = `<span class="bullet">${bullets[i]}</span><span>${L === "th" ? opt.th : opt.en}</span>`;
    btn.addEventListener("click", () => selectAnswer(q, opt.id, btn, answers));
    answers.appendChild(btn);
  });
  root.appendChild(answers);

  const nudgeIdx = Math.min(state.qIndex, 3);
  root.appendChild(el("div", "nudge-line", t(L, "nudgeLines")[nudgeIdx] || ""));

  root.setAttribute("data-page-turn", "in");
  requestAnimationFrame(() => root.removeAttribute("data-page-turn"));
}

function selectAnswer(q, optId, btnEl, answersContainer) {
  $$(".answer-option", answersContainer).forEach(b => b.classList.remove("selected"));
  btnEl.classList.add("selected");
  state.answers[q.id] = optId;
  sessionData.answers[q.id] = optId;
  persistSession();
  setTimeout(() => {
    if (state.qIndex < QUESTIONS.length - 1) {
      state.qIndex++;
      renderStep2();
    } else {
      goToLoadingThenResult();
    }
  }, 350);
}

function handleBack() {
  if (state.qIndex > 0) {
    state.qIndex--;
    renderStep2();
  } else {
    state.step = 1;
    renderCurrentStep();
  }
}

// ============================================================
// Loading + Step 3 — Soul Dashboard
// ============================================================
function goToLoadingThenResult() {
  state.step = "loading";
  renderCurrentStep();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const { scores, winnerNum } = scoreQuiz(state.answers);
  state.result = { archetypeNum: winnerNum, scores };
  sessionData.archetype = `ARCHETYPE_${String(winnerNum).padStart(2, "0")}`;
  sessionData.scores = Object.fromEntries(Object.entries(scores).map(([k, v]) => [`ARCHETYPE_${String(k).padStart(2, "0")}`, v]));
  persistSession();
  setTimeout(() => {
    state.step = 3;
    renderCurrentStep();
  }, reduced ? 600 : 1300);
}

function renderLoading() {
  const L = state.lang;
  const root = $("#screen-loading");
  root.innerHTML = "";
  const wrap = el("div", "loading-screen");
  wrap.appendChild(el("div", "loading-copy", t(L, "loadingCopy")));
  const dots = el("div", "loading-dots", `<span class="d"></span><span class="d"></span><span class="d"></span>`);
  wrap.appendChild(dots);
  root.appendChild(wrap);
}

function renderStep3() {
  const L = state.lang;
  const root = $("#screen-3");
  root.innerHTML = "";
  root.classList.add("dash-screen");

  const arch = ARCHETYPES.find(a => a.num === state.result.archetypeNum);
  const { day, month, weekday } = state.birthday;
  const zodiac = getZodiac(day, month);
  const element = getElement(zodiac);
  const lucky = getLuckyColour(day);
  const thaiDay = getThaiDayColour(weekday);
  const rarityPct = getIllustrativeRarity(arch.num);
  const wellness = getWellnessBundle(lucky.root);

  const header = el("div", "header-row");
  header.appendChild(el("div", "eyebrow-label", t(L, "dashHeader")));
  const toggleHost = el("div");
  header.appendChild(toggleHost);
  root.appendChild(header);
  renderLangToggle(toggleHost);

  // Block 1: Reveal
  const b1 = el("div", "dash-block reveal-card fade-in");
  b1.appendChild(el("div", "reveal-intro", t(L, "revealIntro")));
  const cCard = el("div", "character-card");
  const stamp = el("div", "rarity-stamp stamp-in");
  stamp.innerHTML = `<span class="lbl">${t(L, "rarityPrefix")}</span><span class="pct">${rarityPct}%</span><span class="lbl">${t(L, "illustrativeNote")}</span>`;
  cCard.appendChild(stamp);
  const iconHost = el("div");
  iconHost.innerHTML = renderIcon(arch.icon, arch.cardHex);
  cCard.appendChild(iconHost.firstChild);
  b1.appendChild(cCard);
  b1.appendChild(el("div", "entity-th", L === "th" ? arch.th : arch.en));
  b1.appendChild(el("div", "entity-en", L === "th" ? arch.en : arch.th));
  b1.appendChild(el("p", "entity-vibe", L === "th" ? arch.vibe.th : arch.vibe.en));
  b1.appendChild(el("p", "rarity-line", t(L, "rarityLine", rarityPct) + " " + t(L, "illustrativeNote")));
  root.appendChild(b1);

  // Block 2: Birthday identity
  const b2 = el("div", "dash-block fade-in");
  b2.appendChild(blockHead(t(L, "blockBirthdayIdentity"), "fun", t(L, "tagFun")));
  const infoRow = el("div", "info-card-row");
  const zCard = el("div", "info-card");
  zCard.innerHTML = `<div class="k">${t(L, "zodiacLabel")}</div><div class="v">${L === "th" ? zodiac.th : zodiac.en}</div><div class="v2">${L === "th" ? element.th : element.en}</div>`;
  infoRow.appendChild(zCard);
  const dayCard = el("div", "info-card");
  dayCard.innerHTML = `<div class="k">${t(L, "thaiDayLabel")}</div>` + (thaiDay
    ? `<div class="v">${L === "th" ? thaiDay.colourTh : thaiDay.colourEn}</div><div class="v2">${L === "th" ? thaiDay.th : thaiDay.en}</div>`
    : `<div class="v2">${t(L, "thaiDayUnknown")}</div>`);
  infoRow.appendChild(dayCard);
  b2.appendChild(infoRow);

  const luckyWrap = el("div");
  luckyWrap.style.marginTop = "16px";
  luckyWrap.innerHTML = `<div class="info-card k" style="border:none;box-shadow:none;padding:0;background:none;">${t(L, "luckyColourLabel")}</div>`;
  const bar = el("div", "swatch-bar");
  lucky.hex.forEach(h => { const s = el("span"); s.style.background = h; bar.appendChild(s); });
  luckyWrap.appendChild(bar);
  luckyWrap.appendChild(el("div", "colour-name", L === "th" ? lucky.names.th.join(" & ") : lucky.names.en.join(" & ")));
  luckyWrap.appendChild(el("div", "colour-meaning", L === "th" ? lucky.meaning.th : lucky.meaning.en));
  b2.appendChild(luckyWrap);
  root.appendChild(b2);

  // Block 3: Character brief
  const b3 = el("div", "dash-block fade-in");
  b3.appendChild(blockHead(t(L, "blockCharacterBrief"), "fun", t(L, "tagFun")));
  const chips = el("div", "descriptor-chips");
  (L === "th" ? arch.descriptors.th : arch.descriptors.en).forEach(d => chips.appendChild(el("span", "descriptor-chip", d)));
  b3.appendChild(chips);
  b3.appendChild(el("p", "story-text", L === "th" ? arch.story.th : arch.story.en));
  root.appendChild(b3);

  // Block 4: Pop culture
  const b4 = el("div", "dash-block fade-in");
  b4.appendChild(blockHead(t(L, "blockPopCulture")));
  [["song", "music", arch.pop.song], ["movie", "film", arch.pop.movie], ["art", "frame", arch.pop.art]].forEach(([kind, iconKey, val]) => {
    const row = el("div", "pop-row");
    row.innerHTML = `<div class="pop-icon">${renderUIIcon(iconKey)}</div><div><div class="pop-meta">${t(L, "pop" + kind[0].toUpperCase() + kind.slice(1))}</div><div class="pop-title">${val}</div></div><div class="decade-tag">${arch.pop.decade}</div>`;
    b4.appendChild(row);
  });
  root.appendChild(b4);

  // Block 5: Eat by lucky colour
  const b5 = el("div", "dash-block fade-in");
  b5.appendChild(blockHead(t(L, "blockEatByColour"), "fun", t(L, "tagFun")));
  const foodTiles = el("div", "food-tiles");
  const foodData = wellness.food[L];
  foodData.foods.forEach(f => {
    const tile = el("div", "food-tile");
    tile.innerHTML = `<div class="food-icon">${renderUIIcon("food")}</div><div class="name">${f}</div>`;
    foodTiles.appendChild(tile);
  });
  b5.appendChild(foodTiles);
  b5.appendChild(el("p", "fun-caption", `${foodData.line} · ${t(L, "eatCaption")}`));
  root.appendChild(b5);

  // Block 6: Good to know (evidence-informed)
  const b6 = el("div", "dash-block fade-in");
  b6.appendChild(blockHead(t(L, "blockGoodToKnow"), "evidence", t(L, "tagEvidence")));
  [
    [t(L, "labelHealthyEating"), wellness.healthyEating[L], wellness.healthyEating.source],
    [t(L, "labelHolistic"), wellness.holistic[L], wellness.holistic.source],
    [t(L, "labelAyurveda"), wellness.ayurveda[L], wellness.ayurveda.source]
  ].forEach(([label, txt, src]) => {
    const line = el("div", "evidence-line");
    line.innerHTML = `<div class="txt"><strong>${label}:</strong> ${txt}</div><div class="src">${L === "th" ? "ที่มา" : "Source"}: ${src}</div>`;
    b6.appendChild(line);
  });
  root.appendChild(b6);

  // Block 7: Zen
  const b7 = el("div", "dash-block tinted-yellow fade-in zen-block");
  b7.appendChild(blockHead(t(L, "blockZen")));
  b7.appendChild(el("p", "zen-copy", L === "th" ? arch.zen.th : arch.zen.en));
  const timer = el("div", "zen-timer", "3:00");
  b7.appendChild(timer);
  const zenBtn = el("button", "btn-secondary", t(L, "zenStart"));
  zenBtn.type = "button";
  let zenInterval = null;
  zenBtn.addEventListener("click", () => {
    if (zenInterval) {
      clearInterval(zenInterval); zenInterval = null;
      timer.textContent = "3:00";
      zenBtn.textContent = t(L, "zenStart");
      return;
    }
    let secs = 180;
    zenBtn.textContent = t(L, "zenCancel");
    zenInterval = setInterval(() => {
      secs--;
      const m = Math.floor(secs / 60), s = secs % 60;
      timer.textContent = `${m}:${String(s).padStart(2, "0")}`;
      if (secs <= 0) { clearInterval(zenInterval); zenInterval = null; zenBtn.textContent = t(L, "zenStart"); }
    }, 1000);
  });
  b7.appendChild(zenBtn);
  root.appendChild(b7);

  // Block 8: Compare souls
  const b8 = el("div", "dash-block fade-in");
  const head8 = blockHead(t(L, "blockCompare"));
  const note8 = el("span", "chip placeholder", t(L, "compareNote"));
  note8.style.padding = "4px 10px"; note8.style.fontSize = "10px";
  head8.appendChild(note8);
  b8.appendChild(head8);
  const chartData = getCompareChartData(arch.num);
  const chartWrap = el("div", "chart-wrap");
  const maxPct = Math.max(...chartData.map(b => b.pct), 1);
  chartData.forEach(bar => {
    const col = el("div", "chart-col");
    const barEl = el("div", "chart-bar" + (bar.isYou ? " you" : ""));
    const heightPct = Math.max(10, (bar.pct / maxPct) * 100);
    barEl.style.height = heightPct + "%";
    if (!bar.isYou) barEl.style.background = bar.color;
    const pctLabel = el("div", "chart-pct", bar.pct + "%");
    col.appendChild(pctLabel);
    col.appendChild(barEl);
    col.appendChild(el("div", "chart-label", L === "th" ? bar.labelTh : bar.labelEn));
    chartWrap.appendChild(col);
  });
  b8.appendChild(chartWrap);
  b8.appendChild(el("div", "chart-note", t(L, "compareNote")));
  root.appendChild(b8);

  // Block 9: Share row
  const b9 = el("div", "share-row");
  const igBtn = el("button", "btn-primary", `<span class="btn-icon">${renderUIIcon("camera")}</span>${t(L, "igStoryBtn")}`);
  igBtn.type = "button";
  igBtn.addEventListener("click", () => openStoryOverlay(arch, zodiac, lucky, rarityPct));
  b9.appendChild(igBtn);
  const shareBtn = el("button", "btn-secondary", `<span class="btn-icon">${renderUIIcon("share")}</span>${t(L, "shareBtn")}`);
  shareBtn.type = "button";
  shareBtn.addEventListener("click", () => doShareResult(arch, rarityPct));
  b9.appendChild(shareBtn);
  const retakeBtn = el("button", "btn-secondary", `<span class="btn-icon">${renderUIIcon("retake")}</span>${t(L, "retakeBtn")}`);
  retakeBtn.type = "button";
  retakeBtn.addEventListener("click", retakeQuiz);
  b9.appendChild(retakeBtn);
  root.appendChild(b9);

  // Block 10: Recommendation slot
  const b10 = el("div", "dash-block rec-slot fade-in");
  b10.appendChild(el("div", "block-title", t(L, "recSlotTitle")));
  const recItem = el("div", "rec-item");
  recItem.innerHTML = `<div class="swatch">${renderUIIcon("spark")}</div><div>${arch.recommendation}</div>`;
  b10.appendChild(recItem);
  b10.appendChild(el("p", "recSlotBody", t(L, "recSlotBody")));
  root.appendChild(b10);

  // Block 11: Disclaimer
  root.appendChild(el("p", "disclaimer", t(L, "disclaimer")));

  // Research dashboard link (dev-facing preview)
  const researchRow = el("div", "research-link-row");
  const researchLink = el("button", "btn-text", t(L, "researchLinkText"));
  researchLink.type = "button";
  researchLink.addEventListener("click", () => openResearchPreview(arch));
  researchRow.appendChild(researchLink);
  root.appendChild(researchRow);

  setupFadeIns(root);
}

function blockHead(title, tagType, tagLabel) {
  const head = el("div", "block-head");
  head.appendChild(el("h3", "block-title", title));
  if (tagType) head.appendChild(el("span", `layer-tag ${tagType}`, tagLabel));
  return head;
}

function setupFadeIns(root) {
  const items = $$(".fade-in", root);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(i => i.classList.add("in"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(i => obs.observe(i));
}

function retakeQuiz() {
  state.step = 1;
  state.qIndex = 0;
  state.answers = {};
  state.result = null;
  sessionData.answers = {};
  sessionData.archetype = null;
  sessionData.scores = {};
  persistSession();
  renderCurrentStep();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// ---------- Research dashboard preview ----------
function openResearchPreview(arch) {
  const L = state.lang;
  let overlay = $("#research-overlay");
  if (!overlay) {
    overlay = el("div", "research-overlay hidden");
    overlay.id = "research-overlay";
    document.body.appendChild(overlay);
  }
  const snap = getIllustrativeResearchSnapshot();
  const topArch = ARCHETYPES.find(a => a.num === snap.topArchetypeNum);
  overlay.innerHTML = "";
  const panel = el("div", "research-panel");
  panel.innerHTML = `<div class="research-badge">${t(L, "researchBadge")}</div>
    <h2 style="font-family:var(--font-display);font-weight:800;">${t(L, "researchTitle")}</h2>`;
  const statRow = el("div", "research-stat-row");
  statRow.innerHTML = `
    <div class="research-stat"><div class="n">${snap.totalPlayers.toLocaleString()}</div><div class="l">${t(L, "researchStat1")}</div></div>
    <div class="research-stat"><div class="n">${L === "th" ? topArch.th : topArch.en}</div><div class="l">${t(L, "researchStat2")}</div></div>
    <div class="research-stat"><div class="n">${L === "th" ? snap.standoutDimension.th : snap.standoutDimension.en}</div><div class="l">${t(L, "researchStat3")}</div></div>
  `;
  panel.appendChild(statRow);
  panel.appendChild(el("div", "research-note", t(L, "researchInterpretation")));
  const closeBtn = el("button", "btn-secondary", t(L, "researchClose"));
  closeBtn.style.marginTop = "16px";
  closeBtn.type = "button";
  closeBtn.addEventListener("click", () => overlay.classList.add("hidden"));
  panel.appendChild(closeBtn);
  overlay.appendChild(panel);
  overlay.classList.remove("hidden");
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.classList.add("hidden"); }, { once: true });
}

// ---------- IG Story overlay ----------
async function openStoryOverlay(arch, zodiac, lucky, rarityPct) {
  const L = state.lang;
  let overlay = $("#story-overlay");
  if (!overlay) {
    overlay = el("div", "story-overlay hidden");
    overlay.id = "story-overlay";
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = "";
  const canvasWrap = el("div", "story-canvas-wrap");
  const canvas = document.createElement("canvas");
  canvasWrap.appendChild(canvas);
  overlay.appendChild(canvasWrap);

  const actions = el("div", "story-actions");
  const dlBtn = el("button", "btn-primary", t(L, "storyDownload"));
  dlBtn.type = "button";
  const closeBtn = el("button", "btn-secondary", t(L, "storyClose"));
  closeBtn.type = "button";
  closeBtn.addEventListener("click", () => overlay.classList.add("hidden"));
  actions.appendChild(dlBtn);
  actions.appendChild(closeBtn);
  overlay.appendChild(actions);
  overlay.classList.remove("hidden");

  await renderStoryCanvas(canvas, {
    archetype: arch,
    lang: L,
    zodiac: L === "th" ? zodiac.th : zodiac.en,
    luckyColour: L === "th" ? lucky.names.th.join(" & ") : lucky.names.en.join(" & "),
    rarityPct,
    oneLiner: L === "th" ? arch.oneLiner.th : arch.oneLiner.en,
    entityName: L === "th" ? arch.th : arch.en,
    storyTitle: t(L, "storyTitle"),
    storyFooter: t(L, "storyFooter")
  });

  dlBtn.addEventListener("click", async () => {
    dlBtn.disabled = true;
    const filename = `soul-zine-${arch.id.toLowerCase()}.png`;
    await shareStoryImage(canvas, filename, t(L, "storyTitle"));
    showToast(t(L, "toastSaved"));
    dlBtn.disabled = false;
  });
}

function doShareResult(arch, rarityPct) {
  const L = state.lang;
  const text = `${t(L, "shareMessage")} ${L === "th" ? arch.oneLiner.th : arch.oneLiner.en}`;
  if (navigator.share) {
    navigator.share({ text, url: location.href }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(`${text} ${location.href}`).then(() => showToast(t(L, "toastCopied")));
  }
}

// ============================================================
// Router
// ============================================================
function renderCurrentStep() {
  $$(".screen").forEach(s => s.classList.remove("active"));
  if (state.step === 1) { $("#screen-1").classList.add("active"); renderStep1(); }
  else if (state.step === 2) { $("#screen-2").classList.add("active"); renderStep2(); }
  else if (state.step === "loading") { $("#screen-loading").classList.add("active"); renderLoading(); }
  else if (state.step === 3) { $("#screen-3").classList.add("active"); renderStep3(); }
  document.documentElement.lang = state.lang;
}

// Browser back button support (per DesignUX §2)
window.addEventListener("popstate", () => {
  if (state.step === 2) handleBack();
  else if (state.step === 3) { /* stay: dashboard is the end state */ }
});
history.pushState({ app: true }, "");
window.addEventListener("beforeunload", persistSession);

renderCurrentStep();
