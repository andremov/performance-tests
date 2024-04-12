const { performance } = require('perf_hooks');
const { waterTrap } = require('./problem-01.js');

describe('problem-01', () => {
  const performanceData = {};

  afterAll(() => {
    console.log(performanceData);
  });

  test('case-01', () => {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const correctAnswer = 6;

    const startTime = performance.now();
    const answer = waterTrap(height);
    const endTime = performance.now();

    performanceData['case-01'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-02', () => {
    const height = [4, 2, 0, 3, 2, 5];
    const correctAnswer = 9;

    const startTime = performance.now();
    const answer = waterTrap(height);
    const endTime = performance.now();

    performanceData['case-02'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });

  test('case-03', () => {
    const height = [
      67, 45, 89, 23, 56, 78, 92, 34, 76, 11, 53, 87, 39, 64, 81, 29, 72, 98, 50, 16, 83, 42, 70,
      58, 95, 27, 74, 36, 69, 18, 62, 84, 31, 80, 52, 91, 48, 75, 33, 88, 44, 77, 25, 63, 96, 60,
      38, 71, 19, 86, 54, 94, 30, 82, 57, 99, 28, 73, 47, 85, 59, 97, 55, 90, 22, 68, 35, 79, 24,
      41, 61, 37, 93, 26, 43, 65, 32, 66, 49, 100, 20, 21, 15, 14, 17, 13, 12,
    ];
    const correctAnswer = 2962;

    const startTime = performance.now();
    const answer = waterTrap(height);
    const endTime = performance.now();

    performanceData['case-03'] = `${(endTime - startTime) * 1000} μs`;

    expect(answer).toBe(correctAnswer);
  });
});
