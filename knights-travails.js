function getMoves(position) {
  const x = position[0];
  const y = position[1];
  const moves = [
    [x + 2, y - 1],
    [x + 2, y + 1],
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x - 1, y - 2],
    [x + 1, y - 2],
  ];
  let validatedMoves = [];
  for (let move of moves) if (!(move[0] < 0 || move[0] > 7) && !(move[1] < 0 || move[1] > 7)) validatedMoves.push(move);
  return validatedMoves;
}
function Node(position) {
  return {
    position,
    predecessors: [],
  };
}
function formatPath(path) {
  let formattedPath = "";
  let pathIndexes = "";
  for (let i = 0; i < path.length; i++) {
    formattedPath += `  ->  [${path[i]}]`;
    pathIndexes += `  (${i + 1})      `;
  }
  console.log(`The knight made it in \`${path.length}\` moves!\nHere's the path:\n ${pathIndexes} \n${formattedPath.slice(4)}`);
}
function knightMoves(initialPosition, targetPosition) {
  if (!initialPosition) throw new Error("Initial postion required!");
  if (!targetPosition) throw new Error("Target postion required!");

  if (initialPosition[0] === targetPosition[0] && initialPosition[1] === targetPosition[1]) {
    return [initialPosition];
  }

  const seen = new Set();
  const queue = [Node(initialPosition)];
  seen.add(initialPosition[0] + "," + initialPosition[1]);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    let moves = getMoves(currentNode.position);

    for (let move of moves) {
      let moveKey = move[0] + "," + move[1];
      if (move[0] === targetPosition[0] && move[1] === targetPosition[1]) {
        return [...currentNode.predecessors, currentNode.position, move];
      }

      if (!seen.has(moveKey)) {
        seen.add(moveKey);
        let moveNode = Node(move);
        moveNode.predecessors = [...currentNode.predecessors, currentNode.position];
        queue.push(moveNode);
      }
    }
  }
  return null;
}

module.exports = { knightMoves };