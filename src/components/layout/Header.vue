<template>
  <header class="app-header">
    <div class="header-content">
      <h1>Taux de change · mis à jour toutes les heures</h1>
      <p class="subtitle">Exchange rates · refreshed every hour</p>
      <hr>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.app-header {
  width: 100%;
  padding: 16px 0 12px 0;
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

hr {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 12px 0 0 0;
}
</style>
