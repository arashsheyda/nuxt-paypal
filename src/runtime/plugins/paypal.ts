import { defineNuxtPlugin } from '#imports'
import { loadScript } from '@paypal/paypal-js'
import type { PayPalNamespace } from '@paypal/paypal-js'


export default defineNuxtPlugin(async (nuxtApp) => {
  let paypal: PayPalNamespace |  null =  null

  const config  = nuxtApp.$config.public

  try {
    paypal = await loadScript({
      ...config.paypal,
    })
  } catch (error) {
      console.error('Failed to load the PayPal SDK script', error)
  }

  return {
    provide: {
      paypal,
    },
  }
})
