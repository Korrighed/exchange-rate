<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ExchangeRate />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-if="store.rates">
      <h3>Taux actuels (XPF)</h3>
      <p>Devise de base: {{ store.rates.base_code }}</p>
      <p>Dernière mise à jour: {{ store.rates.time_last_updated }}</p>
    </div>
  </div>
</template>

<script>
import { useExchangeRateStore } from '@/stores/exchangeRateStore';
import { watch } from 'vue';
import ExchangeRate from '@/components/exchangeRate/ExchangeRate.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    ExchangeRate,
    HelloWorld
  },
  setup() {
    const store = useExchangeRateStore();

    watch(() => store.rates, (newRates) => {
      if (newRates) {
        console.log('Taux reçus du store:', newRates);
      }
    });

    return { store };
  }
};
</script>
