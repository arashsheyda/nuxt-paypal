<div style="display:flex;align-items:center;gap:10px">
    <img height="35" src="https://raw.githubusercontent.com/arashsheyda/nuxt-paypal/35f031801ff16bb937c02f1534eee0e06f1afabc/playground/public/logo.svg">
    <h1>Nuxt Paypal</h1>
</div>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module for simplifying the use of Paypal in your project.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/arashsheyda/nuxt-paypal?file=playground%2Fapp.vue)

## Features

- Easy Integration

## Quick Setup

1. Add `nuxt-paypal` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-paypal

# Using yarn
yarn add --dev nuxt-paypal

# Using npm
npm install --save-dev nuxt-paypal
```

2. Add `nuxt-paypal` to the `modules` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-paypal',
  ],

  paypal: {
    clientId: 'your_client_id',
  },
})
```

That's it! You can now use Nuxt Paypal in your Nuxt app ✨

## Configuration

just add `paypal` and configure it.
> By default `clientId` is configured to use the value of `PAYPAL_CLIENT_ID`. If no specific value is provided, it defaults to `test`.

```ts
export default defineNuxtConfig({
  
  paypal: {
    clientId: 'your_client_id',
    // ...options
  },

})
```

## Usage
`nuxt-paypal` has a `usePaypalButton` composable which you can see [the usage here](https://github.com/arashsheyda/nuxt-paypal/blob/main/playground/app.vue).

also you can find the paypal instance from nuxtApp as `$paypal`. example:

```vue
<script setup lang="ts">
const nuxt = useNuxtApp()

console.log(nuxt.$paypal?.version)
</script>
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-paypal/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-paypal

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-paypal.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-paypal

[license-src]: https://img.shields.io/npm/l/nuxt-paypal.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-paypal

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
