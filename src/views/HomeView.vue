<template>
  <div class="home">
    <ExchangeRate />
    <h2>Taux de change XPF</h2>
    <ExchangeRateCards />
  </div>
</template>

<script>
import { useExchangeRateStore } from '@/stores/exchangeRateStore';
import { watch } from 'vue';
import ExchangeRate from '@/components/exchangeRate/ExchangeRate.vue';
import ExchangeRateCards from '@/components/exchangeRate/ExchangeRateCards.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    ExchangeRate,
    ExchangeRateCards,
    HelloWorld
  },
  setup() {
    return {};
  }
};
</script>
