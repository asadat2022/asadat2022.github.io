# portfolio

Personal portfolio site for Muhammad Asad Tanveer — full-stack developer (Laravel, React, Node.js). Built with React + Vite, styled as a terminal/changelog-themed single page: hero with an animated terminal intro, career changelog, stack overview, and selected work.

## Stack

- React 19 + Vite
- [lucide-react](https://lucide.dev/) icons
- Plain inline styles (no CSS framework)

## Running locally

The project runs in Docker, so no local Node.js install is required:

```bash
docker compose up
```

Then open [http://localhost:5173](http://localhost:5173).

Stop it with:

```bash
docker compose down
```

### Without Docker

If you have Node.js 20+ installed:

```bash
npm install
npm run dev
```

## Project structure

- `src/Portfolio.jsx` — the entire page (single component)
- `src/main.jsx` — React entry point
- `content-reference.md` — source-of-truth copy for all written content on the page

## TODO before publishing

- Fill in real contact links (email, LinkedIn, GitHub) in `src/Portfolio.jsx` — currently placeholders
- Organize personal GitHub repos and link them from the "Selected Work" section
