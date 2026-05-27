import { ref, computed } from 'vue';
import { useExchangeRateStore } from '@/stores/exchangeRateStore';

export const useExchangeConversion = () => {
  const store = useExchangeRateStore();
  const amount = ref(100);

  const baseCurrency = computed(() => store.baseCurrency);

  const getConversionRate = (targetCurrency) => {
    if (!store.rates?.conversion_rates) return 0;

    const baseRate = store.rates.conversion_rates[baseCurrency.value];
    const targetRate = store.rates.conversion_rates[targetCurrency];

    if (!baseRate || !targetRate) return 0;
    return targetRate / baseRate;
  };

  const convertAmount = (targetCurrency) => {
    const rate = getConversionRate(targetCurrency);
    return (rate * amount.value).toFixed(2);
  };

  const setBaseCurrency = (currency) => {
    store.setBaseCurrency(currency);
    amount.value = 100;
  };

  return {
    amount,
    baseCurrency,
    convertAmount,
    setBaseCurrency,
    getConversionRate
  };
};
