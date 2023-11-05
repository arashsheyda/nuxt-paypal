import { defineNuxtModule, addPlugin, createResolver, addImportsDir, logger } from '@nuxt/kit'
import { defu } from 'defu'

import type { PayPalScriptOptions } from '@paypal/paypal-js'

export interface ModuleOptions extends PayPalScriptOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-paypal',
    configKey: 'paypal'
  },
  defaults: {
    clientId: process.env.PAYPAL_CLIENT_ID as string,
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const config = nuxt.options.runtimeConfig

    if (!options.clientId) {
      logger.warn('using `test` as `paypal.clientId`. please set `paypal.clientId` in your `nuxt.config.ts`')
    }

    config.public = defu(config.public, {
      paypal: {
        ...options,
        clientId: options.clientId || 'test'
      }
    })

    addImportsDir(resolve('./runtime/composables'))

    addPlugin(resolve('./runtime/plugins/paypal'))
  }
})
