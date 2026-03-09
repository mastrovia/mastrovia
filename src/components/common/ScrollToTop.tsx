"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Scroll to top instantly on pathname or searchParams change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    } as ScrollToOptions);
  }, [pathname, searchParams]);

  return null;
}
