<template>
  <div id="app">
    <div class="title-section">
      <h1>Taux de change XPF (rafraîchis toutes les heures)</h1>
      <p class="subtitle">Exchange rates (refreshed every hour)</p>
    </div>
    <ExchangeRate />
    <ExchangeRateCards />
  </div>
</template>

<script>
import ExchangeRate from '@/components/exchangeRate/ExchangeRate.vue';
import ExchangeRateCards from '@/components/exchangeRate/ExchangeRateCards.vue';

export default {
  components: {
    ExchangeRate,
    ExchangeRateCards
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-inline: 8vw;
}

h1 {
  margin: 40px 0 0 0;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 1px;
}

.subtitle {
  margin: 8px 0 30px 0;
  font-size: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
}
</style>
