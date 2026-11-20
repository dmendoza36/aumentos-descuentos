import { questions } from './content.js';

export function scoreAnswers(answers) {
  if (!Array.isArray(answers) || answers.length !== questions.length || questions.some((question, i) => !Number.isInteger(answers[i]) || answers[i] < 0 || answers[i] >= question.options.length)) {
    throw new TypeError('Responde las tres preguntas con una alternativa válida.');
  }
  return questions.reduce((result, question, i) => {
    if (answers[i] === question.correct) {
      result.score += question.points;
      result.correct += 1;
    }
    result.total += question.points;
    return result;
  }, { score: 0, correct: 0, total: 0 });
}

export function newAttempt() {
  return { index: 0, answers: questions.map(() => null), result: null };
}
