# Astrology_Colour.md — SoulZine Birthday Layer

**Status:** DRAFT v2 (3 Oct 2026) — Task 3 of `SPEC-Pastlives.md`. Pending review. v2 drops astroleaf numerology; lucky colours and their meanings now come only from Hua Seng Hong, by **today's** weekday.
**Job:** the lookup lists and TH/EN meanings for the personalisation layer: Western zodiac, element, Thai birth-day colour and today's lucky colour. This layer is **separate from the quiz**. It never changes the past-life archetype (spec §6, §8).

Spec wins on any conflict. Visual swatches follow `DesignSystem.md` §2.5–2.6.

---

## 0. How to read this file

Every row says where its content comes from:

| Tag | Meaning | Shown in the app as |
|---|---|---|
| **[SOURCE]** | Taken from the named reference. Do not reword the facts | มีแหล่งอ้างอิง (blue tag) |
| **[TRADITION]** | Common Thai or astrological convention. No supplied link covers it yet | ความเชื่อไทย (tradition) |
| **[FUN]** | Our playful interpretation, written for SoulZine. Not from any source | เอาฮา (lime tag) |

Disclaimer shown with every block:
- TH: *เล่นขำ ๆ นะ ดูดวงไม่ใช่วิทยาศาสตร์ ไม่ใช่คำแนะนำทางการแพทย์หรือจิตวิทยา*
- EN: *Just for fun — astrology and colour beliefs aren't science, and this isn't medical or psychological advice.*

### Sources

| Layer | Source | What it gave us |
|---|---|---|
| Zodiac dates, elements | Britannica, https://www.britannica.com/topic/zodiac (via the table already in `DesignUX.md` §6; the page blocked a re-check on 3 Oct 2026) | Sign dates, element of each sign |
| Today's lucky colour + meanings | Hua Seng Hong, https://www.huasenghong.com/blog/7317/cloth-lucky-color (fetched 3 Oct 2026) | สีเสื้อมงคล 2569 for each weekday, in 6 categories with their meanings |

astroleaf.in (numerology) is **no longer used** (decision of 3 Oct 2026).

---

## 1. Western Zodiac — ราศี (from date + month)

Dates **[SOURCE: Britannica]** · Thai names, symbols **[TRADITION]** · vibe lines **[FUN]**

| Key | Sign | ราศี | Dates | Symbol | Element | Vibe (TH) [FUN] | Vibe (EN) [FUN] |
|---|---|---|---|---|---|---|---|
| `aries` | Aries ♈ | ราศีเมษ | 21 Mar – 19 Apr | Ram · แกะ | Fire | สายลุย คิดปุ๊บทำปั๊บ เป็นคนแรกที่กดเริ่มเสมอ | First to hit start. Thinks later, moves now. |
| `taurus` | Taurus ♉ | ราศีพฤษภ | 20 Apr – 20 May | Bull · วัว | Earth | มั่นคง สุขุม สายของอร่อย ใครเร่งก็ไม่รีบ | Steady, calm, loves good food, and won't be rushed. |
| `gemini` | Gemini ♊ | ราศีเมถุน | 21 May – 20 Jun | Twins · คนคู่ | Air | คุยเก่ง ในหัวเปิดไว้ 20 แท็บพร้อมกัน | Great talker with 20 tabs open in their head. |
| `cancer` | Cancer ♋ | ราศีกรกฎ | 21 Jun – 22 Jul | Crab · ปู | Water | เปลือกแข็งแต่ข้างในนุ่มนิ่ม แอบห่วงทุกคน | Tough shell, soft centre, quietly looks after everyone. |
| `leo` | Leo ♌ | ราศีสิงห์ | 23 Jul – 22 Aug | Lion · สิงโต | Fire | ออร่าตัวแม่ เดินเข้าห้องไหนห้องนั้นสว่าง | Main-character energy. Lights up any room. |
| `virgo` | Virgo ♍ | ราศีกันย์ | 23 Aug – 22 Sep | Maiden · หญิงสาว | Earth | ละเอียดยิบ เช็กลิสต์ครบก่อนออกจากบ้าน | Detail expert. The checklist is done before leaving home. |
| `libra` | Libra ♎ | ราศีตุลย์ | 23 Sep – 22 Oct | Scales · ตาชั่ง | Air | สายบาลานซ์ เลือกร้านข้าวครึ่งชั่วโมงเพราะอยากให้ทุกคนแฮปปี้ | Balance seeker. Takes 30 minutes to pick lunch so everyone's happy. |
| `scorpio` | Scorpio ♏ | ราศีพิจิก | 23 Oct – 21 Nov | Scorpion · แมงป่อง | Water | นิ่งแต่ลึก รู้ทุกเรื่องแต่ไม่พูด | Quiet but deep. Knows everything, says little. |
| `sagittarius` | Sagittarius ♐ | ราศีธนู | 22 Nov – 21 Dec | Archer · คนยิงธนู | Fire | จองตั๋วก่อน ค่อยคิดทีหลังว่าไปทำอะไร | Books the ticket first, figures out the trip later. |
| `capricorn` | Capricorn ♑ | ราศีมังกร | 22 Dec – 19 Jan | Sea-goat · แพะทะเล | Earth | ค่อย ๆ ปีน แต่ถึงยอดทุกที | Slow, steady climber who always reaches the top. |
| `aquarius` | Aquarius ♒ | ราศีกุมภ์ | 20 Jan – 18 Feb | Water bearer · คนแบกหม้อน้ำ | Air | ไอเดียแปลกใหม่ มาก่อนเทรนด์สามปี | Odd ideas, three years ahead of the trend. |
| `pisces` | Pisces ♓ | ราศีมีน | 19 Feb – 20 Mar | Fish · ปลาคู่ | Water | ช่างฝัน อินกับเพลงเศร้าได้ทุกเพลง | Dreamy. Feels every sad song. |

> **Flag Z1 — Thai vs Western dates.** Many Thai readers know ราศี by Thai (sidereal) dates, which start mid-month (e.g. ราศีเมษ ≈ 13 Apr – 14 May). The spec asks for the Western zodiac from Britannica, so the app should label it **"ราศีแบบตะวันตก (Western zodiac)"** to avoid "this is the wrong sign!" reactions.
>
> **Flag Z2 — boundary days** can shift by a day between years. Check the cusp dates against Britannica before launch (already noted in `DesignUX.md` §6).

---

## 2. Element — ธาตุ (from the zodiac sign)

Sign → element **[SOURCE: Britannica]** · meanings **[FUN]**. The earth line uses the spec's own example (§6A: "ธาตุดิน มั่นคง สุขุม").

| Key | ธาตุ | Element | Signs | Meaning (TH) [FUN] | Meaning (EN) [FUN] | Dot colour |
|---|---|---|---|---|---|---|
| `fire` | ธาตุไฟ | Fire | Aries, Leo, Sagittarius | ร้อนแรง กล้าลุย พลังเหลือเฟือ | Bold, warm, endless energy | `#FF8A3D` |
| `earth` | ธาตุดิน | Earth | Taurus, Virgo, Capricorn | มั่นคง สุขุม ติดดิน พึ่งพาได้ | Steady, calm, grounded, dependable | `#9AA84A` |
| `air` | ธาตุลม | Air | Gemini, Libra, Aquarius | คิดไว พูดเก่ง รักอิสระ | Quick-thinking, chatty, free-spirited | `#8FD8EE` |
| `water` | ธาตุน้ำ | Water | Cancer, Scorpio, Pisces | อ่อนโยน อ่านใจคนเก่ง รู้สึกลึกซึ้ง | Gentle, intuitive, feels deeply | `#6F8BEA` |

The spec calls this the "biological element". On screen, call it **ธาตุประจำราศี / Your element**. "Biological" suggests a body or medical claim, which spec §15 rules out.

---

## 3. Thai Day Colour — สีประจำวันเกิด

There are two different things here. Keep them apart in the app.

### 3.1 Birth-day colour (from the weekday you were born) [TRADITION]

The weekday comes from the optional weekday pill in Step 1 (`DesignUX.md` §4.1), because date + month alone can't give it. Thai weekday names are the planets themselves (อาทิตย์ = Sun, จันทร์ = Moon, …), so the planet link is plain language.

> **Flag T1 — no source yet.** The Hua Seng Hong page explicitly says its colours are **"ตามวันปัจจุบันไม่ใช่ตามวันเกิด"** (by today's day, not by birth day). It does **not** list a base colour per birth weekday. The colours below are the widely known Thai tradition already used in `DesignSystem.md` §2.5. They need a source link before launch, or must keep the "ความเชื่อไทย" label.

| Key | วันเกิด | Born on | ดาว / Planet | สีประจำวันเกิด | Colour | Dot | Vibe (TH) [FUN] | Vibe (EN) [FUN] |
|---|---|---|---|---|---|---|---|---|
| `sun` | วันอาทิตย์ | Sunday | พระอาทิตย์ · Sun | แดง | Red | `#E8412C` | พลังเต็มถัง เปิดวงก่อนใคร | Full battery, always opens the party |
| `mon` | วันจันทร์ | Monday | พระจันทร์ · Moon | เหลือง | Yellow | `#FFD23F` | อบอุ่น อ่อนโยน ใครอยู่ใกล้ก็สบายใจ | Warm and gentle, comfortable to be around |
| `tue` | วันอังคาร | Tuesday | อังคาร · Mars | ชมพู | Pink | `#FF8CC0` | หวานแต่กล้า น่ารักแบบมีพลัง | Sweet but brave, cute with power |
| `wed` | วันพุธ | Wednesday | พุธ · Mercury | เขียว | Green | `#3FA86B` | สดชื่น คุยเก่ง ไปได้กับทุกคน | Fresh, chatty, gets along with everyone |
| `thu` | วันพฤหัสบดี | Thursday | พฤหัสบดี · Jupiter | ส้ม | Orange | `#FF8A3D` | สายครู สายแชร์ ชอบสอนชอบเล่า | The friend who explains everything |
| `fri` | วันศุกร์ | Friday | ศุกร์ · Venus | ฟ้า | Sky blue | `#5BB8F0` | ชิล ๆ ใจดี สายศิลป์ | Chill, kind, artsy |
| `sat` | วันเสาร์ | Saturday | เสาร์ · Saturn | ม่วง | Purple | `#8E5BD9` | ลึกลับ นิ่ง แต่เท่ | Mysterious, calm, cool |

> **Flag T2 — Wednesday night.** Thai tradition splits วันพุธกลางวัน and วันพุธกลางคืน (Rahu). `DesignSystem.md` decided "Wednesday = green only". Hua Seng Hong doesn't split Wednesday either, so keep one Wednesday.

### 3.2 Today's lucky colours — สีมงคลวันนี้ (from today's weekday) [SOURCE: Hua Seng Hong]

From **"สีเสื้อมงคล 2569 ประจำวัน"**. Use it as a daily "what to wear today" card that changes with the current day. Don't present it as your birth-day colour. It fits the magazine idea well: a daily horoscope column that gives people a reason to come back.

**Year-bound:** the table is for **พ.ศ. 2569 (2026)**. It needs replacing for 2570. Once it expires (1 Jan 2570), a web search is allowed **only** to find Hua Seng Hong's 2570 edition (spec §16). Replace the table and the headline list, then update the version line here.

#### Categories (TH quoted from the page · EN translated)

| Key | หมวด | When to wear (TH, quoted) | Category (EN) | When to wear (EN) |
|---|---|---|---|---|
| `work` | สีเสริมการงาน | "วันไหนมีพรีเซนต์ เสนอโปรเจกต์ ประชุมงาน" · "เรียกความเมตตาจากผู้ใหญ่ได้แบบไม่รู้ตัว" | Work | Presentations, pitches, meetings; wins support from seniors |
| `money` | สีเสริมการเงิน | "หากมีแพลนใช้จ่ายเงิน เซ็นสัญญาการลงทุน" | Money | Spending plans, signing contracts, investing |
| `love` | สีเสริมความรัก | "ในวันออกเดทครั้งแรก หรือวันเที่ยวกับคนรัก" | Love | First dates, days out with someone special |
| `health` | สีเสริมสุขภาพ | "หมดแรง ไม่สบาย หรือต้องเดินทางไกล" | Health & energy | Low-energy days, long trips |
| `luck` | สีเสริมโชคลาภ | "วันไหนหวยออก มีสัมภาษณ์ หรือหวังผลอะไรอยู่" | Luck | Lottery days, interviews, hoping for a result |
| `avoid` | สีฉุดดวง | "สีนี้คือศัตรูชีวิต" | Avoid today | The colour to skip today |

The "health" category is about mood and outfit, not health. In the app, label it **"สีเติมพลัง / Energy colour"** so it can't read as a health claim (spec §18).

#### Table (colours quoted from the page · EN translated)

| วัน | Day | การงาน · Work | การเงิน · Money | ความรัก · Love | สุขภาพ · Energy | โชคลาภ · Luck | ฉุดดวง · Avoid |
|---|---|---|---|---|---|---|---|
| วันอาทิตย์ | Sun | ม่วง, ดำ · purple, black | เขียว · green | ชมพู · pink | ขาว, ครีม, เทา · white, cream, grey | ม่วง · purple | ฟ้า, น้ำเงิน · light blue, navy |
| วันจันทร์ | Mon | ส้ม, น้ำตาล · orange, brown | ม่วง, ดำ · purple, black | เขียว · green | ชมพู · pink | ฟ้า, น้ำเงิน · light blue, navy | แดง · red |
| วันอังคาร | Tue | ม่วง, ชมพู · purple, pink | ส้ม, น้ำตาล · orange, brown | ม่วง, ดำ · purple, black | เขียว · green | แดง · red | เหลือง, ขาว · yellow, white |
| วันพุธ | Wed | ฟ้า, น้ำเงิน · light blue, navy | ม่วง · purple | ส้ม, น้ำตาล · orange, brown | ม่วง, ดำ · purple, black | เหลือง, ขาว, เทา · yellow, white, grey | ชมพู · pink |
| วันพฤหัสบดี | Thu | เหลือง, ขาว, เทา · yellow, white, grey | แดง · red | ฟ้า, น้ำเงิน · light blue, navy | เทา · grey | เขียว · green | ม่วง, ดำ · purple, black |
| วันศุกร์ | Fri | เขียว · green | ชมพู · pink | เหลือง, ขาว, เทา · yellow, white, grey | แดง, ส้ม · red, orange | ส้ม, น้ำตาล · orange, brown | ม่วง · purple |
| วันเสาร์ | Sat | แดง · red | ฟ้า, น้ำเงิน · light blue, navy | ม่วง, ชมพู · purple, pink | ส้ม, เหลือง · orange, yellow | ชมพู, แดง · pink, red | เขียว · green |

> **Verification note.** This table was read through a web-fetch summariser. Monday, Wednesday and Sunday were checked against the raw page twice. Spot-check the other four days by eye against the page before launch.
>
> The page names no astrologer or underlying system, so the app credits it as "ที่มา: Hua Seng Hong · สีเสื้อมงคล 2569".

#### Headline lucky colour

The card shows all six categories. One colour is also picked as **today's headline lucky colour**: the first colour under **สีเสริมโชคลาภ (Luck)**. It drives the big swatch, the IG Story chip, and the "eat by lucky colour" food line (spec §17).

| Day | Headline lucky colour | Avoid |
|---|---|---|
| Sun | ม่วง · purple | ฟ้า · light blue |
| Mon | ฟ้า · light blue | แดง · red |
| Tue | แดง · red | เหลือง · yellow |
| Wed | เหลือง · yellow | ชมพู · pink |
| Thu | เขียว · green | ม่วง · purple |
| Fri | ส้ม · orange | ม่วง · purple |
| Sat | ชมพู · pink | เขียว · green |

#### Swatches (design approximations, not from the source)

| สี | Colour | Hex |
|---|---|---|
| แดง | Red | `#E8412C` |
| ส้ม | Orange | `#FF8A3D` |
| เหลือง | Yellow | `#FFD23F` |
| เขียว | Green | `#3FA86B` |
| ฟ้า | Light blue | `#5BB8F0` |
| น้ำเงิน | Navy | `#2B3FA8` |
| ม่วง | Purple | `#8E5BD9` |
| ชมพู | Pink | `#FF8CC0` |
| น้ำตาล | Brown | `#8B5A3C` |
| ดำ | Black | `#141414` |
| ขาว | White | `#FFFFFF` (with ink outline) |
| เทา | Grey | `#9A9A9A` |
| ครีม | Cream | `#F3E5C8` |

The first eight reuse the `DesignSystem.md` Thai-day tokens, so the two colour layers look like one family.

#### Playful line per category [FUN]

The source gives *when* to wear each colour. These short lines put that into the SoulZine voice. They paraphrase the source's meaning and add no new claim.

| Key | TH [FUN] | EN [FUN] |
|---|---|---|
| `work` | วันนี้มีพรีเซนต์? ใส่สีนี้ ผู้ใหญ่เอ็นดูแบบงง ๆ | Big meeting today? Wear this and the bosses will like you without knowing why. |
| `money` | จะเซ็นอะไร จะจ่ายอะไร ใส่สีนี้ไว้ก่อน | Signing or spending today? Start with this colour. |
| `love` | มีเดตไหม? สีนี้ช่วยเพิ่มเสน่ห์ | Got a date? This one turns up the charm. |
| `health` | วันหมดแรงหรือเดินทางไกล หยิบสีนี้เติมพลัง | Running low or travelling far? Grab this for a boost. |
| `luck` | ลุ้นหวย ลุ้นสัมภาษณ์ ลุ้นอะไรอยู่ สีนี้แหละ | Waiting on a lottery, an interview, anything? This is the one. |
| `avoid` | สีนี้ขอพักก่อนนะวันนี้ | Give this colour a day off. |

---

## 4. How the app uses this file

| Input (Step 1) | Output | Section | Tab (`DesignUX.md` §4.4) |
|---|---|---|---|
| date + month | Zodiac sign, dates, symbol, vibe line | §1 | Welcome result bar, ตัวตน |
| date + month | Element + meaning | §2 | Soul card chip, ตัวตน |
| weekday pill (optional) | Birth-day colour | §3.1 | ตัวตน |
| today's date (device clock, no input) | Today's 6 lucky colours + headline colour | §3.2 | Result bar swatch, ตัวตน ("สีมงคลวันนี้"), IG Story chip, eat-by-colour |

Research object (spec §21) stores only keys: `derived.zodiac` (`aries`…), `derived.element` (`fire`…), `derived.thai_day_color` (`sun`…`sat`, only if a pill was tapped). Today's colours are not stored: they say nothing about the person, and the timestamp already gives the day.

---

## 5. Decisions for review

| # | Decision | Recommendation |
|---|---|---|
| A1 | Use Hua Seng Hong as **today's** lucky colour (its stated purpose), not as the birth-day colour | **Decided 3 Oct 2026.** Astroleaf numerology dropped |
| A2 | Keep the traditional birth-day colours (§3.1) with a "ความเชื่อไทย" label until a source link is added | Yes, or send a link that lists สีประจำวันเกิด |
| A3 | Label the zodiac "ราศีแบบตะวันตก" (Flag Z1) | Yes |
| A4 | Rename "biological element" to "ธาตุประจำราศี / Your element" on screen | Yes |
| A5 | Rename the "สุขภาพ" category to "สีเติมพลัง / Energy colour" on screen | Yes |
| A6 | Headline lucky colour = first สีเสริมโชคลาภ colour of today (§3.2) | Yes |
| A7 | Thai copy in the [FUN] lines is a first draft | Native-speaker pass with the rest of the copy |
| A8 | The 2569 table expires on 1 Jan 2570 | **Decided 3 Oct 2026.** On expiry, search only for Hua Seng Hong's 2570 edition and replace the table |
| A9 | `DesignSystem.md` and `DesignUX.md` described astroleaf numerology | **Done 3 Oct 2026.** Both updated to today's lucky colour |
