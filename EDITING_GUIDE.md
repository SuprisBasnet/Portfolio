# Portfolio editing guide

The easiest place to maintain the site is `src/data/portfolio.ts` plus the component files in `src/components/`.

## 1. Add certificate / achievement PDFs

1. Put the PDF inside `public/certificates/`.
2. Open `src/data/portfolio.ts`.
3. Match the achievement id from `Achievements.tsx`.
4. Add the public path.

Example:

```ts
export const ACHIEVEMENT_DOCUMENTS: Record<string, string> = {
  'principal-2025': '/certificates/principals-honour-list-2025.pdf',
  'zubin-2025': '/certificates/zubin-foundation-scholarship-2025.pdf',
};
```

You do NOT put `public` in the URL. A file at `public/certificates/foo.pdf` is opened with `/certificates/foo.pdf`.

When a URL exists, the corresponding row in `Achievements.tsx` automatically becomes a clickable link that opens in a new tab. When no URL exists, it stays as a normal row.

## 2. Change your GitHub and LinkedIn

Open `src/data/portfolio.ts` and replace:

```ts
export const PORTFOLIO = {
  email: 'basnetsupris7@gmail.com',
  github: 'https://github.com/SuprisBasnet',
  linkedin: 'https://www.linkedin.com/in/suprisbasnet/',
};
```

For example:

```ts
export const PORTFOLIO = {
  email: 'basnetsupris7@gmail.com',
  github: 'https://github.com/YOUR-GITHUB-NAME',
  linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-NAME',
};
```

The Contact section uses these values automatically.

## 3. Change the two project GitHub repositories

In the same file:

```ts
export const PROJECT_REPOS = {
  flight: 'https://github.com/SuprisBasnet/flight-delay-prediction',
  healthFocus: 'https://github.com/SuprisBasnet/health-focus',
};
```

Replace the two URLs with the real repository URLs.

`Work.tsx` already reads these values, so you do not need to edit the project cards themselves.

## 4. Add a real project screenshot

The current project visuals are CSS mockups. When you have real screenshots, put them in `public/projects/`.

Example:

```text
public/projects/flight-dashboard.png
public/projects/health-focus.png
```

Then in `Work.tsx`, replace the visual markup for the project with a normal image:

```tsx
<img
  src="/projects/flight-dashboard.png"
  alt="Flight Delay Prediction dashboard"
  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
/>
```

Do the same for Health Focus.

## 5. Add or edit an achievement

In `src/components/Achievements.tsx`, add an item to `ACHIEVEMENTS`:

```ts
{
  id: 'new-award-2026',
  title: 'Your award name',
  detail: 'One clear sentence describing it.',
  date: '2026',
},
```

Then add its PDF URL in `src/data/portfolio.ts` when you have the document:

```ts
export const ACHIEVEMENT_DOCUMENTS: Record<string, string> = {
  'new-award-2026': '/certificates/new-award-2026.pdf',
};
```

## 6. Keep the portfolio easy to maintain

For future edits, use this rule:
- Personal/contact/external URLs → `src/data/portfolio.ts`
- Achievement list → `src/components/Achievements.tsx`
- Project list/repository display → `src/components/Work.tsx` + `src/data/portfolio.ts`
- Journey/timeline content → `src/components/Path.tsx`
- Tools/skills → `src/components/Toolkit.tsx`
- About copy → `src/components/About.tsx`

## 7. Run the site locally

From the project folder:

```bash
npm install
npm run dev
```

Then open the local Vite address shown in the terminal.

Before pushing changes, it is useful to run:

```bash
npm run typecheck
npm run build
```
