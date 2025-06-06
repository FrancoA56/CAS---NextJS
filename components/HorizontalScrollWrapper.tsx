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

const HorizontalScrollWrapper = forwardRef<HorizontalScrollWrapperRef, { children: React.ReactNode }>(
  ({ children }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const currentIndexRef = useRef(0); // ← Usamos useRef para mantener actualizado el índice

    useImperativeHandle(ref, () => ({
      scrollToIndex: (index: number) => {
        const container = containerRef.current;
        if (container) {
          currentIndexRef.current = index; // ← Actualizamos el índice
          container.scrollTo({
            left: index * window.innerWidth,
            behavior: "smooth",
          });
        }
      },
      getScrollableElement: () => containerRef.current,
    }));

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      let isThrottled = false;
      const childrenCount = el.children.length;

      const onWheel = (e: WheelEvent) => {
        if (isThrottled) return;
        if (Math.abs(e.deltaY) < 10) return;

        e.preventDefault();

        const direction = e.deltaY > 0 ? 1 : -1;
        currentIndexRef.current = Math.min(
          Math.max(0, currentIndexRef.current + direction),
          childrenCount - 1
        );

        el.scrollTo({
          left: currentIndexRef.current * window.innerWidth,
          behavior: "smooth",
        });

        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 700);
      };

      el.addEventListener("wheel", onWheel, { passive: false });
      return () => el.removeEventListener("wheel", onWheel);
    }, []);

    return (
      <div
        ref={containerRef}
        className="flex w-screen h-screen overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-screen h-screen flex-shrink-0 snap-start">
            {child}
          </div>
        ))}
      </div>
    );
  }
);


export default HorizontalScrollWrapper;
