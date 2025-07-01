"use client";

export default function PageWrapperInicio({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[80vw] h-screen flex items-center justify-center flex-col">
      {children}
    </div>
  );
}
