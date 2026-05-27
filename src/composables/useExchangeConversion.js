import { computed } from 'vue';
import { useExchangeRateStore } from '@/stores/exchangeRateStore';

export const useExchangeConversion = () => {
  const store = useExchangeRateStore();

  const baseCurrency = computed(() => store.baseCurrency);
  const amount = computed(() => store.amount);

  const getConversionRate = (targetCurrency) => {
    if (!store.rates?.conversion_rates) return 0;

    const baseRate = store.rates.conversion_rates[baseCurrency.value];
    const targetRate = store.rates.conversion_rates[targetCurrency];

    if (!baseRate || !targetRate) return 0;
    return targetRate / baseRate;
  };

  const convertAmount = (targetCurrency) => {
    const rate = getConversionRate(targetCurrency);
    return (rate * store.amount).toFixed(2);
  };

  const setBaseCurrency = (currency) => {
    store.setBaseCurrency(currency);
    store.setAmount(100);
  };

  const setAmount = (value) => {
    store.setAmount(value);
  };

  return {
    amount,
    baseCurrency,
    convertAmount,
    setBaseCurrency,
    setAmount,
    getConversionRate
  };
};
