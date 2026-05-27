<template></template>

<script>
import { useExchangeRateStore } from '@/stores/exchangeRateStore';
import { onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const store = useExchangeRateStore();
    let interval;

    const fetchExchangeRates = async () => {
      store.setIsLoading(true);
      try {
        const response = await fetch(
          '/.netlify/functions/getExchangeRates?currency=XPF'
        );
        if (!response.ok) throw new Error('Erreur API');
        const data = await response.json();
        if (data.error) {
          console.error('Erreur API:', data.error);
          return;
        }
        store.setRates(data);
      } catch (err) {
        console.error('Erreur fetch:', err);
      } finally {
        store.setIsLoading(false);
      }
    };

    onMounted(() => {
      fetchExchangeRates();
      interval = setInterval(fetchExchangeRates, 60 * 60 * 1000);
    });

    onUnmounted(() => clearInterval(interval));

    return {};
  }
};
</script>
