// data-questions.js
// 6 questions per ArchetypeReference.md §2-3. Each answer: { id, th, en, icon,
// score: [ [archetypeNum, points], ... ] }  home=+3, secondary=+1 each.

const QUESTIONS = [
  {
    id: "q1", dimension: "spontaneity_vs_stability",
    scene: "umbrella",
    th: "ฝนเทลงมากลางสยาม ร่มก็ไม่มี ทำไงดี?",
    en: "It suddenly starts pouring at Siam Square. What do you do?",
    options: [
      { id: "a", th: "วิ่งฝ่าฝนไปร้านหมูกระทะ ยังไงก็เปียกอยู่แล้ว", en: "Make a run for it — mookata is calling",
        score: [[1,3],[29,1],[15,1]] },
      { id: "b", th: "ยืนหลบใต้กันสาด เปิดเพลงอินดี้ เหมือนอยู่ใน MV", en: "Stand under the awning, put on something indie and moody",
        score: [[2,3],[7,1],[28,1]] },
      { id: "c", th: "เดินเข้าเซเว่น ซื้อร่มคันที่ 18 ของปีนี้", en: "Buy your 18th 7-Eleven umbrella, just in case",
        score: [[3,3],[25,1],[9,1]] },
      { id: "d", th: "หลบเข้าร้านข้างทาง ทำเป็นเดินดูของ", en: "Duck into the nearest shop and pretend to browse",
        score: [[4,3],[26,1],[24,1]] },
      { id: "e", th: "กระโดดเล่นแอ่งน้ำเหมือนไม่มีอะไรเกิดขึ้น", en: "Start jumping in puddles like nothing's wrong",
        score: [[5,3],[12,1],[22,1]] }
    ]
  },
  {
    id: "q2", dimension: "stability_vs_creativity",
    scene: "cafe",
    th: "ถ้าเป็นของชิ้นหนึ่งในคาเฟ่ญี่ปุ่นสุดมินิมอล จะเป็นอะไรดี?",
    en: "If you were an object in a minimalist Japanese café, which one are you?",
    options: [
      { id: "a", th: "ไส้เดือนใต้กระถางต้นไม้ริมหน้าต่าง", en: "The earthworm quietly working in the windowsill planter",
        score: [[6,3],[10,1],[19,1]] },
      { id: "b", th: "ฟองมัทฉะที่ค่อยๆ จมลงในแก้ว", en: "The matcha foam slowly sinking into the glass",
        score: [[7,3],[2,1],[14,1]] },
      { id: "c", th: "แผ่นรองแก้วคอร์กที่ทุกคนพึ่งพาได้", en: "The cork coaster everyone quietly relies on",
        score: [[8,3],[30,1],[3,1]] },
      { id: "d", th: "ต้นอ่อนดื้อๆ บนโต๊ะที่ไม่ยอมเหี่ยว", en: "The stubborn little desk sprout that refuses to wilt",
        score: [[9,3],[22,1],[6,1]] },
      { id: "e", th: "ไม้คนกาแฟที่ชิลกับทุกสถานการณ์", en: "The wooden stir stick, unbothered by everything",
        score: [[10,3],[12,1],[23,1]] }
    ]
  },
  {
    id: "q3", dimension: "social_energy_vs_wellness",
    scene: "traffic",
    th: "ติดแหง็กบนถนนอโศก 99 นาที ทำอะไรอยู่ในหัว?",
    en: "Stuck in a 99-minute jam on Asok Road. What's happening in your head?",
    options: [
      { id: "a", th: "ซ้อมท่าเต้นยุค 90 ในใจแบบจริงจัง", en: "Seriously rehearsing a 90s dance routine in your head",
        score: [[11,3],[17,1],[15,1]] },
      { id: "b", th: "เข้าสมาธินิ่งสงบแบบไม่แคร์รถติด", en: "Slip into a calm meditative trance, unbothered by the jam",
        score: [[12,3],[19,1],[23,1]] },
      { id: "c", th: "จ้องกระจกมองหลัง สังเกตทุกคนรอบข้าง", en: "Stare into the rearview mirror, quietly narrating everyone around you",
        score: [[13,3],[26,1],[4,1]] },
      { id: "d", th: "ไถรูปเก่าในมือถือแบบไม่มีจุดหมาย", en: "Aimlessly scroll through old photos on your phone",
        score: [[14,3],[2,1],[11,1]] },
      { id: "e", th: "ร้องเพลงเสียงดังฟังเต็มคันแบบไม่แคร์สายตาใคร", en: "Sing loudly at full volume, not caring who sees",
        score: [[15,3],[29,1],[1,1]] }
    ]
  },
  {
    id: "q4", dimension: "nostalgia_vs_food_curiosity",
    scene: "night",
    th: "ตีสองแล้ว หิวจนนอนไม่หลับ ทำไงดี?",
    en: "It's 2 AM and hunger just woke you up. What now?",
    options: [
      { id: "a", th: "ต้มมาม่ากินตอนตีสองแบบไม่สนอะไรทั้งนั้น", en: "Cook instant noodles at 2 AM, no regrets",
        score: [[16,3],[30,1],[20,1]] },
      { id: "b", th: "เปิดเพลง City Pop ยุค 80 วนไปเรื่อยๆ", en: "Put 80s City Pop on loop instead",
        score: [[17,3],[11,1],[7,1]] },
      { id: "c", th: "นึกถึงความทรงจำอายๆ เมื่อ 10 ปีก่อนแบบสุ่มๆ", en: "Randomly relive a cringe memory from 10 years ago",
        score: [[18,3],[14,1],[26,1]] },
      { id: "d", th: "หลับต่อเฉยๆ เหมือนมอสส์ชื้นๆ ที่ไม่ขยับ", en: "Just go back to sleep, still as damp moss",
        score: [[19,3],[12,1],[6,1]] },
      { id: "e", th: "เปิดตู้เย็นล่าของเหลือแบบไม่วางแผน", en: "Raid the fridge for leftovers, no plan involved",
        score: [[20,3],[1,1],[24,1]] }
    ]
  },
  {
    id: "q5", dimension: "exploration_vs_creativity",
    scene: "afternoon",
    th: "จู่ๆ ก็ว่างทั้งบ่าย ไม่มีนัด ไม่มีธุระ จะทำอะไรดี?",
    en: "You suddenly have a free afternoon, no plans. What do you pick?",
    options: [
      { id: "a", th: "ดูซีรีส์รวดจนมือถือร้อนจี๋", en: "Binge a whole series until your phone overheats",
        score: [[21,3],[15,1],[17,1]] },
      { id: "b", th: "เดินเล่นในตลาดแบบไม่มีจุดหมาย", en: "Wander a market with absolutely no destination",
        score: [[22,3],[9,1],[4,1]] },
      { id: "c", th: "งีบตอนบ่ายทันทีแบบมืออาชีพ", en: "Take an immediate, professional-grade nap",
        score: [[23,3],[30,1],[10,1]] },
      { id: "d", th: "เริ่มงานฝีมือใหม่ที่อาจทำไม่จบ", en: "Start a new craft project you may never finish",
        score: [[24,3],[28,1],[13,1]] },
      { id: "e", th: "จัดห้องใหม่ทั้งห้องแบบไม่มีใครขอ", en: "Reorganize your entire room, unprompted",
        score: [[25,3],[3,1],[8,1]] }
    ]
  },
  {
    id: "q6", dimension: "social_energy_vs_stability",
    scene: "escape",
    th: "ถ้าอยากหายไปจากทุกอย่างสักพัก จะไปที่ไหนดี?",
    en: "If you wanted to disappear from everything for a while, where would you go?",
    options: [
      { id: "a", th: "มุมร้านหนังสือมือสองเงียบๆ", en: "A quiet corner of a secondhand bookstore",
        score: [[26,3],[6,1],[13,1]] },
      { id: "b", th: "รูฟท็อปบาร์ตอนโกลเด้นอาวร์", en: "A rooftop bar at golden hour",
        score: [[27,3],[15,1],[29,1]] },
      { id: "c", th: "ทะเลตอนฟ้าครึ้มๆ", en: "The ocean under a cloudy sky",
        score: [[28,3],[2,1],[7,1]] },
      { id: "d", th: "ตลาดนัดกลางคืนที่เสียงดังสุดๆ", en: "A night market at its loudest",
        score: [[29,3],[1,1],[15,1]] },
      { id: "e", th: "ห่มผ้าห่มมิดหัวอยู่บนเตียงทั้งวันอาทิตย์", en: "Wrapped in a blanket in bed, all Sunday",
        score: [[30,3],[19,1],[23,1]] }
    ]
  }
];
