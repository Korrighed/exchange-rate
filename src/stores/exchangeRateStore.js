import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useExchangeRateStore = defineStore('exchangeRate', () => {
  const rates = ref(null);

  const setRates = (data) => {
    rates.value = data;
  };

  return { rates, setRates };
});
