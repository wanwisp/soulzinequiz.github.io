// community.js — illustrative-only rarity + comparison chart data.
// Per SPECFinal.md §14C/§22: these numbers are UI pattern/prototype copy until
// real participation data exists. Deterministic (seeded by archetype id), not random,
// so the same archetype always shows the same illustrative rarity within this build.

function seededPct(seed, min = 0.8, max = 7.5) {
  // simple deterministic pseudo-distribution, no Math.random()
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  const frac = x - Math.floor(x);
  return Math.round((min + frac * (max - min)) * 10) / 10;
}

function getIllustrativeRarity(archetypeNum) {
  return seededPct(archetypeNum * 7 + 3);
}

// Fixed reference archetypes for the compare-souls chart, per spec §14C:
// sidewalk weeds (ARCHETYPE_22), boba pearls (ARCHETYPE_27), soi cats (ARCHETYPE_12)
const COMPARE_REFERENCE = [
  { num: 22, labelTh: "วัชพืชริมฟุตบาท", labelEn: "Sidewalk Weeds", color: "#5A9B4A" },
  { num: 27, labelTh: "ไข่มุกชานม", labelEn: "Boba Pearls", color: "#8A5A2E" },
  { num: 12, labelTh: "แมวจร", labelEn: "Soi Cats", color: "#D98A3D" }
];

function getCompareChartData(userArchetypeNum) {
  const bars = COMPARE_REFERENCE.map(ref => ({
    ...ref,
    pct: getIllustrativeRarity(ref.num),
    isYou: ref.num === userArchetypeNum
  }));
  const userAlreadyIncluded = bars.some(b => b.isYou);
  if (!userAlreadyIncluded) {
    bars.push({ num: userArchetypeNum, labelTh: "คุณ", labelEn: "You", color: "#F7A8C8", pct: getIllustrativeRarity(userArchetypeNum), isYou: true });
  }
  return bars;
}

// Illustrative "research dashboard" preview data (Section 22)
function getIllustrativeResearchSnapshot() {
  return {
    totalPlayers: 148290,
    topArchetypeNum: 22,
    standoutDimension: { th: "exploration · ชอบสำรวจ", en: "exploration" }
  };
}
