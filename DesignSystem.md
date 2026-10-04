# DesignSystem.md — SoulZine

**One-line summary:** The visual system for **SoulZine**, a single-page, mobile-first past-life quiz. It is a clean quiz-app skeleton (lilac, lime, bubblegum, black floating bars) set on pastel-hologram backgrounds, with a 2000s-magazine wordmark and gacha/collectible-card touches.

Version 2.1 · 3 Oct 2026 · Updates v2.0 · Source: the "SoulZine app — interactive prototype" on the design canvas, plus the 3 Oct spec update
Contract: `SPEC-Pastlives.md` wins on any conflict. Flow and behaviour are in `DesignUX.md`; copy rules in `DesignLanguage.md`; archetypes in `ArchetypeReference.md`; zodiac and colour lists in `Astrology_Colour.md`.

---

## 0a. What changed in v2.1 (3 Oct 2026)

| Area | v2.0 | v2.1 |
|---|---|---|
| Lucky colour | astroleaf numerology: birth day → driver no. 1–9 → colours, "No.n" | **Today's lucky colour (สีมงคลวันนี้)** from today's weekday, Hua Seng Hong 2569 table, 6 categories + one headline colour (§2.7) |
| Thai day colour | Weekday dot, unlabelled | Birth-day colour from the optional weekday pill, tagged **ความเชื่อไทย** (tradition) |
| Pop-culture panel | Song · movie · artwork | Song · movie · **place to visit (เที่ยวไหนดี)** |
| Theme | Pastel hologram quiz app | **Approved 4 Oct 2026: Option A.** Adds the spec theme as a light layer: **1998 magic magazine** with Cosmo/Seventeen cover layout, cyberpunk / *Tron* neon line accents, page-flip (§1.1) |
| Loading | Spinning holo card on the four-pastel sweep | **Taken from Option C:** the one dark "electric" screen, a Tron grid floor on grid-night, cyan glow ring, amber pixel loading bar (§2.9) |
| Labels | "Biological element", zodiac unlabelled | "ธาตุประจำราศี / Your element"; zodiac labelled "ราศีแบบตะวันตก" |
| Tags | เอาฮา · มีแหล่งอ้างอิง · ข้อมูลตัวอย่าง | Adds **ความเชื่อไทย** |

## 0. What changed from v1.0

| Area | v1.0 | v2.0 (current prototype) |
|---|---|---|
| Look | Cream "zine" paper, hard offset shadows, 2 px ink outlines | **Clean quiz-app UI** on **pastel hologram** backgrounds, 1.5 px outlines, soft glow shadows |
| Fonts | Prompt · Taviraj · Noto Sans Thai · Sriracha | **Prompt** (headings, UI) + **Anuphan** (body). Serif and script dropped |
| Accent colours | Magenta, bubblegum, yellow, tangerine, lavender | **Lilac `#C8B6F4`**, **Lime `#E6F76B`**, **Bubblegum `#F9C3DF`**, with **Hot Magenta `#E0147A`** only in the wordmark and live dot |
| Wordmark | Prompt Black Italic, "Soul" black, "Zine" magenta | Unchanged (from 01 Foundations), set as one word: **SoulZine** |
| Primary action | Black pill with yellow text | **Lime pill inside a black floating bar** |
| Social proof | Rank badge / ticker | **One-line status pill**: "● อัปเดต 148,290 วิญญาณค้นพบชาติก่อนแล้ว!" |
| Birthday input | Night-sky card with steppers | **Bubblegum card** holding a floating **holo zodiac dial** + lilac panel (− / + steppers, result bar, weekday pills) |
| Quiz answers | Tactile cards, auto-advance | **Outlined radio pills** + explicit **Previous / Next** |
| Result | Scrolling blocks on dotted spine | **Tabs** (การ์ด · ตัวตน · ไลฟ์สไตล์ · เทียบ) + **floating share bar** |

---

## 1. Concept

**SoulZine / โซลซีน**
> นิตยสารควิซยุค 90 ที่ถูกพิมพ์ด้วยริโซ่ ข้ามเวลาหลุดเข้ามาอยู่ในมือถือ

This version reads as a **polished social-media quiz campaign** (spec §25). The screens have a clean, rounded, one-thumb app skeleton, lifted by three things:
1. **Pastel hologram light:** mint, lilac, peach and aqua backgrounds, like foil catching light.
2. **Gacha / collectible-card energy:** soul card reveal, orbit rings, sparkles, rarity bar.
3. **2000s magazine voice:** the SoulZine wordmark, "ISSUE #01 · PAST-LIFE SPECIAL", giant outline lettering in the background.

### 1.1 Spec theme layer (v2.1, approved 4 Oct 2026 as "Option A")

Mockups: [SoulZine Theme Options](https://claude.ai/artifact/Q4RpWGn1q6Gq48cCDayTrW). Use boards **A · Welcome cover**, **A · Result page** and **C · Loading**. Options B (dark cyberpunk), C (flat backgrounds; only its loading screen is kept) and D (A + game stats) were not chosen.

The 3 Oct spec sets the theme: *"a magic magazine that teleports itself through time from 1998 to your phone… inspired by cyberpunk and Tron: Legacy + Ares, but the core design looks like Cosmo or Seventeen; the audience can flip the page like an e-book."* Spec §25 still asks for soft, playful colours, little gradient and no clutter, so the theme is added as a **layer on top of v2.0**, not a dark redesign:

| Theme ingredient | Treatment |
|---|---|
| **Cosmo / Seventeen cover** | Each step reads as a magazine spread: big SoulZine masthead, "ISSUE #01 · 1998 → 2026", 2–3 slanted cover lines ("ชาติก่อนคุณคือใคร?", "สีมงคลวันนี้ ข้างใน!"), page number in the corner, a small barcode on the welcome cover |
| **Cyberpunk / Tron light-lines** | Thin neon edges (1 px, soft 6–8 px glow) on the soul card, the active answer and the floating bar. Proposed tokens `--neon-cyan #3DF5FF` (Tron: Legacy) and `--neon-red #FF2A4D` (Ares). Used as **lines only**, never as fills or backgrounds |
| **Time travel 1998 → now** | The loading screen is the one dark moment: the soul card "travels" over a Tron grid floor (§2.9) |
| **E-book page flip** | Step changes (Welcome → Q1 → … → Result) use a page-turn transition. See `DesignUX.md` §2 |

Everything else stays light: pastel hologram backgrounds, lilac / lime / bubblegum, rounded pills and soft glow shadows.

### Principles

1. **ลองก่อน คิดทีหลัง — try first.** Birthday card + one button on the first screen.
2. **กวนได้ แต่ไม่ล้อใคร — absurd, never mean.**
3. **นิ้วโป้งเดียวจบ — one thumb.** Actions live in a floating bar at the bottom.
4. **แคปเดียวรู้เรื่อง — one screenshot tells it.** The soul card works on its own.
5. **เอาฮาแยกจากข้อมูลจริง — fun and facts never blur.** Lime "เอาฮา" tags vs blue "มีแหล่งอ้างอิง".

---

## 2. Colour

### 2.1 Core UI palette

| Token | Name | Hex | Job | Text on it |
|---|---|---|---|---|
| `ink` | Ink | `#141414` | Text, 1.5 px outlines, floating bars, active toggle, dial centre | White / Lime |
| `white` | White | `#FFFFFF` | Panels, pills, secondary buttons | Ink |
| `lilac` | Soul Lilac | `#C8B6F4` | Birthday panel, selected tab, quiz screen tone, card art | Ink |
| `lime` | Lime | `#E6F76B` | **Primary action** (inside the black bar), Next button, progress fill, "เอาฮา" tag, rarity text on black, zen button | Ink |
| `pink` | Bubblegum | `#F9C3DF` | Birthday card, selected answer, rarity card, card art ground | Ink |
| `magenta` | Hot Magenta | `#E0147A` | "Zine" in the wordmark, live dot, "อัปเดต" label only | — |
| `pink-pop` | Pop Pink | `#FF3E9A` | Dial needle tip, small sparkles/planet dots | — |
| `blue` | Evidence Blue | `#2B3FA8` | **Evidence-informed block only** | White |

Supporting colours: `text-2 #4A4550` (secondary text, labels) · `text-3 #3E3450` (notes on pink/lilac) · `tile #F3EFFC` (inner info tiles) · `dark-row #2A262C` (rows inside the black pop-culture panel) · `disabled #6E6784 / #B8B2C4` (disabled bar button).

### 2.2 Pastel hologram

The four hologram pastels: **Mint `#BFF3E4` · Lilac `#D8C8FF` · Peach `#FFD9CC` · Aqua `#A9E3F7`**.

```css
--holo-foil: linear-gradient(135deg, #BFF3E4, #D8C8FF 35%, #FFD9CC 65%, #A9E3F7);
```

**Foil (the hard, saturated gradient)** appears on objects only: the zodiac dial, the soul-card frame, the loading card and the Story card background.

**Screen backgrounds** are softer holo blends, each with 1–2 radial "light blooms":

| Screen | Background recipe |
|---|---|
| Welcome | peach bloom top-right + aqua bloom left over `linear-gradient(160deg, #C9F4E6, #DCD0FB 30%, #FFE0D6 58%, #D2EEFA 80%, #FFFFFF)` |
| Questions | peach bloom top-right + mint bloom lower-left over `linear-gradient(170deg, #E3D8FD, #D8C8FF 40%, #CDBDF7 70%, #BFE3F6)` (stays lilac-led) |
| Loading | **Dark, from Option C:** flat grid-night `#0C1219` + Tron grid floor + amber horizon line (§2.9) |
| Result | faint lime bloom top-left + peach bloom right over `linear-gradient(165deg, #D6F7EC, #E4DAFD 35%, #FFE3DA 65%, #D5EFFB)` |
| Story card | white dot grid over the full four-pastel sweep |

### 2.3 Background decoration (the "gacha / electro-magazine" layer)

Always `aria-hidden`, non-interactive, kept light (7–14% ink or 45–70% white):

| Element | Spec |
|---|---|
| Dot grid | `radial-gradient(1px dots)` at 16 px; ink 12–13% on light screens, white 50–55% on lilac; masked to fade out towards the bottom |
| Orbit rings | 2–3 concentric circles behind the hero object: solid white 1.5–2 px, dashed lilac/lime `3 7`, faint ink 1 px |
| Planet dots | 3.5–4.5 px circles in lime or pop pink with an ink outline, on a ring |
| Sparkles | 4-point stars, 6–9 px, lime / white / pink / lilac with a 1–1.2 px ink outline |
| Giant outline lettering | Prompt 900 italic, 150–170 px, transparent fill, 1.5 px stroke at 7–8% ink (or 45% white on lilac): "ZINE" (welcome), "Q?" (questions), "SOUL" (result) |

On the result screen the decoration is fixed and the content scrolls over it.

### 2.4 Colour roles

| Role | Treatment |
|---|---|
| One primary action | Lime pill, ink text, inside a black floating bar |
| Selected / "yours" | Bubblegum fill (answers), lilac fill (tabs), black fill (toggle, weekday) |
| Fun layer tag | Lime pill with ink outline: "เอาฮา" |
| Evidence-informed | Blue outline, blue title, blue tag "มีแหล่งอ้างอิง", blue source line |
| Illustrative data | Dashed-outline pill "ข้อมูลตัวอย่าง" |
| Thai tradition | Outline pill in `text-2` with a small ✦: "ความเชื่อไทย" (birth-day colour) |
| Archetype identity | Card art ground uses the archetype's colour (from `ArchetypeReference.md`); birthday and today's colours appear only as dots and swatches |

### 2.5 Thai birth-day colours (dots only)

Birth-day colour (สีประจำวันเกิด) from the optional weekday pill. Thai tradition, tagged "ความเชื่อไทย" (`Astrology_Colour.md` §3.1).

Sun `#E8412C` · Mon `#FFD23F` · Tue `#FF8CC0` · Wed `#3FA86B` (green only) · Thu `#FF8A3D` · Fri `#5BB8F0` · Sat `#8E5BD9`. Each weekday pill shows an 8 px dot of its colour.

### 2.6 Element colours (dots and capsules)

Fire `#FF8A3D` · Earth `#9AA84A` · Air `#8FD8EE` · Water `#6F8BEA`.

### 2.7 Today's lucky colours (สีมงคลวันนี้)

**Method:** today's weekday (device clock, no input) → the Hua Seng Hong "สีเสื้อมงคล 2569 ประจำวัน" row, with six categories: การงาน · การเงิน · ความรัก · สุขภาพ (shown as "สีเติมพลัง") · โชคลาภ · สีฉุดดวง. The **headline lucky colour** is the first โชคลาภ colour. It drives the big swatch, the Story chip and the eat-by-colour line. The full table is in `Astrology_Colour.md` §3.2. astroleaf numerology is no longer used.

Swatch tokens (design approximations; the first eight reuse the Thai-day tokens):

| สี | Token | Hex |
|---|---|---|
| แดง | `--c-red` | `#E8412C` |
| ส้ม | `--c-orange` | `#FF8A3D` |
| เหลือง | `--c-yellow` | `#FFD23F` |
| เขียว | `--c-green` | `#3FA86B` |
| ฟ้า | `--c-sky` | `#5BB8F0` |
| น้ำเงิน | `--c-navy` | `#2B3FA8` |
| ม่วง | `--c-purple` | `#8E5BD9` |
| ชมพู | `--c-pink` | `#FF8CC0` |
| น้ำตาล | `--c-brown` | `#8B5A3C` |
| ดำ | `--c-black` | `#141414` |
| ขาว | `--c-white` | `#FFFFFF` + ink outline |
| เทา | `--c-grey` | `#9A9A9A` |
| ครีม | `--c-cream` | `#F3E5C8` |

The "avoid" colour (สีฉุดดวง) is shown as a swatch with a diagonal ink strike, never in red text.

The table is for **2569**. When it expires (1 Jan 2570), replace it with Hua Seng Hong's 2570 edition. A web search is allowed only for that (spec §16).

### 2.9 Loading screen — the one dark "electric" moment (from Option C)

Colours from `SoulZine-ColourPalette.md` §5 (Tron electric set). Used **only** on the loading screen.

| Token | Hex | Job |
|---|---|---|
| `grid-night` | `#0C1219` | Background |
| `glow-cyan` | `#14CEE2` | Grid floor lines (60% alpha), glow ring around the card, pixel labels |
| `glow-halo` | `#57D5E7` | Dashed inner ring |
| `glow-amber` | `#F2C737` | Horizon line (soft glow), pixel "LOADING" bar |
| `sprint-red` | `#D72F58` | Offset shadow on the "SZ" card-back letters |
| `butter` | `#F9E37F` | "SZ" letters on the card back |

Layout (390 × 844): pixel header "SOULZINE · TRAVELLING 1998 → 2026" in cyan · a 250 px cyan glow ring with a dashed 200 px inner ring · the spinning card (holo-foil frame, ink back, "SZ" + "SOUL CARD") · Thai line "กำลังสุ่มการ์ดอดีตชาติ…" in white Prompt 800 · amber pixel bar "LOADING ▮▮▮▮▮▯▯" · Tron grid floor in perspective at the bottom with an amber horizon.

Contrast: white and cyan text only on `grid-night`. The screen lasts 1.6 s, so the change from light to dark reads as the time jump, then the result page returns to light.

### 2.8 Contrast

- Ink text on lilac, lime, bubblegum, white and all holo pastels.
- White text only on ink and evidence blue.
- Lime text only on ink (the rarity bar, the Story link pill).
- Placeholder and secondary text never lighter than `#4A4550` on light backgrounds.

---

## 3. Typography

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,600;0,700;0,800;0,900;1,900&family=Anuphan:wght@400;500;600;700&family=Silkscreen:wght@400;700&display=swap">
```

| Role | Font | Use |
|---|---|---|
| Wordmark | **Prompt 900 italic**, tracking −0.02em | "Soul" in ink + "Zine" in `#E0147A`, one word, no outline. 30 px on welcome, 26–28 px on Story |
| Display / headings | **Prompt 800–900** (upright) | Hook question, quiz questions, screen titles, card name, section titles |
| UI | **Prompt 700–800** | Buttons, pills, tabs, counters, stepper values, chart badges |
| Body | **Anuphan 400–600** | Answers, sub-lines, labels, notes, story, evidence text |
| Background lettering | Prompt 900 italic, outline only | Decoration (§2.3) |
| Pixel labels | **Silkscreen** 400/700 (Latin only) | **Loading screen only** (§2.9): "TRAVELLING 1998 → 2026", "LOADING", "SOUL CARD". Never for Thai text |

### Mobile type scale

| Token | Font | Size / line-height |
|---|---|---|
| `hook` | Prompt 800 | 34 / 1.2, centred, `text-wrap: balance` |
| `question` | Prompt 800 | 27 / 1.3 |
| `screen-title` | Prompt 900 | 28 / 1.05 |
| `qtag` | Prompt 900 | 22 ("Q.1") |
| `card-name` | Prompt 900 | 22 / 1.2 |
| `section` | Prompt 800 | 17–18 |
| `button` | Prompt 800 | 14–18 |
| `answer` | Anuphan 500 | 15 / 1.4 |
| `body` | Anuphan 400–500 | 13–15 / 1.5–1.65 |
| `label` | Anuphan 600–700 | 10–12 (English caps labels tracked 0.08–0.16em) |

Thai rules: line-height ≥ 1.4 for Thai body and ≥ 1.2 for display; no letter-spacing or caps on Thai; phrase-level line breaks; Arabic numerals; size containers for Thai first.

---

## 4. Shape, depth, space

| Token | Value |
|---|---|
| Outline | **1.5 px solid `#141414`** on pills, cards, buttons, steppers (1 px on tiny dots) |
| Radii | Pills 999 px · big cards and panels 32 px · inner panels 24 px · floating bars 28–30 px · tiles 16–20 px · soul card 24 / 18 px |
| Soft glow shadows | Birthday card `0 22px 44px rgba(142,110,220,.28)` · result panels `0 14px 34px rgba(120,100,200,.14)` · floating bars `0 16px 34px rgba(20,20,20,.28–.30)` · loading card `0 24px 50px rgba(90,60,180,.35)` |
| Hard offset shadows | None in v2.0 |
| Space | 4-point scale; gutter 20 px; section gap 14–16 px; floating bar inset 20 px from the sides, 18 px from the bottom |
| Targets | Primary buttons 56–58 px tall; round icon buttons 44–48 px; steppers 48 px; weekday pills 44 px tall (about 36 px wide, see `DesignUX.md` §7) |

---

## 5. Motion

| Move | Timing | Where |
|---|---|---|
| Float | 3 s ease-in-out loop, 6 px | Zodiac dial above the birthday card |
| Pulse | 1.6 s loop | Live dot in the status line |
| Page flip | 320 ms ease-in-out, page curls from the right edge (reverse on Back) | Between every step and question, e-book style (spec theme). Reduced motion: 150 ms cross-fade |
| Spin | 1.4 s loop (rotateY) | Loading card |
| Flip-in | 600 ms | Soul card reveal on the result screen |

All of these stop under `prefers-reduced-motion: reduce`.

---

## 6. Components

| Component | Spec |
|---|---|
| **Wordmark row** | SoulZine wordmark + "ISSUE #01 · PAST-LIFE SPECIAL" (Anuphan 700, 10 px, tracked) · TH/EN segmented pill on the right |
| **TH/EN** | Welcome: segmented pill (active = ink / white). Question and result screens: a 44–48 px round outline button showing the other language |
| **Status line** | White pill, 34 px, 1.5 px outline: pulsing magenta dot · "อัปเดต" (magenta, Prompt 800 11 px) · "148,290" (Prompt 800) · wording (Anuphan 500, grey). One line, ellipsis if long |
| **Birthday card** | 300 px bubblegum card, r 32, glow shadow; lilac and lime card edges peek from the sides |
| **Holo zodiac dial** | 104 px foil disc with 12 tick dots, dashed inner ring, ink centre ("ZODIAC" in lime + sign name), ink needle with pop-pink tip rotating to the sign; floats |
| **Stepper pill** | White, r 999, 48 px: − / label + value / + |
| **Result bar** | White r 16: element dot · sign (ราศีแบบตะวันตก) + ธาตุ · date range. Empty state = hint text |
| **Today chip** | Small white pill under the status line on Welcome: headline swatch + "สีมงคลวันนี้: ฟ้า". Needs no input, so it is visible before the birthday is set |
| **Weekday pills** | 7 × 44 px outline pills with a day-colour dot and label; selected = ink fill |
| **Floating action bar** | Ink r 28–30, 72–76 px, soft shadow. Welcome: one lime pill "ปลดล็อคอดีตชาติ →" (disabled: dashed outline "เลือกวันเกิดก่อนน้า"). Result: lime "ลง IG Story" + share and retake icon buttons with labels |
| **Question header** | 48 px round back button · "1 / 6" outline pill · round language button |
| **Progress** | "Q.1" (Prompt 900) + 6 px track (white 55%) with lime fill and ink hairline |
| **Answer pill** | Outline r 24, frosted white `rgba(255,255,255,.4)`, 18 px radio ring; selected = bubblegum + ink dot. Left-aligned, hugs content |
| **Line-art scene** | 170 × 130 ink line drawing, bottom-right of the question screen, decorative |
| **Quiz nav** | Two 56 px pills: "ย้อนกลับ" (white) · "ถัดไป" (lime; disabled = frosted with "เลือกก่อนน้า"; last = "ดูผลเลย!") |
| **Tabs** | 4 × 44 px outline pills; selected = lilac |
| **Soul card** | 272 px, 6 px holo-foil frame, white inner: ink bar "★ ULTRA RARE · 2.4%" in lime + element chip · 158 px pink art · name (Prompt 900) · EN caps · trait pills |
| **Info tiles** | `#F3EFFC` r 20 tiles: zodiac (ราศีแบบตะวันตก), element (ธาตุประจำราศี), Thai birth-day colour (tag ความเชื่อไทย; hidden if no weekday was picked) |
| **Today's colour card** | White r 24 card "สีมงคลวันนี้ · วัน___": large headline swatch + name, then a 2 × 3 grid of the six categories (swatch dots + colour names + one-line meaning), avoid colour with strike; source line "ที่มา: Hua Seng Hong · สีเสื้อมงคล 2569"; blue มีแหล่งอ้างอิง tag |
| **Pop-culture panel** | Ink r 32 panel with `#2A262C` rows: song · movie · **เที่ยวไหนดี (place to visit)** with a 📍 province line; lilac type labels, "80s → 20s" in lime |
| **Evidence panel** | White r 32 with blue outline, blue title and tag, dashed blue dividers, source lines |
| **Zen timer** | 84 px conic ring (lilac progress on `#F3EFFC`) + lime button |
| **Compare chart** | `#F7F7F2` r 32 panel; 4 rounded pill bars (lilac, bubblegum, white, lime = you) with black value badges on top and rank inside; "ข้อมูลตัวอย่าง" tag |
| **Rarity note** | Bubblegum r 28 card with ✳ + "หายากระดับ 2.4%" + sample note |
| **Recommendation slot** | Dashed outline r 28, lilac thumb, "ดูต่อ" link |
| **Story preview** | Ink scrim; 324 × 576 card with holo background + dot grid, wordmark, mini soul card, zodiac chip and today's-colour chip (headline swatch + "สีมงคลวันนี้"), ink link pill with 🎟️; lime "บันทึกรูปลงเครื่อง" button |
| **Toast** | Ink pill, lime text, above the floating bar |
| **Loading screen** | Dark, from Option C (§2.9): grid-night, Tron floor, cyan ring, spinning card, amber pixel bar |

---

## 7. Tokens (CSS)

```css
:root{
  --ink:#141414; --white:#FFFFFF; --lilac:#C8B6F4; --lime:#E6F76B; --pink:#F9C3DF;
  --magenta:#E0147A; --pink-pop:#FF3E9A; --blue:#2B3FA8;
  --text-2:#4A4550; --text-3:#3E3450; --tile:#F3EFFC; --dark-row:#2A262C;
  --holo-mint:#BFF3E4; --holo-lilac:#D8C8FF; --holo-peach:#FFD9CC; --holo-aqua:#A9E3F7;
  --holo-foil:linear-gradient(135deg,#BFF3E4,#D8C8FF 35%,#FFD9CC 65%,#A9E3F7);

  --day-sun:#E8412C; --day-mon:#FFD23F; --day-tue:#FF8CC0; --day-wed:#3FA86B;
  --day-thu:#FF8A3D; --day-fri:#5BB8F0; --day-sat:#8E5BD9;
  --el-fire:#FF8A3D; --el-earth:#9AA84A; --el-air:#8FD8EE; --el-water:#6F8BEA;

  /* today's lucky colours (Hua Seng Hong), extra to the day tokens above */
  --c-navy:#2B3FA8; --c-brown:#8B5A3C; --c-black:#141414; --c-white:#FFFFFF;
  --c-grey:#9A9A9A; --c-cream:#F3E5C8;

  /* theme layer (§1.1, Option A): lines and glows only */
  --neon-cyan:#3DF5FF; --neon-red:#FF2A4D;

  /* loading screen only (§2.9, from Option C) */
  --grid-night:#0C1219; --glow-cyan:#14CEE2; --glow-halo:#57D5E7;
  --glow-amber:#F2C737; --sprint-red:#D72F58; --butter:#F9E37F;
  --font-pixel:'Silkscreen',monospace;

  --font-display:'Prompt','Noto Sans Thai',sans-serif;
  --font-body:'Anuphan','Noto Sans Thai',system-ui,sans-serif;

  --outline:1.5px solid var(--ink);
  --r-pill:999px; --r-card:32px; --r-panel:24px; --r-bar:30px; --r-tile:20px;
  --glow-card:0 22px 44px rgba(142,110,220,.28);
  --glow-panel:0 14px 34px rgba(120,100,200,.14);
  --glow-bar:0 16px 34px rgba(20,20,20,.3);
  --gutter:20px; --target:56px; --target-min:44px;
}
```

---

## 8. Change log

| Version | Change |
|---|---|
| v0.1 | Riso zine palette; Chonburi / Mitr / Anuphan |
| v0.2 | Magazine palette + holo foil; Prompt / Taviraj / Noto / Sriracha |
| v1.0 | SoulZine name; night-sky birthday card; astroleaf lucky colours (dropped in v2.1) |
| v2.0 | Clean quiz-app UI (lilac / lime / bubblegum / ink) on pastel-hologram backgrounds; Prompt + Anuphan; one-line status; holo zodiac dial on a bubblegum card; outline answer pills with Previous / Next; tabbed result with floating share bar; gacha decoration layer (dot grid, orbits, sparkles, outline lettering); soft glow shadows |
| **v2.1** | Today's lucky colour (Hua Seng Hong) replaces astroleaf numerology; ความเชื่อไทย tag; place to visit replaces artwork; magazine + neon theme layer (**Option A, approved 4 Oct**); dark Tron loading screen from Option C; contract renamed to `SPEC-Pastlives.md` |
