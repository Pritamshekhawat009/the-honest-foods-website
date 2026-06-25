# The Honest Foods — Website

A premium, responsive marketing website for **The Honest Foods**, a multi-brand cloud
kitchen company, built with **React + TypeScript + Vite + Tailwind CSS**.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** for build tooling and dev server
- **React Router v6** for client-side routing
- **Tailwind CSS** for styling, themed with the brand's design tokens
- **Fraunces** (display serif) + **Inter** (body) + **JetBrains Mono** (labels) via Google Fonts

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
npm run preview
```

The production build is emitted to `dist/`.

## Project Structure

```
src/
  assets/logos/        Real brand logo files (provided by the client)
  components/          Reusable UI building blocks (Header, Footer, BrandCard, etc.)
  data/                Typed content: brands, blog posts, why-choose-us, franchise, company info
  pages/               One file per route (Home, About, Brands, Order, Franchise, Blogs, Contact)
  pages/legal/         Privacy, Terms, Refund, Shipping, Cookie, Accessibility pages
  types/                Shared TypeScript interfaces
  index.css            Tailwind entry + global styles/tokens
  App.tsx              Route definitions
  main.tsx             App entry point
```

## Content Updates

- **Brand info** (menus, taglines, logos, order links): `src/data/brands.ts`
- **Blog posts**: `src/data/blogs.ts`
- **Why Choose Us items**: `src/data/why.ts`
- **Franchise benefits**: `src/data/franchise.ts`
- **Company contact info / address / map link**: `src/data/company.ts`

## Known placeholders to wire up before launch

- `swiggyUrl` / `zomatoUrl` in `src/data/brands.ts` are currently `#` — replace with each
  brand's live storefront link once available.
- The Franchise and Contact forms (`src/pages/Franchise.tsx`, `src/pages/Contact.tsx`)
  currently log submissions to the console — connect `handleSubmit` to your CRM, email
  service, or backend API endpoint.
- Social links (`src/data/company.ts`) are placeholders (`#`).

## Design Tokens

Defined in `tailwind.config.js`:

| Token        | Hex       |
|--------------|-----------|
| green        | #1F4D3A   |
| green-deep   | #163828   |
| orange       | #E67E22   |
| orange-deep  | #C9690F   |
| cream        | #F8F6F2   |
| charcoal     | #2B2B2B   |
