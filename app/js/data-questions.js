// data-questions.js
// 12 live questions in 6 twin pairs, per question.md §0 (decided 4 Oct 2026).
// Each play shows ONE random twin per group. Twins share their group's scoring
// (ArchetypeReference.md §3.2 v2 matrix + §3.6), so the result depends only on
// the answer letter, never on which twin was shown.
// Answer score format: [ [archetypeNum, points], ... ]  home = +3, bonus = +1 each.

const GROUP_SCORES = {
  g1: { a: [[1,3],[29,1],[16,1]], b: [[2,3],[7,1],[28,1]],  c: [[3,3],[25,1],[8,1]],   d: [[4,3],[11,1],[24,1]],  e: [[5,3],[22,1],[27,1]] },
  g2: { a: [[6,3],[19,1],[25,1]], b: [[7,3],[14,1],[27,1]], c: [[8,3],[3,1],[20,1]],   d: [[9,3],[22,1],[18,1]],  e: [[10,3],[12,1],[23,1]] },
  g3: { a: [[11,3],[17,1],[5,1]], b: [[12,3],[19,1],[9,1]], c: [[13,3],[26,1],[4,1]],  d: [[14,3],[2,1],[18,1]],  e: [[15,3],[29,1],[1,1]] },
  g4: { a: [[16,3],[30,1],[21,1]], b: [[17,3],[11,1],[7,1]], c: [[18,3],[14,1],[26,1]], d: [[19,3],[12,1],[6,1]],  e: [[20,3],[1,1],[24,1]] },
  g5: { a: [[21,3],[15,1],[17,1]], b: [[22,3],[9,1],[4,1]], c: [[23,3],[30,1],[10,1]], d: [[24,3],[28,1],[13,1]], e: [[25,3],[3,1],[8,1]] },
  g6: { a: [[26,3],[6,1],[13,1]], b: [[27,3],[15,1],[5,1]], c: [[28,3],[2,1],[10,1]],  d: [[29,3],[16,1],[20,1]], e: [[30,3],[21,1],[23,1]] }
};

// Decorative line-art scene per group (icons.js SCENE keys)
const GROUP_SCENE = { g1: "umbrella", g2: "cafe", g3: "traffic", g4: "night", g5: "afternoon", g6: "escape" };

const QUESTION_POOL = [
  // ---------- G1 ----------
  { id: "q1", group: "g1",
    th: "ฝนเทลงมากลางสยาม ร่มก็ไม่มี ทำไงดี?",
    en: "It suddenly starts pouring at Siam Square. What do you do?",
    options: [
      { id: "a", th: "วิ่งฝ่าฝนไปร้านหมูกระทะ ยังไงก็เปียกอยู่แล้ว", en: "Make a run for it — mookata is calling" },
      { id: "b", th: "ยืนหลบใต้กันสาด เปิดเพลงอินดี้ เหมือนอยู่ใน MV", en: "Stand under the awning, put on something indie and moody" },
      { id: "c", th: "เดินเข้าเซเว่น ซื้อร่มคันที่ 18 ของปีนี้", en: "Buy your 18th 7-Eleven umbrella, just in case" },
      { id: "d", th: "หลบเข้าร้านข้างทาง ทำเป็นเดินดูของ", en: "Duck into the nearest shop and pretend to browse" },
      { id: "e", th: "กระโดดเล่นแอ่งน้ำเหมือนไม่มีอะไรเกิดขึ้น", en: "Start jumping in puddles like nothing's wrong" }
    ] },
  { id: "q8", group: "g1",
    th: "10 โมงตรงเปิดกดบัตรคอนเสิร์ตศิลปินในดวงใจ คุณคือสายไหน?",
    en: "Tickets for your favourite artist drop at 10:00 sharp. What's your strategy?",
    options: [
      { id: "a", th: "กดรัว ๆ ไม่ดูผัง ได้โซนไหนเอาโซนนั้น", en: "Smash the button, ignore the seat map, take whatever" },
      { id: "b", th: "ยังไม่ทันกดก็เศร้าล่วงหน้าเผื่อไม่ได้ไว้ก่อน", en: "Already sad in advance, just in case" },
      { id: "c", th: "เตรียม 3 เครื่อง เน็ตสำรอง บัตรเครดิตจำไว้ในหัว", en: "Three devices, backup wifi, card number memorised" },
      { id: "d", th: "ไม่ได้จะไปหรอก แค่เข้าไปส่องผังเฉย ๆ", en: "Not even going, just here to look at the seat map" },
      { id: "e", th: "ไม่ได้บัตรก็ไปยืนฟังนอกฮอลล์ ฟินเหมือนกัน", en: "No ticket? Listen from outside the hall, still a vibe" }
    ] },
  // ---------- G2 ----------
  { id: "q2", group: "g2",
    th: "ถ้าเป็นของชิ้นหนึ่งในคาเฟ่ญี่ปุ่นสุดมินิมอล จะเป็นอะไรดี?",
    en: "If you were an object in a minimalist Japanese café, which one are you?",
    options: [
      { id: "a", th: "ไส้เดือนใต้กระถางต้นไม้ริมหน้าต่าง", en: "The earthworm quietly working in the windowsill planter" },
      { id: "b", th: "ฟองมัทฉะที่ค่อย ๆ จมลงในแก้ว", en: "The matcha foam slowly sinking into the glass" },
      { id: "c", th: "แผ่นรองแก้วคอร์กที่ทุกคนพึ่งพาได้", en: "The cork coaster everyone quietly relies on" },
      { id: "d", th: "ต้นอ่อนดื้อ ๆ บนโต๊ะที่ไม่ยอมเหี่ยว", en: "The stubborn little desk sprout that refuses to wilt" },
      { id: "e", th: "ไม้คนกาแฟที่ชิลกับทุกสถานการณ์", en: "The wooden stir stick, unbothered by everything" }
    ] },
  { id: "q9", group: "g2",
    th: "งานกลุ่มที่มีเพื่อนในกลุ่ม 6 คน คุณคือคนไหน?",
    en: "A group project with six people. Which one are you?",
    options: [
      { id: "a", th: "คนทำสไลด์ทั้งหมดเงียบ ๆ ตอนตีสอง ไม่ขอเครดิต", en: "The one who quietly makes every slide at 2 AM, no credit needed" },
      { id: "b", th: "คนที่พิมพ์ในแชทกลุ่มแล้วลบ 5 รอบก่อนส่ง", en: "The one who types in the group chat and deletes it five times" },
      { id: "c", th: "คนที่ทุกคนมาระบายด้วย แถมซื้อขนมมาฝาก", en: "The one everyone vents to, who also brings snacks" },
      { id: "d", th: "คนที่โดนตีกลับ 3 รอบก็ยังไม่ยอมแพ้", en: "The one who gets sent back three times and still won't quit" },
      { id: "e", th: "คนที่ตอบทุกอย่างว่า \"ได้หมด แล้วแต่เพื่อน\"", en: "The one whose answer to everything is \"whatever works for you\"" }
    ] },
  // ---------- G3 ----------
  { id: "q3", group: "g3",
    th: "ติดแหง็กบนถนนอโศก 99 นาที ทำอะไรอยู่ในหัว?",
    en: "Stuck in a 99-minute jam on Asok Road. What's happening in your head?",
    options: [
      { id: "a", th: "ซ้อมท่าเต้นยุค 90 ในใจแบบจริงจัง", en: "Seriously rehearsing a 90s dance routine in your head" },
      { id: "b", th: "เข้าสมาธินิ่งสงบแบบไม่แคร์รถติด", en: "Slip into a calm meditative trance, unbothered by the jam" },
      { id: "c", th: "จ้องกระจกมองหลัง สังเกตทุกคนรอบข้าง", en: "Stare into the rearview mirror, quietly narrating everyone around you" },
      { id: "d", th: "ไถรูปเก่าในมือถือแบบไม่มีจุดหมาย", en: "Aimlessly scroll through old photos on your phone" },
      { id: "e", th: "ร้องเพลงเสียงดังฟังเต็มคันแบบไม่แคร์สายตาใคร", en: "Sing loudly at full volume, not caring who sees" }
    ] },
  { id: "q11", group: "g3",
    th: "ไปงานแต่งเพื่อนสนิท คุณอยู่ตรงไหนของงาน?",
    en: "Your close friend's wedding. Where are you at the party?",
    options: [
      { id: "a", th: "ไปขอเพลงยุค 90 กับวงดนตรี แล้วร้องตามทุกท่อน", en: "Requesting 90s songs from the band and singing every line" },
      { id: "b", th: "นั่งมุมเย็น ๆ กินของหวาน ไม่ยุ่งกับใคร", en: "In a cool corner with dessert, minding your own business" },
      { id: "c", th: "นั่งดูคนแล้วเม้าท์ในใจว่าใครมากับใคร", en: "People-watching, mentally noting who came with whom" },
      { id: "d", th: "ถ่ายรูปทุกโมเมนต์ กลับบ้านมี 400 รูป", en: "Photographing every moment, home with 400 pictures" },
      { id: "e", th: "ขึ้นไปร้องเพลงบนเวทีโดยที่ไม่มีใครขอ", en: "On stage singing, though nobody asked" }
    ] },
  // ---------- G4 ----------
  { id: "q4", group: "g4",
    th: "ตีสองแล้ว หิวจนนอนไม่หลับ ทำไงดี?",
    en: "It's 2 AM and hunger just woke you up. What now?",
    options: [
      { id: "a", th: "ต้มมาม่ากินตอนตีสองแบบไม่สนอะไรทั้งนั้น", en: "Cook instant noodles at 2 AM, no regrets" },
      { id: "b", th: "เปิดเพลง City Pop ยุค 80 วนไปเรื่อย ๆ", en: "Put 80s City Pop on loop instead" },
      { id: "c", th: "นึกถึงความทรงจำอาย ๆ เมื่อ 10 ปีก่อนแบบสุ่ม ๆ", en: "Randomly relive a cringe memory from 10 years ago" },
      { id: "d", th: "หลับต่อเฉย ๆ เหมือนมอสส์ชื้น ๆ ที่ไม่ขยับ", en: "Just go back to sleep, still as damp moss" },
      { id: "e", th: "เปิดตู้เย็นล่าของเหลือแบบไม่วางแผน", en: "Raid the fridge for leftovers, no plan involved" }
    ] },
  { id: "q13", group: "g4",
    th: "ตีหนึ่ง ร้านอาหารตามสั่งหน้าซอยยังเปิดอยู่ สั่งอะไรดี?",
    en: "1 AM, and the made-to-order stall at the end of the soi is still open. What do you order?",
    options: [
      { id: "a", th: "มาม่าผัดผงกะหรี่ ควันฉุยเต็มหน้า", en: "Curry-powder stir-fried instant noodles, steam to the face" },
      { id: "b", th: "ข้าวผัดอเมริกัน จานเรโทรสีจัดจ้าน", en: "American fried rice, the loud retro plate" },
      { id: "c", th: "ข้าวยำปลากระป๋อง เมนูเอาตัวรอดตลอดกาล", en: "Canned-fish rice salad, the eternal survival meal" },
      { id: "d", th: "ข้าวไข่ข้นแฮมชีส นุ่ม ๆ ไม่ต้องเคี้ยวเยอะ", en: "Soft scrambled egg, ham and cheese on rice; barely needs chewing" },
      { id: "e", th: "ยำไข่ดาวกรอบ สั่งเพิ่มอีกจานเพราะยังไม่อิ่ม", en: "Crispy fried-egg salad, plus a second one because you're still hungry" }
    ] },
  // ---------- G5 ----------
  { id: "q5", group: "g5",
    th: "จู่ ๆ ก็ว่างทั้งบ่าย ไม่มีนัด ไม่มีธุระ จะทำอะไรดี?",
    en: "You suddenly have a free afternoon, no plans. What do you pick?",
    options: [
      { id: "a", th: "ดูซีรีส์รวดจนมือถือร้อนจี๋", en: "Binge a whole series until your phone overheats" },
      { id: "b", th: "เดินเล่นในตลาดแบบไม่มีจุดหมาย", en: "Wander a market with absolutely no destination" },
      { id: "c", th: "งีบตอนบ่ายทันทีแบบมืออาชีพ", en: "Take an immediate, professional-grade nap" },
      { id: "d", th: "เริ่มงานฝีมือใหม่ที่อาจทำไม่จบ", en: "Start a new craft project you may never finish" },
      { id: "e", th: "จัดห้องใหม่ทั้งห้องแบบไม่มีใครขอ", en: "Reorganize your entire room, unprompted" }
    ] },
  { id: "q15", group: "g5",
    th: "หยุดยาว 3 วัน แบบไหนฟังแล้วใจฟู?",
    en: "A three-day long weekend. Which plan makes your heart happy?",
    options: [
      { id: "a", th: "ดูซีรีส์ให้จบ 2 เรื่อง ไม่ลุกจากเตียง", en: "Finish two whole series without leaving bed" },
      { id: "b", th: "นั่งรถไฟไปต่างจังหวัด ไม่จองที่พัก ไปตายเอาดาบหน้า", en: "Take a train upcountry with no booking and figure it out there" },
      { id: "c", th: "นอนชดเชยให้ครบ 3 วันเต็ม", en: "Sleep. All three days. Fully" },
      { id: "d", th: "ลงคลาสปั้นเซรามิกวันเดียวจบ ได้แก้วเบี้ยว ๆ กลับบ้าน", en: "A one-day pottery class, home with a wonky mug" },
      { id: "e", th: "ทำแพลนเที่ยวเป็นตาราง Excel แจกทุกคนในแก๊ง", en: "Build an Excel itinerary and share it with the whole group" }
    ] },
  // ---------- G6 ----------
  { id: "q6", group: "g6",
    th: "ถ้าอยากหายไปจากทุกอย่างสักพัก จะไปที่ไหนดี?",
    en: "If you wanted to disappear from everything for a while, where would you go?",
    options: [
      { id: "a", th: "มุมร้านหนังสือมือสองเงียบ ๆ", en: "A quiet corner of a secondhand bookstore" },
      { id: "b", th: "รูฟท็อปบาร์ตอนโกลเด้นอาวร์", en: "A rooftop bar at golden hour" },
      { id: "c", th: "ทะเลตอนฟ้าครึ้ม ๆ", en: "The ocean under a cloudy sky" },
      { id: "d", th: "ตลาดนัดกลางคืนที่เสียงดังสุด ๆ", en: "A night market at its loudest" },
      { id: "e", th: "ห่มผ้าห่มมิดหัวอยู่บนเตียงทั้งวันอาทิตย์", en: "Wrapped in a blanket in bed, all Sunday" }
    ] },
  { id: "q16", group: "g6",
    th: "วันเกิดปีนี้ อยากฉลองแบบไหน?",
    en: "How do you want to celebrate your birthday this year?",
    options: [
      { id: "a", th: "ไปร้านหนังสือ ซื้อเล่มใหม่ให้ตัวเอง แล้วนั่งอ่านในคาเฟ่", en: "Buy yourself a new book and read it in a café" },
      { id: "b", th: "นัดแก๊งไปคาเฟ่ชานมไข่มุก ถ่ายรูปตอนแดดเย็น", en: "Bubble tea with the gang, photos in the golden-hour light" },
      { id: "c", th: "นั่งริมแม่น้ำคนเดียว มองฟ้า เพ้อถึงอนาคต", en: "Alone by the river, watching the sky, dreaming about the future" },
      { id: "d", th: "ยกแก๊งไปเดินกินทั้งตลาดนัด ร้านละอย่าง", en: "Take the whole group to eat through a night market, one dish per stall" },
      { id: "e", th: "อยู่บ้าน ห่มผ้า สั่งแกร๊บ เปิดหนังที่ชอบ", en: "Stay in under a blanket with Grab delivery and a favourite film" }
    ] }
];

const GROUP_ORDER = ["g1", "g2", "g3", "g4", "g5", "g6"];

// Draw one random twin per group, G1 -> G6 (question.md §0 rule 1).
function drawQuestions() {
  return GROUP_ORDER.map(g => {
    const twins = QUESTION_POOL.filter(q => q.group === g);
    return twins[Math.floor(Math.random() * twins.length)];
  });
}
