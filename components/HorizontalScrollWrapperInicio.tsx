"use client";
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface HorizontalScrollWrapperRefInicio {
  scrollToIndex: (index: number) => void;
  getScrollableElement: () => HTMLDivElement | null;
}

const HorizontalScrollWrapperInicio = forwardRef<
  HorizontalScrollWrapperRefInicio,
  { children: React.ReactNode }
>(({ children }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollToIndex: (index: number) => {
      const container = containerRef.current;
      if (container && container.children[index]) {
        const child = container.children[index] as HTMLElement;
        child.scrollIntoView({ behavior: "smooth", inline: "start" });
      }
    },
    getScrollableElement: () => containerRef.current,
  }));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wheel para desktop
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    // Variables para el touch
    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      const deltaX = touchX - touchStartX;
      const deltaY = touchY - touchStartY;

      // Solo si el movimiento vertical es más fuerte que el horizontal
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        e.preventDefault(); // Evita scroll vertical
        container.scrollLeft += deltaY; // Aplica el movimiento vertical como scroll horizontal
        touchStartY = touchY; // Actualiza el punto de inicio para movimientos continuos
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: false });
    container.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-horizontal-scroll
      className="flex h-[100dvh] safe-area overflow-x-scroll scrollbar-hide touch-pan-x overscroll-contain"
    >
      {React.Children.map(children, (child, index) => (
        <div key={index} className="w-auto h-full flex-shrink-0">
          {child}
        </div>
      ))}
    </div>
  );
});

export default HorizontalScrollWrapperInicio;
