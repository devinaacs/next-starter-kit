"use client";

import { MenuIcon } from "lucide-react";

import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { NavItem } from "@/types/nav";

export function MobileNav({ items }: { items: readonly NavItem[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open menu"
          className="sm:hidden"
          size="icon"
          variant="ghost"
        >
          <MenuIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation links
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {items.map((item) => (
            <SheetClose asChild key={item.href}>
              <NavLink
                className="hover:bg-muted rounded-md px-3 py-2 text-base font-medium"
                external={item.external}
                href={item.href}
              >
                {item.title}
              </NavLink>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
