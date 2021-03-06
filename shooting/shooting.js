function pythagoras(a, b) {
  return Math.sqrt(a * a + b * b);
}

function calcDistance(x1, y1, x2, y2) {
    let deltaX = x1 - x2;
    let deltaY = y1 - y2;
    return pythagoras(deltaX, deltaY);
}

export function checkEnemyinRange(tower, enemies) {
  let target = enemies.findIndex((enemy) => {
    let {x: x1, y: y1} = tower;
    let {x: x2, y: y2} = enemy;
    let distance = calcDistance(x1, y1, x2, y2);
    if (enemy.speed > 0) {
      return distance < tower.range;
    } else {
      return false;
    }
  });
  return target;
}

export function checkEnemyShootingTower(tower, enemies) {
  let oldTarget = tower.target;
  let newTarget = checkEnemyinRange(tower, enemies);

  if (oldTarget === newTarget) {
    return oldTarget;
  } else {
    return -1;
  }

}
