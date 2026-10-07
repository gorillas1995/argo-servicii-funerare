import Image from "next/image";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  /** Header mark is compact; footer mark is slightly larger. */
  size?: "header" | "footer";
  /** Eager-load in the sticky header for LCP. */
  priority?: boolean;
  className?: string;
};

/** Size tokens — match the old circle-A visual weight. */
const sizeClass = {
  header: "h-14 w-14 md:h-16 md:w-16",
  footer: "h-12 w-12 md:h-14 md:w-14",
} as const;

/**
 * Brand mark from /logo-dark.png — gold/grey original processed to navy
 * with a transparent background for contrast on light header/footer.
 * Decorative when paired with a text wordmark in the parent link.
 */
export function SiteLogo({
  size = "header",
  priority = false,
  className,
}: SiteLogoProps) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0",
        sizeClass[size],
        className,
      )}
      aria-hidden
    >
      <Image
        src="/logo-dark.png"
        alt=""
        width={2000}
        height={2000}
        priority={priority}
        sizes={size === "header" ? "48px" : "56px"}
        className="size-full object-contain"
      />
    </span>
  );
}
