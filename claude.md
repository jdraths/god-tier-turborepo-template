- This codebase is setup as a turbo monorepo. Here is the context to the projects/directory structure
  - apps/web - nextjs
  - apps/docs - static nextjs
  - packages/core - core business logic. **This is very important**. ALL business logic should be placed in packages/core. For instance, if there is an api route in apps/web all logic, aside from the core nextjs api route facilitation, should be contained in packages/core & imported into the api route. This enables the logic to be shared in packages/script, and other external locations, such as future express apis, etc
  - packages/database - our prisma schema/client
  - packages/ui - UI components
  - packages/scripts - vite-node to easily run packages/core logic as one-off scripts

- we use shadcn for UI components

in packages/scripts & packages/ui we have turbo generators for creating new components/scripts... use them.

ignore typescript warnings. DO NOT try to fix them.

## gstack (recommended)

This project uses [gstack](https://github.com/garrytan/gstack) for AI-assisted workflows.
Install it for the best experience:

```bash
git clone --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && ./setup --team
```

Skills like /qa, /ship, /review, /investigate, and /browse become available after install.
Use /browse for all web browsing. Use ~/.claude/skills/gstack/... for gstack file paths.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:

- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
- Author a backlog-ready spec/issue → invoke /spec
