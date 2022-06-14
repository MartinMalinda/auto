export const getCurves = () => Array.from(document.querySelectorAll('.curve')) as SVGGeometryElement[];

function getDistance(x1: number, y1: number, x2: number, y2: number) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}

const findNearest = (x: number, y: number, points: DOMPoint[]) => {
  let point: DOMPoint | undefined;
  let distance = Infinity;
  points.forEach(_point => {
    const pointDistance = getDistance(x, y, _point.x, _point.y);
    if (pointDistance < distance) {
      distance = pointDistance;
      point = _point;
    }
  });

  return point;
};

export function createDot({ r, color }: { r: number, color: string }) {
  const dot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  dot.classList.add('animated');
  dot.setAttribute('cy', '0');
  dot.setAttribute('cx', '0');
  dot.setAttribute('r', String(r));
  dot.setAttribute('style', `fill: ${color}`);
  document.querySelector('.schema-svg')?.append(dot);
  setTimeout(() => dot.classList.remove('animated'), 1000);
  return dot;
}

export function getSortedDOMPoints(curve: SVGGeometryElement) {
  let totalLength = curve.getTotalLength();

  const points = [] as DOMPoint[];
  for (let i = 0; i <= totalLength; i++) {
    points.push(curve.getPointAtLength(i));
  }

  let sortedPoints = points.sort((a, b) => {
    if (a.x === b.x) {
      return a.y - b.y;
    }

    return a.x - b.x;
  });

  let remainingPoints = [...sortedPoints.reverse()];
  const sortedPoints2 = [] as DOMPoint[];

  let point = remainingPoints.shift() as DOMPoint;
  while (remainingPoints.length) {
    const nearestPoint = findNearest(point.x, point.y, remainingPoints);
    if (nearestPoint) {
      sortedPoints2.push(nearestPoint);
      remainingPoints = remainingPoints.filter(item => item !== nearestPoint);
      point = nearestPoint;
    }
  }

  return sortedPoints2;
}
