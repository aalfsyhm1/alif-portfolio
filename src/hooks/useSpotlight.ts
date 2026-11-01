import { useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';

/**
 * Makes a soft light follow the mouse inside an element.
 *
 * How it works: on every mouse move we write the pointer position into two
 * CSS custom properties (--lx and --ly) on the element. A CSS radial-gradient
 * reads those variables, so the browser repaints the light without React
 * re-rendering anything. requestAnimationFrame limits updates to one per frame.
 *
 * Reuse it on any element: spread the returned props and give a child a
 * background such as `radial-gradient(600px circle at var(--lx) var(--ly), ...)`.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--lx', `${clientX - r.left}px`);
      el.style.setProperty('--ly', `${clientY - r.top}px`);
    });
  };

  // Moving the mouse out resets the light to its resting position (set in CSS).
  const onMouseLeave = () => {
    cancelAnimationFrame(frame.current);
    ref.current?.style.removeProperty('--lx');
    ref.current?.style.removeProperty('--ly');
  };

  return { ref, onMouseMove, onMouseLeave };
}
