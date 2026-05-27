<template>
  <div class="card" @click="$emit('select')">
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
  setup() {
    return { currencies, getFlagUrl };
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

.card-content {
  height: 5vh;
  width: 20vw;
}

.flag {
  width: 5vw;
  height: 8vh;
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
