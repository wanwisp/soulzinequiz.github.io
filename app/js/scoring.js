// scoring.js — deterministic scoring per ArchetypeReference.md §3 (v2 matrix, v3 twins).
// Depends on GROUP_SCORES and GROUP_ORDER from data-questions.js.

const LETTER_POS = { a: 0, b: 1, c: 2, d: 3, e: 4 };

/**
 * @param {Object} groupAnswers - { g1: "a", g2: "c", ... } (one letter per group)
 * @returns {{ scores: Object<number, number>, winnerNum: number, tied: number[] }}
 */
function scoreQuiz(groupAnswers) {
  const scores = {};
  for (let n = 1; n <= 30; n++) scores[n] = 0;

  let answerSum = 0;
  for (const g of GROUP_ORDER) {
    const letter = groupAnswers[g];
    if (!letter) continue;
    answerSum += LETTER_POS[letter];
    for (const [num, pts] of GROUP_SCORES[g][letter]) scores[num] += pts;
  }

  // Tie-break §3.3: tied archetypes sorted by ID, pick index (sum of answer positions) mod count.
  const top = Math.max(...Object.values(scores));
  const tied = Object.keys(scores).map(Number).filter(n => scores[n] === top).sort((a, b) => a - b);
  const winnerNum = tied[answerSum % tied.length];

  return { scores, winnerNum, tied };
}
