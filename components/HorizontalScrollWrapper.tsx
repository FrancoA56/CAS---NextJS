"use client";

import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface HorizontalScrollWrapperRef {
  scrollToIndex: (index: number) => void;
  getScrollableElement: () => HTMLDivElement | null;
}

const HorizontalScrollWrapper = forwardRef<
  HorizontalScrollWrapperRef,
  { children: React.ReactNode }
>(({ children }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);

  /** Obtiene el ancho real de cada slide */
  const getSlideWidth = () => {
    const el = containerRef.current;
    if (!el) return window.innerWidth;
    return el.children[0]?.clientWidth || window.innerWidth;
  };

  useImperativeHandle(ref, () => ({
    scrollToIndex: (index: number) => {
      const container = containerRef.current;
      if (!container) return;

      currentIndexRef.current = index;
      const slideWidth = getSlideWidth();

      container.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    },
    getScrollableElement: () => containerRef.current,
  }));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isThrottled = false;
    const childrenCount = el.children.length;

    /** ======= SCROLL CON RUEDA ======= */
    const onWheel = (e: WheelEvent) => {
      if (isThrottled) return;
      if (Math.abs(e.deltaY) < 10) return; // Ignorar micro desplazamientos

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;

      currentIndexRef.current = Math.min(
        Math.max(0, currentIndexRef.current + direction),
        childrenCount - 1
      );

      const slideWidth = getSlideWidth();

      el.scrollTo({
        left: currentIndexRef.current * slideWidth,
        behavior: "smooth",
      });

      isThrottled = true;
      setTimeout(() => (isThrottled = false), 650);
    };

    /** ======= TOUCH PARA MÓVIL ======= */
    let startX = 0;
    let isScrolling = false;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isScrolling = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isScrolling) return;
      e.preventDefault();
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isScrolling) return;
      isScrolling = false;

      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      const slideWidth = getSlideWidth();

      if (Math.abs(diff) > 50) {
        const direction = diff > 0 ? 1 : -1;

        currentIndexRef.current = Math.min(
          Math.max(0, currentIndexRef.current + direction),
          childrenCount - 1
        );
      }

      el.scrollTo({
        left: currentIndexRef.current * slideWidth,
        behavior: "smooth",
      });
    };

    /** ======= EVENT LISTENERS ======= */
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-screen h-[100dvh] safe-area overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-none touch-pan-x"
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="w-screen h-[100dvh] safe-area flex-shrink-0 snap-start"
        >
          {child}
        </div>
      ))}
    </div>
  );
});

export default HorizontalScrollWrapper;
