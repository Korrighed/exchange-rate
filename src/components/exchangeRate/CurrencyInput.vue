<template>
  <div class="amount-input-container">
    <div class="card" @click="$refs.amountInput?.focus()">
      <img :src="getFlagUrl(baseCurrency)" :alt="baseCurrency" class="flag">
      <div class="card-content">
        <div class="card-header">
          <h3>{{ currencies[baseCurrency].name }}</h3>
          <div class="card-code">{{ currencies[baseCurrency].en }}</div>
        </div>
        <div class="amount-input-wrapper">
          <input ref="amountInput" :value="amount" @input="setAmount($event.target.valueAsNumber)" type="number" min="1" class="amount-value" :disabled="isLoading">
          <span class="amount-currency">{{ baseCurrency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { currencies, getFlagUrl } from '@/data/currencies';
import { useExchangeConversion } from '@/composables/useExchangeConversion';
import { useExchangeRateStore } from '@/stores/exchangeRateStore';

export default {
  setup() {
    const store = useExchangeRateStore();
    const { amount, baseCurrency, setAmount } = useExchangeConversion();
    const isLoading = computed(() => store.isLoading);

    return {
      amount,
      baseCurrency,
      setAmount,
      isLoading,
      currencies,
      getFlagUrl
    };
  }
};
</script>

<style scoped>
.amount-input-container {
  display: flex;
  justify-content: center;
  margin-top: 0.5vh;
  margin-bottom: 5vh;
}

.amount-input-container .card {
  width: 100%;
  max-width: 600px;
  cursor: default;
}

.amount-input-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.amount-value {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
  flex: 1;
  min-width: 60px;
  background: white;
  text-align: right;
  box-sizing: border-box;
}

.amount-currency {
  font-size: 14px;
  color: #3a3a3a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

@media (max-width: 767px) {
  .amount-input-container .card {
    max-width: 100%;
  }

  .amount-value {
    flex: 0;
    width: 80px;
  }

  .amount-input-container {
    margin-bottom: 40px;
    margin-top: 20px;
  }
}
</style>
