# ArchetypeReference.md

**Status:** DRAFT v2 (3 Oct 2026) — Phase 1 deliverable, pending review and approval per `SPEC-Pastlives.md Section 30. v2 rebalances the scoring (Section 3), adds the result system (Section 5A) and lists the review decisions (Section 7).
**Do not build the website from this file until it is approved.**

This file is subordinate to `SPEC-Pastlives.md`. If anything here contradicts that spec, the spec wins.

---

## 0. How to read this file

This file contains everything needed to define the quiz-side of the product before any code is written:

1. The 6 scenario questions (Thai + English) selected for the first version.
2. The full deterministic scoring framework (30 archetypes, scoring matrix, tie-break rule).
3. The complete 30-archetype system (all 19 required fields each, per `SPECFinal.md` Section 7).
4. How the birthday layer (zodiac / element / Thai day colour / lucky colour) overlays the Soul Dashboard without touching the archetype score.
5. A cross-archetype summary of the future recommendation/affiliate direction.

**Two honesty flags, both intentional and both per the spec's "do not search the web" instruction for this task:**

- **Thai copy flag:** All Thai copy below (question text, archetype names, one-liners) is written to be natural and contemporary, not a literal translation — but it is a first pass by a non-native drafting process. It should get a native-speaker tone/slang-currency pass during `DesignLanguage.md` before being treated as final. This is a *process* flag, not a placeholder-content flag — the structure and intent are final, the exact wording may be refined.
- **Pop-culture flag:** Section 4's song/movie/art picks are draft creative placeholders chosen from general knowledge to establish the *shape* of each match (decade, mood, Thai/non-Thai balance). They are explicitly **not yet verified** against the locked sources in `SPECFinal.md` Section 20 (Apple Music TH playlist, Rolling Stone list, IMDb chart, Top of Art). That verification pass happens later, under the spec's "pop-culture search exception."

---

## 1. Design Principles Recap

- 30 archetypes, each a distinct "vibe," not a clinical type.
- Each archetype is either a **living** or **non-living** past-life entity (mix of both, per Section 7).
- No archetype is medicalized, stigmatizing, or an insult (checked against the spec's banned-label list).
- Every archetype must be independently reachable as a quiz result. Verified by simulation (Section 3.5).
- Birthday-derived zodiac/colour/element are **never** part of the quiz score — they are a separate overlay (Section 5).

### Research dimension glossary (used throughout)

| Dimension | What it signals |
|---|---|
| `spontaneity` | Impulsive vs. planned decision style |
| `curiosity` | Drawn to novelty, exploration of ideas/objects |
| `social_energy` | Prefers group stimulation vs. solitude |
| `creativity` | Expressive, generative, likes making things |
| `stability` | Values routine, reliability, low chaos |
| `exploration` | Physically/mentally wanders, seeks new territory |
| `nostalgia` | Emotionally drawn to the past, memory-keeping |
| `wellness_interest` | Receptive to light self-care / mindfulness framing |
| `pop_culture_interest` | Engagement with music/film/art/internet culture |
| `food_curiosity` | Motivated by taste, snacking, food-seeking behaviour |

These are **entertainment-flavoured research tags**, not validated psychometric scales (per Section 7).

---

## 2. The 6 Quiz Questions

Per your decision, this build uses **6 questions**: the 4 flagship "urban Thai scenario" examples from Section 6B plus 2 more drawn from that section's additional pool, expanded to 5 answer options each for scoring-matrix symmetry (30 answer-slots total = 1 unique "home" archetype per answer-slot, see Section 3).

> **Copy note:** the app (`app/js/data-questions.js`) already uses slightly punchier Thai wording for some questions and answers (e.g. Q1 "ฝนเทลงมากลางสยาม ร่มก็ไม่มี ทำไงดี?"), in line with `DesignLanguage.md`. Meaning and scoring are identical. Treat the app wording as the newer draft for the Thai-naturalness pass.

Each question below lists: Thai copy, English copy, 5 answers, and the research dimension pairing it's designed to measure. None of the answers name a personality trait directly — they're all indirect behavioural choices, per Section 9's instruction to avoid "Are you adventurous?"-style questions.

---

### Q1 — Monsoon at Siam Square
**Measures:** `spontaneity` vs. `stability` (risk/impulse response to a sudden disruption)

**TH:** ฝนตกกะทันหันที่สยามสแควร์ เธอจะทำไงดี?
**EN:** It suddenly starts pouring at Siam Square. What do you do?

| # | Thai | English | Home Archetype |
|---|---|---|---|
| A | วิ่งลุยฝนไปหมูกระทะทันที | Make a run for it — mookata is calling | ARCHETYPE_01 |
| B | ยืนใต้กันสาด เปิดเพลงอินดี้ฟังเหงาๆ | Stand under the awning, put on something indie and moody | ARCHETYPE_02 |
| C | ซื้อร่มเซเว่นคันที่ 18 ของชีวิต | Buy your 18th 7-Eleven umbrella, just in case | ARCHETYPE_03 |
| D | หลบเข้าร้านข้างทาง ทำเป็นเดินดูของ | Duck into the nearest shop and pretend to browse | ARCHETYPE_04 |
| E | กระโดดเล่นแอ่งน้ำเหมือนไม่มีอะไรเกิดขึ้น | Start jumping in puddles like nothing's wrong | ARCHETYPE_05 |

---

### Q2 — Japanese Café Object
**Measures:** `stability` vs. `creativity` (self-concept: how you see your role/usefulness)

**TH:** ถ้าเธอคือของชิ้นหนึ่งในคาเฟ่ญี่ปุ่นสุดมินิมอล เธอจะเป็นอะไร?
**EN:** If you were an object sitting in a minimalist Japanese café, which one are you?

| # | Thai | English | Home Archetype |
|---|---|---|---|
| A | ไส้เดือนใต้กระถางต้นไม้ริมหน้าต่าง | The earthworm quietly working in the windowsill planter | ARCHETYPE_06 |
| B | ฟองมัทฉะที่ค่อยๆ จมลงในแก้ว | The matcha foam slowly sinking into the glass | ARCHETYPE_07 |
| C | แผ่นรองแก้วคอร์กที่ทุกคนพึ่งพาได้ | The cork coaster everyone quietly relies on | ARCHETYPE_08 |
| D | ต้นอ่อนดื้อๆ บนโต๊ะที่ไม่ยอมเหี่ยว | The stubborn little desk sprout that refuses to wilt | ARCHETYPE_09 |
| E | ไม้คนกาแฟที่ชิลกับทุกสถานการณ์ | The wooden stir stick, unbothered by everything | ARCHETYPE_10 |

---

### Q3 — Asok 99-Minute Traffic Jam
**Measures:** `social_energy` vs. `wellness_interest` (how you cope with forced stillness)

**TH:** ติดแหง็กบนถนนอโศก 99 นาที เธอทำอะไรในหัว?
**EN:** Stuck in a 99-minute jam on Asok Road. What's happening in your head?

| # | Thai | English | Home Archetype |
|---|---|---|---|
| A | ซ้อมท่าเต้นยุค 90 ในใจแบบจริงจัง | Seriously rehearsing a 90s dance routine in your head | ARCHETYPE_11 |
| B | เข้าสมาธินิ่งสงบแบบไม่แคร์รถติด | Slip into a calm meditative trance, unbothered by the jam | ARCHETYPE_12 |
| C | จ้องกระจกมองหลัง สังเกตทุกคนรอบข้าง | Stare into the rearview mirror, quietly narrating everyone around you | ARCHETYPE_13 |
| D | ไถรูปเก่าในมือถือแบบไม่มีจุดหมาย | Aimlessly scroll through old photos on your phone | ARCHETYPE_14 |
| E | ร้องเพลงเสียงดังฟังเต็มคันแบบไม่แคร์สายตาใคร | Sing loudly at full volume, not caring who sees | ARCHETYPE_15 |

---

### Q4 — 2:00 AM Cravings
**Measures:** `nostalgia` vs. `food_curiosity` (self-soothing / comfort style)

**TH:** ตีสองแล้ว หิวจนนอนไม่หลับ เธอทำยังไง?
**EN:** It's 2 AM and hunger just woke you up. What now?

| # | Thai | English | Home Archetype |
|---|---|---|---|
| A | ต้มมาม่ากินตอนตีสองแบบไม่สนอะไรทั้งนั้น | Cook instant noodles at 2 AM, no regrets | ARCHETYPE_16 |
| B | เปิดเพลง City Pop ยุค 80 วนไปเรื่อยๆ | Put 80s City Pop on loop instead | ARCHETYPE_17 |
| C | นึกถึงความทรงจำอายๆ เมื่อ 10 ปีก่อนแบบสุ่มๆ | Randomly relive a cringe memory from 10 years ago | ARCHETYPE_18 |
| D | หลับต่อเฉยๆ เหมือนมอสส์ชื้นๆ ที่ไม่ขยับ | Just go back to sleep, still as damp moss | ARCHETYPE_19 |
| E | เปิดตู้เย็นล่าของเหลือแบบไม่วางแผน | Raid the fridge for leftovers, no plan involved | ARCHETYPE_20 |

---

### Q5 — Unexpected Free Afternoon
**Measures:** `exploration` vs. `creativity` (how you spend unstructured time)

**TH:** จู่ๆ ก็ว่างทั้งบ่าย ไม่มีนัด ไม่มีธุระ เธอจะทำอะไร?
**EN:** You suddenly have a free afternoon — no plans, nothing to do. What do you pick?

| # | Thai | English | Home Archetype |
|---|---|---|---|
| A | ดูซีรีส์รวดจนมือถือร้อนจี๋ | Binge a whole series until your phone overheats | ARCHETYPE_21 |
| B | เดินเล่นในตลาดแบบไม่มีจุดหมาย | Wander a market with absolutely no destination | ARCHETYPE_22 |
| C | งีบตอนบ่ายทันทีแบบมืออาชีพ | Take an immediate, professional-grade nap | ARCHETYPE_23 |
| D | เริ่มงานฝีมือใหม่ที่อาจทำไม่จบ | Start a new craft project you may never finish | ARCHETYPE_24 |
| E | จัดห้องใหม่ทั้งห้องแบบไม่มีใครขอ | Reorganize your entire room, unprompted | ARCHETYPE_25 |

---

### Q6 — Place You'd Rather Disappear To
**Measures:** `social_energy` vs. `stability` (preferred environment when overwhelmed)

**TH:** ถ้าอยากหายไปจากทุกอย่างสักพัก เธอจะไปที่ไหน?
**EN:** If you wanted to disappear from everything for a while, where would you go?

| # | Thai | English | Home Archetype |
|---|---|---|---|
| A | มุมร้านหนังสือมือสองเงียบๆ | A quiet corner of a secondhand bookstore | ARCHETYPE_26 |
| B | รูฟท็อปบาร์ตอนโกลเด้นอาวร์ | A rooftop bar at golden hour | ARCHETYPE_27 |
| C | ทะเลตอนฟ้าครึ้มๆ | The ocean under a cloudy sky | ARCHETYPE_28 |
| D | ตลาดนัดกลางคืนที่เสียงดังสุดๆ | A night market at its loudest | ARCHETYPE_29 |
| E | ห่มผ้าห่มมิดหัวอยู่บนเตียงทั้งวันอาทิตย์ | Wrapped in a blanket in bed, all Sunday | ARCHETYPE_30 |

---

## 3. Scoring Framework

> **Revision v2 (3 Oct 2026) — scoring rebalanced.** A full simulation of all 15,625 possible answer sets (5⁶) against the v1 matrix showed that **7 archetypes could never win** (16 Noodle Steam, 18 Cringe Cockroach, 20 Fridge Light, 21 Overheating Phone, 25 Sticky Note, 27 Boba Pearl, 29 Night Market Wok). Results were also skewed: ARCHETYPE_01 and _02 each won about 11%, and 57% of results were settled by a "lowest ID wins" tie-break. Two causes: uneven secondary links (some archetypes received 5, others 0, and 5 links pointed back into the archetype's own question, where they could never stack), and a tie-break that always favoured low IDs. v2 fixes both. Home answers and question copy are unchanged.

### 3.1 Mechanic

- User answers all 6 questions, one answer per question.
- Each answer has exactly **one "home" archetype** (+3 points) and **two "secondary" archetypes** (+1 point each), per the matrix in Section 3.2.
- **Balance rule (v2):** every archetype receives **exactly 2 secondary links**, from **2 different questions**, and **never from its own home question**. That is 30 answers × 2 secondaries = 60 links = 30 archetypes × 2.
- Scores accumulate additively across all 6 answers into a 30-way score table.
- The archetype with the highest total wins; ties use the rule in 3.3.
- Birthday-derived data (zodiac/element/Thai day colour/lucky colour) is calculated entirely separately and **never** added to this table (Section 5).

### 3.2 Scoring Matrix (v2)

Format: `Answer → Home archetype (+3), Secondary (+1), Secondary (+1)`. Changed secondaries are marked †.

**Q1**
- A → ARCHETYPE_01 (+3), ARCHETYPE_29 (+1), ARCHETYPE_16 (+1)† — mookata run → wok, 2AM noodles (food-first)
- B → ARCHETYPE_02 (+3), ARCHETYPE_07 (+1), ARCHETYPE_28 (+1)
- C → ARCHETYPE_03 (+3), ARCHETYPE_25 (+1), ARCHETYPE_08 (+1)† — over-prepared → reliable coaster
- D → ARCHETYPE_04 (+3), ARCHETYPE_11 (+1)†, ARCHETYPE_24 (+1) — browsing a shop → cassette (retro-shop vibe)
- E → ARCHETYPE_05 (+3), ARCHETYPE_22 (+1), ARCHETYPE_27 (+1)† — puddle bouncing → bouncy boba

**Q2**
- A → ARCHETYPE_06 (+3), ARCHETYPE_19 (+1), ARCHETYPE_25 (+1)† — hard-working worm → overachieving sticky note
- B → ARCHETYPE_07 (+3), ARCHETYPE_14 (+1), ARCHETYPE_27 (+1)† — sinking foam → sinking boba (drink kin)
- C → ARCHETYPE_08 (+3), ARCHETYPE_03 (+1), ARCHETYPE_20 (+1)† — reliable household object → fridge light
- D → ARCHETYPE_09 (+3), ARCHETYPE_22 (+1), ARCHETYPE_18 (+1)† — refuses to wilt → survivor cockroach
- E → ARCHETYPE_10 (+3), ARCHETYPE_12 (+1), ARCHETYPE_23 (+1)

**Q3**
- A → ARCHETYPE_11 (+3), ARCHETYPE_17 (+1), ARCHETYPE_05 (+1)† — car-seat dancing → playful sparrow
- B → ARCHETYPE_12 (+3), ARCHETYPE_19 (+1), ARCHETYPE_09 (+1)† — calm trance → calmly stubborn sprout
- C → ARCHETYPE_13 (+3), ARCHETYPE_26 (+1), ARCHETYPE_04 (+1)
- D → ARCHETYPE_14 (+3), ARCHETYPE_02 (+1), ARCHETYPE_18 (+1)† — old photos → cringe memories
- E → ARCHETYPE_15 (+3), ARCHETYPE_29 (+1), ARCHETYPE_01 (+1)

**Q4**
- A → ARCHETYPE_16 (+3), ARCHETYPE_30 (+1), ARCHETYPE_21 (+1)† — 2AM noodles → phone glowing in bed
- B → ARCHETYPE_17 (+3), ARCHETYPE_11 (+1), ARCHETYPE_07 (+1)
- C → ARCHETYPE_18 (+3), ARCHETYPE_14 (+1), ARCHETYPE_26 (+1)
- D → ARCHETYPE_19 (+3), ARCHETYPE_12 (+1), ARCHETYPE_06 (+1)
- E → ARCHETYPE_20 (+3), ARCHETYPE_01 (+1), ARCHETYPE_24 (+1)

**Q5**
- A → ARCHETYPE_21 (+3), ARCHETYPE_15 (+1), ARCHETYPE_17 (+1)
- B → ARCHETYPE_22 (+3), ARCHETYPE_09 (+1), ARCHETYPE_04 (+1)
- C → ARCHETYPE_23 (+3), ARCHETYPE_30 (+1), ARCHETYPE_10 (+1)
- D → ARCHETYPE_24 (+3), ARCHETYPE_28 (+1), ARCHETYPE_13 (+1)
- E → ARCHETYPE_25 (+3), ARCHETYPE_03 (+1), ARCHETYPE_08 (+1)

**Q6**
- A → ARCHETYPE_26 (+3), ARCHETYPE_06 (+1), ARCHETYPE_13 (+1)
- B → ARCHETYPE_27 (+3), ARCHETYPE_15 (+1), ARCHETYPE_05 (+1)† — rooftop at golden hour → sparrow on a ledge
- C → ARCHETYPE_28 (+3), ARCHETYPE_02 (+1), ARCHETYPE_10 (+1)† — grey-sky ocean → unbothered stir stick
- D → ARCHETYPE_29 (+3), ARCHETYPE_16 (+1)†, ARCHETYPE_20 (+1)† — loud night market → noodle steam, fridge-raid hunger
- E → ARCHETYPE_30 (+3), ARCHETYPE_21 (+1)†, ARCHETYPE_23 (+1) — blanket Sunday → overheating phone in bed

### 3.3 Tie-Breaking Rule (v2)

1. Collect every archetype tied on the top score and sort them by ARCHETYPE_ID.
2. Let **S = sum of the chosen answer positions** (A=0, B=1, C=2, D=3, E=4) across all 6 questions.
3. The winner is the tied archetype at index **S mod (number of tied archetypes)**.

It is fully deterministic (same answers → same archetype, Section 8) but no longer favours low IDs. Under the balanced matrix, the winner is always one of the user's own home picks, because a non-picked archetype can collect at most 2 points.

### 3.4 Minimum / Maximum Possible Scores (v2)

- Every run gives exactly 6 distinct archetypes a +3 home hit.
- **Minimum winning score:** 3. **Maximum for any archetype:** 5 (home +3, plus both of its secondaries). Every archetype can reach 5.
- An archetype that was not picked as a home answer scores at most 2, so it can never win.

### 3.5 Simulation results (all 15,625 answer sets, equal-probability answers)

| Metric | v1 | v2 |
|---|---|---|
| Archetypes that can never win | 7 | **0** |
| Share of results per archetype (ideal 3.33%) | 0% – 11.1% | **2.69% – 4.01%** |
| Winning score spread | 3: 15% · 4: 62% · 5: 22% · 6: 2% | 3: 9% · 4: 70% · 5: 21% |
| Results settled by tie-break | 57% (always lowest ID) | 61% (fair rotation) |

The tie-break still settles most results, because 6 picks across 30 outcomes nearly always produce 2–3 tied home picks. That is expected. The rotation keeps it fair, and real users won't answer uniformly, so their answer patterns will show through. If fewer ties are wanted later, give one or two "signature" questions a +4 home instead of +3. That change would need a re-simulation.

### 3.6 Twin questions (v3, 4 Oct 2026)

The live quiz has **12 questions in 6 twin pairs**. Each play shows one random twin per group (`question.md` §0). Each group's twin **copies the bonus points of its partner** in the §3.2 matrix, answer letter by answer letter:

| Group | Twin pair | Uses §3.2 row |
|---|---|---|
| G1 | Q1 Siam rain · Q8 Concert tickets | Q1 |
| G2 | Q2 Japanese café · Q9 Group project | Q2 |
| G3 | Q3 Asok jam · Q11 Friend's wedding | Q3 |
| G4 | Q4 2 AM cravings · Q13 Street food | Q4 |
| G5 | Q5 Free afternoon · Q15 Long weekend | Q5 |
| G6 | Q6 Disappear to · Q16 Birthday plan | Q6 |

Example: Q13 answer A (มาม่าผัดผงกะหรี่) scores exactly like Q4 answer A: ARCHETYPE_16 +3, ARCHETYPE_30 +1, ARCHETYPE_21 +1.

- **Balance:** the points a player can collect are identical whichever twins appear, so §3.5 holds for all 64 quizzes (every archetype reachable, 2.69%–4.01% each). No re-simulation needed.
- **Tie-break:** unchanged (§3.3). It uses answer letters, which mean the same in both twins.
- **Theme fit:** most inherited bonus links suit the new twin's answers too (e.g. Q9-D "won't quit" → Pavement Weed + Cockroach; Q16-D night-market birthday → Noodle Steam + Fridge Light). A few are looser, e.g. Q8-D "only here for the seat map" → Cassette + DIY Kit. Fine for scoring; review in the Thai copy pass if wanted.
- **Reserves** Q7, Q10, Q12, Q14 can swap in for their group's twin on the same terms.

---

## 4. The 30 Archetypes

Each entry below covers all fields required by `SPECFinal.md` Section 7 (items 1–19), reordered slightly for readability but not renamed.

---

### ARCHETYPE_01 — The Reckless Mookata Flame
- **Thai Name:** เปลวไฟหมูกระทะสายลุย
- **Entity Type:** Non-living (the flame under a mookata grill)
- **Core Vibe:** "Chases the next good moment before thinking twice — heat first, questions later."
- **Descriptors:** impulsive, hungry-for-life, warm, magnetic
- **Research Dimensions:** spontaneity (high), social_energy (high), food_curiosity (high)
- **Past-Life Story:** You were the flame under a packed mookata table on a Friday night — always the first thing lit, the reason everyone gathered around, gone the moment the coals cooled but somehow the whole night was built around you.
- **Character Visual Direction:** Small, stylized cartoon flame character with a cheeky grin, warm orange-red gradient, slightly chaotic motion lines, sitting on a mini grill icon.
- **Zodiac Vibe Pairing:** Aries — bold, first-mover, acts before overthinking.
- **Lucky Colour Direction:** Charcoal red-orange.
- **Food/Colour Direction:** Grilled meats, chili oil, tom yum — anything with visible heat.
- **Wellness Direction:** Short "burn it off" content — quick stretch or dance-break reels, not slow stillness.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing, done *after* the food arrives, notifications off — a deliberate pause before diving in.
- **Pop-Culture Identity (draft):** Song — an upbeat 2000s Thai pop-rock anthem; Movie — a fast-paced ensemble hangout comedy; Art — bold pop-art with saturated warm colours; Decade lean — 2000s energy.
- **Shareable One-Liner:** "Apparently I was a mookata flame. No wonder I show up first and leave last."
- **Research Tags:** `["impulsive", "food-curious", "social", "high-energy"]`
- **Recommendation/Affiliate Direction (future):** Street-food delivery apps, BBQ/hot-pot group deals, spontaneous weekend event listings.

---

### ARCHETYPE_02 — The Sentimental Awning Raindrop
- **Thai Name:** หยดน้ำใต้กันสาดสายเหงา
- **Entity Type:** Non-living (a single raindrop clinging to an awning edge)
- **Core Vibe:** "Feels everything a little too much, and secretly loves it."
- **Descriptors:** dreamy, sentimental, reflective, quietly emotional
- **Research Dimensions:** nostalgia (high), wellness_interest (medium), creativity (medium)
- **Past-Life Story:** You were the one raindrop that didn't fall right away — hanging off a café awning a little longer than the rest, watching the street, in no rush to hit the ground.
- **Character Visual Direction:** Soft, translucent teardrop shape with a gentle gradient (blue-grey to lilac), tiny reflective highlight, dangling from a minimal awning line-icon.
- **Zodiac Vibe Pairing:** Pisces — dreamy, emotionally porous, drawn to mood over logic.
- **Lucky Colour Direction:** Dusty blue-grey.
- **Food/Colour Direction:** Something warm and blue-grey-adjacent — taro, blue pea tea, oat milk drinks.
- **Wellness Direction:** Journaling prompts, mood-tracking, rainy-day playlists.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing while actually watching rain or water move, notifications off.
- **Pop-Culture Identity (draft):** Song — a wistful late-90s indie/dream-pop track; Movie — a quiet slice-of-life Japanese or Thai indie film; Art — soft impressionist rain-on-glass style painting; Decade lean — late 1990s.
- **Shareable One-Liner:** "I was a raindrop that refused to fall on time. Explains a lot."
- **Research Tags:** `["nostalgic", "sensitive", "reflective", "wellness-light"]`
- **Recommendation/Affiliate Direction (future):** Journaling apps, ambient/lofi playlists, cozy café discovery content.

---

### ARCHETYPE_03 — The 18th 7-Eleven Umbrella
- **Thai Name:** ร่มเซเว่นคันที่ 18 ของชีวิต
- **Entity Type:** Non-living (a convenience-store umbrella)
- **Core Vibe:** "Always over-prepared, slightly embarrassed about it, never actually wrong to be."
- **Descriptors:** prepared, reliable, a little anxious, quietly practical
- **Research Dimensions:** stability (high), exploration (low), food_curiosity (low)
- **Past-Life Story:** You were bought in a hurry, mid-downpour, joining a graveyard of seventeen identical umbrellas at home — useful exactly once, kept forever "just in case."
- **Character Visual Direction:** Bright convenience-store green-orange umbrella, slightly bent rib, plastic wrapper still half-on, endearing not sad.
- **Zodiac Vibe Pairing:** Virgo — detail-oriented, prepares for problems before they happen.
- **Lucky Colour Direction:** Convenience-store green.
- **Food/Colour Direction:** Something reliably good — a go-to comfort dish you order the same way every time.
- **Wellness Direction:** Routine-building content, checklist-style planning tools.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing before checking tomorrow's weather, notifications off.
- **Pop-Culture Identity (draft):** Song — a steady, mid-tempo 2010s Thai pop track; Movie — a dependable comfort-watch rom-com; Art — clean geometric minimalism; Decade lean — 2010s.
- **Shareable One-Liner:** "I was the umbrella you buy every single time you forget one. I show up. That's my whole personality."
- **Research Tags:** `["prepared", "reliable", "low-risk", "routine-oriented"]`
- **Recommendation/Affiliate Direction (future):** Everyday-carry gadgets, subscription/organizer apps, weather-and-commute utility content.

---

### ARCHETYPE_04 — The Window-Shopping Moth
- **Thai Name:** ผีเสื้อกลางคืนสายส่องของ
- **Entity Type:** Living (a moth drawn to a lit shopfront)
- **Core Vibe:** "Doesn't need to buy anything. Just needs to look at everything."
- **Descriptors:** curious, easily distracted, exploratory, non-committal
- **Research Dimensions:** curiosity (high), exploration (high), spontaneity (medium)
- **Past-Life Story:** You were the moth circling a boutique's front light at 11 PM, not because you needed anything inside — just because it was glowing and you had nowhere else to be.
- **Character Visual Direction:** Soft grey-lavender moth with delicate patterned wings, mid-flutter near a warm shop-window glow.
- **Zodiac Vibe Pairing:** Gemini — curious, flits between interests, hard to pin down.
- **Lucky Colour Direction:** Silver-lavender.
- **Food/Colour Direction:** Small-bite tasting menus, food-market sampling culture.
- **Wellness Direction:** "New things to try" content — curated discovery lists over deep routines.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing before opening any shopping app, notifications off.
- **Pop-Culture Identity (draft):** Song — an eclectic, genre-blending 2020s track; Movie — a visually rich film about wandering a city at night; Art — surreal collage work; Decade lean — 2020s.
- **Shareable One-Liner:** "I was a moth circling a shop window. I still don't need anything in there. I just like looking."
- **Research Tags:** `["curious", "browser-not-buyer", "exploratory", "novelty-seeking"]`
- **Recommendation/Affiliate Direction (future):** Discovery-style content (new openings, "hidden gem" lists), window-shopping-friendly marketplaces, no-pressure browsing experiences.

---

### ARCHETYPE_05 — The Puddle-Jumping Sparrow
- **Thai Name:** นกกระจอกสายกระโดดแอ่งน้ำ
- **Entity Type:** Living (a small urban sparrow)
- **Core Vibe:** "Finds the fun in whatever's already happening, no matter how small."
- **Descriptors:** playful, unbothered, adaptable, lighthearted
- **Research Dimensions:** spontaneity (high), social_energy (medium), exploration (medium)
- **Past-Life Story:** While everyone else complained about the rain, you were the sparrow hopping between puddles on the pavement, treating a minor inconvenience like a personal playground.
- **Character Visual Direction:** Small round sparrow, mid-hop, puffed feathers, cheerful expression, tiny water splash beneath it.
- **Zodiac Vibe Pairing:** Sagittarius — playful, optimistic, makes the best of any situation.
- **Lucky Colour Direction:** Sky blue-brown.
- **Food/Colour Direction:** Street snacks eaten on the move — skewers, fruit cups, anything portable.
- **Wellness Direction:** Playful movement content — short outdoor walks reframed as fun, not exercise.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing right after doing something silly on purpose, notifications off.
- **Pop-Culture Identity (draft):** Song — an upbeat, bright 2010s Thai indie-pop single; Movie — a lighthearted animated feature; Art — playful folk-art style painting; Decade lean — 2010s.
- **Shareable One-Liner:** "I was a sparrow who thought puddles were the best part of the rain. Still do."
- **Research Tags:** `["playful", "adaptable", "low-stress", "spontaneous"]`
- **Recommendation/Affiliate Direction (future):** Casual outdoor activity content, portable snack brands, "make today fun" micro-adventure suggestions.

---

### ARCHETYPE_06 — The Scholarly Earthworm
- **Thai Name:** ไส้เดือนนักปราชญ์ใต้ดิน
- **Entity Type:** Living (an earthworm)
- **Core Vibe:** "Quietly does the unglamorous work that makes everything else grow."
- **Descriptors:** humble, hardworking, unshowy, essential
- **Research Dimensions:** stability (high), wellness_interest (medium), creativity (low)
- **Past-Life Story:** No one at the garden party noticed you, but every healthy plant on that table owed something to the quiet work you did underground, out of sight, without needing credit.
- **Character Visual Direction:** Soft terracotta-brown earthworm with round glasses, tiny and unbothered, nestled among roots and soil in a warm cross-section illustration.
- **Zodiac Vibe Pairing:** Capricorn — patient, disciplined, works steadily without needing applause.
- **Lucky Colour Direction:** Terracotta / soil brown.
- **Food/Colour Direction:** Earthy, grounding foods — root vegetables, mushrooms, slow-cooked stews.
- **Wellness Direction:** Grounding practices — barefoot-on-grass moments, slow mornings, unglamorous self-care.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing, feet flat on the floor, notifications off — a literal grounding pause.
- **Pop-Culture Identity (draft):** Song — a gentle acoustic folk track; Movie — a slow, contemplative nature-adjacent film (in the spirit of *My Neighbor Totoro*); Art — a detailed botanical illustration; Decade lean — 1980s-1990s warmth.
- **Shareable One-Liner:** "I was an earthworm. Underrated, underground, and the reason anything grew at all."
- **Research Tags:** `["humble", "hardworking", "grounded", "unglamorous"]`
- **Recommendation/Affiliate Direction (future):** Gardening/plant-care content, slow-living and minimalism brands, grounding/mindfulness tools.

---

### ARCHETYPE_07 — The Sinking Matcha Foam
- **Thai Name:** ฟองมัทฉะที่ค่อยๆ จมลงในแก้ว
- **Entity Type:** Non-living (foam on a matcha drink)
- **Core Vibe:** "Looks calm on the surface. There is a lot happening underneath."
- **Descriptors:** thoughtful, overthinking, sensitive, quietly intense
- **Research Dimensions:** wellness_interest (high), creativity (high), nostalgia (medium)
- **Past-Life Story:** You sat prettily on top of an iced matcha for exactly ninety seconds, looking composed, while slowly and inevitably dissolving into everything happening below.
- **Character Visual Direction:** Pale matcha-green foam texture with a soft face, slowly merging into a green gradient glass, gentle bubbles.
- **Zodiac Vibe Pairing:** Cancer — emotionally deep, moody in a soft way, feels everything.
- **Lucky Colour Direction:** Matcha green.
- **Food/Colour Direction:** Matcha, pandan, green tea desserts, anything delicately bitter-sweet.
- **Wellness Direction:** Overthinking-management content — brain-dump journaling, "thoughts before bed" prompts.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing before checking your phone in the morning, notifications off.
- **Pop-Culture Identity (draft):** Song — a soft, introspective 2020s bedroom-pop track; Movie — an emotionally quiet coming-of-age film; Art — a delicate watercolour piece; Decade lean — 2020s.
- **Shareable One-Liner:** "I was matcha foam. Calm on top, overthinking the whole way down."
- **Research Tags:** `["overthinker", "sensitive", "wellness-curious", "quietly-creative"]`
- **Recommendation/Affiliate Direction (future):** Journaling apps, calming tea/beverage brands, gentle mental-wellness content.

---

### ARCHETYPE_08 — The Reliable Cork Coaster
- **Thai Name:** แผ่นรองแก้วคอร์กที่ทุกคนพึ่งพาได้
- **Entity Type:** Non-living (a cork coaster)
- **Core Vibe:** "Doesn't need the spotlight. Just quietly prevents everyone else's disasters."
- **Descriptors:** dependable, understated, steady, supportive
- **Research Dimensions:** stability (high), social_energy (medium)
- **Past-Life Story:** Every glass on that table left a ring on the wood except the one sitting on you — nobody thanked you, but nobody had to clean up either.
- **Character Visual Direction:** Round, warm-brown cork texture with a subtle smiling grain pattern, sitting sturdily under a glass icon.
- **Zodiac Vibe Pairing:** Taurus — steady, dependable, quietly resistant to chaos.
- **Lucky Colour Direction:** Warm cork brown.
- **Food/Colour Direction:** Comfort foods that never disappoint — congee, warm soups, familiar home-style dishes.
- **Wellness Direction:** Low-effort self-care — "good enough" routines, permission to not overachieve.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing while doing absolutely nothing else, notifications off.
- **Pop-Culture Identity (draft):** Song — a warm, mellow soul/R&B track; Movie — a dependable ensemble drama; Art — a still-life painting; Decade lean — 1990s.
- **Shareable One-Liner:** "I was a cork coaster. Nobody notices me until I'm not there."
- **Research Tags:** `["dependable", "low-key", "supportive", "steady"]`
- **Recommendation/Affiliate Direction (future):** Home-comfort goods, "quiet reliability" service brands (insurance-adjacent lifestyle content, low-key subscription tools).

---

### ARCHETYPE_09 — The Stubborn Desk Sprout
- **Thai Name:** ต้นอ่อนบนโต๊ะทำงานที่ไม่ยอมเหี่ยว
- **Entity Type:** Living (a small desk plant)
- **Core Vibe:** "Nobody's taking care of it properly, and it's still somehow thriving."
- **Descriptors:** resilient, quietly hopeful, growth-minded, stubborn
- **Research Dimensions:** stability (high), exploration (low), wellness_interest (medium)
- **Past-Life Story:** Watered irregularly, given no direct sunlight, forgotten for entire weekends — and yet you kept pushing out one new leaf a month out of pure spite.
- **Character Visual Direction:** Small bright-green sprout in a tiny office-desk pot, slightly tilted toward the only window, defiant posture.
- **Zodiac Vibe Pairing:** Taurus — grounded, growth-oriented, patient under pressure.
- **Lucky Colour Direction:** Fresh sprout green.
- **Food/Colour Direction:** Fresh greens, sprouted grains, simple raw vegetables.
- **Wellness Direction:** Small-wins tracking — habit streaks, "just one thing today" style content.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing near a window or any patch of daylight, notifications off.
- **Pop-Culture Identity (draft):** Song — a hopeful, mid-tempo Thai pop track; Movie — an underdog-perseveres story; Art — botanical line art; Decade lean — 2000s.
- **Shareable One-Liner:** "I was the desk plant nobody waters properly. I'm still here. I'm thriving out of spite."
- **Research Tags:** `["resilient", "growth-minded", "low-maintenance", "quietly-hopeful"]`
- **Recommendation/Affiliate Direction (future):** Low-maintenance plant brands, habit-tracking apps, small-office lifestyle goods.

---

### ARCHETYPE_10 — The Unbothered Wooden Stir Stick
- **Thai Name:** ไม้คนกาแฟที่ชิลกับทุกสถานการณ์
- **Entity Type:** Non-living (a coffee stir stick)
- **Core Vibe:** "Goes wherever the situation goes. Doesn't fight it."
- **Descriptors:** easygoing, low-maintenance, adaptable, calm
- **Research Dimensions:** stability (high), social_energy (low), spontaneity (low)
- **Past-Life Story:** You got stirred through three different drink orders before anyone remembered to throw you away, and honestly, you didn't mind any of it.
- **Character Visual Direction:** Simple pale wood stick with a relaxed, half-lidded-eyes doodle face, slightly bent from stirring, calm expression.
- **Zodiac Vibe Pairing:** Libra — easygoing, keeps things balanced, avoids friction.
- **Lucky Colour Direction:** Natural wood beige.
- **Food/Colour Direction:** Simple, unfussy foods — plain rice dishes, mild flavours, nothing overwhelming.
- **Wellness Direction:** "Do less" content — permission-to-rest messaging, low-pressure routines.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing, sitting anywhere convenient, notifications off — no special setup required.
- **Pop-Culture Identity (draft):** Song — a mellow, unhurried lo-fi track; Movie — a slow-paced feel-good film; Art — minimalist line drawing; Decade lean — 2010s.
- **Shareable One-Liner:** "I was a coffee stir stick. Whatever happens, happens. I'm chill about it."
- **Research Tags:** `["easygoing", "low-maintenance", "adaptable", "calm"]`
- **Recommendation/Affiliate Direction (future):** Minimalist lifestyle content, "no-fuss" product lines, low-commitment leisure activities.

---

### ARCHETYPE_11 — The 90s Cassette Tape Ribbon
- **Thai Name:** เทปคาสเซ็ตต์ม้วนโปรดยุค 90
- **Entity Type:** Non-living (magnetic tape ribbon)
- **Core Vibe:** "Always ready to perform for an audience of one."
- **Descriptors:** nostalgic, theatrical, devoted, a little dramatic
- **Research Dimensions:** nostalgia (high), pop_culture_interest (high), creativity (high)
- **Past-Life Story:** You were rewound by pencil more times than anyone could count, played until you warped slightly, and somehow that one warble in the chorus became someone's favourite part.
- **Character Visual Direction:** Warm brown tape ribbon with a hot-pink highlight, looping into a playful spiral, retro cassette-shell background.
- **Zodiac Vibe Pairing:** Leo — loves an audience, performs even when no one's officially watching.
- **Lucky Colour Direction:** Magnetic brown with a pink highlight.
- **Food/Colour Direction:** Retro diner food — milkshakes, classic fries, nostalgic comfort snacks.
- **Wellness Direction:** Nostalgia-as-comfort content — throwback playlists, "put on your favourite old song" prompts.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing with one favourite old song playing quietly, notifications off.
- **Pop-Culture Identity (draft):** Song — Sixpence None the Richer, "Kiss Me" (1999); Movie — *My Neighbor Totoro* (1988); Art — retro pop collage; Decade lean — late 1980s–1990s.
- **Shareable One-Liner:** "I was a cassette tape. Rewound constantly. Still somebody's favourite."
- **Research Tags:** `["nostalgic", "performer", "sentimental", "pop-culture-lover"]`
- **Recommendation/Affiliate Direction (future):** Retro/vinyl-cassette-aesthetic merch, throwback playlist curation, nostalgia-themed events.

---

### ARCHETYPE_12 — The Unbothered Soi Cat
- **Thai Name:** แมวจรสายชิลสุดขีด
- **Entity Type:** Living (a neighbourhood soi cat)
- **Core Vibe:** "Completely unimpressed by chaos it did not choose to be part of."
- **Descriptors:** independent, calm, observant, self-possessed
- **Research Dimensions:** stability (high), social_energy (low), exploration (medium)
- **Past-Life Story:** Motorbikes, monsoons, market noise, three different households feeding you under three different names — none of it fazed you. You just found a warm patch of concrete and claimed it.
- **Character Visual Direction:** Scruffy but content orange-and-white street cat, half-closed eyes, draped over a motorbike seat or shop step.
- **Zodiac Vibe Pairing:** Aquarius — independent, does things on its own terms, quietly unconventional.
- **Lucky Colour Direction:** Charcoal grey with warm orange patches.
- **Food/Colour Direction:** Simple, satisfying street food — grilled fish, rice, whatever's on hand.
- **Wellness Direction:** Boundary-setting content — "you don't owe anyone your energy" style messaging.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing in whatever spot feels warmest, notifications off.
- **Pop-Culture Identity (draft):** Song — a laid-back 2010s Thai indie track; Movie — a quiet observational documentary-style film; Art — a candid street-photography-style piece; Decade lean — 2010s.
- **Shareable One-Liner:** "I was a soi cat. Nothing about your chaos is my problem."
- **Research Tags:** `["independent", "calm", "low-stress", "self-possessed"]`
- **Recommendation/Affiliate Direction (future):** Pet-adjacent lifestyle content, minimalist urban-living brands, "boundaries and self-care" content.

---

### ARCHETYPE_13 — The Dashboard Bobblehead
- **Thai Name:** ตุ๊กตาโยกหน้ารถสายสังเกตการณ์
- **Entity Type:** Non-living (a car dashboard bobblehead figurine)
- **Core Vibe:** "Watches everything, comments on nothing out loud, misses no detail."
- **Descriptors:** observant, witty, detached, quietly perceptive
- **Research Dimensions:** curiosity (medium), creativity (medium), social_energy (low)
- **Past-Life Story:** Bolted to the same dashboard for years, nodding along to every argument, every karaoke session, every silent commute — you saw everything and told no one.
- **Character Visual Direction:** Small round-headed figurine on a spring, mid-nod, painted with an amused, knowing expression.
- **Zodiac Vibe Pairing:** Virgo — analytical, detail-noticing, quietly critical in a fond way.
- **Lucky Colour Direction:** Mustard yellow.
- **Food/Colour Direction:** Snackable car-ride food — chips, dried mango, sunflower seeds.
- **Wellness Direction:** People-watching as mindfulness — "notice three things" grounding exercises.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing while watching the world through a window, notifications off.
- **Pop-Culture Identity (draft):** Song — a quirky, observational 2000s indie-pop track; Movie — a witty ensemble road-trip comedy; Art — a caricature-style illustration; Decade lean — 2000s.
- **Shareable One-Liner:** "I was a dashboard bobblehead. I saw everything. I'm keeping it to myself."
- **Research Tags:** `["observant", "witty", "detail-oriented", "low-drama"]`
- **Recommendation/Affiliate Direction (future):** Car-ride/commute content, people-watching-friendly café recommendations, quirky desk-toy merch.

---

### ARCHETYPE_14 — The Overflowing Camera Roll
- **Thai Name:** อัลบั้มรูปในมือถือที่ไม่เคยลบ
- **Entity Type:** Non-living (a phone's photo library)
- **Core Vibe:** "Keeps everything, just in case it matters later. It usually does."
- **Descriptors:** sentimental, archival, nostalgic, detail-loving
- **Research Dimensions:** nostalgia (high), creativity (medium), pop_culture_interest (medium)
- **Past-Life Story:** 40,000 photos, half of them blurry, most of them screenshots you meant to delete — but somewhere in there is the only surviving picture of a night everyone else forgot.
- **Character Visual Direction:** A stack of overlapping polaroid-style photo cards spilling out of a phone-shaped frame, warm sepia tones.
- **Zodiac Vibe Pairing:** Cancer — sentimental, memory-keeping, attached to the past.
- **Lucky Colour Direction:** Faded sepia cream.
- **Food/Colour Direction:** Foods tied to memory — the specific dish from a specific trip, comfort food with a story attached.
- **Wellness Direction:** Memory-keeping as self-care — photo-journaling, "on this day" reflection prompts.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing before scrolling through old photos, notifications off.
- **Pop-Culture Identity (draft):** Song — a nostalgic, sample-heavy 2010s track; Movie — a memory-driven drama; Art — a mixed-media scrapbook-style collage; Decade lean — 2010s.
- **Shareable One-Liner:** "I was a camera roll with 40,000 unsorted photos. I remember everything. Ask me anything."
- **Research Tags:** `["sentimental", "archival", "nostalgic", "detail-loving"]`
- **Recommendation/Affiliate Direction (future):** Photo-book/printing services, memory-keeping apps, nostalgic travel content.

---

### ARCHETYPE_15 — The Karaoke Mic with Reverb Stuck On
- **Thai Name:** ไมค์คาราโอเกะสายเอคโค่ค้าง
- **Entity Type:** Non-living (a karaoke microphone)
- **Core Vibe:** "Every feeling deserves a dramatic amount of reverb."
- **Descriptors:** expressive, dramatic, loud-hearted, cathartic
- **Research Dimensions:** social_energy (high), creativity (high), pop_culture_interest (high)
- **Past-Life Story:** Passed around a private karaoke room at 1 AM, you turned a mediocre pop ballad into a full emotional event for six people who will deny crying about it tomorrow.
- **Character Visual Direction:** Bold hot-pink and purple microphone with glowing echo-wave lines radiating outward, mid-performance sparkle.
- **Zodiac Vibe Pairing:** Leo — dramatic, expressive, thrives when feelings get to be loud.
- **Lucky Colour Direction:** Neon hot pink.
- **Food/Colour Direction:** Bold, shareable party food — spicy snacks, finger food, anything made for a group.
- **Wellness Direction:** Emotional-release content — "scream into a pillow," cathartic playlists, expressive movement.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing right after singing something loudly, notifications off.
- **Pop-Culture Identity (draft):** Song — a big, emotional power-ballad (Thai or international, 1990s-2000s style); Movie — a musical or performance-driven drama; Art — bold neon-toned pop art; Decade lean — 1990s-2000s.
- **Shareable One-Liner:** "I was a karaoke mic with the reverb stuck on. Every feeling I have is a ballad."
- **Research Tags:** `["expressive", "dramatic", "social", "pop-culture-lover"]`
- **Recommendation/Affiliate Direction (future):** Karaoke/entertainment venue promos, music-streaming playlist tie-ins, group-hangout event content.

---

### ARCHETYPE_16 — The 2AM Instant Noodle Steam
- **Thai Name:** ไอน้ำมาม่าตอนตีสอง
- **Entity Type:** Non-living (steam rising off a hot bowl of noodles)
- **Core Vibe:** "Simple pleasures, zero guilt, maximum satisfaction."
- **Descriptors:** comfort-seeking, straightforward, satisfied, unpretentious
- **Research Dimensions:** food_curiosity (high), wellness_interest (low), stability (medium)
- **Past-Life Story:** You rose off a bowl of instant noodles at 2 AM, brief and warm and completely unbothered by anyone's opinion about "eating better."
- **Character Visual Direction:** Soft, wavy steam shape with a content half-smile, warm white-grey gradient, rising off a simple noodle-bowl icon.
- **Zodiac Vibe Pairing:** Taurus — sensual, comfort-driven, unashamed of simple pleasures.
- **Lucky Colour Direction:** Warm steam white-grey.
- **Food/Colour Direction:** Instant noodles, congee, anything hot and immediate.
- **Wellness Direction:** "No guilt" comfort-eating messaging, permission-based content rather than restriction-based.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing right before the first bite, notifications off.
- **Pop-Culture Identity (draft):** Song — a cozy, unbothered lo-fi hip-hop track; Movie — a late-night comfort-watch film; Art — a warm still-life of a simple meal; Decade lean — 2010s-2020s.
- **Shareable One-Liner:** "I was the steam off 2 AM instant noodles. No regrets. None."
- **Research Tags:** `["comfort-seeking", "unpretentious", "food-curious", "satisfied"]`
- **Recommendation/Affiliate Direction (future):** Instant-food brand tie-ins, late-night delivery promos, comfort-food content series.

---

### ARCHETYPE_17 — The 80s Neon Sign Flicker
- **Thai Name:** ไฟนีออนยุค 80 สายกะพริบหวาน
- **Entity Type:** Non-living (a flickering neon shop sign)
- **Core Vibe:** "A little unreliable, deeply romantic about it."
- **Descriptors:** dreamy, retro-romantic, moody, nostalgic
- **Research Dimensions:** nostalgia (high), pop_culture_interest (high), creativity (medium)
- **Past-Life Story:** You buzzed and flickered above a late-night noodle shop for a decade, half your letters unreliable, and somehow that made you more memorable, not less.
- **Character Visual Direction:** Glowing neon-pink and cyan sign shapes, slightly buzzing, warm night backdrop, retro shop typography.
- **Zodiac Vibe Pairing:** Pisces — dreamy, romantic, drawn to mood and atmosphere over precision.
- **Lucky Colour Direction:** Neon pink-cyan.
- **Food/Colour Direction:** Late-night diner food — noodle soups, milk tea, neon-lit street stalls.
- **Wellness Direction:** Ambient/atmosphere-focused content — mood lighting, evening wind-down rituals.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing under dim, warm lighting, notifications off.
- **Pop-Culture Identity (draft):** Song — a City Pop-influenced 80s Japanese or Thai track; Movie — a neon-lit retro drama; Art — synthwave-style digital art; Decade lean — 1980s.
- **Shareable One-Liner:** "I was a flickering neon sign. Unreliable, but you'd still find your way home by me."
- **Research Tags:** `["nostalgic", "dreamy", "retro-aesthetic", "pop-culture-lover"]`
- **Recommendation/Affiliate Direction (future):** Retro/synthwave aesthetic merch, ambient lighting products, nostalgic city-pop playlist content.

---

### ARCHETYPE_18 — The Midnight Cringe-Memory Cockroach
- **Thai Name:** แมลงสาบความทรงจำอายสุดตอนตีสาม
- **Entity Type:** Living (framed affectionately, not gross — the "it always survives" energy)
- **Core Vibe:** "Impossible to get rid of, oddly endearing once you stop resisting it."
- **Descriptors:** persistent, self-aware, resilient, unglamorously honest
- **Research Dimensions:** nostalgia (high), stability (medium), social_energy (low)
- **Past-Life Story:** No matter how many times you were swept away, you always resurfaced at exactly 3 AM, dragging up a memory from a decade ago that nobody asked to relive.
- **Character Visual Direction:** Stylized, cute-not-scary cartoon cockroach with a sheepish grin, glossy dark maroon-black shell, cartoonish rather than realistic.
- **Zodiac Vibe Pairing:** Scorpio — intense, hard to shake off, oddly resilient under pressure.
- **Lucky Colour Direction:** Deep glossy maroon-black.
- **Food/Colour Direction:** Bold, dark-flavoured foods — dark chocolate, black sesame, deeply spiced dishes.
- **Wellness Direction:** Self-compassion content around embarrassment — "everyone has these moments" reframing.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing the moment a cringe memory surfaces, notifications off, letting it pass without spiraling.
- **Pop-Culture Identity (draft):** Song — a self-deprecating, humorous indie track; Movie — an awkward-coming-of-age comedy; Art — a cheeky pop-surrealist illustration; Decade lean — 2010s.
- **Shareable One-Liner:** "I was a cockroach. You cannot get rid of my 3 AM memories. Neither could anyone else."
- **Research Tags:** `["persistent", "self-aware", "resilient", "unfiltered"]`
- **Recommendation/Affiliate Direction (future):** Self-compassion/mental-wellness-lite content, humorous meme-style merch, journaling-for-closure tools.

---

### ARCHETYPE_19 — The Damp Garden Moss
- **Thai Name:** มอสส์ชื้นสายนอนนิ่งไม่ขยับ
- **Entity Type:** Living (garden moss)
- **Core Vibe:** "Conserves energy like it's a competitive sport."
- **Descriptors:** low-energy, quietly resilient, undemanding, restful
- **Research Dimensions:** stability (high), wellness_interest (high), social_energy (low)
- **Past-Life Story:** Tucked into the shadiest, quietest corner of the garden, you didn't grow fast or loud — you just stayed soft, damp, and completely undisturbed by whatever chaos happened above you.
- **Character Visual Direction:** A soft, textured cluster of deep-green moss with a sleepy half-closed-eyes doodle face, tucked between mossy stones.
- **Zodiac Vibe Pairing:** Cancer — homebody energy, nurturing quiet, low social battery.
- **Lucky Colour Direction:** Deep forest green.
- **Food/Colour Direction:** Soft, gentle foods — porridge, steamed vegetables, mild soups.
- **Wellness Direction:** Rest-as-productivity messaging, sleep hygiene content.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing lying down, notifications off, no goal beyond stillness.
- **Pop-Culture Identity (draft):** Song — a slow ambient instrumental track; Movie — a hushed nature documentary-style film; Art — a quiet forest-floor photograph-style piece; Decade lean — timeless/ambient.
- **Shareable One-Liner:** "I was moss. I did not move. It was the right call."
- **Research Tags:** `["low-energy", "restful", "undemanding", "quietly-resilient"]`
- **Recommendation/Affiliate Direction (future):** Sleep and rest products, slow-living content, quiet-hobby recommendations (reading, plant care).

---

### ARCHETYPE_20 — The Leftover-Hunting Fridge Light
- **Thai Name:** ไฟตู้เย็นสายล่าของเหลือตอนดึก
- **Entity Type:** Non-living (the light inside a refrigerator)
- **Core Vibe:** "Works with whatever's available. Always finds something."
- **Descriptors:** resourceful, opportunistic, practical, quick-thinking
- **Research Dimensions:** food_curiosity (high), spontaneity (medium), stability (medium)
- **Past-Life Story:** Every late-night fridge raid, you were the only light on in the house, illuminating a half-eaten dessert and some questionable leftovers that somehow became a decent midnight meal.
- **Character Visual Direction:** A warm, glowing light-bulb shape with a determined expression, illuminating a fridge shelf of mismatched containers.
- **Zodiac Vibe Pairing:** Aquarius — resourceful, unconventional problem-solver, makes do without a plan.
- **Lucky Colour Direction:** Cool white-blue.
- **Food/Colour Direction:** Leftover remix meals — fried rice from yesterday's dishes, improvised snack plates.
- **Wellness Direction:** "Use what you have" content — low-waste, resourceful-living tips.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing before a late-night snack, notifications off.
- **Pop-Culture Identity (draft):** Song — a chill, resourceful-vibe bedroom-pop track; Movie — a scrappy underdog film; Art — a still-life of an open fridge, playfully rendered; Decade lean — 2020s.
- **Shareable One-Liner:** "I was the fridge light. Nobody plans around me, but I always find something good."
- **Research Tags:** `["resourceful", "practical", "opportunistic", "food-curious"]`
- **Recommendation/Affiliate Direction (future):** Leftover-recipe content, food-waste-reduction apps, late-night delivery promos.

---

### ARCHETYPE_21 — The Overheating Phone (Drama Marathon Edition)
- **Thai Name:** มือถือร้อนจี๋ตอนดูซีรีส์รวด
- **Entity Type:** Non-living (a phone mid-binge-watch)
- **Core Vibe:** "Fully committed to fictional worlds, occasionally to the point of overheating."
- **Descriptors:** immersive, escapist, all-in, emotionally invested
- **Research Dimensions:** pop_culture_interest (high), curiosity (medium), exploration (low)
- **Past-Life Story:** Twelve episodes deep, battery at 4%, screen uncomfortably hot to hold — but you were not stopping until you knew how it ended.
- **Character Visual Direction:** A phone icon with a slightly flushed, overheated cartoon face, small heat-wave lines, glowing screen.
- **Zodiac Vibe Pairing:** Pisces — escapist, immersive, lives fully inside stories and feelings.
- **Lucky Colour Direction:** Warm screen-glow orange.
- **Food/Colour Direction:** Binge-watch snacks — popcorn, chips, anything one-handed.
- **Wellness Direction:** Healthy-escapism framing — "it's okay to disappear into a story sometimes" messaging.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing between episodes, notifications off, before deciding whether to watch "just one more."
- **Pop-Culture Identity (draft):** Song — an emotional K-drama-style OST ballad; Movie — a binge-worthy limited series' flagship film equivalent; Art — a dramatic, cinematic digital painting; Decade lean — 2020s.
- **Shareable One-Liner:** "I was a phone overheating on episode 12. No regrets, minor battery damage."
- **Research Tags:** `["escapist", "immersive", "pop-culture-lover", "all-in"]`
- **Recommendation/Affiliate Direction (future):** Streaming service tie-ins, OST/playlist content, cozy binge-watch snack brands.

---

### ARCHETYPE_22 — The Siam Square Pavement Weed
- **Thai Name:** วัชพืชข้างทางสยามสแควร์
- **Entity Type:** Living (a weed growing through pavement cracks)
- **Core Vibe:** "Quietly adaptable. Somehow always survives whatever situation it gets thrown into."
- **Descriptors:** resilient, adaptable, independent, unbothered
- **Research Dimensions:** stability (high), exploration (high), spontaneity (medium)
- **Past-Life Story:** Nobody planted you, nobody waters you, and yet every rainy season you push right back up through the same crack in the pavement like it's no big deal.
- **Character Visual Direction:** A small, scrappy green sprout pushing through a grey pavement-crack illustration, a few tiny yellow flowers, determined posture.
- **Zodiac Vibe Pairing:** Sagittarius — wandering, adaptable, thrives outside of structured conditions.
- **Lucky Colour Direction:** Resilient green.
- **Food/Colour Direction:** Wild, foraged-feel foods — fresh herbs, market greens, anything unpretentious and green.
- **Wellness Direction:** Resilience-framing content — "you keep coming back" affirmations, low-pressure growth mindset.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing outdoors if possible, notifications off.
- **Pop-Culture Identity (draft):** Song — a scrappy, hopeful indie-folk track; Movie — an underdog survival story; Art — street-art-style stencil work; Decade lean — 2000s.
- **Shareable One-Liner:** "Apparently, I was a weed. I survive everything."
- **Research Tags:** `["resilient", "adaptable", "independent", "low-maintenance"]`
- **Recommendation/Affiliate Direction (future):** Resilience/self-growth content, hardy-plant brands, budget-friendly lifestyle tips.

---

### ARCHETYPE_23 — The Afternoon Nap Hammock
- **Thai Name:** เปลญวนสายงีบตอนบ่ายมืออาชีพ
- **Entity Type:** Non-living (a hammock)
- **Core Vibe:** "Treats rest as a skill to be mastered, not a guilty pleasure."
- **Descriptors:** relaxed, restorative, unhurried, master-of-comfort
- **Research Dimensions:** wellness_interest (high), stability (high), social_energy (low)
- **Past-Life Story:** Strung between two trees on the laziest possible afternoon, you held the single most successful nap anyone in that household ever took.
- **Character Visual Direction:** A woven terracotta-orange hammock, gently swaying between two tree-icon anchors, warm dappled light.
- **Zodiac Vibe Pairing:** Taurus — sensual, comfort-seeking, unhurried by nature.
- **Lucky Colour Direction:** Terracotta orange.
- **Food/Colour Direction:** Slow, warming foods — coconut-based dishes, warm milk drinks, unhurried meals.
- **Wellness Direction:** Rest-optimization content — nap-timing tips, "rest without guilt" messaging.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing right before a nap, notifications off.
- **Pop-Culture Identity (draft):** Song — a slow tropical-lounge instrumental; Movie — an unhurried island/beach-set film; Art — a warm hammock-and-hanging-plants illustration; Decade lean — timeless/tropical.
- **Shareable One-Liner:** "I was a hammock. Resting is a skill. I have mastered it."
- **Research Tags:** `["restful", "unhurried", "comfort-seeking", "low-stress"]`
- **Recommendation/Affiliate Direction (future):** Rest/sleep products, tropical-leisure travel content, hammock and home-comfort brands.

---

### ARCHETYPE_24 — The Half-Finished DIY Craft Kit
- **Thai Name:** ชุด DIY ที่ทำค้างไว้ครึ่งเดียว
- **Entity Type:** Non-living (a partially-completed craft project)
- **Core Vibe:** "Endlessly excited to start. Rarely around to finish."
- **Descriptors:** enthusiastic, creative, curious, scattered
- **Research Dimensions:** creativity (high), curiosity (high), spontaneity (high)
- **Past-Life Story:** You were three glue sticks and half a glitter packet into an ambitious project when a new, shinier idea appeared, and honestly, that new idea deserved your full attention too.
- **Character Visual Direction:** A colourful, half-assembled craft box with scattered supplies (beads, paint, glue), cheerful but chaotic composition.
- **Zodiac Vibe Pairing:** Gemini — curious, idea-rich, easily pulled toward the next interesting thing.
- **Lucky Colour Direction:** Multicolour pastel.
- **Food/Colour Direction:** Fun, colourful foods — rainbow desserts, snack platters with variety.
- **Wellness Direction:** Creative-outlet content — low-pressure art prompts, "it doesn't have to be finished to count" messaging.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing before starting (or restarting) a project, notifications off.
- **Pop-Culture Identity (draft):** Song — a bright, quirky indie-pop track; Movie — a whimsical creative-underdog film; Art — a colourful mixed-media craft piece; Decade lean — 2010s.
- **Shareable One-Liner:** "I was a half-finished craft kit. The enthusiasm was real. The follow-through, less so."
- **Research Tags:** `["creative", "curious", "enthusiastic", "scattered-but-fun"]`
- **Recommendation/Affiliate Direction (future):** Craft/hobby kit brands, creative-app subscriptions, "start small" project content.

---

### ARCHETYPE_25 — The Overachieving Sticky Note
- **Thai Name:** สติกเกอร์โน้ตสายจัดระเบียบชีวิต
- **Entity Type:** Non-living (a sticky note)
- **Core Vibe:** "Has a system for everything, including things that don't need one."
- **Descriptors:** organized, detail-oriented, controlling-in-a-cute-way, driven
- **Research Dimensions:** stability (high), creativity (medium), social_energy (medium)
- **Past-Life Story:** Colour-coded, alphabetized, stuck to the exact right corner of the monitor — you weren't just a reminder, you were a whole life-management system in neon yellow.
- **Character Visual Direction:** A bright neon-yellow square sticky note with a satisfied checkmark doodle, slightly curling corner, tidy handwriting texture.
- **Zodiac Vibe Pairing:** Virgo — detail-oriented, systems-driven, finds satisfaction in order.
- **Lucky Colour Direction:** Neon yellow.
- **Food/Colour Direction:** Tidy, portioned meals — bento-style boxes, meal-prepped dishes.
- **Wellness Direction:** Productivity-meets-wellness content — planning rituals, "organize your space, calm your mind" framing.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing before opening a to-do list, notifications off.
- **Pop-Culture Identity (draft):** Song — an upbeat, structured synth-pop track; Movie — a satisfying heist-planning film; Art — a clean grid-based geometric artwork; Decade lean — 2010s.
- **Shareable One-Liner:** "I was a sticky note. Colour-coded. Alphabetized. Slightly too intense about it."
- **Research Tags:** `["organized", "detail-oriented", "driven", "systems-thinker"]`
- **Recommendation/Affiliate Direction (future):** Planner/productivity app tie-ins, home-organization brands, stationery merch.

---

### ARCHETYPE_26 — The Dog-Eared Secondhand Book
- **Thai Name:** หนังสือมือสองมุมพับที่เก็บเรื่องราวไว้เพียบ
- **Entity Type:** Non-living (a used, well-loved book)
- **Core Vibe:** "Has been through a lot, carries it quietly, and is wiser for it."
- **Descriptors:** introspective, thoughtful, quietly wise, well-worn
- **Research Dimensions:** curiosity (high), nostalgia (medium), wellness_interest (medium)
- **Past-Life Story:** Owned by at least three people before landing on that secondhand shelf, you carried someone else's coffee stain, someone else's underlined sentence, and still had plenty left to give.
- **Character Visual Direction:** A worn, warm-sepia paperback with a softly bent corner, small doodled reading-glasses resting on top.
- **Zodiac Vibe Pairing:** Aquarius — independent thinker, unconventional wisdom, comfortable being alone with ideas.
- **Lucky Colour Direction:** Warm sepia brown.
- **Food/Colour Direction:** Quiet café food — plain toast, filter coffee, unfussy afternoon snacks.
- **Wellness Direction:** Reading-as-self-care content, quiet-hour recommendations.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing before opening a book, notifications off.
- **Pop-Culture Identity (draft):** Song — a gentle, literary singer-songwriter track; Movie — a quiet, character-driven drama; Art — a classical still-life with books; Decade lean — 1990s.
- **Shareable One-Liner:** "I was a secondhand book. Dog-eared, underlined by strangers, still worth reading."
- **Research Tags:** `["introspective", "curious", "quietly-wise", "solitary-comfort"]`
- **Recommendation/Affiliate Direction (future):** Bookshop/reading-app content, quiet-café discovery lists, secondhand/thrift lifestyle brands.

---

### ARCHETYPE_27 — The Boba Pearl at Golden Hour
- **Thai Name:** ไข่มุกบัวหลวงตอนโกลเด้นอาวร์
- **Entity Type:** Non-living (a boba pearl)
- **Core Vibe:** "Sweet, photogenic, and has more depth than the aesthetic suggests."
- **Descriptors:** social, aesthetic-minded, warm, deceptively thoughtful
- **Research Dimensions:** social_energy (high), pop_culture_interest (medium), food_curiosity (high)
- **Past-Life Story:** Photographed from at least four angles before anyone actually drank the tea, you were the most Instagrammed part of the whole order — chewy, sweet, and quietly the best part.
- **Character Visual Direction:** A glossy, caramel-brown boba pearl with a warm golden-hour glow, tiny highlight sparkle, playful bounce pose.
- **Zodiac Vibe Pairing:** Libra — aesthetic-minded, social, balances sweetness with substance.
- **Lucky Colour Direction:** Caramel brown.
- **Food/Colour Direction:** Bubble tea, brown-sugar desserts, anything sweet and photogenic.
- **Wellness Direction:** Light social-wellness content — "treat yourself" framing, aesthetic self-care.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing before posting a photo, notifications off after.
- **Pop-Culture Identity (draft):** Song — a sweet, catchy 2020s Thai pop track; Movie — a visually stylish coming-of-age film; Art — a vibrant, saturated pop-art piece; Decade lean — 2020s.
- **Shareable One-Liner:** "I was a boba pearl. Photographed constantly. Chewy. More depth than you'd expect."
- **Research Tags:** `["social", "aesthetic", "food-curious", "photogenic"]`
- **Recommendation/Affiliate Direction (future):** Bubble tea/dessert brand tie-ins, photo-editing app promos, café-hopping content.

---

### ARCHETYPE_28 — The Dreamy Monsoon Cloud
- **Thai Name:** เมฆฝนสายฝันเฟื่องลอยไปเรื่อย
- **Entity Type:** Non-living (a natural weather phenomenon)
- **Core Vibe:** "Constantly changing shape, never in a hurry to get anywhere."
- **Descriptors:** dreamy, ever-changing, exploratory, go-with-the-flow
- **Research Dimensions:** creativity (high), exploration (high), wellness_interest (medium)
- **Past-Life Story:** You drifted over three provinces in one afternoon, changed shape at least a dozen times, and never once felt the need to justify where you were headed.
- **Character Visual Direction:** A soft, fluffy grey-lavender cloud with a gentle dreamy expression, subtly shifting silhouette, warm sky backdrop.
- **Zodiac Vibe Pairing:** Pisces — dreamy, fluid, comfortable with constant change.
- **Lucky Colour Direction:** Soft grey-lavender.
- **Food/Colour Direction:** Light, airy foods — meringue, shaved ice, delicate pastries.
- **Wellness Direction:** Flow-state content — sky-watching, unstructured daydreaming time.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing while looking at the sky, notifications off.
- **Pop-Culture Identity (draft):** Song — an ambient, atmospheric dream-pop track; Movie — a visually dreamlike animated film; Art — an abstract cloudscape painting; Decade lean — 2020s.
- **Shareable One-Liner:** "I was a cloud. Constantly changing shape. Never explaining myself."
- **Research Tags:** `["dreamy", "flexible", "exploratory", "creative"]`
- **Recommendation/Affiliate Direction (future):** Mindfulness/sky-gazing content, travel-without-a-plan itineraries, dreamy aesthetic merch.

---

### ARCHETYPE_29 — The Sizzling Night Market Wok
- **Thai Name:** กระทะไฟแรงตลาดนัดกลางคืน
- **Entity Type:** Non-living (a wok over high heat)
- **Core Vibe:** "Thrives in noise, heat, and chaos. Gets bored anywhere quiet."
- **Descriptors:** high-energy, sensory-seeking, social, thrives-on-stimulation
- **Research Dimensions:** social_energy (high), food_curiosity (high), spontaneity (high)
- **Past-Life Story:** Slammed against high flame for six straight hours at the busiest stall in the market, surrounded by noise, smoke, and shouted orders — and that was exactly where you did your best work.
- **Character Visual Direction:** A well-worn, glowing-hot wok with dramatic flame bursts underneath, dynamic motion lines, vibrant market backdrop.
- **Zodiac Vibe Pairing:** Leo — thrives on energy and attention, performs best in a lively environment.
- **Lucky Colour Direction:** Fiery red-orange.
- **Food/Colour Direction:** Bold stir-fries, street-wok dishes, anything cooked fast and hot.
- **Wellness Direction:** High-stimulation-is-okay content — reframing "chaos-seeking" as a valid energy type, not something to fix.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing after the noise dies down, notifications off — a deliberate cooldown, not a lifestyle change.
- **Pop-Culture Identity (draft):** Song — a high-energy, percussive Thai pop or EDM-adjacent track; Movie — a kinetic, fast-cut food-culture film; Art — a vivid, high-contrast street-scene painting; Decade lean — 2020s.
- **Shareable One-Liner:** "I was a night-market wok. Chaos, heat, and noise are my natural habitat."
- **Research Tags:** `["high-energy", "sensory-seeking", "social", "thrives-in-chaos"]`
- **Recommendation/Affiliate Direction (future):** Night-market/street-food event content, high-energy music playlists, group hangout venue promos.

---

### ARCHETYPE_30 — The Sunday Blanket Burrito
- **Thai Name:** ผ้าห่มม้วนตัวเป็นเบอร์ริโต้วันอาทิตย์
- **Entity Type:** Non-living (a person-shaped blanket wrap — treated here as the blanket's "spirit")
- **Core Vibe:** "Fully retreated from the world, and completely at peace about it."
- **Descriptors:** cozy, introverted, self-soothing, low-social-battery
- **Research Dimensions:** wellness_interest (high), stability (high), social_energy (low)
- **Past-Life Story:** Wrapped tightly from shoulders to toes for an entire Sunday, you answered no messages, made no plans, and considered it the most productive day of the week.
- **Character Visual Direction:** A soft cream-beige blanket wrapped into a burrito shape with just a peaceful, sleepy face peeking out.
- **Zodiac Vibe Pairing:** Cancer — homebody, comfort-seeking, protective of personal space and energy.
- **Lucky Colour Direction:** Warm cream beige.
- **Food/Colour Direction:** Cozy comfort food — warm soups, soft bread, mild home-cooked dishes.
- **Wellness Direction:** Digital-detox and rest content — "do nothing" Sundays, low-stimulation self-care.
- **Zen-Style Exercise:** 3-minute warm-water mindful breathing wrapped in a blanket, notifications off, no plans afterward.
- **Pop-Culture Identity (draft):** Song — a soft, cozy acoustic track; Movie — a gentle comfort-watch film; Art — a warm, soft-focus interior painting; Decade lean — timeless/cozy.
- **Shareable One-Liner:** "I was a blanket burrito. Zero messages answered. Best Sunday of my life."
- **Research Tags:** `["cozy", "introverted", "restful", "low-social-battery"]`
- **Recommendation/Affiliate Direction (future):** Home-comfort/bedding brands, digital-detox app content, cozy-Sunday lifestyle promos.

---

## 5. Birthday-Layer Overlay (How It Merges With the Archetype Result)

Per Section 7, 15, and 16 of `SPECFinal.md`, the following are calculated **independently** of the quiz score and then merged onto the same Soul Dashboard:

| Field | Calculated from | Never influenced by |
|---|---|---|
| Western Zodiac + element reading | Birthday (date + month), via Britannica | Quiz answers, archetype |
| Thai day colour | Optional weekday pill in Step 1 (current prototype; see Decision D3) | Quiz answers, archetype |
| Lucky numerology colour | Birth day reduced to a driver number 1–9 → astroleaf.in table (spec §16, `DesignSystem.md` §2.7). Spec §20 still names Times of India; see Decision D2 | Quiz answers, archetype |
| Past-life archetype | Quiz answers only (Section 3 matrix) | Birthday data |

**Merge rule for the dashboard:** the archetype's own "Zodiac Vibe Pairing" and "Lucky Colour Direction" fields (Section 4, items 9–11 per archetype) are **content/illustration direction only** — they decide the character card's art style and flavour text ("your quiz zodiac vibe ✨"). They are displayed alongside, and clearly labeled separately from, the birthday-derived real zodiac sign and numerology colour, which are the "authentic integrated data" shown as fact-attributed fields. The two must never be silently swapped or merged into one value — see Section 15/16 of the spec for the exact labeling language ("Your quiz zodiac vibe" vs. the Britannica-sourced sign).

Example: a user born under Taurus (birthday-derived, shown as fact) could still score as ARCHETYPE_15 (Karaoke Mic), whose creative zodiac vibe pairing is Leo. The dashboard shows both, clearly separated, exactly as Section 7 requires ("keep both honest").

---

## 5A. Result System (how a result is built and shown)

### Pipeline

```text
Step 1 birthday ──▶ birthday layer: zodiac, element, date range, driver no. → lucky colour, Thai day colour (optional)
Step 2 answers  ──▶ Section 3 matrix ──▶ 30 scores ──▶ top score ──▶ tie-break 3.3 ──▶ ARCHETYPE_nn
                                                                                       │
Step 3 Soul Dashboard ◀── archetype package (Section 4 fields) + birthday layer ◀───────┘
```

The two layers meet only on screen. Neither one changes the other.

### Where each field appears (tabs per `DesignUX.md` §4.4)

| Tab | Spec §14 job | From the archetype (Section 4) | From the birthday layer | Label |
|---|---|---|---|---|
| **การ์ด** (Card) | A · Know yourself | Thai + EN name, entity, visual direction → card art, lucky colour direction → card ground, 3 descriptors → trait pills, core vibe | Element chip | Rarity bar: "ข้อมูลตัวอย่าง" until live data |
| **ตัวตน** (Identity) | A + B | Past-life story, zodiac vibe pairing ("Your quiz zodiac vibe ✨") | Zodiac tile, Thai day colour tile, lucky-colour tile (swatches, names, No.n, planet, astroleaf), mini horoscope | เอาฮา |
| **ไลฟ์สไตล์** (Lifestyle) | B + C | Pop-culture identity, Zen exercise, wellness direction, recommendation direction → slot | Lucky colour → eat-by-colour, healthy eating, holistic nutrition, Ayurveda briefs | Food/Zen: เอาฮา · evidence block: มีแหล่งอ้างอิง |
| **เทียบ** (Compare) | C · Community | Own archetype bar | — | ข้อมูลตัวอย่าง |
| **IG Story** | §27 | Name, mini card, one-liner | Zodiac chip, lucky-colour chip | — |

Every tab ends with the disclaimer "เล่นขำ ๆ นะ ไม่ใช่คำแนะนำทางการแพทย์หรือจิตวิทยา".

### Research object written at the result (spec §21)

`archetype` = winner ID · `scores` = all 30 values · `answers` = q1–q6 letters · `derived` = birthday fields. Research tags and dimensions are looked up from the archetype ID at analysis time, so they are not stored per user.

---

## 6. Recommendation / Affiliate Direction — Cross-Archetype Summary

No live affiliate links in v1 (per Sections 7, 19, 24, 28). Each archetype's individual direction is listed in Section 4 (final field). At a system level, these 30 directions cluster into a few reusable content categories for the future non-live "pathway" slot on the dashboard:

- **Food & beverage discovery** (mookata, boba, night-market, instant noodles archetypes)
- **Rest & low-stimulation wellness** (moss, hammock, blanket burrito, nap-focused archetypes)
- **Creative/hobby tools** (craft kit, sticky note, matcha-foam, cloud archetypes)
- **Nostalgia & retro-aesthetic content** (cassette tape, neon sign, camera roll, cringe-memory archetypes)
- **Social/event discovery** (karaoke mic, night-market wok, boba pearl archetypes)
- **Everyday-carry & routine tools** (umbrella, cork coaster, stir stick, earthworm archetypes)

This gives the future recommendation slot a small, coherent taxonomy to map against rather than 30 one-off ideas.

---

## 7. Review Pack — Decisions Needed

### 7.1 The 30 archetypes at a glance

| Q (home) | A | B | C | D | E |
|---|---|---|---|---|---|
| Q1 Monsoon at Siam | 01 Mookata Flame | 02 Awning Raindrop | 03 18th 7-Eleven Umbrella | 04 Window-Shopping Moth | 05 Puddle-Jumping Sparrow |
| Q2 Japanese café | 06 Scholarly Earthworm | 07 Sinking Matcha Foam | 08 Reliable Cork Coaster | 09 Stubborn Desk Sprout | 10 Unbothered Stir Stick |
| Q3 Asok 99 min | 11 90s Cassette Ribbon | 12 Unbothered Soi Cat | 13 Dashboard Bobblehead | 14 Overflowing Camera Roll | 15 Karaoke Mic |
| Q4 2:00 AM | 16 2AM Noodle Steam | 17 80s Neon Sign Flicker | 18 Cringe-Memory Cockroach | 19 Damp Garden Moss | 20 Fridge Light |
| Q5 Free afternoon | 21 Overheating Phone | 22 Siam Square Pavement Weed | 23 Afternoon Nap Hammock | 24 Half-Finished DIY Kit | 25 Overachieving Sticky Note |
| Q6 Disappear to | 26 Dog-Eared Secondhand Book | 27 Boba Pearl at Golden Hour | 28 Dreamy Monsoon Cloud | 29 Night Market Wok | 30 Sunday Blanket Burrito |

Spec §14C names "sidewalk weeds, boba pearls, soi cats" for the compare chart. They map to 22, 27 and 12.

### 7.2 Content decisions (this file)

| # | Decision | Recommendation |
|---|---|---|
| C1 | Approve the 30 archetypes, names and entities | Approve. Watch for overlap between 10 Stir Stick and 12 Soi Cat (both "unbothered"). Consider renaming 10 to "The Go-With-the-Flow Stir Stick" |
| C2 | Approve the 6 questions | Approve. Note `DesignUX.md` §4.2 lists Q6 as "Plans changed", but this file and the app use "Disappear to". Fix DesignUX to match |
| C3 | Approve the v2 scoring (balanced matrix + rotation tie-break) | Approve, then sync `app/js/data-questions.js` and `scoring.js` |
| C4 | Thai copy pass | Do it before launch with a native speaker, starting from the app's wording |
| C5 | Pop-culture picks are still placeholders | Approve the verification pass against the locked sources (spec §19 search exception) |
| C6 | Rarity badge shows 2.4% for every archetype | Until live data exists, show each archetype's own illustrative share, labelled "ข้อมูลตัวอย่าง", or keep 2.4% as an obvious campaign line. Don't present either as real |

### 7.3 Spec and design-doc conflicts (found while reading `DesignLanguage.md`, `DesignSystem.md`, `DesignUX.md`)

| # | Conflict | Where | Recommendation |
|---|---|---|---|
| D1 | The new spec theme (1998 magic magazine, cyberpunk / *Tron: Legacy* + *Ares*, Cosmo/Seventeen layout, page-flip e-book) vs `DesignSystem.md` v2 | SPEC "Theme" line vs DesignSystem §1–2 | **Decided 4 Oct 2026: Option A** (pastel hologram + magazine cover + thin neon lines + page flip), with the **dark Tron loading screen from Option C**. See `DesignSystem.md` §1.1, §2.9 |
| D2 | Lucky-colour source: astroleaf.in (spec §16, DesignSystem) vs Times of India (spec §20 table) | SPEC §16 vs §20 | Use astroleaf and update the §20 table |
| D3 | Thai day colour input: spec §6A says "year only if required"; prototype uses an optional weekday pill | SPEC §6A/§10 vs DesignUX §4.1 | Keep the weekday pill (less personal data). Update the spec |
| D4 | Spec example "Olive & Mustard Yellow" for day 12 does not exist in astroleaf (12 → driver 3 → Yellow / Radiant Golden / Saffron) | SPEC §6C, §16 | Replace the example in the spec |
| D5 | Spec "Design concept" line ("Yourself in colour? วันนี้รู้สึกเป็นสีอะไร?") belongs to a colour quiz, not past lives. `SPEC-Colour.md`, `SPEC-Food.md` and `SPEC-Pastlives.md` are currently byte-identical | SPEC top | Remove the line from SPEC-Pastlives, then make the other two SPECs their own documents |
| D6 | Spec task flow step 6 is unfinished ("start building the") and two steps are numbered 5 | SPEC Task Flow | Finish the sentence |
| D7 | Spec file title is still `# SPECFinal.md` while the file is `SPEC-Pastlives.md`; all supporting docs point to `SPECFinal.md` | All docs | Pick one name and update the references |
| D8 | "★ ULTRA RARE" tier label is not in the spec | DesignUX §9 #5 | Keep as game-flavour, labelled sample |

**Per `SPECFinal.md` Section 30, I'm stopping here.** Approve or revise C1–C6 and D1–D8, then Phase 2 (syncing and extending the prototype) can start.
