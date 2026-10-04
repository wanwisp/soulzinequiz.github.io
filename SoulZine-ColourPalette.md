# SoulZine — Colour Palette (from reference images)

**One-line summary:** Flat, light backgrounds sampled from the clean app references, playful accents from the riso print and app screens, and Tron cyan/amber kept as a small dark "electric" accent.

Status: **Draft proposal for DesignSystem v2.1** — not yet approved. `DesignSystem.md` v2.0 still uses pastel hologram gradients as screen backgrounds; this file proposes flat backgrounds instead (see section 7).

Colours were sampled from the six reference images with colour clustering. Photo-heavy images (magazine covers, Tron) average out muddy, so only their clear accent hues are kept.

---

## 1. Sources

| Image | What it gave |
|---|---|
| Tron Legacy collage | Dark grid base, cyan and amber glow lines |
| "all about YOU!" magazine cover | Magazine blue, orange headline |
| YM party-personality quiz page | 90s quiz-magazine mood (pink, red, cream paper) |
| Riso carnival print | Orange, pink, yellow, navy, paper grey |
| Running app (periwinkle) | Cloud white, periwinkle, red accent, ink |
| Invoice app (mint/aqua) | Aqua mist, butter yellow, mint green |

---

## 2. Backgrounds — flat, one per screen

| Token | Name | Hex | Source |
|---|---|---|---|
| `bg-cloud` | Cloud white | `#FAF9FB` | Running app |
| `bg-paper` | Riso paper | `#EDEDEC` | Riso print |
| `bg-aqua` | Aqua mist | `#DAEDF1` | Invoice app |
| `bg-peri-mist` | Periwinkle mist | `#C5C5E6` | Running app |
| `bg-peri` | Periwinkle | `#B0B6EA` | Running app |

## 3. Accents — buttons, selected states, card art

| Token | Name | Hex | Source | Suggested job |
|---|---|---|---|---|
| `butter` | Butter yellow | `#F9E37F` | Invoice app | Primary button (replaces lime `#E6F76B`) |
| `mint-pop` | Mint pop | `#7BFCA2` | Invoice app | Progress fill, "เอาฮา" tag |
| `riso-pink` | Riso pink | `#EA9FB0` | Riso print | Selected answer (replaces bubblegum `#F9C3DF`) |
| `riso-orange` | Riso orange | `#F58029` | Riso print | Warm archetype card art |
| `tron-cyan` | Tron cyan | `#28B5CA` | Tron | Electric archetype card art |
| `sprint-red` | Sprint red | `#D72F58` | Running app | Small highlights, live dot |

## 4. Ink and deep tones — text, bars, outlines

| Token | Name | Hex | Source |
|---|---|---|---|
| `ink` | Ink | `#0B0A0A` | Running app |
| `riso-navy` | Riso navy | `#464579` | Riso print |
| `you-blue` | YOU! blue | `#096BA3` | Magazine cover |
| `grid-night` | Grid night | `#0C1219` | Tron |

## 5. Tron electric set — dark accent only

About 85% of the Tron image is near-black; the colour lives in thin glow lines (about 12% of the picture). Use it for short "electric" moments, not as a main background.

| Token | Name | Hex | Role |
|---|---|---|---|
| `grid-night` | Grid night | `#0C1219` | Dark base |
| `grid-teal` | Deep teal shadow | `#123244` | Dark panel rows |
| `circuit-teal` | Circuit teal | `#1D6A85` | Mid tone, dividers |
| `glow-cyan` | Light-cycle cyan | `#14CEE2` | Glow line, labels on dark |
| `glow-halo` | Soft cyan halo | `#57D5E7` | Secondary glow |
| `glow-amber` | Amber line | `#F2C737` | Highlight on dark |
| `glow-orange` | Burnt orange | `#CD821C` | Warm glow |

Where to use it:
1. **Loading (card pull):** grid-night background, cyan ring around the spinning card.
2. **Pop-culture panel:** grid-night panel, cyan type labels, amber "80s → 20s" tag.
3. **Card art** for neon or heat archetypes (80s neon sign, karaoke mic, night-market wok).

---

## 6. Screen mapping

| Screen | Background | Colour carried by |
|---|---|---|
| Welcome | Cloud white `#FAF9FB` | Birthday card + zodiac dial |
| Questions | Periwinkle mist `#C5C5E6` | Answer pills (riso pink when selected) |
| Loading | Grid night `#0C1219` (or Aqua mist `#DAEDF1` for a light option) | Spinning card + cyan ring |
| Result | Cloud white `#FAF9FB`, tiles in Riso paper `#EDEDEC` | Soul card, pop-culture panel |
| IG Story | Holo foil (kept from v2.0) or Aqua mist | Mini soul card |

Holo foil stays on **objects only**: zodiac dial, soul-card frame, Story card.

---

## 7. Contrast rules

- Every accent (butter, mint, riso pink, riso orange, Tron cyan, sprint red) takes **ink text**, not white.
- White text only on: Ink, Riso navy, YOU! blue, Grid night.
- Glow cyan `#14CEE2` and amber `#F2C737` work as **text only on dark bases**. On light backgrounds they are fills only, with ink text on top.
- Secondary text on light backgrounds never lighter than `#4A4550` (unchanged from v2.0).

---

## 8. CSS tokens

```css
:root{
  /* backgrounds */
  --bg-cloud:#FAF9FB; --bg-paper:#EDEDEC; --bg-aqua:#DAEDF1;
  --bg-peri-mist:#C5C5E6; --bg-peri:#B0B6EA;
  /* accents */
  --butter:#F9E37F; --mint-pop:#7BFCA2; --riso-pink:#EA9FB0;
  --riso-orange:#F58029; --tron-cyan:#28B5CA; --sprint-red:#D72F58;
  /* ink and deep */
  --ink:#0B0A0A; --riso-navy:#464579; --you-blue:#096BA3; --grid-night:#0C1219;
  /* tron electric */
  --grid-teal:#123244; --circuit-teal:#1D6A85;
  --glow-cyan:#14CEE2; --glow-halo:#57D5E7; --glow-amber:#F2C737; --glow-orange:#CD821C;
}
```

---

## 9. Open decisions

| # | Decision | Proposal |
|---|---|---|
| 1 | Flat backgrounds vs v2.0 holo gradient backgrounds | Flat; holo foil on objects only |
| 2 | Replace lime `#E6F76B` with butter `#F9E37F` for the primary button | Yes |
| 3 | Replace bubblegum `#F9C3DF` with riso pink `#EA9FB0` for selected states | Optional — riso pink is warmer and more "print" |
| 4 | Loading screen dark (Tron) or light (aqua) | Dark, as the one electric moment |
