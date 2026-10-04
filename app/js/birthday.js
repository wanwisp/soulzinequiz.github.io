// birthday.js — birthday-layer lookups per Astrology_Colour.md §1–§3.1.
// Zodiac dates + element: Britannica (via DesignUX.md §6). Vibe/meaning lines are
// SoulZine [FUN] interpretations. Thai birth-day colour: Thai tradition [TRADITION],
// from the OPTIONAL weekday pill. Numerology (astroleaf) was dropped on 3 Oct 2026;
// the lucky colour now comes from today's weekday (data-colours.js).

// Listed Aries-first so the index doubles as the zodiac-dial position (30° each).
const ZODIAC = [
  { key: "aries", th: "ราศีเมษ", en: "Aries", glyph: "♈", element: "fire", start: [3, 21], end: [4, 19],
    rangeTh: "21 มี.ค. – 19 เม.ย.", rangeEn: "21 Mar – 19 Apr",
    vibeTh: "สายลุย คิดปุ๊บทำปั๊บ เป็นคนแรกที่กดเริ่มเสมอ", vibeEn: "First to hit start. Thinks later, moves now." },
  { key: "taurus", th: "ราศีพฤษภ", en: "Taurus", glyph: "♉", element: "earth", start: [4, 20], end: [5, 20],
    rangeTh: "20 เม.ย. – 20 พ.ค.", rangeEn: "20 Apr – 20 May",
    vibeTh: "มั่นคง สุขุม สายของอร่อย ใครเร่งก็ไม่รีบ", vibeEn: "Steady, calm, loves good food, and won't be rushed." },
  { key: "gemini", th: "ราศีเมถุน", en: "Gemini", glyph: "♊", element: "air", start: [5, 21], end: [6, 20],
    rangeTh: "21 พ.ค. – 20 มิ.ย.", rangeEn: "21 May – 20 Jun",
    vibeTh: "คุยเก่ง ในหัวเปิดไว้ 20 แท็บพร้อมกัน", vibeEn: "Great talker with 20 tabs open in their head." },
  { key: "cancer", th: "ราศีกรกฎ", en: "Cancer", glyph: "♋", element: "water", start: [6, 21], end: [7, 22],
    rangeTh: "21 มิ.ย. – 22 ก.ค.", rangeEn: "21 Jun – 22 Jul",
    vibeTh: "เปลือกแข็งแต่ข้างในนุ่มนิ่ม แอบห่วงทุกคน", vibeEn: "Tough shell, soft centre, quietly looks after everyone." },
  { key: "leo", th: "ราศีสิงห์", en: "Leo", glyph: "♌", element: "fire", start: [7, 23], end: [8, 22],
    rangeTh: "23 ก.ค. – 22 ส.ค.", rangeEn: "23 Jul – 22 Aug",
    vibeTh: "ออร่าตัวแม่ เดินเข้าห้องไหนห้องนั้นสว่าง", vibeEn: "Main-character energy. Lights up any room." },
  { key: "virgo", th: "ราศีกันย์", en: "Virgo", glyph: "♍", element: "earth", start: [8, 23], end: [9, 22],
    rangeTh: "23 ส.ค. – 22 ก.ย.", rangeEn: "23 Aug – 22 Sep",
    vibeTh: "ละเอียดยิบ เช็กลิสต์ครบก่อนออกจากบ้าน", vibeEn: "Detail expert. The checklist is done before leaving home." },
  { key: "libra", th: "ราศีตุลย์", en: "Libra", glyph: "♎", element: "air", start: [9, 23], end: [10, 22],
    rangeTh: "23 ก.ย. – 22 ต.ค.", rangeEn: "23 Sep – 22 Oct",
    vibeTh: "สายบาลานซ์ เลือกร้านข้าวครึ่งชั่วโมงเพราะอยากให้ทุกคนแฮปปี้", vibeEn: "Balance seeker. Takes 30 minutes to pick lunch so everyone's happy." },
  { key: "scorpio", th: "ราศีพิจิก", en: "Scorpio", glyph: "♏", element: "water", start: [10, 23], end: [11, 21],
    rangeTh: "23 ต.ค. – 21 พ.ย.", rangeEn: "23 Oct – 21 Nov",
    vibeTh: "นิ่งแต่ลึก รู้ทุกเรื่องแต่ไม่พูด", vibeEn: "Quiet but deep. Knows everything, says little." },
  { key: "sagittarius", th: "ราศีธนู", en: "Sagittarius", glyph: "♐", element: "fire", start: [11, 22], end: [12, 21],
    rangeTh: "22 พ.ย. – 21 ธ.ค.", rangeEn: "22 Nov – 21 Dec",
    vibeTh: "จองตั๋วก่อน ค่อยคิดทีหลังว่าไปทำอะไร", vibeEn: "Books the ticket first, figures out the trip later." },
  { key: "capricorn", th: "ราศีมังกร", en: "Capricorn", glyph: "♑", element: "earth", start: [12, 22], end: [1, 19],
    rangeTh: "22 ธ.ค. – 19 ม.ค.", rangeEn: "22 Dec – 19 Jan",
    vibeTh: "ค่อย ๆ ปีน แต่ถึงยอดทุกที", vibeEn: "Slow, steady climber who always reaches the top." },
  { key: "aquarius", th: "ราศีกุมภ์", en: "Aquarius", glyph: "♒", element: "air", start: [1, 20], end: [2, 18],
    rangeTh: "20 ม.ค. – 18 ก.พ.", rangeEn: "20 Jan – 18 Feb",
    vibeTh: "ไอเดียแปลกใหม่ มาก่อนเทรนด์สามปี", vibeEn: "Odd ideas, three years ahead of the trend." },
  { key: "pisces", th: "ราศีมีน", en: "Pisces", glyph: "♓", element: "water", start: [2, 19], end: [3, 20],
    rangeTh: "19 ก.พ. – 20 มี.ค.", rangeEn: "19 Feb – 20 Mar",
    vibeTh: "ช่างฝัน อินกับเพลงเศร้าได้ทุกเพลง", vibeEn: "Dreamy. Feels every sad song." }
];

const ELEMENTS = {
  fire:  { key: "fire",  th: "ธาตุไฟ", en: "Fire",  hex: "#FF8A3D", meaningTh: "ร้อนแรง กล้าลุย พลังเหลือเฟือ",   meaningEn: "Bold, warm, endless energy" },
  earth: { key: "earth", th: "ธาตุดิน", en: "Earth", hex: "#9AA84A", meaningTh: "มั่นคง สุขุม ติดดิน พึ่งพาได้",   meaningEn: "Steady, calm, grounded, dependable" },
  air:   { key: "air",   th: "ธาตุลม", en: "Air",   hex: "#8FD8EE", meaningTh: "คิดไว พูดเก่ง รักอิสระ",          meaningEn: "Quick-thinking, chatty, free-spirited" },
  water: { key: "water", th: "ธาตุน้ำ", en: "Water", hex: "#6F8BEA", meaningTh: "อ่อนโยน อ่านใจคนเก่ง รู้สึกลึกซึ้ง", meaningEn: "Gentle, intuitive, feels deeply" }
};

function getZodiac(day, month) {
  for (const z of ZODIAC) {
    const [sm, sd] = z.start;
    const [em, ed] = z.end;
    if (sm > em) {
      if ((month === sm && day >= sd) || (month === em && day <= ed)) return z; // Capricorn wraps
    } else if ((month === sm && day >= sd) || (month === em && day <= ed) || (month > sm && month < em)) {
      return z;
    }
  }
  return ZODIAC[0];
}

function getZodiacIndex(zodiac) { return ZODIAC.indexOf(zodiac); }
function getElement(zodiac) { return ELEMENTS[zodiac.element]; }

// Thai birth-day colours — Thai tradition (Astrology_Colour.md §3.1), index = JS getDay()
const THAI_DAYS = [
  { key: "sun", th: "วันอาทิตย์", en: "Sunday",    short: { th: "อา", en: "Su" }, colourTh: "แดง",   colourEn: "Red",      hex: "#E8412C", vibeTh: "พลังเต็มถัง เปิดวงก่อนใคร",       vibeEn: "Full battery, always opens the party" },
  { key: "mon", th: "วันจันทร์", en: "Monday",    short: { th: "จ",  en: "Mo" }, colourTh: "เหลือง", colourEn: "Yellow",   hex: "#FFD23F", vibeTh: "อบอุ่น อ่อนโยน ใครอยู่ใกล้ก็สบายใจ", vibeEn: "Warm and gentle, comfortable to be around" },
  { key: "tue", th: "วันอังคาร", en: "Tuesday",   short: { th: "อ",  en: "Tu" }, colourTh: "ชมพู",  colourEn: "Pink",     hex: "#FF8CC0", vibeTh: "หวานแต่กล้า น่ารักแบบมีพลัง",       vibeEn: "Sweet but brave, cute with power" },
  { key: "wed", th: "วันพุธ",    en: "Wednesday", short: { th: "พ",  en: "We" }, colourTh: "เขียว", colourEn: "Green",    hex: "#3FA86B", vibeTh: "สดชื่น คุยเก่ง ไปได้กับทุกคน",       vibeEn: "Fresh, chatty, gets along with everyone" },
  { key: "thu", th: "วันพฤหัสบดี", en: "Thursday", short: { th: "พฤ", en: "Th" }, colourTh: "ส้ม",  colourEn: "Orange",   hex: "#FF8A3D", vibeTh: "สายครู สายแชร์ ชอบสอนชอบเล่า",      vibeEn: "The friend who explains everything" },
  { key: "fri", th: "วันศุกร์",  en: "Friday",    short: { th: "ศ",  en: "Fr" }, colourTh: "ฟ้า",   colourEn: "Sky blue", hex: "#5BB8F0", vibeTh: "ชิล ๆ ใจดี สายศิลป์",              vibeEn: "Chill, kind, artsy" },
  { key: "sat", th: "วันเสาร์",  en: "Saturday",  short: { th: "ส",  en: "Sa" }, colourTh: "ม่วง",  colourEn: "Purple",   hex: "#8E5BD9", vibeTh: "ลึกลับ นิ่ง แต่เท่",                 vibeEn: "Mysterious, calm, cool" }
];

function getThaiDayColour(weekdayIndex) {
  if (weekdayIndex == null || weekdayIndex < 0 || weekdayIndex > 6) return null;
  return THAI_DAYS[weekdayIndex];
}

const DAYS_IN_MONTH = { 1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };

const MONTHS = [
  { num: 1, th: "ม.ค.", en: "Jan" }, { num: 2, th: "ก.พ.", en: "Feb" },
  { num: 3, th: "มี.ค.", en: "Mar" }, { num: 4, th: "เม.ย.", en: "Apr" },
  { num: 5, th: "พ.ค.", en: "May" }, { num: 6, th: "มิ.ย.", en: "Jun" },
  { num: 7, th: "ก.ค.", en: "Jul" }, { num: 8, th: "ส.ค.", en: "Aug" },
  { num: 9, th: "ก.ย.", en: "Sep" }, { num: 10, th: "ต.ค.", en: "Oct" },
  { num: 11, th: "พ.ย.", en: "Nov" }, { num: 12, th: "ธ.ค.", en: "Dec" }
];
