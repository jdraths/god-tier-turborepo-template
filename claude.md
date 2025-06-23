- This codebase is setup as a turbo monorepo. Here is the context to the projects/directory structure

  - apps/web - nextjs
  - apps/docs - static nextjs
  - packages/core - core business logic. **This is very important**. ALL business logic should be placed in packages/core. For instance, if there is an api route in apps/web all logic, aside from the core nextjs api route facilitation, should be contained in packages/core & imported into the api route. This enables the logic to be shared in packages/script, and other external locations, such as future express apis, etc
  - packages/database - our prisma schema/client
  - packages/ui - UI components
  - packages/scripts - vite-node to easily run packages/core logic as one-off scripts

- we use shadcn for UI components

in packages/scripts & packages/ui we have turbo generators for creating new components/scripts... use them.
