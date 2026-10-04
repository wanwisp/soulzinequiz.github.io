// data-colours.js — Today's lucky colours (สีมงคลวันนี้), Astrology_Colour.md §3.2.
// Source: Hua Seng Hong, "สีเสื้อมงคล 2569 ประจำวัน"
//   https://www.huasenghong.com/blog/7317/cloth-lucky-color
// The source states these are "ตามวันปัจจุบันไม่ใช่ตามวันเกิด" (by today's day, not
// birth day), so they follow the device date and are never shown as a birth colour.
// YEAR-BOUND: 2569 (2026). From 1 Jan 2570 replace with the source's 2570 edition
// (the only web search allowed for colour facts, spec §16).

const LUCKY_YEAR_BE = 2569;

// Swatch hex values are design approximations (DesignSystem.md §2.7), not from the source.
const COLOUR_NAMES = {
  red:    { th: "แดง",    en: "red",        hex: "#E8412C" },
  orange: { th: "ส้ม",    en: "orange",     hex: "#FF8A3D" },
  yellow: { th: "เหลือง", en: "yellow",     hex: "#FFD23F" },
  green:  { th: "เขียว",  en: "green",      hex: "#3FA86B" },
  sky:    { th: "ฟ้า",    en: "light blue", hex: "#5BB8F0" },
  navy:   { th: "น้ำเงิน", en: "navy",       hex: "#2B3FA8" },
  purple: { th: "ม่วง",   en: "purple",     hex: "#8E5BD9" },
  pink:   { th: "ชมพู",   en: "pink",       hex: "#FF8CC0" },
  brown:  { th: "น้ำตาล", en: "brown",      hex: "#8B5A3C" },
  black:  { th: "ดำ",     en: "black",      hex: "#141414" },
  white:  { th: "ขาว",    en: "white",      hex: "#FFFFFF" },
  grey:   { th: "เทา",    en: "grey",       hex: "#9A9A9A" },
  cream:  { th: "ครีม",   en: "cream",      hex: "#F3E5C8" }
};

// Category labels; "health" is displayed as "Energy" so it never reads as a health claim (spec §18).
const LUCKY_CATEGORIES = [
  { key: "luck",   th: "สีเสริมโชคลาภ",  en: "Luck",
    lineTh: "ลุ้นหวย ลุ้นสัมภาษณ์ ลุ้นอะไรอยู่ สีนี้แหละ", lineEn: "Waiting on a lottery, an interview, anything? This is the one." },
  { key: "work",   th: "สีเสริมการงาน",  en: "Work",
    lineTh: "วันนี้มีพรีเซนต์? ใส่สีนี้ ผู้ใหญ่เอ็นดูแบบงง ๆ", lineEn: "Big meeting today? Wear this and the bosses will like you without knowing why." },
  { key: "money",  th: "สีเสริมการเงิน", en: "Money",
    lineTh: "จะเซ็นอะไร จะจ่ายอะไร ใส่สีนี้ไว้ก่อน", lineEn: "Signing or spending today? Start with this colour." },
  { key: "love",   th: "สีเสริมความรัก", en: "Love",
    lineTh: "มีเดตไหม? สีนี้ช่วยเพิ่มเสน่ห์", lineEn: "Got a date? This one turns up the charm." },
  { key: "health", th: "สีเติมพลัง",     en: "Energy",
    lineTh: "วันหมดแรงหรือเดินทางไกล หยิบสีนี้เติมพลัง", lineEn: "Running low or travelling far? Grab this for a boost." },
  { key: "avoid",  th: "สีฉุดดวง",       en: "Avoid today",
    lineTh: "สีนี้ขอพักก่อนนะวันนี้", lineEn: "Give this colour a day off." }
];

// Index = JS Date.getDay() (0 = Sunday). Colours quoted from the source table.
const LUCKY_BY_WEEKDAY = [
  /* Sun */ { work: ["purple","black"], money: ["green"], love: ["pink"], health: ["white","cream","grey"], luck: ["purple"], avoid: ["sky","navy"] },
  /* Mon */ { work: ["orange","brown"], money: ["purple","black"], love: ["green"], health: ["pink"], luck: ["sky","navy"], avoid: ["red"] },
  /* Tue */ { work: ["purple","pink"], money: ["orange","brown"], love: ["purple","black"], health: ["green"], luck: ["red"], avoid: ["yellow","white"] },
  /* Wed */ { work: ["sky","navy"], money: ["purple"], love: ["orange","brown"], health: ["purple","black"], luck: ["yellow","white","grey"], avoid: ["pink"] },
  /* Thu */ { work: ["yellow","white","grey"], money: ["red"], love: ["sky","navy"], health: ["grey"], luck: ["green"], avoid: ["purple","black"] },
  /* Fri */ { work: ["green"], money: ["pink"], love: ["yellow","white","grey"], health: ["red","orange"], luck: ["orange","brown"], avoid: ["purple"] },
  /* Sat */ { work: ["red"], money: ["sky","navy"], love: ["purple","pink"], health: ["orange","yellow"], luck: ["pink","red"], avoid: ["green"] }
];

function getTodayLucky(date = new Date()) {
  const weekday = date.getDay();
  const row = LUCKY_BY_WEEKDAY[weekday];
  return {
    weekday,
    day: THAI_DAYS[weekday],                 // from birthday.js (names only)
    headline: COLOUR_NAMES[row.luck[0]],     // headline lucky colour = first สีเสริมโชคลาภ colour
    headlineKey: row.luck[0],
    categories: LUCKY_CATEGORIES.map(c => ({ ...c, colours: row[c.key].map(k => ({ key: k, ...COLOUR_NAMES[k] })) })),
    yearBE: LUCKY_YEAR_BE,
    expired: date.getFullYear() + 543 > LUCKY_YEAR_BE
  };
}
