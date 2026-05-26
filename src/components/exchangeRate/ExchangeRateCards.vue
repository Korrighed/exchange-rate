<template>
  <div v-if="displayedRates">
    <div class="amount-input">
      <label>Montant XPF :</label>
      <input v-model.number="amount" type="number" min="1">
    </div>
    <div class="cards-container">
      <div v-for="(rate, code) in displayedRates" :key="code" class="card">
      <div class="card-header">
        <img :src="getFlagUrl(code)" :alt="code" class="flag">
        <h3>{{ currencies[code].name }}</h3>
      </div>
      <div class="card-code">{{ code }}</div>
      <div class="card-rate">{{ (rate * amount).toFixed(2) }}</div>
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
      AUD: { name: 'Dollar australien', country: 'au' },
      NZD: { name: 'Dollar néo-zélandais', country: 'nz' },
      CAD: { name: 'Dollar canadien', country: 'ca' },
      USD: { name: 'Dollar US', country: 'us' },
      FJD: { name: 'Dollar fidjien', country: 'fj' },
      SGD: { name: 'Dollar de Singapour', country: 'sg' },
      THB: { name: 'Baht thaïlandais', country: 'th' },
      CHF: { name: 'Franc suisse', country: 'ch' },
      EUR: { name: 'Euro', country: 'eu' },
      GBP: { name: 'Livre sterling', country: 'gb' },
      JPY: { name: 'Yen', country: 'jp' },
      VUV: { name: 'Vatu (Vanuatu)', country: 'vu' }
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
.amount-input {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.amount-input label {
  font-weight: 600;
}

.amount-input input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 100px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.flag {
  width: 40px;
  height: 30px;
  border-radius: 4px;
}

.card-header h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.card-code {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.card-rate {
  font-size: 18px;
  font-weight: bold;
  color: #42b983;
}
</style>
