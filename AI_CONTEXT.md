# Baithak School Network Project Context

This document is meant to help any AI quickly understand the repository, the product, and the current stage of work.

## What this project is

Baithak School Network is a nonprofit education website for a Pakistan-based school network. The site presents the organization’s mission, story, programs, donation flow, impact content, blogs/stories, and annual report material.

The main message across the site is:
filling education gaps for underserved communities in Pakistan, with a strong donation and storytelling focus.

## Tech Stack

- Next.js 16 app router
- React 19
- TypeScript for the app layer
- JSX components in `components/`
- Global CSS in `app/globals.css`
- Local image assets in `public/images/`
- PDF asset support for the annual report page

## Main routes

- `/` - homepage / marketing landing page
- `/donate` - donation landing page
- `/programs` - overview of education programs
- `/our-story` - organization history and roadmap
- `/blogs-stories` - blogs, stories, news, publications, and reports
- `/annual-report` - embedded annual report PDF with download link
- `/your-support` - support/impact page

## Route structure

Each route is built in the `app/` directory using the Next.js app router.

```text
app/
  layout.tsx
  globals.css
  page.tsx
  annual-report/page.tsx
  blogs-stories/page.tsx
  donate/page.tsx
  our-story/page.tsx
  programs/page.tsx
  your-support/page.tsx
```

## Component structure

Reusable UI sections live in `components/` and are composed into the route pages.

```text
components/
  Navbar.jsx
  Footer.jsx
  BlogsHero.jsx
  BlogsSidebar.jsx
  NewsPublications.jsx
  PreviousReports.jsx
  OurStoryHero.jsx
  FoundersMessage.jsx
  Roadmap.jsx
  ProgramsHero.jsx
  ProgramsCards.jsx
  EducationalPrograms.jsx
  ProgramSection.jsx
  DonationHero.jsx
  DonationImpact.jsx
  DonationSupportCards.jsx
  DonationContribute.jsx
```

### Component purpose by area

- Navigation and site frame: `Navbar.jsx`, `Footer.jsx`
- Homepage sections: mostly composed directly inside `app/page.tsx`
- Donation flow: `DonationHero.jsx`, `DonationImpact.jsx`, `DonationSupportCards.jsx`, `DonationContribute.jsx`
- Programs: `ProgramsHero.jsx`, `ProgramsCards.jsx`, `EducationalPrograms.jsx`, `ProgramSection.jsx`
- Story and reports: `OurStoryHero.jsx`, `FoundersMessage.jsx`, `Roadmap.jsx`, `PreviousReports.jsx`
- Blogs and publications: `BlogsHero.jsx`, `BlogsSidebar.jsx`, `NewsPublications.jsx`

## Layout and styling approach

- `app/layout.tsx` sets the root HTML shell and loads Google Fonts.
- `app/globals.css` defines broad color variables and older shared styles.
- The homepage and several sections use a lot of inline styles directly in JSX.
- Some pages, like the annual report page, also define page-scoped styles inside the component.

## Assets

- Public images live under `public/images/landing_page_imgs/`.
- The annual report page embeds `/Annual-Report-2025.pdf` from `public/`.

## Current stage of the project

This is an active content-first implementation stage, not a finished polish pass.

What looks already in place:

- The main route structure exists.
- The homepage has a full visual landing experience built out.
- The donate, programs, story, blogs/stories, annual report, and support pages all exist.
- Reusable section components are already broken out for the major content areas.

What still looks in progress:

- Styling is still mixed between inline JSX styles, page-scoped styles, and global CSS.
- The codebase appears to be in a refinement phase for consistency and responsiveness.
- Some route/content naming still suggests iterative work rather than a fully normalized information architecture.

## Important files to know first

- [app/page.tsx](app/page.tsx)
- [app/layout.tsx](app/layout.tsx)
- [app/globals.css](app/globals.css)
- [components/Navbar.jsx](components/Navbar.jsx)
- [components/Footer.jsx](components/Footer.jsx)
- [app/donate/page.tsx](app/donate/page.tsx)
- [app/programs/page.tsx](app/programs/page.tsx)
- [app/our-story/page.tsx](app/our-story/page.tsx)
- [app/blogs-stories/page.tsx](app/blogs-stories/page.tsx)
- [app/annual-report/page.tsx](app/annual-report/page.tsx)

## Commands

- `npm run dev` - start local development
- `npm run build` - production build
- `npm run lint` - lint the project

## Notes for future AI work

- Preserve the existing route structure unless the user explicitly asks for a redesign.
- Be careful with the mixed styling approach; edits may need to respect inline styles already in place.
- Use the existing image assets and section components instead of inventing new content when possible.