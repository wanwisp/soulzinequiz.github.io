// birthday.js — entertainment-personalization calculations from the birthday picker.
// Per SPECFinal.md §15-16: Western Zodiac + element from date+month (Britannica-style
// standard tropical zodiac dates), Thai day colour from an OPTIONAL weekday tap
// (see Design/DesignUX.md §8 open decision #1 — implemented as option (b): no year
// collected, weekday is a separate optional one-tap field, never required).
//
// SOURCING NOTE (honesty flag, matches the project's own draft-flag convention):
// Britannica's zodiac page and the Times of India numerology-colour article both
// returned errors (403 / fetch blocked) when queried live for this build. Zodiac
// date ranges below are the standard tropical-zodiac convention, cross-checked
// against multiple independent sources — not Britannica-exclusive facts, so this
// is safe to ship without guessing. The lucky-colour table uses the standard
// "Moolank" root-number numerology framework (reduce birth-day to a single digit,
// map to its ruling planet's colours), cross-checked against several numerology
// sources, because the exact Times of India article text could not be retrieved.
// If the team can supply the actual ToI article content, swap NUMEROLOGY_TABLE
// below for the verified version — do not treat this table as a verbatim quote.

const ZODIAC = [
  { key: "capricorn", th: "ราศีมังกร", en: "Capricorn", element: "earth",
    start: [12, 22], end: [1, 19] },
  { key: "aquarius", th: "ราศีกุมภ์", en: "Aquarius", element: "air",
    start: [1, 20], end: [2, 18] },
  { key: "pisces", th: "ราศีมีน", en: "Pisces", element: "water",
    start: [2, 19], end: [3, 20] },
  { key: "aries", th: "ราศีเมษ", en: "Aries", element: "fire",
    start: [3, 21], end: [4, 19] },
  { key: "taurus", th: "ราศีพฤษภ", en: "Taurus", element: "earth",
    start: [4, 20], end: [5, 20] },
  { key: "gemini", th: "ราศีเมถุน", en: "Gemini", element: "air",
    start: [5, 21], end: [6, 20] },
  { key: "cancer", th: "ราศีกรกฎ", en: "Cancer", element: "water",
    start: [6, 21], end: [7, 22] },
  { key: "leo", th: "ราศีสิงห์", en: "Leo", element: "fire",
    start: [7, 23], end: [8, 22] },
  { key: "virgo", th: "ราศีกันย์", en: "Virgo", element: "earth",
    start: [8, 23], end: [9, 22] },
  { key: "libra", th: "ราศีตุลย์", en: "Libra", element: "air",
    start: [9, 23], end: [10, 22] },
  { key: "scorpio", th: "ราศีพิจิก", en: "Scorpio", element: "water",
    start: [10, 23], end: [11, 21] },
  { key: "sagittarius", th: "ราศีธนู", en: "Sagittarius", element: "fire",
    start: [11, 22], end: [12, 21] }
];

const ELEMENT_FLAVOUR = {
  fire: { th: "ธาตุไฟ กระตือรือร้น กล้าลุย", en: "Fire — energetic, bold, quick to act" },
  earth: { th: "ธาตุดิน มั่นคง สุขุม", en: "Earth — grounded, steady, calm" },
  air: { th: "ธาตุลม ว่องไว ชอบสื่อสาร", en: "Air — quick-witted, social, communicative" },
  water: { th: "ธาตุน้ำ อ่อนไหว ลึกซึ้ง", en: "Water — intuitive, deep, emotionally attuned" }
};

function getZodiac(day, month) {
  for (const z of ZODIAC) {
    const [sm, sd] = z.start;
    const [em, ed] = z.end;
    if (sm === em) {
      if (month === sm && day >= sd && day <= ed) return z;
    } else if (sm > em) {
      // wraps year end (Capricorn: Dec 22 - Jan 19)
      if ((month === sm && day >= sd) || (month === em && day <= ed)) return z;
    } else {
      if ((month === sm && day >= sd) || (month === em && day <= ed) ||
          (month > sm && month < em)) return z;
    }
  }
  return ZODIAC[0];
}

function getElement(zodiac) {
  return { key: zodiac.element, ...ELEMENT_FLAVOUR[zodiac.element] };
}

const THAI_DAYS = [
  { key: "sun", th: "วันอาทิตย์", en: "Sunday", colourTh: "แดง", colourEn: "Red", hex: "#E8412C" },
  { key: "mon", th: "วันจันทร์", en: "Monday", colourTh: "เหลือง", colourEn: "Yellow", hex: "#FFD23F" },
  { key: "tue", th: "วันอังคาร", en: "Tuesday", colourTh: "ชมพู", colourEn: "Pink", hex: "#FF8CC0" },
  { key: "wed", th: "วันพุธ", en: "Wednesday", colourTh: "เขียว", colourEn: "Green", hex: "#3FA86B" },
  { key: "thu", th: "วันพฤหัสบดี", en: "Thursday", colourTh: "ส้ม", colourEn: "Orange", hex: "#FF8A3D" },
  { key: "fri", th: "วันศุกร์", en: "Friday", colourTh: "ฟ้า", colourEn: "Sky Blue", hex: "#5BB8F0" },
  { key: "sat", th: "วันเสาร์", en: "Saturday", colourTh: "ม่วง", colourEn: "Purple", hex: "#8E5BD9" }
];

function getThaiDayColour(weekdayIndex) {
  if (weekdayIndex == null || weekdayIndex < 0 || weekdayIndex > 6) return null;
  return THAI_DAYS[weekdayIndex];
}

const THAI_DAYS_LIST = THAI_DAYS;

// --- Lucky numerology colour (root-number / Moolank framework — see sourcing note) ---
const NUMEROLOGY_TABLE = {
  1: { ruler: { th: "อาทิตย์", en: "Sun" }, names: { th: ["ทอง", "ส้มไหม้"], en: ["Gold", "Burnt Orange"] }, hex: ["#D9A21B", "#D9722E"],
       meaning: { th: "โดดเด่น มั่นใจ พร้อมเป็นผู้นำ", en: "Confident, radiant, natural leader energy." } },
  2: { ruler: { th: "จันทร์", en: "Moon" }, names: { th: ["มุกขาว", "เงิน"], en: ["Pearl White", "Silver"] }, hex: ["#EDEAE2", "#B9C2CE"],
       meaning: { th: "อ่อนโยน ใช้สัญชาตญาณ อ่อนไหวง่าย", en: "Gentle, intuitive, emotionally sensitive." } },
  3: { ruler: { th: "พฤหัสบดี", en: "Jupiter" }, names: { th: ["เหลืองแดดจ้า", "อำพัน"], en: ["Sunshine Yellow", "Amber"] }, hex: ["#F2C230", "#D98A1B"],
       meaning: { th: "ร่าเริง มองโลกในแง่ดี ชอบเรียนรู้", en: "Optimistic, expansive, drawn to learning." } },
  4: { ruler: { th: "ราหู", en: "Rahu" }, names: { th: ["เทาหินชนวน", "ฟ้าไฟฟ้า"], en: ["Slate Grey", "Electric Blue"] }, hex: ["#7A828C", "#3B6FD9"],
       meaning: { th: "มีระบบ รอบคอบ ไม่ชอบความวุ่นวาย", en: "Systematic, careful, dislikes chaos." } },
  5: { ruler: { th: "พุธ", en: "Mercury" }, names: { th: ["เขียว", "เขียวเทอร์ควอยซ์"], en: ["Green", "Turquoise"] }, hex: ["#3FA86B", "#3FBFB0"],
       meaning: { th: "ปรับตัวไว ชอบสื่อสาร กระตือรือร้น", en: "Adaptable, communicative, quick-moving." } },
  6: { ruler: { th: "ศุกร์", en: "Venus" }, names: { th: ["ฟ้าอ่อน", "เขียวอ่อน"], en: ["Powder Blue", "Soft Green"] }, hex: ["#8FC7E8", "#8ED18E"],
       meaning: { th: "รักสวยงาม อบอุ่น ใส่ใจความสัมพันธ์", en: "Aesthetic, warm, relationship-oriented." } },
  7: { ruler: { th: "เกตุ", en: "Ketu" }, names: { th: ["เขียวทะเล", "เทาหมอก"], en: ["Sea Green", "Mist Grey"] }, hex: ["#4F9E8A", "#A8ACA8"],
       meaning: { th: "ชอบครุ่นคิด สนใจเรื่องลึกซึ้ง", en: "Reflective, drawn to depth and quiet inquiry." } },
  8: { ruler: { th: "เสาร์", en: "Saturn" }, names: { th: ["น้ำเงินเข้ม", "ม่วงเข้ม"], en: ["Deep Navy", "Plum"] }, hex: ["#2B3FA8", "#5B3A6B"],
       meaning: { th: "อดทน มีวินัย มุ่งมั่นระยะยาว", en: "Disciplined, patient, plays the long game." } },
  9: { ruler: { th: "อังคาร", en: "Mars" }, names: { th: ["แดงปะการัง", "ชมพูกุหลาบ"], en: ["Coral Red", "Rose Pink"] }, hex: ["#E0522C", "#E27FA0"],
       meaning: { th: "มีพลัง กล้าตัดสินใจ สู้เพื่อสิ่งที่เชื่อ", en: "Driven, decisive, fights for what it believes." } }
};

function reduceToRoot(n) {
  while (n > 9) {
    n = String(n).split("").reduce((a, d) => a + Number(d), 0);
  }
  return n;
}

function getLuckyColour(day) {
  const root = reduceToRoot(day);
  return { root, ...NUMEROLOGY_TABLE[root] };
}

function getDayOptions(month) {
  const daysInMonth = { 1:31,2:29,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31 };
  const max = daysInMonth[month] || 31;
  return Array.from({ length: max }, (_, i) => i + 1);
}

const MONTHS = [
  { num: 1, th: "ม.ค.", en: "Jan" }, { num: 2, th: "ก.พ.", en: "Feb" },
  { num: 3, th: "มี.ค.", en: "Mar" }, { num: 4, th: "เม.ย.", en: "Apr" },
  { num: 5, th: "พ.ค.", en: "May" }, { num: 6, th: "มิ.ย.", en: "Jun" },
  { num: 7, th: "ก.ค.", en: "Jul" }, { num: 8, th: "ส.ค.", en: "Aug" },
  { num: 9, th: "ก.ย.", en: "Sep" }, { num: 10, th: "ต.ค.", en: "Oct" },
  { num: 11, th: "พ.ย.", en: "Nov" }, { num: 12, th: "ธ.ค.", en: "Dec" }
];
