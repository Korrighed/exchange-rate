import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useExchangeRateStore = defineStore('exchangeRate', () => {
  const rates = ref(null);
  const baseCurrency = ref('XPF');
  const amount = ref(100);
  const isLoading = ref(false);
  const lastUpdated = ref(null);

  const setRates = (data) => {
    rates.value = data;
  };

  const setBaseCurrency = (currency) => {
    baseCurrency.value = currency;
  };

  const setAmount = (value) => {
    amount.value = Math.max(0, value);
  };

  const setIsLoading = (loading) => {
    isLoading.value = loading;
  };

  const setLastUpdated = (date) => {
    lastUpdated.value = date;
  };

  return { rates, setRates, baseCurrency, setBaseCurrency, amount, setAmount, isLoading, setIsLoading, lastUpdated, setLastUpdated };
});
