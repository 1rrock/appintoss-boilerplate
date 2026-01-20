# Project Architecture

## Overview

This is a **Next.js 15** project with a clean, scalable architecture that separates client and server code with domain-driven design principles.

## Tech Stack

- **Framework**: Next.js 15.5.9 (App Router)
- **React**: 18.3.1
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS (Shadcn removed for AppsInToss optimization)
- **State Management**:
  - Zustand (client state)
  - React Query (server state)
- **i18n**: next-intl (ko/en)
- **HTTP Client**: Axios
- **Testing**: Jest + React Testing Library
- **Component Documentation**: Storybook 9
- **Form Validation**: AJV (JSON Schema)

## Directory Structure

```
dyllo-next/
├── .storybook/              # Storybook configuration
│   ├── main.ts
│   └── preview.ts
│
├── public/                  # Static assets
│   ├── fonts/
│   └── images/
│
├── messages/                # i18n translation files
│   ├── en.json
│   └── ko.json
│
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── [locale]/        # Internationalized routes
│   │   │   ├── (auth)/      # Auth route group
│   │   │   │   ├── sign-in/
│   │   │   │   └── sign-up/
│   │   │   ├── (main)/      # Main app route group
│   │   │   │   └── dashboard/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── api/             # API routes
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Root page (redirects to locale)
│   │
│   ├── client/              # Client-side code
│   │   ├── domains/         # Feature domains
│   │   │   └── users/       # Users domain
│   │   │       ├── api/
│   │   │       │   ├── api.ts        # API client functions
│   │   │       │   ├── queries.ts    # React Query queries
│   │   │       │   ├── mutations.ts  # React Query mutations
│   │   │       │   └── index.ts
│   │   │       ├── components/
│   │   │       │   ├── user-card.tsx
│   │   │       │   ├── user-card.stories.tsx
│   │   │       │   └── index.ts
│   │   │       ├── hooks/
│   │   │       │   ├── use-user-actions.ts
│   │   │       │   └── index.ts
│   │   │       ├── store/
│   │   │       │   ├── user-store.ts  # Zustand store
│   │   │       │   └── index.ts
│   │   │       ├── types/
│   │   │       │   └── index.ts
│   │   │       ├── utils/
│   │   │       │   ├── helpers.ts
│   │   │       │   └── index.ts
│   │   │       └── index.ts  # Barrel export
│   │   │
│   │   └── shared/          # Shared client utilities
│   │       ├── components/  # Shared components
│   │       │   ├── header/
│   │       │   └── footer/
│   │       ├── ui/          # Shadcn UI components
│   │       │   ├── button.tsx
│   │       │   ├── input.tsx
│   │       │   ├── card.tsx
│   │       │   ├── avatar.tsx
│   │       │   └── index.ts
│   │       ├── config/
│   │       │   ├── site.ts
│   │       │   └── index.ts
│   │       ├── constants/
│   │       │   ├── routes.ts
│   │       │   └── index.ts
│   │       ├── hooks/
│   │       │   ├── use-debounce.ts
│   │       │   └── index.ts
│   │       ├── libs/
│   │       │   ├── axios.ts         # Axios instance
│   │       │   ├── query-client.ts  # React Query client
│   │       │   ├── query-keys.ts    # Query key factory
│   │       │   └── index.ts
│   │       ├── providers/
│   │       │   ├── app-providers.tsx
│   │       │   ├── theme-provider.tsx
│   │       │   ├── query-provider.tsx
│   │       │   └── index.ts
│   │       ├── stores/
│   │       │   ├── ui-store.ts
│   │       │   └── index.ts
│   │       ├── types/
│   │       │   ├── api.ts
│   │       │   └── index.ts
│   │       ├── utils/
│   │       │   ├── cn.ts            # classnames utility
│   │       │   └── index.ts
│   │       ├── navigation.ts        # next-intl navigation
│   │       └── index.ts
│   │
│   ├── server/              # Server-side code
│   │
│   ├── __tests__/           # Test files
│   │   ├── client/
│   │   │   └── domains/
│   │   └── server/
│   │
│   └── i18n.config.ts       # i18n configuration
│
├── .env.example             # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── components.json          # Shadcn UI configuration
├── i18n.ts                  # next-intl request configuration
├── jest.config.ts           # Jest configuration
├── jest.setup.ts            # Jest setup
├── middleware.ts            # Next.js middleware (i18n)
├── next.config.ts           # Next.js configuration
├── package.json
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Key Architecture Principles

### 1. **Client/Server Separation**

- **`src/client/`**: All client-side React code
- **`src/server/`**: All server-side code (future use)
- **`src/app/`**: Next.js App Router (routing only)

### 2. **Domain-Driven Design**

Each domain (e.g., `users`) follows a consistent structure:

```
domains/{domain}/
  ├── api/          # API layer (queries, mutations, client)
  ├── components/   # Domain-specific components
  ├── hooks/        # Domain-specific hooks
  ├── store/        # Domain state (Zustand)
  ├── types/        # TypeScript types
  ├── utils/        # Domain utilities
  └── index.ts      # Barrel exports
```

### 3. **Shared Module**

The `src/client/shared/` module contains:

- **UI components** (Shadcn UI)
- **Providers** (React Query, Theme)
- **Libs** (Axios, React Query setup)
- **Hooks** (reusable hooks)
- **Utils** (utility functions)
- **Config** (site configuration)
- **Constants** (routes, etc.)
- **Types** (shared types)
- **Stores** (global UI state)

### 4. **Path Aliases**

Configured in `tsconfig.json`:

```typescript
{
  "@/*": "./src/*",
  "@/client/*": "./src/client/*",
  "@/server/*": "./src/server/*",
  "@/domains/*": "./src/client/domains/*",
  "@/shared/*": "./src/client/shared/*",
  "@/ui/*": "./src/client/shared/ui/*"
}
```

### 5. **Internationalization (i18n)**

- **Supported locales**: `ko` (Korean), `en` (English)
- **Library**: `next-intl`
- **Routing**: `app/[locale]/` pattern
- **Middleware**: Automatic locale detection and redirection
- **Translation files**: `messages/{locale}.json`

### 6. **State Management Strategy**

- **Server state**: React Query (API data, caching, mutations)
- **Client state**: Zustand (UI state, user preferences)
- **Query keys**: Centralized with `@lukemorales/query-key-factory`

### 7. **Component Development**

- **UI library**: Shadcn UI (Radix UI primitives + Tailwind)
- **Storybook**: Component documentation and isolated development
- **Stories**: Co-located with components (`.stories.tsx`)

### 8. **Testing**

- **Unit tests**: Jest + React Testing Library
- **Test location**: `src/__tests__/` mirrors `src/` structure
- **Configuration**: `jest.config.ts`, `jest.setup.ts`

## Route Groups

Next.js route groups organize routes without affecting URL structure:

### (auth) - Authentication Routes

- `/[locale]/sign-in`
- `/[locale]/sign-up`
- Uses `(auth)/layout.tsx` for auth-specific layout

### (main) - Main Application Routes

- `/[locale]/dashboard`
- Uses `(main)/layout.tsx` for authenticated layout

## Adding a New Domain

To add a new domain (e.g., `products`):

1. Create domain structure:

```bash
mkdir -p src/client/domains/products/{api,components,hooks,store,types,utils}
```

2. Create `index.ts` barrel export:

```typescript
// src/client/domains/products/index.ts
export * from './types';
export * from './api';
export * from './store';
export * from './components';
export * from './hooks';
export * from './utils';
```

3. Follow the pattern:

- `api/`: API client, queries, mutations
- `components/`: Domain components + Storybook stories
- `hooks/`: Custom hooks
- `store/`: Zustand store (if needed)
- `types/`: TypeScript interfaces
- `utils/`: Helper functions

## Environment Variables

Create `.env.local` based on `.env.example`:

```bash
cp .env.example .env.local
```

## Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run test             # Run Jest tests
npm run test:watch       # Run Jest in watch mode
npm run storybook        # Start Storybook dev server
npm run build-storybook  # Build Storybook for production
```

## Best Practices

1. **Import from barrel exports**: Use `@/domains/users` instead of deep imports
2. **Co-locate stories**: Keep `.stories.tsx` files next to components
3. **Use path aliases**: Prefer `@/shared/ui` over relative imports
4. **Domain isolation**: Domains should not import from each other
5. **Shared code**: Put reusable code in `src/client/shared/`
6. **Type safety**: Leverage TypeScript strict mode
7. **Component composition**: Build UI with Shadcn components
8. **Server/Client boundary**: Mark client components with `'use client'`

## Migration Notes

If migrating to this architecture:

1. Move all client code to `src/client/`
2. Organize by domain under `src/client/domains/`
3. Extract shared code to `src/client/shared/`
4. Update imports to use path aliases
5. Ensure `'use client'` directives are at the top of client components
6. Move API routes to `src/app/api/`
