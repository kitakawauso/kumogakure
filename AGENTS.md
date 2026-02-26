# AGENTS.md

## Cursor Cloud specific instructions

### Overview

kumogakure is a Node.js (v22+) HTTP server project using ES modules. It uses Node's built-in test runner and ESLint for linting.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Lint | `npm run lint` |
| Test | `npm test` |
| Dev server | `npm run dev` (uses `--watch` for auto-reload) |
| Start server | `npm start` |

### Notes

- The project uses ES modules (`"type": "module"` in `package.json`). All source uses `import`/`export`.
- Testing uses Node's built-in test runner (`node --test`); no external test framework needed.
- The dev server runs on port 3000 by default (configurable via `PORT` env var).
- `src/index.js` guards its server startup with an `import.meta.url` check so the module can be imported in tests without auto-starting the server.
- ESLint uses flat config (`eslint.config.js`) with `@eslint/js` recommended rules.
