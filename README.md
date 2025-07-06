This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Website Structure

```
my-website/
├── app/                          # App Router directory (Next.js 13+)
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page route
│   │   └── page.tsx
│   ├── contact/                 # Contact page route
│   │   └── page.tsx
│   └── api/                     # API routes
│       └── route.ts
├── components/                   # Reusable UI components
│   ├── ui/                      # Basic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── sections/                # Page sections
│       ├── Hero.tsx
│       ├── Features.tsx
│       └── Testimonials.tsx
├── public/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── styles/                      # Additional stylesheets
│   └── components.css
├── lib/                         # Utility functions
│   └── utils.ts
├── types/                       # TypeScript type definitions
│   └── index.ts
└── package.json
```

### Key Directories

- **`/app`** - Contains all pages and layouts using Next.js App Router
- **`/components`** - Reusable React components organized by type
- **`/public`** - Static files served directly by the web server
- **`/styles`** - CSS files and styling resources
- **`/lib`** - Utility functions and shared logic
- **`/types`** - TypeScript type definitions

### Routing Structure

- **`/`** - Homepage (app/page.tsx)
- **`/about`** - About page (app/about/page.tsx)
- **`/contact`** - Contact page (app/contact/page.tsx)
- **`/api/*`** - API endpoints (app/api/*/route.ts)

### Component Organization

- **UI Components**: Basic, reusable components (buttons, cards, modals)
- **Layout Components**: Navigation, headers, footers
- **Section Components**: Larger page sections (hero, features, testimonials)
