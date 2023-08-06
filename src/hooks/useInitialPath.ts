import { useSearchParams, usePathname } from "next/navigation";

export default function useInitialPath() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  let prev = searchParams?.get("prev");
  if (!prev) {
    // pathname can be null if router is not ready
    prev = pathname as string;
  }

  return prev;
}
