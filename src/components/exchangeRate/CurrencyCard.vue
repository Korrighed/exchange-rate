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
  padding: 0;
  background: transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  cursor: pointer;
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
