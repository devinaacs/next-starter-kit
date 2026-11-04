"use client";

import { useEffect } from "react";

// Replaces the root layout when it throws, so it must render its own <html>.
// Styled with inline CSS because globals.css is not loaded here.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          alignItems: "center",
          display: "flex",
          fontFamily: "system-ui, sans-serif",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <div style={{ maxWidth: 420, padding: 24, textAlign: "center" }}>
          <h1 style={{ fontSize: 24 }}>Something went wrong</h1>
          <p style={{ color: "#666" }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            style={{ cursor: "pointer", fontSize: 16, padding: "8px 16px" }}
            type="button"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
