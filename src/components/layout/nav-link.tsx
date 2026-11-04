import Link from "next/link";

import type { NavItem } from "@/types/nav";

type NavLinkProps = Pick<NavItem, "href" | "external"> &
  Omit<React.ComponentProps<"a">, "href">;

/** Internal links use next/link; external ones open safely in a new tab. */
export function NavLink({ href, external, children, ...props }: NavLinkProps) {
  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
