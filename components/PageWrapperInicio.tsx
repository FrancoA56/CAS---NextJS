"use client";

export default function PageWrapperInicio({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[100vw] md:w-[80vw] h-[100dvh] safe-area flex items-center justify-center flex-col">
      {children}
    </div>
  );
}
