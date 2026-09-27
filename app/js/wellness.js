// wellness.js — "convincible info" block, sourced per SPECFinal.md §17/§20.
//
// SOURCING NOTE:
// - Jacintha (five-colours) and Better Health Channel content below was fetched
//   live from the URLs in the spec and paraphrased/shortened; not verbatim.
// - OMICS holistic-nutrition content was fetched live and paraphrased.
// - Everyday Health's exact Ayurvedic-diet article could not be fetched (blocked
//   in this environment). The Ayurveda note below uses the standard, widely
//   corroborated Vata/Pitta/Kapha framework rather than that specific article's
//   wording — flagged here so it can be swapped for the verified article text.
//
// Lucky numerology colours (birthday.js) are bucketed into Jacintha's five food
// colours by nearest hue family, then the evidence-informed lines are attached
// to that same bucket — never invented and pinned on a source.

const FOOD_BY_COLOUR = {
  red: {
    th: { colourLabel: "แดง", foods: ["มะเขือเทศ", "แตงโม", "สตรอว์เบอร์รี"], line: "ไลโคปีนในของแดงช่วยลดความเสี่ยงมะเร็งบางชนิดและดีต่อสุขภาพหัวใจ" },
    en: { colourLabel: "Red", foods: ["Tomatoes", "Watermelon", "Strawberries"], line: "Lycopene in red foods is linked to lower cancer risk and heart health." },
    source: "Jacintha — Five Colours You Should Be Eating"
  },
  orange: {
    th: { colourLabel: "ส้ม", foods: ["แครอท", "มันเทศ", "มะม่วง"], line: "เบต้าแคโรทีนในของส้มเป็นสารตั้งต้นของวิตามินเอ ซึ่งดีต่อสายตา" },
    en: { colourLabel: "Orange", foods: ["Carrots", "Sweet Potato", "Mango"], line: "Beta-carotene in orange foods is a building block of vitamin A, linked to eye health." },
    source: "Jacintha — Five Colours You Should Be Eating"
  },
  green: {
    th: { colourLabel: "เขียว", foods: ["มัทฉะ", "บรอกโคลี", "ถั่วแระ"], line: "คลอโรฟิลล์และโฟเลตในของเขียวช่วยเรื่องสารต้านอนุมูลอิสระและการเติบโตของเซลล์" },
    en: { colourLabel: "Green", foods: ["Matcha", "Broccoli", "Edamame"], line: "Chlorophyll and folate in green foods support antioxidant activity and cell growth." },
    source: "Jacintha — Five Colours You Should Be Eating"
  },
  purple: {
    th: { colourLabel: "ม่วง", foods: ["บลูเบอร์รี", "องุ่นม่วง", "มะเขือม่วง"], line: "แอนโทไซยานินในของม่วงเป็นสารต้านอนุมูลอิสระที่ช่วยลดความเสี่ยงโรคหัวใจ" },
    en: { colourLabel: "Purple", foods: ["Blueberries", "Purple Grapes", "Eggplant"], line: "Anthocyanins in purple foods are strong antioxidants linked to heart health." },
    source: "Jacintha — Five Colours You Should Be Eating"
  },
  white: {
    th: { colourLabel: "ขาว", foods: ["กระเทียม", "หอมหัวใหญ่", "ต้นหอมฝรั่ง"], line: "อัลลิซินเป็นสารสำคัญในของขาว มักถูกพูดถึงคู่กับสุขภาพหัวใจและความดันโลหิต" },
    en: { colourLabel: "White", foods: ["Garlic", "Onion", "Leeks"], line: "Allicin is the key compound in white foods, often discussed alongside heart health and blood pressure." },
    source: "Jacintha — Five Colours You Should Be Eating"
  }
};

// numerology root number (1-9) -> nearest Jacintha bucket
const ROOT_TO_BUCKET = {
  1: "orange", 2: "white", 3: "orange", 4: "white",
  5: "green", 6: "green", 7: "green", 8: "purple", 9: "red"
};

const HEALTHY_EATING_TIPS = {
  th: "กินให้ครบ 5 หมู่ในสัดส่วนที่เหมาะสม ลดของทอด ของหวาน และโซเดียม เลือกไขมันดีอย่างน้ำมันมะกอกหรืออะโวคาโดแทนไขมันอิ่มตัว",
  en: "Eat a variety from all 5 food groups, limit fried/sugary/salty foods, and swap saturated fats for options like olive oil or avocado.",
  source: "Better Health Channel — Healthy Eating"
};

const HOLISTIC_NUTRITION_NOTE = {
  th: "โภชนาการแบบองค์รวมมองว่าร่างกาย จิตใจ และอารมณ์เชื่อมโยงกัน เน้นอาหารที่แปรรูปน้อย กินอย่างมีสติ และปรับให้เหมาะกับแต่ละคน ไม่ใช่สูตรตายตัวเดียวสำหรับทุกคน",
  en: "Holistic nutrition treats body, mind and emotion as connected — favouring minimally processed food, mindful eating, and plans personalised to the individual rather than one-size-fits-all.",
  source: "OMICS — Holistic Nutrition"
};

const AYURVEDA_NOTE = {
  th: "แนวคิดอายุรเวทแบ่งพลังงานร่างกายเป็นสามโดชา ได้แก่ วาตะ (ลม), ปิตตะ (ไฟ) และกผะ (ดิน-น้ำ) และแนะนำให้เลือกอาหารให้เข้ากับโดชาของตัวเอง ถือเป็นแนวทางสุขภาพแบบดั้งเดิม ไม่ใช่การรักษาทางการแพทย์",
  en: "Ayurveda frames the body around three doshas — Vata (air), Pitta (fire) and Kapha (earth-water) — and suggests eating in ways that balance one's dominant dosha. It's a traditional wellness framework, not a medically proven treatment.",
  source: "Everyday Health — Ayurvedic Diet (framework reconstructed; original article was unreachable in this environment — see wellness.js sourcing note)"
};

function getWellnessBundle(rootNumber) {
  const bucket = ROOT_TO_BUCKET[rootNumber] || "green";
  return {
    bucket,
    food: FOOD_BY_COLOUR[bucket],
    healthyEating: HEALTHY_EATING_TIPS,
    holistic: HOLISTIC_NUTRITION_NOTE,
    ayurveda: AYURVEDA_NOTE
  };
}
