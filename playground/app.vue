<template>
  <main>
    <div id="paypal-checkout" />
  </main>
</template>

<script setup lang="ts">
import { usePaypalButton } from '../src/runtime/composables/usePaypal'

usePaypalButton({
  // element: '#paypal-checkout', => default
  onApprove: async (data, actions) => {
    try {
      const details = await actions.order?.capture();
      console.log('Payment completed successfully:', details);
    } catch (error) {
      console.error('Error capturing payment:', error);
    }
  },
})
</script>
