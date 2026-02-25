# Temple of Gong

A choose-your-own-adventure text RPG set across the temples and mountains of Southeast Asia. You play as someone searching for their friend Jonah, a cowbell player who vanished while on tour with his aboriginal junkyard band. Collect items, solve puzzles, and try not to die.

Inspired by a childhood spent reading Tintin and Carl Barks' Duck comics — stories where ordinary characters stumble into extraordinary places, get in way over their heads, and somehow improvise their way through.

## Running the project

```bash
npm install
npm run dev
```

This starts a local dev server with hot module replacement.

## Other commands

```bash
npm run build      # Production build to dist/
npm run preview    # Preview the production build locally
npm run check      # Type-check Svelte and TypeScript files
```

## Deploying

```bash
./scripts/deploy.sh
```

Builds the app and syncs it to an S3 bucket. Requires AWS CLI, Terraform, and a configured AWS profile (defaults to `temple-of-gong`). See the script for details.

## Tech stack

- **Svelte 5** with TypeScript — UI and reactive state via runes
- **Vite** — build tooling and dev server
- **Marked** — rendering story content from Markdown files
- **Terraform + S3** — infrastructure and hosting
