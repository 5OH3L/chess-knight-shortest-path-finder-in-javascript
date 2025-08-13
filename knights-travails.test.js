const assert = require('assert');
const { knightMoves } = require('./knights-travails.js');

function runTests() {
  // Error handling
  assert.throws(
    () => knightMoves(null, [0, 0]),
    /Initial postion required!/
  );
  assert.throws(
    () => knightMoves([0, 0], null),
    /Target postion required!/
  );

  // Same position
  assert.deepStrictEqual(knightMoves([0, 0], [0, 0]), [[0, 0]]);

  // Direct 1-move
  let result = knightMoves([0, 0], [1, 2]);
  assert.strictEqual(result.length, 2);
  assert.deepStrictEqual(result[0], [0, 0]);
  assert.deepStrictEqual(result[1], [1, 2]);

  // Known shortest path
  result = knightMoves([0, 0], [3, 3]);
  assert.strictEqual(result.length, 3);
  assert.deepStrictEqual(result[0], [0, 0]);
  assert.deepStrictEqual(result[result.length - 1], [3, 3]);

  // Unreachable position (off board)
  result = knightMoves([0, 0], [8, 8]);
  assert.strictEqual(result, null);

  console.log('✅ All tests passed!');
}

runTests();