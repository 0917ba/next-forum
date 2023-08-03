"use client";

export default function CoolButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="h-8 w-fit rounded-md bg-zinc-900 px-2.5 text-sm font-light text-white"
    >
      {children}
    </button>
  );
}
