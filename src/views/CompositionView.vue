<template>
  <div>
    <ExchangeRate />
    <ExchangeRateCards />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ExchangeRate from '@/components/exchangeRate/ExchangeRate.vue';
import ExchangeRateCards from '@/components/exchangeRate/ExchangeRateCards.vue';

export default defineComponent({
  name: 'CompositionView',
  components: { ExchangeRate, ExchangeRateCards }
});
</script>

