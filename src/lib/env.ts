import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z
    .url()
    .default("http://localhost:3000")
    // Strip trailing slashes so `${url}/path` never produces "//path".
    .transform((url) => url.replace(/\/+$/, "")),
});

export function parseEnv(source: Record<string, string | undefined>) {
  const result = envSchema.safeParse({
    // Treat empty strings (e.g. `FOO=` in .env) as unset.
    NEXT_PUBLIC_APP_URL: source.NEXT_PUBLIC_APP_URL || undefined,
  });

  if (!result.success) {
    throw new Error(
      `Invalid environment variables:\n${z.prettifyError(result.error)}`,
    );
  }

  return result.data;
}

// Each NEXT_PUBLIC_* variable must be referenced literally so Next.js can
// inline it into the client bundle.
export const env = parseEnv({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});
