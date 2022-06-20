import { onMounted } from "vue";
import { timeout } from "~/utils/analytics";

export function useMouseDots({ dotCount, dotSize, color }) {
  onMounted(() => {
    const getStyle = ({ x, y, speed }) => `
    width: ${dotSize}px;
    height: ${dotSize}px;
    border-radius: 50%;
    background: ${color};
    will-change: transform;
    position: fixed;
    top: 0;
    left: 0;
    opacity: ${1 - speed};
    transition: ${speed}s transform, 0.3s opacity;
    transform: translate(${x}px, ${y}px);
  `;
    const dots = new Array(dotCount).fill(0).map(() => {
      const el = document.createElement('div');
      el.setAttribute('style', getStyle({
        x: 0,
        y: 0,
        speed: Math.random(),
      }));
      document.body.append(el);
      return el;
    });

    let lastMouseMove = new Date();
    document.body.addEventListener('mousemove', (event) => {
      dots.forEach(async (dotEl) => {
        lastMouseMove = new Date();
        timeout(20 * Math.random());
        requestAnimationFrame(() => {
          dotEl.setAttribute('style', getStyle({
            x: event.clientX,
            y: event.clientY,
            speed: Math.random(),
          }));
          dotEl.dataset.x = String(event.clientX);
          dotEl.dataset.y = String(event.clientY);
        });
      });
    });

    setInterval(() => {
      if (lastMouseMove.getTime() - (new Date()).getTime() < -100) {
        dots.forEach(async (dotEl) => {
          const x = Number(dotEl.dataset.x);
          const y = Number(dotEl.dataset.y);
          dotEl.setAttribute('style', getStyle({
            x: x + 10 * Math.random() - 10 * Math.random(),
            y: y + 10 * Math.random() - 10 * Math.random(),
            speed: Math.random()
          }));
        });
      }
    }, 20);
  });
}
