import { env } from "@/lib/env";
import type { NavItem } from "@/types/nav";

export const siteConfig = {
  name: "Next.js Starter Kit",
  description:
    "A production-minded Next.js boilerplate for landing pages, portfolios, dashboards, backoffices, games, blogs, and product apps.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: "/og",
  author: "Open Source",
  mainNav: [
    {
      title: "Components",
      href: "https://ui.shadcn.com/docs/components",
      external: true,
    },
    { title: "Docs", href: "https://nextjs.org/docs", external: true },
  ] satisfies NavItem[],
  links: {
    docs: "https://nextjs.org/docs",
    github: "https://github.com/devinaacs/next-starter-kit",
    shadcn: "https://ui.shadcn.com/",
  },
};
