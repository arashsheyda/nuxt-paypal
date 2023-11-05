import { useNuxtApp } from '#imports'
import type { PayPalButtonsComponentOptions } from '@paypal/paypal-js'

interface BaseOptions {
   /**
   *  Render Element
   *
   * @default #paypal-checkout
   *
   */
  element?: string
}

export async function usePaypalButton(options?: BaseOptions & PayPalButtonsComponentOptions) {
  const nuxt = useNuxtApp()
  const { element, ...settings } = options || {}

  return await nuxt.$paypal?.Buttons(settings).render(element ?? '#paypal-checkout')
}
