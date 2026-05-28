<template>
  <div class="card" @click="selectCurrency" :class="{ active: isActive }">
    <img :src="getFlagUrl(code)" :alt="code" class="flag">
    <div class="card-content">
      <div class="card-header">
        <h3>{{ currencies[code].name }}</h3>
        <div class="card-code">{{ currencies[code].en }}</div>
      </div>
      <div class="card-rate">
        <div class="rate-value">{{ rate }}</div>
        <div class="rate-code">{{ code }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { currencies, getFlagUrl } from '@/data/currencies';

export default {
  props: {
    code: {
      type: String,
      required: true
    },
    rate: {
      type: [String, Number],
      required: true
    }
  },
  emits: ['select'],
  setup(props, { emit }) {
    const isActive = ref(false);

    const selectCurrency = () => {
      isActive.value = true;
      emit('select');
      setTimeout(() => {
        isActive.value = false;
      }, 200);
    };

    return { currencies, getFlagUrl, isActive, selectCurrency };
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

@media (max-width: 767px) {
  .card.active {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
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
</style>
