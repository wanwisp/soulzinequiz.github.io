// scoring.js — deterministic scoring engine per ArchetypeReference.md §3
// Depends on QUESTIONS from data-questions.js (loaded first as a plain script).

/**
 * @param {Object} answers - { q1: "a", q2: "c", ... }
 * @returns {{ scores: Object<number, number>, winnerNum: number, sortedNums: number[] }}
 */
function scoreQuiz(answers) {
  const scores = {};
  for (let n = 1; n <= 30; n++) scores[n] = 0;

  for (const q of QUESTIONS) {
    const chosenId = answers[q.id];
    if (!chosenId) continue;
    const opt = q.options.find(o => o.id === chosenId);
    if (!opt) continue;
    for (const [archNum, pts] of opt.score) {
      scores[archNum] = (scores[archNum] || 0) + pts;
    }
  }

  let winnerNum = null;
  let bestScore = -1;
  for (let n = 1; n <= 30; n++) {
    if (scores[n] > bestScore) {
      bestScore = scores[n];
      winnerNum = n;
    }
    // tie-break: lowest ARCHETYPE_ID wins, so strictly-greater only replaces
  }

  const sortedNums = Object.keys(scores)
    .map(Number)
    .sort((a, b) => scores[b] - scores[a] || a - b);

  return { scores, winnerNum, sortedNums };
}
