const floydWarshall = require('../floyd-warshall');

const distMatrix = [
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1]
];
describe('testing floydWarshall', () => {
  const testCases = [
    {
      name: 'finds shortest paths in a small matrix',
      input: distMatrix,
      expected: {
        0: { 0: 1, 1: 1, 2: Infinity, 3: Infinity },
        1: { 0: 1, 1: 0, 2: Infinity, 3: Infinity },
        2: { 0: Infinity, 1: Infinity, 2: 0, 3: Infinity },
        3: { 0: Infinity, 1: Infinity, 2: Infinity, 3: 0 }
      }
    },
    {
      name: 'finds shortest paths in a large matrix',
      input: [...distMatrix, ...distMatrix, ...distMatrix, ...distMatrix],
      expected: {
        0: {
          0: 1,
          1: 1,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        1: {
          0: 1,
          1: 0,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        10: {
          0: Infinity,
          1: Infinity,
          10: 0,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        11: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: 0,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        12: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: 0,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        13: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: 0,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        14: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: 0,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        15: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: 0,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        2: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: 0,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        3: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: 0,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        4: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: 0,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        5: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: 0,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        6: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: 0,
          7: Infinity,
          8: Infinity,
          9: Infinity
        },
        7: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: 0,
          8: Infinity,
          9: Infinity
        },
        8: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: 0,
          9: Infinity
        },
        9: {
          0: Infinity,
          1: Infinity,
          10: Infinity,
          11: Infinity,
          12: Infinity,
          13: Infinity,
          14: Infinity,
          15: Infinity,
          2: Infinity,
          3: Infinity,
          4: Infinity,
          5: Infinity,
          6: Infinity,
          7: Infinity,
          8: Infinity,
          9: 0
        }
      }
    }
  ];

  testCases.forEach(({ name, input, expected }) => {
    it(name, () => {
      const actual = floydWarshall(input);
      expect(actual).toStrictEqual(expected);
    });
  });
});
