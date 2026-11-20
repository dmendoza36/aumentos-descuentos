import test from 'node:test';
import assert from 'node:assert/strict';
import { scoreAnswers, newAttempt } from '../src/exam.js';
import { questions } from '../src/content.js';

const cases = [
  [[1,1,1],0,0], [[0,1,1],6,1], [[1,0,1],7,1], [[1,1,0],7,1],
  [[0,0,1],13,2], [[0,1,0],13,2], [[1,0,0],14,2], [[0,0,0],20,3]
];
for (const [answers, score, correct] of cases) {
  test(`respuestas ${answers.join(',')}: ${score}/20 y ${correct} aciertos`, () => {
    assert.deepEqual(scoreAnswers(answers), { score, correct, total: 20 });
  });
}
test('rechaza intentos incompletos o alternativas inválidas', () => {
  for (const answers of [[0,null,0], [0,0], [0,4,0], [0,-1,0], [0,'0',0], new Array(3), null]) {
    assert.throws(() => scoreAnswers(answers), TypeError);
  }
});
test('cada alternativa incorrecta vale cero', () => {
  for (let index = 1; index < 4; index++) assert.equal(scoreAnswers([index,index,index]).score, 0);
});
test('reiniciar un intento elimina respuestas sin compartir estado', () => {
  const first = newAttempt();
  first.answers[0] = 0;
  const second = newAttempt();
  assert.deepEqual(second, { index: 0, answers: [null,null,null], result: null });
  assert.notEqual(first.answers, second.answers);
});
test('el examen conserva cuatro alternativas y A correcta', () => {
  assert.deepEqual(questions.map(q => q.points), [6,7,7]);
  for (const q of questions) { assert.equal(q.options.length, 4); assert.equal(q.correct, 0); }
});
