<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <ExchangeRate />
      <ExchangeRateCards />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import ExchangeRate from '@/components/exchangeRate/ExchangeRate.vue';
import ExchangeRateCards from '@/components/exchangeRate/ExchangeRateCards.vue';

export default {
  components: {
    Header,
    Footer,
    ExchangeRate,
    ExchangeRateCards
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-inline: 8vw;
}
</style>
