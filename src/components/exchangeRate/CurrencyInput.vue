<template>
  <div class="amount-input-container">
    <div class="card">
      <img :src="getFlagUrl(baseCurrency)" :alt="baseCurrency" class="flag">
      <div class="card-content">
        <div class="card-header">
          <h3>{{ currencies[baseCurrency].name }}</h3>
          <div class="card-code">{{ currencies[baseCurrency].en }}</div>
        </div>
        <div class="amount-input-wrapper">
          <input v-model.number="amount" type="number" min="1" class="amount-value">
          <span class="amount-currency">{{ baseCurrency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currencies, getFlagUrl } from '@/data/currencies';
import { useExchangeConversion } from '@/composables/useExchangeConversion';

export default {
  setup() {
    const { amount, baseCurrency } = useExchangeConversion();

    return {
      amount,
      baseCurrency,
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
  margin-bottom: 30px;
}

.amount-input-container .card {
  width: 100%;
  max-width: 600px;
  padding: 0;
  background: transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
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
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  background: white;
  text-align: right;
}

.amount-currency {
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  border: 1px solid #ddd;
  padding: 10px 15px;
  height: 5vh;
  width: 20vw;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 200px;
}

.flag {
  width: 5vw;
  height: 8vh;
  border-radius: 3px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15), inset 0 0 1px rgba(0, 0, 0, 0.1);
}

.card-header h3 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #1a1a1a;
}

.card-code {
  font-size: 12px;
  color: #555;
  margin: 0;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.3px;
}
</style>
