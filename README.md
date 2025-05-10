# Kofu Next Template

It is project template for my `NextJS` projects

## Code Convention

### Name Convention

- Variables/Constants should named with `camelCase`.
- Types should named with `PascalCase`.
- Boolean variable should have `is` or `has` e.g. `isLogin` or `hasSpacesuit`.
- In english.
- Name base on function

### Style Guide

- Use type inference.
- Use [AirBNB styles](https://github.com/airbnb/javascript).
- Removing unused code.
- Use atomic design.
- Use named export on Constants/Variable.

## How to run

1. Open terminal an type: `yarn`.
2. Copy `.env.example` to `.env` or `.env.local`.
3. After that:
   - run `yarn dev` for local development or,
   - direct run production run `yarn build` then `yarn start` or,
   - run `docker compose -f docker-compose.dev.yml up --build -d` for docker development (available hot reload) or,
   - run `docker compose -f docker-compose.prod.yml up --build -d` for docker production.
