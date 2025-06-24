# God-Tier Turborepo Template

This template captures 2+ years of lessons-learned from production turborepo projects and includes all the functionality needed for modern, typescript, next-js development.

> [!IMPORTANT]
> This template is under active development & is still version 0.0.0

## What's in the box

### Claude Code

includes [claude.md](./claude.md) explaining the repo's organization and includes a claude code github action ([installed per here](https://github.com/anthropics/claude-code-action?tab=readme-ov-file#manual-setup-direct-api))

### Thoughtful code patterns

#### `packages/core`

We have strong opinions on project organization. ALL core application logic should be placed in `packages/core` where it can be subsequently imported into `apps/web`, `apps/docs`, `packages/scripts`, `packages/ui`, etc. as needed. This means every other app or packages should simply be the environment specific implementation of logic.

For instance, let's say you have an api route in `apps/web` that returns a list of users. The api route should simply contain the necessary nextjs logic for maintaining the route. The actual querying of the database, the parsing & formatting of the resulting users, etc. should all be contained in `packages/core`. This gives multiple advantages:

1. Separation of concerns. Your next app has next logic. Your core package has business (core) logic.
2. All core logic in packages/core can be imported as needed into any other apps or packages that need it.
3. It is trivial to write isolated, functional tests for your core logic, completely separate from their implementations in nextjs, express or any other environment

#### `packages/scripts`

A simple package to run ad-hoc scripts

### VS Code

Sensible [vs code settings](.vscode/settings.json) that enable automatic formatting on save if you have [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions installed

### Husky & Lint-Staged

### ESLint & Prettier

Good, suitable defaults

### Dependabot

Keep your package versions with [default groups](.github/workflows/dependabot.yml) for packages like "turbo" and "@turbo/\*"

### Vitest

### Tailwind + Shadcn

Shadcn installed per [here](https://ui.shadcn.com/docs/installation/manual)

**IMPORTANT**: we still use Tailwind 3, as Tailwind 4 still has a few unfortunate issues with [@apply](https://github.com/tailwindlabs/tailwindcss/discussions/16429) and [no safelist](https://github.com/tailwindlabs/tailwindcss/discussions/15291)
