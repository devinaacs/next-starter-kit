import { describe, expect, it } from "vitest";

import { createMetadata, metadata } from "@/config/metadata";

describe("createMetadata", () => {
  it("sets the canonical and Open Graph URL for the route", () => {
    const result = createMetadata("/about");

    expect(result.alternates?.canonical).toBe("/about");
    expect(result.openGraph?.url).toBe("/about");
  });

  it("keeps social titles in sync with the page title", () => {
    const result = createMetadata("/about", { title: "About" });

    expect(result.title).toBe("About");
    expect(result.openGraph?.title).toBe("About");
    expect(result.twitter?.title).toBe("About");
  });

  it("preserves default images and lets callers override Open Graph", () => {
    const result = createMetadata("/", { openGraph: { siteName: "Custom" } });

    expect(result.openGraph).toMatchObject({ siteName: "Custom" });
    expect(result.openGraph?.images).toEqual(metadata.openGraph?.images);
  });

  it("does not leak a canonical into the layout metadata", () => {
    expect(metadata.alternates).toBeUndefined();
  });
});
