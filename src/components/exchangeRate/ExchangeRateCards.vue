<template>
  <div v-if="displayedRates">
    <Transition name="fade" mode="out-in">
      <CurrencyInput :key="baseCurrency" />
    </Transition>
    <div class="cards-container">
      <CurrencyCard
        v-for="(rate, code) in displayedRates"
        :key="code"
        :code="code"
        :rate="convertAmount(code)"
        @select="setBaseCurrency(code)"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useExchangeRateStore } from '@/stores/exchangeRateStore';
import { useExchangeConversion } from '@/composables/useExchangeConversion';
import { currencies } from '@/data/currencies';
import CurrencyCard from './CurrencyCard.vue';
import CurrencyInput from './CurrencyInput.vue';

export default {
  components: {
    CurrencyCard,
    CurrencyInput
  },
  setup() {
    const store = useExchangeRateStore();
    const { convertAmount, setBaseCurrency, baseCurrency } = useExchangeConversion();

    const displayedRates = computed(() => {
      if (!store.rates?.conversion_rates) return null;

      const filtered = {};
      Object.keys(currencies).forEach(code => {
        if (store.rates.conversion_rates[code] && code !== baseCurrency.value) {
          filtered[code] = store.rates.conversion_rates[code];
        }
      });
      return filtered;
    });

    return { displayedRates, convertAmount, setBaseCurrency, baseCurrency };
  }
};
</script>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
