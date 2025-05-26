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

## How to run

1. Open terminal an type: `yarn`.
2. Copy `.env.example` to `.env` or `.env.local`.
3. After that:
   - run `yarn dev` for local development or,
   - run `yarn build` then `yarn start` for instant production or,
   - run `docker compose -f docker-compose.dev.yml up --build -d` for docker development (available hot reload) or,
   - run `docker compose -f docker-compose.prod.yml up --build -d` for docker production.

## Appendix

Use Wisely
