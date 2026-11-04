import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <MobileNav items={siteConfig.mainNav} />
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <span
              aria-hidden
              className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md text-sm"
            >
              {siteConfig.name.charAt(0)}
            </span>
            <span>{siteConfig.name}</span>
          </Link>
        </div>
        <nav
          aria-label="Main"
          className="text-muted-foreground hidden items-center gap-6 text-sm sm:flex"
        >
          {siteConfig.mainNav.map((item) => (
            <NavLink
              className="hover:text-foreground transition-colors"
              external={item.external}
              href={item.href}
              key={item.href}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="icon" variant="ghost">
            <a
              aria-label="Open repository"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLinkIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
