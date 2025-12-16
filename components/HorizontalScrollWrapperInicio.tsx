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

  /** Obtiene la posición X real del slide */
  const getSlidePosition = (index: number) => {
    const el = containerRef.current;
    if (!el) return 0;

    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return 0;

    return child.offsetLeft; // posición absoluta dentro del contenedor
  };

  useImperativeHandle(ref, () => ({
    scrollToIndex: (index: number) => {
      const container = containerRef.current;
      if (!container) return;

      const position = getSlidePosition(index);
      
      container.scrollTo({
        left: position,
        behavior: "smooth",
      });
    },
    getScrollableElement: () => containerRef.current,
  }));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    /** ======= SCROLL CON RUEDA (mouse) ======= */
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY; // desplazamos horizontal con vertical
      }
    };

    /** ======= TOUCH PARA MÓVIL ======= */
    let startX = 0;
    let startY = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;

      const deltaX = x - startX;
      const deltaY = y - startY;

      // Control: si el movimiento vertical domina, convertimos vertical → horizontal
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        e.preventDefault();
        el.scrollLeft += -deltaY;
        startY = y;
      }
    };

    /** ======= EVENTOS ======= */
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
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
