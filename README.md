# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
pnpm run dev
```

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`

## Netlify

<https://developers.netlify.com/guides/how-to-deploy-remix-vite-to-netlify/>

## Styling

Configure Remix with StyleX

<https://www.youtube.com/watch?v=s2zKwtVXy7k>

You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

https://github.com/netlify/remix-compute/blob/main/docs/upgrading.md
