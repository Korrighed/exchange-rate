<template>
  <div>
    <p class="api-badge">Option API</p>

    <div class="amount-input-container">
      <div class="card" @click="$refs.amountInput?.focus()">
        <img :src="getFlagUrl(baseCurrency)" :alt="baseCurrency" class="flag">
        <div class="card-content">
          <div class="card-header">
            <h3>{{ currencies[baseCurrency].name }}</h3>
            <div class="card-code">{{ currencies[baseCurrency].en }}</div>
          </div>
          <div class="amount-input-wrapper">
            <input
              ref="amountInput"
              :value="amount"
              @input="handleAmountInput"
              type="number"
              min="1"
              class="amount-value"
              :disabled="isLoading"
            >
            <span class="amount-currency">{{ baseCurrency }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cards-container">
      <template v-if="isLoading">
        <div v-for="i in 4" :key="`sk-${i}`" class="card-skeleton"></div>
      </template>
      <template v-else>
        <div
          v-for="(rate, code) in displayedRates"
          :key="code"
          class="card"
          @click="handleSelectCurrency(code)"
        >
          <img :src="getFlagUrl(code)" :alt="code" class="flag">
          <div class="card-content">
            <div class="card-header">
              <h3>{{ currencies[code].name }}</h3>
              <div class="card-code">{{ currencies[code].en }}</div>
            </div>
            <div class="card-rate">
              <div class="rate-value">{{ convertAmount(code) }}</div>
              <div class="rate-code">{{ code }}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { useExchangeRateStore } from '@/stores/exchangeRateStore';
import { mapState, mapActions } from 'pinia';
import { currencies, getFlagUrl } from '@/data/currencies';

export default {
  name: 'OptionView',
  data() {
    return {
      _interval: null,
      currencies,
      getFlagUrl
    };
  },
  computed: {
    ...mapState(useExchangeRateStore, ['rates', 'baseCurrency', 'amount', 'isLoading']),
    displayedRates() {
      if (!this.rates?.conversion_rates) return {};
      const filtered = {};
      Object.keys(currencies).forEach(code => {
        if (this.rates.conversion_rates[code] && code !== this.baseCurrency) {
          filtered[code] = this.rates.conversion_rates[code];
        }
      });
      return filtered;
    }
  },
  methods: {
    ...mapActions(useExchangeRateStore, ['setRates', 'setBaseCurrency', 'setAmount', 'setIsLoading', 'setLastUpdated']),
    async fetchExchangeRates() {
      this.setIsLoading(true);
      try {
        const response = await fetch('/.netlify/functions/getExchangeRates?currency=XPF');
        if (!response.ok) throw new Error('Erreur API');
        const data = await response.json();
        if (data.error) { console.error('Erreur API:', data.error); return; }
        this.setRates(data);
        this.setLastUpdated(new Date());
      } catch (err) {
        console.error('Erreur fetch:', err);
      } finally {
        this.setIsLoading(false);
      }
    },
    convertAmount(targetCurrency) {
      if (!this.rates?.conversion_rates) return '0.00';
      const baseRate = this.rates.conversion_rates[this.baseCurrency];
      const targetRate = this.rates.conversion_rates[targetCurrency];
      if (!baseRate || !targetRate) return '0.00';
      return ((targetRate / baseRate) * this.amount).toFixed(2);
    },
    handleSelectCurrency(code) {
      this.setBaseCurrency(code);
      this.setAmount(100);
      if (window.innerWidth <= 767) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    handleAmountInput(event) {
      this.setAmount(event.target.valueAsNumber);
    }
  },
  mounted() {
    if (!this.rates) {
      this.fetchExchangeRates();
    }
    this._interval = setInterval(this.fetchExchangeRates, 60 * 60 * 1000);
  },
  beforeUnmount() {
    clearInterval(this._interval);
  }
};
</script>

<style scoped>
.api-badge {
  margin: 10px 0 0 0;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: right;
}

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
  color: black;
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

.cards-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 0;
}

.card-rate {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
  margin-left: auto;
}

.rate-value {
  font-size: 20px;
  font-weight: bold;
  color: #0431b4;
}

.rate-code {
  font-size: 14px;
  color: #3a3a3a;
  text-transform: uppercase;
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
</style>
