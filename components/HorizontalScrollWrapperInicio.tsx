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

const HorizontalScrollWrapperInicio = forwardRef<
  HorizontalScrollWrapperRef,
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

    const onWheel = (e: WheelEvent) => {
      // Evita el scroll vertical y lo convierte en horizontal
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-horizontal-scroll
      className="flex h-screen overflow-x-scroll scrollbar-hide touch-pan-x overscroll-contain"
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
