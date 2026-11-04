import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { useIsMobile } from "@/hooks/use-mobile";

function mockMatchMedia(initial: boolean) {
  let matches = initial;
  const listeners = new Set<() => void>();

  vi.stubGlobal("matchMedia", () => ({
    get matches() {
      return matches;
    },
    addEventListener: (_: string, fn: () => void) => listeners.add(fn),
    removeEventListener: (_: string, fn: () => void) => listeners.delete(fn),
  }));

  return (next: boolean) => {
    matches = next;
    listeners.forEach((fn) => fn());
  };
}

describe("useIsMobile", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("reflects the current viewport and reacts to changes", () => {
    const setMatches = mockMatchMedia(true);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);

    act(() => setMatches(false));
    expect(result.current).toBe(false);
  });
});
