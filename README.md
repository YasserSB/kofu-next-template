# Kofu Next Template

It is project template for `NextJS` projects

## Code Convention

### Name Convention

- Variables/Constants should named with `camelCase`.
- Types should named with `PascalCase`.
- Boolean variable should have `is` or `has` e.g. `isLogin` or `hasSpacesuit`.
- Write code in english.
- Name based on function

### Style Guide

- Use type inference.
- Use yarn for manage dependencies.
- Use [AirBNB styles](https://github.com/airbnb/javascript).
- Removing unused code.
- Use atomic design.
- Use named export on Constants/Variable/Components.
- Dont use slash at end of url in env for concistency.
- Use internationalization for string UI.

### Indexing

Index from 0 to +50 with step 10 (from tailwind)

- 0 for base index
- 10 for sticky element index (header / sidebar)
- 20 for modal overlay
- 30 for content modal
- 40 for toaster / notification
- 50 for verbose up important element

## How to run

1. Open terminal an type: `yarn`.
2. Copy `.env.example` to `.env` or `.env.local`.
3. After that:
   - run `yarn dev` for local development or,
   - run `yarn build` then `yarn start` for instant production or,
   - run `docker compose -f docker-compose.dev.yml up --build -d` for docker development (available hot reload) or,
   - run `docker compose -f docker-compose.prod.yml up --build -d` for docker production.

## Appendix

- Node version: v22.15.0
