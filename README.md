# Supris Basnet — Portfolio

Personal portfolio site for my work across software, AI, systems, and engineering projects.

The site is intentionally fairly simple: editorial typography, a lot of whitespace, small interactions, and project work that stays at the centre of the page rather than looking like a template.

## What’s on the site

- **About** — a quick overview of what I’m studying and building.
- **My Path** — education, international volunteering, and the experiences that led me to HKUST.
- **Recent Builds** — current projects, with links to the GitHub repositories.
- **Toolkit** — languages, development tools, web technologies, and data/AI work.
- **Achievements** — scholarships, academic recognition, and other milestones.
- **Contact** — email, GitHub, LinkedIn, and a simple contact form.

## Built with

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide React

The animations are handled with CSS and React rather than relying on a large animation library. The scrolling path section is designed around the scroll position so the timeline builds as you move through it.

## Run locally

Clone the repository, install the dependencies, and start the Vite development server:

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

Type-checking and linting are also available:

```bash
npm run typecheck
npm run lint
```

## Updating the content

Most personal details and external links live in:

```text
src/data/portfolio.ts
```

That file is where I keep things such as:

- GitHub and LinkedIn URLs
- project repository URLs
- achievement document links

Other content is kept close to the section where it appears:

```text
src/components/
├── Hero.tsx
├── About.tsx
├── Path.tsx
├── Work.tsx
├── Toolkit.tsx
├── Achievements.tsx
└── Contact.tsx
```

### Project screenshots

Project images live in:

```text
public/projects/
```

### Certificates and documents

Local certificates can be placed in:

```text
public/certificates/
```

External document links can be added in `src/data/portfolio.ts` without exposing the actual file in the repository.

## Notes

This is a personal site, so the content will change as I build more projects, finish coursework, and add new experience. The goal is to keep the code straightforward enough that I can continue maintaining it myself.

## Links

- GitHub: https://github.com
- LinkedIn: https://linkedin.com
