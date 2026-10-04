// wellness.js — eat-by-colour + "good to know" block, sourced per spec §17/§20.
//
// SOURCING NOTE:
// - Jacintha (five-colours) and Better Health Channel content was fetched from the
//   spec URLs and paraphrased/shortened; not verbatim.
// - OMICS holistic-nutrition content was fetched and paraphrased.
// - Everyday Health's Ayurvedic-diet article could not be fetched (blocked). The note
//   uses the widely corroborated Vata/Pitta/Kapha framework; flagged for swap.
//
// v2 (4 Oct 2026): the food colour now follows TODAY'S headline lucky colour
// (data-colours.js, Hua Seng Hong) mapped to Jacintha's nearest colour family.
// Numerology roots are no longer used.

const FOOD_BY_COLOUR = {
  red: {
    th: { colourLabel: "แดง", foods: ["มะเขือเทศ", "แตงโม", "สตรอว์เบอร์รี"], line: "ไลโคปีนในของสีแดงถูกพูดถึงคู่กับสุขภาพหัวใจ" },
    en: { colourLabel: "Red", foods: ["Tomatoes", "Watermelon", "Strawberries"], line: "Lycopene in red foods is often linked to heart health." }
  },
  orange: {
    th: { colourLabel: "ส้ม-เหลือง", foods: ["แครอท", "มันเทศ", "มะม่วง"], line: "เบต้าแคโรทีนในของสีส้มเป็นสารตั้งต้นของวิตามินเอ" },
    en: { colourLabel: "Orange-yellow", foods: ["Carrots", "Sweet potato", "Mango"], line: "Beta-carotene in orange foods is a building block of vitamin A." }
  },
  green: {
    th: { colourLabel: "เขียว", foods: ["มัทฉะ", "บรอกโคลี", "ถั่วแระ"], line: "ผักใบเขียวมีโฟเลตและสารต้านอนุมูลอิสระ" },
    en: { colourLabel: "Green", foods: ["Matcha", "Broccoli", "Edamame"], line: "Green vegetables bring folate and antioxidants." }
  },
  purple: {
    th: { colourLabel: "ม่วง-น้ำเงิน", foods: ["บลูเบอร์รี", "องุ่นม่วง", "มะเขือม่วง"], line: "แอนโทไซยานินในของสีม่วงเป็นสารต้านอนุมูลอิสระ" },
    en: { colourLabel: "Purple-blue", foods: ["Blueberries", "Purple grapes", "Eggplant"], line: "Anthocyanins in purple foods are antioxidants." }
  },
  white: {
    th: { colourLabel: "ขาว", foods: ["กระเทียม", "หอมหัวใหญ่", "ต้นหอมฝรั่ง"], line: "อัลลิซินในกระเทียมและหอมเป็นสารสำคัญของกลุ่มสีขาว" },
    en: { colourLabel: "White", foods: ["Garlic", "Onion", "Leeks"], line: "Allicin is the key compound in garlic and onions." }
  }
};
const FOOD_SOURCE = "Jacintha — Five Colours You Should Be Eating";

// Hua Seng Hong colour key -> nearest Jacintha colour family
const COLOUR_TO_FOOD = {
  red: "red", pink: "red", orange: "orange", yellow: "orange", brown: "orange",
  green: "green", sky: "purple", navy: "purple", purple: "purple", black: "purple",
  white: "white", cream: "white", grey: "white"
};

const HEALTHY_EATING_TIPS = {
  th: "กินให้หลากหลายจากทั้ง 5 หมู่ ลดของทอด ของหวาน และเค็ม เลือกไขมันดีอย่างน้ำมันมะกอกหรืออะโวคาโดแทนไขมันอิ่มตัว",
  en: "Eat a variety from all five food groups, limit fried, sugary and salty food, and swap saturated fats for options like olive oil or avocado.",
  source: "Better Health Channel — Healthy Eating"
};

const HOLISTIC_NUTRITION_NOTE = {
  th: "โภชนาการแบบองค์รวมมองว่าร่างกาย จิตใจ และอารมณ์เชื่อมโยงกัน เน้นอาหารแปรรูปน้อย กินอย่างมีสติ และปรับให้เหมาะกับแต่ละคน",
  en: "Holistic nutrition treats body, mind and emotion as connected: minimally processed food, mindful eating, and plans that fit the individual.",
  source: "OMICS — Holistic Nutrition"
};

const AYURVEDA_NOTE = {
  th: "อายุรเวทแบ่งพลังงานร่างกายเป็นสามโดชา คือ วาตะ ปิตตะ และกผะ แล้วเลือกอาหารให้สมดุลกับโดชาของตัวเอง เป็นแนวทางดั้งเดิม ไม่ใช่การรักษาทางการแพทย์",
  en: "Ayurveda frames the body around three doshas — Vata, Pitta and Kapha — and suggests eating to balance yours. It's a traditional approach, not a medical treatment.",
  source: "Everyday Health — Ayurvedic Diet"
};

function getWellnessBundle(headlineColourKey) {
  const family = COLOUR_TO_FOOD[headlineColourKey] || "green";
  return {
    family,
    food: FOOD_BY_COLOUR[family],
    foodSource: FOOD_SOURCE,
    healthyEating: HEALTHY_EATING_TIPS,
    holistic: HOLISTIC_NUTRITION_NOTE,
    ayurveda: AYURVEDA_NOTE
  };
}
