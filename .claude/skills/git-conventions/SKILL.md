---
name: git-conventions
description: Draft commit messages, branch names, and pull request titles/descriptions for this project using its conventions. Use when the user asks for a commit message, branch name, PR title, or PR description.
---

# Git Conventions

Rules for drafting commit messages, branch names, and PR text. This skill only
**drafts text**. Never run `git add`, `git commit`, `git push`, create or
switch branches, or open a PR unless the user explicitly asks.

## Shared rules

- Inspect the real current changes first (working tree, staged and unstaged
  files, new and deleted files). Do not rely on a pasted diff, a single open
  file, or a short prompt alone.
- The actual changed files are the source of truth for the text.
- If the changes look mixed or unrelated, say so **before** drafting, and
  suggest splitting them into separate commits or branches.
- Allowed types, everywhere (commit, branch, PR title):
  `feat`, `fix`, `docs`, `style`, `chore`, `refactor`, `ci`, `test`, `revert`

### Choosing scope

Scope has two levels, taken from what the change really touches:

- `<area>`: the broad part of the app, e.g. `auth`, `dashboard`, `layout`,
  `config`, `ui`, `seo`, `deps`, `tooling`.
- `<feature>`: the specific feature or module inside that area, e.g. `login`,
  `theme-toggle`, `metadata`, `env`.

Prefer a specific feature scope over a generic one. If the change is mostly
tests for one feature, keep that feature's scope rather than a broad one. If a
change spans several closely related things in one area, pick the dominant
scope and mention the secondary touch in the bullets.

Derive scopes from the project's own folders and features (`src/app`,
`src/components`, `src/config`, `src/lib`, ...). Do not invent scopes that do
not exist in the codebase.

## Commit message

Format:

```text
type(<area> - <feature>): <summary>
- <detail>
- <detail>
```

- Subject: imperative, lowercase, no trailing period, short and specific.
- Always include at least one bullet; use several concrete bullets when the
  change deserves it. Do not default to a subject-only message unless the user
  asks for one.
- Bullets should make the change traceable for a future reader: what changed
  and, when not obvious, why.

Examples:

```text
feat(layout - theme-toggle): add light/dark theme switcher to header
- add ThemeToggle client component using next-themes
- swap sun/moon icons with CSS so server and client markup match
```

```text
fix(config - env): strip trailing slashes from NEXT_PUBLIC_APP_URL
- normalize the parsed URL so sitemap and robots never emit "//path"
- add unit tests for fallback, normalization, and invalid input
```

## Branch name

Format:

```text
type/<area>-<feature>/<summary>
```

- Lowercase only, hyphens only. No spaces or underscores.
- `<summary>` is short, specific, and starts with a verb: `create`, `add`,
  `fix`, `update`, `refactor`, `remove`, `rename`.
- Avoid vague summaries such as `update-something` or `fix-bug`.

Examples:

```text
feat/layout-theme-toggle/add-header-switcher
fix/config-env/strip-trailing-slash-from-app-url
refactor/hooks-use-mobile/use-sync-external-store
chore/tooling-ci/add-concurrency-and-timeout
```

## Pull request

Title uses the commit subject format:

```text
type(<area> - <feature>): <summary>
```

Description format:

```md
## Summary

<1–2 sentences: what changed and why>

## Changes

- ...

## Impact

- ...

## Notes _(optional)_

- risks, edge cases, follow-ups, known limitations
```

Expectations:

- **Summary** explains both what changed and the motivation. Never omit the why.
- **Changes** describes the implementation or behavior changes clearly.
- **Impact** covers neighboring features and routes, shared components or
  config that other code depends on, SEO/metadata or env effects, and
  validation or error-handling behavior, when applicable.
- **Notes** is optional: risks, caveats, follow-ups.
- Keep it short by default; expand only when the change is large, risky, or
  hard to review.
- Add code, config, or command snippets only when they make review faster or
  safer. Plain text is the default.
