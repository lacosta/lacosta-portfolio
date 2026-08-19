# LACOSTA Portfolio

Personal portfolio for LACOSTA, a Frontend Developer focused on React, TypeScript and production frontend systems.

The portfolio reflects the kind of frontend work I do in real codebases: building and maintaining React applications, working with reusable components and design systems, integrating APIs, handling complex interfaces, debugging existing behavior and testing changes that matter.

## About the project

This is a Next.js portfolio built with the App Router. The site includes:

- Responsive portfolio sections for selected work, experience and working approach.
- Light and dark themes.
- Local brand and company assets.
- A contact dialog backed by a server-side Resend integration.
- Sass styles organized around BEM-style component classes.
- Vercel-ready production configuration.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Sass
- Next Font
- Lucide React
- Resend
- Vercel Analytics

## Project structure

```text
app/
  api/contact/       Contact API route
  styles/            Sass entrypoint, variables and base styles
  layout.tsx         Root layout and metadata
  page.tsx           Page composition
components/
  about/             Working approach section
  contact/           Contact CTA and dialog
  experience/        Professional experience
  hero/              Homepage hero
  portfolio/         Shared portfolio data
  projects/          Project list and project card
  skills/            Tools and practices
lib/
  contact/           Contact parsing and email service
public/
  companies/         Company logos
  *.png, *.svg       Brand and favicon assets
```

Components are kept close to their responsibility. Data that is shared by multiple portfolio sections lives in `components/portfolio/data.ts`. Styles are loaded from `app/styles/global.scss` and use BEM-style names such as `.work-card__title` and `.experience__item`.

## Getting started

### Requirements

- Node.js 20 or newer
- npm or pnpm
- A Resend API key if you want the contact form to send emails

### Install dependencies

Using pnpm:

```bash
pnpm install
```

Using npm:

```bash
npm install
```

### Configure environment variables

Create `.env.local` in the project root:

```env
RESEND_API_KEY=re_your_key_here
CONTACT_FROM_EMAIL=Website contact <onboarding@resend.dev>
```

Keep `.env.local` private. It is ignored by Git and must never be committed. In production, add the same variables in the Vercel project settings instead of uploading the local file.

`CONTACT_FROM_EMAIL` can use Resend's test sender during development. For production, use a sender address from a domain verified in Resend.

### Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Run the production build locally
```

For a pnpm-based workflow, the equivalent commands are `pnpm dev`, `pnpm build` and `pnpm start`.

## Contact form

The form submits a `POST` request to `/api/contact`.

The Next.js route at `app/api/contact/route.ts` is intentionally named according to the App Router convention. The application logic is kept in `lib/contact/contact-service.ts`, where contact data is parsed and sent through Resend.

The endpoint returns:

- `400` for invalid form data.
- `503` when `RESEND_API_KEY` is not configured.
- `500` when Resend cannot deliver the message.
- `200` after a successful submission.

## Deployment

The project is configured for Vercel:

1. Import the repository into Vercel.
2. Use the default Next.js framework settings.
3. Add `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` under Project Settings → Environment Variables.
4. Deploy from the branch connected to the project.

Vercel uses `pnpm-lock.yaml` during installation. Keep it synchronized with `package.json` when changing dependencies:

```bash
pnpm install --lockfile-only
pnpm install --lockfile-only --frozen-lockfile
```

The second command is a useful local check for the same lockfile constraint used by CI and deployment environments.

## Links

- [GitHub](https://github.com/lacosta)
- [LinkedIn](https://www.linkedin.com/in/lacostadev/)

## License

This is a personal portfolio project. The source code is available for reference, but the personal branding, copy and assets should not be reused as someone else's portfolio.
