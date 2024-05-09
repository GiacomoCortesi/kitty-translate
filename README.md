## KITTY TRANSLATE

Kitty Translate is an AI cat assistant and translation engine that allows cat-owners to better understand and communicate with their beloved felines.

Play with it live on [kitty translate demo](https://kitty-translate.vercel.app/)

It uses nextjs react framework and tailwind/flowbite for styling.

Cat translation offer two modes:

- base: leverage chat gpt API with a custom prompt
- supreme: leverage handcrafted fixed rules

Text to speech uses Hugging Face API.

Make sure to provide your own tokens in the .env configuration as shown in .env.example sample file.

The project uses:

- prettier for code formatting
- eslint for code linting
- husky for performing linting and formatting as a pre-commit hook

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
