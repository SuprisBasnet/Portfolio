# Certificates / Achievement documents

Put your PDF files for the Achievements section in this folder.

Suggested filenames:
- principals-honour-list-2025.pdf
- zubin-foundation-scholarship-2025.pdf
- outstanding-performance-scholarship-2024-25.pdf
- principals-honour-list-2024.pdf
- associate-degree-transcript.pdf

Then add the matching path inside `src/data/portfolio.ts`, for example:

```ts
export const ACHIEVEMENT_DOCUMENTS: Record<string, string> = {
  'principal-2025': '/certificates/principals-honour-list-2025.pdf',
};
```
