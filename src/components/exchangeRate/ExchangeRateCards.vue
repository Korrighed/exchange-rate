<template>
  <div v-if="displayedRates || isLoading">
    <Transition name="fade" mode="out-in">
      <CurrencyInput :key="baseCurrency" />
    </Transition>
    <div class="cards-container">
      <template v-if="isLoading">
        <div v-for="i in 4" :key="`skeleton-${i}`" class="card-skeleton"></div>
      </template>
      <template v-else>
        <CurrencyCard
          v-for="(rate, code) in displayedRates"
          :key="code"
          :code="code"
          :rate="convertAmount(code)"
          @select="setBaseCurrency(code)"
        />
      </template>
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

    const isLoading = computed(() => store.isLoading);

    const handleSelectCurrency = (code) => {
      setBaseCurrency(code);
      if (window.innerWidth <= 767) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    return { displayedRates, convertAmount, setBaseCurrency: handleSelectCurrency, baseCurrency, isLoading };
  }
};
</script>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 0;
}

@media (max-width: 767px) {
  .cards-container {
    gap: 35px;
    margin-bottom: 30px;
  }
}

@media (min-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  height: 120px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
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
