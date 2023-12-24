import Spinner from "@/components/loading/Spinner";

export default function Loading() {
  return (
    <div
      className={
        "fixed inset-0 z-20 flex h-full w-full items-center justify-center"
      }
    >
      <Spinner />
    </div>
  );
}
