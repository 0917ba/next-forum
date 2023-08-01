import CloseModal from "./CloseModal";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-10 bg-zinc-900/20">
      <div className="mx-auto flex h-full max-w-lg items-center">
        <div className="relative h-fit w-full rounded-lg bg-white px-2 py-20">
          <div className="absolute right-4 top-4">
            <CloseModal />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
