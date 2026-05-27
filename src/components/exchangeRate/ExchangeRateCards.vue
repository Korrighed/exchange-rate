<template>
  <div v-if="displayedRates">
    <div class="amount-input-container">
      <div class="card">
        <img src="/flags/nc.svg" alt="XPF" class="flag">
        <div class="card-content">
          <div class="card-header">
            <h3>Franc pacifique</h3>
            <div class="card-code">Pacific franc</div>
          </div>
          <div class="amount-input-wrapper">
            <input v-model.number="amount" type="number" min="1" class="amount-value">
            <span class="amount-currency">XPF</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cards-container">
      <div v-for="(rate, code) in displayedRates" :key="code" class="card">
        <img :src="getFlagUrl(code)" :alt="code" class="flag">
        <div class="card-content">
          <div class="card-header">
            <h3>{{ currencies[code].name }}</h3>
            <div class="card-code">{{ currencies[code].en }}</div>
          </div>
          <div class="card-rate">
            <div class="rate-value">{{ (rate * amount).toFixed(2) }}</div>
            <div class="rate-code">{{ code }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useExchangeRateStore } from '@/stores/exchangeRateStore';

export default {
  setup() {
    const store = useExchangeRateStore();
    const amount = ref(100);

    const currencies = {
      AUD: { name: 'Dollar australien', en: 'Australian Dollar', country: 'au' },
      NZD: { name: 'Dollar néo-zélandais', en: 'New Zealand Dollar', country: 'nz' },
      CAD: { name: 'Dollar canadien', en: 'Canadian Dollar', country: 'ca' },
      USD: { name: 'Dollar US', en: 'US Dollar', country: 'us' },
      FJD: { name: 'Dollar fidjien', en: 'Fijian Dollar', country: 'fj' },
      SGD: { name: 'Dollar de Singapour', en: 'Singapore Dollar', country: 'sg' },
      THB: { name: 'Baht thaïlandais', en: 'Thai Baht', country: 'th' },
      CHF: { name: 'Franc suisse', en: 'Swiss Franc', country: 'ch' },
      EUR: { name: 'Euro', en: 'Euro', country: 'eu' },
      GBP: { name: 'Livre sterling', en: 'British Pound', country: 'gb' },
      JPY: { name: 'Yen', en: 'Japanese Yen', country: 'jp' },
      VUV: { name: 'Vatu (Vanuatu)', en: 'Vanuatu Vatu', country: 'vu' }
    };

    const getFlagUrl = (code) => {
      const countryCode = currencies[code]?.country.toLowerCase();
      return `/flags/${countryCode}.svg`;
    };

    const displayedRates = computed(() => {
      if (!store.rates || !store.rates.conversion_rates) return null;

      const filtered = {};
      Object.keys(currencies).forEach(code => {
        if (store.rates.conversion_rates[code]) {
          filtered[code] = store.rates.conversion_rates[code];
        }
      });
      return filtered;
    });

    return { displayedRates, currencies, getFlagUrl, amount };
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

.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0;
}

.card {
  padding: 0;
  background: transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
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
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-code {
  font-size: 11px;
  color: #999;
  margin: 0;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  color: #42b983;
}

.rate-code {
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
}
</style>
