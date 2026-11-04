import {
  ArrowRightIcon,
  BookOpenIcon,
  Code2Icon,
  GitBranchIcon,
  TerminalIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { createMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata("/");

const installCommand =
  "git clone https://github.com/devinaacs/next-starter-kit.git my-app && cd my-app && cp .env.example .env.local && npm install";

export default function Home() {
  return (
    <div className="bg-brand-bg text-brand-fg grow overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center justify-center">
        <div className="hero-frame border-brand-accent/70 bg-brand-surface shadow-brand-shadow relative w-full overflow-hidden border shadow-2xl">
          <div className="hero-grid absolute -inset-11 bg-[linear-gradient(var(--brand-grid)_1px,transparent_1px),linear-gradient(90deg,var(--brand-grid)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--brand-scrim-from),var(--brand-scrim-to))]" />

          <span className="hero-corner border-brand-accent absolute top-0 left-0 h-16 w-16 border-t-2 border-l-2" />
          <span className="hero-corner border-brand-accent absolute top-0 right-0 h-16 w-16 border-t-2 border-r-2" />
          <span className="hero-corner border-brand-accent absolute bottom-0 left-0 h-16 w-16 border-b-2 border-l-2" />
          <span className="hero-corner border-brand-accent absolute right-0 bottom-0 h-16 w-16 border-r-2 border-b-2" />

          <div className="relative mx-auto flex min-h-[560px] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-16">
            <div className="hero-fade-up border-brand-accent/30 text-brand-accent bg-brand-panel/35 mb-8 inline-flex items-center gap-2 border px-5 py-3 text-xs font-bold tracking-[0.28em] uppercase">
              <Code2Icon className="size-4" />
              Open source
            </div>

            <div className="hero-fade-up hero-delay-100 space-y-5">
              <p className="text-brand-accent/80 text-xs font-semibold tracking-[0.24em] uppercase sm:text-sm">
                {siteConfig.name}
              </p>
              <h1 className="mx-auto max-w-6xl font-serif text-[3.5rem] leading-[0.94] font-black tracking-normal text-balance sm:text-[4.75rem] lg:text-[5.25rem] xl:text-[5.625rem]">
                Start building today
              </h1>
              <p className="text-brand-muted mx-auto max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
                Clone the repository, install dependencies, and start shipping.
                It&apos;s that simple. No configuration, no hassle.
              </p>
            </div>

            <div className="hero-fade-up hero-delay-200 mt-8 flex w-full max-w-xl flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-on-accent h-14 rounded-none px-8 text-base font-bold transition-transform hover:-translate-y-0.5"
              >
                <a
                  href={siteConfig.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitBranchIcon className="size-5" />
                  View on GitHub
                </a>
              </Button>
              <Button
                asChild
                className="border-brand-fg/25 text-brand-fg hover:bg-brand-fg/10 hover:text-brand-fg bg-brand-panel/20 h-14 rounded-none px-8 text-base font-bold transition-transform hover:-translate-y-0.5"
                variant="outline"
              >
                <a
                  href={siteConfig.links.docs}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BookOpenIcon className="size-5" />
                  Documentation
                  <ArrowRightIcon className="size-5" />
                </a>
              </Button>
            </div>

            <div className="hero-fade-up hero-delay-300 bg-brand-fg/15 mt-12 h-px w-full max-w-4xl" />

            <div className="hero-fade-up hero-delay-400 border-brand-accent/25 bg-brand-panel/45 shadow-brand-shadow/40 mt-8 flex w-full max-w-4xl items-start gap-4 border px-4 py-4 text-left shadow-xl sm:px-5">
              <TerminalIcon className="text-brand-accent mt-0.5 size-5 shrink-0" />
              <code className="text-brand-accent min-w-0 font-mono text-xs leading-6 [overflow-wrap:anywhere] whitespace-normal select-text sm:text-sm lg:text-base">
                {installCommand}
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
