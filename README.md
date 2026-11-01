# Alif Syahmi — portfolio

A React + TypeScript site built with Vite. Five pages: Home, UGC portfolio, Travel log, and two A4 CVs (general and Lenovo).

## Run it

You need Node 18 or newer.

```bash
npm install      # downloads the dependencies (once)
npm run dev      # starts a local server with live reload, usually http://localhost:5173
npm run build    # type-checks, then writes the finished site to /dist
npm run preview  # serves /dist locally so you can test the real build
```

## Where things live

```
src/
  data/          ← THE CONTENT. Edit these files to change text, projects, photos, CV
    profile.ts     name, email, links (replace the "#" placeholders here)
    experience.ts  the home-page timeline
    projects.ts    project cards
    skills.ts      skill groups
    ugc.ts         UGC work, packages, services
    photos.ts      travel stops (add a line to add a stop)
    cv.ts          both CVs (summary + skills differ by version)
  components/    ← reusable pieces (ProjectCard, PhotoViewer, Hero, ...)
  pages/         ← one file per page (Home, Ugc, Travel, Cv)
  hooks/         ← small reusable behaviours (useSpotlight = the cursor light)
  styles.css     ← all styling; colours are variables at the top
  App.tsx        ← the list of pages (routes)
public/          ← files copied as-is (favicon, and your /photos later)
```

## Common changes

- **Change the accent colour:** edit `--accent`, `--glow`, `--glow-soft` and `--pool` at the top of `src/styles.css`.
  Try `#E4572E` (red-orange), `#8FD9CC` (soft teal) or `#F1EEE8` (plain).
- **Fill the placeholders:** search the project for `[` and `"#"`. Real URLs in `profile.ts` turn the pending text into live links automatically.
- **Add real photos:** put images in `public/photos/`, then add `src: '/photos/istanbul.jpg'` to the frame in `data/photos.ts`
  (the placeholder box is replaced). Project images: change `Placeholder` in `ProjectCard.tsx` to an `<img>`.
- **Add a project:** add an object to the array in `data/projects.ts`. The card appears on the home page.
- **Save a CV as PDF:** open `/#/cv` (or `/#/cv/lenovo`), press "Print / Save as PDF", choose "Save as PDF", paper A4,
  margins "None", and turn **off** "Headers and footers".

## Deploy (all free)

The site uses hash routing (`/#/travel`), so it works on any static host without server settings.

**Vercel or Netlify:** push this folder to a GitHub repo, import the repo, and accept the detected settings
(build command `npm run build`, output folder `dist`).

**GitHub Pages:** push to GitHub, then either upload the contents of `dist/` to a `gh-pages` branch, or use a
GitHub Actions workflow that runs `npm ci && npm run build` and publishes `dist/`. Asset paths are relative (`base: './'`),
so a project URL like `you.github.io/portfolio/` works.

After it is live, put the URL into `[portfolio URL]` in `src/data/profile.ts` (`portfolioLabel`).

## Notes

- Fonts load from Google Fonts (Montserrat, Open Sans, Arimo — all open-licence). To work fully offline, switch to the
  `@fontsource` packages.
- The cursor light is `src/hooks/useSpotlight.ts`; the CSS that draws it is `.spot` in `styles.css`.
- Scroll-in animations are CSS-only and switch off for visitors who prefer reduced motion.
