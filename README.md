# Knight Moves FinderKnight's Travails – Shortest Path Finder

A JavaScript implementation of the **shortest path finder** for a chess knight on an 8×8 board, using **Breadth-First Search (BFS)**.

Given a starting position and a target position, it calculates the shortest possible sequence of moves the knight needs to reach the target.

---

## Features

- Calculates **minimum moves** for a knight between two valid chessboard positions.
- Returns the **exact path** taken.
- Validates positions to stay within board limits.
- Handles **edge cases**:
  - Start and end are the same.
  - Invalid (off-board) positions.
  - Missing arguments.
- Includes a **test suite** with `assert` to verify correctness.

---

## Project Structure

```bash
├── knights-travails.js # Main algorithm
├── test.js # Test cases
└── README.md # Documentation
```

## Usage Example

```javascript
const { knightMoves } = require("./knights-travails.js");

const path = knightMoves([0, 0], [3, 3]);
console.log(path);
// Example output: [ [0,0], [1,2], [3,3] ]
```

## Function Details

`knightMoves(initialPosition, targetPosition)`
- Parameters:
  - `initialPosition` → `[x, y]` starting coordinates (0–7).
  - `targetPosition` → `[x, y]` target coordinates (0–7).

- Returns:
  - `Array` of coordinates showing the shortest path.
  - `null` if the target is unreachable.

- Throws:
  - Error if positions are missing.

## Algorithm
This project uses **Breadth-First Search (BFS)** because:
- BFS always finds the shortest path in an unweighted graph.
- The chessboard is modeled as a graph where:
  - **Nodes** = board positions.
  - **Edges** = valid knight moves.