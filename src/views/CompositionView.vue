<template>
  <div>
    <p class="api-badge">Composition API</p>
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

<style scoped>
.api-badge {
  margin: 10px 0 0 0;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: right;
}
</style>
