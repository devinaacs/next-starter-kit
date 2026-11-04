import { describe, expect, it } from "vitest";

import { parseEnv } from "@/lib/env";

describe("parseEnv", () => {
  it("falls back to localhost when the URL is missing or empty", () => {
    expect(parseEnv({}).NEXT_PUBLIC_APP_URL).toBe("http://localhost:3000");
    expect(parseEnv({ NEXT_PUBLIC_APP_URL: "" }).NEXT_PUBLIC_APP_URL).toBe(
      "http://localhost:3000",
    );
  });

  it("strips trailing slashes", () => {
    expect(
      parseEnv({ NEXT_PUBLIC_APP_URL: "https://example.com//" })
        .NEXT_PUBLIC_APP_URL,
    ).toBe("https://example.com");
  });

  it("throws a readable error for invalid URLs", () => {
    expect(() => parseEnv({ NEXT_PUBLIC_APP_URL: "not-a-url" })).toThrow(
      /Invalid environment variables/,
    );
  });
});
