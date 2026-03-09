"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      // Check if there's a hash in the current URL
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // If hash exists and element is found, scroll to it instantly
          element.scrollIntoView({ behavior: "auto" });
          return;
        }
      }

      // Default: Scroll to top instantly
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      } as ScrollToOptions);
    };

    // Use a small delay to ensure the DOM has updated (especially for dynamic content)
    const timeoutId = setTimeout(handleScroll, 0);
    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null;
}
