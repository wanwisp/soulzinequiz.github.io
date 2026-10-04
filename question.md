# question.md — SoulZine Question Pool

**Status:** v2 (4 Oct 2026) — Task 4 of `SPEC-Pastlives.md`. **Final pool picked by you: 12 questions in 6 twin pairs.** Q7, Q10, Q12, Q14 are kept as reserves.
**What this is:** 16 written questions (the 6 from the app + 10 new), each in TH/EN with 5 answers. **12 are in the live pool**, and each play shows **6**: one random twin per group.

Spec rules followed (§6B, §9): silly urban Thai scenarios, indirect (no "Are you adventurous?"), 3–5 answers (we use 5), Thai copy natural and casual, pronoun always **คุณ** (`designlanguage.md`), EN adapted rather than translated literally.

---

## 0. Final selection: twin pairs, one shown at random

The 30 archetypes sit in **6 groups of 5**. Every question in a group gives its 5 answers to that group's 5 archetypes (one "home" archetype per answer).

| Group | Archetypes (home answers A–E) | **Live twins** (one shown per play) | Reserve |
|---|---|---|---|
| **G1** | 01 Mookata Flame · 02 Awning Raindrop · 03 18th 7-Eleven Umbrella · 04 Window-Shopping Moth · 05 Puddle-Jumping Sparrow | **Q1** Siam rain · **Q8** Concert tickets | Q7 |
| **G2** | 06 Scholarly Earthworm · 07 Sinking Matcha Foam · 08 Cork Coaster · 09 Desk Sprout · 10 Stir Stick | **Q2** Japanese café · **Q9** Group project | Q10 |
| **G3** | 11 Cassette Ribbon · 12 Soi Cat · 13 Bobblehead · 14 Camera Roll · 15 Karaoke Mic | **Q3** Asok jam · **Q11** Friend's wedding | Q12 |
| **G4** | 16 2AM Noodle Steam · 17 80s Neon Sign · 18 Cringe-Memory Cockroach · 19 Damp Moss · 20 Fridge Light | **Q4** 2 AM cravings · **Q13** Street food | Q14 |
| **G5** | 21 Overheating Phone · 22 Pavement Weed · 23 Nap Hammock · 24 DIY Craft Kit · 25 Sticky Note | **Q5** Free afternoon · **Q15** Long weekend | — |
| **G6** | 26 Secondhand Book · 27 Boba Pearl · 28 Monsoon Cloud · 29 Night Market Wok · 30 Blanket Burrito | **Q6** Disappear to · **Q16** Birthday plan | — |

### Rules
1. **Each play:** for every group G1→G6 in order, the app picks one twin at random. That makes 6 questions, and all 30 archetypes stay reachable in every play. 2⁶ = 64 possible quizzes.
2. **Back** keeps the same questions and answers within a play. **Retake** draws new twins.
3. **Twins score the same.** Answer A in either twin gives the same home (+3) and the same two bonus (+1) archetypes, and so on for B–E (`ArchetypeReference.md` §3.6). The result depends only on *which answer* you picked, never on which twin you saw, so the tested balance holds for all 64 quizzes.
4. **Data:** the research object stores the question ID actually shown (e.g. `q8`) and the answer letter. Because twins share the same archetype mapping, answers can be pooled by group (`g1: "c"`) for analysis.
5. **Reserves** (Q7, Q10, Q12, Q14) are fully written and score-ready. Each can replace its group's twin later without re-testing.

Q1–Q6 = from the app (`app/js/data-questions.js`). Q7–Q16 = new.

---

## G1 — 01 Flame · 02 Raindrop · 03 Umbrella · 04 Moth · 05 Sparrow

### Q1 — Monsoon at Siam *(existing)* · **LIVE**
**Measures:** `spontaneity` vs `stability`: reaction to a sudden disruption.
**TH:** ฝนเทลงมากลางสยาม ร่มก็ไม่มี ทำไงดี?
**EN:** It suddenly starts pouring at Siam Square. What do you do?

| # | TH | EN | Home |
|---|---|---|---|
| A | วิ่งฝ่าฝนไปร้านหมูกระทะ ยังไงก็เปียกอยู่แล้ว | Make a run for it — mookata is calling | 01 Flame |
| B | ยืนหลบใต้กันสาด เปิดเพลงอินดี้ เหมือนอยู่ใน MV | Stand under the awning, put on something indie and moody | 02 Raindrop |
| C | เดินเข้าเซเว่น ซื้อร่มคันที่ 18 ของปีนี้ | Buy your 18th 7-Eleven umbrella, just in case | 03 Umbrella |
| D | หลบเข้าร้านข้างทาง ทำเป็นเดินดูของ | Duck into the nearest shop and pretend to browse | 04 Moth |
| E | กระโดดเล่นแอ่งน้ำเหมือนไม่มีอะไรเกิดขึ้น | Start jumping in puddles like nothing's wrong | 05 Sparrow |

### Q7 — Plans suddenly cancelled *(new · spec territory #10)* · *reserve*
**Measures:** `spontaneity` vs `stability`: how you fill a sudden gap.
**TH:** นัดเพื่อนไว้ทั้งวัน แต่เพื่อนเทกะทันหันตอนเช้า คุณจะ…
**EN:** Your friend bails on your all-day plans that morning. You…

| # | TH | EN | Home |
|---|---|---|---|
| A | ทักแก๊งอื่นทันที "หมูกระทะคืนนี้ใครไป!" | Instantly text another group: "Mookata tonight, who's in?" | 01 Flame |
| B | นั่งริมหน้าต่าง เปิดเพลย์ลิสต์เศร้า อินเกินเบอร์ | Sit by the window with a sad playlist, fully in your feelings | 02 Raindrop |
| C | ไม่เป็นไร มีแพลนสำรองไว้แล้ว 3 อัน | No problem, you had three backup plans anyway | 03 Umbrella |
| D | เดินห้างวนไปเรื่อย ๆ ดูทุกร้านแต่ไม่ซื้ออะไร | Wander the mall, look at every shop, buy nothing | 04 Moth |
| E | งั้นออกไปหาอะไรสนุก ๆ ทำแถวบ้านแทน | Fine, go find something fun to do around the block | 05 Sparrow |

### Q8 — Concert ticket war *(new)* · **LIVE**
**Measures:** `spontaneity` vs `stability`; `pop_culture_interest`.
**TH:** 10 โมงตรงเปิดกดบัตรคอนเสิร์ตศิลปินในดวงใจ คุณคือสายไหน?
**EN:** Tickets for your favourite artist drop at 10:00 sharp. What's your strategy?

| # | TH | EN | Home |
|---|---|---|---|
| A | กดรัว ๆ ไม่ดูผัง ได้โซนไหนเอาโซนนั้น | Smash the button, ignore the seat map, take whatever | 01 Flame |
| B | ยังไม่ทันกดก็เศร้าล่วงหน้าเผื่อไม่ได้ไว้ก่อน | Already sad in advance, just in case | 02 Raindrop |
| C | เตรียม 3 เครื่อง เน็ตสำรอง บัตรเครดิตจำไว้ในหัว | Three devices, backup wifi, card number memorised | 03 Umbrella |
| D | ไม่ได้จะไปหรอก แค่เข้าไปส่องผังเฉย ๆ | Not even going, just here to look at the seat map | 04 Moth |
| E | ไม่ได้บัตรก็ไปยืนฟังนอกฮอลล์ ฟินเหมือนกัน | No ticket? Listen from outside the hall, still a vibe | 05 Sparrow |

---

## G2 — 06 Earthworm · 07 Matcha Foam · 08 Cork Coaster · 09 Desk Sprout · 10 Stir Stick

### Q2 — Japanese café object *(existing)* · **LIVE**
**Measures:** `stability` vs `creativity`: how you see your role.
**TH:** ถ้าเป็นของชิ้นหนึ่งในคาเฟ่ญี่ปุ่นสุดมินิมอล จะเป็นอะไรดี?
**EN:** If you were an object in a minimalist Japanese café, which one are you?

| # | TH | EN | Home |
|---|---|---|---|
| A | ไส้เดือนใต้กระถางต้นไม้ริมหน้าต่าง | The earthworm quietly working in the windowsill planter | 06 Earthworm |
| B | ฟองมัทฉะที่ค่อย ๆ จมลงในแก้ว | The matcha foam slowly sinking into the glass | 07 Matcha Foam |
| C | แผ่นรองแก้วคอร์กที่ทุกคนพึ่งพาได้ | The cork coaster everyone quietly relies on | 08 Cork Coaster |
| D | ต้นอ่อนดื้อ ๆ บนโต๊ะที่ไม่ยอมเหี่ยว | The stubborn little desk sprout that refuses to wilt | 09 Desk Sprout |
| E | ไม้คนกาแฟที่ชิลกับทุกสถานการณ์ | The wooden stir stick, unbothered by everything | 10 Stir Stick |

### Q9 — Group project energy *(new · spec territory #7)* · **LIVE**
**Measures:** `social_energy`, `stability`: the role you take in a group.
**TH:** งานกลุ่มที่มีเพื่อนในกลุ่ม 6 คน คุณคือคนไหน?
**EN:** A group project with six people. Which one are you?

| # | TH | EN | Home |
|---|---|---|---|
| A | คนทำสไลด์ทั้งหมดเงียบ ๆ ตอนตีสอง ไม่ขอเครดิต | The one who quietly makes every slide at 2 AM, no credit needed | 06 Earthworm |
| B | คนที่พิมพ์ในแชทกลุ่มแล้วลบ 5 รอบก่อนส่ง | The one who types in the group chat and deletes it five times | 07 Matcha Foam |
| C | คนที่ทุกคนมาระบายด้วย แถมซื้อขนมมาฝาก | The one everyone vents to, who also brings snacks | 08 Cork Coaster |
| D | คนที่โดนตีกลับ 3 รอบก็ยังไม่ยอมแพ้ | The one who gets sent back three times and still won't quit | 09 Desk Sprout |
| E | คนที่ตอบทุกอย่างว่า "ได้หมด แล้วแต่เพื่อน" | The one whose answer to everything is "whatever works for you" | 10 Stir Stick |

### Q10 — Monday, 8 AM *(new)* · *reserve*
**Measures:** `stability`, `wellness_interest`: how you start the week.
**TH:** เช้าวันจันทร์ 8 โมง ที่ออฟฟิศ/มหาลัย คุณกำลัง…
**EN:** Monday, 8 AM, at work or uni. You're…

| # | TH | EN | Home |
|---|---|---|---|
| A | มาถึงก่อนทุกคน เปิดไฟ ล้างแก้ว เริ่มงานเงียบ ๆ | First in, lights on, mugs washed, quietly working | 06 Earthworm |
| B | จ้องอีเมลแรกอยู่นาน ซ้อมตอบในหัวสิบแบบ | Staring at the first email, rehearsing ten replies in your head | 07 Matcha Foam |
| C | ซื้อกาแฟมาฝากทั้งทีม จำได้ด้วยว่าใครหวานน้อย | Bringing coffee for the whole team, and you remember who takes less sugar | 08 Cork Coaster |
| D | ตาปรือแต่ยังรดน้ำต้นไม้บนโต๊ะ แล้วลุยต่อ | Half asleep, but you still water your desk plant and push on | 09 Desk Sprout |
| E | ยังไงก็ได้ เดี๋ยวมันก็ผ่านไปเองแหละ | Whatever, it'll pass on its own | 10 Stir Stick |

---

## G3 — 11 Cassette · 12 Soi Cat · 13 Bobblehead · 14 Camera Roll · 15 Karaoke Mic

### Q3 — Asok 99-minute jam *(existing)* · **LIVE**
**Measures:** `social_energy` vs `wellness_interest`: coping with forced stillness.
**TH:** ติดแหง็กบนถนนอโศก 99 นาที ทำอะไรอยู่ในหัว?
**EN:** Stuck in a 99-minute jam on Asok Road. What's happening in your head?

| # | TH | EN | Home |
|---|---|---|---|
| A | ซ้อมท่าเต้นยุค 90 ในใจแบบจริงจัง | Seriously rehearsing a 90s dance routine in your head | 11 Cassette |
| B | เข้าสมาธินิ่งสงบแบบไม่แคร์รถติด | Slip into a calm meditative trance, unbothered by the jam | 12 Soi Cat |
| C | จ้องกระจกมองหลัง สังเกตทุกคนรอบข้าง | Stare into the rearview mirror, quietly narrating everyone around you | 13 Bobblehead |
| D | ไถรูปเก่าในมือถือแบบไม่มีจุดหมาย | Aimlessly scroll through old photos on your phone | 14 Camera Roll |
| E | ร้องเพลงเสียงดังฟังเต็มคันแบบไม่แคร์สายตาใคร | Sing loudly at full volume, not caring who sees | 15 Karaoke Mic |

### Q11 — Friend's wedding *(new)* · **LIVE**
**Measures:** `social_energy`, `nostalgia`, `pop_culture_interest`.
**TH:** ไปงานแต่งเพื่อนสนิท คุณอยู่ตรงไหนของงาน?
**EN:** Your close friend's wedding. Where are you at the party?

| # | TH | EN | Home |
|---|---|---|---|
| A | ไปขอเพลงยุค 90 กับวงดนตรี แล้วร้องตามทุกท่อน | Requesting 90s songs from the band and singing every line | 11 Cassette |
| B | นั่งมุมเย็น ๆ กินของหวาน ไม่ยุ่งกับใคร | In a cool corner with dessert, minding your own business | 12 Soi Cat |
| C | นั่งดูคนแล้วเม้าท์ในใจว่าใครมากับใคร | People-watching, mentally noting who came with whom | 13 Bobblehead |
| D | ถ่ายรูปทุกโมเมนต์ กลับบ้านมี 400 รูป | Photographing every moment, home with 400 pictures | 14 Camera Roll |
| E | ขึ้นไปร้องเพลงบนเวทีโดยที่ไม่มีใครขอ | On stage singing, though nobody asked | 15 Karaoke Mic |

### Q12 — Two-hour queue at a viral shop *(new)* · *reserve*
**Measures:** `social_energy` vs `wellness_interest`; `pop_culture_interest`.
**TH:** ต่อคิวร้านดังในติ๊กต็อก 2 ชั่วโมง ระหว่างรอ คุณ…
**EN:** Two hours in line for a shop that went viral on TikTok. While you wait, you…

| # | TH | EN | Home |
|---|---|---|---|
| A | ใส่หูฟัง เปิดเพลงยุคมัธยมวนไป | Headphones on, your high-school playlist on loop | 11 Cassette |
| B | ยืนนิ่ง ๆ สงบ ๆ เหมือนแมวรอข้าว | Stand still and calm, like a cat waiting for dinner | 12 Soi Cat |
| C | แอบดูว่าคนข้างหน้าจะสั่งอะไร แล้วเดาชีวิตเขา | Watch what the people ahead order and guess their life story | 13 Bobblehead |
| D | ถ่ายคิวยาว ๆ เก็บไว้เป็นหลักฐาน "ฉันมาแล้ว" | Film the long line as proof: "I was here" | 14 Camera Roll |
| E | ชวนคนแปลกหน้าข้าง ๆ คุยจนสนิทกันไปแล้ว | Chat with the stranger next to you until you're friends | 15 Karaoke Mic |

---

## G4 — 16 Noodle Steam · 17 Neon Sign · 18 Cockroach · 19 Damp Moss · 20 Fridge Light

### Q4 — 2:00 AM cravings *(existing)* · **LIVE**
**Measures:** `nostalgia` vs `food_curiosity`: self-soothing style.
**TH:** ตีสองแล้ว หิวจนนอนไม่หลับ ทำไงดี?
**EN:** It's 2 AM and hunger just woke you up. What now?

| # | TH | EN | Home |
|---|---|---|---|
| A | ต้มมาม่ากินตอนตีสองแบบไม่สนอะไรทั้งนั้น | Cook instant noodles at 2 AM, no regrets | 16 Noodle Steam |
| B | เปิดเพลง City Pop ยุค 80 วนไปเรื่อย ๆ | Put 80s City Pop on loop instead | 17 Neon Sign |
| C | นึกถึงความทรงจำอาย ๆ เมื่อ 10 ปีก่อนแบบสุ่ม ๆ | Randomly relive a cringe memory from 10 years ago | 18 Cockroach |
| D | หลับต่อเฉย ๆ เหมือนมอสส์ชื้น ๆ ที่ไม่ขยับ | Just go back to sleep, still as damp moss | 19 Damp Moss |
| E | เปิดตู้เย็นล่าของเหลือแบบไม่วางแผน | Raid the fridge for leftovers, no plan involved | 20 Fridge Light |

### Q13 — 1 AM street-food order *(new · spec territory #9 · dishes from ofm.co.th)* · **LIVE**
**Measures:** `food_curiosity`, `nostalgia`: comfort choice.
**TH:** ตีหนึ่ง ร้านอาหารตามสั่งหน้าซอยยังเปิดอยู่ สั่งอะไรดี?
**EN:** 1 AM, and the made-to-order stall at the end of the soi is still open. What do you order?

| # | TH | EN | Home |
|---|---|---|---|
| A | มาม่าผัดผงกะหรี่ ควันฉุยเต็มหน้า | Curry-powder stir-fried instant noodles, steam to the face | 16 Noodle Steam |
| B | ข้าวผัดอเมริกัน จานเรโทรสีจัดจ้าน | American fried rice, the loud retro plate | 17 Neon Sign |
| C | ข้าวยำปลากระป๋อง เมนูเอาตัวรอดตลอดกาล | Canned-fish rice salad, the eternal survival meal | 18 Cockroach |
| D | ข้าวไข่ข้นแฮมชีส นุ่ม ๆ ไม่ต้องเคี้ยวเยอะ | Soft scrambled egg, ham and cheese on rice; barely needs chewing | 19 Damp Moss |
| E | ยำไข่ดาวกรอบ สั่งเพิ่มอีกจานเพราะยังไม่อิ่ม | Crispy fried-egg salad, plus a second one because you're still hungry | 20 Fridge Light |

Dish names are from the ofm.co.th "150 Thai street food menu" list (spec §7). It has no desserts, skewers or porridge, so only rice, noodle and salad dishes are used.

### Q14 — Three-hour power cut *(new)* · *reserve*
**Measures:** `wellness_interest`, `nostalgia`, `food_curiosity`.
**TH:** ไฟดับทั้งซอย 3 ชั่วโมง มือถือแบตเหลือ 40% คุณจะ…
**EN:** The whole soi loses power for three hours and your phone is at 40%. You…

| # | TH | EN | Home |
|---|---|---|---|
| A | ต้มมาม่าด้วยเตาแก๊สปิกนิก กินใต้แสงเทียน | Cook instant noodles on a camping stove by candlelight | 16 Noodle Steam |
| B | เปิดไฟฉายมือถือทำไฟดิสโก้ เต้นคนเดียวในห้อง | Turn your phone torch into a disco light and dance alone | 17 Neon Sign |
| C | ไล่อ่านแชทเก่าแล้วอายตัวเองจนต้องปิดจอ | Scroll old chats until the cringe makes you lock the screen | 18 Cockroach |
| D | นอนเลย ไม่มีไฟก็ไม่ต้องทำอะไร ดีออก | Sleep. No power means no obligations. Perfect | 19 Damp Moss |
| E | กินของในตู้เย็นให้หมดก่อนมันจะเสีย | Eat everything in the fridge before it goes off | 20 Fridge Light |

---

## G5 — 21 Phone · 22 Pavement Weed · 23 Hammock · 24 DIY Kit · 25 Sticky Note

### Q5 — Unexpected free afternoon *(existing)* · **LIVE**
**Measures:** `exploration` vs `creativity`: unstructured time.
**TH:** จู่ ๆ ก็ว่างทั้งบ่าย ไม่มีนัด ไม่มีธุระ จะทำอะไรดี?
**EN:** You suddenly have a free afternoon, no plans. What do you pick?

| # | TH | EN | Home |
|---|---|---|---|
| A | ดูซีรีส์รวดจนมือถือร้อนจี๋ | Binge a whole series until your phone overheats | 21 Phone |
| B | เดินเล่นในตลาดแบบไม่มีจุดหมาย | Wander a market with absolutely no destination | 22 Pavement Weed |
| C | งีบตอนบ่ายทันทีแบบมืออาชีพ | Take an immediate, professional-grade nap | 23 Hammock |
| D | เริ่มงานฝีมือใหม่ที่อาจทำไม่จบ | Start a new craft project you may never finish | 24 DIY Kit |
| E | จัดห้องใหม่ทั้งห้องแบบไม่มีใครขอ | Reorganize your entire room, unprompted | 25 Sticky Note |

### Q15 — Three-day long weekend *(new · spec territory #6)* · **LIVE**
**Measures:** `exploration` vs `creativity`; `wellness_interest`.
**TH:** หยุดยาว 3 วัน แบบไหนฟังแล้วใจฟู?
**EN:** A three-day long weekend. Which plan makes your heart happy?

| # | TH | EN | Home |
|---|---|---|---|
| A | ดูซีรีส์ให้จบ 2 เรื่อง ไม่ลุกจากเตียง | Finish two whole series without leaving bed | 21 Phone |
| B | นั่งรถไฟไปต่างจังหวัด ไม่จองที่พัก ไปตายเอาดาบหน้า | Take a train upcountry with no booking and figure it out there | 22 Pavement Weed |
| C | นอนชดเชยให้ครบ 3 วันเต็ม | Sleep. All three days. Fully | 23 Hammock |
| D | ลงคลาสปั้นเซรามิกวันเดียวจบ ได้แก้วเบี้ยว ๆ กลับบ้าน | A one-day pottery class, home with a wonky mug | 24 DIY Kit |
| E | ทำแพลนเที่ยวเป็นตาราง Excel แจกทุกคนในแก๊ง | Build an Excel itinerary and share it with the whole group | 25 Sticky Note |

---

## G6 — 26 Secondhand Book · 27 Boba Pearl · 28 Monsoon Cloud · 29 Night Market Wok · 30 Blanket Burrito

### Q6 — Place to disappear to *(existing · spec territory #8)* · **LIVE**
**Measures:** `social_energy` vs `stability`: where you recharge.
**TH:** ถ้าอยากหายไปจากทุกอย่างสักพัก จะไปที่ไหนดี?
**EN:** If you wanted to disappear from everything for a while, where would you go?

| # | TH | EN | Home |
|---|---|---|---|
| A | มุมร้านหนังสือมือสองเงียบ ๆ | A quiet corner of a secondhand bookstore | 26 Book |
| B | รูฟท็อปบาร์ตอนโกลเด้นอาวร์ | A rooftop bar at golden hour | 27 Boba Pearl |
| C | ทะเลตอนฟ้าครึ้ม ๆ | The ocean under a cloudy sky | 28 Cloud |
| D | ตลาดนัดกลางคืนที่เสียงดังสุด ๆ | A night market at its loudest | 29 Wok |
| E | ห่มผ้าห่มมิดหัวอยู่บนเตียงทั้งวันอาทิตย์ | Wrapped in a blanket in bed, all Sunday | 30 Blanket |

### Q16 — Your birthday plan *(new)* · **LIVE**
**Measures:** `social_energy`, `food_curiosity`, `wellness_interest`.
**TH:** วันเกิดปีนี้ อยากฉลองแบบไหน?
**EN:** How do you want to celebrate your birthday this year?

| # | TH | EN | Home |
|---|---|---|---|
| A | ไปร้านหนังสือ ซื้อเล่มใหม่ให้ตัวเอง แล้วนั่งอ่านในคาเฟ่ | Buy yourself a new book and read it in a café | 26 Book |
| B | นัดแก๊งไปคาเฟ่ชานมไข่มุก ถ่ายรูปตอนแดดเย็น | Bubble tea with the gang, photos in the golden-hour light | 27 Boba Pearl |
| C | นั่งริมแม่น้ำคนเดียว มองฟ้า เพ้อถึงอนาคต | Alone by the river, watching the sky, dreaming about the future | 28 Cloud |
| D | ยกแก๊งไปเดินกินทั้งตลาดนัด ร้านละอย่าง | Take the whole group to eat through a night market, one dish per stall | 29 Wok |
| E | อยู่บ้าน ห่มผ้า สั่งแกร๊บ เปิดหนังที่ชอบ | Stay in under a blanket with Grab delivery and a favourite film | 30 Blanket |

---

## Next steps

1. ✅ Pool picked (4 Oct): 6 twin pairs, one random twin per group per play.
2. Scoring: twins share their partner's tested bonus points (`ArchetypeReference.md` §3.6). No new balance risk; simulation results unchanged.
3. App: replace `app/js/data-questions.js` with the 12 live questions and add the random-twin pick (build step).
4. Docs updated to "6 per play, one random twin per group": `DesignUX.md` §4.2 and §8.

## Copy notes for the Thai pass

- Pronoun: always **"คุณ"** for "you" (decided 4 Oct 2026). Never "แก" or "เธอ".
- Q13 uses real dish names from the source. Keep them exact if edited.
- Q12 (reserve) names TikTok. If brand names should be avoided, change to "ร้านดังในโซเชียล".
