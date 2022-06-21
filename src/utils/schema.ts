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

export function createDot({ r, color, svgEl }: { r: number, color: string, svgEl: HTMLElement }) {
  const dot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  dot.classList.add('animated');
  dot.classList.add('dot');
  dot.setAttribute('cy', '0');
  dot.setAttribute('cx', '0');
  dot.setAttribute('r', String(r));
  dot.setAttribute('style', `fill: ${color}`);
  svgEl.append(dot);
  setTimeout(() => dot.classList.remove('animated'), 1000);
  return dot;
}

export function getSortedDOMPoints(curve: SVGGeometryElement) {
  let totalLength = curve.getTotalLength();

  const points = [] as DOMPoint[];
  for (let i = 0; i <= totalLength; i = i + 1) {
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

interface Params {
  pointsMap: Map<SVGGeometryElement, DOMPoint[]>,
  svgEl: HTMLElement,
  onFinish?: (dot: SVGCircleElement) => void,
  onMove?: (point: DOMPoint, points: DOMPoint[]) => void,
  speed?: number
  once?: boolean
};
export const addDotToCurve = (curve: SVGGeometryElement, { pointsMap, svgEl, onFinish, onMove, speed, once }: Params) => {
  const points = pointsMap.get(curve) || getSortedDOMPoints(curve);
  pointsMap.set(curve, points);
  const dot = createDot({ r: 5, color: '#2EB57C', svgEl });
  let index = 0;
  let direction = 1;
  const run = () => {
    requestAnimationFrame(() => {
      console.log({ index });
      const firstPoint = points[index];
      if (firstPoint) {
        for (let i = 0; i < (speed || 1); i++) {
          const point = points[index + i];
          console.log({ point, i });
          if (point) {
            dot.setAttribute("transform", `translate(${point.x}, ${point.y})`);
            onMove && onMove(point, points);
          }
        }

        index = index + (direction * (speed || 1));
        run();
      } else {
        direction = direction * -1;
        index = index + (direction * (speed || 1));
        if (!once) {
          setTimeout(run, Math.random() * 500);
        }
      }
    });
  };

  run();
};
