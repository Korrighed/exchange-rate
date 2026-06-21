<template>
  <header class="app-header">
    <div class="header-content">
      <h1>Taux de change · mis à jour toutes les heures</h1>
      <p class="subtitle">Exchange rates · refreshed every hour</p>
      <p v-if="lastUpdated" class="last-updated">Dernière mise à jour · Last updated : {{ formattedDate }}</p>
      <hr>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useExchangeRateStore } from '@/stores/exchangeRateStore';

export default {
  name: 'Header',
  setup() {
    const store = useExchangeRateStore();
    const lastUpdated = computed(() => store.lastUpdated);
    const formattedDate = computed(() => {
      if (!lastUpdated.value) return '';
      return new Date(lastUpdated.value).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    });
    return { lastUpdated, formattedDate };
  }
};
</script>

<style scoped>
.app-header {
  width: 100%;
  padding: 5px 0 3px 0;
  flex-shrink: 0;
}

.header-content {
  margin-inline: 8vw;
}

h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: white;
}

.subtitle {
  margin: 4px 0 0 0;
  font-size: 13px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
}

.last-updated {
  margin: 4px 0 0 0;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
}

hr {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 5px 0px 5px 0;
}

.api-nav {
  display: flex;
  gap: 16px;
  padding: 6px 0 4px;
}

.nav-link {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.nav-link:hover {
  color: rgba(255, 255, 255, 0.85);
  border-color: rgba(255, 255, 255, 0.3);
}

.nav-link.router-link-active {
  color: white;
  border-color: rgba(255, 255, 255, 0.6);
}
</style>
