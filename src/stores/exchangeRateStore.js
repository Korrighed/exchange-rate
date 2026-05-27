import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useExchangeRateStore = defineStore('exchangeRate', () => {
  const rates = ref(null);
  const baseCurrency = ref('XPF');

  const setRates = (data) => {
    rates.value = data;
  };

  const setBaseCurrency = (currency) => {
    baseCurrency.value = currency;
  };

  return { rates, setRates, baseCurrency, setBaseCurrency };
});
