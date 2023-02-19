const movess = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


function finalPosition(moves) {
  let x = 0;
  let y = 0;
  for (let direction of moves) {
    switch (direction) {
      case "north":
        y += 1;
        break;
      case "south":
        y -= 1;
        break;
      case "west":
        x -= 1;
        break;
      case "east":
        x += 1;
    }
  }
  return [x, y];
}

console.log(finalPosition(movess));