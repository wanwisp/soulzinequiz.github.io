# SPECFinal.md

# SoulZine Personality Quiz

Merged from SPECV1.md, SPECV2.md, and the approved 3-step single-page interactive flow. This file is the product contract. Supporting files hold detailed systems; they must not contradict this spec.

---

# ROLE

Act as a **digital marketer, audience researcher, UX strategist, and interactive-content designer specialising in Gen Z and Millennial audiences in Thailand and Southeast Asia**.

Your job is to build a **single-page, mobile-first, unserious personality quiz** name SoulZine that feels like a highly shareable BuzzFeed-style entertainment experience while quietly generating useful audience-research data, audience interest and leaving a path for later product / affiliate recommendations.

Theme: The Soulzine is a magic magazine that teleport itself through time from 1998 to your phone. The colour and design inspired by cyberpunk and Tron legacy+ Ares movie but the core design will look like the Cosmo or Seventeen magazine, the audience can even flip the page like an e-book.



Design concept: This quiz called : What were you
in your past life? ชาติที่แล้วคุณเกิดเป็นอะไร? the audience will explore themsleves through 5 sill questions and those question will intrepret into the result of charactor and brief personality board.  
It will have Astrology, today's lucky colour, Thai day colour, and “biological element” layers are **playful personalization from the birthday picker**, not a scientific or medical service.



The experience after the audience play the quiz should feel like:

> “I just took a fun quiz and somehow this result feels weirdly relate to me, thats fun and nostalgia!”

> **Curious enough to try to know myselfe, silly(quirky) enough to share, and strangely relatable once you get your result.
> I wonder if I could read more from this mag**

It should NOT feel like:

- a formal survey
- market research
- a psychological assessment
- a medical assessment
- a serious personality test
- a paid astrology reading service
- a corporate landing page
- a shopping funnel


The **entertainment experience is the primary product**.  
Research value is a byproduct.  
Affiliate / product discovery is a later, secondary layer.(THIS WILL BE THE NEXT PHASE AFTER)

---

# TASK FLOW

*

First:(Skip the task that there is already finished-by seeing the file in the folder)

1. Understand this brief CLEARLY
2. Develop the complete **Archetype Reference File** described below (`ArchetypeReference.md`).

3. Develop Astrology, numerology, Thai day colour list with TH/EN intrepreted meaning from the reference info list as a  Astrology_Colour.md
4. Develop 10 questions set in TH/EN with answer choice as question.md then ask for approval.
5. Develop Soulmatch.md that have list of song, movie and place to visit. see the reference links.
4. Use that file to define the quiz logic, scoring framework, and result system.
4. Present the proposed archetypes and key decisions for review.
5. Read and understand your Roel, theme, design concept, ArchetypeReference.md, Astrology_Colour.md, question.md then  follow the design structure from designsystem.md and designux.md
6. start building index.html (if its already exist then review the design concept make sure its correct)
5. Ask for approval before moving into the nest step.

Do not proceed directly to implementation without review.

---

# 1. PROJECT OVERVIEW

A **contemporary, playful, yet nostalgic interactive web app / mobile quiz** where users discover their fictional **“past life” identity** through a short, unserious personality experience.

Instead of a conventional human personality type, users may discover that their past life was something unexpectedly specific and quirky — such as(not limited): see ArchetypeReference.md

- a scholarly earthworm
- a resilient Siam Square pavement weed
- a 90s cassette-tape ribbon
- a boba pearl
- a white blood cell
- a cloud
- an everyday object, organism, food, or other unusual entity
- Foods

The quiz uses these strange identities as a **lighthearted entertainment lens** to interpret answers, preferences, and cultural references.

This is **unserious self-exploration aimed for fun, relaxing and let the audiences know themsleves with a small tips for their selves care base on their pastlives.**. It must not present itself as a scientific psychological assessment.

---

# 2. PROJECT VISION

Build a **low-friction, one-page quiz game** that combines:

**Self-discovery + absurd “past lives” + contemporary internet culture + nostalgia + playful personality interpretation + lightweight audience insight**

The eventual product stack is:

**Welcome + birthday picker → short silly scenario quiz → Soul Dashboard → optional relevant recommendation → optional affiliate / product link**

Users should interact because of **curiosity and entertainment**, not shopping.

---

# 3. PROJECT GOALS

## Goal 1 — User Experience

Give users a quick and enjoyable way to:

- Enter a playful birthday picker and start in one tap
- Answer a short set of silly urban Thai scenario questions
- Discover their fictional past-life identity
- Understand the personality / vibe behind that identity
- Explore related cultural and lifestyle references
- Receive a personalized **Soul Dashboard**
- Share their result

The experience should require **minimal effort while still feeling personally relevant**.

## Goal 2 — Audience Insight

Use participation and answer patterns to understand the audience.

The project should eventually allow the team to examine:

- Participation volume
- Character / archetype distribution
- Answer patterns
- Audience interests
- Popular cultural references
- Potential product / content interests

The quiz functions as:

**Entertainment experience + lightweight audience research**

## Goal 3 — Business Extension

Create a foundation for future monetization and product discovery.

Potential flow:

**Quiz → Personal Result → Relevant Recommendation → Affiliate / Product Link**

The project may generate affiliate revenue when users choose to purchase through relevant links.

Audience insights may also inform future products, content, and commercial opportunities.

The affiliate component must remain **secondary**. Do not design the first version as a store.

---

# 4. TARGET AUDIENCE

Primary:

- Gen Z
- Millennials
- Thailand
- Southeast Asia / broader Asian digital-native markets

Particularly people who enjoy:

- personality quizzes
- viral identity tests
- internet culture
- nostalgia
- pop culture
- quirky humor
- self-discovery content
- shareable social experiences

The experience should be culturally approachable for Thai audiences while remaining adaptable to wider Southeast Asian audiences.

Consider:

- mobile-first behaviour
- short attention spans
- social sharing
- visual-first communication
- playful internet culture
- curiosity / self-discovery content
- humour
- relatable everyday situations
- Asian digital culture

Do not stereotype Thai or Asian users.

Avoid assuming that all users share the same cultural references.

---

# 5. CORE CONCEPT

Create a fictional “past-life personality” quiz.

Participants answer a **short set of light multiple-choice questions** — silly urban Thai scenarios, not a questionnaire.

A typical length is **5–6 questions**, but that is a pacing target, not a ceiling. All question territories listed in this spec are **examples**. More questions may be added if they stay unserious, indirect, and scorable.

There are no right or wrong answers.

Their answers generate a score across **30 fictional archetypes**.

The highest-scoring archetype becomes their result.

Each archetype represents a distinctive “vibe” rather than a scientifically validated personality type.

The important characteristic of a past-life identity is that it should feel:

**Unexpected + specific + recognizable + culturally interesting + slightly ridiculous**

The identity itself should create curiosity before the user even reads the explanation.

The final result should make the participant think:

> “Why is this strangely accurate?”

> **“I don't know why this is so accurate, but this is definitely me.”**

---

# 6. CORE FLOW — ALL ON ONE PAGE

The primary experience is a **single-page progressive quiz**. Do not split landing, quiz, and result onto separate website URLs or multi-page forms.

The product has **three steps**:

## Step 1 — Welcome & Birthday Picker  
หน้าแรก & ระบุวันเกิด

## Step 2 — Silly Urban Thai Scenario Questions  
คำถามสถานการณ์สุดกวน

## Step 3 — Past Life Identity / Soul Dashboard  
ผลลัพธ์ & แดชบอร์ดสรุปตัวตน

### Dual personalization layers

The result is not only an archetype score.

1. **Birthday layer (Step 1)** calculates entertainment personalization:
   - Western Zodiac
   - biological / zodiac element (e.g. ธาตุดิน)
   - Thai day colour
   - today's lucky colour (สีมงคลวันนี้) from today's weekday — Section 16
2. **Quiz layer (Step 2)** calculates the fictional **past-life archetype** via deterministic scoring across 30 archetypes.

The Soul Dashboard **integrates both layers** so the result feels specific to this person, not a generic character card.

---

# 6A. STEP 1 — WELCOME & BIRTHDAY PICKER

Hook badge (campaign / social-proof pattern):

> **148,290 souls already discovered.**

When a live participant count exists, replace this with the real count. Until then, this is the intended prototype copy for the welcome badge — do not present it as a researched market statistic.

Date & Month picker (playful birthday control, not a KYC form) must calculate:

- **Western Zodiac** (Britannica)
- **Biological / zodiac element** associated with that sign (entertainment framing, e.g. Taurus → ธาตุดิน มั่นคง สุขุม)
- **Thai day colour** (สีประจำวันเกิด)
- Today's lucky colour needs no input: it uses today's date (see Section 16)

If Thai weekday colour cannot be derived from date + month alone, the birthday control may include year **only as the minimum extra field** required for that calculation. Do not add name, email, phone, or address here.

Playful CTA to start the journey across past lives, in the spirit of:

Thai:

> **ชาติที่แล้วคุณเคยเป็นอะไร?**  
> มาหาคำตอบกันใน 60 วินาที 👀

English:

> **What were you in your past life?**  
> Find out in 60 seconds.

CTA:

**เริ่มเลย / Start Quiz** (or equivalent “start the journey” line)

Include:

- hook badge
- short hook
- one-sentence explanation
- birthday picker
- Start CTA
- no unnecessary extra form fields

The design should encourage users to **try first and think later**.

---

# 6B. STEP 2 — SILLY URBAN THAI SCENARIO QUESTIONS

The lists below are **examples of question territory**, not a closed set and not a maximum.

Keep all of them in the creative pool. Use them, remix them, or add more in the same spirit. Do not treat four questions as the limit.

### Urban Thai scenario examples

1. **Monsoon at Siam Square**  
   Run for Mookata vs stand under awning listening to indie music vs buying the 18th 7-Eleven umbrella.

2. **Japanese Café Object**  
   Dried coffee grounds deodorizer vs sinking matcha foam vs cork coaster vs resilient desk sprout.

3. **Asok 99-minute Traffic Jam**  
   Rehearsing 90s dance in your head vs Zen meditation trance vs staring at rearview mirror.

4. **2:00 AM Cravings**  
   Midnight instant noodles vs 80s City Pop loop vs 10-year-old cringe memories vs sleeping like damp moss.

### Additional scenario examples

5. What would you do with an unexpected free afternoon?
6. Which situation sounds most appealing?
7. What kind of energy do you bring to a group?
8. Pick a place you would rather disappear to.
9. Choose a snack / vibe / object.
10. What would you do if your plans suddenly changed?

A typical quiz feels quick at about **5–6 questions**, but the experience may include more if pacing still feels like entertainment, not a survey.

Each question still needs:

- Thai copy
- English copy
- 3–5 answer options
- scoring weights into the 30-archetype matrix
- research dimension being measured

---

# 6C. STEP 3 — PAST LIFE IDENTITY / SOUL DASHBOARD

After scoring, show the **Soul Dashboard**.

Reference result (example of tone, density, and authentic integration — not the only allowed archetype):

**Rarity Badge**

> “คุณคือ 2.4% ของประชากรที่ได้สิ่งนี้!”  
> (Rare 2.4% Soul Archetype)

**Character Card**

The Scholarly Earthworm in an organic garden.

**Authentic Integrated Data (example)**

- **Zodiac Sign:** Taurus (ราศีพฤษภ - ธาตุดิน มั่นคง สุขุม) from Britannica, derived from the birthday picker.
- **Today's Lucky Colour (สีมงคลวันนี้):** e.g. on a Monday, luck = ฟ้า, น้ำเงิน · avoid แดง (Hua Seng Hong 2569).
- **5-Colour Eating & Ayurvedic Diet:** Green chlorophyll foods (matcha, broccoli, edamame) for gut-health-style framing and calming Pitta/Vata — qualified, not medical.
- **Zen Mental Practice:** 3-minute warm-water mindful breathing with notifications off.
- **90s Pop Culture Soul Match:** Sixpence None the Richer – "Kiss Me" (Billboard Hot 100 1999) & *My Neighbor Totoro* (1988).
- **Community Stats & Social Share:** Interactive chart comparing this result against sidewalk weeds, boba pearls, and soi cats + IG Story export button.

Every live result must follow this **information architecture**, with values generated from that user’s birthday layer + quiz archetype — not a copy-paste of the earthworm example unless that is actually their result.

---

# 7. DEVELOP THE ARCHETYPE REFERENCE FILE

Before building the website, create a structured reference document:

**`ArchetypeReference.md`**

Develop the archetype system based on:

- the target audience
- the quiz concept
- the desired playful tone
- cultural accessibility
- audience-research usefulness
- distinct behavioural dimensions

Do NOT simply invent eight random characters.

The archetypes should form a **coherent system**, where each represents a meaningfully different audience “vibe”.

Aim for **30 archetypes**, with 30 preferred if the system remains simple.

Possible creative territory includes, but is NOT limited to:

- The Wandering Weed
- The Lucky Worm
- The Steadfast White Blood Cell
- The Dreamy Cloud
- a scholarly earthworm
- a resilient Siam Square pavement weed
- a 90s cassette-tape ribbon
- a boba pearl

These are examples only. Improve, replace, rename, or expand them if better concepts emerge.

A result may be **living** or **non-living**.

Living examples: earthworm, weed, white blood cell, plant, animal, microorganism.

Non-living examples: cassette-tape ribbon, pavement, boba pearl, everyday object, urban artifact, food.

Conceptual references for living / non-living (use these when inventing past-life entities, including unalive objects):

- https://www.scienceworld.ca/resource/living-or-non-living/
- https://simplicable.com/world/living-things
- https://simplicable.com/world/living-things#google_vignette

The past-life interpretation is fictional entertainment.

Each archetype should define a recognizable personality pattern while remaining:

- unserious
- playful
- relatable
- flexible
- culturally adaptable
- suitable for a specific “past life” identity
- immediately understandable
- humorous without being insulting
- strong visually
- suitable for social sharing
- useful for audience-research categories

Avoid sensitive psychological profiling, medical claims, and stereotypes about nationality, ethnicity, gender, religion, or socioeconomic status.

Do not create archetypes such as:

- “The Depressed One”
- “The Narcissist”
- “The Genius”
- “The Psychopath”
- “The Poor Person”
- “The Mentally Unstable One”

Do not use clinical or stigmatizing labels.

Supporting personality-structure notes may also live in `CharacterType.md`. That file must stay consistent with this spec and `ArchetypeReference.md`.

---

## Each archetype must contain

### 1. Archetype ID

Example: `ARCHETYPE_01`

### 2. English Name

Short, memorable and shareable.

### 3. Thai Name

Natural Thai wording rather than a literal machine translation.

### 4. Past-Life Entity

The living or non-living thing the participant “was”.

### 5. Core Vibe

One sentence explaining the character.

Example:

> “Quietly adaptable. Somehow always survives whatever situation it gets thrown into.”

### 6. Personality-style descriptors

Use approximately 3–5 playful descriptors.

Example:

- adaptable
- spontaneous
- resilient
- independent

These are **creative descriptors**, not psychological diagnoses.

### 7. Audience-research dimensions

Map the archetype to useful research dimensions such as:

- spontaneity
- curiosity
- social energy
- creativity
- stability
- exploration
- nostalgia
- wellness interest
- pop-culture interest
- food curiosity

Do not present these as scientifically validated personality measurements.

### 8. Past-Life Story

A short, funny explanation of why this participant was that object/creature in their “previous life”.

### 9. Character Visual Direction

Describe what the illustration should look like.

### 10. Zodiac Association

Assign one **archetype-aligned zodiac vibe** for creative pairing (which pop-culture / wellness flavour fits this past life).

The Soul Dashboard’s **displayed Western Zodiac, element, and Thai day colour come from the birthday picker**, not from this field.

If the birth zodiac and the archetype vibe differ, keep both honest: birth sign is “your quiz zodiac from birthday”; archetype vibe is the past-life flavour. Do not overwrite birth zodiac with a fake sign.

### 11. Lucky Colour

Assign one **archetype colour direction** (visual identity of the character card).

The Soul Dashboard’s **lucky colour comes from today's weekday** via the Hua Seng Hong table (Section 16), not from this field.

### 12. Lucky Colour Meaning

Use the supplied reference material only.

### 13. Food / Colour Direction

Connect the lucky colour to appropriate food examples. Example from this link : https://www.ofm.co.th/blog/150-thai-street-food-menu/

### 14. Wellness Direction

Define which type of light wellness content fits this archetype.

### 15. Zen-style Exercise

Define a simple, low-risk mental reset or breathing prompt.

### 16. Pop-Culture Identity

Define the type of:

- music
- movie
- Place to visit
- decade

that fits this archetype.

### 17. Shareable One-Liner

Create a short line suitable for a social-share card.

Example:

> “Apparently, I was a weed. I survive everything.”

### 18. Research Tags

Provide structured tags that can later be used for audience segmentation.

Example:

`["curious", "adaptable", "spontaneous", "wellness-light"]`

### 19. Recommendation / affiliate direction (future)

Define the *type* of product, content, or experience that could later be recommended for this archetype.

Do not implement live affiliate links in the first build unless separately approved.

---

# 8. ARCHETYPE SCORING SYSTEM

Design a simple deterministic scoring system.

There should be:

**N questions (typically 5–6, examples are not a cap) → answer weights → 30 archetype scores → highest score → past-life result**

Birthday-derived zodiac / colour / element are **not** part of the archetype score. They overlay the dashboard after the quiz.

Each answer should contribute points to multiple archetypes where appropriate.

Example structure:

```text
Question 1 / Answer A
→ ARCHETYPE_01 +2
→ ARCHETYPE_04 +1

Question 1 / Answer B
→ ARCHETYPE_02 +2
→ ARCHETYPE_06 +1
```

The scoring should create meaningful differentiation without being overly complicated.

Include:

- scoring matrix
- tie-breaking rule
- minimum/maximum possible scores
- explanation of what each question is measuring

The scoring system should be deterministic so that the same answers always produce the same archetype.

---

# 9. QUIZ QUESTIONS

Develop a short entertainment quiz using the **example territories in Section 6B**.

Keep **all** listed questions as usable examples. They are inspiration, not a limit. Additional questions are allowed if they stay unserious, indirect, and culturally approachable.

A typical length is **5–6 questions** so the quiz still feels fast.

Questions should feel like entertainment rather than research.

Do not make questions too obviously connected to the result.

Avoid:

> “Are you adventurous?”

Instead create indirect behavioural choices.

Each question should include:

- Thai copy
- English copy
- 3–5 answer options
- scoring weights
- research dimension being measured

---

# 10. PERSONAL INPUT AND PRIVACY

Step 1 **is** the personal-input moment: the **birthday picker**.

Collect **only** what the experience needs to calculate:

- Western Zodiac
- biological / zodiac element
- Thai day colour

(Today's lucky colour uses the device date, not personal input.)

Do NOT require:

- name
- email
- phone number
- exact location
- social account
- login / user accounts

Birthday (date & month; year only if required for Thai weekday colour) is the allowed identity-lite input for this product. It is used for **entertainment personalization**, not accounts, marketing lists, or medical profiling.

Do not use birthday for:

- disease, treatment, or diagnosis claims
- credit-style or employment-style profiling
- authentication

Store in the research object only derived entertainment fields where possible (zodiac, element, Thai day colour, lucky colour), not a full civil-identity record. If raw date parts are stored for scoring replay, keep them in the same local/session data object — no backend in v1.

The first version must not add authentication just to personalize the result.

---

# 11. LANGUAGE

Primary language:

**Thai**

Include a lightweight:

**TH / EN**

toggle.

Do not display full bilingual copy simultaneously.

The selected language must persist throughout the quiz and result experience.

Thai copy should sound natural and contemporary.

Avoid overly formal Thai.

The tone should feel like social media / digital campaign copy.

The Thai experience should be written naturally for Thai audiences rather than functioning as a direct translation from English.

The language should adapt:

- Thai humor
- Thai internet culture
- wordplay
- informal conversational language
- cultural references
- contemporary expressions

English should provide access to the same core experience while maintaining the personality and playful character of the original concept.

Detailed language rules will be defined separately in:

`DesignLanguage.md`

That file must not contradict this spec.

---

# 12. LANDING / INTRO

Landing **is Step 1** (Section 6A). Do not add a second intro screen before the birthday picker.

Required on this first view:

- hook badge: **148,290 souls already discovered** (live count later)
- past-life hook copy
- date & month birthday picker
- playful start-journey CTA

---

# 13. QUIZ UX

Use:

- one question per screen
- progress indicator
- large touch-friendly answer buttons
- mobile-first layout
- subtle transitions
- immediate visual feedback
- no unnecessary scrolling

Example:

**ข้อ 3 / 6**

Progress should make the quiz feel quick.

Do not make participants feel like they are completing a questionnaire.

Detailed UX and visual rules will be defined separately in:

`DesignUX.md`

That file must not contradict this spec.

---

# 14. SOUL DASHBOARD (RESULT)

After completion, show the result as a **personalized Soul / Character Dashboard** (Step 3).

The dashboard should feel like a **small personalized world**, rather than simply displaying a quiz score.

The dashboard has three audience-facing jobs:

1. **Know yourself (relax, unserious)** — past-life reveal, minimal picture, zodiac, lucky colour  
2. **Character explanation corner** — 30-archetype personality brief + pop culture + eat-by-colour + wellness/zen interpretations  
3. **Convincible brief info** — short evidence-informed notes from the supplied wellness sources

## A. KNOW YOURSELF — IDENTITY REVEAL

Display:

- rarity badge
- past-life reveal (living or non-living entity / object — weed, worm, white blood cell, cassette ribbon, etc.)
- **minimal character picture / icon / emoji**
- archetype name (Thai + English)
- zodiac sign from **date + month** lookup (Britannica)
- today's lucky colour from **today's weekday** (Hua Seng Hong, Section 16)
- short reveal statement

Living / non-living inspiration:

- https://www.scienceworld.ca/resource/living-or-non-living/
- https://simplicable.com/world/living-things#google_vignette

## B. CHARACTER EXPLANATION CORNER

Give a **minimal character brief** so they know their personality from their answers — for fun, unserious, mapped to the **30 archetypes**.

Then give interpreted extras from those answers + that archetype + lucky colour:

- **Pop-Soul match** (song, movie, place to visit / เที่ยวไหนดี; mix Thai and non-Thai; cover 1980s–2020s) — see Section 19
- **Eat by lucky colour** — Jacinta five-colours, then interpret onward using the wellness sources in Section 17
- **Healthy eating** interpreted from lucky colour → Better Health
- **Natural holistic nutrition** interpreted from lucky colour → OMICS
- **Ayurvedic diet** interpreted from lucky colour → Everyday Health
- **Zen-way mental exercise** interpreted from character + answers → Zen For Overactive Minds

Plus:

- Thai day colour / element where calculated
- shareable summary / one-liner

## C. COMMUNITY STATS AND SOCIAL

Show an **interactive comparison chart** of this result against a small set of other past-life identities in the same silly universe, including at least:

- sidewalk weeds
- boba pearls
- soi cats

plus the user’s own archetype.

**Rarity badge pattern:**

> “คุณคือ 2.4% ของประชากรที่ได้สิ่งนี้!”

Prototype / illustrative preview may use this pattern so the UI is complete. Label illustrative community numbers clearly until real data exists. When real participation data exists, drive rarity and chart shares from collected results — never invent scarcity as if it were a published study.

Include **IG Story export** (or screenshot-ready story canvas) in addition to generic Share Result.

## D. OPTIONAL RECOMMENDATION SLOT

Reserve space in the dashboard for a later relevant recommendation / affiliate module.

In the first version, this can be a non-live content direction or a clearly optional “continue exploring” block. It must not dominate the result.

---

# 15. ZODIAC

The **on-screen Western Zodiac is calculated from the birthday picker**.

Use:

https://www.britannica.com/topic/zodiac

Use the source for appropriate zodiac information, including the entertainment reading of sign + element (example: Taurus, ราศีพฤษภ, earth / ธาตุดิน).

Each archetype still has a **creative zodiac vibe pairing** for content design (Section 7). That pairing must not fake the user’s birth sign on the dashboard.

Do not imply:

- scientific personality prediction
- factual personality diagnosis
- medical use of elements or Ayurveda

Frame it as:

> “Your quiz zodiac vibe ✨”

rather than a factual psychological statement.

---

# 16. LUCKY COLOUR

Two colour layers, kept separate:

1. **Thai day colour (สีประจำวันเกิด)**: from the weekday the user was born (optional weekday pill in Step 1). Thai tradition, labelled "ความเชื่อไทย" until a source link is added.
2. **Today's lucky colour (สีมงคลวันนี้)**: from **today's** weekday, using the Hua Seng Hong table "สีเสื้อมงคล 2569 ประจำวัน" and its six category meanings (การงาน, การเงิน, ความรัก, สุขภาพ, โชคลาภ, สีฉุดดวง). The source says these colours are "ตามวันปัจจุบันไม่ใช่ตามวันเกิด", so they are never presented as the user's birth colour.

Reference:

https://www.huasenghong.com/blog/7317/cloth-lucky-color
Use the source for the colours and their meanings. The table is for 2569 and must be replaced each year.

**Expiry rule:** when the 2569 table expires (from 1 Jan 2570), a web search is allowed **only** to find Hua Seng Hong's 2570 edition of สีเสื้อมงคลประจำวัน. This is the single exception to the no-search rule for colour facts.

Example of integrated output (if today is Monday): **สีเสริมโชคลาภ: ฟ้า, น้ำเงิน** · avoid **แดง**.

Show:

- colour name
- colour swatch
- the category meaning from the source
- Thai day colour where applicable

The character card may still use the archetype’s visual colour direction so the illustration stays distinctive.

Numerology (birth-day number) is no longer used. Treat colour beliefs as entertainment rather than scientific fact. Full lists: `Astrology_Colour.md`.

---

# 17. CHARACTER EXPLANATION + “CONVINCIBLE INFO”

This is the **character explanation corner** plus a short **convincible brief** that feels useful enough that the participant thinks:

> “Okay, this is actually interesting.”

Clearly separate entertainment from evidence-informed information.

Lucky-colour food and wellness lines are **interpreted from the user’s lucky colour** (and, for Zen, from character + answers), then matched to the sources below. Do not invent nutritional or medical facts and pin them on these URLs.

### Minimal character brief (30 archetypes)

Unserious personality-from-answers copy. Not a diagnosis.

### Minimal Horoscope

A short playful interpretation based on the birthday-derived zodiac sign (Britannica).

### Eat by Your Lucky Colour

Get data from:

https://www.jacintha.com.au/journal/five-colours-you-should-be-eating

Use the colour framework to suggest appropriate foods.

When the colour path is green / olive, a valid example direction is chlorophyll-style foods such as matcha, broccoli, and edamame — still framed as playful eating-by-colour, not a prescription.

### Healthy eating (interpreted from lucky colour)

Match data from:

https://www.betterhealth.vic.gov.au/health/healthyliving/healthy-eating

Provide one simple healthy-eating tip tied to that colour path.

### Natural holistic nutrition (interpreted from lucky colour)

Get data from:

https://www.omicsonline.org/open-access/holistic-nutrition-a-comprehensive-approach-to-health-and-wellbeing-134341.html

Keep the description appropriately qualified.

### Ayurvedic diet (interpreted from lucky colour)

Get data from:

https://www.everydayhealth.com/diet-nutrition/potential-health-benefits-of-an-ayurvedic-diet/

Present Ayurveda as a traditional dietary/wellness approach.

Do not present it as medically proven treatment.

### Zen-way mental exercise (interpreted from character + answers)

Get data from:

https://books.google.com.au/books/about/Zen_For_Overactive_Minds.html?id=HyEQEgAAQBAJ&redir_esc=y

Provide a simple, low-risk mental exercise or breathing prompt.

Canonical example direction:

**3-minute warm-water mindful breathing with notifications off.**

Do not make mental-health treatment claims.

### Convincible brief info (repeatable source set)

The convincible corner must stay grounded in:

- https://www.betterhealth.vic.gov.au/health/healthyliving/healthy-eating
- https://www.omicsonline.org/open-access/holistic-nutrition-a-comprehensive-approach-to-health-and-wellbeing-134341.html
- https://www.everydayhealth.com/diet-nutrition/potential-health-benefits-of-an-ayurvedic-diet/
- https://books.google.com.au/books/about/Zen_For_Overactive_Minds.html?id=HyEQEgAAQBAJ&redir_esc=y

---

# 18. WELLNESS CONTENT SAFETY

Clearly distinguish:

**FOR FUN**

from

**EVIDENCE-INFORMED WELLNESS**

Use a lightweight disclaimer such as:

> “Just for fun — this isn't medical or psychological advice.”

Do not make:

- disease claims
- treatment claims
- diagnosis
- mental-health diagnosis
- nutritional prescriptions
- claims that astrology/numerology is scientifically validated

---

# 19. POP-CULTURE MATCH

Each result gets pop culture **interpreted from their answers and character**, not a random famous dump.

Cover periods **1980s–2020s**. Mix **Thai songs and non-Thai songs**. **Clean lyrics only:** no profanity, sexual lyrics or drug references (decided 4 Oct 2026).

Each result should include:

### One song (mix Thai + non-Thai across the 30 archetypes)

Thai / local pool — Apple Music playlist:

https://music.apple.com/th/playlist/%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%AA-%E0%B8%94%E0%B8%AE-%E0%B8%95%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A5/pl.7f4bf56c6d4a483081c662004dedee90?l=th

Thai nostalgia pool (2000s–2010s Kamikaze label, added 4 Oct 2026):

https://salehere.co.th/articles/famous-song-kamikaze

Non-Thai / international pool — Rolling Stone's 500 Greatest Songs, via Wikipedia (replaces the paywalled rollingstone.com list, 4 Oct 2026):

https://en.wikipedia.org/wiki/Rolling_Stone%27s_500_Greatest_Songs_of_All_Time

and other supplied Billboard decade material if available.

### One movie

https://www.imdb.com/chart/top/

### One Place to visit — เที่ยวไหนดี

Replaces the earlier artwork match. Pick one place in Thailand that fits the archetype's vibe. Mix places from these three references:

- https://www.wongnai.com/trips/best-thailand-attraction
- https://krungthai.com/th/financial-partner/learn-financial/2093
- https://travel.trueid.net/detail/3QNKz8yJNZpr

Use the place name and location from the source. The reason it fits the character is a playful interpretation, not a travel review.

Cover a mixture of:

- 1980s
- 1990s
- 2000s
- 2010s
- 2020s

**Pop-culture search exception:** additional search is allowed **only** to cover 1980s–2020s songs and movies that fit the character. Places to visit come from the three เที่ยวไหนดี links above. Do not use extra search to invent wellness, zodiac, lucky-colour, or medical facts.

The match should feel connected to the archetype's vibe.

Do not simply choose random famous items.

Where appropriate, include Asian/Thai cultural relevance.

A valid integration pattern (when it fits that soul):

- Sixpence None the Richer – "Kiss Me" (Billboard Hot 100 1999)
- *My Neighbor Totoro* (1988)

That pair is an example of 90s / late-80s nostalgic density, not a mandatory result for every archetype.

Cultural references should support the personality interpretation rather than feel randomly attached to the result.

Potential content areas include:

- Thai and international music
- movies
- places to visit in Thailand (เที่ยวไหนดี)
- internet culture
- urban culture
- nostalgia
- food
- lifestyle
- contemporary Asian references

---

# 20. SOURCE RULE AND REFERENCE CATALOGUE

These links are the **character and quiz resource references**. Use them to build archetypes, lookups, and dashboard copy.

## Locked factual lookups (do not invent, do not swap sources)

| Dashboard job | How it is used | Source |
|---|---|---|
| Past-life living vs non-living (including unalive objects) | Creative entity pool | https://www.scienceworld.ca/resource/living-or-non-living/ |
| Living things examples | Creative entity pool | https://simplicable.com/world/living-things#google_vignette |
| Zodiac from date + month | Match sign (and element reading) | https://www.britannica.com/topic/zodiac |
| Today's lucky colour + colour meanings | สีมงคลวันนี้ by today's weekday, 6 categories (2569 table) | https://www.huasenghong.com/blog/7317/cloth-lucky-color |
| Eat by lucky colour | Colour-food framework | https://www.jacintha.com.au/journal/five-colours-you-should-be-eating |
| Healthy eating interpreted from lucky colour | Evidence-informed brief | https://www.betterhealth.vic.gov.au/health/healthyliving/healthy-eating |
| Natural holistic nutrition interpreted from lucky colour | Qualified brief | https://www.omicsonline.org/open-access/holistic-nutrition-a-comprehensive-approach-to-health-and-wellbeing-134341.html |
| Ayurvedic diet interpreted from lucky colour | Traditional wellness brief | https://www.everydayhealth.com/diet-nutrition/potential-health-benefits-of-an-ayurvedic-diet/ |
| Zen-way mental exercise from character + answers | Low-risk prompt | https://books.google.com.au/books/about/Zen_For_Overactive_Minds.html?id=HyEQEgAAQBAJ&redir_esc=y |
| Thai songs | Mix into 30-archetype song matches | https://music.apple.com/th/playlist/%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%AA-%E0%B8%94%E0%B8%AE-%E0%B8%95%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A5/pl.7f4bf56c6d4a483081c662004dedee90?l=th |
| Non-Thai songs | Mix into 30-archetype song matches | https://en.wikipedia.org/wiki/Rolling_Stone%27s_500_Greatest_Songs_of_All_Time |
| Thai nostalgia songs (Kamikaze label) | Extra 3rd song pick for matching archetypes | https://salehere.co.th/articles/famous-song-kamikaze |
| Movies | Match from answers + character | https://www.imdb.com/chart/top/ |
| Place to visit (เที่ยวไหนดี) | Match from answers + character; mix the three sources | https://www.wongnai.com/trips/best-thailand-attraction · https://krungthai.com/th/financial-partner/learn-financial/2093 · https://travel.trueid.net/detail/3QNKz8yJNZpr |
**Do not invent factual claims and then attribute them to a source.**

If locked-source content is unavailable in the current environment:

1. Do not guess.
2. Do not fabricate.
3. Flag the missing information.
4. Ask for the relevant source content before using it.

**Pop culture only:** extra search is allowed to fill 1980s–2020s coverage (Thai + non-Thai), starting from the Apple Music, Rolling Stone (Wikipedia) and IMDb links above. Places to visit stay within the three เที่ยวไหนดี links.

Do not extra-search to rewrite zodiac, lucky colour, eating, nutrition, Ayurveda, or Zen facts. One exception: once the 2569 lucky-colour table expires, searching for Hua Seng Hong's 2570 edition is allowed (Section 16).

Entertainment interpretations may be creative, but must clearly be presented as interpretations.

## Thai Culture Context

Inspirational cultural-context references — not locked facts. Use them to keep Thai humor, dialect flavour, and everyday conversational tone authentic across the experience, including the Step 2 scenario questions (Section 6B). Remix their tone and spirit rather than quoting them directly.

- https://www.khaosod.co.th/special-stories/news_7901316
- https://www.wongnai.com/articles/funny-q-a-collection
- https://today.line.me/th/v3/article/x2kPQQe
- https://www.facebook.com/doogunyoung/posts/948210534084295

---

# 21. DATA / RESEARCH DESIGN

The quiz should be designed so that the entertainment layer generates useful research data underneath.

Capture only:

- timestamp
- quiz version
- language
- birthday-derived entertainment fields (zodiac, element, Thai day colour, lucky colour; raw date parts only if needed to replay)
- question IDs
- selected answer IDs
- resulting archetype
- archetype score values if useful

No name, email, phone, location, or account identifiers.

Use a flat JSON structure.

Example:

```json
{
  "timestamp": "2026-09-26T10:30:00Z",
  "quiz_version": "v1",
  "language": "th",
  "birth": {
    "month": 5,
    "day": 12
  },
  "derived": {
    "zodiac": "taurus",
    "element": "earth",
    "thai_day_color": "mon"
  },
  "answers": {
    "q1": "a",
    "q2": "c",
    "q3": "b",
    "q4": "d",
    "q5": "a",
    "q6": "c"
  },
  "archetype": "ARCHETYPE_03",
  "scores": {
    "ARCHETYPE_01": 3,
    "ARCHETYPE_02": 5,
    "ARCHETYPE_03": 10
  }
}
```

This is a **future data-handoff design only**.

Do not implement in the first version:

- backend
- database
- Google Sheets connection
- Apps Script webhook
- Databricks connection
- authentication
- analytics pipeline
- live affiliate network

However, structure the data so that it can later be connected to Google Sheets or Databricks with minimal restructuring.

---

# 22. RESEARCH DASHBOARD

Include a conceptual preview of the eventual researcher-facing dashboard.

Until real data exists, it must use **sample/illustrative data only**.

Clearly label:

> “Illustrative preview — not real participant data.”

Show:

- total participants
- character / archetype distribution
- answer distribution
- potentially interesting audience patterns
- top interests
- cultural / pop-culture patterns
- product-related interest signals (illustrative only in v1)

Include a short marketer-facing interpretation.

For example:

> “This illustrative sample suggests a relatively strong preference for exploratory and nostalgic content.”

Do NOT imply that illustrative data represents the real audience.

Do not make statistical conclusions without sufficient real data.

### User-facing rarity stats and community chart

The Soul Dashboard uses the rarity badge and comparison chart described in Section 14C (weeds, boba pearls, soi cats).

When real collected data exists, drive those numbers from participation.

Until then, the prototype may show the intended pattern (including **148,290** on Step 1 and **2.4%** rarity on Step 3) as **labelled illustrative / campaign UI**, not as a published research finding.

---

# 23. RESEARCH INTERPRETATION FRAMEWORK

Design the eventual research output so that a marketer can investigate:

### WHO

What archetype patterns appear in the audience?

### WHAT

What topics, entertainment and lifestyle interests appear?

### HOW

How do answer choices relate to archetype outcomes?

### WHICH

Which content themes could potentially be relevant to different audience segments?

### WHAT NEXT

What additional research might be useful?

The system should provide observations, not overconfident conclusions.

---

# 24. BUSINESS / AFFILIATE LAYER

The project may connect relevant results or interests with external products.

The intended model is:

**User answers quiz**  
→ **Receives personalized identity**  
→ **Explores relevant recommendation**  
→ **Optional product / affiliate link**

Rules:

- Affiliate is secondary to entertainment
- Recommendations must fit the archetype, not feel randomly attached
- First version must include a **pathway** (content direction + dashboard slot + data tags), not a live commerce stack
- Do not require purchase, account creation, email, or login to see the result
- Birthday picker is part of the entertainment flow, not a checkout identity check

---

# 25. DESIGN DIRECTION

Visual style:

**Minimal + playful + friendly + contemporary + nostalgic**

Use:

- soft & playful colours
- playful typography
- rounded cards
- expressive illustrations
- emoji where appropriate
- generous whitespace
- subtle animation
- large mobile touch targets
- simple navigation

Avoid:

- corporate survey styling
- clinical aesthetics
- excessive gradients
- clutter
- childish preschool-style visuals
- excessive animation
- long paragraphs

The overall feeling should be:

**“A polished social-media quiz campaign.”**

The interface should be:

- easy to understand
- easy to tap
- fast to navigate
- visually interesting without being complicated
- suitable for mobile screens
- appropriate for social sharing

---

# 26. MOBILE-FIRST

The experience must work primarily on mobile.

Prioritise:

- one-thumb interaction
- fast loading
- readable Thai typography
- large buttons
- minimal typing
- short screens
- clear progress
- easy result sharing

Desktop can adapt from the mobile experience rather than the other way around.

---

# 27. SHARING

At the end of the result:

Provide:

**Share Result**

**IG Story export**

and

**Retake Quiz**

The shareable result / story canvas should contain:

- archetype / past-life character
- rarity line
- lucky colour
- zodiac
- short personality / vibe line

Make it visually screenshot-friendly and story-export-friendly even if native Instagram publishing is not fully implemented yet.

---

# 28. TECHNICAL SCOPE

## Initial Version

Build a:

> **Single-page interactive quiz game with a personalized Soul Dashboard.**

The initial version should focus on validating:

- concept
- quiz flow (3 steps, one page)
- character / archetype system
- result experience
- visual direction
- language direction
- content structure
- research data object
- future affiliate / product integration pathway

## Out of Scope (first version)

The initial version does **not** require:

- backend
- database
- user accounts
- search functionality
- complex authentication
- large-scale data infrastructure
- live affiliate checkout
- Google Sheets / Databricks connection

These may be considered in later phases.

---

# 29. PROJECT ARCHITECTURE AND SUPPORTING FILES

Detailed systems should be developed progressively rather than putting every line of copy into a single file.

### `SPEC-Pastlives.md`

Defines **what the project is and what it needs to achieve**. This is the source of truth if other files conflict.

### `DesignUX.md`

Defines **how the experience looks, behaves, and flows**.

### `DesignLanguage.md`

Defines **how the project speaks**, including Thai/English tone and cultural language.

### 

### `ArchetypeReference.md`

Defines the **30 archetypes and their relationships to quiz answers and results**.

Do not treat the split as permission to skip the Archetype Reference File before build.

---

# 30. APPROVAL WORKFLOW

Do NOT mark the project complete automatically.

### PHASE 1 — ENVISION, PLAN, AND CONCEPT

Create:

- Archetype Reference File
- scoring system (quiz-only; birthday overlays dashboard)
- quiz questions (use all listed examples as a pool, not a cap)
- result / Soul Dashboard structure
- research dimensions
- recommendation / affiliate direction notes
- foundations for DesignUX.md, DesignLanguage.md, and CharacterType.md as needed

Then stop.

**Ask for review and approval of the archetype system.**

### PHASE 2 — INITIAL PROTOTYPE (only after approval)

Build the first working experience:

- landing + birthday picker (Step 1)
- scenario questions (Step 2)
- deterministic scoring
- Soul Dashboard with integrated birthday + archetype data (Step 3)
- community chart + IG Story export
- TH/EN toggle
- data object generation
- research dashboard preview
- shareable result
- non-live recommendation pathway

The objective is to make the complete experience **work from beginning to end**.

### PHASE 3 — REVIEW AND ITERATIVE DEVELOPMENT

Present the working experience.

Check:

- wording
- Thai naturalness
- archetype accuracy
- visual direction
- quiz logic
- result logic
- research usefulness
- source attribution
- does it work?
- is it understandable?
- is it fun?
- is it fast?
- does it feel like the intended concept?
- does the content make sense?
- is factual information accurate?
- does the experience encourage sharing?

Process:

**Build → Test → Review → Correct → Repeat**

Do not call it finished until it is approved.

---

# 31. DEFINITION OF DONE — FIRST VERSION

The first version is considered complete when:

- It is one page with the 3-step flow (welcome/birthday → scenario questions → Soul Dashboard).
- The quiz works end-to-end.
- Step 2 uses the listed urban Thai and lifestyle scenarios as **examples, not a limit**, typically 5–6 questions for pacing.
- There are 30 coherent archetypes.
- Archetypes have deterministic scoring independent of birthday.
- Birthday picker calculates Western Zodiac, element and Thai day colour; today's lucky colour comes from today's weekday.
- TH/EN toggle works.
- No required name, email, phone, exact location, social account, or login.
- Results render consistently as a Soul Dashboard with rarity badge, character card, authentic integrated data, community chart, and share/IG Story export.
- Every archetype has a complete result package that can integrate with birthday-derived layers.
- Past-life concept is playful and clearly fictional lik Cosmo Magazine.
- On-screen Western Zodiac is birthday-derived (Britannica), not a faked sign.
- Today's lucky colour and its meaning come from the Hua Seng Hong source for the current year.
- Wellness information is appropriately qualified.
- Pop-culture results are mapped consistently.
- Source-grounded claims are traceable to supplied material.
- Data is structured for future Google Sheets / Databricks integration.
- No real backend / database is implemented.
- Internal research dashboard uses clearly labelled illustrative data until real data exists.
- Campaign/prototype social-proof numbers (148,290; 2.4%) are treated as UI pattern until live data replaces them.
- A future affiliate / product integration pathway exists without turning v1 into a store.
- Supporting files can be developed, but this spec remains the contract.
- The experience is reviewed and approved before final completion.

---

# 32. SUCCESS CRITERIA

The project should demonstrate that users can:

1. Understand the concept quickly.
2. Start the quiz without needing explanation.
3. Complete the quiz with low friction.
4. Feel curious about their result.
5. Recognize something relatable in their interpretation.
6. Enjoy the absurdity of their “past life.”
7. Share the result with others.

The project should ultimately create the feeling:

> **“I don't know why this is so accurate, but this is definitely me.”**

---

# YOUR IMMEDIATE TASK(Skip if it's done)
**DO NOT BUILD THE WEBSITE YET.**

First produce the **ARCHETYPE REFERENCE FILE** (`ArchetypeReference.md`).

It should contain:

1. 30 proposed archetypes
2. Thai + English names
3. Past-life entity
4. Core vibe
5. 3–5 descriptors
6. Audience-research dimensions
7. Past-life story
8. Character visual direction
9. Assigned archetype zodiac *vibe pairing* (dashboard zodiac still comes from birthday)
10. Archetype visual colour direction (dashboard lucky colour still comes from birthday)
11. Food/colour direction
12. Wellness direction
13. Zen-style exercise direction (include the 3-minute warm-water breathing pattern as a reusable template)
14. Pop-culture identity
15. Shareable one-liner
16. Research tags
17. Future recommendation / affiliate direction
18. The complete scoring framework for the proposed question set (typically 5–6, examples are not a cap)
19. The proposed quiz questions, keeping all Section 6B examples in the pool and adding more if useful
20. Answer options and scoring weights
21. Explanation of what each question is designed to measure
22. How birthday-derived zodiac / Thai day colour / lucky colour / element overlay the Soul Dashboard without changing the archetype score

Then **STOP and ask for review of the Archetype Reference File before building anything.**

Do not search the web.

Do not build the website.

Do not create a backend.

Do not assume approval.

The immediate goal is to create a strong, coherent **creative + audience-research foundation** that can be approved before implementation.
