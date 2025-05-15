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
   - run `yarn build` then `yarn start` for instant production or,
   - run `docker compose -f docker-compose.dev.yml up --build -d` for docker development (available hot reload) or,
   - run `docker compose -f docker-compose.prod.yml up --build -d` for docker production.

## Appendix

Clean Code — Uncle Bob (Robert C. Martin)

```
Back in the 80s, there was a company that made a really cool app, let's say it was called XYZ. The app was very popular among professionals, and many even bought and used it. Well, to retain users, the company had to improve the app's services. One of them is by adding some features. But what happened?

As time goes by, they create more and more features. And it turns out that many bugs began to appear that could not be resolved in the next release. The app often crashed and became slower than the previous version. Finally, the author of the book (Uncle Bob) witnessed how the XYZ application was discontinued and never used again. Soon the company went bankrupt.

20 years later, Uncle Bob met with one of the employees who made the XYZ application and asked what really happened. He replied that every time a feature was added, the code got worse and worse and became unmaintainable. It turns out that bad code can cause a company to go bankrupt.
```
